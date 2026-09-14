import { MODULE_ID } from "./module.js";

export async function addRequiredAnimationTriggers() {
  const list = await getTriggerData();
  triggerAnimations.api.requiredTriggerEngineTriggers.push(...list)
}

async function getTriggerData() {
  const path = "modules/pf2e-trigger-animations-trove/triggers.json";
  const triggers = await foundry.utils.fetchJsonWithTimeout(path);
  return (Array.isArray(triggers) ? triggers : [])
    .map((t) => ({ id: t.id, src: MODULE_ID }))
}
