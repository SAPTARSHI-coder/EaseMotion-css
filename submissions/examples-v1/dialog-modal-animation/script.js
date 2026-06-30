const modal = document.getElementById("modalDialog");
const simple = document.getElementById("simpleDialog");
const toast = document.getElementById("toast");

function animateClose(dialog, delay) {
  dialog.addEventListener(
    "transitionend",
    () => {
      dialog.close();
      dialog.classList.remove("closing");
    },
    { once: true }
  );
  dialog.classList.add("closing");
  setTimeout(() => {
    if (dialog.classList.contains("closing")) {
      dialog.classList.remove("closing");
      dialog.close();
    }
  }, delay || 300);
}

document
  .getElementById("openModal")
  .addEventListener("click", () => modal.showModal());
document
  .getElementById("openSimple")
  .addEventListener("click", () => simple.show());

document
  .querySelectorAll(".close-simple")
  .forEach((b) => b.addEventListener("click", () => animateClose(simple)));

modal.addEventListener("close", () => {
  if (modal.returnValue === "subscribed") {
    toast.textContent = "Subscribed successfully!";
    toast.classList.add("toast--visible");
    setTimeout(() => toast.classList.remove("toast--visible"), 3000);
  }
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) animateClose(modal);
});

simple.addEventListener("click", (e) => {
  if (e.target === simple) animateClose(simple);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (modal.open) animateClose(modal);
    if (simple.open) animateClose(simple);
  }
});
