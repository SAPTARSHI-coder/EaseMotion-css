# Hover Spin Continuous

A premium CSS animation example demonstrating a continuous hover-triggered clockwise rotation effect, built for the EaseMotion CSS library.

## What does this do?

This example provides a reusable CSS pattern where an element rotates continuously (360 degrees) while the user hovers over it, and immediately stops when the hover ends. The rotation speed is fully configurable via a single CSS custom property (`--ease-hover-spin-speed`), making it easy to integrate into any project.

The demo showcases the effect across multiple real-world use cases including icons, buttons, logos, loading indicators, and interactive cards — all styled with a modern, premium aesthetic.

## How is it used?

### Basic usage

Add the `hover-spin` class to any element and set the speed custom property:

```html
<div class="hover-spin" style="--ease-hover-spin-speed: 1s">
  <!-- content -->
</div>
```

### Custom property

```css
--ease-hover-spin-speed: 1s; /* default */
```

The custom property accepts any valid CSS time value (`0.5s`, `2s`, `300ms`, etc.). Smaller values produce faster rotation.

### Keyframe

The animation uses a single keyframe that rotates from `0deg` to `360deg`:

```css
@keyframes hover-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

### Hover behavior

```css
.element:hover {
  animation: hover-spin var(--ease-hover-spin-speed) linear infinite;
}
```

The animation is **only active during hover**. When the user moves the cursor away, the element immediately stops spinning and returns to its resting state.

## Why is it useful?

- **Engagement**: Subtle motion on hover creates a polished, interactive feel that delights users.
- **Configurable**: A single CSS custom property controls the speed, making it trivial to adjust across components.
- **Zero JavaScript**: Pure CSS means no runtime overhead, no event listeners, and no framework dependencies.
- **Reusable**: The pattern can be applied to any element — icons, buttons, logos, cards, and more.
- **Accessible**: Since the animation only runs on hover, it respects user preferences for reduced motion when combined with `prefers-reduced-motion` media queries.

## Animation Overview

| Property              | Value                        |
| --------------------- | ---------------------------- |
| Keyframe name         | `hover-spin`                 |
| Rotation              | `0deg` → `360deg`            |
| Direction             | Clockwise                    |
| Timing function       | `linear`                     |
| Iteration count       | `infinite` (while hovered)   |
| Activation            | `:hover` pseudo-class        |
| Deactivation          | Hover ends → animation stops |

## CSS Variable Explanation

| Variable                    | Default | Description                        |
| --------------------------- | ------- | ---------------------------------- |
| `--ease-hover-spin-speed`   | `1s`    | Duration of one full 360° rotation |

The variable is defined on `:root` with a fallback value of `1s`. Override it on any element to change its spin speed independently.

## Hover Behavior Explanation

The animation is applied exclusively through the `:hover` pseudo-class. This means:

1. **Idle state**: The element has `animation: none` and sits at its default orientation.
2. **Hover start**: The browser applies the `hover-spin` keyframe animation with `infinite` iteration.
3. **During hover**: The element rotates continuously at the configured speed.
4. **Hover end**: The browser removes the animation, and the element snaps back to its original position instantly (no transition).

This on/off behavior is intentional — it provides clear visual feedback that the interaction has ended.

## Responsive Behavior Notes

- The demo uses a fluid layout with `clamp()` for typography and `auto-fit`/`auto-fill` grid properties for adaptive columns.
- On screens narrower than 640px, the demo and use-cases grids collapse to single-column layouts.
- On tablet-sized screens (641px–1024px), the use-cases grid displays in two columns.
- All interactive elements remain fully functional at any viewport size.
- The design uses relative units (`rem`, `%`) throughout for proper scaling.

## File Structure

```
submissions/examples/hover-spin-continuous-nb/
├── demo.html          # Complete showcase page with hero, demo, config, and use cases
├── style.css          # All styles including keyframes, layout, and responsive rules
└── README.md          # This documentation file
```

## Browser Support

Works in all modern browsers that support CSS custom properties and `@keyframes` animations:

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 16+
- Opera 36+

## Accessibility

To respect user preferences for reduced motion, wrap the hover animation in a `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: no-preference) {
  .element:hover {
    animation: hover-spin var(--ease-hover-spin-speed) linear infinite;
  }
}
```

This ensures users who prefer reduced motion are not affected by the spinning effect.