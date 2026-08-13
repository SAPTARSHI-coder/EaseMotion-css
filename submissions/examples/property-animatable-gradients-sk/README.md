# @property Animatable Gradients

Three CSS gradient animation patterns powered by `@property` typed custom properties.

## Classes

| Class | Effect |
|---|---|
| `ease-gradient-hue-spin` | Conic gradient with continuously rotating hue via `<angle>` property |
| `ease-gradient-breathe` | Radial gradient with animating stop position via `<percentage>` property |
| `ease-gradient-shimmer` | Linear gradient with alternating direction via `<angle>` property |

## How it works

CSS gradients can't be interpolated when animated directly — the browser jumps discretely between keyframes. Registering custom properties with `@property` and assigning a typed syntax (`<angle>`, `<percentage>`) lets the browser interpolate the values frame-by-frame, producing true smooth gradient transitions.

## Usage

```html
<div class="ease-gradient-hue-spin">Conic hue spin</div>
<div class="ease-gradient-breathe">Radial breathe</div>
<div class="ease-gradient-shimmer">Linear shimmer</div>
```

## Browser Support

`@property` is supported in Chrome 85+, Edge 85+, Firefox 128+, Safari 16.4+.  
A `prefers-reduced-motion` guard pauses all animations for users who prefer less motion.

Closes #9585
