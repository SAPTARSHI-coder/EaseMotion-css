# Scroll-Triggered Animation Implementation Guide

Welcome to the **Scroll-Triggered Animation Implementation Guide**! This comprehensive tutorial explains how to trigger EaseMotion transition classes dynamically when elements enter the browser's viewport.

---

## 📋 Table of Contents
1. [Traditional Scroll Listeners vs. IntersectionObserver](#1-traditional-scroll-listeners-vs-intersectionobserver)
2. [The CSS Class-Add pattern](#2-the-css-class-add-pattern)
3. [The IntersectionObserver JavaScript API](#3-the-intersectionobserver-javascript-api)
4. [Intersection Thresholds Guide](#4-intersection-thresholds-guide)
5. [CSS-Only Scroll-Driven Alternatives](#5-css-only-scroll-driven-alternatives)
6. [Motion Accessibility (WCAG Compliance)](#6-motion-accessibility-wcag-compliance)
7. [Rendering Performance Guidelines](#7-rendering-performance-guidelines)

---

## 1. Traditional Scroll Listeners vs. IntersectionObserver

Legacy scroll-animation libraries listen to scroll events using `window.addEventListener('scroll')`. Because the scroll event fires dozens of times per second on a separate thread, running element measurement functions (like `getBoundingClientRect()`) causes **layout thrashing** (forced reflows), leading to frame rate drops.

The modern **IntersectionObserver API** solves this. It runs asynchronously, monitoring whether target elements cross viewport boundaries without placing load on the main thread.

---

## 2. The CSS Class-Add Pattern

The setup consists of two parts:
1. An initial CSS selector defining the hidden or offset state of the element prior to entrance.
2. An active transition class (e.g. `.is-visible`) added by JavaScript when the element enters the viewport.

### CSS Setup
```css
/* Base settings before viewport enter */
.scroll-trigger {
  opacity: 0;
  transform: translateY(30px);
  will-change: transform, opacity;
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Active class added by JS */
.scroll-trigger.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 3. The IntersectionObserver JavaScript API

This 10-line script observes elements with the `.scroll-trigger` class and applies `.is-visible` when they enter the viewport:

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Stop observing to run the transition once
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 });

// Start tracking targets
document.querySelectorAll('.scroll-trigger').forEach((item) => observer.observe(item));
```

---

## 4. Intersection Thresholds Guide

The `threshold` parameter determines how much of the target element must intersect with the viewport boundary before the observer triggers.

| Threshold Value | Description | Typical Use Case |
| :---: | :--- | :--- |
| `0` | Triggers as soon as a single pixel of the element enters the viewport. | Heavy background image loaders, infinite scroll items |
| `0.25` | Triggers when 25% of the element is visible. | **Recommended standard** for cards, lists, and components |
| `0.5` | Triggers when half of the element is visible. | Timeline markers and side-by-side split screens |
| `1.0` | Triggers only when the entire element is fully visible in the viewport. | Micro-interactions or highlight badges |

---

## 5. CSS-Only Scroll-Driven Alternatives

Modern browsers support CSS-only scroll-driven animations using the `animation-timeline` property.

```css
@keyframes slideUp {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}

.css-only-scroll-target {
  animation: slideUp 1s linear forwards;
  /* Binds animation progress to the element entering the viewport container */
  animation-timeline: view();
  animation-range: entry 10% cover 50%;
}
```

### Browser Support Warning
While CSS scroll timelines represent the future of web motion, legacy browsers do not support them. For production projects, always pair them with an IntersectionObserver JavaScript fallback.

---

## 6. Motion Accessibility (WCAG Compliance)

To protect users with vestibular conditions, always respect operating system preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .scroll-trigger {
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## 7. Rendering Performance Guidelines

* **Animate Transform and Opacity**: Changing layout metrics like `margin`, `top`, `left`, or `width` triggers reflows. Limit animations to GPU-composited properties.
* **Leverage will-change**: Use `will-change: transform, opacity;` to prepare the browser for transitions, but do not apply it to too many elements on the page as it can consume system memory.
