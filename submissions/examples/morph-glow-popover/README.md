# Morph-Glow Popover

A lightweight, responsive CSS-only popover featuring a subtle morph and glow animation for fintech dashboard layouts.

## Features

* Pure HTML and CSS
* No JavaScript required
* Smooth morph animation
* Subtle glow effect
* Fintech dashboard styling
* Responsive design
* CSS custom properties
* Reduced-motion support

## Files

```text
morph-glow-popover/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include `style.css` in your HTML page and add the popover markup from `demo.html`.

The popover automatically applies the morph-glow animation.

## Animation

The animation slightly scales the popover while changing its glow intensity.

```css
@keyframes morph-glow {
    0% {
        transform: translateX(-50%) scale(1);
    }

    50% {
        transform: translateX(-50%) scale(1.02);
    }

    100% {
        transform: translateX(-50%) scale(1);
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
| `--success`    | `#16a34a` | Status color         |

## Responsive Design

The popover adapts to different viewport sizes.

* Desktop: centered popover
* Tablet: flexible layout
* Mobile: popover width adjusts to the viewport

## Accessibility

The component supports `prefers-reduced-motion` and disables animations for users who prefer reduced motion.

## Browser Support

Uses standard HTML5 and CSS features supported by modern browsers.

No JavaScript or external frameworks are required.

## Issue

Created for:

#59248 — Add CSS Morph-Glow Popover for Fintech Dashboard Layouts
