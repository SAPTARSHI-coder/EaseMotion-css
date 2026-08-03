# Chip Component — Text Clipping Fix (#55881)

A CSS-only fix for the bug where chip components with long text clip or overflow their container on smaller screens, making the content partially hidden and difficult to read.

## The Bug

Chip components with long text clip or overflow their container on smaller screens. As a result, the chip content becomes partially hidden and the layout looks inconsistent.

## The Fix

The solution uses three key CSS properties:

### 1. Constrain to container width

```css
.chip {
    max-width: 100%;  /* Prevents chip from exceeding container */
}
```

### 2. Allow text wrapping

```css
.chip {
    overflow-wrap: break-word;  /* Long words wrap to next line */
    word-wrap: break-word;      /* Legacy browser support */
}
```

### 3. Allow flex shrinking

```css
.chip {
    min-width: 0;  /* Allows chip to shrink below content size in flex context */
}
```

## How It Works

- `max-width: 100%` ensures the chip never exceeds its container's width
- `overflow-wrap: break-word` allows long words to wrap to the next line instead of overflowing
- `word-wrap: break-word` provides legacy browser support for `overflow-wrap`
- `min-width: 0` allows the chip to shrink when used inside a flex container

## Features

- Pure CSS implementation — no JavaScript
- Text wraps gracefully instead of clipping
- Works with short and long labels
- Size variants (sm, default, lg) all respect the fix
- Selected state maintains proper text visibility
- Dark mode support
- `prefers-reduced-motion` support
- Full accessibility with ARIA labels

## Files

```text
submissions/examples/55881-chip-text-clipping/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in a modern web browser.
2. Observe that all chip labels are fully visible, even with long text.
3. Resize the browser window to see the responsive behavior.

## Browser Support

All modern browsers supporting:

- CSS Flexbox
- CSS `overflow-wrap`
- CSS Custom Properties
