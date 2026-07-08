/* ==========================================================================
   ACCESSIBLE RANGE SLIDER — script.js
   EaseMotion CSS · Vanilla JS behaviour layer
   --------------------------------------------------------------------------
   TABLE OF CONTENTS
   1. DOM References
   2. Theme Management (persisted via localStorage)
   3. Tick Mark Generation
   4. Slider State Helpers (percentage, low/medium/high)
   5. Tooltip Positioning
   6. Core UI Sync (single source of truth for all live updates)
   7. Event Listeners
   8. Initialisation
   ========================================================================== */

(function () {
  "use strict";

  /* ========================================================================
     1. DOM REFERENCES
     ======================================================================== */

  const themeToggleBtn = document.getElementById("themeToggle");
  const slider = document.getElementById("rangeSlider");
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const tooltip = document.getElementById("tooltip");
  const tooltipValue = document.getElementById("tooltipValue");
  const ticksContainer = document.getElementById("ticks");
  const liveRegion = document.getElementById("liveRegion");

  const infoValue = document.getElementById("infoValue");
  const infoPercentage = document.getElementById("infoPercentage");
  const infoMin = document.getElementById("infoMin");
  const infoMax = document.getElementById("infoMax");
  const stateReadout = document.getElementById("stateReadout");

  const THEME_STORAGE_KEY = "easemotion-slider-theme";
  const TICK_STEP = 10; // one tick every 10 units across the 0–100 range
  const KEY_TICKS = [0, 50, 100]; // always visible on mobile (see style.css .tick-key)

  // Tracks whether the user is actively interacting (drag / keyboard focus)
  // so we know when to show vs. hide the floating tooltip.
  let isInteracting = false;
  let hideTooltipTimeout = null;


  /* ========================================================================
     2. THEME MANAGEMENT
     Reads/writes the user's preferred theme to localStorage and keeps the
     toggle button's accessible state (aria-pressed, aria-label) in sync.
     ======================================================================== */

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY);
    } catch (err) {
      // localStorage may be unavailable (e.g. private browsing) — fail silently
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (err) {
      /* no-op — persistence is a nice-to-have, not a hard requirement */
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    const isLight = theme === "light";
    themeToggleBtn.setAttribute("aria-pressed", String(isLight));
    themeToggleBtn.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme"
    );
  }

  function initTheme() {
    const stored = getStoredTheme();
    const prefersLight =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

    // Priority: saved preference > OS preference > brand default (dark)
    const initialTheme = stored || (prefersLight ? "light" : "dark");
    applyTheme(initialTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
    storeTheme(next);
  }


  /* ========================================================================
     3. TICK MARK GENERATION
     Builds 0–100 tick marks (step 10) as DOM nodes inside #ticks, matching
     the slider's min/max so alignment always stays correct even if those
     attributes change.
     ======================================================================== */

  function generateTicks() {
    const min = Number(slider.min);
    const max = Number(slider.max);

    ticksContainer.innerHTML = ""; // clear in case of re-generation

    for (let value = min; value <= max; value += TICK_STEP) {
      const tick = document.createElement("div");
      tick.className = "tick";
      tick.dataset.value = String(value);

      if (KEY_TICKS.includes(value)) {
        tick.classList.add("tick-key");
      }

      const mark = document.createElement("span");
      mark.className = "tick-mark";

      const label = document.createElement("span");
      label.className = "tick-label";
      label.textContent = String(value);

      tick.appendChild(mark);
      tick.appendChild(label);
      ticksContainer.appendChild(tick);
    }
  }

  function highlightNearestTick(value) {
    const min = Number(slider.min);
    const max = Number(slider.max);
    const nearest = Math.round((value - min) / TICK_STEP) * TICK_STEP + min;
    const clampedNearest = Math.max(min, Math.min(max, nearest));

    const allTicks = ticksContainer.querySelectorAll(".tick");
    allTicks.forEach((tick) => {
      const tickValue = Number(tick.dataset.value);
      tick.classList.toggle("is-active", tickValue === clampedNearest);
    });
  }


  /* ========================================================================
     4. SLIDER STATE HELPERS
     ======================================================================== */

  function getPercentage(value, min, max) {
    return ((value - min) / (max - min)) * 100;
  }

  // Classifies the current value into Low / Medium / High thirds of the range.
  function getState(value, min, max) {
    const percent = getPercentage(value, min, max);

    if (percent < 34) return "low";
    if (percent < 67) return "medium";
    return "high";
  }

  function formatStateLabel(state) {
    return state.charAt(0).toUpperCase() + state.slice(1);
  }


  /* ========================================================================
     5. TOOLTIP POSITIONING
     Calculates the thumb's actual pixel offset (accounting for thumb width,
     which shrinks the usable travel distance versus the full track width)
     so the tooltip tracks the visual thumb precisely at any viewport size.
     ======================================================================== */

  function positionTooltip(percent) {
    const trackWidth = slider.offsetWidth;
    const thumbSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--thumb-size")) || 26;

    // The thumb's center travels between (thumbSize / 2) and (trackWidth - thumbSize / 2)
    const usableWidth = trackWidth - thumbSize;
    const thumbCenter = thumbSize / 2 + (percent / 100) * usableWidth;

    tooltip.style.left = `${thumbCenter}px`;
  }


  /* ========================================================================
     6. CORE UI SYNC
     Single source of truth: every visual/ARIA update happens here so the
     slider, tooltip, ticks, and info panel never fall out of sync.
     ======================================================================== */

  function updateUI(announceToScreenReader) {
    const value = Number(slider.value);
    const min = Number(slider.min);
    const max = Number(slider.max);
    const percent = getPercentage(value, min, max);
    const state = getState(value, min, max);

    // --- Native + ARIA sync ---
    slider.setAttribute("aria-valuenow", String(value));

    // --- Custom track fill (consumed by style.css) ---
    slider.style.setProperty("--slider-percent", `${percent}%`);

    // --- Tooltip content + position ---
    tooltipValue.textContent = value;
    positionTooltip(percent);

    // --- Tick highlight ---
    highlightNearestTick(value);

    // --- Info panel ---
    infoValue.textContent = value;
    infoPercentage.textContent = `${Math.round(percent)}%`;
    infoMin.textContent = min;
    infoMax.textContent = max;

    // --- State badge ---
    stateReadout.textContent = formatStateLabel(state);
    stateReadout.setAttribute("data-state", state);

    // --- Screen reader announcement (throttled to real changes only) ---
    if (announceToScreenReader) {
      liveRegion.textContent = `Value ${value} of ${max}, ${formatStateLabel(state)}`;
    }
  }


  /* ========================================================================
     7. EVENT LISTENERS
     ======================================================================== */

  function showTooltip() {
    clearTimeout(hideTooltipTimeout);
    tooltip.classList.add("is-active");
  }

  function scheduleHideTooltip() {
    // Small delay avoids flicker between e.g. mouseup and blur firing back-to-back
    hideTooltipTimeout = setTimeout(() => {
      if (!isInteracting) {
        tooltip.classList.remove("is-active");
      }
    }, 250);
  }

  function attachEvents() {
    // Theme toggle
    themeToggleBtn.addEventListener("click", toggleTheme);

    // Live updates while dragging or using the keyboard (arrows, Home/End, PgUp/PgDn)
    slider.addEventListener("input", () => updateUI(true));

    // Pointer interaction (mouse / touch / pen)
    slider.addEventListener("pointerdown", () => {
      isInteracting = true;
      showTooltip();
    });

    window.addEventListener("pointerup", () => {
      isInteracting = false;
      scheduleHideTooltip();
    });

    // Keyboard interaction
    slider.addEventListener("focus", () => {
      isInteracting = true;
      showTooltip();
    });

    slider.addEventListener("blur", () => {
      isInteracting = false;
      scheduleHideTooltip();
    });

    // Mouse hover (without focus/drag) also reveals the tooltip briefly
    slider.addEventListener("mouseenter", showTooltip);
    slider.addEventListener("mouseleave", () => {
      if (!isInteracting) scheduleHideTooltip();
    });

    // Keep tooltip aligned on resize/orientation change (thumb travel distance changes)
    window.addEventListener("resize", () => {
      const value = Number(slider.value);
      const percent = getPercentage(value, Number(slider.min), Number(slider.max));
      positionTooltip(percent);
    });
  }


  /* ========================================================================
     8. INITIALISATION
     ======================================================================== */

  function init() {
    initTheme();
    generateTicks();
    updateUI(false); // sync initial state without triggering an SR announcement
    attachEvents();
  }

  // Defer to DOMContentLoaded in case script.js is ever moved to <head>
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();