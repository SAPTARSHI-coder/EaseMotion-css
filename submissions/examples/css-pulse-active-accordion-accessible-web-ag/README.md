# CSS Pulse-Active Accordion (Accessible Web)

An accessibility-first accordion component designed for Accessible Web layouts. Prioritizes WCAG 2.1 AA compliance with high-contrast colors, visible focus indicators, large touch targets, and `prefers-reduced-motion` support — while still providing a pleasant pulse animation for users who can enjoy it.

## Features
- **Accessible Pulse:** A high-contrast focus-ring pulse on the active item. Automatically disabled via `prefers-reduced-motion: reduce`.
- **Visible Focus Indicators:** Thick, high-contrast `:focus-visible` outlines on all interactive elements — no focus traps.
- **Large Touch Targets:** Headers are minimum 48px tall with generous padding for motor-impaired users.
- **High Contrast Colors:** All text passes WCAG AAA (7:1 ratio). No low-contrast decorative text.
- **Skip-to-Content Pattern:** Includes a visually hidden skip link for keyboard users.
- **Semantic HTML:** Uses native `<details>`/`<summary>` for built-in keyboard support (Enter/Space to toggle).

## Usage
Wrap items in `.a11y-accordion`. Each `<details>` gets `.a11y-item`, each `<summary>` gets `.a11y-header`.

## Files
- `demo.html`: A fully accessible preview with skip links and ARIA labels.
- `style.css`: High-contrast styles, focus rings, reduced-motion overrides, and the accessible pulse.
