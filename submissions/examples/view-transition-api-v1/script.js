// View Transition API demo: animated list sort/filter reordering.
// Uses document.startViewTransition() to smoothly animate items to
// their new positions instead of an instant DOM reflow jump.

const people = [
  { id: 1, name: "Amara Diallo", role: "Engineering", initial: "A" },
  { id: 2, name: "Priya Nair", role: "Design", initial: "P" },
  { id: 3, name: "Liam Chen", role: "Engineering", initial: "L" },
  { id: 4, name: "Sofia Rossi", role: "Marketing", initial: "S" },
  { id: 5, name: "Kenji Watanabe", role: "Design", initial: "K" },
  { id: 6, name: "Maya Johnson", role: "Marketing", initial: "M" },
];

const listEl = document.getElementById("vt-list");
const buttons = document.querySelectorAll(".vt-btn");
let currentFilter = "all";
let currentSort = "name";

function getVisible() {
  let items = currentFilter === "all"
    ? [...people]
    : people.filter(p => p.role === currentFilter);

  items.sort((a, b) =>
    currentSort === "name" ? a.name.localeCompare(b.name) : a.id - b.id
  );

  return items;
}

function render() {
  const items = getVisible();
  listEl.innerHTML = items.map(p => `
    <div class="vt-item vt-reorder" style="--vt-name: vt-person-${p.id};">
      <div class="vt-badge">${p.initial}</div>
      <span class="vt-name">${p.name}</span>
      <span class="vt-meta">${p.role}</span>
    </div>
  `).join("");
}

function update() {
  if (document.startViewTransition) {
    document.startViewTransition(() => render());
  } else {
    render();
  }
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const group = btn.dataset.group;
    document.querySelectorAll(`.vt-btn[data-group="${group}"]`)
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (group === "filter") currentFilter = btn.dataset.value;
    if (group === "sort") currentSort = btn.dataset.value;

    update();
  });
});

render();
