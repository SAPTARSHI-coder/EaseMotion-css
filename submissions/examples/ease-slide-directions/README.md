# Ease Slide Directions

## What does this do?
Adds two horizontal entrance animations, `ease-slide-left` and `ease-slide-right`, that slide an element into view from the left or right with a pronounced 64px translate and opacity fade over 600ms.

## How is it used?
Add the class to any HTML element:

```html
<div class="ease-slide-left">Content slides in from the left</div>

<div class="ease-slide-right">Content slides in from the right</div>
```

Combine with delay utilities for staggered reveals:

```html
<div class="ease-slide-left ease-delay-100">First</div>
<div class="ease-slide-left ease-delay-200">Second</div>
<div class="ease-slide-right ease-delay-300">Third</div>
```

## Why is it useful?
EaseMotion CSS already ships `ease-slide-up` and `ease-slide-down` for vertical entrance animations. This submission completes the directional slide set with horizontal counterparts, giving developers all four cardinal directions for composing entrance sequences. 

The :not() guard pattern prevents animation cancellation if both `ease-slide-left` and `ease-slide-right` are accidentally applied to the same element.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the effect. The demo showcases all three directions side by side with staggered delays.

## Contribution Notes
- Class naming follows the existing convention.
- The maintainer will integrate this into core according to the contribution guidelines.
