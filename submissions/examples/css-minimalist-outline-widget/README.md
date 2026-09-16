# CSS Widget: Minimalist Outline Variation

A polished, reusable dashboard widget featuring a highly restrained "Minimalist Outline" visual treatment. This component derives its hierarchy completely from typography, whitespace, and precise border applications rather than heavy background fills or drop shadows.

## Features

- **Strict Border Hierarchy**: The widget relies on a simple 1px outline for structural containment (`--outline-border`) and an internal 1px divider line (`--outline-divider`) to establish data separation.
- **Negative Space & Typography**: Data elements are padded generously (`1.5rem`), pushing the focus onto the `Inter` (or system default) typeface. Strong numeric scales contrast against uppercase, widely-tracked subheaders to build semantic rhythm.
- **Hardware-Accelerated Accent Sweep**: Rather than manipulating standard borders which would cause DOM repaints, the hover interaction injects a 2px top-mounted accent line via the `::after` pseudo-element. This line expands smoothly outward using `transform: scaleX(1)`, pushing the interpolation safely to the GPU compositor.
- **Color Accent Theming**: The component natively supports CSS variable injection for rapid theming. Adding `.accent-blue` or `.accent-amber` to the host anchor shifts the interaction highlight and focus boundaries seamlessly to specific brand tones.
- **Dark Mode Context**: Beautifully adapts to `@media (prefers-color-scheme: dark)`. Because it lacks background fills, the widget inherently adopts the host page's base color, while the internal border variables map to slightly illuminated structural greys (`#262626`).
- **Accessibility & Focus Integration**: Prioritizes keyboard navigation by intercepting `:focus-visible`. Tab targeting immediately renders a high-contrast double-ring using `box-shadow` combined with the accent line, firmly alerting the user without relying on continuous hover animations.
- **Reduced Motion Support**: Listens to `@media (prefers-reduced-motion: reduce)`. The cubic-bezier scaling of the accent line is stripped, snapping instantly from `0` to `100%` width to protect users with vestibular conditions from unnecessary visual sliding.

## Usage

1. Open `demo.html` in your browser.
2. Note the total lack of background styling, shadows, or rounded noise—just pure border logic.
3. Hover over the cards to observe the `scaleX` sweep of the accent line across the top border.
4. Try keyboard navigation (`Tab`) to view the strictly enforced focus-visible states spanning the exact accent color configurations.
