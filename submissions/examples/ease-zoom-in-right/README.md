# Ease Zoom In Right Animation

This is a demonstration of the `ease-zoom-in-right` animation for EaseMotion CSS (Issue #11825).

## What the animation does

The `ease-zoom-in-right` animation provides a dynamic and smooth entrance effect. Bringing an element into view by entering from the **left** side (`translateX(-40px)`) while simultaneously scaling up from a smaller size (`scale(0.5)`). 

## How it works

The animation uses CSS `@keyframes` to transition two properties:
- `transform`: Starts at `translateX(-40px) scale(0.5)` and animates to `translateX(0) scale(1)`.
- `opacity`: Starts at `0` (invisible) and fades to `1` (fully visible).

It utilizes a smooth ease-out-like cubic-bezier timing function (`cubic-bezier(0.25, 1, 0.5, 1)`) to ensure the entrance starts quickly and gently decelerates as it settles into its final position over a duration of 700ms.

## How to use it

1. Include the keyframes in your CSS file.
2. Apply the animation to any element using the `animation` property.

### Example Code Snippet

```css
@keyframes ease-zoom-in-right {
  0% {
    transform: translateX(-40px) scale(0.5);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

.my-element {
  /* Apply the animation */
  animation: ease-zoom-in-right 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  
  /* Ensure element is hidden before animation begins */
  opacity: 0;
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS focuses on providing highly polished, modern, and fluid animations. The `ease-zoom-in-right` animation fits this philosophy by offering a premium micro-interaction that feels natural and engaging without being overly disruptive. It follows modern design principles by combining translation, scaling, and opacity changes for a rich visual experience.
