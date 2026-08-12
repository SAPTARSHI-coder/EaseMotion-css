# Focus Indicator Demo

## Overview

Interactive elements need visible focus outlines for keyboard users. This demo showcases proper focus indicator styles for accessibility compliance.

## Problem

Interactive elements without focus indicators are inaccessible to:
- Keyboard-only users
- Users with motor impairments
- Users navigating via screen readers

## Solution

Add visible focus styles to all interactive elements:

```css
/* Basic focus outline */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid var(--ease-color-primary);
  outline-offset: 2px;
}
```

## Focus Style Options

| Style | CSS | Use Case |
|-------|-----|----------|
| Outline | `outline: 2px solid var(--primary)` | Default, simple |
| Ring | `box-shadow: 0 0 0 4px rgba(0,0,0,0.2)` | Modern, soft |
| Glow | `box-shadow: 0 0 20px var(--primary)` | Emphasis |
| Scale | `transform: scale(1.05)` | Subtle feedback |

## Best Practices

1. **Always provide focus styles** - Never use `outline: none` without alternative
2. **Use sufficient contrast** - Focus indicator should be visible against background
3. **Consider `:focus-visible`** - Only show for keyboard navigation
4. **Offset properly** - Use `outline-offset` to separate from element

## Using :focus-visible

```css
/* Hide focus for mouse users */
button:focus:not(:focus-visible) {
  outline: none;
}

/* Show focus for keyboard users */
button:focus-visible {
  outline: 2px solid var(--ease-color-primary);
  outline-offset: 2px;
}
```

## Files

- `demo.html` - Interactive demonstration
- `style.css` - Component styling
- `README.md` - This documentation
