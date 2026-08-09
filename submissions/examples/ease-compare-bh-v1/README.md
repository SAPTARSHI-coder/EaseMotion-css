# ease-compare Before/After Image Comparison Slider

## What does this do?

A draggable slider component that reveals an "after" image over a "before" image using CSS `clip-path`, controlled by a native range input for full accessibility and no complex JS drag math.

## How is it used?

```html
<div class="ease-compare">
  <img class="ease-compare-after" src="after.jpg" alt="After">
  <img class="ease-compare-before" src="before.jpg" alt="Before">
  <input type="range" class="ease-compare-slider" min="0" max="100" value="50"
    oninput="this.previousElementSibling.style.clipPath='inset(0 '+(100-this.value)+'% 0 0)'">
</div>
```

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.ease-compare` | Container for the comparison component |
| `.ease-compare-before` | The "before" image (visible by default) |
| `.ease-compare-after` | The "after" image (revealed by slider) |
| `.ease-compare-slider` | Range input that controls the reveal |

## Why is it useful?

Common in portfolio sites, photo editing tools, redesign showcases, and product comparisons. Driving the reveal with a native range input (instead of manual pointer-drag JS) keeps it consistent with EaseMotion's "minimal JS, CSS does the work" philosophy:

- ✅ Fully accessible via keyboard (native range input)
- ✅ No external libraries or complex JS
- ✅ Smooth CSS transitions
- ✅ Works on touch devices
- ✅ Great for showcasing transformations
