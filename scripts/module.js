import { askToAddNewAnimationsDialog } from "./enableNewAnimations.js";
import { askToEnableNewTriggersDialog } from "./enableNewTriggers.js";
import { registerTriggerAnimationTemplates } from "./handleTemplates.js";
import { setupSettings } from "./settings.js";

export const MODULE_ID = "pf2e-trigger-animations-trove";

const triggerEngineTriggersPath = `modules/${MODULE_ID}/triggers.json`;

Hooks.once("triggerEngine.registerTriggers", (registerTriggers) => {
  registerTriggers("trigger-engine", "pf2e-trigger", triggerEngineTriggersPath);
});

Hooks.once("triggerAnimations.ready", async (api) => {
  registerTriggerAnimationTemplates();
  if (game.user.isGM) {
    await askToEnableNewTriggersDialog();
    askToAddNewAnimationsDialog();
  }
  // modifyTriggerAnimationTemplates();
});

Hooks.once("init", async function () {
  setupSettings();
});

Hooks.once("ready", async function () {
  registerPresets();
});
// function modifyTriggerAnimationTemplates() {
//   triggerAnimations.api.templates.attack.prefixes = [
//     "trove-attack",
//     "trove-damage",
//   ];
// }

function registerPresets() {
  Sequencer.Presets.add("troveSound", (sound, args) => {
    const radius =
      args?.radius ??
      Math.max(
        canvas?.scene?.width / canvas?.scene?.grid?.size,
        canvas?.scene?.height / canvas?.scene?.grid?.size,
      ) ??
      50;
    return sound
      .radius(radius)
      .alwaysForGMs(true)
      .panSound()
      .muffledEffect({ type: "lowpass", intensity: 4 })
      .volume(0.5);
  });
}
