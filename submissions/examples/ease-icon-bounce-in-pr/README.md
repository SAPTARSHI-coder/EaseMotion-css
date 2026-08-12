# Animated Icon Bounce In (`ease-icon-bounce-in`)

An elastic spring entrance animation utility designed specifically to make icon-sized elements (e.g. status lights, notification count badges, UI icons, toast icons) pop into view with professional, spring-loaded responsiveness.

## What does this do?

It animates an element from `scale(0)` up to a peak of `scale(1.2)` and settles back down to `scale(1)` in an elastic, springy motion, while simultaneously fading in.

## How is it used?

Add the base class to any small or icon-sized element:

```html
<span class="ease-icon-bounce-in">🔔</span>
```

### Speed Modifiers

Adjust the duration by appending a speed class:

- **Fast (`0.3s`)**: `bounce-fast`
- **Slow (`0.8s`)**: `bounce-slow`

```html
<span class="ease-icon-bounce-in bounce-fast">🔔</span>
```

### Spring Intensity Modifiers

Control the stiffness and spring intensity by appending an intensity class:

- **Subtle**: `bounce-spring-subtle` (overshoot to `1.1`)
- **Intense**: `bounce-spring-intense` (overshoot to `1.35`)

```html
<span class="ease-icon-bounce-in bounce-spring-intense">🔔</span>
```

### Custom Variable Customization

Fine-tune the spring coefficients directly using CSS variables:

```css
.my-custom-icon {
  --ease-icon-bounce-duration: 0.6s;
  --ease-icon-bounce-peak: 1.3;
  --ease-icon-bounce-trough: 0.85;
  --ease-icon-bounce-peak-2: 1.08;
}
```

## Why is it useful?

In modern UI/UX design, minor animations (micro-interactions) draw focus to critical updates. The `ease-icon-bounce-in` utility is optimized specifically for icons and badges, using a smaller scale range than standard card or modal entry animations to prevent layout distortion, keeping transitions subtle, elastic, and polished.

## Tech Stack

- HTML
- CSS (no JavaScript, pure keyframes)

## Accessibility

Fully supports `prefers-reduced-motion: reduce`. When users have reduced motion enabled, physical scaling and translation are bypassed, displaying the element instantly to maintain a comfortable visual experience.
