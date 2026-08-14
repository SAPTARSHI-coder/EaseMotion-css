# CSS-Only Staggered Text Reveal Animation

Introduces a typography animation utility where words or lines of text smoothly slide up and fade in sequentially (a staggered reveal) on page load. 

## Why is this useful?
Staggered text reveals are the hallmark of premium, modern landing pages (think Apple or Stripe). Developers usually load heavy animation libraries like GSAP to achieve this. By utilizing CSS `@keyframes` and `nth-child` animation delays, we can provide a lightweight, native alternative for hero sections.

## How to Use
1. Add the `.ease-text-reveal` class to your container.
2. Wrap each word or character in `<span>` tags.

```html
<h1 class="ease-text-reveal">
    <span>Premium</span>
    <span>animations</span>
    <span>for</span>
    <span>modern</span>
    <span>landing</span>
    <span>pages.</span>
</h1>
```

## Features
- CSS Only: No JavaScript required.
- Accessible: Respects `prefers-reduced-motion` to immediately display text without animation for users with motion sensitivity.
- Staggered: Up to 20 elements get a smooth sequential reveal delay via `:nth-child()`.
