import { MODULE_ID } from "./module.js";

export function setupSettings() {
  game.settings.register(MODULE_ID, "disable-trigger-enable-spam", {
    name: `${MODULE_ID}.module-settings.disable-trigger-enable-spam.name`,
    hint: `${MODULE_ID}.module-settings.disable-trigger-enable-spam.hint`,
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
  });

  game.settings.register(MODULE_ID, "animations-asked-to-enable", {
    name: "",
    hint: "",
    scope: "world",
    config: false,
    type: Array,
    default: [],
  });

  game.settings.register(MODULE_ID, "triggers-asked-to-enable", {
    name: "",
    hint: "",
    scope: "world",
    config: false,
    type: Array,
    default: [],
  });
}
