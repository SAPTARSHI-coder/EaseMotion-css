# Glassmorphism Card

## What does this do?
A pure CSS glassmorphism card component with a frosted glass surface, animated gradient glow border on hover, and a staggered fade-in entrance animation.

## How is it used?

```html
<div class="glass-card">
  <div class="glass-card__inner">
    <span class="glass-card__icon">🚀</span>
    <h3 class="glass-card__title">Card Title</h3>
    <p class="glass-card__text">Card description goes here.</p>
    <a href="#" class="glass-card__btn">Action</a>
  </div>
</div>
```

The demo background (`.glass-demo-bg`) is only needed to showcase the frosted glass effect — in real use, any dark or colourful background works.

Multiple cards automatically stagger their entrance animations via `:nth-child` delays.

## Why is it useful?

Glassmorphism is one of the most sought-after modern UI effects. This component fits EaseMotion CSS's philosophy in three ways:

1. **Animation-first** — the glow border animates on hover using a `@keyframes` gradient rotation; the entrance uses a custom `glassEntrance` keyframe.
2. **Human-readable** — class names describe what they are: `glass-card`, `glass-card__inner`, `glass-card__btn`.
3. **Zero dependencies** — works by opening `demo.html` directly in a browser. No build step, no JavaScript.

The `-webkit-mask` trick used for the animated border avoids extra DOM elements and keeps the HTML clean.
