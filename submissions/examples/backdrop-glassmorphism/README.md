## What

A hero section UI demonstrating CSS `backdrop-filter` glassmorphism effects — a fixed glass navbar, glass card overlays, glass buttons, and a glass modal dialog. Uses `blur()`, `brightness()`, and `saturate()` to create depth. Respects `prefers-color-scheme` for dark/light mode support.

## How

Every glass surface uses `backdrop-filter` (with `-webkit-` prefix) on a semi-transparent `rgba` background. The navbar, cards, buttons, and modal all share a common pattern: `backdrop-filter: blur(16px) brightness(1.2) saturate(1.4)`. The modal uses a nested approach — `::backdrop` blurs the page behind while the modal panel itself adds a second blur layer. CSS `@media (prefers-color-scheme: light)` flips background and text tokens for light mode.

## Why

`backdrop-filter` glassmorphism creates visual depth by blurring content behind an element, giving a frosted-glass look that adapts to whatever is underneath. Combining blur with brightness and saturate prevents the glass from looking muddy. This demo shows the technique applied consistently across navigation, content cards, buttons, and modals.
