# Backdrop Filter Glassmorphism

This submission demonstrates glassmorphism — frosted glass UI components using CSS `backdrop-filter: blur()` — built on EaseMotion design tokens. Includes a glass navbar, glass cards, glass modal, glass chips with colored glow dots, and a stats grid.

## Features

- Glass navbar with `backdrop-filter: blur(12px) saturate(150%)`
- Glass card with `backdrop-filter: blur(16px) saturate(180%)` and hover effects
- Glass modal with gradient top border and action buttons
- Glass chip badges with `--ease-glow-*` glow effects for colored dots
- Atmospheric radial gradient background using `--ease-color-neutral-*`
- `-webkit-backdrop-filter` for Safari compatibility
- All interactive elements use `--ease-speed-fast` and `--ease-ease` for transitions
- Dark mode optimized (designed for dark backgrounds by default)
- Reduced motion support via `prefers-reduced-motion: reduce`

## Usage

```html
<div class="glass-card">
  <h2>Frosted Glass Card</h2>
  <p>Content goes here.</p>
</div>
```

```css
.glass-card {
  background: var(--ease-glass-bg);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid var(--ease-glass-border);
  border-radius: var(--ease-radius-xl);
}
```

## Why is it useful?

Glassmorphism creates visual depth and hierarchy in modern UIs without heavy image assets. EaseMotion's `--ease-glass-bg`, `--ease-glass-border`, and `--ease-glow-*` tokens provide consistent, reusable glass effects that integrate perfectly with the rest of the design system.
