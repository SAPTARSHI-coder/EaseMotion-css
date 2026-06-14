# Animation: Blur Button Emphasis

A blur emphasis animation for button components. On trigger, the button briefly blurs, brightens, and scales up, then snaps back into sharp focus — creating a "lens focus" emphasis effect.

## Features

- **Pure CSS** — `@keyframes ease-blur-button-emphasis` with no JS dependency
- **Multi-property** — animates `filter: blur()`, `brightness()`, and `transform: scale()`
- **Spring-like easing** — `cubic-bezier(0.25, 1, 0.5, 1)`
- **Color variants** — purple (default), cyan, emerald, rose via `--ease-btn-bg`
- **Reduced motion** — respects `prefers-reduced-motion`
- **Cross-browser** — Chrome, Firefox, Safari, Edge

## Usage

```html
<button class="blur-btn emphasis-active">Submit</button>
```

Trigger the `.emphasis-active` class on click to play the animation. Remove the class to reset.
