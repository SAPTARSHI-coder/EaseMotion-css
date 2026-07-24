# Shake Toggle Example (Standard)

## Description
A standard HTML/CSS custom toggle switch that applies a "Shake" Hover Effect. When the user hovers over the toggle, the switch slightly vibrates horizontally to draw attention, useful for critical toggles (like destructive actions or alerts).

## Files
- `demo.html`: Contains the markup for the toggle component.
- `style.css`: Contains the toggle styling and the `@keyframes toggle-hover-shake-ag` hover animation.

## Accessibility
- Uses a visually hidden native `<input type="checkbox">` for keyboard access and semantic meaning.
- Displays a prominent outline on `:focus-visible`.
- **Reduced Motion**: Disables the lateral shaking animation completely. Uses a simple, static `scale(1.05)` on hover to provide interactive feedback without triggering motion sensitivity issues.
