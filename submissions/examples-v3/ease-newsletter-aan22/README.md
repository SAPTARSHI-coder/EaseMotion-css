# Ease Animated Newsletter Signup Section

## What does this do?
A visually striking newsletter signup section with an animated gradient background, floating glowing orbs, a focus-animated email input, and a submit button with loading and success states. On successful submission a confetti burst and success message animate in to celebrate the signup.

## How is it used?
```html
<section class="ease-newsletter">
  <div class="ease-newsletter__orb ease-newsletter__orb--1"></div>
  <div class="ease-newsletter__orb ease-newsletter__orb--2"></div>
  <div class="ease-newsletter__content">
    <div class="ease-newsletter__icon">📬</div>
    <h2 class="ease-newsletter__title">Stay in the Loop</h2>
    <p class="ease-newsletter__subtitle">Get the latest updates delivered to your inbox.</p>
    <div class="ease-newsletter__form" id="newsletterForm">
      <input type="email" class="ease-newsletter__input" id="newsletterEmail" />
      <button class="ease-newsletter__btn" id="newsletterBtn">Subscribe ↗</button>
    </div>
    <div class="ease-newsletter__success hidden" id="newsletterSuccess">
      <p>You're subscribed!</p>
    </div>
  </div>
</section>
```
A small amount of vanilla JS (included in `demo.html`) handles the loading state, success-state swap, and a lightweight confetti burst using the Web Animations API — no external libraries.

## Why is it useful?
Newsletter signup sections are on virtually every content website. This fits EaseMotion's animation-first philosophy — animated success states and input focus effects make the signup process feel rewarding and encourage conversions.
