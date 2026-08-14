# Robot Arm Assemble

A pick-and-place robot arm that pivots its joints, grips a part from a tray, and swings it onto a target.

## How is it used?

Each joint rotates with its own `transform-origin`, gated by one `.working` class:

```css
.arm-upper {
  transform-origin: 50% 100%;
  transition: transform 1.1s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.arm.working .arm-upper { transform: rotate(-14deg); }
.arm.working .arm-fore { transform: rotate(30deg); }
```

The gripper and the carried part use the same springy curve on their `left`/`bottom` transitions so everything lands at once. The part fades in only while `working`, making it look "gripped" mid-swing.

## Why is it useful?

Chained `transform-origin` rotations are how you build any articulated limb or lever — a strong base pattern for toolbars that fold, toggle handles, and accordion "hinge" effects. Matching the easing curve across joints keeps multi-segment motion feeling like one mechanism.
