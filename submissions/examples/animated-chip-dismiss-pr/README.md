# Animated Chip Dismiss

## What does this do?
A collection of modern dismissible chip styles for filters, tags,
categories, dashboards, and admin panels. Each chip features a rounded
pill design with an integrated close button. Clicking the close button
triggers a smooth fade-and-shrink dismiss animation.

## How is it used?

```html
<div class="ease-chip-row">
  <span class="ease-chip">
    Design
    <button class="ease-chip-close" onclick="this.closest('.ease-chip').classList.add('is-dismissed')">×</button>
  </span>
</div>
```

**Variants:** `ease-chip-gradient`, `ease-chip-neon`,
`ease-chip-success`, `ease-chip-danger`

## Why is it useful?
Provides a human-readable, composable, and reusable UI pattern for tag
and filter experiences. Pure HTML and CSS implementation: rounded pill
design, close button styling, hover lift effect, and smooth dismiss
transitions. Lightweight, self-contained, easy to customize, with
prefers-reduced-motion support.