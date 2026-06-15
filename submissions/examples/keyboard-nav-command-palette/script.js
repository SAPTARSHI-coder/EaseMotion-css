document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-input");
  const commandPalette = document.querySelector(".ease-command-palette");
  const toggleBtn = document.querySelector(".toggle-btn");
  const wrapper = document.querySelector(".palette-wrapper");

  if (!searchInput || !commandPalette) return;

  // 1. Maintain an activeIndex variable starting at -1
  let activeIndex = -1;

  // Optional: Sync activeIndex with default HTML active element on load
  const initialActive = commandPalette.querySelector(".ease-command-active");
  const initialItems = Array.from(
    commandPalette.querySelectorAll(".ease-command-item")
  );
  if (initialActive) {
    activeIndex = initialItems.indexOf(initialActive);
  }

  // 2. Add a keydown event listener to the search input
  searchInput.addEventListener("keydown", (e) => {
    // Get currently visible command items
    const items = Array.from(
      commandPalette.querySelectorAll(".ease-command-item")
    );
    if (items.length === 0) return;

    if (e.key === "ArrowDown") {
      // 3. On ArrowDown, increment the index (ensuring you clamp it to the list boundaries)
      e.preventDefault(); // Prevent scroll
      activeIndex = Math.min(activeIndex + 1, items.length - 1);
      updateActiveItem(items);
    } else if (e.key === "ArrowUp") {
      // 3. On ArrowUp, decrement it (ensuring you clamp it to the list boundaries)
      e.preventDefault(); // Prevent scroll
      activeIndex = Math.max(0, activeIndex - 1);
      updateActiveItem(items);
    } else if (e.key === "Enter") {
      // 5. On Enter, trigger a click event on the currently active DOM element
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < items.length) {
        items[activeIndex].click();
      }
    }
  });

  // 4. Loop through the list of command items, removing .ease-command-active from all, and apply it only to the element matching the activeIndex
  function updateActiveItem(items) {
    items.forEach((item, index) => {
      if (index === activeIndex) {
        item.classList.add("ease-command-active");
        item.setAttribute("aria-selected", "true");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("ease-command-active");
        item.setAttribute("aria-selected", "false");
      }
    });
  }

  // Click handler on command items to activate them and show feedback
  commandPalette.addEventListener("click", (e) => {
    const item = e.target.closest(".ease-command-item");
    if (!item) return;

    const items = Array.from(
      commandPalette.querySelectorAll(".ease-command-item")
    );
    activeIndex = items.indexOf(item);
    updateActiveItem(items);

    // Provide visual execution feedback
    executeCommand(item);
  });

  // Toggle Palette visibility
  if (toggleBtn && wrapper) {
    toggleBtn.addEventListener("click", () => {
      wrapper.classList.toggle("active");
      if (wrapper.classList.contains("active")) {
        searchInput.focus();
      }
    });
  }

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && wrapper && wrapper.classList.contains("active")) {
      wrapper.classList.remove("active");
    }
  });

  // Simple feedback element injector
  function executeCommand(item) {
    const title =
      item.querySelector(".command-title")?.textContent || "Command";
    const feedback = document.createElement("div");
    feedback.className = "command-feedback";
    feedback.textContent = `Executed: ${title}`;
    document.body.appendChild(feedback);

    setTimeout(() => {
      feedback.classList.add("show");
    }, 10);

    setTimeout(() => {
      feedback.classList.remove("show");
      setTimeout(() => feedback.remove(), 300);
    }, 2000);
  }
});
