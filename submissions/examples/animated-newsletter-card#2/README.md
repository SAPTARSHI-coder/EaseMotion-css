# Animated Newsletter Card

A modern animated newsletter subscription card built with pure HTML and CSS. It includes a glowing gradient border, animated button hover effect, and a pure CSS success state demo.

## Features

- Pure HTML and CSS implementation.
- Animated glowing gradient border.
- Smooth button hover shine effect.
- Pure CSS success state demo using checkbox hack.
- Responsive layout.
- Keyboard focus support.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<input type="checkbox" id="newsletter-state" class="newsletter-state" />

<section class="newsletter-card">
  <div class="newsletter-view form-view">
    <!-- Newsletter form content -->
  </div>

  <div class="newsletter-view success-view">
    <!-- Success message -->
  </div>
</section>