# Reading Progress Bar

## Summary
Fixed top progress bar that fills based on scroll position.

## JS
```js
const bar = document.getElementById('rp');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  bar.style.width = pct + '%';
});
```