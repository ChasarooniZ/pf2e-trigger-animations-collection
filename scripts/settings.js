import { askToAddNewAnimationsDialog } from "./enableNewAnimations.js";
import { addRequiredAnimationTriggers } from "./enableNewTriggers.js";
import { MODULE_ID } from "./module.js";

export function setupSettings() {
  game.settings.registerMenu(MODULE_ID, "force-refresh-menu", {
    name: `${MODULE_ID}.module-settings.force-refresh-menu.name`,
    label: `${MODULE_ID}.module-settings.force-refresh-menu.label`,
    hint: `${MODULE_ID}.module-settings.force-refresh-menu.hint`,
    icon: "fas fa-arrows-rotate",
    type: ForceEnableAllAnimations,
    restricted: true,
  });

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

class ForceEnableAllAnimations extends FormApplication {
  constructor(...args) {
    super(...args);
  }

  async render(force, options = {}) {
    await game.settings.set(MODULE_ID, "animations-asked-to-enable", []);
    // await game.settings.set(MODULE_ID, "triggers-asked-to-enable", []);
    // await askToEnableNewTriggersDialog();
    askToAddNewAnimationsDialog();

    return this;
  }

  getData() {
    return {};
  }

  _updateObject(event, formData) {}

  async _render(force, options = {}) {
    return this;
  }
}
