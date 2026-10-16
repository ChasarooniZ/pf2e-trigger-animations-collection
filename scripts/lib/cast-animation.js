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

const TRADITIONS = new Set([
  "spellcasting:arcane",
  "spellcasting:divine",
  "spellcasting:occult",
  "spellcasting:primal",
]);

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
    duration: 0,
    fadeOutDuration: 0,
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
      output.animFile = "jb2a.swirling_leaves.outburst.01.pink";
      output.filter = {
        hue: -90,
      };
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
      output.animFile = jb2aPatreon
        ? "jb2a.magic_signs.circle.02.divination.intro.yellow"
        : "jb2a.magic_signs.circle.02.divination.intro.blue";
      output.filter = jb2aPatreon ? {} : { hue: 180 };
      output.scale = 1;
      break;
    case "dream":
      output.animFile = "jb2a.swirling_sparkles.01.blue";
      output.scale = 4;
      break;
    case "earth":
      output.animFile =
        output.target && jb2aPatreon
          ? "jb2a.cast_generic.earth.side01.browngreen.0"
          : "jb2a.cast_generic.earth.01.browngreen.0";
      break;
    case "electricity":
      output.animFile = "jb2a.on_token_cast.initiate.002.instant.part01.blue";
      break;
    case "fire":
      output.animFile = output.target
        ? "jb2a.cast_generic.fire.side01.orange.0"
        : "jb2a.cast_generic.fire.01.orange.0";
      break;
    case "metal":
      break;
    case "plant":
      output.animFile = jb2aPatreon
        ? "jb2a.swirling_leaves.outburst.01.greenorange"
        : "jb2a.swirling_leaves.outburst.01.pink";
      output.filter = jb2aPatreon ? {} : { hue: 180 };
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
    case "death":
    case "void":
    case "unholy":
    case "curse":
      output.animFile = "jb2a.magic_signs.circle.02.necromancy.intro.green";
      output.scale = 1;
      break;
    case "water":
      output.animFile = "jb2a.cast_generic.water.02.blue.0";
      break;
    case "wood":
      output.animFile = "jb2a.aura_themed.01.orbit.complete.wood.01.green";
      output.duration = 2500;
      output.fadeOutDuration = 500;
      break;
    case "extradimensional":
      output.animFile = "jb2a.cast_shape.square.single01.blue";
      break;
    case "fear":
      //TODO add a fade out and duration FX, also scale in and out
      output.animFile = jb2aPatreon
        ? "jb2a.dodecahedron.skull.below.dark_greenpurple"
        : "jb2a.magic_signs.circle.02.illusion.intro.dark_purple";
      output.scale = 1;
      output.duration = 2000;
      output.fadeOutDuration = 500;
      break;
    case "illusion":
      output.animFile = "jb2a.magic_signs.circle.02.illusion.intro.purple";
      output.scale = 1;
      break;
    case "morph":
    case "polymorph":
      output.animFile = "jb2a.magic_signs.circle.02.transmutation.intro.yellow";
      output.scale = 1;
      break;
    case "spirit":
      output.animFile = "jb2a.on_token_cast.initiate.002.instant.part03.blue";
      output.filter = {
        hue: -110,
      };
      break;
    case "teleportation":
    case "force":
    case "spellcasting:arcane":
      output.animFile =
        "jb2a.on_token_cast.initiate.001.instant.combined.blue.0";
      break;
    case "mental":
    case "spellcasting:occult":
      output.animFile = "jb2a.markers.simple.001.complete.001.purple";
      break;
    case "spellcasting:primal":
      //TODO set duration on this + fadeout
      output.animFile = "jb2a.aura_themed.01.orbit.complete.nature.01.green";
      output.duration = 2500;
      output.fadeOutDuration = 500;
      break;
    case "light":
      output.animFile = output.target
        ? "jb2a.markers.light_orb.complete.blue"
        : "jb2a.markers.light.intro.blue";
      break;
    case "vitality":
    case "spellcasting:divine":
      output.animFile = "jb2a.cure_wounds.400px.blue";
      break;
    case "holy":
      output.animFile = "jb2a.sacred_flame.source.yellow";
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
    { type: "number", value: output.duration },
    { type: "number", value: output.fadeOutDuration },
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
