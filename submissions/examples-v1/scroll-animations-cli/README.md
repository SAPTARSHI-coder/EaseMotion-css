# Scroll-Triggered Animations

## What does this do?
Provides a lightweight vanilla JavaScript utility (using `IntersectionObserver`) paired with CSS animation classes to seamlessly trigger reveal animations when elements enter the viewport during scrolling.

## How is it used?

1. Include `style.css` and `ease-scroll.js` in your project.
2. Apply the `.ease-scroll-trigger` class to the element you want to animate.
3. Apply the specific animation direction class (e.g., `.ease-scroll-fade-up`).
4. (Optional) Apply a delay class for staggered grid effects (e.g., `.ease-delay-200`).

```html
<!-- Base fade up -->
<div class="ease-scroll-trigger ease-scroll-fade-up">
  I fade up when scrolled into view!
</div>

<!-- Staggered grid items -->
<div class="ease-scroll-trigger ease-scroll-scale-in">Item 1</div>
<div class="ease-scroll-trigger ease-scroll-scale-in ease-delay-200">Item 2</div>
<div class="ease-scroll-trigger ease-scroll-scale-in ease-delay-400">Item 3</div>
```

### Available Animation Classes
- `.ease-scroll-fade-up`
- `.ease-scroll-fade-down`
- `.ease-scroll-fade-left`
- `.ease-scroll-fade-right`
- `.ease-scroll-scale-in`

### Available Delay Utilities
- `.ease-delay-100` through `.ease-delay-500`

## Why is it useful?
Landing pages heavily rely on scroll-reveal animations for user engagement. Rather than importing a heavy, complex animation library (like AOS or GSAP), this provides a native, highly performant (<1KB) solution that leverages the browser's hardware-accelerated CSS animations and `IntersectionObserver`. It fully respects `prefers-reduced-motion` settings automatically.
