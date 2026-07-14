import { askToAddNewAnimationsDialog } from "./enableNewAnimations.js";
import { askToEnableNewTriggersDialog } from "./enableNewTriggers.js";
import { setupSettings } from "./settings.js";

export const MODULE_ID = "pf2e-trigger-animations-trove";

const triggerEngineTriggersPath = `modules/${MODULE_ID}/triggers.json`;

Hooks.once("triggerEngine.registerTriggers", (registerTriggers) => {
  registerTriggers("trigger-engine", "pf2e-trigger", triggerEngineTriggersPath);
});

Hooks.once("triggerAnimations.ready", async (api) => {
  if (game.user.isGM) {
    await askToEnableNewTriggersDialog();
    askToAddNewAnimationsDialog();
  }
  // modifyTriggerAnimationTemplates();
});

Hooks.once("init", async function () {
  setupSettings();
});

Hooks.once("ready", async function () {});
// function modifyTriggerAnimationTemplates() {
//   triggerAnimations.api.templates.attack.prefixes = [
//     "trove-attack",
//     "trove-damage",
//   ];
// }
