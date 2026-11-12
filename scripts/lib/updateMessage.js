import { askToAddNewAnimationsDialog } from "../enableNewAnimations.js";
import { askToEnableNewTriggersDialog } from "../enableNewTriggers.js";
import { MODULE_ID } from "../module.js";

export async function sendUpdateMessage({ animations = [], triggers = [] }) {
  let messageHTML = `
    <div id="ta-update" class="trigger-animations-trove update">
      <hr class="divider">
      <p class="title">
          ${game.i18n.localize("pf2e-trigger-animations-trove.message.update.title")} ${game.modules.get(MODULE_ID)?.version}
      </p>
      <hr class="divider">`;
  if (animations?.length) {
    messageHTML += `
    <button id="add-animations"><i class="fa-solid fa-wand-magic-sparkles"></i> 
        ${game.i18n.localize("pf2e-trigger-animations-trove.message.update.animations.button")}
    </button>
    <hr class="divider">`;
  }
  if (triggers?.length) {
    messageHTML += `
    <button id="add-triggers">
        <i class="fa-solid fa-screwdriver-wrench"></i> 
        ${game.i18n.localize("pf2e-trigger-animations-trove.message.update.triggers.button")}
    </button>
    <hr class="divider">`;
  }

  messageHTML += `<div class="links">
  <a target="_blank" rel="noopener noreferrer" href="https://ko-fi.com/chasarooni"><i
                class="fab fa-ko-fi"></i><b>Support on Ko-Fi!</b></a>
    </div>
  </div>
  `;

  if (animations?.length || triggers?.length) {
    Hooks.once("renderChatMessageHTML", (msg, html) => {
      if (animations?.length) {
        const animButton = html.querySelector("button#add-animations");
        animButton.addEventListener("click", () => {
          askToAddNewAnimationsDialog(animations);
          animButton.disabled = true;
        });
      }
      if (triggers?.length) {
        const triggerButton = html.querySelector("button#add-triggers");
        triggerButton.addEventListener("click", () => {
          askToEnableNewTriggersDialog(triggers);
          triggerButton.disabled = true;
        });
      }
    });
    await ChatMessage.create({
      content: messageHTML,
      whisper: ChatMessage.getWhisperRecipients("GM"),
    });
  }
}
