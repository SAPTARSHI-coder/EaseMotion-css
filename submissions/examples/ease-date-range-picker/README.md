# Ease Date Range Picker

## Description
A date range picker with an animated popover showing two connected month calendars. Click a start date, then an end date — the range between them highlights automatically. Popover animates in with a scale/fade/slide transition.

## Features
- Two-month connected calendar view
- Click-to-select range (start → end)
- Animated popover open/close and selected-day "pop" animation
- Closes when clicking outside
- Navigate months independently via the left calendar's prev/next controls (right calendar follows)
- Respects `prefers-reduced-motion`

## Usage
Include `style.css` and `date-range-picker.js`, and use the markup structure from `demo.html`:
```html
<div class="ease-date-range">
  <input type="text" class="range-input" placeholder="Select date range" readonly />
  <div class="range-popover">
    <!-- two .range-month blocks, see demo.html -->
  </div>
</div>
<script src="date-range-picker.js"></script>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--range-duration` | `0.25s` | Popover animation duration |
| `--range-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing function |
| `--range-accent` | `#38bdf8` | Selected day / accent color |
| `--range-in-range` | `rgba(56, 189, 248, 0.15)` | Background for days within the selected range |
| `--range-bg` | `#14141c` | Popover/input background |

## Files
- `demo.html` — live working example
- `style.css` — component styles and animations
- `date-range-picker.js` — calendar rendering and range selection logic
- `README.md` — this file