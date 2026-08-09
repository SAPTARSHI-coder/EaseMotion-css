# Slide-Up Navbar

A lightweight, responsive CSS-only Slide-Up Navbar designed for modern fintech dashboard layouts.

## Features

* Pure HTML and CSS
* No JavaScript dependency
* Smooth slide-up navigation interaction
* Animated active navigation indicator
* Keyboard accessible focus states
* Responsive desktop, tablet, and mobile layouts
* CSS custom properties for easy customization
* `prefers-reduced-motion` support
* Lightweight and performant

## Files

```text
slide-up-navbar/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Keep both files in the same directory or update the stylesheet path.
3. Open `demo.html` in a browser.
4. Hover or keyboard-focus the navigation items to see the slide-up effect.

## HTML Structure

```html
<nav class="navbar" aria-label="Primary navigation">
    <a href="#" class="brand">
        <span class="brand-mark">F</span>
        Finova
    </a>

    <ul class="nav-links">
        <li class="nav-item">
            <a href="#" class="nav-link active">
                <span class="nav-icon">⌂</span>
                <span class="nav-text">Dashboard</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="#" class="nav-link">
                <span class="nav-icon">↗</span>
                <span class="nav-text">Transactions</span>
            </a>
        </li>
    </ul>
</nav>
```

## CSS Custom Properties

| Property              | Default      | Description                 |
| --------------------- | ------------ | --------------------------- |
| `--su-primary`        | `#635bff`    | Primary accent color        |
| `--su-primary-dark`   | `#5048d8`    | Dark accent color           |
| `--su-background`     | `#f5f7fb`    | Page background             |
| `--su-surface`        | `#ffffff`    | Surface color               |
| `--su-text`           | `#182033`    | Main text color             |
| `--su-muted`          | `#70798a`    | Secondary text color        |
| `--su-border`         | `#e5e8ef`    | Border color                |
| `--su-success`        | `#159957`    | Success/status color        |
| `--su-navbar-radius`  | `18px`       | Navbar corner radius        |
| `--su-link-radius`    | `12px`       | Navigation link radius      |
| `--su-transition`     | `220ms ease` | General transition timing   |
| `--su-slide-duration` | `420ms`      | Slide-up animation duration |

## Customization

Variables can be overridden to match an application's design system.

```css
:root {
    --su-primary: #2563eb;
    --su-primary-dark: #1d4ed8;
    --su-navbar-radius: 14px;
    --su-slide-duration: 500ms;
}
```

## Animation

The component creates the slide-up effect using CSS transitions.

On hover or keyboard focus:

* The navigation item moves upward.
* The icon moves upward slightly.
* The navigation text shifts upward.
* The active indicator slides into view.
* The background and text color transition smoothly.

No JavaScript is required.

## Accessibility

Navigation links use native anchor elements and provide visible `:focus-visible` states for keyboard users.

The component also respects users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
    /* Animations and transitions are reduced */
}
```

## Responsive Behavior

### Desktop

The brand, navigation links, and profile section appear in a single row.

### Tablet

The navigation links move to a separate horizontally scrollable row.

### Mobile

Navigation links remain accessible while the profile details are hidden to conserve space.

## Browser Support

The component uses standard HTML5 and CSS features supported by modern browsers.

No JavaScript or external CSS framework is required.

## Issue

Created for:

#59298 — Add CSS Slide-Up Navbar for Fintech Dashboard Layouts
