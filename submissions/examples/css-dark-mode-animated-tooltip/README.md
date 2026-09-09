# Animated Tooltip with Dark Mode Styling (#79865)

A dark-mode animated tooltip component featuring cubic-bezier scale/translation spring reveals, dark glassmorphic card framing, caret indicators, and accessible keyboard focus states.

## Features
- **Spring Reveal Animation:** Tooltip emerges using cubic-bezier scale up and negative vertical translation (`translateY`).
- **Dark Glassmorphism:** Deep slate container framing enhanced with CSS `backdrop-filter: blur(20px)` and indigo glow highlights.
- **Accessible Interactions:** Triggered via standard hover states as well as keyboard focus accessibility triggers.

## File Hierarchy
- `style.css` - Custom properties, spring curve animation metrics, caret border tricks, and media queries.
- `demo.html` - Semantic markup demonstrating tooltip integration with ARIA accessibility references.
- `README.md` - Technical specification and architecture overview.
