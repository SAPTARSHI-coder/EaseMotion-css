# Animated Testimonial Slider

A modern testimonial slider component built with pure HTML and CSS. It includes smooth slide transitions, animated navigation dots, glassmorphism-style cards, and reduced-motion support.

## Features

- Pure CSS slider using radio buttons.
- Smooth horizontal slide animation.
- Animated active dot indicator.
- Modern glassmorphism-style testimonial cards.
- Responsive layout.
- Keyboard focus support.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<div class="testimonial-slider">
  <input type="radio" name="testimonial-slide" id="slide-1" checked />
  <input type="radio" name="testimonial-slide" id="slide-2" />
  <input type="radio" name="testimonial-slide" id="slide-3" />

  <div class="slides">
    <article class="slide">
      <!-- Testimonial content -->
    </article>
  </div>

  <div class="slider-dots">
    <label for="slide-1"></label>
    <label for="slide-2"></label>
    <label for="slide-3"></label>
  </div>
</div>