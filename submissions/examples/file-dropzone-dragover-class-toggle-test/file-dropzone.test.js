import { describe, it, expect, beforeEach } from "vitest";

function createDropzone() {
  const dropzone = document.createElement("div");
  dropzone.className = "dropzone";

  dropzone.addEventListener("dragenter", (e) => {
    e.preventDefault();
    dropzone.classList.add("drag-over");
  });

  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add("drag-over");
  });

  dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("drag-over");
  });

  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("drag-over");
  });

  return dropzone;
}

describe("File Dropzone Drag Over Class Toggle", () => {
  let dropzone;

  beforeEach(() => {
    document.body.innerHTML = "";
    dropzone = createDropzone();
    document.body.appendChild(dropzone);
  });

  it("adds drag-over class on dragenter", () => {
    dropzone.dispatchEvent(new Event("dragenter", { bubbles: true }));
    expect(dropzone.classList.contains("drag-over")).toBe(true);
  });

  it("adds drag-over class on dragover", () => {
    dropzone.dispatchEvent(new Event("dragover", { bubbles: true }));
    expect(dropzone.classList.contains("drag-over")).toBe(true);
  });

  it("removes drag-over class on dragleave", () => {
    dropzone.classList.add("drag-over");

    dropzone.dispatchEvent(new Event("dragleave", { bubbles: true }));

    expect(dropzone.classList.contains("drag-over")).toBe(false);
  });

  it("removes drag-over class on drop", () => {
    dropzone.classList.add("drag-over");

    dropzone.dispatchEvent(new Event("drop", { bubbles: true }));

    expect(dropzone.classList.contains("drag-over")).toBe(false);
  });

  it("does not duplicate drag-over class", () => {
    dropzone.dispatchEvent(new Event("dragover"));
    dropzone.dispatchEvent(new Event("dragover"));

    expect(
      [...dropzone.classList].filter((c) => c === "drag-over").length
    ).toBe(1);
  });

  it("handles dragleave without prior dragover", () => {
    dropzone.dispatchEvent(new Event("dragleave"));
    expect(dropzone.classList.contains("drag-over")).toBe(false);
  });

  it("handles drop without prior dragover", () => {
    dropzone.dispatchEvent(new Event("drop"));
    expect(dropzone.classList.contains("drag-over")).toBe(false);
  });

  it("preserves other classes", () => {
    dropzone.classList.add("custom");

    dropzone.dispatchEvent(new Event("dragover"));
    dropzone.dispatchEvent(new Event("drop"));

    expect(dropzone.classList.contains("custom")).toBe(true);
  });
});