# ease-colormix-theming-bh

CSS color-mix() Dynamic Theming System for EaseMotion Components

## What does this do?
Provides a modern CSS theming system using color-mix() to mathematically compute hover, active, and soft-background states from a single base color variable.

## How is it used?
```css
/* Define base color */
:root {
  --ease-primary: #6366f1;
}

/* Use color-mix for computed variants */
.button {
  background: var(--ease-primary);
}

.button:hover {
  background: color-mix(in srgb, var(--ease-primary) 85%, black);
}

.button:active {
  background: color-mix(in srgb, var(--ease-primary) 70%, black);
}

.button-soft {
  background: color-mix(in srgb, var(--ease-primary) 15%, transparent);
}
```

## Why is it useful?
- Eliminates need for multiple hardcoded color values
- Enables easy white-labeling and theming
- Computes variants dynamically in the browser
- Reduces CSS bundle size

## Features
- Primary color variants (hover, active, pressed)
- Soft/transparent backgrounds
- Border color variants
- Text color variants
- Works with any base color
