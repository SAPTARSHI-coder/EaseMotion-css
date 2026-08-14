# Glitch-Flicker Drawer

A lightweight CSS-only drawer with a subtle glitch-flicker animation for modern fintech dashboard layouts.

## Features

* Pure HTML and CSS
* No JavaScript required
* Slide-in drawer animation
* Glitch-flicker hover effect
* Responsive design
* CSS custom properties
* Reduced-motion support
* Lightweight implementation

## Files

```text
glitch-flicker-drawer/
├── demo.html
├── style.css
└── README.md
```

## Usage

Open `demo.html` in a browser.

Hover over the drawer to see the glitch-flicker effect.

## CSS Custom Properties

| Property       | Default   | Description       |
| -------------- | --------- | ----------------- |
| `--primary`    | `#635bff` | Main accent color |
| `--background` | `#f5f7fb` | Page background   |
| `--white`      | `#ffffff` | Drawer background |
| `--text`       | `#1f2937` | Main text         |
| `--muted`      | `#6b7280` | Secondary text    |
| `--border`     | `#e5e7eb` | Border color      |
| `--success`    | `#16a34a` | Status color      |

## Animation

The drawer uses two CSS animations.

### Drawer Slide

The drawer initially slides in from the right.

### Glitch Flicker

When the drawer is hovered, its opacity briefly changes to create a subtle flicker effect.

No JavaScript is required.

## Responsive Design

* Desktop: fixed-width drawer
* Tablet: responsive drawer
* Mobile: drawer uses the available screen width

## Accessibility

Reduced-motion preferences are supported:

```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation: none !important;
        transition: none !important;
    }
}
```

## Browser Support

Uses standard HTML5 and CSS features supported by modern browsers.

## Issue

Created for:

#59276 — Add CSS Glitch-Flicker Drawer for Fintech Dashboard Layouts
