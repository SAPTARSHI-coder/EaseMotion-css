# Animated Gradient Border Button (EaseMotion)

A reusable **animated gradient border button** built with **only HTML + CSS** (no JavaScript).

- ✅ Smooth continuous gradient animation
- ✅ Premium hover fill + glow transition
- ✅ Keyboard accessible (`:focus-visible`)
- ✅ Responsive and customizable
- ✅ `prefers-reduced-motion` supported

## Folder Structure

- `submissions/examples/ease-gradient-border-button-harshitha/`
  - `index.html`
  - `style.css`
  - `README.md`

## Demo

Open:
- `index.html`

## Usage

### Include CSS

```html
<link rel="stylesheet" href="./style.css" />
```

### Default button

```html
<button class="ease-gradient-border-button-harshitha" type="button">
  <span>Hover me</span>
</button>
```

## Customization (CSS Variables)

Set variables on `:root` or directly on the button.

### Shape & sizing
- `--ease-gb-radius` (default: `14px`)
- `--ease-gb-border-width` (default: `2px`)
- `--ease-gb-pad-y` (default: `0.85rem`)
- `--ease-gb-pad-x` (default: `1.25rem`)
- `--ease-gb-font-size` (default: `1rem`)

### Animation
- `--ease-gb-speed` (default: `2.6s`) — controls border animation speed

### Colors
- `--ease-gb-bg` (default: `#0b1220`) — inner background
- `--ease-gb-bg-hover` (default: `#0f1a30`) — inner background on hover
- `--ease-gb-color1..4` — gradient colors

### Glow
- `--ease-gb-glow` (default: `0.55`) — glow intensity factor

## Example: custom theme + speed

```html
<button
  class="ease-gradient-border-button-harshitha"
  type="button"
  style="
    --ease-gb-speed: 1.9s;
    --ease-gb-border-width: 3px;
    --ease-gb-color1: #f97316;
    --ease-gb-color2: #ec4899;
    --ease-gb-color3: #06b6d4;
    --ease-gb-color4: #22c55e;
  "
>
  <span>Custom</span>
</button>
```

## Accessibility

- Uses `:focus-visible` styling for keyboard navigation.
- Respects `prefers-reduced-motion` by disabling continuous border animation.

## Browser Compatibility

Works in modern evergreen browsers that support:
- CSS pseudo-elements
- `mask` / `mask-composite` (with WebKit fallback)
- keyframe animations

## Notes

The gradient border is rendered using a masked `::before` pseudo-element so the effect stays lightweight and avoids layout thrashing.

