# EaseMotion Offcanvas Drawer (Floating SaaS Theme)

A zero-JS, pure CSS implementation of a modern floating offcanvas drawer. This variant eschews full-height, edge-touching designs in favor of a "floating card" aesthetic popular in modern SaaS dashboards (e.g., Linear, Vercel).

## Features
- **Zero JS Dependencies:** Uses the HTML hidden checkbox hack (`:checked` paired with `~`) to manage the state purely via the DOM/CSS.
- **SaaS Floating Aesthetic:** The drawer features a detached layout with prominent `border-radius`, a subtle border, and deep ambient drop shadows.
- **Silky Animations:** Utilizes a highly refined `cubic-bezier(0.16, 1, 0.3, 1)` transition for a premium, hardware-accelerated slide-in feel.
- **Fully Responsive:** Beautifully adapts to mobile screens (scaling width minus margins) while maintaining a fixed width on tablet and desktop.
- **Accessible:** Features interactive `role="button"` assignments on pure CSS triggers, `focus-visible` styling for keyboard navigation, and full `prefers-reduced-motion` compliance.

## Usage

1. Place the structural `.em-drawer-toggle` checkbox in your DOM.
2. Bind your triggers (`<label>` elements for opening, closing, and the background overlay) using matching `for` attributes pointing to the checkbox ID.
3. Position `.em-drawer` as a sibling node to your checkbox.

```html
<!-- Checkbox acting as state -->
<input type="checkbox" id="saas-drawer-toggle" class="em-drawer-toggle" aria-hidden="true" />

<!-- Any Label pointing to the ID can trigger the menu -->
<label for="saas-drawer-toggle" class="em-btn" role="button" tabindex="0">
  Open Menu
</label>

<!-- The Drawer Container -->
<aside class="em-drawer">
  <!-- Nav Content Here -->
</aside>
