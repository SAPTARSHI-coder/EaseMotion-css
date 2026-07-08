# Multi-Plane backdrop-filter Depth-of-Field

## What does this do?

Two demos that simulate a camera depth-of-field effect using `backdrop-filter: blur()` without JavaScript.

**Demo 1 — Animated focus pull**: A scene divided into three vertical planes (near / mid / far). Keyframe animations cycle which plane has `blur(0px)` (sharp) while the other two receive increasing blur, mimicking a rack focus in cinematography.

**Demo 2 — Hover card stack**: Three cards at different CSS `translateZ` depths. On hover, `backdrop-filter: blur()` increases on back cards and drops to zero on the front card, simulating shallow depth-of-field as the front card "comes into focus."

## How it works

`backdrop-filter` blurs what is rendered *behind* an element. The background bokeh blobs (radial-gradient) act as the scene. Each frosted plane/card sits on top and applies variable blur to everything behind it:

```css
@keyframes focus-near {
  0%,  20% { backdrop-filter: blur(0px)  brightness(1.1); } /* sharp  */
  33%, 66% { backdrop-filter: blur(8px)  brightness(0.7); } /* soft   */
  80%, 100%{ backdrop-filter: blur(14px) brightness(0.5); } /* blurred*/
}
```

`brightness()` is stacked alongside `blur()` to darken out-of-focus planes, reinforcing the depth cue.

## Browser note

`backdrop-filter` requires the element to create a stacking context. It also requires a real background source — it has no visible effect on elements where nothing is rendered behind them.
