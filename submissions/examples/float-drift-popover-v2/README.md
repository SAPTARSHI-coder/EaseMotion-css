# Float-Drift Popover

A lightweight, responsive CSS-only popover with a smooth floating drift animation for fintech dashboard layouts.

## Features

* Pure HTML and CSS
* No JavaScript required
* Smooth floating animation
* Fintech dashboard style
* Responsive design
* CSS custom properties
* Reduced-motion support
* Lightweight implementation

## Files

```text
float-drift-popover/
├── demo.html
├── style.css
└── README.md
```

## Usage

Add the popover markup to your HTML page and include `style.css`.

The popover uses CSS keyframes to create a continuous floating effect.

## Animation

The popover gently moves upward and returns to its original position.

```css
@keyframes float-drift {
    0% {
        transform: translateX(-50%) translateY(0);
    }

    50% {
        transform: translateX(-50%) translateY(-8px);
    }

    100% {
        transform: translateX(-50%) translateY(0);
    }
}
```

## CSS Custom Properties

| Property       | Default   | Description          |
| -------------- | --------- | -------------------- |
| `--primary`    | `#635bff` | Main accent color    |
| `--background` | `#f5f7fb` | Page background      |
| `--white`      | `#ffffff` | Popover background   |
| `--text`       | `#1f2937` | Main text color      |
| `--muted`      | `#6b7280` | Secondary text color |
| `--border`     | `#e5e7eb` | Border color         |
| `--success`    | `#16a34a` | Balance/status color |

## Responsive Design

The popover adapts to different screen sizes.

* Desktop: fixed-width centered popover
* Tablet: responsive layout
* Mobile: popover width adjusts to the viewport

## Accessibility

The component supports `prefers-reduced-motion` and disables animations for users who prefer reduced motion.

## Browser Support

Uses standard HTML5 and CSS features supported by modern browsers.

No JavaScript or external libraries are required.

## Issue

Created for:

#59249 — Add CSS Float-Drift Popover for Fintech Dashboard Layouts
