# CSS Fade-In Tooltip (Accessible Web Layouts)

A pure CSS fade-in tooltip optimized specifically for accessibility (A11y). It provides high visual contrast, semantic ARIA attributes, robust keyboard focus trapping via native text structures, and an automatic fallback for users who prefer reduced motion.

## Features
- **Accessible-First Aesthetic:** Styled to meet strict WCAG AAA contrast ratio guidelines with high-visibility color systems.
- **Prefers-Reduced-Motion Guard:** Automatically adapts or completely drops rapid opacity shifts when system accessibility limits motion.
- **Zero-JS Focus Management:** Uses interactive wrappers (`tabindex="0"`) alongside `:focus-within` selectors to provide consistent behavior for keyboard and screen-reader users.

## Custom Properties
Configure or override these properties inside `style.css`:
- `--tooltip-fade-duration`: The length of the fade transition (default: `0.2s`).
- `--tooltip-fade-easing`: Easing curve for a smooth entry (default: `ease-out`).
- `--tooltip-contrast-bg`: High contrast container background color (default: `#111827`).
- `--tooltip-contrast-text`: Highly legible text foreground color (default: `#ffffff`).