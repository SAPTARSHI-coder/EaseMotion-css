# Forms Design Tokens Integration

This submission standardizes the `border-radius` declarations in form components to use EaseMotion's design tokens (`--ease-radius-*`). This ensures that form controls remain consistent with the rest of the framework when custom themes are applied.

## Improvements
- **Variable-based Radii**: Replaced hardcoded values with `var(--ease-radius-*)`.
- **Consistent Theming**: Form inputs now respect global radius overrides.
- **Fallbacks**: Provided fallback values that match existing framework standards.

## How to Use
1. Copy the CSS rules into your `forms.css` or include `style.css` in your project.
2. Form controls will now automatically update their rounded corners based on your design tokens.

```css
:root {
  --ease-radius-md: 0.75rem; /* Forms will now pick this up automatically */
}
```

## Directory Structure
- `demo.html`: Showcase of form controls with different radius tokens.
- `style.css`: The optimized CSS using design tokens.
