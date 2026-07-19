const dropdown = document.getElementById("notifDropdown");

document.getElementById("notifBell").addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("open");
});

document.addEventListener("click", () => dropdown.classList.remove("open"));

document.getElementById("notifMark").addEventListener("click", () => {
  document.querySelectorAll(".notif-dot").forEach((d) => d.style.display = "none");
});
