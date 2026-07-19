const overlay = document.getElementById("modalOverlay");
const trigger = document.getElementById("modalTrigger");
const closeBtn = document.getElementById("modalClose");
const cancelBtn = document.getElementById("modalCancel");

function openModal() { overlay.classList.add("open"); }
function closeModal() { overlay.classList.remove("open"); }

trigger.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
