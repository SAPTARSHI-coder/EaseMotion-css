# Back to Top Button

## Summary
Fixed button that bounces in after scrolling down.

## JS
```js
const btn = document.getElementById('btt');
window.addEventListener('scroll', () =>
  btn.classList.toggle('ease-visible', window.scrollY > 300)
);
```