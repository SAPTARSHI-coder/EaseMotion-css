# Neon Glow Dashboard Popover

A responsive, keyboard-accessible analytics popover with a neon glow, fade, scale, and slide interaction.

The component uses semantic HTML and pure CSS, with no JavaScript required.

## Features

- Pure HTML and CSS
- Semantic `<details>` and `<summary>` interaction
- Keyboard-accessible trigger
- Neon glow, fade, slide, and scale effects
- Responsive dashboard layout
- Configurable CSS custom properties
- Visible focus styles
- `prefers-reduced-motion` support

## Usage

Use the `neon-popover` component inside any dashboard or analytics interface:

```html
<details class="neon-popover">
  <summary class="neon-popover__trigger">
    View breakdown
  </summary>

  <div class="neon-popover__panel">
    <!-- Popover content -->
  </div>
</details>
```

## What problem does it solve?

Dashboards often need to display additional information related to a metric, control, or status.

A full page or modal can be excessive for small amounts of information. This popover keeps the information close to the element that triggered it.

