# Sticky Header Component

A high-performance, hardware-accelerated sticky navigation header designed for modern web interfaces. This component utilizes CSS backdrop filters and GPU-accelerated transforms to ensure smooth scrolling without flickering or layout jitter.

## Features
- **Sticky Positioning:** Stays fixed at the top of the viewport during scroll.
- **Glassmorphism:** Uses `backdrop-filter` for a premium, translucent effect.
- **Performance Optimized:** - Forced layer promotion via `will-change`.
    - Stability patches for legacy Safari rendering.
    - Optimized GPU acceleration stack.
- **Accessibility:** - Semantic HTML structure.
    - Keyboard-friendly navigation with visible focus states.
    - Proper ARIA landmarks for screen reader compliance.

## Technical Details
- **Stack:** Pure CSS, leveraging core variables and utilities from the `EaseMotion` library.
- **Accessibility:** Includes `role="banner"` for the header and `aria-label` for navigation menus.
- **Browser Support:** Optimized for modern browsers supporting backdrop filters; provides graceful degradation.

## Usage
Simply include the `style.css` file in your project and wrap your navigation in the `.alm-sticky-header` class as demonstrated in `demo.html`.

## Accessibility Checklist
- [x] Semantic HTML landmarks used.
- [x] Keyboard navigation focus states (`:focus-visible`) implemented.
- [x] Decorative elements handled.
- [x] ARIA labels provided for non-text interactive elements.
