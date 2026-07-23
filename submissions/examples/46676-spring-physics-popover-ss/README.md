# Spring Physics Popover — Creative Portfolio

A pure CSS popover component with spring/overshoot bounce animation for creative portfolio layouts in EaseMotion CSS.

## What does this do?

Displays project cards in a portfolio grid. Clicking a card reveals a popover with project details, animated using a spring-physics overshoot cubic-bezier that overshoots and settles — no JavaScript required.

## How is it used?

```html
<div class="sp-card" tabindex="0">
  <input type="checkbox" id="sp-toggle-1" class="sp-toggle" aria-hidden="true">
  <label for="sp-toggle-1" class="sp-card__inner">
    <h3 class="sp-card__title">Project Name</h3>
    <p class="sp-card__subtitle">Category / Tag</p>
    <span class="sp-card__tag">Featured</span>
  </label>
  <div class="sp-popover" role="tooltip">
    <p class="sp-popover__title">Project Name</p>
    <p class="sp-popover__text">Description of the project.</p>
    <a href="#" class="sp-popover__link">View Project &rarr;</a>
  </div>
</div>
```

## Why is it useful?

Portfolio sites need quick-glance project details without navigating away. The spring-physics overshoot (`cubic-bezier(0.34, 1.56, 0.64, 1)`) makes the popover feel alive and tactile — it overshoots its final position then settles, mimicking real spring behavior. This creates a delightful, premium micro-interaction using only CSS transitions.

## Features

- **Pure CSS** — checkbox toggle for open/close, no JavaScript
- **Spring physics animation** — overshoot cubic-bezier creates bounce-in and settle-out
- **Portfolio-focused** — card grid with popover details for creative work
- **Responsive** — single column on mobile, auto-fit grid on desktop
- **Accessible** — `role="tooltip"`, `aria-labelledby`, focus-visible styles, `prefers-reduced-motion` support
- **Uses EaseMotion CSS variables** — colors, spacing, easing curves, font stack

## Files

- `demo.html` — self-contained demo page
- `style.css` — component styles and spring animations
- `README.md` — this file
