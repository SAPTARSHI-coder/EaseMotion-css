# Spotlight Card

## What does this do?
A card where a radial glow follows the user's cursor position on hover. The light source tracks the mouse in real time using CSS custom properties (`--mouse-x`, `--mouse-y`) updated by ~8 lines of JS. On mouseleave, the spotlight smoothly returns to center.

## How to use it
```html
<!-- Basic -->
<div class="spotlight-card">
  <h3>Card Title</h3>
  <p>Content here.</p>
</div>

<!-- With border glow -->
<div class="spotlight-card spotlight-card--border">
  <h3>Card Title</h3>
  <p>Content here.</p>
</div>
```

```js
// Required: ~8 lines of JS to track mouse position
document.querySelectorAll('.spotlight-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  });
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  });
});
```

## Customization
```css
.spotlight-card {
  --spotlight-color: rgba(108, 99, 255, 0.12); /* glow color */
  --spotlight-size: 400px;                      /* glow radius */
}
```

## Why it fits EaseMotion CSS
EaseMotion has shimmer, glow, and lift — but nothing that reacts to cursor position. This is the most visually impressive hover effect missing from the framework. Motion that reacts to the user feels alive. Fully composable with existing ease-* classes.
