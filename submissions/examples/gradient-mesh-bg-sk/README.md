# Animated Gradient Mesh Background

## What does this do?
Creates a flowing gradient mesh background by animating four blurred radial-gradient orbs across the screen with independent drift keyframes, producing a smooth aurora/mesh effect in pure CSS.

## How is it used?

```html
<section class="mesh-bg">
  <div class="mesh-bg__layer">
    <div class="mesh-bg__orb"></div>
    <div class="mesh-bg__orb"></div>
    <div class="mesh-bg__orb"></div>
    <div class="mesh-bg__orb"></div>
  </div>
  <div class="mesh-bg__content">
    <!-- your page content -->
  </div>
</section>

<!-- subtle variant -->
<section class="mesh-bg mesh-bg--subtle">…</section>

<!-- vivid variant -->
<section class="mesh-bg mesh-bg--vivid">…</section>
```

Theming via CSS custom properties:
```css
--mesh-color-1: #6366f1;
--mesh-color-2: #ec4899;
--mesh-color-3: #06b6d4;
--mesh-color-4: #8b5cf6;
--mesh-duration: 12s;
--mesh-blur: 80px;
--mesh-opacity: 0.75;
```

## Why is it useful?
No canvas, no WebGL, no JS — just CSS `filter: blur()` and `@keyframes`. Each orb moves independently with different durations and easing, creating an organic non-repeating feel. Respects `prefers-reduced-motion` by stopping drift animations. The color palette is fully overridable via CSS custom properties inline.
