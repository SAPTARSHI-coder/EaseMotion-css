# CSS Shimmer-Sweep Drawer

A highly polished, premium side-drawer component tailored for modern Fintech and Web3 Dashboards. It combines a rapid side-sweep entrance with a sleek, animated "shimmer" gradient that passes over the drawer to give a sense of high-end interactivity.

## Features

- **Pure CSS Interaction:** Achieves open/close state logic entirely through CSS using the hidden `<input type="checkbox">` and `<label>` pattern. No JavaScript required.
- **Sweep Animation:** The drawer smoothly sweeps in from the right edge (`transform: translateX(100%) -> 0`) using a sharp `easeOutExpo` curve for a snappy, responsive feel.
- **Shimmer Effect:** Upon opening, a pseudo-element containing a skewed, translucent linear gradient fires an independent `@keyframes` animation, creating a "shine" or "shimmer" effect sweeping across the drawer body.
- **Backdrop Blur:** Uses `-webkit-backdrop-filter` and `backdrop-filter` to dynamically blur the dashboard background when the drawer overlay is active.
- **Body Scroll Locking:** Automatically prevents background scrolling while the drawer is open by taking advantage of the modern `:has()` selector.
- **Accessibility:** `@media (prefers-reduced-motion: reduce)` elegantly disables the sweeping transform and the shimmer keyframe animation, falling back to a clean show/hide display toggle.

## File Structure

- `demo.html` - The showcase page featuring a mock portfolio asset list and the drawer component structure.
- `style.css` - The stylesheet housing the theme colors, layout rules, and the advanced keyframe/transition logic.

## Usage

1. Copy the structure from `demo.html`. The `<input type="checkbox" id="drawer-toggle">` must reside at the root level of your layout container to sibling-select the drawer correctly.
2. Link interactive buttons to the drawer using `<label for="drawer-toggle">`.
3. Include the CSS from `style.css`.
4. The `:has()` selector handles scroll locking. Ensure your target browsers support this modern feature, or substitute with a standard JS class-toggle if legacy support is strictly needed.

## CSS Custom Properties

The animation speed and styling are centralized:

```css
:root {
    /* Animation Tokens */
    --transition-speed: 0.5s;
    --transition-timing: cubic-bezier(0.19, 1, 0.22, 1); /* easeOutExpo */
}
```

## Customization

- **Shimmer Speed/Delay:** In `.drawer-toggle-input:checked ~ .dashboard-layout .drawer-panel .drawer-shimmer-effect`, adjust the `animation` declaration (e.g., `1.5s ease-in-out 0.2s`). The `0.2s` delay ensures the shimmer starts precisely as the sweep completes.
- **Shimmer Color:** Modify the `linear-gradient` within `.drawer-shimmer-effect` to match your brand's highlight color (e.g., swapping white for a subtle gold or blue).
