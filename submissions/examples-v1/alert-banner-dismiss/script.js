document.querySelectorAll(".alert-close").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.target).classList.add("dismissed");
  });
});

document.getElementById("resetAlerts").addEventListener("click", () => {
  document
    .querySelectorAll(".alert")
    .forEach((a) => a.classList.remove("dismissed"));
});
