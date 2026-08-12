# CSS Distance Badge

Location distance badge with animated radar pulse indicators, km/miles unit toggles, and zero JavaScript.

## 1. What does this do?
Displays a location distance indicator badge featuring animated location pin bounce micro-interactions, radar pulse rings, and pure CSS unit toggling (`0.8 km` &rarr; `0.5 mi`).

## 2. How is it used?
Place the distance badge inside venue cards and toggle units using a native `<input type="checkbox">` control:

```html
<input type="checkbox" id="unit-toggle" class="unit-toggle-input">

<div class="distance-badge pulse-accent">
  <span class="radar-pulse"></span>
  <svg class="pin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
  <span class="distance-value dist-km">0.8 km</span>
  <span class="distance-value dist-mi">0.5 mi</span>
  <span class="badge-tag">Nearby</span>
</div>
```

## 3. Why is it useful?
Mapping, travel, and location-based discovery platforms require lightweight distance badges. This pure CSS implementation eliminates heavy map API rendering for simple badges, provides radar pulse animations, and supports accessible keyboard focus controls.
