const list = document.getElementById("ddList");
let dragSrc = null;

list.addEventListener("dragstart", (e) => {
  dragSrc = e.target;
  e.target.classList.add("dragging");
});

list.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
  document
    .querySelectorAll(".dd-item")
    .forEach((el) => el.classList.remove("drag-over"));
});

list.addEventListener("dragover", (e) => {
  e.preventDefault();
  const target = e.target.closest(".dd-item");
  if (target && target !== dragSrc) {
    document
      .querySelectorAll(".dd-item")
      .forEach((el) => el.classList.remove("drag-over"));
    target.classList.add("drag-over");
  }
});

list.addEventListener("drop", (e) => {
  e.preventDefault();
  const target = e.target.closest(".dd-item");
  if (target && dragSrc && target !== dragSrc) {
    const items = [...list.children];
    const fromIdx = items.indexOf(dragSrc);
    const toIdx = items.indexOf(target);
    if (fromIdx < toIdx) {
      target.after(dragSrc);
    } else {
      target.before(dragSrc);
    }
  }
  document
    .querySelectorAll(".dd-item")
    .forEach((el) => el.classList.remove("drag-over"));
});
