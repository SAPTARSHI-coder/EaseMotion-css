# Scroll Progress Bar (`ease-scroll-progress`)

A high-performance, fixed top reading progress bar driven by hardware-accelerated CSS `transform: scaleX()` and a CSS custom variable updated on scroll.

## Features
- **GPU Accelerated:** Animates `scaleX()` instead of `width` to avoid reflows.
- **Clean Architecture:** Minimal JavaScript passes scroll percentage to CSS, leaving layout and animation rendering entirely to standard CSS.
- **Fully Customizable:** Easily customize height, gradient, and position via CSS variables.

## Usage

1. Add the progress bar markup to your page:
   ```html
   <div class="scroll-progress" style="--scroll-percent: 0;"></div>