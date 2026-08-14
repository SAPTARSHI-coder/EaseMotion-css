# Scroll-Driven Fade-In Element (CSS-only View Timeline)

## What does this do?

This showcase demonstrates elements that fade and scale into view dynamically as you scroll down the page, driven natively by Chrome's cutting-edge Scroll-driven animations (`view-timeline` / `animation-timeline`).

It includes an automated, high-performance `IntersectionObserver` fallback for Firefox, Safari, and other browsers that don't support the CSS API yet.

## How is it used?

Apply the CSS classes to the elements you wish to fade in:

```html
<!-- Automatically uses native CSS Scroll-driven animations OR JS IntersectionObserver fallback -->
<div class="ease-scroll-fade">
  <h3>Fades in when entering the viewport</h3>
</div>
```

If you are using the JS fallback, include the script present in `demo.html` to automatically handle detection and activation:

```javascript
(function () {
  const supportsTimeline = CSS.supports("animation-timeline", "view()");
  if (!supportsTimeline) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ease-scroll-fade-active");
          }
        });
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(".ease-scroll-fade")
      .forEach((el) => observer.observe(el));
  }
})();
```

## Why is it useful?

Traditional scroll animations require continuous event listeners on the scroll event, causing layout thrashing and scroll-jank. Native scroll-driven animations run off-thread on the browser's compositor (GPU-accelerated), guaranteeing smooth 60fps/120fps animations even under high CPU loads.

## Features

- **Modern CSS native view timelines**: Uses `animation-timeline: view()` and `animation-range: entry 0% cover 30%`.
- **Intelligent degradation**: Falls back to CSS transitions triggered by `IntersectionObserver` if native timelines are unsupported.
- **Accessibility support**: Respects `prefers-reduced-motion: reduce` by immediately revealing content and bypassing transitions.
- **State Display**: Visually alerts the developer or user if native mode or fallback mode is actively running.
