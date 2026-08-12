document.addEventListener("DOMContentLoaded", () => {
  const layout = document.querySelector(".ease-sidebar-layout");
  const desktopToggle = document.querySelector(".ease-sidebar-toggle");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navItems = document.querySelectorAll(".nav-item:not(.dropdown-trigger)");
  const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

  // Toggle Collapse on Desktop
  if (desktopToggle) {
    desktopToggle.addEventListener("click", () => {
      layout.classList.toggle("ease-sidebar-collapsed");
    });
  }

  // Toggle Open on Mobile
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      layout.classList.toggle("ease-sidebar-open");
    });
  }

  // Handle Dropdowns
  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const parent = trigger.closest(".nav-dropdown");
      if (parent) {
        parent.classList.toggle("open");
      }
    });
  });

  // Handle Active State
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      // If it's a real link, don't prevent default, but for demo we might
      if (item.getAttribute("href") === "#") {
        e.preventDefault();
      }
      
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");

      // Close mobile sidebar after selection
      if (window.innerWidth <= 768) {
        layout.classList.remove("ease-sidebar-open");
      }
    });
  });

  // Close sidebar on mobile when clicking outside
  const mainContent = document.querySelector(".ease-sidebar-main");
  if (mainContent) {
    mainContent.addEventListener("click", () => {
      if (layout.classList.contains("ease-sidebar-open")) {
        layout.classList.remove("ease-sidebar-open");
      }
    });
  }
});
