# Glassmorphism Card

### What does this do?

It shows a frosted glass card that blurs the colorful background behind it, with a translucent fill, a soft border, and a gentle lift on hover.

### How is it used?

```html
<div class="glass-scene">
  <div class="glass-card">
    <h3>Frosted Glass</h3>
    <p>A translucent panel that blurs what is behind it.</p>
    <a href="#" class="glass-cta">Learn more</a>
  </div>
</div>
```

Place the `.glass-card` over a colorful background. The card uses `backdrop-filter` to blur whatever sits behind it, so it needs colorful content underneath to show the effect.

### Why is it useful?

Glass panels are a popular style for hero cards, pricing, and overlays. This builds the frosted look with `backdrop-filter`, a translucent background, and a light border, so it needs no JavaScript or images. The call to action shows a focus ring, and the hover lift is disabled under `prefers-reduced-motion: reduce`.
