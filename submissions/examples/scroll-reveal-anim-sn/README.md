# Scroll Reveal Animation

## Summary
Fade/slide-in animations triggered by Intersection Observer.

## Variants
`.ease-reveal-left`, `.ease-reveal-right`, `.ease-reveal-scale`

## JS (3 lines)
```js
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('ease-revealed')));
document.querySelectorAll('.ease-reveal').forEach(el => io.observe(el));
```