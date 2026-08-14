# Card Grid — Long Titles Fix (#55342)

A CSS-only fix for the bug where cards in a grid become misaligned when one or more cards contain long titles. Long titles now wrap gracefully without disrupting the visual consistency of the grid.

## The Bug

Cards with longer titles become taller than neighboring cards, causing uneven spacing and breaking the visual consistency of the grid layout.

## The Fix

The solution uses two key CSS techniques:

### 1. CSS Grid with `align-items: stretch`

```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    align-items: stretch; /* Force all cards in a row to equal height */
}
```

`align-items: stretch` is the default for CSS Grid, but explicitly setting it ensures all cards in the same row stretch to match the tallest card.

### 2. Flex-based card internals

```css
.card {
    display: flex;
    flex-direction: column;
}

.card-desc {
    flex: 1; /* Pushes content to distribute space evenly */
}

.card-title {
    min-height: 1.5em; /* Consistent minimum size for title area */
    overflow-wrap: break-word; /* Long titles wrap instead of overflowing */
}
```

Each card uses `flex-direction: column` so internal sections distribute space evenly. The `flex: 1` on the description ensures all cards have equal content height.

## Features

- Pure CSS implementation — no JavaScript
- Responsive grid layout (auto-fill, minmax)
- Equal-height cards regardless of title length
- Long titles wrap gracefully with `overflow-wrap: break-word`
- Smooth hover animation
- `prefers-reduced-motion` support
- Semantic HTML with ARIA labels

## Files

```text
submissions/examples/55342-card-grid-long-titles/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in a modern web browser.
2. Observe that all cards in each row have equal height, regardless of title length.
3. Resize the browser window to see the responsive grid reflow.

## Browser Support

All modern browsers supporting:

- CSS Grid
- Flexbox
- CSS Custom Properties
- CSS Transitions
