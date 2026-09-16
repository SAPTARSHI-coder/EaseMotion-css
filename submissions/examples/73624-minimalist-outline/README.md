# Minimalist Outline Slider

A smooth and responsive CSS-only slider featuring a clean Minimalist Outline design.

## Features

- Pure HTML and Vanilla CSS
- No JavaScript
- No external dependencies
- Automatic CSS slider animation
- Minimal outline-based visual design
- Smooth transitions
- Responsive layout
- Dark mode support through `prefers-color-scheme`
- Reduced-motion accessibility support
- Hardware-friendly CSS animations

## Structure

- `demo.html` — Slider markup
- `style.css` — Complete styling and animations

## How It Works

The slider uses a horizontal flex track containing three slides.

CSS `@keyframes` moves the track between the three slide positions, creating the automatic carousel effect without JavaScript.

The component also uses:

- CSS transforms
- CSS transitions
- `backdrop-filter`
- Responsive media queries
- `prefers-reduced-motion`
- `prefers-color-scheme`

## Accessibility

The slider includes semantic `section` and `article` elements, descriptive ARIA labels for the slider and controls, and a reduced-motion fallback for users who prefer less animation.

## Usage

Open `demo.html` directly in a modern browser.

No build step or installation is required.