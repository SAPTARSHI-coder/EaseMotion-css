# CSS Tornado Spinner

A pure CSS tornado/spiral loading animation created for the EaseMotion CSS library.

## Features

- Pure CSS animation
- No JavaScript required
- Responsive design
- Lightweight implementation
- Accessible loading status
- Supports `prefers-reduced-motion`
- Works on desktop and mobile screens

## Files

- `demo.html` - Demonstration page
- `style.css` - Spinner styles and animations

## How It Works

The spinner uses multiple circular elements with different sizes, rotation
directions, animation delays, and opacity values.

CSS `@keyframes` are used to create the rotating tornado/spiral effect.

## Accessibility

The spinner uses:

- `role="status"` to communicate the loading state
- `aria-label="Loading"` to provide an accessible description
- `prefers-reduced-motion` to reduce animation for users who request less motion

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">