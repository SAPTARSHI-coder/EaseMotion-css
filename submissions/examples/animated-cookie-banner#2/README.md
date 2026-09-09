# Animated Cookie Banner

A modern animated cookie consent banner built with pure HTML and CSS. It slides into view, includes smooth hover buttons, and can be dismissed without JavaScript.

## Features

- Pure HTML and CSS implementation.
- Slide-up entrance animation.
- Accept and decline buttons.
- Pure CSS dismiss behavior using checkbox hack.
- Responsive layout.
- Keyboard focus support.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<input type="checkbox" id="cookie-consent" class="cookie-state" />

<section class="cookie-banner">
  <!-- Cookie banner content -->
</section>