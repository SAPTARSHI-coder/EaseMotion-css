# Ripple Wave Click

A lightweight CSS ripple-wave click animation for interactive elements.

## Features

- `ease-ripple-wave-click` keyframe animation
- `ease-anim-ripple-wave-click` utility class
- Configurable `--ease-duration`
- Configurable `--ease-timing`
- Uses `transform` and `opacity`
- Includes `prefers-reduced-motion` support
- No JavaScript required

## Usage

Add the utility class to an interactive element:

```html
<button class="ease-anim-ripple-wave-click">
  Click Me
</button>

The animation can be customized using CSS variables:

.my-button {
  --ease-duration: 700ms;
  --ease-timing: ease-out;
}
Animation
@keyframes ease-ripple-wave-click {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.7;
  }


  60% {
    opacity: 0.35;
  }


  100% {
    transform: translate(-50%, -50%) scale(28);
    opacity: 0;
  }
}
Accessibility

The animation is disabled when the user has enabled reduced motion:

@media (prefers-reduced-motion: reduce) {
  .ripple-button:active::after {
    animation: none;
  }
}

Keyboard focus remains visible through :focus-visible.

Performance

The animation uses transform and opacity rather than layout-triggering properties, helping keep the effect lightweight and smooth.

Closes #81681