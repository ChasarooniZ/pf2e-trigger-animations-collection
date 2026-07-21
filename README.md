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
| Template                        | `template:item-slug`                               | `trove-template:item-slug`                               |
| Effect / Condition Badge Update | `none`                                             | `update:item-slug`                                       |
| Damage Roll                     | `none`                                             | `damage-roll:item-slug`                                  |
| Reload                          | `none`                                             | `reload:weapon-slug`                                     |
| Skill Action Rolled             | `none`                                             | `action:action-slug`                                     |
| Spell Message                   | `none`                                             | `spell:spell-slug`                                       |
| Roll Option Update              | `none`                                             | `update:item-slug`                                       |

The following are presets for particular sources

**Sound**

- `troveSound` - Makes sound local (aka on the grid)
  - A radius equal to the large of the two (Grid Width or Height)
  - Always Play for GM
  - Pan Sound
  - Muffled Effect - Low Pass Filter

**Effect**

- `troveIconTop` - Shows a still frame icon on top of token for a few seconds
  - Scale to object `0.5`
  - Sets anchor + Sprite anchor to place it on top of token
  - Duration `2500`
  - Fade in `500`, Fade out `1500`
  - Scale in `0.5` in `750` ms easeInQuad,Scale out `0.5` in `1500` easeOutBack

## Animation Submission Guidelines

[Click Me!](./CONTRIBUTING.md)

_[Use Me to convert "Export Triggers" to individual files for a PR](https://chasarooniz.github.io/pf2e-trigger-animations-collection/)_

## Table of Contents

- [Changelog](#changelog)
- [Contributors](#contributors)

## Changelog

You can access the changelog [here](/CHANGELOG.md).

## Contributors

You can see everyone else who contributed to the module [here](CONTRIBUTORS.md)
