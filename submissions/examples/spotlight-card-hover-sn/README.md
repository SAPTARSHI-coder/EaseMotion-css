# Spotlight Card Hover Effect

## Summary
Radial gradient spotlight that follows cursor inside a card.

## JS
```js
document.querySelectorAll('.ease-spotlight-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--ease-sx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--ease-sy', (e.clientY - r.top) + 'px');
  });
});
```