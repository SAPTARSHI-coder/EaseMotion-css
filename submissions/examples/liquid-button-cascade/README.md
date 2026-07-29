# Liquid/Gooey Button Effect

A button effect that creates organic, morphing shapes using CSS border-radius animations, simulating a liquid or gooey appearance on hover and continuously.

## What does this do?

This creates buttons with organic, morphing border-radius shapes that appear to flow like liquid, using CSS `border-radius` with eight values for asymmetric corner rounding and `@keyframes` animations.

## How is it used?

```html
<button class="liquid-button">
  <span>Get Started</span>
</button>

<!-- Color variants -->
<button class="liquid-button liquid-cyan">...</button>
<button class="liquid-button liquid-green">...</button>
<button class="liquid-button liquid-pink">...</button>

<!-- Size variants -->
<button class="liquid-button liquid-sm">...</button>
<button class="liquid-button liquid-lg">...</button>

<!-- Animated variant -->
<button class="liquid-button liquid-animated">...</button>
```

The morphing effect uses CSS `border-radius` with eight values (horizontal/vertical pairs for each corner):

```css
border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
```

## Why is it useful?

This demonstrates an advanced CSS technique using asymmetric border-radius values to create organic, fluid shapes without SVG filters or complex graphics libraries. Liquid effects add personality and playfulness to interfaces, making them more memorable and engaging. They're particularly effective for creative agencies, children's apps, and playful interfaces. The pure CSS approach keeps the implementation lightweight and performant while showcasing how to create dynamic, organic shapes using only native CSS properties.
