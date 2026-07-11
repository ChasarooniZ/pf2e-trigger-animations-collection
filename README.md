![module_banner](https://github.com/ChasarooniZ/pf2e-usage-updater/assets/79132112/3b2a4f8c-7ba1-4647-b073-d8ecac9d93a6)

![](https://img.shields.io/badge/Foundry-v14-informational)
![All Downloads](https://img.shields.io/github/downloads/ChasarooniZ/pf2e-trigger-animations-collection/total?color=5e0000&label=All%20Downloads)
![Latest Release Download Count](https://img.shields.io/github/downloads/ChasarooniZ/pf2e-trigger-animations-collection/latest/module.zip)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fpf2e-trigger-animations-trove&colorB=4aa94a)

[![](https://img.shields.io/badge/ko--fi-donate-%23FF5E5B?style=flat-square&logo=ko-fi&logoColor=white)](https://ko-fi.com/ChasarooniZ)

# Trigger Animation Trove (PF2e / SF2e)

Pack of animations for Trigger Animations! See the fully supported list [here](/ANIMATION_LIST.md)

### Trove Animation Quirks

The following are triggers specific to Trigger Animation Trove, for all other triggers see [Trigger Animations](https://wiki.mrvauxs.net/reference/trigger-animations/#included-pf2e-triggers)

| Event                           | Original Trigger                                   | Trove Trigger                                            |
| ------------------------------- | -------------------------------------------------- | -------------------------------------------------------- |
| Attack Rolled                   | `attack:item-slug`                                 | `trove-attack:item-slug`                                 |
| Check Rolled                    | `check:item-slug`                                  | `trove-check:item-slug`                                  |
| Damage Taken                    | `(damage\|healing\|persistent\|negated):item-slug` | `trove-(damage\|healing\|persistent\|negated):item-slug` |
| Reload                          | `none`                                             | `reload:weapon-slug`                                     |
| Damage Roll                     | `none`                                             | `damage-roll:item-slug`                                  |
| Effect / Condition Badge Update | `none`                                             | `update:item-slug`                                       |
| Roll Option Update              | `none`                                             | `update:item-slug`                                       |

## Animation Submission Guidelines

- **Acceptable Sources**
  - Currently the following are acceptable sources for animations/SFX
    - **[JB2A](https://www.patreon.com/JB2A)** (Note animations are built for the Patreon version primarily, but some may also have workarounds to support the free version)
    - **[GGG Asset Pack](https://github.com/ChasarooniZ/GGG-Sequencer-Sound-DB-Collection)**
    - **Future Vauxs Specific Asset Pack** (has yet to be released)
- **Animation Qualities**
  - **Minimal** - 1 animation ~ 1 sfx (or SFX only)
  - **Low** - Medium but with no persistent and possibly toned down a bit if it's a lot
  - **Medium** - ~3 animations / ~3 sfx + Persistent Templates allowed (as long its not a ton)
    - _This is the aim for the majority of animations_
  - **High** - Medium but with Persistent Effects allowed

_The following is WIP_

- **Priority of Animations**
  - 0 - **Default**
  - **Weapons**
    - -100 - **Group** `Firearm`
    - -50 - **Base** `Gun Sword`
    - 0 - **Specific** `Petrification Cannon`
  - **Spells**
    - -50 **Trait** `Fire` _this should mostly just be the cast animation_
    - 0 **Specific Spell** `Fireball`

## Table of Contents

- [Changelog](#changelog)
- [Contributors](#contributors)

## Changelog

You can access the changelog [here](/CHANGELOG.md).

## Contributors

You can see everyone else who contributed to the module [here](CONTRIBUTORS.md)
