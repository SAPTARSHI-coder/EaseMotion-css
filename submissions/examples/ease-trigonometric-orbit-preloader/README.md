# Pure CSS Trigonometric Orbit Preloader

## Abstract

This submission introduces a high-performance, JavaScript-free circular orbit preloader for the EaseMotion CSS library. Utilizing modern CSS Trigonometric Functions (`cos()` and `sin()`) combined with typed CSS custom properties registered via `@property`, this component achieves smooth, continuous circular motion entirely on the compositor thread.

## CSS Trigonometry API

Prior to the CSS Values and Units Module Level 4, generating circular or orbital paths in pure CSS required complex transform chains, nested wrapper elements, or pre-calculated hardcoded keyframe offsets.

With the CSS Trigonometry API, coordinates along a circle of radius $R$ can be directly computed using standard trigonometric identities:

$$x = \cos(\theta) \times R$$
$$y = \sin(\theta) \times R$$

In `style.css`, each particle calculates its phase shift based on its index:

```css
--offset: calc(var(--index) * (360deg / var(--total-particles)));
--current-angle: calc(var(--orbit-angle) + var(--offset));
--x: calc(cos(var(--current-angle)) * var(--radius));
--y: calc(sin(var(--current-angle)) * var(--radius));
transform: translate(var(--x), var(--y));
```

The mathematical computation `calc(cos(var(--current-angle)) * var(--radius))` yields the exact X coordinate for any target angle $\theta$, while `calc(sin(var(--current-angle)) * var(--radius))` yields the corresponding Y coordinate. This allows $N$ particles to be evenly distributed around the central core and driven seamlessly by a single shared angle parameter `--orbit-angle`.

## The GPU Interpolation Advantage

Standard CSS custom properties are treated as raw string tokens by default, preventing browser layout and paint engines from interpolating them during CSS keyframe transitions.

By declaring `--orbit-angle` using the `@property` rule:

```css
@property --orbit-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
```

the browser engine registers `--orbit-angle` as a typed `<angle>` property. This enables native CSS keyframe engines to smoothly interpolate `--orbit-angle` from `0deg` to `360deg`:

```css
@keyframes ease-orbit-spin {
  to {
    --orbit-angle: 360deg;
  }
}
```

Because trigonometric function evaluations and transform calculations update continuously during animation frames, the circular trajectory executes natively on the GPU compositor thread without triggering main-thread layout thrashing or requiring a single line of JavaScript.
