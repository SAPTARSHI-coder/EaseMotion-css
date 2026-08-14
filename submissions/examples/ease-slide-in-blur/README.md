# Slide-in Blur & Rotate Entrance Animations

A set of visually interesting entrance effects that expand the animation options. These animations combine standard sliding translations with blur transitions and rotation effects.

## Animations Included

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

## File Structure

- `demo.html`: Interactive demonstration of all variants and customization.
- `style.css`: Contains the keyframes and utility classes for these animations.
- `README.md`: Documentation and usage guide.
