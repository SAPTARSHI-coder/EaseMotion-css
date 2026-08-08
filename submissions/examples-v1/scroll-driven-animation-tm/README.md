# Scroll-Driven Animation Utilities

## What does this do?

Provides CSS classes and JavaScript patterns for triggering animations when elements scroll into the viewport using the Intersection Observer API. Elements can animate in from any direction with configurable delays.

## How is it used?

### 1. Include the CSS (style.css) in your page.

### 2. Add reveal classes to your HTML elements:

```html
<div class="card reveal-fade-up">
  This card fades up when it enters the viewport.
</div>
```

### 3. Initialize the Intersection Observer:

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-fade-up').forEach(el => observer.observe(el));
```

## Available Reveal Classes

| Class                 | Animation                          |
|-----------------------|------------------------------------|
| `.reveal-fade-up`     | Fade in + slide up 32px            |
| `.reveal-scale`       | Fade in + scale from 0.85         |
| `.reveal-slide-left`  | Fade in + slide from left 40px    |
| `.reveal-slide-right` | Fade in + slide from right 40px   |

Add `data-delay="200"` (ms) to stagger multiple items.

## Why is it useful?

- Intersection Observer is performant — no scroll event listeners needed
- Pure CSS animations — hardware-accelerated via transform/opacity
- Progressive enhancement — content visible without JS
- Accessible — respects reduced-motion preference

## Browser Support

Intersection Observer is supported in all modern browsers (Chrome 51+, Firefox 55+, Safari 12.1+).

## Tech Stack

HTML + CSS + Vanilla JavaScript. Zero dependencies.
