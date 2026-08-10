# animated-toast-notification — CSS Animated Toast Demo

## Feature overview

This demo presents a reusable toast notification utility built with pure HTML and CSS. It includes:

- slide-in toast animation
- fade-in and fade-out transitions
- stacked toast preview layout
- success, info, warning, and error variants
- responsive design for mobile and desktop
- lightweight CSS-only implementation with smooth interactions

## Usage instructions

Open `demo.html` directly in your browser. The page loads `style.css` from the same folder and does not require any JavaScript.

The example shows:

- four toast variants rendered as stacked cards
- modern motion timing using CSS keyframes
- hover interactions for tactile feedback
- responsive grid behavior for smaller screens

## Folder structure

```
submissions/examples/animated-toast-notification/
├── demo.html
├── README.md
└── style.css
```

## Animation explanation

The demo uses two keyframe animations:

- `toast-in` slides each toast from the right while fading it into view
- `toast-fade` holds visibility before fading the toast out and sliding it slightly off-screen

This combination creates a natural entrance and exit effect, while the delayed animation offsets produce a stacked, sequential display.

## Why it fits EaseMotion CSS philosophy

This demo stays true to EaseMotion CSS by providing motion-rich UI patterns using only CSS. The toast utility focuses on animation, responsive layout, and lightweight styling, making it easy to reuse in broader design systems without introducing dependencies.
