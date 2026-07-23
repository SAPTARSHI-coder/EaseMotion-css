# Scroll-Driven Parallax Utilities — Issue #23644

## What does this do?

This submission proposes adding a scroll-driven parallax utility (`.ease-parallax`) that translates elements vertically based on scroll offset using the modern, zero-dependency CSS `animation-timeline: scroll()` standard.

## How is it used?

Apply `.ease-parallax` class to elements you want to translate, and append speed depth modifiers to vary the scroll offset distances:

```html
<!-- Moves 50px (Background depth) -->
<div class="ease-parallax ease-parallax-slow">Slow Parallax</div>

<!-- Moves 100px (Midground depth) -->
<div class="ease-parallax">Default Parallax</div>

<!-- Moves 200px (Foreground depth) -->
<div class="ease-parallax ease-parallax-fast">Fast Parallax</div>
```

The styles use the `@supports (animation-timeline: scroll())` rules natively. A simple event scroll listener is added to `core/reveal.js` or similar global scripts to act as a fallback in Safari and Firefox.

## Why is it useful?

It provides a completely JavaScript-free parallax engine for landing page hero headers and portfolios, eliminating the dependency on heavy external scroll libraries (like GSAP ScrollTrigger or ScrollMagic) while utilizing GPU hardware acceleration.

---

## Proposed Changes in Core Code

To implement this utility, the following modifications are proposed:

### 1. File: `core/animations.css`

Add keyframe animations:

```css
/* Scroll-Driven Parallax Keyframes */
@keyframes ease-kf-parallax {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(var(--ease-parallax-distance, -100px));
  }
}
```

### 2. File: `core/utilities.css`

Add the utility layout classes inside a `@supports` block:

```css
/* Scroll-Driven Parallax Utilities */
@supports (animation-timeline: scroll()) {
  .ease-parallax {
    animation: ease-kf-parallax linear both;
    animation-timeline: scroll();
    animation-range: entry 0% exit 100%;
  }

  .ease-parallax-slow {
    --ease-parallax-distance: -50px;
  }

  .ease-parallax-fast {
    --ease-parallax-distance: -200px;
  }
}

/* Fallback variable definitions for JS helper compatibility */
.ease-parallax-slow {
  --ease-parallax-distance: -50;
}
.ease-parallax-fast {
  --ease-parallax-distance: -200;
}
.ease-parallax:not(.ease-parallax-slow):not(.ease-parallax-fast) {
  --ease-parallax-distance: -100;
}
```

### 3. File: `core/reveal.js` (Optional Fallback Integration)

We can append a small fallback listener to automatically support non-compatible browsers:

```javascript
// Browser fallback check for scroll timelines
if (!CSS.supports("animation-timeline", "scroll()")) {
  function runParallaxFallback() {
    var elements = document.querySelectorAll(".ease-parallax");
    var vh = window.innerHeight;
    Array.prototype.forEach.call(elements, function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        var progress = (vh - rect.top) / (vh + rect.height);
        var distance = parseFloat(
          getComputedStyle(el).getPropertyValue("--ease-parallax-distance") ||
            "-100"
        );
        el.style.transform = "translateY(" + progress * distance + "px)";
      }
    });
  }
  window.addEventListener("scroll", runParallaxFallback);
  window.addEventListener("resize", runParallaxFallback);
}
```

Fixes #23644
