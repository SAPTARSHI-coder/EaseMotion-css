# Slide-Up Modal

A lightweight, responsive CSS-only modal with a smooth slide-up entrance animation for fintech dashboard layouts.

## Features

* Pure HTML and CSS
* No JavaScript required
* Smooth slide-up animation
* Fade-in background overlay
* Responsive design
* CSS custom properties
* Reduced-motion support

## Files

```text
slide-up-modal/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include `style.css` in your HTML page and add the modal markup from `demo.html`.

The modal automatically uses the slide-up animation when the page loads.

## Animation

The modal starts 80px below its final position and smoothly moves upward.

```css
@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(80px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## CSS Custom Properties

| Property       | Default   | Description       |
| -------------- | --------- | ----------------- |
| `--primary`    | `#635bff` | Main accent color |
| `--background` | `#f5f7fb` | Page background   |
| `--white`      | `#ffffff` | Modal background  |
| `--text`       | `#1f2937` | Main text color   |
| `--muted`      | `#6b7280` | Secondary text    |
| `--border`     | `#e5e7eb` | Border color      |
| `--success`    | `#16a34a` | Success color     |

## Responsive Design

The modal adapts to different screen sizes.

* Desktop: centered modal
* Tablet: responsive width
* Mobile: full available width with smaller padding

## Accessibility

The component supports `prefers-reduced-motion` and disables animations for users who prefer reduced motion.

## Browser Support

Uses standard HTML5 and CSS features supported by modern browsers.

No JavaScript or external frameworks are required.

## Issue

Created for:

#59253 — Add CSS Slide-Up Modal for Fintech Dashboard Layouts
