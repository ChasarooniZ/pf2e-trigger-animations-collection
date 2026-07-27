import { askToAddNewAnimationsDialog } from "./enableNewAnimations.js";
import { askToEnableNewTriggersDialog } from "./enableNewTriggers.js";
import { registerTriggerAnimationTemplates } from "./handleTemplates.js";
import { setupSettings } from "./settings.js";

export const MODULE_ID = "pf2e-trigger-animations-trove";

const triggerEngineTriggersPath = `modules/${MODULE_ID}/triggers.json`;

Hooks.once("triggerEngine.registerTriggers", (registerTriggers) => {
  registerTriggers("trigger-engine", "pf2e-trigger", triggerEngineTriggersPath);
});

Hooks.once("init", async function () {
  setupSettings();
  Hooks.once("triggerAnimations.ready", async (api) => {
    registerTriggerAnimationTemplates();
    if (game.user.isGM) {
      if (!window?.troveAnimationsAsked) {
        window.troveAnimationsAsked = true;
        askToAddNewAnimationsDialog();
      }
    }
    // modifyTriggerAnimationTemplates();
  });

  Hooks.once("triggerEngine.ready", async () => {
    if (game.user.isGM) {
      const version = game?.modules?.get("trigger-engine")?.version;
      if (
        version !== "1.22.1" &&
        !foundry.utils.isNewerVersion(version, "1.22.1")
      ) {
        ui.notifications.warning(
          "[Trigger Animation Trove] Update to at least Trigger Engine '1.22.1'",
        );
        return;
      }
      askToEnableNewTriggersDialog();
    }
  });
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
  // Sound
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
      .muffledEffect({ type: "lowpass", intensity: 4 });
  });

  // Still Image Pop up Top of Character
  Sequencer.Presets.add("troveIconTop", (effect, args) => {
    return effect
      .scaleToObject(0.5)
      .anchor({ x: 0.5, y: 1.2 })
      .spriteAnchor({ x: 0.5, y: 1 })
      .duration(2500)
      .fadeIn(500)
      .fadeOut(1500)
      .scaleOut(0.5, 1500, { ease: "easeInQuad" })
      .scaleIn(0.5, 750, { ease: "easeOutBack" });
  });
}
