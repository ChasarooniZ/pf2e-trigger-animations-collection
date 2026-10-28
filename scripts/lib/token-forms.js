import { ART_MAPPING, MODULES, RELEVANT_SLUGS } from "../const/art-map.js";

export function setupTokenImageFormHooks(enabled = true) {
  if (game.user.isGM) {
    Hooks[enabled ? "on" : "off"]("createItem", imageHook);
  }
}

async function imageHook(item) {
  if (RELEVANT_SLUGS.has(item?.rollOptionSlug)) {
    const tokenImageRule = getTokenImages({
      slug: item?.rollOptionSlug,
      noSubject: !item?.actor?.prototypeToken?.ring?.enabled,
    });
    const rules = item?.system.rules;
    rules.push(...tokenImageRule);
    await item.actor.updateEmbeddedDocuments("Item", [
      { _id: item.id, system: { rules: rules } },
    ]);
  }
}

function getTokenImages({ slug, noSubject }) {
  const data = getArt(slug);
  if (data) {
    return [data].flat().map((rule) => ({
      key: "TokenImage",
      value: rule.token,
      scale: rule.scale,
      ...(rule?.predicate ? { predicate: rule.predicate } : {}),
      ...(noSubject
        ? {}
        : {
            ring: {
              subject: {
                texture: rule.subject,
                scale: rule.scale,
              },
              colors: {},
            },
          }),
    }));
  } else {
    return null;
  }
}

function getArt(slug) {
  let art = null;
  const compendiumConfig = game.settings.get(
    "core",
    "compendiumArtConfiguration",
  );
  let moduleIDs = MODULES;
  if (compendiumConfig) {
    moduleIDs = Object.entries(compendiumConfig)
      .toSorted((a, b) => a?.[0]?.priority - b?.[0]?.priority)
      .map(([id]) => id);
  }

  for (const id of moduleIDs) {
    const data = game.modules.get(id)?.active && ART_MAPPING?.[id]?.[slug];
    if (data) {
      if (!art) {
        art = data;
      } else if (Array.isArray(data)) {
        //This section will combine found art, IE maybe you have some from Monser Core, but others from Monser Core 2 etc.
        data.forEach((item) => {
          if (
            !art.some((a) => foundry.utils.equals(a.predicate, item.predicate))
          ) {
            art.push(item);
          }
        });
      }
    }
  }
  return art;
}

export function hasImageMappingModule() {
  return MODULES.some((id) => game.modules.get(id)?.active);
}

export function getFormListHTML() {
  let text = "";
  for (const [modID, entries] of Object.entries(ART_MAPPING)) {
    const modName = game.modules.get(modID)?.name ?? modID;
    text += `<h4>${modName}</h4><ul>`;
    for (const [slug, entry] of Object.entries(entries)) {
      if (Array.isArray(entry)) {
        console.log({ slug, entry });
        text += `<li>${slug}<ul><li>${entry.map((i) => i.predicate?.[0]?.split(":")?.[1]).join("</li><li>")}</li></ul></li>`;
      } else {
        text += `<li>${slug}</li>`;
      }
    }
    text += `</ul>`;
  }
  return text;
}
