import { MODULE_ID } from "./module.js";

export function setupSettings() {
  game.settings.register(MODULE_ID, "animation-config.persistent", {
    name: "pf2e-trigger-animations-trove.module-settings.animation-config.persistent.name",
    hint: "pf2e-trigger-animations-trove.module-settings.animation-config.persistent.hint",
    scope: "world",
    config: true,
    type: String,
    default: "templates",
    choices: {
      off: "pf2e-trigger-animations-trove.module-settings.animation-config.persistent.choices.off",
      templates:
        "pf2e-trigger-animations-trove.module-settings.animation-config.persistent.choices.templates",
      effects:
        "pf2e-trigger-animations-trove.module-settings.animation-config.persistent.choices.effects",
      all: "pf2e-trigger-animations-trove.module-settings.animation-config.persistent.choices.all",
    },
    onChange: (value) => {
      handlePersistenceSettingSync(value);
    },
  });

  game.settings.register(MODULE_ID, "persistent.templates", {
    name: "",
    hint: "",
    scope: "world",
    config: false,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, "persistent.effects", {
    name: "",
    hint: "",
    scope: "world",
    config: false,
    type: Boolean,
    default: false,
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

export function handlePersistenceSettingSync(value = undefined) {
  const setting =
    value ?? game.settings.get(MODULE_ID, "animation-config.persistent");

  switch (setting) {
    case "off":
      break;
    case "effects":
      game.settings.set(MODULE_ID, "persistent.effects", true);
      break;
    case "templates":
      game.settings.set(MODULE_ID, "persistent.templates", true);
      break;
    case "all":
      game.settings.set(MODULE_ID, "persistent.effects", true);
      game.settings.set(MODULE_ID, "persistent.templates", true);
      break;
  }
}
