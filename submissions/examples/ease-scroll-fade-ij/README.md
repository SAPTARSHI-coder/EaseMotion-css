# Scroll Fade

Closes #13659

A scroll-driven fade + slide-up animation for cards using `animation-timeline: view()` with `animation-range` control. Cards fade in with staggered delays as they enter the viewport. Includes an IntersectionObserver JS fallback for Firefox and other browsers without `animation-timeline` support.

## Usage

```html
<div class="fade-card">
  <h2>Title</h2>
  <p>Content fades in on scroll.</p>
</div>
```

## Features

- Pure CSS scroll-driven animation via `animation-timeline: view()`
- `animation-range: entry 0% cover 30%` for precise timing
- Staggered delays via `nth-child`
- IntersectionObserver fallback (`.js-fallback` + `.visible`)
- Respects `prefers-reduced-motion`
