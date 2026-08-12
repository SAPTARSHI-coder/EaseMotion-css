# Ripple-Wave Card Grid

A lightweight, responsive CSS-only card grid with a smooth ripple-wave hover effect for modern fintech dashboard layouts.

## Features

* Pure HTML and CSS
* No JavaScript required
* Ripple-wave hover effect
* Smooth card lift animation
* Responsive card grid
* CSS custom properties
* Keyboard-friendly structure
* `prefers-reduced-motion` support
* Lightweight implementation

## Files

```text id="1df2n8"
ripple-wave-card-grid/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Keep both files in the same directory.
3. Open `demo.html` in a browser.
4. Hover over a card to see the ripple-wave effect.

## HTML Structure

```html id="qg9p4n"
<article class="card">

    <div class="card-icon">₹</div>

    <p class="card-label">Total Balance</p>

    <h2>₹84,520</h2>

    <span class="card-status">+8.4% this month</span>

</article>
```

## CSS Custom Properties

| Property       | Default   | Description           |
| -------------- | --------- | --------------------- |
| `--primary`    | `#635bff` | Main accent color     |
| `--background` | `#f5f7fb` | Page background       |
| `--white`      | `#ffffff` | Card background       |
| `--text`       | `#1f2937` | Main text color       |
| `--muted`      | `#6b7280` | Secondary text color  |
| `--border`     | `#e5e7eb` | Card border color     |
| `--success`    | `#16a34a` | Positive status color |

## Animation

The ripple effect is created using the CSS `::before` pseudo-element.

When a user hovers over a card:

1. A circular element starts from the center.
2. The circle expands outward.
3. A soft translucent wave appears.
4. The card moves slightly upward.
5. The icon scales slightly.

No JavaScript is required.

## Responsive Behavior

### Desktop

Three cards are displayed per row.

### Tablet

Two cards are displayed per row.

### Mobile

Cards are displayed in one column.

## Accessibility

The component includes support for users who prefer reduced motion:

```css id="6rxw6j"
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation: none !important;
        transition: none !important;
    }
}
```

This prevents unnecessary animation for users with reduced-motion preferences enabled.

## Browser Support

The component uses standard HTML5 and CSS features supported by modern browsers.

No JavaScript or external framework is required.

## Issue

Created for:

#59292 — Add CSS Ripple-Wave Card Grid for Fintech Dashboard Layouts
