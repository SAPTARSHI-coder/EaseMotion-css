# Image Reveal on Scroll

## 1. What does this do?
Images that fade and scale in when scrolled into the viewport, using the IntersectionObserver API (vanilla JS).

## 2. How is it used?
Add `data-reveal` attribute to any element. The IntersectionObserver adds a `.visible` class when the element enters the viewport.
```html
<div data-reveal>
  <img src="photo.jpg" alt="" />
</div>
```

## 3. Why is it useful?
A lightweight, performant scroll-triggered reveal with no library dependency. Each element is observed independently and unobserved after reveal. Respects `prefers-reduced-motion` and degrades to always-visible.
