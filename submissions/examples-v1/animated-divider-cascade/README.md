# Animated Divider

Animated dividers with gradient fills and morphing effects for separating content sections with visual interest.

## What does this do?

This creates animated dividers using CSS `@keyframes` for gradient animations, morphing effects with `border-radius` and `transform`, and multiple style variants (rainbow, neon, glow, dashed, pulse, wave, morphing, with icon).

## How is it used?

```html
<div class="animated-divider"></div>

<!-- Style variants -->
<div class="animated-divider divider-rainbow"></div>
<div class="animated-divider divider-neon"></div>
<div class="animated-divider divider-glow"></div>
<div class="animated-divider divider-dashed"></div>
<div class="animated-divider divider-pulse"></div>
<div class="animated-divider divider-wave"></div>
<div class="animated-divider divider-morph"></div>

<!-- Size variants -->
<div class="animated-divider divider-sm"></div>
<div class="animated-divider divider-md"></div>
<div class="animated-divider divider-lg"></div>
<div class="animated-divider divider-xl"></div>

<!-- With icon -->
<div class="animated-divider divider-with-icon">
  <span class="divider-icon">✦</span>
</div>
```

The gradient animation uses CSS `@keyframes`:

```css
@keyframes divider-gradient {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

## Why is it useful?

Animated dividers add visual interest and separate content sections effectively, making layouts more engaging. Gradient fills and morphing effects provide better visual hierarchy compared to static dividers. Multiple style variants (rainbow, neon, glow, dashed, pulse, wave, morphing) offer flexibility for different design contexts. The CSS-first approach using `@keyframes` and `linear-gradient` demonstrates advanced CSS techniques for creating dynamic visual elements without JavaScript. The component is lightweight and performant, making it suitable for modern web applications where visual polish is important. This showcases how to create sophisticated animations using only native CSS properties.
