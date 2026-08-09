Morph-Glow Accordion

A FAQ-style accordion where opening an item does three things at once: its corners reshape (tight uniform radius → looser, asymmetric radius), it picks up a soft colored glow that breathes gently while open, and the panel expands with a real smooth height transition — no max-height guessing. Pure CSS, driven by the checkbox hack. No JavaScript.

Files
File	Purpose
demo.html	A 4-item pricing/billing FAQ accordion
style.css	The morph, glow, and height-expand mechanics
README.md	This file
Markup
html
<div class="accordion-item">
  <input type="checkbox" id="acc-1" class="accordion-toggle">
  <label for="acc-1" class="accordion-header">
    <span class="accordion-title">Question text</span>
    <span class="accordion-icon" aria-hidden="true"></span>
  </label>
  <div class="accordion-panel-wrapper">
    <div class="accordion-panel">
      <p>Answer text.</p>
    </div>
  </div>
</div>

Each item is independent — this is a "many can be open at once" accordion (every checkbox is separate, not grouped like radios), which is the more common pattern for FAQ content where answers are often read side by side. Mark any item checked in the markup to have it open by default.

The three effects

1. Smooth height expand, no fixed max-height. The panel wrapper is a CSS grid with a single row track that animates between 0fr and 1fr:

css
.accordion-panel-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--mg-duration) var(--mg-ease);
}

.accordion-toggle:checked ~ .accordion-panel-wrapper {
  grid-template-rows: 1fr;
}

This is what lets answers of any length expand smoothly — the older max-height: 500px trick either clips long content or animates an awkward pause on short content. The direct child (.accordion-panel) needs overflow: hidden and no explicit height for the row track to actually control it.

2. The corner morph. Closed corners are a small, uniform radius. Open, the top corners loosen to a larger radius while the bottom corners settle to something in between — an asymmetric reshape, not just "bigger rounding everywhere":

css
.accordion-item:has(.accordion-toggle:checked) {
  border-radius: var(--mg-radius-open) var(--mg-radius-open) var(--mg-radius-closed) var(--mg-radius-closed);
}

3. The glow. The open item gets a soft, colored box-shadow halo that gently breathes (a slow, subtle @keyframes pulse between two glow intensities) for as long as it stays open — a quiet ambient cue for which item currently has your attention, distinct from the header's own icon change.

Icon morph

The +/× icon is two ::before/::after bars, no icon font or SVG. One bar is fixed (the horizontal stroke); the other rotates 90° and scales to zero, which reads as it folding into the fixed bar rather than two independent shapes crossing:

css
.accordion-toggle:checked ~ .accordion-header .accordion-icon::after {
  transform: translate(-50%, -50%) rotate(90deg) scaleY(0);
}
CSS custom properties
Property	Default	Controls
--mg-duration	380ms	Length of the morph/expand transition
--mg-ease	cubic-bezier(0.4, 0, 0.2, 1)	Easing curve
--mg-radius-closed	12px	Corner radius at rest
--mg-radius-open	22px	Corner radius (top corners) when open
--mg-pulse-duration	2600ms	Length of one glow breathing cycle
--mg-glow	soft mint, 35% alpha	The glow color itself
Accessibility
The checkbox is real and stays in the tab order (hidden with a clip-based technique, not display: none), so <kbd>Tab</kbd> + <kbd>Space</kbd> opens/closes each item exactly like a native checkbox.
.accordion-toggle:focus-visible ~ .accordion-header draws a visible ring on the header when its checkbox has keyboard focus.
Respects prefers-reduced-motion: reduce — but doesn't remove the glow outright, since it's a genuine "this one is open" signal, not just decoration. Instead the pulse animation stops and the glow holds at a fixed intensity, while all transitions collapse to 1ms.
Responsive behavior

Header padding and panel text padding tighten slightly below 480px; the morph/glow/expand mechanics themselves are viewport-independent and need no breakpoint-specific overrides.

Browser support

Uses grid-template-rows animation (broadly supported in current evergreen browsers) and :has() for the item-level glow/radius state. Where :has() is unsupported, the header's own border-radius and icon morph still work (they key off :checked ~ sibling selectors, not :has()) — only the outer item's glow and bottom-corner radius softening would be missed, a purely cosmetic degradation.