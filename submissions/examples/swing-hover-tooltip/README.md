# Swing-Hover Tooltip

A pure CSS tooltip component with a smooth, spring-like "swing" entrance
animation, triggered on hover **and** keyboard focus. Built with zero
JavaScript and fully customizable through CSS custom properties.

## Features

- 🎯 Pure CSS — no JavaScript required
- ⌨️ Keyboard accessible via `:focus-visible`
- 🔄 Four placement variants: top, bottom, left, right
- 🎛️ Customizable timing, easing, scale, offset, and swing angle via CSS variables
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

Add `tt-bubble--bottom`, `tt-bubble--left`, or `tt-bubble--right` in place of
`tt-bubble--top` to change placement.

## Customization

Override any of these CSS custom properties globally in `:root`, or scoped to
a single tooltip instance:

| Variable | Default | Description |
|---|---|---|
| `--tt-duration` | `0.35s` | Animation duration |
| `--tt-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Springy swing easing |
| `--tt-scale` | `0.85` | Starting scale before swing-in |
| `--tt-swing-angle` | `18deg` | Rotation angle of the swing |
| `--tt-offset` | `10px` | Gap between trigger and tooltip |
| `--tt-bg` | `#1f2430` | Tooltip background color |
| `--tt-color` | `#f4f6fb` | Tooltip text color |
| `--tt-radius` | `8px` | Trigger border radius |

Example override for a single tooltip:

```css
.tt-bubble--custom {
  --tt-duration: 0.6s;
  --tt-scale: 0.6;
  --tt-swing-angle: 30deg;
}
```

## Accessibility

- Tooltips are revealed on both `:hover` and `:focus-visible`, so keyboard
  users get the same experience as mouse users.
- Each trigger uses `aria-describedby` pointing to the tooltip's `id`.
- The tooltip element uses `role="tooltip"`.
- Animation is disabled for users with `prefers-reduced-motion: reduce`.

## Files

- `demo.html` — showcase with all four placements plus a custom-timing example
- `style.css` — component styles and animation logic
- `README.md` — this file