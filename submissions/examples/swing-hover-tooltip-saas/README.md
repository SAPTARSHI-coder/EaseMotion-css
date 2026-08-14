# Swing-Hover Tooltip — SaaS Showcase

A pure CSS tooltip with a spring-like "swing" entrance animation, styled
for a modern SaaS product UI (clean white card surfaces, indigo accent,
pricing/feature-list context). Triggered on hover and keyboard focus.
Zero JavaScript.

## Features

- 🎯 Pure CSS — no JavaScript required
- ⌨️ Keyboard accessible via `:focus-visible`
- 🔄 Four placement variants: top, bottom, left, right
- 🎛️ Customizable timing, easing, scale, offset via CSS variables
- 💼 Includes a realistic SaaS feature-list usage example (checkmark icons
  with tooltips), not just isolated buttons
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

### Feature-list pattern

```html
<span class="tooltip-wrap">
  <button class="feature-icon" aria-describedby="tt-feature-1">✓</button>
  <span class="tt-bubble tt-bubble--top" id="tt-feature-1" role="tooltip">
    Explanation of the feature
  </span>
</span>
Feature name
```

## Customization

| Variable | Default | Description |
|---|---|---|
| `--tt-duration` | `0.32s` | Animation duration |
| `--tt-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Springy swing easing |
| `--tt-scale` | `0.88` | Starting scale before swing-in |
| `--tt-swing-angle` | `15deg` | Rotation angle of the swing |
| `--tt-offset` | `10px` | Gap between trigger and tooltip |
| `--tt-bg` | `#0f172a` | Tooltip background color |
| `--tt-accent` | `#6366f1` | Primary indigo accent used on triggers |

Example override for a single tooltip:

```css
.tt-bubble--custom {
  --tt-duration: 0.5s;
  --tt-scale: 0.6;
  --tt-swing-angle: 28deg;
}
```

## Accessibility

- Revealed on both `:hover` and `:focus-visible`, so keyboard users get the
  same experience as mouse users.
- Each trigger uses `aria-describedby` pointing to the tooltip's `id`.
- Tooltip element uses `role="tooltip"`.
- Animation disabled for users with `prefers-reduced-motion: reduce`.

## Files

- `demo.html` — showcase with all four placements, a primary CTA example,
  and a SaaS feature-list usage pattern
- `style.css` — component styles and animation logic
- `README.md` — this file