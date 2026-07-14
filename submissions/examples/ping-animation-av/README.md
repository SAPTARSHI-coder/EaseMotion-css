# Ping Animation Showcase

A **Ping Animation** showcase component built with pure HTML and CSS for the EaseMotion CSS library. Features animated ripple indicators for online status, notifications, and monitoring interfaces.

## Features

- CSS ripple animation via `::before` / `::after` pseudo-elements
- Four color variants: success (green), danger (red), warning (amber), info (blue)
- Speed modifiers: `.ease-ping-fast` and `.ease-ping-slow`
- Customizable via CSS variables: color, size, ring size, speed
- Responsive card layout
- Pure HTML & CSS — no JavaScript, no external frameworks
- Standalone browser-compatible demo
- Respects `prefers-reduced-motion`

## Folder Structure

```
submissions/examples/ping-animation-av/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

### Basic Ping

```html
<div class="ease-ping" role="status" aria-label="Online"></div>
```

### Color Variants

```html
<div class="ease-ping ease-ping-success" role="status"></div>
<div class="ease-ping ease-ping-danger" role="alert"></div>
<div class="ease-ping ease-ping-warning" role="status"></div>
<div class="ease-ping ease-ping-info" role="status"></div>
```

### Speed Modifiers

```html
<div class="ease-ping ease-ping-fast"></div>
<div class="ease-ping ease-ping-slow"></div>
```

### Custom Color & Speed

```html
<div class="ease-ping"
     style="--ping-color: #f97316; --ping-speed: 2.5s">
</div>
```

### Notification Badge

```html
<div class="ping-badge">
  <svg><!-- bell icon --></svg>
  <div class="ease-ping ease-ping-danger"
       style="--ping-ring-size: 20px; --ping-size: 8px;">
  </div>
</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ping-color` | `#6c63ff` | Ping dot and ring color |
| `--ping-size` | `14px` | Inner dot diameter |
| `--ping-ring-size` | `36px` | Outer ring container size |
| `--ping-speed` | `1.8s` | Animation cycle duration |

## Browser Support

- Chrome 80+
- Firefox 75+
- Edge 80+
- Safari 14+

## Accessibility

- Semantic `role="status"` and `role="alert"` attributes
- `aria-label` for screen readers
- Respects `prefers-reduced-motion: reduce` — animation disabled

## Author

**GitHub:** @AliMahmoudDev

---

Created for **EaseMotion CSS** — Issue **#45021** (Add ping animation showcase component).
