# Spotlight Hover Effect for Cards

## What does this do?
A card component with a radial "spotlight" glow that follows the user's
mouse cursor as it moves over the card, creating an interactive lighting
effect.

## How is it used?

```html
<div class="ease-spotlight-card" onmousemove="spotlight(event, this)">
  <h3>Spotlight Card</h3>
  <p>Move your mouse to see the glow follow your cursor.</p>
</div>

<script>
  function spotlight(e, card) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--ease-spotlight-x', x + 'px');
    card.style.setProperty('--ease-spotlight-y', y + 'px');
  }
</script>
```

## Why is it useful?
Extends the framework's UI kit with a composable, eye-catching hover
primitive commonly used on landing pages and feature showcases. The
glow position is driven by `--ease-spotlight-x` / `--ease-spotlight-y`
CSS custom properties; minimal JS only updates these on mousemove, while
the gradient, opacity transition, and styling are pure CSS. Includes
prefers-reduced-motion support.