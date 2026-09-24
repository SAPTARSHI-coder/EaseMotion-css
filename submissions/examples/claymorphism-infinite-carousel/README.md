# Claymorphism Responsive Infinite Carousel

A pure CSS implementation of an infinite sliding carousel styled with tactile Claymorphism design elements.

## Features
- **Zero JavaScript Dependencies**: Infinite seamless scrolling powered entirely by CSS `@keyframes`.
- **Claymorphism Aesthetic**: Soft inner and outer multi-layered shadows designed for a floating 3D look.
- **EaseMotion Integration**: Consumes standardized CSS motion variables and custom timing curves.
- **Responsive Layout**: Adjusts card sizes and gap spacing fluidly across Mobile, Tablet, and Desktop screen widths.
- **Accessibility Ready**: Automatically falls back to a scrollable snap-grid when `prefers-reduced-motion: reduce` is detected.

## Usage
1. Link `style.css` in your HTML file.
2. Structure your markup using `.carousel-wrapper` and `.carousel-track`.
3. Duplicate card elements inside `.carousel-track` with `aria-hidden="true"` to ensure a seamless infinite animation loop without layout jumps.
