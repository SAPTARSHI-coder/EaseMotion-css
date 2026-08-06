const trigger = document.getElementById("mselTrigger");
const dropdown = document.getElementById("mselDropdown");
const tags = document.getElementById("mselTags");
const checkboxes = dropdown.querySelectorAll("input[type=checkbox]");

trigger.addEventListener("click", () => dropdown.classList.toggle("open"));
document.addEventListener("click", (e) => {
  if (!e.target.closest(".msel")) dropdown.classList.remove("open");
});

function renderTags() {
  const selected = [];
  checkboxes.forEach((cb) => {
    if (cb.checked) selected.push(cb.value);
  });
  tags.innerHTML = selected
    .map((v) => `<span class="msel-tag" data-value="${v}">${v} ✕</span>`)
    .join("");
}

checkboxes.forEach((cb) => cb.addEventListener("change", renderTags));
tags.addEventListener("click", (e) => {
  const tag = e.target.closest(".msel-tag");
  if (!tag) return;
  const val = tag.dataset.value;
  checkboxes.forEach((cb) => {
    if (cb.value === val) cb.checked = false;
  });
  renderTags();
});

renderTags();
