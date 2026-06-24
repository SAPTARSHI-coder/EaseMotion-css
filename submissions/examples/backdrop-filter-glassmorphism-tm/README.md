# Backdrop Filter Glassmorphism

## What does this do?
Provides a set of pure CSS glassmorphism utility classes using `backdrop-filter: blur()` and EaseMotion CSS tokens (`--ease-radius-*`, `--ease-space-*`, `--ease-color-*`, `--ease-shadow-*`) for frosted glass panels, cards, navbars, and hero sections.

## How is it used?
Add `.glass-panel` to any container. Variants include `.glass-panel-tint` (coloured), `.glass-panel-heavy` (32px blur), `.glass-panel-subtle` (8px blur), `.glass-card` (card with icon), `.glass-nav` (navbar), and `.glass-hero` (hero section).

```html
<div class="glass-panel">
  <h3>Frosted card</h3>
  <p>Content sits on a glass surface with backdrop blur.</p>
</div>
```

## Why is it useful?
Glassmorphism is a modern design trend that adds depth and visual hierarchy without heavy images. These classes use native CSS `backdrop-filter` (no JS, no canvas), integrate with EaseMotion's token system, support dark mode via `[data-theme="dark"]`, and respect `prefers-reduced-motion`.
