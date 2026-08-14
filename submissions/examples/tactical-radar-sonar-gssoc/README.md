# Orbital Tactical Radar Scanner Display

A futuristic 360-degree rotating beam tactical radar display component built with pure CSS conic gradients, concentric grid lines, and pulsing target ping indicators.

## 1. What does this do?
This component renders an interactive sci-fi tactical radar display. It features a continuous 360-degree rotating sweep beam using CSS conic gradients, pulsing target blip markers with hover telemetry tooltips, concentric distance range rings, and corner HUD status readouts.

## 2. How is it used?
Link `style.css` in your HTML document and place the `<div class="radar-hud">` structure along with target markers as demonstrated below:

```html
<div class="radar-hud">
  <div class="ping-target target-1" data-info="ALPHA-1 [BEARING 045° / 12KM]"></div>
  <div class="range-ring ring-1"></div>
  <div class="radar-sweep"></div>
</div>
```

Customize target positions by adjusting CSS `top`, `left`, and `data-info` attributes.

## 3. Why is it useful?
- **Sci-Fi & Gaming Dashboards:** Ideal for gaming web interfaces, cybersecurity monitoring centers, and futuristic telemetry dashboards.
- **Pure CSS Animations:** Implements continuous beam rotations and target ping pulses without relying on external canvas libraries.
- **Interactive Tooltips:** Displays exact target coordinates when hovering over active radar pings.
