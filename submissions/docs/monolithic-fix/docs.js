// ── Theme Toggle ────────────────────────────────────────
const themeBtn = document.getElementById("theme-toggle");
const html = document.documentElement;
themeBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme") || "dark";
  const targetTheme = currentTheme === "light" ? "dark" : "light";
  const rect = themeBtn.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  html.style.setProperty("--clip-x", `${x}px`);
  html.style.setProperty("--clip-y", `${y}px`);
  if (document.startViewTransition) {
    html.setAttribute("data-transition-theme", targetTheme);
    const transition = document.startViewTransition(() => {
      html.setAttribute("data-theme", targetTheme);
      localStorage.setItem("em-theme", targetTheme);
    });
    transition.finished.finally(() => {
      html.removeAttribute("data-transition-theme");
    });
  } else {
    html.setAttribute("data-theme", targetTheme);
    localStorage.setItem("em-theme", targetTheme);
  }
});

// ── Active nav link tracking ─────────────────────────────
const navLi = document.querySelectorAll(".sidebar-nav a");
const headerLi = document.querySelectorAll(".docs-header-links a:not(.ease-btn)");
const allLinks = [...navLi, ...headerLi];
const targetMap = new Map();
allLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href && href.startsWith("#")) {
    const el = document.getElementById(href.slice(1));
    if (el) targetMap.set(href.slice(1), el);
  }
});

function getPageOffsetTop(element) {
  let top = 0;
  while (element) {
    top += element.offsetTop;
    element = element.offsetParent;
  }
  return top;
}

let targets = [];
function cacheTargetPositions() {
  targets = [];
  targetMap.forEach((el, id) => {
    targets.push({ id, offsetTop: getPageOffsetTop(el) });
  });
  targets.sort((a, b) => a.offsetTop - b.offsetTop);
}

function activateId(activeId) {
  navLi.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });
  headerLi.forEach((link) => {
    const href = link.getAttribute("href");
    const isComponentSubItem = ["buttons", "cards", "scroll-progress", "forms", "components"].includes(activeId);
    link.classList.toggle("active", href === `#${activeId}` || (href === "#components" && isComponentSubItem));
  });
}

function updateActiveLink() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const threshold = 160;
  if (scrollPosition + windowHeight >= documentHeight - 30) {
    const lastNavLink = navLi[navLi.length - 1];
    if (lastNavLink) {
      activateId(lastNavLink.getAttribute("href").slice(1));
      return;
    }
  }
  let activeId = null;
  for (let i = 0; i < targets.length; i++) {
    if (scrollPosition >= targets[i].offsetTop - threshold) {
      activeId = targets[i].id;
    } else {
      break;
    }
  }
  if (activeId) activateId(activeId);
}

cacheTargetPositions();
updateActiveLink();
window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("resize", () => {
  cacheTargetPositions();
  updateActiveLink();
});

navLi.forEach((link) => {
  link.addEventListener("click", function () {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) activateId(href.slice(1));
  });
});
headerLi.forEach((link) => {
  link.addEventListener("click", function () {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) activateId(href.slice(1));
  });
});

// ── Mobile Sidebar Toggle ────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("docsSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      sidebar.classList.toggle("open");
      if (overlay) overlay.classList.toggle("open");
    });
    if (overlay) {
      overlay.addEventListener("click", function () {
        sidebar.classList.remove("open");
        overlay.classList.remove("open");
      });
    }
    sidebar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove("open");
          if (overlay) overlay.classList.remove("open");
        }
      });
    });
  }
});

// ── Scroll-to-top button ─────────────────────────────────
(() => {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;
  const ring = btn.querySelector(".ease-scroll-top__ring circle");
  const THRESHOLD = 300;
  const CIRCUMFERENCE = 126;
  function updateProgress() {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    btn.classList.toggle("is-visible", scrolled > THRESHOLD);
    if (ring) {
      const pct = Math.min(scrolled / total, 1);
      ring.style.strokeDashoffset = CIRCUMFERENCE - pct * CIRCUMFERENCE;
    }
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();