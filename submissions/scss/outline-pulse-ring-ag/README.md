# Outline Pulse Ring SCSS Mixin

Provides a hardware-accelerated outline pulse ring animation mixin.

## Usage

```scss
@use 'outline-pulse-ring-ag' as *;

.my-button {
  @include ease-anim-outline-pulse-ring-ag;
}
```

Then in HTML:
```html
<button class="my-button ease-anim-outline-pulse-ring">Click me</button>
```

## Features

- **Hardware Accelerated:** Uses `transform` and `opacity` to ensure smooth 60 FPS performance.
- **Customizable Timing:** Uses CSS variables `--ease-duration` and `--ease-timing` to allow users to override the animation speed and easing curve.
- **Accessibility:** Includes an automatic override for `prefers-reduced-motion: reduce`.
