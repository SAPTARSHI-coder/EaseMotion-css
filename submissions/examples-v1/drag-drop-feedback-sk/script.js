document.addEventListener("DOMContentLoaded", () => {
  const draggables = document.querySelectorAll(".draggable-card");
  const dropZones = document.querySelectorAll(".drop-zone");

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  let draggedItem = null;
  let placeholder = document.createElement("div");
  placeholder.className = "drop-placeholder";

  // -----------------------------
  // Drag Events on Cards
  // -----------------------------
  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", (e) => {
      draggedItem = draggable;

      // Use setTimeout to allow the drag image to be captured before altering opacity/transform
      setTimeout(() => {
        if (!prefersReducedMotion.matches) {
          draggable.classList.add("is-dragging");
        } else {
          draggable.style.opacity = "0.5"; // Basic fallback for reduced motion
        }
      }, 0);

      // Set placeholder size to match the dragged item
      placeholder.style.height = `${draggable.offsetHeight}px`;

      // Setup the drag payload (required for Firefox)
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", draggable.id);
    });

    draggable.addEventListener("dragend", () => {
      // Remove visual states
      draggable.classList.remove("is-dragging");
      draggable.style.opacity = "";

      // Clean up placeholder if it's still around
      if (placeholder.parentNode) {
        placeholder.parentNode.removeChild(placeholder);
      }

      // Clear drop zone highlights
      dropZones.forEach((zone) => zone.classList.remove("drag-over"));

      draggedItem = null;
    });
  });

  // -----------------------------
  // Drop Zone Events
  // -----------------------------
  dropZones.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault(); // Necessary to allow dropping
      e.dataTransfer.dropEffect = "move";

      zone.classList.add("drag-over");

      // Determine where to place the placeholder (before which element)
      const afterElement = getDragAfterElement(zone, e.clientY);
      if (afterElement == null) {
        zone.appendChild(placeholder);
      } else {
        zone.insertBefore(placeholder, afterElement);
      }
    });

    zone.addEventListener("dragenter", (e) => {
      e.preventDefault();
      zone.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", (e) => {
      // Ensure we are actually leaving the zone, not just entering a child element
      if (!zone.contains(e.relatedTarget)) {
        zone.classList.remove("drag-over");
      }
    });

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("drag-over");

      if (draggedItem) {
        // Insert the actual dragged item where the placeholder was
        if (placeholder.parentNode === zone) {
          zone.insertBefore(draggedItem, placeholder);
        } else {
          zone.appendChild(draggedItem);
        }
      }
    });
  });

  // Helper function to find which element to drop before
  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable-card:not(.is-dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        // Calculate distance from center of the child
        const offset = y - box.top - box.height / 2;

        // If we are above the center of the child, and it's the closest we've found
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }
});
