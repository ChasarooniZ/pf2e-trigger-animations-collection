import { ART_MAPPING, MODULES, RELEVANT_SLUGS } from "../const/art-map.js";

export function setupTokenImageFormHooks(enabled = true) {
  if (game.user.isGM) {
    Hooks[enabled ? "on" : "off"]("createItem", (item) => {
      if (RELEVANT_SLUGS.has(item?.rollOptionSlug)) {
        const tokenImageRule = getTokenImages({
          slug: item?.rollOptionSlug,
          noSubject: !item?.actor?.prototypeToken?.ring?.enabled,
        });
        const rules = item?.system.rules;
        rules.push(...tokenImageRule);
        item.actor.updateEmbeddedDocuments("Item", [
          { _id: item.id, system: { rules: rules } },
        ]);
      }
    });
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
