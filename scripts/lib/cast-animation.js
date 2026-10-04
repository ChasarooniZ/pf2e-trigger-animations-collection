const RELEVANT_TRAITS = new Set([
  "acid",
  "air",
  "cold",
  "composition",
  "darkness",
  "divination",
  "dream",
  "earth",
  "electricity",
  "fire",
  "force",
  "holy",
  "metal",
  "plant",
  "poison",
  "shadow",
  "sleep",
  "sonic",
  "unholy",
  "vitality",
  "void",
  "water",
  "wood",
]);
const LESSER_TRAITS = new Set([
  "curse",
  "death",
  "detection",
  "extradimensional",
  "fear",
  "illusion",
  "light",
  "linguistic",
  "mental",
  "morph",
  "polymorph",
  "prediction",
  "scrying",
  "spirit",
  "teleportation",
]);
const SKIP_IF_TRAITS = new Set(["subtle"]);
// TODO add Ranking maybe?

const TRADITIONS = new Set(["arcane", "divine", "occult", "primal"]);

export function getCastSpellAnimationItems({
  actor,
  sources,
  targets,
  item,
  options,
  template,
}) {
  const jb2aPatreon = game.modules.get("jb2a_patreon")?.active;
  const output = {
    animFile: "",
    filter: "",
    animWait: null,
    scale: 2,
    target: getTargetPoint(targets, template),
    sfxFile: "",
    sfxDelay: null,
  };

  const trait =
    options.find((o) => RELEVANT_TRAITS.has(o)) ||
    options.find((o) => LESSER_TRAITS.has(o)) ||
    options.find((o) => TRADITIONS.has(o));

  switch (trait) {
    case "air":
      break;
    case "cold":
      output.animFile = jb2aPatreon ? "jb2a.cast_generic.ice.01.blue.0" : "";
      break;
    case "sonic":
    case "linguistic":
    case "composition":
      output.animFile =
        output.target && jb2aPatreon
          ? "jb2a.cast_generic.sound.side01.pinkteal.0"
          : "jb2a.cast_generic.sound.01.pinkteal.0";
      break;
    case "shadow":
    case "darkness":
      output.animFile = output.target
        ? "jb2a.cast_generic.fire.side01.orange.0"
        : "jb2a.cast_generic.fire.01.orange.0";
      output.filter = {
        brightness: -1,
      };
      break;
    case "scrying":
    case "prediction":
    case "detection":
    case "divination":
      break;
    case "dream":
      break;
    case "earth":
      output.animFile =
        output.target && jb2aPatreon
          ? "jb2a.cast_generic.earth.side01.browngreen.0"
          : "jb2a.cast_generic.earth.01.browngreen.0";
      break;
    case "electricity":
      break;
    case "fire":
      output.animFile = output.target
        ? "jb2a.cast_generic.fire.side01.orange.0"
        : "jb2a.cast_generic.fire.01.orange.0";
      break;
    case "force":
      break;
    case "metal":
      break;
    case "plant":
      break;
    case "acid":
    case "poison":
      output.animFile = "jb2a.on_token_cast.initiate.002.instant.part03.blue";
      output.filter = {
        hue: -110,
      };
      break;
    case "sleep":
      break;
    case "void":
    case "unholy":
      break;
    case "water":
      output.animFile = "jb2a.cast_generic.water.02.blue.0";
      break;
    case "wood":
      break;
    case "curse":
      break;
    case "death":
      break;
    case "extradimensional":
      break;
    case "fear":
      break;
    case "illusion":
      break;
    case "light":
      break;
    case "mental":
      break;
    case "morph":
      break;
    case "polymorph":
      break;
    case "spirit":
      break;
    case "teleportation":
      break;
    case "arcane":
      break;
    case "occult":
      break;
    case "primal":
      break;
    case "vitality":
    case "holy":
    case "divine":
      output.animFile = "jb2a.divine_smite.caster.blueyellow";
      break;
    default:
  }

  return [
    { type: "text", value: output.animFile },
    { type: "text", value: JSON.stringify(output.filter) },
    { type: "number", value: output.animWait },
    { type: "Point", value: output.target },
    { type: "text", value: output.sfxFile },
    { type: "number", value: output.sfxDelay },
    { type: "number", value: output.scale },
  ];
}

function getTargetPoint(targets, template) {
  if (template) {
    return template;
  } else if (targets?.length > 0) {
    return targets?.[0];
  }
  return null;
}
