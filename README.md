![module_banner](https://github.com/ChasarooniZ/pf2e-usage-updater/assets/79132112/3b2a4f8c-7ba1-4647-b073-d8ecac9d93a6)

![](https://img.shields.io/badge/Foundry-v14-informational)
![All Downloads](https://img.shields.io/github/downloads/ChasarooniZ/pf2e-trigger-animations-collection/total?color=5e0000&label=All%20Downloads)
![Latest Release Download Count](https://img.shields.io/github/downloads/ChasarooniZ/pf2e-trigger-animations-collection/latest/module.zip)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fpf2e-trigger-animations-trove&colorB=4aa94a)

[![](https://img.shields.io/badge/ko--fi-donate-%23FF5E5B?style=flat-square&logo=ko-fi&logoColor=white)](https://ko-fi.com/ChasarooniZ)

# Trigger Animation Trove (PF2e / SF2e)

Pack of animations for Trigger Animations! See the fully supported list [here](/ANIMATION_LIST.md)

## Animation Submission Guidelines

- **Acceptable Sources**
  - Currently the following are acceptable sources for animations/SFX
    - **[JB2A](https://www.patreon.com/JB2A)** (Note animations are built for the Patreon version primarily, but some may also have workarounds to support the free version)
    - **[GGG Asset Pack](https://github.com/ChasarooniZ/GGG-Sequencer-Sound-DB-Collection)**
    - **Future Vauxs Specific Asset Pack** (has yet to be released)
- **Animation Qualities**
  - **low** - 1 animation ~ 1 sfx
  - **medium** - ~3 animations / ~3 sfx --- This is the aim for the majority of animations
  - **high** - more of them
  - **PERSISTENT** - includes persistent animations at all
- **Relevant Game Settings**
_Predicate parts of your animations off of these to add full compatibility_
  - `animation-config.potato-mode` - Potato mode for those with slower PCs who still want some animations
  - **Persistent**
    - `persistent.templates` - Enables animations which should stick aroudn (IE `Scatter Scree` to persist on screen)
    - `persistent.effects` - Enables persistence for effects (wouldn't recommend this one, but at least opening up the option)
  - **Module Ownership**
    - `module-active.jb2a-patreon` - Checks if the user has JB2a Patreon installed and active

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
