# CSS 4-Way Flip Animation

## What does this do?

This demo showcases a collection of four pure CSS 3D flip animations that rotate elements in different directions:

- Left → Right
- Right → Left
- Top → Bottom
- Bottom → Top

The animations use CSS transforms, perspective, and keyframes to create smooth continuous flipping effects without JavaScript.

## How is it used?

```html
<div class="flip-container">
  <div class="flip-box flip-left-right">Left → Right</div>
</div>
```

Apply one of the available directional classes:

```html
<div class="flip-box flip-left-right"></div>
<div class="flip-box flip-right-left"></div>
<div class="flip-box flip-top-bottom"></div>
<div class="flip-box flip-bottom-top"></div>
```

Each class triggers a different 3D flip animation using CSS keyframes and transform rotations.

## Why is it useful?

3D flip animations can help draw attention to important content while maintaining a clean and modern appearance. They are useful for:

- Interactive cards
- Feature showcases
- Loading states
- Promotional content
- Dashboard widgets
- Visual demonstrations

Because the effect is built entirely with CSS, it is lightweight, easy to customize, and works without additional JavaScript dependencies.
