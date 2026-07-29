# Expand Toast Example (Standard)

## Description
A standard HTML/CSS/JS toast notification that demonstrates an "Expand" Exit Animation. When the toast is dismissed (e.g., by clicking the close button), it rapidly scales up slightly while fading out, giving the impression of it dissolving outwards.

## Files
- `demo.html`: Contains the toast markup and a minimal JavaScript snippet to toggle the `is-exiting-ag` class.
- `style.css`: Contains the toast styles and the `@keyframes toast-expand-out-ag` exit animation.

## Accessibility
- Uses `role="alert"` so assistive technology announces it when visible.
- Close button has an explicit `aria-label="Close Toast"`.
- **Reduced Motion**: Disables the scaling transform entirely in the exit animation. Replaces it with a basic opacity fade (`toast-fade-out-ag`) to ensure no disorienting motion occurs for users preferring reduced motion.
