const chipList = document.getElementById("chipList");
const chipInput = document.getElementById("chipInput");
const addBtn = document.getElementById("chipAddBtn");

function addTag(tag) {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.innerHTML = `${tag} <button class="chip-remove" data-tag="${tag}">&times;</button>`;
  chipList.appendChild(chip);
  chip.querySelector(".chip-remove").addEventListener("click", function () {
    chip.remove();
  });
}

addBtn.addEventListener("click", () => {
  const val = chipInput.value.trim();
  if (val) {
    addTag(val);
    chipInput.value = "";
    chipInput.focus();
  }
});

chipInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

document.querySelectorAll(".chip-remove").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.parentElement.remove();
  });
});
