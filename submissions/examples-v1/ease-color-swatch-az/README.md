# Color Swatch Picker Component

### What does this do?
This submission adds `ease-color-swatch-az` — a CSS-only color swatch picker for selecting preset colors. Each swatch is an accessible `<button>` that scales on hover, shows a focus ring via `:focus-visible`, and animates a checkmark on selection using a spring-like `cubic-bezier` pop.

### How is it used?
The maintainer should copy the contents of `style.css` into a new file at `components/color-swatch.css` and import it into the main framework payload.

Developers use it by wrapping a group of swatch buttons in a `.ease-color-swatch-az` container. Each swatch uses `.ease-swatch-az` with an inline `background`. Selection is handled via the `.selected` class (toggled with a sprinkle of JS in the demo, but the visual states are entirely CSS-driven).

Size modifiers: `.sm` (28px) and `.lg` (48px) on the swatch element.

### Why is it useful?
1. **CSS-only visual states** — Hover scale, focus-visible ring, and the selected checkmark are all pure CSS. The checkmark uses a custom `@keyframes` with an overshoot easing for a satisfying bounce.
2. **Accessible by default** — Each swatch is a native `<button>` with `:focus-visible` styling, and tooltips appear on hover/selection for screen-reader-friendly color names.
3. **Framework-native** — Uses EaseMotion's spacing, radius, and color CSS variables so the component fits seamlessly into any project using the framework.
