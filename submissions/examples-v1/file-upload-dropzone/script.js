const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("fileInput");
const fileTrigger = document.getElementById("fileTrigger");
const previewArea = document.getElementById("previewArea");

["dragenter", "dragover"].forEach((ev) => {
  dropzone.addEventListener(ev, (e) => {
    e.preventDefault();
    dropzone.classList.add("drag-over");
  });
});

["dragleave", "drop"].forEach((ev) => {
  dropzone.addEventListener(ev, (e) => {
    e.preventDefault();
    dropzone.classList.remove("drag-over");
  });
});

dropzone.addEventListener("drop", (e) => {
  handleFiles(e.dataTransfer.files);
});

fileTrigger.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
  handleFiles(fileInput.files);
});

function handleFiles(files) {
  previewArea.innerHTML = "";
  Array.from(files).forEach((f) => {
    const el = document.createElement("div");
    el.className = "preview-file";
    el.textContent = f.name;
    previewArea.appendChild(el);
  });
}
