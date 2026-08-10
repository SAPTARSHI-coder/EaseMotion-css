# Blur-Entrance Modal

A lightweight, responsive CSS-only modal with a smooth blur and fade entrance animation for fintech dashboard interfaces.

## Features

* Pure HTML and CSS
* No JavaScript required
* Blur entrance animation
* Fade-in overlay
* Smooth scale and slide effect
* Responsive design
* CSS custom properties
* Reduced-motion support

## Files

```text
blur-entrance-modal/
├── demo.html
├── style.css
└── README.md
```

## Usage

Add the modal HTML to your page and include `style.css`.

The modal automatically displays with the blur-entrance animation when the page loads.

## Animation

The modal combines:

* Opacity
* Blur
* Scale
* Vertical movement

Example:

```css
@keyframes blur-entrance {
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
        filter: blur(8px);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
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

The modal adapts to smaller screens and uses a single-column details layout on mobile devices.

## Accessibility

The component includes `prefers-reduced-motion` support so animations are disabled for users who prefer reduced motion.

## Browser Support

Uses standard HTML5 and CSS features supported by modern browsers.

No JavaScript or external frameworks are required.

## Issue

Created for:

#59257 — Add CSS Blur-Entrance Modal for Fintech Dashboard Layouts
