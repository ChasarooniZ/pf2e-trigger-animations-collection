## New Animations

You can either submit an animation PR (please link it to an issue if possible) or create an issue to request one. This project is done primarily a for fun project, so no guarantees as to when or if someone will get around to creating a trigger for a request.

_[Use Me to convert "Export Triggers" to individual files for a PR](https://chasarooniz.github.io/pf2e-trigger-animations-collection/)_

## Trigger Style Guidelines

- Trigger name must match the Animation it is for
- Your trigger's file name must be a sluggified version of the animation name (you can do the following in the fvtt console to get it `game.pf2e.system.sluggify("Name Here")`)
- Each trigger must apply to 1 source (with some exceptions in specific cases IE legacy vs OGL versions). If the animations would be the same use the call animation node to call the source animation
- You must follow the quality guidelines below using the `Quality` node to section off your animation (This is explicitly strictly enforced for anything with persistent animations or those with exceptionally taxing animations)
- Your description should include a description of anything extra the animation does (IE if the animation moves a token etc.)
- There should be no functional components (IE effects added, damage applied etc.) to any animations with the exception of those like the case described above
- Sort your animation in the proper folder, creating a new one if there's no folder that fits the animation
- Format the trigger as requested on submission (`Prettier` 2 spaces per line) which can be run from the project with `npm run prettier`

## Node Guidlines

- **Sound**
  - If a sound is somewhere on the canavs apply the `troveSound` `preset` to each sound in an `Animation Trigger`
  - `Sound` node should have the name filled with the item or animation `name` or `slug`
- **Effect**
  - `origin` and `name` should be filled with the item or animation `name` or `slug` and the item `uuid` respectfully (unless it makes more sense for it to be a token's etc.)

## Animation Submission Guidelines

**Methodology** _These are __animations__ and are intended to in general be solely animations, and not to interfere with the normal process of playing the game outside of showing animations_
- **Acceptable Sources**
  - Currently the following are acceptable sources for animations/SFX
    - **[JB2A](https://www.patreon.com/JB2A)** (Note animations are built for the Patreon version primarily, but some may also have workarounds to support the free version)
    - **[GGG Asset Pack](https://github.com/ChasarooniZ/GGG-Sequencer-Sound-DB-Collection)**
    - **Future Vauxs Specific Asset Pack** (has yet to be released)
- **Animation Qualities**
  - **Minimal** - 1 animation ~ 1-2 sfx (or SFX only)
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
