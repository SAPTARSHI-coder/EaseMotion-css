# Stat Counter Component

Animated stat counter cards with scroll-triggered number count-up, grid layout, and icon support.

## Files

- `style.css` — Stat counter component styles
- `counter.js` — IntersectionObserver-based count-up animation
- `demo.html` — Live demo with grid and horizontal layouts

## Usage

```html
<div class="ease-stat-grid">
  <div class="ease-stat">
    <div class="ease-stat-icon-bg">★</div>
    <div class="ease-stat-number" data-target="500">0</div>
    <div class="ease-stat-label">Projects Completed</div>
  </div>
</div>
<script src="counter.js"></script>
```

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-stat-grid` | Responsive grid container |
| `.ease-stat` | Individual stat card |
| `.ease-stat-horizontal` | Horizontal layout variant |
| `.ease-stat-icon` | Simple icon |
| `.ease-stat-icon-bg` | Icon in circular background |
| `.ease-stat-number` | Number display |
| `.ease-stat-prefix` | Prefix before number |
| `.ease-stat-suffix` | Suffix after number |
| `.ease-stat-label` | Description text |

## JS data attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| `data-target` | — | Target number to count up to |
| `data-duration` | 2000 | Animation duration in ms |
