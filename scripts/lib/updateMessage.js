import { askToAddNewAnimationsDialog } from "../enableNewAnimations.js";
import { askToEnableNewTriggersDialog } from "../enableNewTriggers.js";

export async function sendUpdateMessage({ animations = [], triggers = [] }) {
  let messageHTML = `
    <h4>
        <i class="fa-solid fa-arrows-rotate"></i> 
        ${game.i18n.localize("pf2e-trigger-animations-trove.message.update.title")}
    </h4>`;
  if (animations?.length) {
    messageHTML += `${game.i18n.localize("pf2e-trigger-animations-trove.message.update.animations.description")}
    <button id="add-animations"><i class="fa-solid fa-wand-magic-sparkles"></i> 
        ${game.i18n.localize("pf2e-trigger-animations-trove.message.update.animations.button")}
    </button>`;
  }
  if (animations?.length && triggers?.length) {
    messageHTML += "<hr>";
  }
  if (triggers?.length) {
    messageHTML += `${game.i18n.localize("pf2e-trigger-animations-trove.message.update.triggers.description")}
    <button id="add-triggers">
        <i class="fa-solid fa-screwdriver-wrench"></i> 
        ${game.i18n.localize("pf2e-trigger-animations-trove.message.update.triggers.button")}
    </button`;
  }

  if (animations?.length || triggers?.length) {
    Hooks.once("renderChatMessageHTML", (msg, html) => {
      if (animations?.length) {
        html
          .querySelector("button#add-animations")
          .addEventListener("click", () => {
            askToAddNewAnimationsDialog(animations);
          });
      }
      if (triggers?.length) {
        html
          .querySelector("button#add-triggers")
          .addEventListener("click", () => {
            askToEnableNewTriggersDialog(triggers);
          });
      }
    });
    await ChatMessage.create({
      content: messageHTML,
      whisper: ChatMessage.getWhisperRecipients("GM"),
    });
  }
}
