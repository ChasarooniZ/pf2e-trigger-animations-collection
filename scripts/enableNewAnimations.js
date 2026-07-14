import { MODULE_ID } from "./module.js";

export async function askToAddNewAnimationsDialog() {
  const askedAnimationsSet = new Set(
    game.settings.get(MODULE_ID, "animations-asked-to-enable"),
  );
  const triggerData =
    triggerAnimations?.api?.db?.flags?.["trigger-animations"]?.data;
  const enabledSet = new Set(triggerData?.enabled);

  const list = await getNewAnimationData(askedAnimationsSet, enabledSet);

  if (list.length > 0) {
    const addNewAnimations = await enableAnimationsDialog(list);
    list.forEach((anim) => {
      if (!askedAnimationsSet.has(anim.id)) {
        askedAnimationsSet.add(anim.id);
      }
    });

    if (addNewAnimations) {
      await enableAllDisabledAnimations(list);
      ui.notifications.info("These new animations have been enabled");
    }
    triggerData?.enabled?.forEach((animID) => {
      if (!askedAnimationsSet.has(animID)) {
        askedAnimationsSet.add(animID);
      }
    });
    const array = Array.from(askedAnimationsSet);
    await game.settings.set(MODULE_ID, "animations-asked-to-enable", array);
  }
}

async function enableAllDisabledAnimations(list) {
  const idList = list.map((a) => a.id);
  const triggerData = triggerAnimations.api.db.getFlag(
    "trigger-animations",
    "data",
  );
  triggerData.enabled = [
    ...new Set((triggerData?.enabled ?? []).concat(idList)),
  ];
  await triggerAnimations.api.db.setFlag(
    "trigger-animations",
    "data",
    triggerData,
  );
}

async function enableAnimationsDialog(list) {
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
  return addNewAnimations;
}

async function getNewAnimationData(askedAnimationsSet, enabledSet) {
  const path = "modules/pf2e-trigger-animations-trove/animations.json";
  const animations = await foundry.utils.fetchJsonWithTimeout(path);
  const animationsMapped = animations.map((a) => ({
    id: a.id,
    name: a.name,
    folder: a.folder,
  }));

  return animationsMapped.filter(
    (a) => !enabledSet.has(a.id) && !askedAnimationsSet.has(a.id),
  );
}
