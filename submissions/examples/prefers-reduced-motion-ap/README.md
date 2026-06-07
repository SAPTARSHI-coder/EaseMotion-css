# Global Accessibility (a11y) Override: prefers-reduced-motion

This sub-module introduces built-in support for the CSS `@media (prefers-reduced-motion: reduce)` media query to `easemotion-css`. It ensures compliance with **WCAG 2.1** guidelines regarding motion and animation.

## How It Works

When a user has "Reduce Motion" enabled at the operating system level, this script forcefully strips intense transitions, structural shifts, and infinite keyframe loops, resetting elements to their default states instantly.

## Files Included

- `style.css`: The core global stylesheet utility override.
- `demo.html`: A visual playground to test the feature.

## How to Verify

1. Open `demo.html` in a modern browser.
2. Open Browser DevTools (F12) -> Open Command Menu (`Ctrl+Shift+P` on Windows or `Cmd+Shift+P` on Mac).
3. Type `Emulate CSS prefers-reduced-motion: reduce` and hit Enter.
4. The animation will immediately halt safely without destroying layouts.
