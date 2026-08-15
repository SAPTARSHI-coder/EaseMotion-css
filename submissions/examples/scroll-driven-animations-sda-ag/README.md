# Native Scroll-Driven Animations (SDA) with CSS @supports Progressive Enhancement

## 1. What does this do?

Provides native, hardware-accelerated Scroll-Driven Animations (SDA) using the CSS-only ViewTimeline (`animation-timeline: view()`) and ScrollTimeline (`animation-timeline: scroll()`) APIs with a lightweight Javascript progressive enhancement fallback for unsupported browser clients.

## 2. How is it used?

Apply the `.scroll-progress-bar` class to a fixed indicator element to track global scroll progress:

```html
<div class="scroll-progress-bar"></div>
```

Or apply `.reveal-scroll` along with any preset variant classes to animate elements as they enter the viewport:

```html
<!-- Entrance card that fades, scales, and slides up -->
<div class="card reveal-scroll reveal-scroll-slide-up">
  <h3>Reveal Me on Scroll</h3>
</div>

<!-- Custom property override for custom start scale and scroll ranges -->
<div
  class="card reveal-scroll"
  style="--scroll-range: entry 20% cover 50%; --scroll-start-scale: 0.7;"
>
  <h3>Custom Viewport Range</h3>
</div>
```

### Preset Reveal Variants:

- `reveal-scroll-fade`: Fade-only opacity transition.
- `reveal-scroll-zoom`: Pure zoom/scale-up reveal.
- `reveal-scroll-slide-up`: Opacity fade + vertical translation up.
- `reveal-scroll-slide-down`: Opacity fade + vertical translation down.
- `reveal-scroll-slide-left`: Opacity fade + horizontal translation from right to left.
- `reveal-scroll-slide-right`: Opacity fade + horizontal translation from left to right.
- `reveal-scroll-blur`: Smooth blur-to-focus transition.

## 3. Why is it useful?

It aligns perfectly with EaseMotion's "animation-first" and "zero-dependencies" philosophy by running scroll-driven logic entirely on the browser's compositor thread without JS overhead, layout thrashing, or main thread blocking in supported browsers, while offering a graceful and dynamic JS fallback for older browsers to ensure compatibility across all devices.
