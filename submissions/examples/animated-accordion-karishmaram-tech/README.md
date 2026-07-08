# Smooth-Animated Accordion / Disclosure Component

This submission provides a standalone, pure CSS-only solution for smoothly animating accordion and disclosure components from a height of `0` to `auto`. It addresses the problem outlined in the feature request issue regarding the historical difficulties of transitioning height dynamically without JavaScript.

## 🚀 The Solution

The component is built natively on top of HTML's `<details>` and `<summary>` elements, maximizing accessibility and keyboard navigation. 

To bypass the CSS limitation where `height: auto` cannot be transitioned, this component uses the modern **CSS Grid Trick**:
* The wrapper is set to `display: grid;` and defaults to `grid-template-rows: 0fr;`.
* Inside, the inner container uses `min-height: 0;` so it can properly collapse.
* When the `<details>` element receives the `[open]` attribute, the grid template transitions smoothly to `1fr`.

Additionally, the stylesheet includes a fallback optimization using the progressive `@supports (interpolate-size: allow-keywords)` flag for newer browser versions.

## 📦 Submission Contents

* `demo.html` — A clean, interactive playground featuring three example accordions showcasing the layout, styling, and text-wrapping during expansion.
* `style.css` — The complete stylesheet containing both the isolated accordion component rules (designed to be fully compatible with EaseMotion tokens like `--ease-speed-medium` and `--ease-ease`) and basic demo layouts.

## 🛠️ Integration Notes for Maintainers

The CSS is written defensively and uses standard BEM-like naming conventions (`.ease-accordion`, `.ease-accordion-header`, etc.). It is ready to be lifted into `components/accordion.css` and registered in `easemotion.css` via:

```css
@import "./components/accordion.css";
