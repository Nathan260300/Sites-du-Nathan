console.log("%c© 2025 - Nathan The Coder", "background: #282c34; color: #98c379; padding: .5em 1em; border-radius: 5px; font-weight: bold;");
console.log("%cSites du Nathan", "background: #282c34; color: #61afef; padding: .5em 1em; border-radius: 5px; font-weight: bold;");
console.log("%cCe site rassemble tous les sites que Nathan utilise.","background: #282c34; color: #61dafb; padding: .5em 1em; border-radius: 5px; font-weight: bold;");
console.log("%chttps://sites-nathan.netlify.app", "background: #282c34; color: #e06c75; padding: .5em 1em; border-radius: 5px; font-weight: bold;");
console.log("%cMade with 🕑 and 💖 by Nathan J. – Last update : 20/12/2025","background: #282c34; color: #c678dd; padding: .5em 1em; border-radius: 5px; font-weight: bold;")

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => {
    m.style.display = "none";
  });
}

function openDiscordModal() {
  closeAllModals();
  document.getElementById("discordModal").style.display = "flex";
}

function openMailModal() {
  closeAllModals();
  document.getElementById("mailModal").style.display = "flex";
}

function openDevModal() {
  closeAllModals();
  document.getElementById("devModal").style.display = "flex";
}

function openFunModal() {
  closeAllModals();
  document.getElementById("funModal").style.display = "flex";
}

/* ESC + SHORTCUTS */
document.addEventListener("keydown", (e) => {
  if (
    document.activeElement.tagName === "INPUT" ||
    document.activeElement.tagName === "TEXTAREA"
  ) return;

  switch (e.key.toLowerCase()) {
    case "escape":
      closeAllModals();
      break;
    case "d":
      openDiscordModal();
      break;
    case "m":
      openMailModal();
      break;
    case "v":
      openDevModal();
      break;
    case "e":
      openFunModal();
      break;
  }
});