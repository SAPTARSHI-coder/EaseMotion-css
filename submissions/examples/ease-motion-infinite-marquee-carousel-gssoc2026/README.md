# Infinite Marquee Banner Carousel - EaseMotion CSS

A continuous looping horizontal logo and card marquee component featuring CSS mask gradient fade edges and hover pause interactions.

## 1. What does this do?
This component translates duplicate item tracks continuously using CSS `@keyframes`, producing an infinite ticker effect for technology logos or testimonials.

## 2. How is it used?
Link `style.css` and supply your marquee items:

```html
<link rel="stylesheet" href="style.css">

<div class="marquee-wrapper">
  <div class="marquee-track">
    <div class="marquee-item">Logo 1</div>
    <!-- Duplicate items for seamless loop -->
  </div>
</div>
```

## 3. Why is it useful?
- **Seamless Looping:** `translateX(-50%)` math guarantees a glitch-free infinite loop cycle.
- **Interactive Pause:** Features `animation-play-state: paused` on hover for readable item inspection.
- **Edge Gradient Masks:** Utilizes `-webkit-mask-image` for progressive opacity edge fades.
