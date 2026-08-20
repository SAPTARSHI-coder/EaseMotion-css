# Floating Label Field (#86861)

A dependency-free, pure CSS floating label text field component featuring smooth transitions on focus, active validation borders, and accessible outline states.

## Features
- **Pure CSS Float:** Uses the CSS `:focus` and `:not(:placeholder-shown)` pseudoclasses to animate label displacement.
- **Hardware-Accelerated:** Smooth transition scaling using `transform: translate3d()` and `scale()`.
- **Validation Accents:** Built-in focus glow states and helper text indicators.
- **Accessibility:** Maintains full keyboard navigation and `@media (prefers-reduced-motion: reduce)` support.

## Usage
Include `style.css` in your project and structure your input elements inside `.floating-field-group`.