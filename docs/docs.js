// ── Theme Toggle ────────────────────────────────────────
const themeBtn = document.getElementById("theme-toggle");
const html = document.documentElement;
if (themeBtn) {
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
}

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

if (targetMap.size > 0) {
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
    const href = link.getAttribute("href");
    link.addEventListener("click", function () {
      if (href && href.startsWith("#")) activateId(href.slice(1));
    });
  });
}

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

// ── Copy to Clipboard ────────────────────────────────────
document.querySelectorAll('.copy-class-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const codeEl = btn.parentElement.querySelector('code');
    if (!codeEl) return;
    const text = codeEl.textContent.trim();
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;top:-9999px;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      const orig = btn.textContent;
      btn.textContent = '✓ Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = orig;
        btn.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  });
});

// ── Floating Particle Canvas Background ──────────────────
(() => {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  
  // Disable floating particles animation if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: -1000, y: -1000 };

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    };
  }

  const COUNT = 90;
  for (let i = 0; i < COUNT; i++) {
    particles.push(createParticle());
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 120) {
        p.vx += dx / dist * 0.015;
        p.vy += dy / dist * 0.015;
      }
      p.vx *= 0.98;
      p.vy *= 0.98;
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width)  p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(108,99,255,${p.opacity})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(108,99,255,${(1 - d/100) * 0.12})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(drawParticles);
  }

  drawParticles();
})();
