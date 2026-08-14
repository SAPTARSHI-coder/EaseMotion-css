# Swing-Hover Tooltip — Minimalist Tech

A pure CSS tooltip with a spring-like "swing" entrance animation, styled
with a clean minimalist tech aesthetic (light background, subtle borders,
blue accent). Triggered on hover and keyboard focus. Zero JavaScript.

## Features

- 🎯 Pure CSS — no JavaScript required
- ⌨️ Keyboard accessible via `:focus-visible`
- 🔄 Four placement variants: top, bottom, left, right
- 🎛️ Customizable timing, easing, scale, offset via CSS variables
- 🎨 Clean minimalist styling with subtle shadows and a single blue accent
- 📱 Fully responsive
- 🌀 Respects `prefers-reduced-motion`

## Usage

```html
<div class="tooltip-wrap">
  <button class="tt-trigger" aria-describedby="tt-1">Hover me</button>
  <span class="tt-bubble tt-bubble--top" id="tt-1" role="tooltip">
    Tooltip text here
  </span>
</div>
```

Swap `tt-bubble--top` for `tt-bubble--bottom`, `tt-bubble--left`, or
`tt-bubble--right` to change placement.

## Customization

| Variable | Default | Description |
|---|---|---|
| `--tt-duration` | `0.3s` | Animation duration |
| `--tt-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Springy swing easing |
| `--tt-scale` | `0.9` | Starting scale before swing-in |
| `--tt-swing-angle` | `14deg` | Rotation angle of the swing |
| `--tt-offset` | `10px` | Gap between trigger and tooltip |
| `--tt-bg` | `#1a1a1a` | Tooltip background color |
| `--tt-color` | `#fafafa` | Tooltip text color |
| `--tt-accent` | `#3b82f6` | Accent color used on trigger/focus states |

Example override for a single tooltip:

```css
.tt-bubble--custom {
  --tt-duration: 0.5s;
  --tt-scale: 0.65;
  --tt-swing-angle: 26deg;
}
```

## Accessibility

- Revealed on both `:hover` and `:focus-visible`, so keyboard users get the
  same experience as mouse users.
- Each trigger uses `aria-describedby` pointing to the tooltip's `id`.
- Tooltip element uses `role="tooltip"`.
- Animation disabled for users with `prefers-reduced-motion: reduce`.

## Files

- `demo.html` — showcase with all four placements plus a custom-timing example
- `style.css` — component styles and animation logic
- `README.md` — this file