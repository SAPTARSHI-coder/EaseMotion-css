# Animation: Flip Button Exit

A 3D flip-away exit animation for button components. The button rotates around the Y-axis with perspective depth, creating a polished card-flip dismissal effect.

## Features

- **Pure CSS** — `@keyframes ease-flip-button-exit` with no JS dependency
- **3D perspective** — `perspective(400px) rotateY()` for realistic depth
- **Spring-like easing** — `cubic-bezier(0.25, 1, 0.5, 1)`
- **GPU-accelerated** — animates only `transform` and `opacity`
- **Multiple color variants** — primary (purple), success (green), danger (red), amber (yellow) via `--ease-btn-bg`
- **Reduced motion** — respects `prefers-reduced-motion`
- **Cross-browser** — Chrome, Firefox, Safari, Edge

## Usage

```html
<button class="flip-btn exit-active">Submit</button>
```

Trigger the `.exit-active` class on click to play the animation. Remove the class to reset.
