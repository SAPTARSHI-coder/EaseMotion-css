## crossfade-image-transition

Demonstrates the CSS `crossfade()` function for blending two or more background images at a specified percentage. Hover-triggered transitions and a before/after comparison slider show smooth image blending purely with CSS.

### Key Techniques

- `crossfade(image1, image2, percentage)` blends two images where percentage controls the opacity mix
- Hover states swap the crossfade ratio, creating smooth animated blending when combined with `transition`
- A range `<input>` slider provides interactive before/after comparison using layered `crossfade()` backgrounds
- `linear-gradient()` acts as a stand-in for actual images, demonstrating the function works with any CSS image type

### Accessibility Notes

- The comparison slider uses an `<input>` element with ARIA-appropriate keyboard interaction
- Crossfade content is decorative; all information is conveyed through visible text labels
- `prefers-reduced-motion` disables `transition` and `animation` for users who need reduced motion
