import { MODULE_ID } from "./module.js";

export async function getTriggersToAddAndUpdateFlags() {
  const askedTriggersSet = new Set(
    game.settings.get(MODULE_ID, "triggers-asked-to-enable") ?? [],
  );
  const list = await getTriggerDataNew();
  triggerAnimations.api.requiredTriggerEngineTriggers.push(...list);
  const missingTriggers = list.filter(
    (trigger) => !askedTriggersSet.has(trigger?.id),
  );
  if (missingTriggers.length > 0) {
    missingTriggers.forEach((t) => {
      askedTriggersSet.add(t.id);
    });
    const array = Array.from(askedTriggersSet);
    await game.settings.set(MODULE_ID, "triggers-asked-to-enable", array);
  }
  return missingTriggers;
}

async function getTriggerDataNew() {
  const path = "modules/pf2e-trigger-animations-trove/triggers.json";
  const triggers = await foundry.utils.fetchJsonWithTimeout(path);
  return (Array.isArray(triggers) ? triggers : []).map((t) => ({
    id: t.id,
    name: t.name,
    src: MODULE_ID,
  }));
}

export async function askToEnableNewTriggersDialog(list) {
  if (list.length > 0) {
    const sheet = await game.triggerEngine?.api.openBlueprintMenu(
      "trigger-engine",
      "pf2e-trigger",
    );

    const addNewTriggers = await enableTriggersDialog(list);

    if (addNewTriggers) {
      await enableAllDisabledTriggers(list, sheet);
      ui.notifications.info("These new triggers have been enabled");
    }
  }
}

async function enableAllDisabledTriggers(list, sheet) {
  for (const trigger of list) {
    const triggerDoc = sheet.blueprint.triggers.get(`module:${trigger.id}`);
    if (triggerDoc) {
      sheet.blueprint.enableTrigger(triggerDoc, true);
    }
  }
  await sheet.blueprint.saveTriggers();
}

async function enableTriggersDialog(list) {
  let triggersContent = "<ul>";
  list?.forEach(({ id, name }) => {
    triggersContent += `<li><b>${name}<b></li>`;
  });
  triggersContent += "<ul>";

  const addNewTriggers = await foundry.applications.api.DialogV2.confirm({
    window: {
      title: "Trigger Animation Trove - Enable New Triggers",
      icon: "fas fa-webhook",
    },
    content: `<p>Do you want to enable the following new triggers?</p>${triggersContent}`,
  });
  return addNewTriggers;
}
