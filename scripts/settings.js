import { MODULE_ID } from "./module.js";

export function setupSettings() {
  game.settings.register(MODULE_ID, "animation-config.persistent", {
    name: "pf2e-trigger-animations-trove.module-settings.animation-config.persistent.name",
    hint: "pf2e-trigger-animations-trove.module-settings.animation-config.persistent.hint",
    scope: "world",
    config: false,
    type: String,
    default: "low",
    choices: {
      off: "pf2e-trigger-animations-trove.module-settings.animation-config.persistent.choices.off",
      templates:
        "pf2e-trigger-animations-trove.module-settings.animation-config.persistent.choices.templates",
      effects:
        "pf2e-trigger-animations-trove.module-settings.animation-config.persistent.choices.effects",
      all: "pf2e-trigger-animations-trove.module-settings.animation-config.persistent.choices.all",
    },
  });
  game.settings.register(MODULE_ID, "module-active.jb2a-patreon", {
    name: "",
    hint: "",
    scope: "world",
    config: false,
    type: Boolean,
    default: false,
  });
}
