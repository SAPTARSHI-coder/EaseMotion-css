# Glow Slider Mixin

A reusable SCSS mixin that adds a smooth glowing slider animation effect for success-state UI components.

## Features

- Smooth horizontal glow animation
- Lightweight SCSS implementation
- Configurable animation duration
- Reusable across different UI elements
- Accessibility-friendly motion handling

## Usage

Import the mixin:

```scss
@use "glow-slider-mixin";

.success-element {
  @include ease-glow-slider-mixin-mixin-sp(0.5s);
}
