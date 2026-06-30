# Animated Gradient Text Utility

An isolated utility typography component class that pairs custom background-clipping coordinates with a continuous geometric keyframe cycle to produce shifting multicolor text displays safely.

## Functional Controls

- **Background Clipping Constraints:** Restricts the canvas fill canvas purely to the foreground alphanumeric glyph nodes via `background-clip: text` configuration properties.
- **Oversized Background Sizes:** Scaling the asset layout background maps (`background-size: 300%`) to guarantee smooth linear translations without hard color edge breaks.
- **Loop Cycle Keyframes:** Alternating the focal axis position between polar edges (`0%` to `100%`) to create non-jarring infinite motion curves.

## Usage Layout Structure

```html
<h1 class="ease-animate-gradient">Dynamic Color Text</h1>
```

Closes #12656
