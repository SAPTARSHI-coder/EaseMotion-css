# Ripple Wave Testimonial Card

## Overview
This submission adds a self-contained testimonial card that uses a glassmorphism treatment, a circular avatar, and a CSS-only ripple wave animation. The design is responsive, semantic, and tuned for modern landing pages that want motion without JavaScript.

## Installation
1. Open the folder in your browser directly or copy the files into your project.
2. Ensure the HTML file is paired with the local stylesheet in the same directory.
3. No build step or package install is required.

## Usage
Open the demo in a browser and review the card. The markup uses semantic HTML elements and utility-inspired classes such as `.ease-card`, `.ease-card-glass`, `.ease-card-hover`, `.ease-btn`, and `.ease-btn-outline` so the structure remains easy to adapt.

```html
<article class="testimonial-card ease-card ease-card-glass ease-card-hover">
  <div class="ripple-orb" aria-hidden="true"></div>
  <div class="card-content">
    <header class="card-header">
      <div class="avatar" aria-hidden="true">MC</div>
      <div class="person-details">
        <h2 class="customer-name">Maya Chen</h2>
        <p class="customer-role">Product Design Lead</p>
      </div>
    </header>
  </div>
</article>
```

## Accessibility
The demo uses semantic landmarks, a clear heading hierarchy, descriptive labels for the rating, and strong color contrast. Motion is reduced automatically when the browser prefers reduced motion.

## Browser compatibility
The layout works in evergreen browsers that support backdrop blur and CSS animations, including Chromium, Firefox, and Safari. Browsers without backdrop-filter support will still display a readable translucent card with a graceful fallback.

## Why it fits EaseMotion CSS
This demo reflects the EaseMotion philosophy by pairing expressive motion with accessible, reusable structure. The component uses utility-inspired class names, CSS variables, and a lightweight animation approach that can be adapted into the wider library.
