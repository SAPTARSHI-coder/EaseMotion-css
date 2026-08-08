# ease-ripple — CSS-only Click Ripple Effect

A **Material Design-style ripple effect** built with pure CSS for the EaseMotion CSS library. Click or tap any element with the `.ease-ripple` class and watch a radial ripple expand from the center — no JavaScript required.

## Features

- Pure CSS implementation — zero JavaScript
- `::after` pseudo-element with `transform: scale()` and `opacity` animation on `:active` state
- Customizable via CSS variables: color, duration, and size
- Color variants: default (white), dark, primary, success, danger
- Origin modifier: top-left expansion for list items and menus
- Works on buttons, links, list items, or any element
- Respects `prefers-reduced-motion`
- Lightweight — no dependencies

## Folder Structure

```
submissions/examples/ease-ripple-av/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Apply to any element:

```html
<button class="ease-ripple">Click me</button>
```

### Color Variants

```html
<!-- Dark ripple for light backgrounds -->
<div class="ease-ripple ease-ripple-dark">Light surface</div>

<!-- Primary-tinted ripple -->
<button class="ease-ripple ease-ripple-primary">Primary</button>

<!-- Success-tinted ripple -->
<button class="ease-ripple ease-ripple-success">Success</button>

<!-- Danger-tinted ripple -->
<button class="ease-ripple ease-ripple-danger">Danger</button>
```

### Custom Colors and Speed

Override CSS variables inline or in your stylesheet:

```css
.custom-ripple {
  --ease-ripple-color: rgba(255, 165, 0, 0.3);
  --ease-ripple-duration: 0.8s;
  --ease-ripple-size: 250%;
}
```

### Origin Modifier

```html
<!-- Ripple expands from top-left corner -->
<li class="ease-ripple ease-ripple-origin-tl">Menu item</li>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-ripple-color` | `rgba(255, 255, 255, 0.35)` | Ripple background color |
| `--ease-ripple-duration` | `0.6s` | Animation duration |
| `--ease-ripple-size` | `200%` | Ripple diameter relative to element |

## Browser Support

- Chrome 80+
- Firefox 75+
- Edge 80+
- Safari 14+

## Accessibility

- Respects `prefers-reduced-motion: reduce` — ripple animation is disabled
- Works with keyboard focus (`tabindex="0"`)
- Non-intrusive — does not interfere with element content

## Author

**GitHub:** @AliMahmoudDev

---

Created for **EaseMotion CSS** — Issue **#44673** (Add ease-ripple CSS-only click ripple effect utility class).
