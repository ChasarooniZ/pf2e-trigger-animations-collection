## Unreleased

## 0.9.1

- **Animations**
  - **New**
    - Weapon Group: Grenade (@Suldrun45)
- **Updated**
  - Actually included the styling fix for `Enable New Animations` _Sorry vauxs 🙏_(💻@Suldrun45)

## 0.9.0

- **Animations**
  - **New**
    - Acid Missile, Bite, Jaws, Thunderbolt, Conductive Downpour, Force Barrage, Cackle, Force Bolt, Force Fang, Weapon Group: Spear (@ChasarooniZ)
    - Solar Weapon, Solar Flare (@Suldrun45)
- **New**
  - New trigger `Spell Message` uses `spell:spell-slug` and is for when a spell has no effect, damage roll, or template

## 0.8.13

- **Animations**
  - **New**
    - Weapon Group: Sling (@ChasarooniZ)
    - Arc Emitter, Force Field, Screamer, Singing Coil, Starfall Pistol, Zero Cannon, (@Suldrun45)
    - Plasma Caster _(with Boost)_ (@mechamaya 🎉 First Time contribution!)
  - **Updated**
    - Flamethrower _Update to chain sound so it sounds better, also added min quality sfx option_ (@Suldrun45)
    - Lay on Hands _Fixed issue with condition causing the sound to double play_ (@ChasarooniZ)
- **New**
  - Added a button to the menu to force check to enable animations that aren't enabled
