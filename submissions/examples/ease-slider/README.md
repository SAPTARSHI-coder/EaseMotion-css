# ease-slider — Range Slider Input with Custom Thumb

## What does this do?

A styled range slider (`<input type="range">`) with custom track and thumb, filled portion, value tooltip, and support for sizes, gradient fill, vertical orientation, tick marks, and disabled state.

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| Small | `.ease-slider--sm` | 4px track, 16px thumb |
| Medium (default) | *(none)* | 6px track, 20px thumb |
| Large | `.ease-slider--lg` | 8px track, 24px thumb |
| Gradient | `.ease-slider--gradient` | Track fill uses gradient |
| Vertical | `.ease-slider--vertical` | Vertical orientation |
| Disabled | `.ease-slider--disabled` | Reduced opacity, no pointer events |

## How is it used?

```html
<div class="ease-slider">
  <input type="range" min="0" max="100" value="50" step="1">
  <div class="ease-slider__tooltip">50</div>
  <div class="ease-slider__labels">
    <span>0</span>
    <span>100</span>
  </div>
  <div class="ease-slider__ticks">
    <span class="ease-slider__tick"></span>
    <span class="ease-slider__tick"></span>
  </div>
</div>
```

With JavaScript to update the tooltip position:

```js
var input = document.querySelector('.ease-slider input');
var tooltip = document.querySelector('.ease-slider__tooltip');
input.addEventListener('input', function() {
  var pct = (input.value - input.min) / (input.max - input.min);
  var offset = pct * input.offsetWidth;
  tooltip.textContent = input.value;
  tooltip.style.left = offset + 'px';
});
```

## Why is it useful?

Range sliders are a common UI pattern for volume, brightness, price filters, ratings, and settings controls. This implementation wraps the native `<input type="range">` for full accessibility while providing consistent custom styling across browsers.

## Tech Stack

- HTML (native `<input type="range">`)
- CSS (pseudo-elements for track/thumb, custom properties for sizing)
- JavaScript (minimal — tooltip position tracking)

## Preview

Open `demo.html` directly in your browser to see all variants in action.

## Browser Compatibility

Uses `::-webkit-slider-thumb`, `::-moz-range-track`, `::-moz-range-thumb`, and `::-moz-range-progress` pseudo-elements. Falls back gracefully to native browser styling in unsupported browsers.

## Contribution Notes

- Class naming follows EaseMotion BEM convention (`ease-slider__*`)
- Uses `var(--ease-primary)` for the track fill colour
- Maintainer may adjust naming before merging
