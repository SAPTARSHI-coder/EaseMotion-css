# Tab Labels — Overflow Fix (#55890)

A CSS-only fix for the bug where tab labels with long text overflow their container on small screens, causing the navigation to break its layout.

## The Bug

On smaller screens, long tab labels extend outside the tab container, making the navigation appear broken and difficult to use. Labels wrap, overlap, or push the layout beyond the viewport.

## The Fix

The solution uses three key CSS properties:

### 1. Horizontal scrolling on the nav container

```css
.tabs-nav {
    display: flex;
    flex-wrap: nowrap;    /* Prevent wrapping */
    overflow-x: auto;    /* Enable horizontal scroll */
}
```

### 2. Allow flex children to shrink

```css
.tab-btn {
    flex: 0 0 auto;
    min-width: 0;        /* Allow shrinking below content size */
}
```

### 3. Truncate long labels

```css
.tab-btn {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;  /* Show "..." for truncated text */
}
```

## How It Works

- `overflow-x: auto` enables horizontal scrolling when tabs exceed the container width
- `flex-wrap: nowrap` prevents tabs from wrapping to a new line
- `min-width: 0` allows flex children to shrink below their content width
- `text-overflow: ellipsis` gracefully truncates labels that are too long to display
- The scrollbar is styled with thin, subtle styling for a clean appearance

## Features

- Pure CSS implementation for layout and truncation
- Horizontal scrolling when tabs exceed container width
- Text truncation with ellipsis for very long labels
- Smooth active tab indicator animation
- Full accessibility: ARIA roles, keyboard navigation, focus indicators
- `prefers-reduced-motion` support
- Responsive design

## Files

```text
submissions/examples/55890-tab-labels-overflow/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in a modern web browser.
2. Observe the tab navigation with short and long labels.
3. Resize the browser window to see horizontal scrolling on small screens.
4. Click tabs to switch between panels.

## Browser Support

All modern browsers supporting:

- CSS Flexbox
- CSS `overflow-x`
- CSS `text-overflow`
- CSS Custom Properties
