# Browser Compatibility Matrix Guide

Welcome to the **Browser Compatibility Matrix Guide**! This comprehensive document outlines browser support levels for EaseMotion CSS animation classes, details which properties leverage cutting-edge specifications (Houdini `@property`, scroll timelines), and provides fallback and polyfill recommendations.

---

## 📋 Table of Contents

1. [Compatibility Matrix Table](#1-compatibility-matrix-table)
2. [Houdini CSS `@property` Variables](#2-houdini-css-property-variables)
3. [CSS Scroll-Driven Animations](#3-css-scroll-driven-animations)
4. [Graceful Degradation & Feature Queries (`@supports`)](#4-graceful-degradation--feature-queries-supports)
5. [Recommended Polyfills](#5-recommended-polyfills)

---

## 1. Compatibility Matrix Table

This table charts support status across the four major browsers (Chrome, Firefox, Safari, Edge) for various animation and transition techniques.

| Animation Class Category                           |   Chrome    |    Firefox     |     Safari     |    Edge     | Fallback Needed?               |
| :------------------------------------------------- | :---------: | :------------: | :------------: | :---------: | :----------------------------- |
| **Standard Transitions** (`transform`, `opacity`)  | **🟢 Full** |  **🟢 Full**   |  **🟢 Full**   | **🟢 Full** | No fallbacks required          |
| **Spring Curves** (Custom `cubic-bezier`)          | **🟢 Full** |  **🟢 Full**   |  **🟢 Full**   | **🟢 Full** | No fallbacks required          |
| **Houdini Variables** (Animatable `@property`)     | **🟢 Full** |  **🟢 Full**   |  **🟢 Full**   | **🟢 Full** | Yes (Houdini polyfill)         |
| **Scroll-Driven Timelines** (`view()`, `scroll()`) | **🟢 Full** | **⚠️ Partial** | **⚠️ Partial** | **🟢 Full** | Yes (Scroll-timeline polyfill) |

- **🟢 Full Support**: Works natively out-of-the-box.
- **⚠️ Partial Support**: Requires enabling experimental flags, or has limited property bindings.

---

## 2. Houdini CSS `@property` Variables

By default, CSS custom properties are treated as strings. Because the browser does not know if a variable represents a color, a number, or an angle, it cannot animate transition overrides between states.

Houdini `@property` solves this by registering custom types (like `<angle>` or `<color>`):

```css
@property --compat-degree {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

.modern-angle-spin {
  animation: angleSpin 4s linear infinite;
  background: conic-gradient(from var(--compat-degree), #8b5cf6, #3b82f6);
}
```

### Browser Support Status

Houdini `@property` variables are supported across Chrome, Edge, Firefox, and Safari. For older legacy browsers, load the CSS Houdini polyfill.

---

## 3. CSS Scroll-Driven Animations

Scroll-Driven Animations bind animation progress directly to viewport scrolling offsets rather than standard clock durations, using the `animation-timeline` property.

```css
.scroll-indicator {
  animation: fadeOut 1s linear forwards;
  animation-timeline: view();
  animation-range: exit 0% cover 50%;
}
```

### Browser Support Status

- **Chromium (Chrome, Edge, Opera)**: Supported since Chrome 115.
- **Firefox**: In development. Can be emulated by enabling the `layout.css.scroll-driven-animations.enabled` preference flag.
- **Safari**: In development. Can be emulated by enabling the corresponding flag in macOS settings.

---

## 4. Graceful Degradation & Feature Queries (`@supports`)

To ensure a functional interface in all browsers, use CSS Feature Queries (`@supports`) to check support before applying modern rules.

```css
/* 1. Default fallback transition */
.scroll-card {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
.scroll-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 2. Enhanced scroll timeline applies only if browser supports it */
@supports (animation-timeline: view()) {
  .scroll-card {
    animation: revealCard 1s linear forwards;
    animation-timeline: view();
  }
}
```

---

## 5. Recommended Polyfills

To maintain consistency across all viewports, load these polyfill packages inside your project index templates:

### 1. Scroll-Timeline Polyfill

For browsers lacking native `animation-timeline` support:

```html
<script src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"></script>
```

### 2. Houdini properties Polyfill

For older browsers lacking Houdini `@property` registration support, use the Houdini variables properties polyfill script.
