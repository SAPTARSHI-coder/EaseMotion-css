# prefers-contrast Media Query Motion Lab

This submission implements the prefers-contrast Media Query Motion Lab for GSSoC issue **#44485**.

## Description

A documentation lab showing side-by-side UI comparisons under normal contrast vs high-contrast preference, demonstrating borders, focus rings, and glow shadow adjustments.

## Features

- **Side-by-Side Comparison**: Normal vs High Contrast panels
- **Manual Toggle**: Simulate high contrast mode
- **System Detection**: Detects OS contrast preference
- **Border Adjustments**: Subtle vs strong borders
- **Focus Ring Visibility**: Keyboard accessibility demonstrations
- **Glow Shadow Reduction**: Safe glow usage
- **Interactive Form**: Contrast-aware form example
- **Copy-Ready CSS**: Code snippets for production

## prefers-contrast Values

| Value | Description |
|-------|-------------|
| `no-preference` | User has no preference |
| `more` | User prefers higher contrast |
| `less` | User prefers lower contrast |
| `forced` | High contrast mode forced by system |

## Usage

```css
/* Default styling */
.card {
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 20px rgba(59,130,246,0.3);
}

/* High contrast preference */
@media (prefers-contrast: more) {
  .card {
    border: 2px solid currentColor;
    box-shadow: none;
  }
  
  :focus-visible {
    outline: 3px solid #fff;
    outline-offset: 2px;
  }
}
```

## Comparison Examples

### Borders
- Normal: `1px solid rgba(255,255,255,0.1)`
- High Contrast: `2px solid currentColor`

### Focus Rings
- Normal: `2px solid rgba(59,130,246,0.5)`
- High Contrast: `3px solid #fff`

### Glow Shadows
- Normal: `0 0 20px rgba(59,130,246,0.3)`
- High Contrast: `none`

## Best Practices

1. Use `prefers-contrast: more` for higher contrast modes
2. Increase border width and opacity
3. Make focus indicators more prominent
4. Reduce or remove glow shadows
5. Ensure 4.5:1 minimum contrast ratio for text

## Acceptance Criteria

- ✅ Side-by-side comparison panels
- ✅ Border adjustments for high contrast
- ✅ Focus ring visibility examples
- ✅ Glow shadow reduction
- ✅ prefers-contrast toggle
- ✅ Educational notes
- ✅ Copy-ready CSS snippets
- ✅ Responsive design
