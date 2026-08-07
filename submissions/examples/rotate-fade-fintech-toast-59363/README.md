# Rotate Fade Fintech Toast

An advanced pure HTML and CSS toast notification showcase for fintech dashboard layouts. It uses a rotate-fade entrance, compact alert hierarchy, responsive grid behavior, and accessible focus states without JavaScript.

## Features

- Rotate-fade toast entrance with depth, blur recovery, and staggered timing
- Fintech-specific success, warning, and market update notification examples
- Responsive two-column dashboard layout that collapses cleanly on mobile
- Keyboard-focusable toast cards with visible `:focus-visible` treatment
- `prefers-reduced-motion` fallback for motion-sensitive users

## Files

- `demo.html` - semantic notification markup and dashboard preview content
- `style.css` - custom properties, responsive layout, and animation rules

## Custom Properties

```css
:root {
  --toast-bg: #f7faf8;
  --toast-ink: #16201b;
  --toast-muted: #647067;
  --toast-panel: #ffffff;
  --toast-line: rgba(22, 32, 27, 0.14);
  --toast-green: #16a36a;
  --toast-amber: #c97916;
  --toast-blue: #2675d8;
  --toast-shadow: 0 22px 55px rgba(27, 42, 34, 0.16);
}
```

## Usage

Copy the `.toast-stage`, `.dashboard-shell`, and `.toast-card` markup from `demo.html`, then include `style.css` in your page. Use the modifier classes `.is-success`, `.is-warning`, and `.is-info` to change the accent color for different notification types.
