# Back to Top Button

A floating button that appears on scroll down. Smoothly scrolls to top with a progress ring.

## Features

- Appears with fade + slide-up on scroll
- SVG progress ring showing scroll percentage
- Smooth `scrollTo` behavior
- Hides automatically at page top

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--btt-duration` | `0.35s` | Visibility animation duration |
| `--btt-btn-bg` | `#1e293b` | Button background |
| `--btt-arrow-color` | `#f1f5f9` | Arrow color |
| `--btt-ring-color` | `#f59e0b` | Progress ring color |
| `--btt-size` | `56px` | Button size |

## Usage

```html
<button class="btt-btn" id="backToTop">
  <svg viewBox="0 0 100 100">
    <circle class="btt-ring-progress" cx="50" cy="50" r="45"/>
  </svg>
  <span class="btt-arrow">↑</span>
</button>
```

Toggle `.visible` class to show/hide.
