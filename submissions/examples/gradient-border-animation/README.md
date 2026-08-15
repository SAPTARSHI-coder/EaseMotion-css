# Animated Gradient Border

A rotating conic-gradient border applied to a card and a button, using a pseudo-element with `mask-composite: exclude` so only the border ring itself is visible.

## How it works

```css
.gb-card::before {
  position: absolute;
  inset: 0;
  padding: 3px;
  background: conic-gradient(from var(--gb-angle, 0deg), ...);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: ease-kf-gradient-border-spin 4s linear infinite;
}
```

The `@property --gb-angle` registration lets the conic-gradient's rotation angle animate smoothly via a custom property, rather than jump-cutting between gradient states.

## Usage

```html
<div class="gb-card">
  <h4>Title</h4>
  <p>Content</p>
</div>

<button class="gb-btn">Button</button>
```

## Tech Stack

- HTML
- Plain CSS (conic-gradient, mask-composite, @property)
- No JavaScript

## Accessibility

Includes `@media (prefers-reduced-motion: reduce)` — the rotating animation stops and the border resolves to a static solid primary color.

## Why it fits EaseMotion CSS

Uses the framework's existing `--ease-color-primary`/`-secondary`/`-success` tokens for the gradient stops and `--ease-radius-*`/`--ease-space-*` for sizing, keeping the effect consistent with the rest of the design system.

Closes #11298
