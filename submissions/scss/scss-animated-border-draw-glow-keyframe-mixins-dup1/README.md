# SCSS Utility: Animated Border Draw & Glow Keyframe Mixins (#28422)

A stunning SCSS module for the EaseMotion CSS framework that adds high-performance animated border effects. Includes a sequential "drawing" effect that traces around elements on hover, and continuous neon-style pulsing glows.

## 📦 What's included?

- `_animated-border-draw-glow-keyframe-mixins.scss`: The SCSS partial containing the complex `::before`/`::after` sequencing math and keyframes.
- `style.css`: The compiled CSS showing how the transition delays orchestrate the drawing effect.
- `demo.html`: A clean, dark-mode demo visualizing the interactions.

## 🛠 Usage via SCSS Mixins

Import the partial and include the mixin on any block-level element. **Note:** The draw effect works by animating absolute pseudo-elements over the element's actual borders.

```scss
@import 'animated-border-draw-glow-keyframe-mixins';

.my-card {
  // @include ease-border-draw($color, $border-width, $animation-duration);
  @include ease-border-draw(#3b82f6, 2px, 0.5s);
  background: #1e293b;
}

.my-neon-button {
  // @include ease-border-glow($glow-color, $pulse-duration);
  @include ease-border-glow(#ec4899, 1.5s);
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, simply add the classes to your HTML elements.

```html
<!-- Traces a blue border around the div on hover -->
<div class="ease-border-draw">
  Content
</div>

<!-- Traces a thick purple border around the div on hover -->
<div class="ease-border-draw-accent">
  Content
</div>

<!-- Pulses a continuous pink neon shadow -->
<div class="ease-border-glow">
  Content
</div>
```

## 🚀 Why this fits EaseMotion

The **EaseMotion** philosophy focuses on creating moments of delight through motion without requiring developers to write complex, unmaintainable code. The "border draw" effect is notoriously difficult to code by hand because it requires orchestrating `width` and `height` transitions across `::before` and `::after` pseudo-elements with precisely calculated `transition-delay` timings so the lines appear to "chase" each other seamlessly. This mixin encapsulates all that math into a single, beautiful, one-line `@include ease-border-draw()` directive.
