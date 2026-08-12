# prefers-contrast

## What does this do?

Demonstrates the `@media (prefers-contrast)` CSS media query — adjusting animation speed, color saturation, and border visibility based on the user's OS-level contrast preference (`more`, `no-preference`, `reduce`).

## How is it used?

```css
.element {
  animation: pulse 3s ease-in-out infinite;
}

@media (prefers-contrast: more) {
  .element {
    animation-duration: 1.5s; /* faster for better feedback */
    border: 3px solid white;   /* stronger visual boundary */
  }
}

@media (prefers-contrast: reduce) {
  .element {
    animation-duration: 5s; /* slower, subtler */
    opacity: 0.7;
  }
}
```

## Why is it useful?

`prefers-contrast` is a key accessibility media query that lets developers adapt their animations for users with visual impairments or contrast sensitivity. Increasing animation speed and adding borders at `more` contrast helps users perceive state changes; slowing down at `reduce` prevents discomfort. This fits EaseMotion CSS's commitment to accessible, inclusive animation design.
