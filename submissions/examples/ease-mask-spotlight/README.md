# Ease Mask Spotlight (`ease-mask-spotlight`)

## 1. What does this do?
`ease-mask-spotlight` creates a premium spotlight hover effect using native CSS masking (`mask-image`). As the cursor moves across a card, a dynamic radial mask reveals an underlying gradient glow at the mouse coordinates, producing a sleek spotlight and glowing border effect.

## 2. How is it used?
CSS radial masking is applied to the glow layer:

```css
.ease-spotlight-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #3b82f6, #ec4899);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  mask-image: radial-gradient(circle 120px at var(--x, 50%) var(--y, 50%), black, transparent);
  -webkit-mask-image: radial-gradient(circle 120px at var(--x, 50%) var(--y, 50%), black, transparent);
}
```

Mouse coordinates are tracked and updated as custom CSS variables (`--x` and `--y`):

```javascript
card.addEventListener('mousemove', e => {
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--x', (e.clientX - rect.left) + 'px');
  card.style.setProperty('--y', (e.clientY - rect.top) + 'px');
});
```

## 3. Why is it useful?
Moving the visual masking operation directly into the CSS engine prevents main-thread rendering bottlenecks and DOM recalculation overhead caused by heavy DOM manipulation or canvas operations. JavaScript is strictly limited to passing raw mouse coordinates into CSS custom variables, resulting in ultra-responsive 60fps performance.
