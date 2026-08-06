# Chip / Tag — Components

Flexible chip/tag components with dismissible functionality, color variants, and icon support.

## Features

- Filled and outline variants
- Color variants: default, primary, success, warning, error
- Dismissible chips with hover-reveal close button
- Icon prefix support
- Pill-shaped (border-radius 9999px)

## Usage

```html
<!-- Filled -->
<span class="chip chip-primary">Label</span>

<!-- Outline -->
<span class="chip chip-outline chip-success">Label</span>

<!-- With icon -->
<span class="chip chip-warning"><span class="chip-icon">⚠</span> Pending</span>

<!-- Dismissible -->
<span class="chip chip-dismissible">
  Text
  <button class="chip-close">&times;</button>
</span>
```
