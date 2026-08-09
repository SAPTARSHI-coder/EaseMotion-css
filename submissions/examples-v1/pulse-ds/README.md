# Optimized Pulse Animation

This submission demonstrates an optimized Pulse animation effect, showcasing smooth and performant scaling for UI elements.

## Usage

Apply the `pulse-demo` class to your target element:

```html
<button class="pulse-demo">Click Me</button>
```

## Performance Improvements

1. **GPU Acceleration**: The animation relies exclusively on the `transform` and `opacity` properties. This leverages hardware acceleration and avoids triggering costly layout recalculations or paint operations.
2. **`will-change` Property**: Applied `will-change: transform` to inform the browser ahead of time, ensuring smooth initial frames without overusing memory.
3. **Organic Timing Function**: Utilizes a `cubic-bezier(0.4, 0, 0.2, 1)` timing function for a natural, smooth easing effect compared to linear or basic ease functions.

## Customization

You can easily adjust the scale factors and animation duration in `style.css` to fit different design needs.
