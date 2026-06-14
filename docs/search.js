/**
 * EaseMotion CSS — Global Documentation Search
 * File: docs/search.js
 *
 * Features:
 *  • Ctrl+K / Cmd+K opens command palette
 *  • Real-time, fuzzy-tolerant search across all doc sections
 *  • Highlighted matched text
 *  • Full keyboard navigation (↑↓ Enter Esc)
 *  • ARIA-compliant (role="combobox", role="listbox", aria-activedescendant)
 *  • Works on both desktop and mobile
 *  • Zero dependencies — vanilla JS only
 */

(function () {
  "use strict";

  /* ── 1. Search Index ────────────────────────────────────────
     Each entry: { title, desc, href, category, icon, keywords }
     Add new entries here as docs grow.
  ─────────────────────────────────────────────────────────── */
  const SEARCH_INDEX = [
    // ── Getting Started ──────────────────────────────────────
    {
      title: "Getting Started",
      desc: "Introduction to EaseMotion CSS",
      href: "#getting-started",
      category: "Introduction",
      icon: "🚀",
      keywords: "intro welcome overview",
    },
    {
      title: "Design Philosophy",
      desc: "Human-readable, animation-first, composable, clean & minimal",
      href: "#philosophy",
      category: "Introduction",
      icon: "💡",
      keywords: "principle human readable animation first composable clean minimal",
    },
    {
      title: "Installation",
      desc: "CDN via jsDelivr, npm (coming soon), cloning the repo",
      href: "#installation",
      category: "Introduction",
      icon: "📦",
      keywords: "cdn jsdelivr npm install setup link",
    },

    // ── Core ─────────────────────────────────────────────────
    {
      title: "Variables",
      desc: "CSS custom properties — colors, speeds, spacing tokens",
      href: "#variables",
      category: "Core",
      icon: "🎨",
      keywords: "css custom properties root tokens colors speed spacing",
    },
    {
      title: "Dark Mode",
      desc: "Automatic dark/light theme via data-theme and prefers-color-scheme",
      href: "#dark-mode",
      category: "Core",
      icon: "🌙",
      keywords: "dark light theme prefers-color-scheme data-theme toggle",
    },
    {
      title: "Utilities",
      desc: "Spacing, layout, flexbox, grid, typography and visual utilities",
      href: "#utilities",
      category: "Core",
      icon: "🛠️",
      keywords:
        "ease-center ease-flex ease-gap ease-items-center layout spacing grid typography",
    },
    {
      title: "Backdrop Blur",
      desc: "Glassmorphic backdrop blur — ease-backdrop-blur, ease-backdrop-blur-sm/md/lg",
      href: "#utilities",
      category: "Utilities",
      icon: "🪟",
      keywords:
        "ease-backdrop-blur glassmorphism blur sm md lg glass filter backdrop",
    },
    {
      title: "Mix Blend Modes",
      desc: "ease-blend-{normal|multiply|screen|overlay|difference|exclusion}",
      href: "#utilities",
      category: "Utilities",
      icon: "✨",
      keywords:
        "ease-blend normal multiply screen overlay difference exclusion isolate mix blend",
    },
    {
      title: "Mask Image",
      desc: "Fade element edges — ease-mask-from-top, ease-mask-from-bottom, ease-mask-radial",
      href: "#utilities",
      category: "Utilities",
      icon: "🖼️",
      keywords: "ease-mask-from-top bottom radial alpha gradient fade edges",
    },
    {
      title: "Text Stroke",
      desc: "Outline text — ease-text-stroke, ease-text-stroke-0/1/2, ease-text-fill-none",
      href: "#utilities",
      category: "Utilities",
      icon: "🔡",
      keywords: "ease-text-stroke text-fill-none hollow outline text",
    },
    {
      title: "Gradient Text",
      desc: "Animated gradient fill — ease-gradient-text, ease-gradient-text-animated",
      href: "#utilities",
      category: "Utilities",
      icon: "🌈",
      keywords:
        "ease-gradient-text animated linear gradient fill background-clip",
    },
    {
      title: "Text Highlight",
      desc: "Translucent background sweep behind text — ease-highlight-text",
      href: "#utilities",
      category: "Utilities",
      icon: "🖊️",
      keywords: "ease-highlight-text sweep background translucent",
    },

    // ── Animations ───────────────────────────────────────────
    {
      title: "Animations",
      desc: "Overview of all animation classes",
      href: "#animations",
      category: "Animations",
      icon: "🎬",
      keywords: "animation overview all classes",
    },
    {
      title: "ease-fade-in",
      desc: "Fade element from 0 → 1 opacity",
      href: "#animations",
      category: "Animations",
      icon: "🎬",
      keywords: "fade in opacity animation",
    },
    {
      title: "ease-slide-up",
      desc: "Slide element up while fading in",
      href: "#animations",
      category: "Animations",
      icon: "⬆️",
      keywords: "slide up fade animation transform translate",
    },
    {
      title: "ease-bounce",
      desc: "Infinite vertical bounce animation",
      href: "#animations",
      category: "Animations",
      icon: "⚽",
      keywords: "bounce infinite vertical loop animation",
    },
    {
      title: "ease-hover-grow",
      desc: "Scale up element on hover (elastic spring)",
      href: "#animations",
      category: "Animations",
      icon: "🔍",
      keywords: "hover grow scale elastic spring transform",
    },
    {
      title: "ease-flip-3d",
      desc: "3D card flip — use with ease-flip-3d-inner, ease-flip-3d-face, ease-flip-3d-back",
      href: "#animations",
      category: "Animations",
      icon: "🃏",
      keywords: "flip 3d card inner face back perspective transform",
    },
    {
      title: "ease-shimmer-text",
      desc: "Premium animated text gradient shimmer sweep",
      href: "#animations",
      category: "Animations",
      icon: "💫",
      keywords: "shimmer text gradient sweep premium animated",
    },
    {
      title: "ease-mask-reveal",
      desc: "Reveal element with sliding or circular clip-path masks",
      href: "#animations",
      category: "Animations",
      icon: "🔮",
      keywords: "mask reveal y circle clip-path sliding",
    },

    // ── Components ───────────────────────────────────────────
    {
      title: "Components",
      desc: "Pre-built UI components using EaseMotion classes",
      href: "#components",
      category: "Components",
      icon: "🧩",
      keywords: "components ui pre-built",
    },
    {
      title: "Buttons",
      desc: "ease-btn, ease-btn-primary, ease-btn-sm, ease-btn-pill",
      href: "#buttons",
      category: "Components",
      icon: "🔘",
      keywords: "ease-btn primary sm pill button click interactive",
    },
    {
      title: "Cards",
      desc: "ease-card — surface card component",
      href: "#cards",
      category: "Components",
      icon: "🗂️",
      keywords: "ease-card surface card container box",
    },
    {
      title: "Scroll Progress",
      desc: "ease-scroll-progress — reading progress indicator bar",
      href: "#scroll-progress",
      category: "Components",
      icon: "📊",
      keywords: "scroll progress bar reading indicator ease-scroll-progress",
    },
    {
      title: "Forms",
      desc: "ease-field, ease-input, ease-textarea, ease-select — validation-ready form fields",
      href: "#forms",
      category: "Components",
      icon: "📝",
      keywords:
        "ease-field ease-input ease-textarea ease-select form validation success danger",
    },

    // ── Animation Builder ─────────────────────────────────────
    {
      title: "Animation Builder",
      desc: "Visual builder to compose and preview animation combinations",
      href: "animation-combo.html",
      category: "Tools",
      icon: "🎛️",
      keywords: "animation builder visual composer preview combo",
    },
    {
      title: "Animation Preview",
      desc: "Live preview of all animation classes",
      href: "animations-preview.html",
      category: "Tools",
      icon: "▶️",
      keywords: "animation preview live demo all classes",
    },

    // ── Contributing ──────────────────────────────────────────
    {
      title: "How to Contribute",
      desc: "Submission workflow, folder structure, and curated contribution model",
      href: "#how-to-contribute",
      category: "Contributing",
      icon: "🤝",
      keywords:
        "contribute contribution submission workflow pr pull request gssoc",
    },
    {
      title: "Submission Folder Rules",
      desc: "submissions/examples/your-feature-name-xx/ — three-file rule",
      href: "#submission-structure",
      category: "Contributing",
      icon: "📁",
      keywords:
        "submission folder structure three file rule demo.html style.css README.md",
    },
    {
      title: "Naming Convention",
      desc: "kebab-case + unique suffix, e.g. ease-hover-sap, ease-tabs-ak",
      href: "#submission-naming",
      category: "Contributing",
      icon: "🏷️",
      keywords: "naming convention kebab case suffix unique identifier",
    },
    {
      title: "Naming Rules",
      desc: "All integrated classes use the ease- prefix",
      href: "#naming",
      category: "Contributing",
      icon: "📋",
      keywords: "ease prefix naming rules integrated class",
    },
    {
      title: "Strict Repository Rules",
      desc: "Issue limit, inactivity period, PR rate limit, squash commits",
      href: "#strict-rules",
      category: "Contributing",
      icon: "⚠️",
      keywords: "rules limit inactivity pr rate squash commits",
    },
  ];

  /* ── 2. Utility: Highlight matched text ─────────────────────
     Wraps matched substrings in <mark class="em-search-highlight">
  ─────────────────────────────────────────────────────────── */
  function highlightMatch(text, query) {
    if (!query || !text) return escapeHtml(text);
    const escaped = escapeHtml(text);
    const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return escaped.replace(
      new RegExp(`(${safeQuery})`, "gi"),
      '<mark class="em-search-highlight">$1</mark>'
    );
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ── 3. Utility: Score / filter results ─────────────────────
     Simple scoring:
       3 pts — title starts with query
       2 pts — title contains query
       1 pt  — desc or keywords contain query
  ─────────────────────────────────────────────────────────── */
  function searchIndex(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return SEARCH_INDEX.map((item) => {
      const titleLow = item.title.toLowerCase();
      const descLow = item.desc.toLowerCase();
      const kwLow = (item.keywords || "").toLowerCase();

      let score = 0;
      if (titleLow.startsWith(q)) score = 4;
      else if (titleLow.includes(q)) score = 3;
      else if (descLow.includes(q)) score = 2;
      else if (kwLow.includes(q)) score = 1;

      return { item, score };
    })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.item);
  }

  /* ── 4. DOM — Build HTML skeleton ──────────────────────────── */
  function buildSearchUI() {
    // ── 4a. Navbar trigger button ──────────────────────────────
    const triggerBtn = document.createElement("li");
    triggerBtn.innerHTML = `
      <button
        class="em-search-trigger"
        id="em-search-trigger"
        aria-label="Open search (Ctrl+K)"
        aria-haspopup="dialog"
        aria-controls="em-search-modal"
        type="button"
      >
        <svg class="em-search-trigger__icon" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          aria-hidden="true">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <span class="em-search-trigger__text">Search docs…</span>
        <span class="em-search-trigger__kbd" aria-hidden="true">
          <kbd>Ctrl</kbd><kbd>K</kbd>
        </span>
      </button>
    `;

    // ── 4b. Overlay + Modal ────────────────────────────────────
    const overlay = document.createElement("div");
    overlay.id = "em-search-overlay";
    overlay.className = "em-search-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Documentation search");

    overlay.innerHTML = `
      <div class="em-search-modal" id="em-search-modal">

        <!-- Input row -->
        <div class="em-search-header">
          <svg class="em-search-icon" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            class="em-search-input"
            id="em-search-input"
            type="search"
            placeholder="Search documentation…"
            autocomplete="off"
            spellcheck="false"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded="false"
            aria-controls="em-search-listbox"
            aria-activedescendant=""
          />
          <button class="em-search-close-btn" id="em-search-close-btn"
            type="button" aria-label="Close search">Esc</button>
        </div>

        <!-- Results -->
        <div class="em-search-results" id="em-search-listbox"
          role="listbox" aria-label="Search results">
          <!-- Populated dynamically -->
        </div>

        <!-- Footer hints -->
        <footer class="em-search-footer" aria-hidden="true">
          <span class="em-search-footer__hint">
            <kbd>↑</kbd><kbd>↓</kbd> navigate
          </span>
          <span class="em-search-footer__hint">
            <kbd>Enter</kbd> select
          </span>
          <span class="em-search-footer__hint">
            <kbd>Esc</kbd> close
          </span>
        </footer>
      </div>
    `;

    return { triggerBtn, overlay };
  }

  /* ── 5. Render results into listbox ────────────────────────── */
  function renderResults(results, query, listbox) {
    if (results.length === 0) {
      listbox.innerHTML = `
        <div class="em-search-empty" role="status" aria-live="polite">
          <span class="em-search-empty__emoji">🔍</span>
          <p class="em-search-empty__msg">No results for "<strong>${escapeHtml(query)}</strong>"</p>
          <p class="em-search-empty__hint">Try searching for a class name, section, or keyword</p>
        </div>
      `;
      return;
    }

    // Group by category
    const groups = {};
    results.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });

    let html = "";
    let globalIndex = 0;

    Object.entries(groups).forEach(([category, items], gi) => {
      if (gi > 0) html += `<div class="em-search-divider" role="separator"></div>`;
      html += `
        <div class="em-search-group" role="group" aria-label="${escapeHtml(category)}">
          <div class="em-search-group-label">${escapeHtml(category)}</div>
        </div>
      `;
      items.forEach((item) => {
        const id = `em-result-${globalIndex}`;
        html += `
          <a
            class="em-search-item"
            id="${id}"
            href="${escapeHtml(item.href)}"
            role="option"
            aria-selected="false"
            data-index="${globalIndex}"
            tabindex="-1"
          >
            <span class="em-search-item__icon" aria-hidden="true">${item.icon}</span>
            <span class="em-search-item__body">
              <span class="em-search-item__title">${highlightMatch(item.title, query)}</span>
              <span class="em-search-item__desc">${highlightMatch(item.desc, query)}</span>
            </span>
            <svg class="em-search-item__arrow" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </a>
        `;
        globalIndex++;
      });
    });

    listbox.innerHTML = html;
    listbox.setAttribute("aria-live", "polite");
  }

  /* ── 6. Show initial "quick links" when palette is empty ─── */
  function renderDefaultState(listbox) {
    const defaults = SEARCH_INDEX.slice(0, 8);
    renderResults(defaults, "", listbox);
    // show a hint message at top
    const hint = document.createElement("div");
    hint.style.cssText =
      "padding:12px 20px 4px;font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:0.05em;text-transform:uppercase;font-weight:700;";
    hint.textContent = "Quick Links";
    listbox.prepend(hint);
  }

  /* ── 7. Main controller ─────────────────────────────────────── */
  function init() {
    const headerLinks = document.querySelector(".docs-header-links");
    if (!headerLinks) return;

    const { triggerBtn, overlay } = buildSearchUI();

    // Insert trigger before the theme toggle (second-to-last <li>)
    const themeToggleLi = headerLinks.querySelector("li:last-child");
    headerLinks.insertBefore(triggerBtn, themeToggleLi);

    // Append overlay to body
    document.body.appendChild(overlay);

    const input = overlay.querySelector("#em-search-input");
    const listbox = overlay.querySelector("#em-search-listbox");
    const closeBtn = overlay.querySelector("#em-search-close-btn");
    const triggerButton = triggerBtn.querySelector("#em-search-trigger");

    let activeIndex = -1;
    let currentResults = [];

    /* ── Open / Close ─────────────────────────────────────── */
    function openPalette() {
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
      input.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      // Focus input after transition starts
      requestAnimationFrame(() => {
        requestAnimationFrame(() => input.focus());
      });
      // Show default quick links if empty
      if (!input.value.trim()) {
        renderDefaultState(listbox);
      }
      activeIndex = -1;
    }

    function closePalette() {
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      input.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      input.value = "";
      listbox.innerHTML = "";
      activeIndex = -1;
      currentResults = [];
      // Return focus to trigger
      triggerButton.focus();
    }

    /* ── Search / Render ──────────────────────────────────── */
    function handleInput() {
      const q = input.value.trim();
      if (!q) {
        renderDefaultState(listbox);
        activeIndex = -1;
        input.setAttribute("aria-activedescendant", "");
        return;
      }
      currentResults = searchIndex(q);
      renderResults(currentResults, q, listbox);
      activeIndex = -1;
      input.setAttribute("aria-activedescendant", "");

      // Wire click handlers
      listbox.querySelectorAll(".em-search-item").forEach((el) => {
        el.addEventListener("click", () => {
          navigate(el);
        });
      });
    }

    /* ── Keyboard Navigation ──────────────────────────────── */
    function getItems() {
      return Array.from(listbox.querySelectorAll(".em-search-item"));
    }

    function setActive(index) {
      const items = getItems();
      if (items.length === 0) return;
      // Clamp
      index = Math.max(0, Math.min(index, items.length - 1));
      activeIndex = index;

      items.forEach((el, i) => {
        const isActive = i === activeIndex;
        el.classList.toggle("is-active", isActive);
        el.setAttribute("aria-selected", isActive ? "true" : "false");
        if (isActive) {
          el.scrollIntoView({ block: "nearest" });
          input.setAttribute("aria-activedescendant", el.id);
        }
      });
    }

    function navigate(el) {
      const href = el.getAttribute("href");
      closePalette();
      if (!href) return;

      if (href.startsWith("#")) {
        // Same-page anchor
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          // Highlight briefly
          target.style.transition = "box-shadow 0.3s ease";
          target.style.boxShadow =
            "0 0 0 3px rgba(108,99,255,0.4), 0 0 20px rgba(108,99,255,0.1)";
          target.style.borderRadius = "8px";
          setTimeout(() => {
            target.style.boxShadow = "";
            target.style.borderRadius = "";
          }, 1800);
        }
      } else {
        // External / different page
        window.location.href = href;
      }
    }

    /* ── Event Listeners ──────────────────────────────────── */
    // Trigger button
    triggerButton.addEventListener("click", openPalette);

    // Close button
    closeBtn.addEventListener("click", closePalette);

    // Click outside modal to close
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closePalette();
    });

    // Input typing
    let debounceTimer;
    input.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(handleInput, 60);
    });

    // Keyboard shortcuts inside palette
    input.addEventListener("keydown", (e) => {
      const items = getItems();
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActive(activeIndex < 0 ? 0 : activeIndex + 1);
          break;
        case "ArrowUp":
          e.preventDefault();
          setActive(activeIndex <= 0 ? items.length - 1 : activeIndex - 1);
          break;
        case "Enter":
          e.preventDefault();
          if (activeIndex >= 0 && items[activeIndex]) {
            navigate(items[activeIndex]);
          } else if (items.length === 1) {
            navigate(items[0]);
          }
          break;
        case "Escape":
          closePalette();
          break;
        case "Tab":
          // Trap focus inside modal
          e.preventDefault();
          if (items.length > 0) {
            setActive(activeIndex < 0 ? 0 : (activeIndex + 1) % items.length);
          }
          break;
      }
    });

    // Wire item clicks after initial default render
    listbox.addEventListener("click", (e) => {
      const item = e.target.closest(".em-search-item");
      if (item) navigate(item);
    });

    // Hover activates item
    listbox.addEventListener("mousemove", (e) => {
      const item = e.target.closest(".em-search-item");
      if (!item) return;
      const idx = parseInt(item.dataset.index, 10);
      if (!isNaN(idx)) setActive(idx);
    });

    // Global Ctrl+K / Cmd+K
    document.addEventListener("keydown", (e) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const modifier = isMac ? e.metaKey : e.ctrlKey;
      if (modifier && e.key === "k") {
        e.preventDefault();
        if (overlay.classList.contains("is-open")) {
          closePalette();
        } else {
          openPalette();
        }
      }
      // Also close on Escape when palette is open
      if (e.key === "Escape" && overlay.classList.contains("is-open")) {
        closePalette();
      }
    });

    // Initial ARIA state
    overlay.setAttribute("aria-hidden", "true");
  }

  /* ── 8. Bootstrap after DOM ready ───────────────────────── */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
