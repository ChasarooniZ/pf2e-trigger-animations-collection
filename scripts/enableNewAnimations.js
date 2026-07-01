import { MODULE_ID } from "./module.js";

export async function askToAddNewAnimationsDialog() {
  const list = await getNewAnimationData();

  game.settings.set(
    MODULE_ID,
    "last-updated-settings",
    game.modules.get(MODULE_ID).version,
  );
  if (list.length > 0) {
    const newAnimationsByFolder = {};
    list.forEach(({ id, name, folder }) => {
      if (!newAnimationsByFolder[folder]) {
        newAnimationsByFolder[folder] = [{ id, name }];
      } else {
        newAnimationsByFolder[folder].push({ id, name });
      }
    });
    var animationsContent = "";
    for (const folder of Object.keys(newAnimationsByFolder)) {
      animationsContent += `<p><b>${folder}</b></p>${newAnimationsByFolder[folder].map((it) => it.name).join(" • ")}`;
    }

    const addNewAnimations = await foundry.applications.api.DialogV2.confirm({
      window: { title: "Trigger Animation Trove - Enable New Animations" },
      content: `<p>Do you want to enable the following new trigger animations?</p>${animationsContent}`,
    });

    if (addNewAnimations) {
      const idList = list.map((a) => a.id);
      const triggerData = triggerAnimations.api.db.getFlag(
        "trigger-animations",
        "data",
      );
      triggerData.enabled = new Set(triggerData?.enabled.concat(idList));
      await triggerAnimations.api.db.setFlag(
        "trigger-animations",
        "data",
        triggerData,
      );
    }
  }
}

async function getNewAnimationData() {
  const path = "modules/pf2e-trigger-animations-trove/animations.json";
  const animations = await foundry.utils.fetchJsonWithTimeout(path);
  const triggerData = triggerAnimations.api.db.flags["trigger-animations"].data;
  const enabledSet = new Set(triggerData?.enabled);
  const animationsMapped = animations.map((a) => ({
    id: a.id,
    name: a.name,
    folder: a.folder,
  }));

  const newAnimations = animationsMapped.filter((a) => !enabledSet.has(a.id));
  return newAnimations;
}
