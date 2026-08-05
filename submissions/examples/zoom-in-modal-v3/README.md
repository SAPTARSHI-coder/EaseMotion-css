# Zoom-In Modal

A lightweight, responsive CSS-only modal with a smooth zoom-in entrance animation for fintech dashboard layouts.

## Features

* Pure HTML and CSS
* No JavaScript required
* Smooth zoom-in animation
* Fade-in background overlay
* Responsive design
* CSS custom properties
* Reduced-motion support

## Files

```text
zoom-in-modal/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include `style.css` in your HTML page and add the modal markup.

The modal uses CSS keyframes to create the zoom-in entrance effect.

## Animation

The modal starts smaller and transparent, then scales to its normal size.

```css
@keyframes zoom-in {
    from {
        opacity: 0;
        transform: scale(0.5);
    }

    to {
        opacity: 1;
        transform: scale(1);
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

The modal adapts to smaller screens.

* Desktop: centered modal
* Tablet: responsive modal width
* Mobile: modal uses available screen width

## Accessibility

The component supports `prefers-reduced-motion` and disables animations for users who prefer reduced motion.

## Browser Support

Uses standard HTML5 and CSS features supported by modern browsers.

No JavaScript or external frameworks are required.

## Issue

Created for:

#59254 — Add CSS Zoom-In Modal for Fintech Dashboard Layouts