- **Updated**
  - Fixed styling of `Enable New Animations` so that you can scroll if the list is too long (💻@MrVauxs)
  - Fixed `Reload` trigger where it would activate on every shot of any catridge based weapon
  - Grab targets from the message creator
  - Updated `GGG` to version `0.1.0``
  - `troveSound` - Set `volume` to the default of `0.8` to work better with the new `Loudness Normalization`

## 0.8.12

- **Updated**
  - Added a backup method of acquiring the `Damage Roll` Trigger's targets if the user doesn't have `PF2e Toolbelt`

## 0.8.11

- **Animations**
  - **New**
    - Zero Cannon, Starfall Pistol, Singing Coil, Screamer, Arc Emitter, Force Field (@Suldrun45)
    - Plasma Caster (with Boost) (@mechmaya)
  - **Updated**
    - Electric Arc _removed console logs_ (@Suldrun45)
- **Updated**
  - Fixed issues with animations and templates that failed to have both `preload` and `local` on their `Play` nodes

## 0.8.10

- **Animations**
  - **New**
    - Grapple, Tumble Through, Renewed Vigor, Electric Arc (@ChasarooniZ)
    - Flamethrower, Rotolaser, Weapon Group: Corrosive (Ranged), Weapon Group: Cryo (Ranged), Weapon Group: Plasma (Ranged), Weapon Group: Projectile (Area & Automatic), Weapon Group: Sonic (Ranged), Weapon Group: Sniper (Ranged), Weapon Group: Shock (Ranged), Weapon Group: Projectile (Ranged) (@Suldrun45)
  - **Updated**
    - Plasma Cannon _Add filter to free version_ (@Suldrun45)
- **Updated**
  - Updated to `Trigger Animations` version `0.6.3`

## 0.8.9

- **Animations**
  - **New**
    - Deity Strike, Fist, Gauntlet, Healer's Glove, Lay on Hands(@ChasarooniZ)
    - Weapon Group: Swords (@MrVauxs modified by @ChasarooniZ)
    - Suppressed (@Suldrun45)
  - **Updated**
    - Claw, Weapon Group: Hammer, Weapon Group: Polearms, Weapon Group: Hammer, Greatpick _Added Randomize Mirror Y for melee attacks_ (@ChasarooniZ)
- **Updated**
  - Fixed the `Skill Check Actions` trigger which wasn't working

## 0.8.8

- **Animations**
  - **Updated**
    - Reload: Firearm (Weapon Group), Reload: Crossbow (Weapon Group), Reload: Pepperbox, Reload: Slide Pistol _Added visual to these animations_ (@Chasarooni)
- **Updated**
  - Made `troveIconTop` Preset better visually

## 0.8.7

- **Animations**
  - **New**
    - Weapon Group: Laser, Condition: Glitching (@Suldrun45)
  - **Updated**
    - Slowed, Stunned _Fixed Persistence_ (@Suldrun45)
- **New**
  - **Preset**
    - `troveIconTop` - Shows a still frame icon on top of token for a few seconds _more details on the README_
- **Updated**
  - Added safeguard against double calling the start animations
  - Increased minimum `GGG` version to `0.0.21`
    - _Adds more Air SFX + Reload Icon_

## 0.8.6

- Fixed issue where name was not plugged in to `Handler: Template` (🐛 @Suldrun45)

## 0.8.5

- **Updated**
  - Increased minimum `GGG` version to `0.0.19`
    - _A Metric ton of Sci Fi SFX for our SF2e Players_
  - Updated to `Trigger Animations` version `0.6.1`
    - _Support for SF2e Weapon Groups, and Base Items out of the box as well as NPC Strike Support_

## 0.8.4

- Fixed last issue with `Handler: Template`

## 0.8.3

- Fixed issue with `Handler: Template` (🐛 @Suldrun45)

## 0.8.2

- chore(clean)

## 0.8.1

- **Updated**
  - Fixed bug with `combine-animations` script causing attacks to not be included in the final result (🐛 @Suldrun45)

## 0.8.0

- **New**
  - Added a new handler `Handler: Template` for the SF2e System
    - All submitted animations with a `template:` trigger should use the `trove-template:` trigger
    - _This is so that SF2e can support attack additives for their area weapons_
- **Updated**
  - Updated all animations with trigger `template:` to new `trove-template:`

## 0.7.8

- **Animations**
  - **New**
    - Plasma Cannon (@Suldrun45)
- **Updated**
  - `Trove Effect` Templates is now correct (🐛 @RedB)

## 0.7.7

- **Animations**
  - **New**
    - Weapon Group: Firearm, Reload: Firearm (Weapon Group) (@Chasarooni)
  - **Updated**
    - Weapon Group: Bomb (to handle NPC bombs) (@Chasarooni)
- **Updated**
  - Animation combiner will now automatically set weapons to their proper Priority so that specific weapons can override their base Weapon counterparts

## 0.7.6

- Fixed lingering issue with `Attack Roll Handler`

## 0.7.5

- **Animations**
  - **New**
    - Boomerang, Charkram, Dart, Shuriken, Tamchal Chakram (@Chasarooni)
- **Updated**
  - `Attack Roll - Handler` - now accounts for NPC strikes
  - `Weapon Group: Hammer` - modified how returning property rune is checked
  - Updated all animations to fix a bug that caused the `Trove Sound` Preset to not be applied (including on templates)

## 0.7.4

- **Updated**
  - Increased minimum `GGG` version to `0.0.17`

## 0.7.3

- **Updated**
  - Fixed issue with `Trove Template (Cone & Line)`

## 0.7.2

- **Animations**
  - **New**
    - Void Warp (@Chasarooni)
- **Updated**
  - `Effect Trove Template` added missing play node (🐛 @RedB)

## 0.7.1

- **Update**
  - Modified `Attack Handler` to work for `Unarmed Strike`

## 0.7.0

- **New**
  - Added new animation trigger
    - `Skill Action Rolled` - uses `action:action-slug`
- **Updated**
  - Fixed issue causing Trove Templates sounds with incorrectly configured Location Nodes
  - Fixed the above issue in any templates with that issue

## 0.6.2

- **Updated**
  - Removed accidental console.log

## 0.6.1

- **Update**
  - Improved the Generated description of Trove Templates

## 0.6.0

- **New**
  - Added the following `Trigger Animations` templates
    - `Trove: Melee Attack`
    - `Trove: Ranged Attack`
    - `Trove: Effect Granted`
    - `Trove: Template (Bursts & Emanations)`
    - `Trove: Template (Cones & Lines)`

## 0.5.1

- Fixed issue that a rogue cleaning script caused breaking some animations (notably every handler 🤦‍♂️) to overwrite their trigger name with an empty array

## 0.5.0

- **Animations**
  - **New**
    - Wave of Warning (@Chasarooni)
  - **Updated**
    - 🔊 Sneak Attack (@Chasarooni)
- **New**
  - Added New Preset for **Sound**
  - `troveSound` - Gives the sound the following traits:
    - A radius equal to the large of the two (Grid Width or Height)
    - Always Play for GM
    - Pan Sound
    - Muffled Effect - Low Pass Filter
    - Volume to `0.5` (add a volume node afterwards to override this)
- **Update**
  - Updated all animations with sound to use this preset and all animations going forth should utilize it
  - Updated to `Trigger Animations` version `0.5.4`
  - Trigger combining macro will no longer preserve listed `tags` on a trigger
  - Tags will now be cleaned from animations when the repo is cleaned

## 0.4.3

- Updated `ggg` minimum required version to `0.0.16`

## 0.4.2

- **Animations**
  - **New**
    - Raise a Shield, Atryl: Rune of Fire, Esvadir: Rune of Whetstones, Ranshu: Rune of Thunder (@Chasarooni)
- **New**
  - Automatically asks about enabling new `Triggers` thanks to (@MrVauxs)

## 0.4.1

- Updated to `Trigger Animations` version `0.5.2`

## 0.4.0

- **New**
  - _going to include what particular animations are in each release now so I can think about it less_
  - **Animations**
    - Persistent Damage, Buzzing Bites, Guidance, Hurtling Stone, Scatter Scree, Void Scour, Weapon Group: Polearms, Claw, Blinded, Clumsy, Confused, Controlled, Dazzled, Deafened, Doomed, Drained, Dying, Encumbered, Enfeebled, Fascinated, Fatigued, Fleeing, Frightened, Grabbed, Immobilized, Off-Guard, Paralyzed, Petrified, Prone, Quickened, Sickened, Slowed, Stunned, Stupefied, Unconscious, Wounded, Weapon Group: Bombs, Weapon Group: Bows, Weapon Group: Crossbows, Rage, Weapon Group: Shield, Reload: Crossbow (Weapon Group), Reload: Pepperbox, Reload: Slide Pistol, Change Shape, Sneak Attack, Sanguine Mutagen, Healing Potion, Harm, Heal, Weapon Group: Hammer (@Chasarooni)
    - Fireball (@ChazPls)
- **Updated**
  - **Animations**
    - Fireball (@Chasarooni)
  - Updated to `Trigger Animations` version `0.5.0`
  - Fixed logic in `Ask to Enable New Animations` (thanks @MrVauxs)
  - Stole release script to grab changelog info from `Trigger Animations` (thanks @MrVauxs)
  - Updated animations that improperly setup templates without using `scaleToObject` or `stretchTo`

## 0.3.3

- **Update**
  - Reworked how the module asks you to enable new animations (Should be more responsive to you disabling them locally and avoid cases where it would fail to activate)

## 0.3.2

- **Update**
  - Handled case for `Attack Roll` Trigger where the attack was generated by a `Strike` Rule Element (note the implementation is naive and if multiple strike elements are generated by one item and or effect it's liable to fail)
  - Migrated away from use the module setting to test for `JB2a Patreon` in favor of using the `Module Enabled` Node, updated any relevant animations
  - Removed misc leftover console logs

## 0.3.1

- Fixed `handlers` not being placed in folders

## 0.3.0

- **New**
  - Add new animation trigger
    - `Damage Roll` uses `damage-roll:slug`
    - Note for anything that is an "addon" (think Sneak Attack) they use `damage-roll-addon:slug` and need to be added manually to the handler
- **Update**
  - Updated to `Trigger Animations` version `0.4.0`
  - Updated `ggg` minimum required version to `0.0.15`
  - Removed left in Console Logs
  - Lowered Priority of `Handlers` to avoid overriding other animations generated in `0.4.0`

## 0.2.2

- Fixed handlers misspelling

## 0.2.1

- Fixed the combination scripts to properly handle helpers

## 0.2.0

- **New**
  - Added two new animation triggers
    - `Reload` uses `reload:slug`
    - `Roll Option Update` uses `update:slug` where `slug` is the slug of the item with the Roll Option
- **Update**
  - Updated to `Trigger Animations` version `0.3.0`
  - Updated all animations to the new `Trigger Animations` version

## 0.1.5

- Format newly added items

## 0.1.4

- Updated `ggg` minimum required version to `0.0.13`

## 0.1.3

- Updated `Fascinated` to be more accurate animation wise

## 0.1.2

- Updated all effect animations to use the Object Scale of `2` instead of `1.5`

## 0.1.1

- Updated all animations to use `preload` and `local` in their `play` nodes

## 0.1.0

- **New**
  - `Effect / Condition Update Badge` trigger updated to use trigger `update:slug` from the previous `slug`
- **Update**
  - Conditions updated to match this

## 0.0.22

- Updated minimum **Trigger Animations** version to `0.1.1`

## 0.0.21

- Fixed issue with triggers being added

## 0.0.20

- Updated `Condition` animations to utilize the new `Effect / Condition Update Badge` Trigger
- Added minimal quality option to some conditions which does not add filters to animations

## 0.0.19

- Added a new Trigger `Effect / Condition Update Badge` for when the badge of an effect or condition is updated
- Also added warning for the user to enable the animations in the triggers to have them work

## 0.0.18

- Added a tag for all animations from this module

## 0.0.17

- Fixed issue again

## 0.0.16

- Fixed another issue with animation enabler

## 0.0.15

- Fixed an issue with animation check

## 0.0.14

- Added a check to ask if you want to update the new animation

## 0.0.13

- Removed settings in this module which are no longer used

## 0.0.12

- Adjusted animations in the module to match new `Trigger Animation` settings

## 0.0.11

- Modified persistence settings simpler to access hidden settings to make triggers a bit smaller

## 0.0.10

- Fixed persistence setting being not visible
- Set default for persistence settings to `templates`

## 0.0.9

- Fixed manifest issue causing animations to not appear

## 0.0.8

- Fixed bug in release script

## 0.0.7

- Added a game setting to configure what level of persistence you want
- update PR template to better reflect what's wanted'
- Update the `ANIMATION_LIST.md` to include more formatting emojis

## 0.0.6

- Added a game setting to check if jb2a patreon is active

## 0.0.5

- Linked to a quick and dirty LLM created HTML form (to make formatting a bit easier for the average non git user)
- Added links to the top

## 0.0.4

- Added temporary files to show the categories on github
- Added parsing for what class a feat is from

## 0.0.3

- Tested adding an animation
- Updated the animation list
- Added @ChasarooniZ as a CODEOWNER

## 0.0.2

- Updated the PR template
- Fixed issue causing the test to fail every time

## 0.0.1

- Added cleaning scripts (@Vauxs, @Spappz for reference)
- Added validation scripts (@Vauxs, @Spappz for reference)
- Readied things up for release
