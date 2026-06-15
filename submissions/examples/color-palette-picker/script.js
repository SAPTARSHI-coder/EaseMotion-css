const preview = document.getElementById("swatchPreview");

document.querySelectorAll(".swatch").forEach((s) => {
  s.addEventListener("click", () => {
    const color = s.dataset.color;
    preview.style.background = color;
    preview.style.color = "#ffffff";
    preview.textContent = "Selected: " + color;
  });
});
