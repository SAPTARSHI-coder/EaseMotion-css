# Swing-Hover Tooltip — Glassmorphism

A pure CSS tooltip with a spring-like "swing" entrance animation, styled
with a glassmorphism aesthetic (frosted blur, translucent surfaces,
soft gradient backdrop with blurred color blobs). Triggered on hover and
keyboard focus. Zero JavaScript.

## Features

- 🎯 Pure CSS — no JavaScript required
- ⌨️ Keyboard accessible via `:focus-visible`
- 🔄 Four placement variants: top, bottom, left, right
- 🎛️ Customizable timing, easing, scale, offset, blur via CSS variables
- 🥃 Frosted-glass surfaces using `backdrop-filter: blur()`
- 🧯 Graceful fallback for browsers without `backdrop-filter` support
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
| `--tt-duration` | `0.35s` | Animation duration |
| `--tt-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Springy swing easing |
| `--tt-scale` | `0.85` | Starting scale before swing-in |
| `--tt-swing-angle` | `16deg` | Rotation angle of the swing |
| `--tt-offset` | `12px` | Gap between trigger and tooltip |
| `--tt-bg` | `rgba(255,255,255,0.16)` | Tooltip glass background |
| `--tt-border` | `rgba(255,255,255,0.35)` | Glass border color |
| `--tt-blur` | `14px` | Backdrop blur strength |

Example override for a single tooltip:

```css
.tt-bubble--custom {
  --tt-duration: 0.55s;
  --tt-scale: 0.6;
  --tt-swing-angle: 30deg;
}
```

## Browser support note

`backdrop-filter` is not supported in every browser/version. A `@supports`
fallback swaps the glass surfaces for a solid translucent dark background
so the component stays legible everywhere.

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