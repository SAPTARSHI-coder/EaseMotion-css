# Back to Top Reveal

## What does this add?

A back-to-top button that fades in once the user has scrolled down far enough, fades back out when they scroll back near the top, and smooth-scrolls the page to the top when clicked.

## How is it used?

```html
<button
  class="ease-back-top"
  id="backTopBtn"
  type="button"
  aria-label="Back to top"
>
  <svg><!-- up arrow icon --></svg>
</button>
```

```js
const SCROLL_THRESHOLD = 300;

function updateVisibility() {
  if (window.scrollY > SCROLL_THRESHOLD) {
    backTopBtn.classList.remove("ease-fade-out");
    backTopBtn.classList.add("is-visible", "ease-fade-in");
  } else {
    backTopBtn.classList.remove("ease-fade-in");
    backTopBtn.classList.add("ease-fade-out");
    setTimeout(() => backTopBtn.classList.remove("is-visible"), 300);
  }
}

window.addEventListener("scroll", updateVisibility, { passive: true });

backTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
```

- `.is-visible` toggles the button between hidden (`opacity:0; visibility:hidden; pointer-events:none;`) and interactive.
- `.ease-fade-in` / `.ease-fade-out` are the same fade animation classes EaseMotion already defines elsewhere in `core/animations.css` (`ease-kf-fade-in` / `ease-kf-fade-out`, 300ms, `cubic-bezier(0.4, 0, 0.2, 1)`), reused here rather than reinvented.
- `html{ scroll-behavior: smooth; }` backs up the JS `scrollTo({behavior:'smooth'})` call so the scroll is smooth even without JS support for the options object.

## Why does it fit EaseMotion CSS?

A back-to-top button is one of the most common scroll-triggered UI patterns, and it should match whatever fade language the rest of the design system already uses rather than introducing a one-off animation. This reuses EaseMotion's existing fade-in/fade-out timing and easing exactly, so it feels native to the rest of the framework.

## Files

- demo.html
- style.css

## Usage

Open `demo.html` and scroll down past 300px — the button fades in at the bottom-right. Scroll back up and it fades out. Click it anytime to smooth-scroll back to the top.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Accessibility

`aria-label="Back to top"` is set on the button since it's icon-only. Respects `prefers-reduced-motion: reduce` — the button still appears/disappears and the page still scrolls to top, just without the fade or smooth-scroll animation.
