# floating-contact-card

A responsive floating contact card with a smooth CSS keyframe floating animation, profile avatar with online status indicator, name/designation, social icons, and a gradient CTA button.

## Features

- Continuous gentle floating animation using pure CSS `@keyframes`
- Avatar with online-status dot and subtle rotate-scale on hover
- Social icon row with lift-on-hover effect
- Gradient CTA button with animated hover sweep
- Respects `prefers-reduced-motion` (animation disabled for users who prefer it)
- Fully responsive for desktop and mobile

## Usage

1. Link `style.css` in your HTML `<head>`.
2. Copy the `.ease-contact-card` markup structure from `demo.html`.

```html
<div class="ease-contact-card">
  <div class="ease-contact-card__avatar-wrap">
    <div class="ease-contact-card__avatar">JD</div>
    <span class="ease-contact-card__status"></span>
  </div>
  <h3 class="ease-contact-card__name">Name</h3>
  <p class="ease-contact-card__role">Role / Title</p>
  <div class="ease-contact-card__socials">
    <a href="#" class="ease-contact-card__social">𝕏</a>
  </div>
  <button class="ease-contact-card__cta">Contact Me</button>
</div>