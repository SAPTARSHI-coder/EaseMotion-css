# Standardize Card Padding

## Overview

Demonstrates consistent padding across all card variants in EaseMotion CSS.

## Standard Padding Values

| Component | Property | Value |
|-----------|----------|-------|
| `.ease-card` | padding | `var(--ease-space-6, 1.5rem)` |
| `.ease-card-header` | padding-bottom | `var(--ease-space-4, 1rem)` |
| `.ease-card-footer` | padding-top | `var(--ease-space-4, 1rem)` |

## Benefits

- **Consistent spacing** across all card variants
- **Easy customization** via CSS variables
- **Visual harmony** between card sections
- **Predictable layout** for developers

## Usage

Cards automatically use standardized padding:

```html
<article class="ease-card">
  <header class="ease-card-header">
    <h3 class="ease-card-title">Title</h3>
  </header>
  <div class="ease-card-body">
    Content here
  </div>
  <footer class="ease-card-footer">
    Actions
  </footer>
</article>
```

## Files

- `demo.html` - Interactive demonstration
- `style.css` - Demo styling
- `README.md` - This documentation
