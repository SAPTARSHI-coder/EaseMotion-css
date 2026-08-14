# ease-animated-dropdown-chevron-sap

A dropdown built on native `<details>`/`<summary>` where the chevron icon smoothly rotates 180° on open/close via the `[open]` attribute selector — no JS for the open/close logic itself.

## Usage
1. Copy `style.css` into your project.
2. Copy the `<details class="dropdown-chevron-sap">` markup from `demo.html`.
3. No JS required — `<details>` handles open/close state natively.

## Customization
- Change the `0.3s cubic-bezier(...)` transition on the chevron for a different rotation feel.
- Restyle `.dropdown-chevron-sap__panel` links for your design system.
- Swap the `&#9662;` glyph for an SVG chevron icon if preferred.

## Accessibility
Native `<details>`/`<summary>` is keyboard-operable (Enter/Space to toggle) and exposes correct semantics to assistive tech out of the box, unlike a custom `div`+JS dropdown.

## Browser support
All modern browsers (`<details>`/`<summary>`, `[open]` attribute selector).