# Animated Gradient Text Effect

## What does this do?
This component renders responsive, animated gradient text headlines and content using pure HTML and CSS (utilizing `background-clip: text`), featuring multiple gradient options (Rainbow, Neon, Gold), timing adjustments, and hover-triggered glows.

## How is it used?
Add the `gradient-text` class to any textual element, select a palette modifier (like `text-rainbow`, `text-neon`, or `text-gold`), and append the `animate-gradient` class:

```html
<!-- Default animated neon gradient headline -->
<h1 class="gradient-text text-neon animate-gradient">
  Your Headline Here
</h1>

<!-- Slow gold metallic gradient that pauses on hover -->
<h2 class="gradient-text text-gold animate-gradient speed-slow pause-on-hover glow-on-hover glow-gold">
  Luxury Branding Text
</h2>
```

### Utility Modifiers
| Class Name | Function |
|------------|----------|
| `gradient-text` | Base class setting background-clip to text and font color to transparent |
| `text-rainbow` | Applies the multi-color rainbow linear gradient |
| `text-neon` | Applies the cyan/purple/pink neon linear gradient |
| `text-gold` | Applies the gold/honey luxury linear gradient |
| `animate-gradient` | Sets the infinite keyframe animation for gradient position shifting |
| `speed-fast` | Increases the cycle rate (animates in 3 seconds instead of 6) |
| `speed-slow` | Decreases the cycle rate (animates in 12 seconds instead of 6) |
| `pause-on-hover` | Pauses the gradient shift when the user hovers over the element |
| `glow-on-hover` | Activates a drop-shadow glow filter matching the gradient's accent color on hover |

## Why is it useful?
Gradient text adds a vibrant, premium visual element to landing pages and banner headers. This component is highly useful because:
- **Zero JS overhead**: Animates continuously using hardware-accelerated GPU positioning rather than heavy canvas operations or JS layout calculation ticks.
- **Cross-theme adaptability**: Styled and tested to ensure high contrast, readability, and sharp visual boundaries on both light and dark mode backdrops.
- **Perfect letter rendering**: Employs the `background-clip: text` standard, meaning letters scale beautifully on responsive screens without pixelation or clipping boundaries.

## Tech Stack
- **HTML5**: Semantic headings (`h1`, `h2`, `h3`, `h4`) and document structuring.
- **CSS3**: Pure CSS styling with custom animations (`shift-gradient`, `fade-in-up`, `pulse-subtle`), gradient backgrounds, and text clipping properties.

## Preview
To preview this animation demo, open [demo.html](file:///Users/shreeyakale/Desktop/GSSOC/EaseMotion-css/submissions/examples/animated-gradient-text-effect-sk/demo.html) directly in any modern browser.

## Contribution Notes
- Class naming is handled by the contributor (`.gradient-text`, `.text-rainbow`, etc.).
- The maintainer will standardize these classes to the global `ease-*` prefix convention upon review.
