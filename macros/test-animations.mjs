import * as fs from "fs";
import * as path from "path";
import { getAllJsonFiles, sluggify } from "./helpers.mjs";

const PATH_START = "animations";
const PATH_START_BOOST = PATH_START.length + 1;
const SEGMENTS = {
  SYSTEM: 0,
  CATEGORY: 1,
  SPELL_TYPE: 2,
  FEAT_TYPE: 2,
  ATTACK_TYPE: 2,
  FEATURE_CLASS: 2,
  ITEM_TYPE: 2,
};
const CATEGORIES = {
  attacks: "Attacks",
  class_features: "Class Features",
  conditions: "Conditions",
  creature_actions: "Creature Actions",
  feats: "Feats",
  items: "Items",
  spells: "Spells",
};
function validateFileName({ path, name }) {
  const fileName = path
    .slice(path.indexOf(PATH_START) + PATH_START_BOOST)
    .split("\\")
    [-1].slice(0, -5);
  const slug = sluggify(name);
  if (slug !== fileName) {
    console.error(`- Invalid File name '${fileName}.json' should be 'slug'`);
  }
  return slug === fileName;
}

function validateNodes(data) {
  const errors = [];
  for (const node of data.nodes) {
    if (node.type === "file" && inputs?.file?.value?.includes("/")) {
      console.error(
        `- Non Sequencer DB Value '${inputs?.file?.value}' in ${data.name}`,
      );
      errors.push({
        id: data.name,
        error: `Non Sequencer DB Value '${inputs?.file?.value}'`,
      });
    }
  }
  return errors;
}

/**
 * Combine multiple animation JSON files into a single structure
 * @param {string} animationsDir - Directory containing animation JSON files
 * @param {string} baseFile - Path to write the combined output (optional)
 * @returns {Object} Combined animations object with {items: [], animations: []}
 */
function testAnimations(animationsDir = "./animations") {
  const errors = [];

  const jsonFiles = getAllJsonFiles(animationsDir);
  console.log(`Found ${jsonFiles.length} JSON files`);

  for (const filePath of jsonFiles) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(content);
      if (
        validateFileName({
          path: filePath,
          name: data.name,
        })
      ) {
        errors.push({ id: filePath, error: "Invalid File name" });
      }
      const nodeErrors = validateNodes(data);
      if (nodeErrors.length > 0) {
        errors.push(...nodeErrors);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  console.log(`\nChecked ${jsonFiles.length} files`);

  return errors;
}

const animationsDir = process.argv[2] || "./animations";

console.error(testAnimations(animationsDir));
