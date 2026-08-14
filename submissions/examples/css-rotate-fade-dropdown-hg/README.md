Rotate-Fade Dropdown

A dropdown for product catalog layouts that opens with a small rotation and scale alongside the fade — no perspective, no 3D hinge, just a quick, slightly playful settle into place with a gentle overshoot. Pure CSS, driven by the checkbox hack. No JavaScript.

demo.html shows two uses: a toolbar "Sort" dropdown, and a per-product-card "quick actions" menu (Edit / Duplicate / Archive / Delete) anchored to each card's top-right corner.

Files
File	Purpose
demo.html	Toolbar sort dropdown + 4 product cards with quick-action menus
style.css	The rotate-fade mechanism, tokens, and catalog styling
README.md	This file
Markup
html
<div class="rf-dropdown">
  <input type="checkbox" id="rf-sort" class="rf-dropdown__toggle">
  <label for="rf-sort" class="rf-dropdown__close-overlay" aria-hidden="true"></label>
  <label for="rf-sort" class="rf-dropdown__trigger">
    Sort: <strong>Featured</strong>
    <span class="rf-dropdown__chevron" aria-hidden="true"></span>
  </label>
  <div class="rf-dropdown__panel" role="menu">
    <a href="#" class="rf-dropdown__item" role="menuitem">Featured</a>
    …
  </div>
</div>

Four pieces, in this order (order matters — the CSS relies on the general sibling combinator, which only looks forward through the DOM):

The hidden checkbox — the actual open/closed state.
A full-viewport <label for="..."> overlay — invisible and inert while closed, becomes a click target the instant the panel opens, so clicking anywhere outside closes it.
The visible trigger <label for="..."> (text, or an icon-only .rf-dropdown__icon-trigger for the per-card menus).
The panel.
How the rotate-fade works
css
.rf-dropdown__panel {
  transform-origin: top left;
  transform: rotate(var(--rf-rotate)) scale(var(--rf-scale)); /* -6deg, 0.92 by default */
  opacity: 0;
}

.rf-dropdown__toggle:checked ~ .rf-dropdown__panel {
  transform: rotate(0deg) scale(1);
  opacity: 1;
}

The easing does most of the personality work here: cubic-bezier(0.34, 1.56, 0.64, 1) overshoots slightly past its resting position before settling — the panel rotates a hair past flat and scales a hair past 100% before easing back, which is what makes this read as "quick and a little playful" rather than a plain linear fade. Because there's no perspective anywhere, the rotation stays flat and 2D — a deliberately lighter-weight effect than a 3D hinge-flip.

visibility toggles alongside opacity — instant on the way in, delayed by the full transition duration on the way out — so a closing panel never intercepts clicks or keyboard focus while it's still animating out.

CSS custom properties
Property	Default	Controls
--rf-duration	260ms	Length of the rotate-fade transition
--rf-ease	cubic-bezier(0.34, 1.56, 0.64, 1)	The overshoot easing curve
--rf-rotate	-6deg	Starting rotation before the panel opens
--rf-scale	0.92	Starting scale before the panel opens
Anchor variants
.rf-dropdown-right — right-aligns the panel (transform-origin: top right) instead of left-aligning it, for triggers near a container's right edge.
.rf-dropdown-corner — positions the whole .rf-dropdown absolutely in a card's top-right corner, used by the quick-actions menus so they don't take up card layout space.

Both are combined on the per-card menus in the demo (class="rf-dropdown rf-dropdown-corner rf-dropdown-right").

Accessibility
The checkbox is real and stays in the tab order (hidden with a clip-based technique, not display: none), so <kbd>Tab</kbd> + <kbd>Space</kbd> opens/closes it exactly like a native checkbox.
.rf-dropdown__toggle:focus-visible ~ .rf-dropdown__trigger (and the icon-trigger equivalent) draws a visible ring when the hidden checkbox has keyboard focus.
Closes on outside click via the overlay label described above.
Panels carry role="menu" with role="menuitem" links; icon-only triggers get a descriptive aria-label (e.g. "Quick actions for Mechanical Keyboard") rather than relying on the "⋮" glyph alone.
Respects prefers-reduced-motion: reduce — the panel appears/disappears at its resting transform immediately, with transitions collapsed to 1ms.
Responsive behavior

The product grid drops from four columns to two at 640px and to one at 420px. Panel positioning (left/right anchor) is unaffected by viewport size — the panels themselves are compact enough not to need a mobile-specific layout change.

Browser support

Uses only transform, opacity, CSS custom properties, and standard transitions — supported everywhere current, no fallback needed.