# CSS Popover Card

## Description

A pure CSS popover card component that appears near a trigger element using hover and focus interactions. The card includes smooth animations, a directional arrow, and responsive styling without requiring JavaScript.

## Features

- Pure CSS implementation
- Smooth fade and slide animation
- Responsive layout
- Keyboard accessible with focus states
- Directional arrow indicator
- Lightweight and reusable

## Files

- `demo.html` — Component demonstration
- `style.css` — Styling and animations

## Usage

Wrap a trigger element and popover card inside a container:

```html
<div class="popover-container">
  <button class="popover-trigger">Hover Me</button>

  <div class="popover-card">
    <h3>Popover Title</h3>
    <p>Your content goes here.</p>
  </div>
</div>