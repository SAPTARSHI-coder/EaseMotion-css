# Contract Safari Reproduction

This demo reproduces the Contract animation stuttering issue observed on Safari and provides a potential GPU acceleration fix using hardware compositing properties.

## Usage
Simply open `demo.html` in your browser. 
To implement the optimized fix in your own code, apply the following properties to the animated element:
```css
.ease-contract-optimized {
  transform: translateZ(0);
  backface-visibility: hidden;
  transform-style: preserve-3d;
  will-change: transform;
}
.ease-contract-optimized:hover {
  transform: scale(0.85) translateZ(0);
}
```

## Why is it useful?
This allows maintainers and contributors to reliably reproduce the Safari-specific animation stutter without modifying the core framework files, while providing a clear and testable solution using GPU compositing properties that ensure smooth 60fps rendering across all supported browsers.

## Testing Observations

### Actual vs Expected Behavior
- **Expected:** The element scales down to 85% of its size smoothly without frame drops.
- **Actual (Safari):** During the transition, Safari occasionally drops frames, the animation stutters, and the element can briefly flash or freeze.

### Cross-Browser Testing Notes
- **Safari (macOS/iOS):** Exhibits noticeable stuttering on the standard animation. The optimized version using `translateZ(0)` and `will-change: transform` forces GPU rendering, which eliminates the stutter.
- **Chrome:** Both standard and optimized animations perform smoothly.
- **Firefox:** Both animations perform smoothly.
- **Edge:** Both animations perform smoothly.

### Potential Fixes Investigated
To force hardware acceleration and fix the Safari rendering issue, the following properties were applied to the optimized element:
- `transform: translateZ(0)`: Forces the browser to create a new hardware-accelerated composite layer.
- `backface-visibility: hidden`: Prevents rendering of the back of the element, which can cause flickering in Safari during 3D transforms.
- `transform-style: preserve-3d`: Hints to the rendering engine how nested 3D transforms should be handled.
- `will-change: transform`: Informs the browser that the transform property will be animated, allowing it to prepare optimizations ahead of time.
