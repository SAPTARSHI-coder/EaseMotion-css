const overlay = document.getElementById("loaderOverlay");
const content = document.getElementById("mainContent");

setTimeout(() => {
  overlay.classList.add("hidden");
  content.classList.add("visible");
}, 2000);
