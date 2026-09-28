import { askToAddNewAnimationsDialog } from "./enableNewAnimations.js";
import { askToEnableNewTriggersDialog } from "./enableNewTriggers.js";
// import { getEmanationWidth } from "./helper.js";
import { tokenCrosshairHelper } from "./lib/helpers.js";

export function setupAPI() {
  window.triggerAnimationsTrove = {
    api: {
      enableNewTriggersDialog: askToEnableNewTriggersDialog,
      enableNewAnimationsDialog: askToAddNewAnimationsDialog,
      helpers: {
        tokenCrosshairHelper,
      },
    },
  };
}
