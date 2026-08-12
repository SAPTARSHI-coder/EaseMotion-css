# CSS Rotating Testimonial v2

A CSS-only rotating testimonial component where quotes automatically
fade and rotate between customer stories.

## Features

- Pure HTML and CSS
- Automatic testimonial rotation
- Three testimonial states
- Smooth horizontal transitions
- Animated pagination indicators
- Pauses on hover
- Responsive design
- No JavaScript required
- Reduced-motion support
- Forced-colors support

## Files

- `demo.html` — Testimonial demonstration
- `style.css` — Component styling and animations
- `README.md` — Documentation

## Usage

Place testimonial items inside the `.testimonial-track` element:

```html
<div class="testimonial-track">
  <article class="testimonial-item">
    <div class="avatar">AS</div>

    <blockquote>
      <p>
        Your testimonial content goes here.
      </p>

      <footer>
        <strong>Person Name</strong>
        <span>Job Title</span>
      </footer>
    </blockquote>
  </article>
</div>