# Rotate Icon Loading Example

## Description
This is a standard HTML/CSS example demonstrating a continuous rotation animation applied to an icon to signify a loading or processing state. It is commonly used for refresh, sync, or spinner icons.

## Files
- `demo.html`: Contains a button with an SVG sync icon. Vanilla JS adds a `.is-loading-ag` class when clicked and updates ARIA states.
- `style.css`: Contains the basic button styling and the `@keyframes ease-rotate-infinite-ag` animation that spins the icon indefinitely.

## How It Works
1. The SVG icon sits statically inside the button by default.
2. When the user clicks the button, the JS adds the `.is-loading-ag` class to the button.
3. A descendant CSS selector (`.sync-button-ag.is-loading-ag .icon-sync-ag`) targets the icon and applies a linear, infinite rotation from `0deg` to `360deg`.
4. The JS simulates a network request via `setTimeout` and removes the loading class when finished.

## Accessibility Considerations
- The button uses `aria-label` and `aria-disabled` when the loading state is active.
- An `aria-live="polite"` region is used to announce the status message to screen readers as the sync starts and completes.
- **Reduced Motion**: Disables the infinite spinning animation via `@media (prefers-reduced-motion: reduce)`. The spinning is replaced with a safe, slow opacity pulse to indicate activity.
