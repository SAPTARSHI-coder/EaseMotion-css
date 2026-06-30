/* ============================================================
   EaseMotion CSS — Interactive Playground JavaScript
   Live HTML editor with real-time preview, CSS variable controls,
   and class browser.
   ============================================================ */

const PLAYGROUND = (() => {
  const DEFAULT_CODE = `<div class="ease-center" style="min-height:300px;padding:2rem;">
  <div class="ease-fade-in" style="text-align:center;">
    <h1 class="ease-slide-up ease-delay-100">Hello, EaseMotion!</h1>
    <p class="ease-slide-up ease-delay-200" style="color:#64748b;">
      Edit this code to see live changes.
    </p>
    <button class="ease-btn ease-btn-primary ease-hover-grow">
      Get Started
    </button>
  </div>
</div>`;

  const CDN_LINK =
    "https://cdn.jsdelivr.net/npm/easemotion-css@latest/easemotion.min.css";

  let debounceTimer = null;
  let classesCache = [];

  /* ── DOM refs ─────────────────────────────────────────── */
  let textarea, iframe, statusEl, toastEl, classSearch, classList;

  function init() {
    textarea = document.getElementById("playground-input");
    iframe = document.getElementById("playground-iframe");
    statusEl = document.getElementById("preview-status");
    toastEl = document.getElementById("playground-toast");
    classSearch = document.getElementById("class-search");
    classList = document.getElementById("class-list");

    /* Set default code */
    textarea.value =
      localStorage.getItem("easemotion-playground-code") || DEFAULT_CODE;

    /* Debounced preview */
    textarea.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(updatePreview, 300);
    });

    /* Ctrl+Enter / Cmd+Enter to run immediately */
    textarea.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        clearTimeout(debounceTimer);
        updatePreview();
      }
    });

    /* Tab support in textarea */
    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value =
          textarea.value.substring(0, start) +
          "  " +
          textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }
    });

    /* Copy button */
    document.getElementById("btn-copy")?.addEventListener("click", copyCode);

    /* Reset button */
    document.getElementById("btn-reset")?.addEventListener("click", resetCode);

    /* CSS variable controls */
    document.querySelectorAll("[data-css-var]").forEach((el) => {
      el.addEventListener("input", () => updateCSSVariables());
    });

    /* Class browser */
    classSearch?.addEventListener("input", filterClasses);

    /* Resizer */
    initResizer();

    /* Initial render */
    updatePreview();
    loadClassList();
  }

  /* ── Preview ──────────────────────────────────────────── */
  function updatePreview() {
    const code = textarea.value;
    localStorage.setItem("easemotion-playground-code", code);

    const doc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${CDN_LINK}">
  <style id="playground-vars">
    :root {
      --ease-color-primary: #6c63ff;
      --ease-speed-fast: 150ms;
      --ease-speed-medium: 300ms;
      --ease-speed-slow: 600ms;
    }
  </style>
  <style>
    body { margin: 0; font-family: "Inter", system-ui, sans-serif; }
  </style>
</head>
<body>
${code}
</body>
</html>`;

    iframe.srcdoc = doc;
    updateStatus("ready");
  }

  /* ── Status ───────────────────────────────────────────── */
  function updateStatus(state) {
    if (!statusEl) return;
    const labels = { ready: "Ready", updating: "Updating..." };
    statusEl.textContent = labels[state] || state;
  }

  /* ── Copy ─────────────────────────────────────────────── */
  function copyCode() {
    navigator.clipboard
      .writeText(textarea.value)
      .then(() => {
        showToast("Code copied!");
      })
      .catch(() => {
        /* Fallback */
        textarea.select();
        document.execCommand("copy");
        showToast("Code copied!");
      });
  }

  /* ── Reset ────────────────────────────────────────────── */
  function resetCode() {
    textarea.value = DEFAULT_CODE;
    updatePreview();
    showToast("Reset to default");
  }

  /* ── Toast ────────────────────────────────────────────── */
  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("is-visible");
    clearTimeout(toastEl._hide);
    toastEl._hide = setTimeout(() => {
      toastEl.classList.remove("is-visible");
    }, 2000);
  }

  /* ── CSS Variable Controls ───────────────────────────── */
  function updateCSSVariables() {
    const vars = {};
    document.querySelectorAll("[data-css-var]").forEach((el) => {
      const name = el.getAttribute("data-css-var");
      const val =
        el.type === "color"
          ? el.value
          : el.value + el.getAttribute("data-unit") || "";
      vars[name] = val;

      const display = document.querySelector(
        `[data-css-var-display="${name}"]`
      );
      if (display) display.textContent = val;
    });

    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (iframeDoc) {
      const style = iframeDoc.getElementById("playground-vars");
      if (style) {
        const cssVars = Object.entries(vars)
          .map(([k, v]) => `${k}: ${v};`)
          .join("\n      ");
        style.textContent = `:root {\n      ${cssVars}\n    }`;
      }
    }
  }

  /* ── Class Browser ────────────────────────────────────── */
  function loadClassList() {
    if (classesCache.length) return renderClasses(classesCache);

    /* Extract class names from the CDN stylesheet */
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CDN_LINK;
    link.onload = () => {
      try {
        const sheets = document.styleSheets;
        for (const sheet of sheets) {
          if (!sheet.href || !sheet.href.includes("easemotion")) continue;
          try {
            const rules = sheet.cssRules || sheet.rules;
            for (const rule of rules) {
              if (rule.selectorText && rule.selectorText.startsWith(".ease-")) {
                const names = rule.selectorText
                  .split(",")
                  .map((s) => s.trim().replace(/^\./, ""));
                classesCache.push(...names);
              }
            }
          } catch (_) {
            /* CORS */
          }
        }
        classesCache = [...new Set(classesCache)].sort();
      } catch (_) {
        /* fallback */
      }

      if (!classesCache.length) {
        classesCache = [
          "ease-center",
          "ease-fade-in",
          "ease-slide-up",
          "ease-slide-in-left",
          "ease-slide-in-right",
          "ease-zoom-in",
          "ease-flip",
          "ease-hover-grow",
          "ease-hover-glow",
          "ease-hover-lift",
          "ease-btn",
          "ease-btn-primary",
          "ease-btn-success",
          "ease-btn-danger",
          "ease-btn-outline",
          "ease-btn-ghost",
          "ease-card",
          "ease-card-shadow",
          "ease-card-hover",
          "ease-card-glass",
          "ease-flex",
          "ease-grid",
          "ease-gap-1",
          "ease-gap-2",
          "ease-gap-4",
          "ease-gap-6",
          "ease-gap-8",
          "ease-delay-100",
          "ease-delay-200",
          "ease-delay-300",
          "ease-duration-fast",
          "ease-duration-slow",
          "ease-reveal",
          "ease-bounce",
          "ease-pulse",
          "ease-ping",
          "ease-rotate",
        ];
      }
      renderClasses(classesCache);
    };
    document.head.appendChild(link);
  }

  function renderClasses(classes) {
    if (!classList) return;
    classList.innerHTML = classes
      .map(
        (cls) =>
          `<div class="playground-class-item" data-class="${cls}">
        <code>.${cls}</code>
      </div>`
      )
      .join("");

    classList.querySelectorAll(".playground-class-item").forEach((el) => {
      el.addEventListener("click", () => {
        const cls = el.getAttribute("data-class");
        insertAtCursor(textarea, cls);
        updatePreview();
      });
    });
  }

  function filterClasses() {
    const q = classSearch.value.toLowerCase();
    const items = classList.querySelectorAll(".playground-class-item");
    items.forEach((el) => {
      const cls = el.getAttribute("data-class").toLowerCase();
      el.style.display = cls.includes(q) ? "" : "none";
    });
  }

  function insertAtCursor(el, text) {
    const start = el.selectionStart;
    const end = el.selectionEnd;
    el.value =
      el.value.substring(0, start) + text + " " + el.value.substring(end);
    el.selectionStart = el.selectionEnd = start + text.length + 1;
    el.focus();
  }

  /* ── Resizer ──────────────────────────────────────────── */
  function initResizer() {
    const resizer = document.getElementById("playground-resizer");
    const editor = document.querySelector(".playground-editor");
    if (!resizer || !editor) return;

    let isDragging = false;

    resizer.addEventListener("mousedown", (e) => {
      isDragging = true;
      resizer.classList.add("is-dragging");
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const container = editor.parentElement;
      const rect = container.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      const clamped = Math.max(20, Math.min(80, pct));
      editor.style.flex = `0 0 ${clamped}%`;
    });

    document.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        resizer.classList.remove("is-dragging");
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      }
    });
  }

  /* ── Public API ───────────────────────────────────────── */
  return { init };
})();

document.addEventListener("DOMContentLoaded", () => PLAYGROUND.init());
