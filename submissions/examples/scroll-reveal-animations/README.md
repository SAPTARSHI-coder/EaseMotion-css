# Scroll-Triggered Reveal Animations

**EaseMotion CSS · Feature #1623 · GSSoC '26**

Pure CSS scroll reveal animations using the modern `animation-timeline: view()` property — no JavaScript, no dependencies.

---

## Overview

This feature adds six scroll-triggered reveal animation classes to EaseMotion CSS. Elements animate into view as they enter the viewport, powered entirely by CSS Scroll-Driven Animations.

---

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="em-reveal-up">Slides up as you scroll</div>
<div class="em-reveal-left">Slides in from the left</div>
<div class="em-reveal-zoom">Zooms in on scroll</div>
```

---

## Available Classes

| Class              | Effect                      |
| ------------------ | --------------------------- |
| `.em-reveal-up`    | Fades in & slides upward    |
| `.em-reveal-down`  | Fades in & slides downward  |
| `.em-reveal-left`  | Slides in from the left     |
| `.em-reveal-right` | Slides in from the right    |
| `.em-reveal-zoom`  | Zooms in from smaller scale |
| `.em-reveal-fade`  | Simple opacity fade         |

---

## Modifiers

### Speed

```html
<div class="em-reveal-up em-reveal--fast">Fast reveal</div>
<div class="em-reveal-up em-reveal--slow">Slow, cinematic reveal</div>
```

### Stagger (CSS-only)

```html
<div class="em-reveal-up">First</div>
<div class="em-reveal-up em-reveal--delay-1">Second</div>
<div class="em-reveal-up em-reveal--delay-2">Third</div>
<div class="em-reveal-up em-reveal--delay-3">Fourth</div>
<div class="em-reveal-up em-reveal--delay-4">Fifth</div>
```

---

## How It Works

Uses the CSS `animation-timeline: view()` property with `animation-range` to trigger animations as elements scroll into the viewport:

```css
.em-reveal-up {
  animation-name: em-fade-up;
  animation-timeline: view();
  animation-range: entry 0% entry 40%;
  animation-fill-mode: both;
}
```

The `view()` timeline links animation progress to the element's position relative to the scrollport. `entry 0%` = element just entered from the bottom; `entry 40%` = animation completes when element is 40% into view.

---

## Browser Support

| Feature                      | Support                                                      |
| ---------------------------- | ------------------------------------------------------------ |
| `animation-timeline: view()` | Chrome 115+, Edge 115+, Firefox 110+, Safari 18+             |
| Fallback (older browsers)    | Simple fade via `@supports not (animation-timeline: view())` |

---

## Accessibility

All animations are automatically disabled for users who have enabled **prefers-reduced-motion** in their OS settings:

```css
@media (prefers-reduced-motion: reduce) {
  [class*="em-reveal-"] {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## Files

```
submissions/examples/scroll-reveal-animations/
├── style.css     ← Animation classes (library file)
├── demo.html     ← Live demo of all variants
└── README.md     ← This file
```

---

## Related

- Closes #1623
- Part of EaseMotion CSS — [SAPTARSHI-coder/EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css)
