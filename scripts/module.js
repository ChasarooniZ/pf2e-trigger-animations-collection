import { askToAddNewAnimationsDialog } from "./enableNewAnimations.js";
import { setupSettings } from "./settings.js";

export const MODULE_ID = "pf2e-trigger-animations-trove";

const triggerEngineTriggersPath = `modules/${MODULE_ID}/triggers.json`;

Hooks.once("triggerEngine.registerTriggers", (registerTriggers) => {
  registerTriggers("trigger-engine", "pf2e-trigger", triggerEngineTriggersPath);
});

Hooks.once("triggerAnimations.ready", (api) => {
  if (game.user.isGM) {
    askToAddNewAnimationsDialog();
  }
  // modifyTriggerAnimationTemplates();
});

Hooks.once("init", async function () {
  setupSettings();
});

Hooks.once("ready", async function () {
  if (
    game.user.isGM &&
    !game.settings.get(MODULE_ID, "disable-trigger-enable-spam")
  ) {
    reminderActivateAllTriggers();
  }
});

function reminderActivateAllTriggers() {
  ui.notifications.warn(
    "pf2e-trigger-animations-trove.module-settings.disable-trigger-enable-spam.message",
    { permanent: true, localize: true },
  );
}

// function modifyTriggerAnimationTemplates() {
//   triggerAnimations.api.templates.attack.prefixes = [
//     "trove-attack",
//     "trove-damage",
//   ];
// }
