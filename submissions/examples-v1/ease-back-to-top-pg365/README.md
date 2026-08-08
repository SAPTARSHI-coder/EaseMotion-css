# Animated Back to Top Button

## What does this do?
A floating circular button that stays hidden until the user scrolls past a
threshold, then fades and springs into view in the bottom-right corner;
clicking it (or activating it via keyboard) smooth-scrolls the page back
to the top.

## How is it used?
```html
<button type="button" class="back-to-top" id="backToTop" aria-label="Back to top">
  <svg class="back-to-top__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
</button>
```

```js
// Toggle visibility based on scroll position, scroll to top on click.
var button = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
  button.classList.toggle('is-visible', window.scrollY > 400);
}, { passive: true });

button.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

The entrance/exit motion itself (opacity, translate, scale) lives entirely
in `style.css` via the `.is-visible` modifier class — the script's only
job is deciding *when* to add/remove that class and performing the smooth
scroll on click, so the animation stays fully CSS-driven and easy to
restyle.

## Why is this useful?
Back-to-top buttons are a small but common piece of UX on long pages and
landing pages, and this implementation fits EaseMotion CSS's
animation-first philosophy directly: a spring-eased fade/slide entrance
(`cubic-bezier(0.34, 1.56, 0.64, 1)`) rather than a flat show/hide, a
hover lift, a focus-visible ring for keyboard users, `aria-label` for
screen readers, and a `prefers-reduced-motion` fallback that keeps the
fade but removes the transform-based motion. The JavaScript is
intentionally minimal (~15 lines, `requestAnimationFrame`-throttled,
passive scroll listener) since scroll-position detection can't be done in
pure CSS in all browsers yet.
