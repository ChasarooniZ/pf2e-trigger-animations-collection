import { askToEnableNewTriggersDialog } from "./enableNewTriggers";
import { getEmanationWidth } from "./helper";

export function setupAPI() {
  window.triggerAnimationsTrove = {
    api: {
      enableNewTriggersDialog: askToEnableNewTriggersDialog,
      enableNewAnimationsDialog: askToAddNewAnimationsDialog,
    },
  };
}
