const components = [
  // ── Buttons ───────────────────────────────────────────
  {
    name: "Primary Button",
    category: "buttons",
    css: "ease-btn ease-btn-primary",
    html: `<button class="ease-btn ease-btn-primary">Primary</button>`,
    desc: "Main call-to-action button with brand accent color.",
    render: () => `<button class="ease-btn ease-btn-primary">Primary</button>`
  },
  {
    name: "Success Button",
    category: "buttons",
    css: "ease-btn ease-btn-success",
    html: `<button class="ease-btn ease-btn-success">Success</button>`,
    desc: "Positive action button (confirm, save, approve).",
    render: () => `<button class="ease-btn ease-btn-success">Success</button>`
  },
  {
    name: "Danger Button",
    category: "buttons",
    css: "ease-btn ease-btn-danger",
    html: `<button class="ease-btn ease-btn-danger">Danger</button>`,
    desc: "Destructive action button (delete, remove, cancel).",
    render: () => `<button class="ease-btn ease-btn-danger">Danger</button>`
  },
  {
    name: "Outline Button",
    category: "buttons",
    css: "ease-btn ease-btn-outline",
    html: `<button class="ease-btn ease-btn-outline">Outline</button>`,
    desc: "Subtle bordered button for secondary actions.",
    render: () => `<button class="ease-btn ease-btn-outline">Outline</button>`
  },
  {
    name: "Ghost Button",
    category: "buttons",
    css: "ease-btn ease-btn-ghost",
    html: `<button class="ease-btn ease-btn-ghost">Ghost</button>`,
    desc: "Minimal transparent button for low-emphasis actions.",
    render: () => `<button class="ease-btn ease-btn-ghost">Ghost</button>`
  },
  {
    name: "Pill Button",
    category: "buttons",
    css: "ease-btn ease-btn-primary ease-btn-pill",
    html: `<button class="ease-btn ease-btn-primary ease-btn-pill">Pill</button>`,
    desc: "Fully rounded button for badges or tags.",
    render: () => `<button class="ease-btn ease-btn-primary ease-btn-pill">Pill</button>`
  },
  {
    name: "Small Button",
    category: "buttons",
    css: "ease-btn ease-btn-primary ease-btn-sm",
    html: `<button class="ease-btn ease-btn-primary ease-btn-sm">Small</button>`,
    desc: "Compact button for tight spaces or inline use.",
    render: () => `<button class="ease-btn ease-btn-primary ease-btn-sm">Small</button>`
  },
  {
    name: "Large Button",
    category: "buttons",
    css: "ease-btn ease-btn-primary ease-btn-lg",
    html: `<button class="ease-btn ease-btn-primary ease-btn-lg">Large</button>`,
    desc: "Prominent button for hero sections and CTAs.",
    render: () => `<button class="ease-btn ease-btn-primary ease-btn-lg">Large</button>`
  },
  // ── Cards ─────────────────────────────────────────────
  {
    name: "Basic Card",
    category: "cards",
    css: "ease-card",
    html: `<div class="ease-card"><h3 class="ease-card-title">Title</h3><p>Card content here.</p></div>`,
    desc: "Simple container with padding and rounded corners.",
    render: () => `<div class="ease-card" style="padding:16px;width:100%;"><h3 class="ease-card-title" style="margin:0 0 4px;">Title</h3><p style="margin:0;font-size:13px;color:var(--text-secondary);">Card content here.</p></div>`
  },
  {
    name: "Shadow Card",
    category: "cards",
    css: "ease-card ease-card-shadow",
    html: `<div class="ease-card ease-card-shadow">…</div>`,
    desc: "Elevated card with drop shadow for visual hierarchy.",
    render: () => `<div class="ease-card ease-card-shadow" style="padding:16px;width:100%;"><h3 class="ease-card-title" style="margin:0 0 4px;">Shadow Card</h3><p style="margin:0;font-size:13px;color:var(--text-secondary);">Elevated content container.</p></div>`
  },
  {
    name: "Hover Card",
    category: "cards",
    css: "ease-card ease-card-shadow ease-card-hover",
    html: `<div class="ease-card ease-card-shadow ease-card-hover">…</div>`,
    desc: "Interactive card that lifts on hover.",
    render: () => `<div class="ease-card ease-card-shadow ease-card-hover" style="padding:16px;width:100%;"><h3 class="ease-card-title" style="margin:0 0 4px;">Hover Card</h3><p style="margin:0;font-size:13px;color:var(--text-secondary);">Hover to see lift effect.</p></div>`
  },
  {
    name: "Glass Card",
    category: "cards",
    css: "ease-card ease-card-glass",
    html: `<div class="ease-card ease-card-glass">…</div>`,
    desc: "Frosted glass morphism card for modern UIs.",
    render: () => `<div class="ease-card ease-card-glass" style="padding:16px;width:100%;"><h3 class="ease-card-title" style="margin:0 0 4px;">Glass Card</h3><p style="margin:0;font-size:13px;color:var(--text-secondary);">Frosted glass effect.</p></div>`
  },
  {
    name: "Neumorphic Card",
    category: "cards",
    css: "ease-card ease-card-neumorphic",
    html: `<div class="ease-card ease-card-neumorphic">…</div>`,
    desc: "Soft UI card with inset shadow for a neumorphic look.",
    render: () => `<div class="ease-card ease-card-neumorphic" style="padding:16px;width:100%;"><h3 class="ease-card-title" style="margin:0 0 4px;">Neumorphic</h3><p style="margin:0;font-size:13px;color:var(--text-secondary);">Soft UI style.</p></div>`
  },
  {
    name: "Accent Card",
    category: "cards",
    css: "ease-card ease-card-accent",
    html: `<div class="ease-card ease-card-accent">…</div>`,
    desc: "Card with a colored accent border for emphasis.",
    render: () => `<div class="ease-card ease-card-accent" style="padding:16px;width:100%;"><h3 class="ease-card-title" style="margin:0 0 4px;">Accent Card</h3><p style="margin:0;font-size:13px;color:var(--text-secondary);">Highlighted with accent border.</p></div>`
  },
  // ── Animations ────────────────────────────────────────
  {
    name: "Fade In",
    category: "animations",
    css: "ease-fade-in",
    html: `<div class="ease-fade-in">Content</div>`,
    desc: "Smooth opacity entrance animation on page load.",
    render: () => `<div class="ease-fade-in" style="padding:8px 16px;background:var(--accent);color:#fff;border-radius:8px;font-weight:600;font-size:14px;">Fade In</div>`
  },
  {
    name: "Slide Up",
    category: "animations",
    css: "ease-slide-up",
    html: `<div class="ease-slide-up">Content</div>`,
    desc: "Content rises into view with a smooth vertical slide.",
    render: () => `<div class="ease-slide-up" style="padding:8px 16px;background:var(--accent);color:#fff;border-radius:8px;font-weight:600;font-size:14px;">Slide Up</div>`
  },
  {
    name: "Slide Left",
    category: "animations",
    css: "ease-slide-left",
    html: `<div class="ease-slide-left">Content</div>`,
    desc: "Element slides in from the right side.",
    render: () => `<div class="ease-slide-left" style="padding:8px 16px;background:var(--accent);color:#fff;border-radius:8px;font-weight:600;font-size:14px;">Slide Left</div>`
  },
  {
    name: "Slide Right",
    category: "animations",
    css: "ease-slide-right",
    html: `<div class="ease-slide-right">Content</div>`,
    desc: "Element slides in from the left side.",
    render: () => `<div class="ease-slide-right" style="padding:8px 16px;background:var(--accent);color:#fff;border-radius:8px;font-weight:600;font-size:14px;">Slide Right</div>`
  },
  {
    name: "Zoom In",
    category: "animations",
    css: "ease-zoom-in",
    html: `<div class="ease-zoom-in">Content</div>`,
    desc: "Element scales up smoothly into view.",
    render: () => `<div class="ease-zoom-in" style="padding:8px 16px;background:var(--accent);color:#fff;border-radius:8px;font-weight:600;font-size:14px;">Zoom In</div>`
  },
  {
    name: "Bounce",
    category: "animations",
    css: "ease-bounce",
    html: `<div class="ease-bounce">Content</div>`,
    desc: "Continuous bouncing animation for attention.",
    render: () => `<div class="ease-bounce" style="padding:8px 16px;background:var(--accent);color:#fff;border-radius:8px;font-weight:600;font-size:14px;">Bounce</div>`
  },
  {
    name: "Pulse",
    category: "animations",
    css: "ease-pulse",
    html: `<div class="ease-pulse">Content</div>`,
    desc: "Soft pulsing glow for live indicators or loading states.",
    render: () => `<div class="ease-pulse" style="padding:8px 16px;background:var(--accent);color:#fff;border-radius:8px;font-weight:600;font-size:14px;">Pulse</div>`
  },
  {
    name: "Rotate",
    category: "animations",
    css: "ease-rotate",
    html: `<div class="ease-rotate">⟳</div>`,
    desc: "Continuous rotation for spinners and loading icons.",
    render: () => `<div class="ease-rotate" style="padding:8px 16px;background:var(--accent);color:#fff;border-radius:8px;font-weight:600;font-size:18px;">⟳</div>`
  },
  // ── Hover Effects ─────────────────────────────────────
  {
    name: "Hover Grow",
    category: "hover",
    css: "ease-hover-grow",
    html: `<button class="ease-btn ease-btn-primary ease-hover-grow">Grow</button>`,
    desc: "Button scales up slightly on hover for emphasis.",
    render: () => `<button class="ease-btn ease-btn-primary ease-hover-grow">Grow</button>`
  },
  {
    name: "Hover Glow",
    category: "hover",
    css: "ease-hover-glow",
    html: `<button class="ease-btn ease-btn-primary ease-hover-glow">Glow</button>`,
    desc: "Adds a colored glow effect around the element on hover.",
    render: () => `<button class="ease-btn ease-btn-primary ease-hover-glow">Glow</button>`
  },
  {
    name: "Hover Lift",
    category: "hover",
    css: "ease-hover-lift",
    html: `<button class="ease-btn ease-btn-primary ease-hover-lift">Lift</button>`,
    desc: "Element lifts with an enhanced shadow on hover.",
    render: () => `<button class="ease-btn ease-btn-primary ease-hover-lift">Lift</button>`
  },
  {
    name: "Hover Shimmer",
    category: "hover",
    css: "ease-hover-shimmer",
    html: `<button class="ease-btn ease-btn-primary ease-hover-shimmer">Shimmer</button>`,
    desc: "Light sweep effect that moves across the element on hover.",
    render: () => `<button class="ease-btn ease-btn-primary ease-hover-shimmer">Shimmer</button>`
  },
  {
    name: "Hover Underline",
    category: "hover",
    css: "ease-hover-underline",
    html: `<span class="ease-hover-underline">Underline text</span>`,
    desc: "Animated underline that draws from center on hover.",
    render: () => `<span class="ease-hover-underline" style="font-size:14px;font-weight:600;">Underline</span>`
  },
  // ── Utilities ──────────────────────────────────────────
  {
    name: "Flex Center",
    category: "utilities",
    css: "ease-flex ease-items-center ease-justify-center",
    html: `<div class="ease-flex ease-items-center ease-justify-center">…</div>`,
    desc: "Centers content both horizontally and vertically using Flexbox.",
    render: () => `<div class="ease-flex ease-items-center ease-justify-center" style="width:100%;height:60px;background:var(--accent-light);border-radius:8px;font-size:13px;font-weight:600;">Centered Content</div>`
  },
  {
    name: "Flex Between",
    category: "utilities",
    css: "ease-flex ease-justify-between ease-items-center",
    html: `<div class="ease-flex ease-justify-between ease-items-center">…</div>`,
    desc: "Spreads items across the main axis with space-between alignment.",
    render: () => `<div class="ease-flex ease-justify-between ease-items-center" style="width:100%;padding:8px 12px;background:var(--accent-light);border-radius:8px;font-size:13px;"><span>Left</span><span>Right</span></div>`
  },
  {
    name: "Grid Auto",
    category: "utilities",
    css: "ease-grid ease-grid-auto ease-gap-3",
    html: `<div class="ease-grid ease-grid-auto ease-gap-3">…</div>`,
    desc: "Responsive auto-fit grid that adapts columns to available space.",
    render: () => `<div class="ease-grid ease-grid-auto ease-gap-2" style="width:100%;"><div style="background:var(--accent-light);border-radius:6px;padding:6px;text-align:center;font-size:11px;">1</div><div style="background:var(--accent-light);border-radius:6px;padding:6px;text-align:center;font-size:11px;">2</div><div style="background:var(--accent-light);border-radius:6px;padding:6px;text-align:center;font-size:11px;">3</div></div>`
  },
  {
    name: "Gap Utility",
    category: "utilities",
    css: "ease-flex ease-gap-4",
    html: `<div class="ease-flex ease-gap-4">…</div>`,
    desc: "Consistent spacing between flex or grid children (gap: 1rem).",
    render: () => `<div class="ease-flex ease-gap-2" style="width:100%;flex-wrap:wrap;"><span style="background:var(--accent-light);border-radius:6px;padding:6px 10px;font-size:12px;">Item</span><span style="background:var(--accent-light);border-radius:6px;padding:6px 10px;font-size:12px;">Item</span><span style="background:var(--accent-light);border-radius:6px;padding:6px 10px;font-size:12px;">Item</span></div>`
  },
  {
    name: "Text Center",
    category: "utilities",
    css: "ease-text-center",
    html: `<div class="ease-text-center">Centered text</div>`,
    desc: "Centers inline and inline-block content horizontally.",
    render: () => `<div class="ease-text-center" style="width:100%;font-size:14px;font-weight:600;">Centered Text</div>`
  },
  // ── Navbar ─────────────────────────────────────────────
  {
    name: "Glass Navbar",
    category: "navbar",
    css: "ease-navbar-glass",
    html: `<nav class="ease-navbar-glass">…</nav>`,
    desc: "Frosted glass navigation bar with blur backdrop.",
    render: () => `<nav class="ease-navbar-glass" style="width:100%;padding:10px 16px;display:flex;justify-content:space-between;align-items:center;border-radius:8px;"><span style="font-weight:700;font-size:14px;">Logo</span><span style="display:flex;gap:12px;font-size:12px;"><span>Home</span><span>Docs</span></span></nav>`
  },
  {
    name: "Sticky Glass Navbar",
    category: "navbar",
    css: "ease-navbar-glass ease-navbar-glass-sticky",
    html: `<nav class="ease-navbar-glass ease-navbar-glass-sticky">…</nav>`,
    desc: "Frosted navbar that sticks to the top on scroll.",
    render: () => `<nav class="ease-navbar-glass" style="width:100%;padding:10px 16px;display:flex;justify-content:space-between;align-items:center;border-radius:8px;"><span style="font-weight:700;font-size:14px;">Sticky</span><span style="display:flex;gap:12px;font-size:12px;"><span>Home</span><span>Docs</span></span></nav>`
  },
  {
    name: "Blur Glass Navbar",
    category: "navbar",
    css: "ease-navbar-glass ease-navbar-glass-blur",
    html: `<nav class="ease-navbar-glass ease-navbar-glass-blur">…</nav>`,
    desc: "Enhanced blur intensity for deeper glass effect.",
    render: () => `<nav class="ease-navbar-glass ease-navbar-glass-blur" style="width:100%;padding:10px 16px;display:flex;justify-content:space-between;align-items:center;border-radius:8px;"><span style="font-weight:700;font-size:14px;">Blur</span><span style="display:flex;gap:12px;font-size:12px;"><span>Home</span><span>Docs</span></span></nav>`
  }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const filterTabs = document.getElementById("filterTabs");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const resetBtn = document.getElementById("resetBtn");
const toast = document.getElementById("toast");
const themeToggle = document.getElementById("themeToggle");

let currentCategory = "all";
let currentSearch = "";

function filterComponents() {
  return components.filter(c => {
    const matchCategory = currentCategory === "all" || c.category === currentCategory;
    const search = currentSearch.toLowerCase();
    const matchSearch = !search ||
      c.name.toLowerCase().includes(search) ||
      c.desc.toLowerCase().includes(search) ||
      c.category.toLowerCase().includes(search);
    return matchCategory && matchSearch;
  });
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
}

function showToast(msg) {
  toast.textContent = msg;
  toast.hidden = false;
  toast.classList.remove("hide");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => { toast.hidden = true; }, 300);
  }, 2000);
}

