# Range Slider

A styled range slider component with custom thumbs, gradient tracks, and hover effects using CSS pseudo-elements for cross-browser compatibility.

## What does this do?

This creates range sliders with custom styling using CSS pseudo-elements (`::-webkit-slider-thumb`, `::-moz-range-thumb`, `::-webkit-slider-runnable-track`, `::-moz-range-track`) for custom thumbs and tracks with gradient backgrounds and hover animations.

## How is it used?

```html
<input type="range" class="range-slider" min="0" max="100" value="50">

<!-- Size variants -->
<input type="range" class="range-slider slider-sm">
<input type="range" class="range-slider slider-lg">

<!-- Color variants -->
<input type="range" class="range-slider slider-cyan">
<input type="range" class="range-slider slider-green">
<input type="range" class="range-slider slider-pink">
```

Custom styling uses CSS pseudo-elements:

```css
.range-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  background: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.range-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}
```

## Why is it useful?

Range sliders are fundamental form components for selecting values within a range, used in filtering, price selection, volume controls, and many other form inputs. Custom styling with gradient tracks and animated thumbs provides better UX and visual consistency with the design system. The CSS approach using vendor-specific pseudo-elements demonstrates advanced form styling techniques for cross-browser compatibility. Multiple size and color variants make it versatile for different design contexts while keeping the implementation lightweight and self-contained.
