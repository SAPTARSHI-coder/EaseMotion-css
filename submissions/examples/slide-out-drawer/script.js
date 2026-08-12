const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

function openDrawer() {
  drawer.classList.add("open");
  overlay.classList.add("open");
}

function closeDrawer() {
  drawer.classList.remove("open");
  overlay.classList.remove("open");
}

openBtn.addEventListener("click", openDrawer);
closeBtn.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);
