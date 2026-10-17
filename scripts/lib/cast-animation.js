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
      output.sfxFile = "ggg-sfx.magic.air.cast.general.05.01";
      break;
    case "cold":
      output.animFile = "jb2a.aura_themed.01.inward.complete.cold.01.blue";
      output.duration = 2500;
      output.fadeOutDuration = 500;
      output.sfxFile = "ggg-sfx.magic.ice.cast.general.03";
      break;
    case "sonic":
    case "linguistic":
    case "composition":
      output.animFile =
        output.target && jb2aPatreon
          ? "jb2a.cast_generic.sound.side01.pinkteal.0"
          : "jb2a.cast_generic.sound.01.pinkteal.0";
      output.sfxFile = "ggg-sfx.magic.arcane.cast.astral.01";
      break;
    case "shadow":
    case "darkness":
      output.animFile = output.target
        ? "jb2a.cast_generic.fire.side01.orange.0"
        : "jb2a.cast_generic.fire.01.orange.0";
      output.filter = {
        brightness: -1,
      };
      output.sfxFile = "ggg-sfx.magic.occult.cast.ghostly.01";
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
      output.sfxFile = "ggg-sfx.magic.arcane.surge.ethereal.01";
      break;
    case "dream":
      output.animFile = "jb2a.swirling_sparkles.01.blue";
      output.scale = 4;
      output.sfxFile = "ggg-sfx.magic.misc.fairy.twinkle.01";
      output.sfxDelay = 1800;
      break;
    case "earth":
      output.animFile =
        output.target && jb2aPatreon
          ? "jb2a.cast_generic.earth.side01.browngreen.0"
          : "jb2a.cast_generic.earth.01.browngreen.0";
      output.sfxFile = "ggg-sfx.magic.earth.cast.general.02";
      break;
    case "electricity":
      output.animFile = "jb2a.on_token_cast.initiate.002.instant.part01.blue";
      output.sfxFile = "ggg-sfx.magic.electricity.cast.general.01.02";
      break;
    case "fire":
      output.animFile = output.target
        ? "jb2a.cast_generic.fire.side01.orange.0"
        : "jb2a.cast_generic.fire.01.orange.0";
      output.sfxFile = "ggg-sfx.magic.fire.cast.general.01";
      break;
    case "metal":
      output.animFile = "jb2a.aura_themed.01.orbit.complete.metal.01.grey";
      output.duration = 2500;
      output.fadeOutDuration = 500;
      output.sfxFile = "ggg-sfx.magic.metal.impact.spring.01.04";
      break;
    case "plant":
      output.animFile = jb2aPatreon
        ? "jb2a.swirling_leaves.outburst.01.greenorange"
        : "jb2a.swirling_leaves.outburst.01.pink";
      output.filter = jb2aPatreon ? {} : { hue: 180 };
      output.sfxFile = "ggg-sfx.magic.primal.cast.general.04";
      break;
    case "acid":
    case "poison":
      output.animFile = "jb2a.on_token_cast.initiate.002.instant.part03.blue";
      output.filter = {
        hue: -110,
      };
      output.sfxFile = "ggg-sfx.magic.acid.cast.general.02";
      break;
    case "sleep":
      break;
    case "death":
    case "void":
    case "unholy":
    case "curse":
      output.animFile = "jb2a.magic_signs.circle.02.necromancy.intro.green";
      output.scale = 1;
      output.sfxFile = "ggg-sfx.magic.occult.cast.general.02";
      break;
    case "water":
      output.animFile = "jb2a.cast_generic.water.02.blue.0";
      output.sfxFile = "ggg-sfx.magic.water.cast.general.01.02";
      break;
    case "wood":
      output.animFile = "jb2a.aura_themed.01.orbit.complete.wood.01.green";
      output.duration = 2500;
      output.fadeOutDuration = 500;
      output.sfxFile = "ggg-sfx.magic.primal.cast.general.04";
      break;
    case "extradimensional":
      output.animFile = "jb2a.cast_shape.square.single01.blue";
      output.sfxFile = "ggg-sfx.magic.arcane.cast.ripple.01.04";
      break;
    case "fear":
      //TODO add a fade out and duration FX, also scale in and out
      output.animFile = jb2aPatreon
        ? "jb2a.dodecahedron.skull.below.dark_greenpurple"
        : "jb2a.magic_signs.circle.02.illusion.intro.dark_purple";
      output.scale = 1;
      if (jb2aPatreon) {
        output.duration = 2000;
        output.fadeOutDuration = 500;
      }
      output.sfxFile = "ggg-sfx.magic.occult.cast.fear.02.01";
      break;
    case "illusion":
      output.animFile = "jb2a.magic_signs.circle.02.illusion.intro.purple";
      output.scale = 1;
      output.sfxFile = "ggg-sfx.magic.arcane.buff.general.03";
      break;
    case "morph":
    case "polymorph":
      output.animFile = "jb2a.magic_signs.circle.02.transmutation.intro.yellow";
      output.scale = 1;
      output.sfxFile = "ggg-sfx.magic.occult.cast.general.06.01";
      break;
    case "spirit":
      output.animFile = "jb2a.on_token_cast.initiate.002.instant.part03.blue";
      output.filter = {
        hue: -110,
      };
      output.sfxFile = "ggg-sfx.magic.occult.cast.ghostly.01";
      break;
    case "teleportation":
    case "force":
    case "spellcasting:arcane":
      output.animFile =
        "jb2a.on_token_cast.initiate.001.instant.combined.blue.0";
      output.sfxFile = "ggg-sfx.magic.arcane.cast.general.03";
      break;
    case "mental":
    case "spellcasting:occult":
      output.animFile = "jb2a.markers.simple.001.complete.001.purple";
      output.sfxFile = "ggg-sfx.magic.occult.cast.general.02";
      break;
    case "spellcasting:primal":
      output.animFile = "jb2a.aura_themed.01.orbit.complete.nature.01.green";
      output.duration = 2500;
      output.fadeOutDuration = 500;
      output.sfxFile = "ggg-sfx.magic.primal.cast.general.04";
      break;
    case "light":
      output.animFile = output.target
        ? "jb2a.markers.light_orb.complete.blue"
        : "jb2a.markers.light.intro.blue";
      output.sfxFile = "ggg-sfx.magic.divine.light.01";
      break;
    case "vitality":
    case "spellcasting:divine":
      output.animFile = "jb2a.cure_wounds.400px.blue";
      output.sfxFile = "ggg-sfx.magic.divine.cast.general.02";
      break;
    case "holy":
      output.animFile = "jb2a.sacred_flame.source.yellow";
      output.sfxFile = "ggg-sfx.magic.divine.cast.shimmer.01";
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
