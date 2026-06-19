const drawer = document.getElementById("drawer");
const overlay = document.getElementById("drawerOverlay");

document.getElementById("drawerToggle").addEventListener("click", () => {
  drawer.classList.add("open");
  overlay.classList.add("open");
});

function closeDrawer() {
  drawer.classList.remove("open");
  overlay.classList.remove("open");
}

document.getElementById("drawerClose").addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);
