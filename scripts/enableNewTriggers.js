import { MODULE_ID } from "./module.js";

export async function askToEnableNewTriggersDialog() {
  const askedTriggersSet = new Set(
    game.settings.get(MODULE_ID, "triggers-asked-to-enable") ?? [],
  );

  const { list, sheet } = await getTriggerData(askedTriggersSet);

  if (list.length > 0) {
    const addNewTriggers = await enableTriggersDialog(list);

    if (addNewTriggers) {
      await enableAllDisabledTriggers(list, sheet);
      ui.notifications.info("These new triggers have been enabled");
    }
  }
  list.forEach((t) => {
    askedTriggersSet.add(t.id);
  });
  const array = Array.from(askedTriggersSet);
  await game.settings.set(MODULE_ID, "triggers-asked-to-enable", array);
}

async function enableAllDisabledTriggers(list, sheet) {
  for (const trigger of list) {
    const triggerDoc = sheet.blueprint.triggers.get(trigger.id);
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

async function getTriggerData(askedTriggerSet) {
  const path = "modules/pf2e-trigger-animations-trove/triggers.json";
  const triggers = await foundry.utils.fetchJsonWithTimeout(path);
  const troveTriggersMapped = (Array.isArray(triggers) ? triggers : [])
    .map((t) => ({
      id: `module:${t.id}`,
      name: t.name,
    }))
    .filter((t) => !askedTriggerSet.has(t.id));

  // This is to prevent the blue print from opening every time the module is launched
  if (troveTriggersMapped.length === 0) {
    return { list: [], sheet: undefined };
  } else {
    const sheet = await game.triggerEngine?.api.openBlueprintMenu(
      "trigger-engine",
      "pf2e-trigger",
    );
    const triggersMapped = Array.from(sheet.blueprint.triggers.entries())
      .filter(([key, value]) => value?.folder === "Animations")
      .map(([key, value]) => ({ id: key, name: value.label }));

    return {
      list: triggersMapped.filter((t) => !askedTriggerSet.has(t.id)),
      sheet,
    };
  }
}
