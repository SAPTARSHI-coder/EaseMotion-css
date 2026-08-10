# Elastic-Slide Card Grid

A lightweight, responsive CSS-only card grid with a smooth elastic-slide animation for modern fintech dashboard layouts.

## Features

* Pure HTML and CSS
* No JavaScript required
* Elastic slide-up animation
* Smooth hover interaction
* Responsive card grid
* CSS custom properties
* Lightweight implementation
* `prefers-reduced-motion` support

## Files

```text id="q3w1t7"
elastic-slide-card-grid/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Keep both files in the same directory.
3. Open `demo.html` in a browser.
4. Hover over a card to see the elastic-slide animation.

## HTML Structure

```html id="jq0i6y"
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
| `--border`     | `#e5e7eb` | Border color          |
| `--success`    | `#16a34a` | Positive status color |

## Animation

The card uses the `elasticSlide` keyframe animation.

When a user hovers over a card:

1. The card moves upward.
2. The card briefly moves downward.
3. The card moves upward again.
4. The movement settles into its final position.
5. A subtle shadow emphasizes the interaction.

This creates a simple elastic movement using only CSS.

## Responsive Behavior

### Desktop

Three cards are displayed per row.

### Tablet

Two cards are displayed per row.

### Mobile

Cards are displayed in a single column.

## Accessibility

The component respects the user's reduced-motion preference:

```css id="p9t0j4"
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation: none !important;
        transition: none !important;
    }
}
```

This reduces motion for users who have enabled reduced-motion preferences.

## Browser Support

The component uses standard HTML5 and CSS features supported by modern browsers.

No JavaScript or external framework is required.

## Issue

Created for:

#59290 — Add CSS Elastic-Slide Card Grid for Fintech Dashboard Layouts
