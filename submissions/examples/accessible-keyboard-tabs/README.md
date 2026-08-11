Accessible Keyboard Tabs

A tabs widget that matches the WAI-ARIA APG Tabs pattern: click a tab, or focus one and use <kbd>←</kbd> <kbd>→</kbd> (or <kbd>Home</kbd>/<kbd>End</kbd>) to move between them, with a sliding indicator that follows smoothly. Fixes #60880 — "Tab components lack keyboard arrow keys navigation support."

Why this one isn't pure CSS

Every other submission in this batch has been CSS/HTML only. This one can't be — intercepting arrow-key presses is not something CSS can do. There's no CSS selector or pseudo-class that fires on ArrowLeft; that's squarely JavaScript's job, and it's the literal bug this issue reports. A "CSS-only" version of this fix would just not fix the bug. So tabs.js contains a small, real keydown handler — nothing else in this submission needed one, and it stays out of everything that CSS can own (colors, spacing, the sliding indicator's transition, the panel fade).

Files
File	Purpose
demo.html	A 4-tab settings widget
style.css	All visual styling, including the indicator's transition
tabs.js	The keyboard/selection logic — see below
README.md	This file
Markup
html
<div class="ease-tabs">
  <div class="ease-tabs__list" role="tablist" aria-label="Workspace settings">
    <button class="ease-tabs__tab" role="tab" id="tab-general"
      aria-controls="panel-general" aria-selected="true" tabindex="0">
      General
    </button>
    <button class="ease-tabs__tab" role="tab" id="tab-members"
      aria-controls="panel-members" aria-selected="false" tabindex="-1">
      Members
    </button>
    <span class="ease-tabs__indicator" aria-hidden="true"></span>
  </div>

  <div class="ease-tabs__panel" role="tabpanel" id="panel-general"
    aria-labelledby="tab-general" tabindex="0">
    General settings…
  </div>
  <div class="ease-tabs__panel" role="tabpanel" id="panel-members"
    aria-labelledby="tab-members" tabindex="0" hidden>
    Member settings…
  </div>
</div>

Include tabs.js once per page; it initializes every .ease-tabs block it finds, so multiple independent tab groups on one page work with no extra wiring.

What tabs.js actually does

Implements the APG pattern's automatic activation model and roving tabindex:

Arrow keys (ArrowRight/ArrowDown next, ArrowLeft/ArrowUp previous, wrapping at either end) move focus and selection together — moving focus to a tab activates it immediately, which is the "automatic" variant of the pattern (the alternative, "manual activation," would require pressing Enter/Space to actually switch; automatic is the more common expectation for tabs).
Home / End jump to the first / last tab.
Click selects a tab directly, same as always.
Roving tabindex: only the selected tab has tabindex="0" — every other tab is tabindex="-1". This is what lets a user Tab into the widget once, arrow around freely inside it, then Tab back out to the rest of the page in one more press, instead of tabbing through every individual tab.
The sliding indicator's position and width are set in pixels by reading the newly-selected tab's real offsetLeft/offsetWidth — that measurement is also not something CSS can do on its own, since it depends on actual rendered geometry, which can change (window resize, font load, wrapping to two rows on narrow screens). The script re-measures on resize for exactly that reason.

Everything the script touches is limited to aria-selected, tabindex, the hidden attribute, and the indicator's inline transform/width — it never sets colors, fonts, or spacing; that's style.css's job entirely, and the transition itself (the smooth slide, not the target position) is a CSS transition, not a JS animation loop.

Accessibility
Matches the WAI-ARIA APG Tabs pattern structurally: role="tablist" / role="tab" / role="tabpanel", aria-controls, aria-labelledby, and aria-selected are all wired correctly, not just visually implied.
This is the accessibility fix — arrow-key navigation, Home/End, and roving tabindex are the actual acceptance criteria from #60880, not an extra.
:focus-visible outlines exist independently of the indicator, so keyboard focus is visible even in the (very unlikely) case tabs.js fails to load — the tabs remain click-usable and each panel is still independently focusable and readable.
Respects prefers-reduced-motion: reduce for the indicator's slide and the panel's fade-in; none of the actual interaction logic changes.
Responsive behavior

Below 480px the tab list wraps to two rows of two; tabs.js's resize listener keeps the indicator aligned to the (possibly now two-row) layout automatically.

Browser support

The CSS uses only transform, opacity, and standard transitions. The JS uses plain addEventListener, querySelectorAll, and Array.prototype methods — no build step, no dependencies, works in any current browser.