import { TEMPLATES } from "./const/templates.js";

export function registerTriggerAnimationTemplates() {
  templates.forEach((t) => triggerAnimations.api.registerTemplate(t));
}

const rid = () => foundry.utils.randomID();
const ID_REGEX = /\b[A-Za-z0-9]{16}\b/g;
const PLACEHOLDER_TRIGGER_NAMES = "placeholder-trigger-names";

const templates = [
  {
    id: "trove-melee-attack",
    label: "Trove: Melee Attack",
    hint: "Effect on the source, pointed to the target compatible with Trigger Animation Trove (PF2e / SF2e).",
    prefixes: ["attack", "damage"],
    build: (ctx) => {
      return createAnimation({ templateString: TEMPLATES.ATTACK.MELEE, ctx });
    },
  },
  {
    id: "trove-ranged-attack",
    label: "Trove: Ranged Attack",
    hint: "Effect on the source, stretched to the target compatible with Trigger Animation Trove (PF2e / SF2e).",
    prefixes: ["attack", "damage"],
    build: (ctx) => {
      return createAnimation({ templateString: TEMPLATES.ATTACK.RANGED, ctx });
    },
  },
  {
    id: "trove-effect-granted",
    label: "Trove: Effect Granted",
    hint: "Effect on the source compatible with Trigger Animation Trove (PF2e / SF2e).",
    prefixes: ["effect"],
    build: (ctx) => {
      return createAnimation({
        templateString: TEMPLATES.EFFECTS.GENERAL,
        ctx,
      });
    },
  },
  {
    id: "trove-template-bursts-emanations",
    label: "Trove: Template (Bursts & Emanations)",
    hint: "Effect on the template compatible with Trigger Animation Trove (PF2e / SF2e).",
    prefixes: ["template"],
    build: (ctx) => {
      return createAnimation({
        templateString: TEMPLATES.TEMPLATES.BURSTS_EMANATIONS,
        ctx,
      });
    },
  },
  {
    id: "trove-template-cones-lines",
    label: "Trove: Template (Cones & Lines)",
    hint: "Effect on the template compatible with Trigger Animation Trove (PF2e / SF2e).",
    prefixes: ["template"],
    build: (ctx) => {
      return createAnimation({
        templateString: TEMPLATES.TEMPLATES.CONES_LINES,
        ctx,
      });
    },
  },
];

function createAnimation({ templateString, ctx }) {
  let dataString = templateString;
  const ids = dataString.match(ID_REGEX);
  ids.forEach((id) => {
    dataString = dataString.replaceAll(id, rid());
  });
  const triggerNames = getTriggerNames(ctx.triggerNames);
  ctx.triggerNames = triggerNames;

  dataString = dataString.replace(
    PLACEHOLDER_TRIGGER_NAMES,
    triggerNames.join(", "),
  );

  const data = JSON.parse(dataString);

  return buildTrigger({
    ctx,
    nodes: data?.nodes,
    variables: data?.variables ?? {},
  });
}

function getTriggerNames(triggerNames) {
  return triggerNames.map((name) => {
    return name.replace(
      /attack:|damage:|healing:|negated:/g,
      (txt) => "trove-" + txt,
    );
  });
}

function buildTrigger({ ctx, nodes, variables = {} }) {
  return {
    id: rid(),
    name: ctx.label,
    folder: ctx.folder ?? "",
    priority: ctx.priority ?? 0,
    tags: ctx.tags ?? [],
    description: `Generated from ${ctx.label} (${ctx.uuid}). Trigger: ${ctx.triggerNames.join(",")}`,
    nodes,
    variables,
  };
}