function render() {
  const results = filterComponents();
  resultCount.textContent = results.length;

  if (results.length === 0) {
    gallery.innerHTML = "";
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  gallery.innerHTML = results.map((comp, idx) => `
    <div class="component-card" data-index="${idx}">
      <div class="card-header">
        <span class="card-category">${comp.category}</span>
        <h3 class="card-title">${comp.name}</h3>
        <p class="card-desc">${comp.desc}</p>
      </div>
      <div class="card-preview" data-preview>
        ${comp.render()}
      </div>
      <code class="class-display">${comp.css}</code>
      <div class="card-actions">
        <button class="copy-btn" data-copy="html:${idx}">Copy HTML</button>
        <button class="copy-btn" data-copy="css:${idx}">Copy CSS</button>
      </div>
    </div>
  `).join("");

  gallery.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", () => {
      const [type, idx] = btn.dataset.copy.split(":");
      const comp = results[parseInt(idx)];
      const text = type === "html" ? comp.html : comp.css;
      copyToClipboard(text);
      btn.textContent = "✓ Copied!";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = type === "html" ? "Copy HTML" : "Copy CSS";
        btn.classList.remove("copied");
      }, 1800);
      showToast("✓ Copied!");
    });
  });
}

searchInput.addEventListener("input", () => {
  currentSearch = searchInput.value;
  render();
});

filterTabs.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  filterTabs.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentCategory = btn.dataset.category;
  render();
});

resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  currentSearch = "";
  currentCategory = "all";
  filterTabs.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  filterTabs.querySelector('[data-category="all"]').classList.add("active");
  render();
});

themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const isLight = html.getAttribute("data-theme") === "light";
  html.setAttribute("data-theme", isLight ? "dark" : "light");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("gallery-theme", isLight ? "dark" : "light");
});

const saved = localStorage.getItem("gallery-theme");
if (saved) {
  document.documentElement.setAttribute("data-theme", saved);
  themeToggle.textContent = saved === "light" ? "☀️" : "🌙";
}

render();
