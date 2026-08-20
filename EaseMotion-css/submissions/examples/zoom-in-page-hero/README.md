# CSS Zoom-In Page Hero

A full-screen, responsive hero component featuring a slow background zoom-in effect driven purely by CSS keyframes and `transform: scale()`.

## Features

- **Pure CSS Motion:** Smooth zooming background using standard `@keyframes` without JavaScript overhead.
- **Accessibility & Motion Preferences:** Built-in `@media (prefers-reduced-motion: reduce)` rule that disables zooming for users sensitive to motion.
- **Overlay & Readability:** Uses a semi-transparent linear gradient overlay to ensure high-contrast text legibility.
- **Keyboard Navigation:** Includes explicit `:focus-visible` styling for interactive buttons.

## File Structure

```text
submissions/examples/zoom-in-page-hero/
├── demo.html
├── style.css
└── README.md
