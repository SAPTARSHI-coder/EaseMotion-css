# Spring Easing Timing Functions

## What does this do?
Provides a set of physics-based spring easing curves (Underdamped, Critically Damped, and Overdamped) for more natural and premium UI animations.

## How is it used?
Use these custom CSS variables in your `transition-timing-function` or `animation-timing-function`.

```css
.my-element {
  transition: transform 0.6s var(--ease-spring-underdamped);
}
```

### Available Curves
| Variable | Physics Profile | Use Case |
|----------|-----------------|----------|
| `--ease-spring-underdamped` | Underdamped (Overshoot) | Playful, bouncy interactions, energetic UI. |
| `--ease-spring-critical` | Critically Damped | Snappy, high-performance menus and buttons. |
| `--ease-spring-overdamped` | Overdamped | Subtle, heavy, sophisticated transitions. |

## Why is it useful?
Standard CSS easings (like `ease-in-out`) are mathematically smooth but don't always feel "real." Spring curves mimic physical mass and tension, making UI elements feel more tactile and responsive, which is a hallmark of premium design systems like those used by Apple, Linear, and Stripe.
