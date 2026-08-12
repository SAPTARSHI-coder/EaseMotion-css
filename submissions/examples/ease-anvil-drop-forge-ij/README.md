# Anvil Drop Forge

A blacksmith hammer that swings down and strikes an anvil, popping a spark flash at the point of impact.

## How is it used?

The hammer is a rotated bar whose `transform-origin` sits at the top pivot. Clicking the button toggles `.swing`:

```html
<div class="hammer" id="hammer"></div>
```

```css
.hammer.swing {
  animation: hammer-hit 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
```

The demo re-triggers the animation by removing the class, forcing a reflow with `offsetWidth`, then re-adding it. The `.spark-ring` runs a parallel `spark-pop` keyframe that scales up and fades out exactly when the hammer reaches the anvil.

## Why is it useful?

A single springy overshoot curve sells the weight of a striking tool. The same `transform-origin` + rotate trick powers any lever or seesaw motion, and the coincident flash gives the impact a satisfying cause-and-effect — a compact pattern for physical-feeling UI moments.
