# Hamburger to X Morph

## 1. What does this do?
A three-line hamburger menu icon that smoothly animates into an X (close) icon on click, using CSS transitions on each line.

## 2. How is it used?
Add the `.hamburger` class to a `<button>` with three `.hamburger-line` spans. Toggle the `.open` class via JavaScript.
```html
<button class="hamburger" onclick="this.classList.toggle('open')">
  <span class="hamburger-line"></span>
  <span class="hamburger-line"></span>
  <span class="hamburger-line"></span>
</button>
```

## 3. Why is it useful?
A clean, lightweight hamburger/close toggle with smooth CSS transitions. The middle line fades out while the top and bottom rotate to form the X. Respects `prefers-reduced-motion` and is fully accessible with `aria-label`.
