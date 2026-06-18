# Slide-in Blur & Rotate Entrance Animations

A set of visually interesting entrance effects that expand the EaseMotion CSS animation library. These animations combine standard sliding translations with blur transitions and rotation effects for more creative developer options.

## Animations Added

### Slide-in Blur
Elements slide into place while transitioning from a blurred state to sharp focus.

- `.ease-slide-in-blur-up`
- `.ease-slide-in-blur-down`
- `.ease-slide-in-blur-left`
- `.ease-slide-in-blur-right`

**Customization:** Use the `--ease-blur-amount` CSS variable to control the starting blur (default: `8px`).

```html
<div class="ease-slide-in-blur-up" style="--ease-blur-amount: 15px;">
  Blurred entrance
</div>
```

### Slide-in Rotate
Elements slide into place while rotating from a slight angle (-12deg or 12deg depending on direction) to 0deg.

- `.ease-slide-in-rotate-up`
- `.ease-slide-in-rotate-down`
- `.ease-slide-in-rotate-left`
- `.ease-slide-in-rotate-right`

## Features

- **Directional Variants**: Each animation supports Up, Down, Left, and Right directions.
- **Composable**: Fully compatible with existing `ease-delay-*`, `ease-duration-*`, and `ease-animation-iterations` utilities.
- **Accessibility**: Automatically respects `prefers-reduced-motion` by disabling the movement and transitions for a safe user experience.
- **Hardware Accelerated**: Uses `translate3d` for smooth 60fps performance.

## Affected Core Files

- `core/animations.css`: Added keyframes and utility classes.
- `easemotion/slide.css`: Added keyframes and classes to the modular slide bundle.
