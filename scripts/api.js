import { askToEnableNewTriggersDialog } from "./enableNewTriggers.js";
import { getEmanationWidth } from "./helper.js";

export function setupAPI() {
  window.triggerAnimationsTrove = {
    api: {
      enableNewTriggersDialog: askToEnableNewTriggersDialog,
      enableNewAnimationsDialog: askToAddNewAnimationsDialog,
    },
  };
}
