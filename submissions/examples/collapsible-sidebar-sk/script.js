document.addEventListener("DOMContentLoaded", () => {
  const layout = document.querySelector(".ease-sidebar-layout");
  const desktopToggle = document.querySelector(".ease-sidebar-toggle");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navItems = document.querySelectorAll(".nav-item");

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

  // Handle Active State
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Close sidebar on mobile when clicking outside or on a nav item
  const sidebar = document.querySelector(".ease-sidebar");
  const mainContent = document.querySelector(".ease-sidebar-main");

  if (mainContent) {
    mainContent.addEventListener("click", () => {
      if (layout.classList.contains("ease-sidebar-open")) {
        layout.classList.remove("ease-sidebar-open");
      }
    });
  }

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        layout.classList.remove("ease-sidebar-open");
      }
    });
  });
});
