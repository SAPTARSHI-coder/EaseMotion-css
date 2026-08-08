# Morph-Glow Card Grid

A lightweight, responsive CSS-only card grid designed for modern fintech dashboard layouts.

## Features

* Pure HTML and CSS
* No JavaScript required
* Smooth morph animation
* Glow effect on hover and focus
* Responsive card grid
* Keyboard-friendly focus behavior
* CSS custom properties
* `prefers-reduced-motion` support
* Lightweight implementation

## Files

```text
morph-glow-card-grid/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Keep both files in the same directory.
3. Open `demo.html` in a browser.
4. Hover or focus a card to see the morph-glow effect.

## HTML

```html
<section class="card-grid">

    <article class="card">
        <div class="card-icon">₹</div>

        <p class="card-label">Total Balance</p>

        <h2>₹84,520</h2>

        <span class="card-status">+8.4% this month</span>
    </article>

</section>
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
| `--success`    | `#159957` | Positive status color |

## Customization

The colors can be changed using the CSS custom properties:

```css
:root {
    --primary: #2563eb;
    --background: #f8fafc;
    --success: #16a34a;
}
```

## Animation

When a user hovers over or focuses on a card:

* The card moves slightly upward.
* The card scales slightly.
* The border radius changes to create a morph effect.
* A soft glow appears around the card.
* The icon changes shape and scales slightly.

The animation is created entirely with CSS.

## Responsive Behavior

### Desktop

Three cards are displayed per row.

### Tablet

Two cards are displayed per row.

### Mobile

Cards are displayed in a single column.

## Accessibility

The component supports reduced-motion preferences:

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

This reduces animation for users who have enabled reduced motion in their operating system or browser.

## Browser Support

The component uses standard HTML and CSS features supported by modern browsers.

No JavaScript or external framework is required.

## Issue

Created for:

#59293 — Add CSS Morph-Glow Card Grid for Fintech Dashboard Layouts
