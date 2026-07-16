import * as fs from "fs";
import * as path from "path";
import { getAllJsonFiles } from "./helpers.mjs";

const PATH_START = "animations";
const PATH_START_BOOST = PATH_START.length + 1;
const SEGMENTS = {
  SYSTEM: 0,
  CATEGORY: 1,
  SPELL_TYPE: 2,
  FEAT_TYPE: 2,
  ATTACK_TYPE: 2,
  FEATURE_CLASS: 2,
  EQUIPMENT_TYPE: 2,
  ATTACK_CATEGORY: 3,
  FEAT_CLASS: 3,
};
const CATEGORIES = {
  attacks: "Attacks",
  basic_actions: "Basic Actions",
  class_features: "Class Features",
  conditions: "Conditions",
  creature_actions: "Creature Actions",
  feats: "Feats",
  equipment: "Equipment",
  spells: "Spells",
  handlers: "Handlers",
};
const PRIORITY = {
  GROUP: -100,
  BASE_ITEM: -50,
};

const MODULE_TAG = "PF2e Trove";
function getTagsCategoryAndPriority({ path, originalTags, priority }) {
  const tags = new Set();
  let newPriority = priority;
  const pathSegments = path
    .slice(path.indexOf(PATH_START) + PATH_START_BOOST)
    .split(/[\\/]/);

  tags.add(MODULE_TAG);

  // System Tag
  const system = pathSegments[SEGMENTS.SYSTEM];
  tags.add(system);

  //Category
  const category =
    system === "handlers" ? "handlers" : pathSegments[SEGMENTS.CATEGORY];
  tags.add(category);
  const categoryName = CATEGORIES[category];

  switch (category) {
    case "attacks":
      tags.add(pathSegments[SEGMENTS.ATTACK_TYPE]);
      const attackCategory = pathSegments?.[ATTACK_CATEGORY];
      if (attackCategory) {
        if (attackCategory === "group") {
          newPriority = PRIORITY.GROUP;
        } else if (attackCategory === "base") {
          newPriority = PRIORITY.BASE_ITEM;
        }
      }
      break;
    case "class_features":
      tags.add(pathSegments[SEGMENTS.FEATURE_CLASS]);
      break;
    case "feats":
      const featType = pathSegments[SEGMENTS.FEAT_TYPE];
      tags.add(featType);
      if (featType === "class") {
        const featClass = pathSegments[SEGMENTS.FEAT_CLASS];
        if (featClass !== "_shared") {
          tags.add(featClass);
        }
      }
      break;
    case "equipment":
      tags.add(pathSegments[SEGMENTS.EQUIPMENT_TYPE]);
    case "spells":
      tags.add(pathSegments[SEGMENTS.SPELL_TYPE]);
      break;
    default:
      break;
  }

  return {
    tags: Array.from(tags),
    category: categoryName,
    priority: newPriority,
  };
}

function getTriggerTags(animation) {
  const tags = new Set();
  const animationEvent = animation?.nodes?.find(
    (node) => node?.type === "animation-event",
  );
  if (animationEvent) {
    const triggers = animationEvent?.inputs?.name?.value
      ?.split(",")
      ?.map((t) => t?.trim());
    for (const trigger of triggers) {
      let tag;
      const condition = trigger.substring(0, trigger.indexOf(":"));
      switch (condition) {
        case "action":
          tag = "action";
          break;
        case "attack":
        case "trove-attack":
          tag = "attack-roll";
          break;
        case "check":
          tag = "check";
          break;
        case "condition":
          tag = "condition-granted";
          break;
        case "damage":
        case "trove-damage":
        case "persistent":
          tag = "damage-taken";
          break;
        case "effect":
          tag = "effect-granted";
          break;
        case "damage-roll":
          tag = "damage-roll";
          break;
        case "healing":
        case "trove-healing":
          tag = "healing-taken";
          break;
        case "negated":
        case "trove-negated":
          tag = "damage-negated";
          break;
        case "update":
          tag = "update";
          break;
        case "reload":
          tag = "reload";
          break;
        case "template":
          tag = "template";
          break;
        default:
          // handle unmatched case if needed
          break;
      }

      if (tag && !tags.has(tag)) {
        tags.add(tag);
      }
    }
  }
  return Array.from(tags);
}

/**
 * Combine multiple animation JSON files into a single structure
 * @param {string} animationsDir - Directory containing animation JSON files
 * @param {string} baseFile - Path to write the combined output (optional)
 * @returns {Object} Combined animations object with {items: [], animations: []}
 */
function combineAnimations(animationsDir = "./animations", baseFile = null) {
  const base = [];

  const jsonFiles = getAllJsonFiles(animationsDir);
  console.log(`Found ${jsonFiles.length} JSON files`);

  for (const filePath of jsonFiles) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(content);
      const { tags, category, priority } = getTagsCategoryAndPriority({
        path: filePath,
        originalTags: data?.tags ?? [],
        triggerTags: getTriggerTags(data) ?? [],
        priority: data?.priority,
      });

      data.tags = tags;
      data.folder = category;
      data.priority = priority;
      // If the file itself is a animation object (has id, nodes, etc.)
      if (data.nodes && data.tags) {
        base.push(data);
        console.log(`+ ${filePath}`);
      } else {
        console.log(`- (SKIPPED) ${filePath}`);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  console.log(`\nCombined ${base.length} files`);

  if (baseFile) {
    const baseOutputDir = path.dirname(baseFile);
    if (!fs.existsSync(baseOutputDir)) {
      fs.mkdirSync(baseOutputDir, { recursive: true });
    }

    fs.writeFileSync(baseFile, JSON.stringify(base, null, 0));
    console.log(`Written to ${baseFile}`);
  }

  return base;
}

const animationsDir = process.argv[2] || "./animations";
const baseFile = process.argv[3] || "./animations.json";

combineAnimations(animationsDir, baseFile);
