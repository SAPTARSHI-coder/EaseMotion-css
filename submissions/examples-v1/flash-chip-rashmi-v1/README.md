# Flash Chip

A glassmorphism chip for EaseMotion CSS with a looping light sweep across the surface. Pure CSS, no JS required.

## Preview

Open `demo.html` in a browser. It shows the default chip, three color variants (success, warning, danger), and a dismissible chip.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<span class="ease-flash-chip" role="status" aria-label="Status: Live">
  <span class="ease-flash-chip__dot" aria-hidden="true"></span>
  <span class="ease-flash-chip__label">Live</span>
</span>
```

## Variants

| Class | Purpose |
|---|---|
| `ease-flash-chip` | Base chip |
| `ease-flash-chip--success` | Green accent |
| `ease-flash-chip--warning` | Yellow accent |
| `ease-flash-chip--danger` | Red accent |

## Dismissible chip

```html
<span class="ease-flash-chip" role="status" aria-label="Tag: New feature">
  <span class="ease-flash-chip__dot" aria-hidden="true"></span>
  <span class="ease-flash-chip__label">New Feature</span>
  <button type="button" class="ease-flash-chip__close" aria-label="Dismiss New Feature tag" onclick="this.closest('.ease-flash-chip').remove()">
    <svg viewBox="0 0 12 12"><line x1="2" y1="2" x2="10" y2="10"/><line x1="10" y1="2" x2="2" y2="10"/></svg>
  </button>
</span>
```

The `onclick` is the only JS in this component, and it's optional. Without it, the button just doesn't do anything — everything else works fine.

## How it works

The flash is a `::before` layer with a diagonal gradient, animated across the chip with `ease-flash-sweep` and blended with `mix-blend-mode: overlay` so it reads as a light glint. The status dot pulses with `ease-flash-pulse`. The glass look comes from `backdrop-filter: blur() saturate()`. Timing and easing are exposed as CSS variables (`--ease-duration-*`, `--ease-curve-*`) so they can be overridden globally.

## Accessibility

- `role="status"` + `aria-label` on each chip so screen readers announce the meaning
- `aria-hidden="true"` on the decorative dot
- Focus ring on the dismiss button, plus its own `aria-label`
- `prefers-reduced-motion` disables the sweep, the pulse, and the hover lift
- Variants don't rely on color alone — each has a distinct text label

## Responsive

Chip padding and font size scale down under 480px viewports via a media query.

## Browser support

`backdrop-filter` needs a modern browser (Chrome/Edge 76+, Safari 9+ with `-webkit-` prefix, Firefox 103+). Without support, the chip still renders — just without the blur.

## Files

```
flash-chip-rashmi/
├── demo.html
├── style.css
└── README.md
```