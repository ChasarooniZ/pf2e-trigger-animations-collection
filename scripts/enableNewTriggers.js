import { MODULE_ID } from "./module.js";

export async function askToEnableNewTriggersDialog() {
  const askedTriggersSet = new Set(
    game.settings.get(MODULE_ID, "triggers-asked-to-enable"),
  );

  const list = await getTriggerData(askedTriggersSet);

  if (list.length > 0) {
    const addNewTriggers = await enableTriggersDialog(list);

    if (addNewTriggers) {
      await enableAllDisabledTriggers(list);
      ui.notifications.info("These new triggers have been enabled");
    }
  }
  list.forEach((t) => {
    askedTriggersSet.add(t.id);
  });
  const array = Array.from(askedTriggersSet);
  await game.settings.set(MODULE_ID, "triggers-asked-to-enable", array);
}

async function enableAllDisabledTriggers(list) {
  const sheet = await game.triggerEngine?.api.openBlueprintMenu(
    "trigger-engine",
    "pf2e-trigger",
  );
  for (const trigger of list) {
    const triggerDoc = sheet.blueprint.triggers.get(`module:${trigger.id}`);
    if (triggerDoc) {
      sheet.blueprint.enableTrigger(triggerDoc, true);
    }
  }
  await sheet.blueprint.saveTriggers();
}

async function enableTriggersDialog(list) {
  var triggersContent = "<ul>";
  list.forEach(({ id, name }) => {
    triggersContent += `<li><b>${name}<b></li>`;
  });
  triggersContent += "<ul>";

  const addNewTriggers = await foundry.applications.api.DialogV2.confirm({
    window: { title: "Trigger Animation Trove - Enable New Triggers" },
    content: `<p>Do you want to enable the following new triggers?</p>${triggersContent}`,
  });
  return addNewTriggers;
}

async function getTriggerData(askedTriggerSet) {
  const path = "modules/pf2e-trigger-animations-trove/triggers.json";
  const triggers = await foundry.utils.fetchJsonWithTimeout(path);
  const triggersMapped = triggers.map((t) => ({ id: t.id, name: t.name }));

  return triggersMapped.filter((t) => !askedTriggerSet.has(t.id));
}
