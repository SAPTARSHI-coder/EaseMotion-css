# Animated Breadcrumb

A modern animated breadcrumb navigation component built with pure HTML and CSS. It includes hover underline animation, active page highlight, glassmorphism styling, and responsive layout.

## Features

- Pure HTML and CSS breadcrumb.
- Smooth hover underline animation.
- Active page highlight.
- Modern glassmorphism design.
- Responsive layout.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<nav class="breadcrumb-bar" aria-label="Breadcrumb">
  <ol class="breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="#">Home</a>
    </li>

    <li class="breadcrumb-item current" aria-current="page">
      Current Page
    </li>
  </ol>
</nav>