# CSS Zoom-In Drawer

A modern, high-performance drawer (side panel) component designed for Fintech and SaaS dashboards. It uses a "Zoom-In" entrance animation rather than a traditional slide, providing a more dynamic, floating, and premium feel.

## Features

- **Pure CSS (Checkbox Hack):** Uses the hidden `<input type="checkbox">` and `<label>` pattern to handle open/close states natively in CSS without any JavaScript.
- **Zoom-In Animation:** The drawer panel scales up (`scale(0.9) -> scale(1)`) while fading in, giving it a snappy, app-like zoom effect using an `ease-out-expo` custom cubic-bezier curve.
- **Background Dimming:** Features an animated overlay that traps clicks and cleanly closes the drawer when clicking outside the panel.
- **Body Scroll Locking:** Utilizes the modern `:has()` selector to prevent body scrolling while the drawer is open.
- **Responsive Bottom Sheet:** On mobile viewports, the side drawer automatically transforms into a bottom-anchored sheet, updating its transform origin for a native mobile experience.
- **Accessibility:** Fully supports `@media (prefers-reduced-motion: reduce)` to strip the zooming animations, falling back to a clean opacity toggle.

## File Structure

- `demo.html` - The showcase page demonstrating a dummy transaction list and the drawer component.
- `style.css` - The stylesheet containing the CSS checkbox logic, transitions, and layout styles.

## Usage

1. Copy the structure from `demo.html`. Ensure the `<input type="checkbox" id="drawer-toggle">` sits at the top level of the DOM, above the elements that need to react to it.
2. Link labels to the input via `for="drawer-toggle"` to trigger the drawer.
3. Include the CSS from `style.css`.
4. Ensure the `:has()` selector is supported for body scroll locking, or fallback to a simple JS toggle if strict legacy browser support is required for body locking.

## CSS Custom Properties

The animation timings and colors are driven by CSS variables:

```css
:root {
    /* Animation Tokens */
    --transition-speed: 0.4s;
    --transition-timing: cubic-bezier(0.16, 1, 0.3, 1); /* Ease-out-expo for smooth zoom */
}
```

## Customization

- To adjust the "zoom" intensity, modify the initial `transform: scale(0.9)` value in the `.drawer-panel` class.
- The easing curve (`--transition-timing`) is optimized for a fast entrance. It can be replaced with `ease-out` for a softer feel.
