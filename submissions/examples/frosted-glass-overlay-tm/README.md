# Frosted Glass Overlay

A submission demonstrating CSS `backdrop-filter: blur()` and `saturate()` for frosted glass UI patterns: glass panels, navigation bars, modals, tabs, inputs, and cards in six blur-intensity and four saturation variants using EaseMotion design tokens.

## Features

- Six blur intensity variants: `blur-xs` (4px), `blur-sm` (8px), `blur-md` (16px), `blur-lg` (24px), `blur-xl` (40px), `blur-2xl` (64px)
- Four saturation variants: `sat-muted` (50%), `sat-normal` (100%), `sat-vivid` (200%), `sat-hyper` (300%)
- Three glass base variants: `glass`, `glass-light`, `glass-heavy`
- Real UI components: glass navbar, tabs, modal dialog, input fields, card grid
- `-webkit-backdrop-filter` prefix for Safari compatibility
- Uses `--ease-glass-bg`, `--ease-glass-border`, `--ease-glow-primary`, `--ease-shadow-xl`
- Animated hover states with `translateY`, glow shadows, and scale
- Reduced motion support via `prefers-reduced-motion: reduce`

## Usage

```html
<!-- Glass card with medium blur -->
<div class="glass-card glass blur-md">
  <h3 class="card-title">Glass Card</h3>
  <p class="card-text">Frosted glass content here.</p>
</div>
```

```css
.glass {
  background: var(--ease-glass-bg);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid var(--ease-glass-border);
  border-radius: var(--ease-radius-lg);
}
```

## Why is it useful?

The `backdrop-filter` property creates frosted glass effects by blurring and adjusting saturation of content behind an element — a cornerstone of modern glass-morphism UI. The six blur intensity variants give designers fine control — light blur for nav bars where performance matters, heavy blur for modals where focus is paramount. All variants use the EaseMotion `--ease-glass-bg` and `--ease-glass-border` tokens for system-wide theming consistency.
