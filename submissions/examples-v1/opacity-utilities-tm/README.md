# Opacity Utilities

Opacity scale 0 25 50 75 100 with hover-reveal pattern using ease-color tokens. This submission demonstrates how to leverage the EaseMotion CSS design token system (--ease-* variables) for consistent styling across your project.

## Features

- **Design token integration** — Uses --ease-color-*, --ease-space-*, --ease-radius-*, and --ease-shadow-* tokens from the EaseMotion CSS variables file
- **Multiple variants** — Includes primary/secondary/success/warning/danger/info color variants
- **Dark mode support** — Respects prefers-color-scheme: dark via CSS custom properties
- **Reduced motion support** — Respects prefers-reduced-motion: reduce for accessibility
- **Responsive design** — Mobile-first approach with responsive breakpoint utilities

## Usage

```html
<div class="container">
  <div class="demo-grid">
    <div class="demo-card">
      <p class="demo-label">Example</p>
      <p class="demo-value">Primary variant</p>
    </div>
  </div>
</div>
```

## Why is it useful?

The EaseMotion CSS framework provides a comprehensive set of CSS custom properties (design tokens) that ensure visual consistency across components. This submission leverages tokens like --ease-color-primary, --ease-shadow-md, and --ease-radius-md to create a opacity-based utility that works seamlessly within the existing design system.

## CSS Tokens Used

- --ease-color-primary — Primary brand color
- --ease-color-secondary — Secondary accent color
- --ease-color-success — Success state color
- --ease-color-warning — Warning state color
- --ease-color-danger — Danger/error state color
- --ease-color-info — Informational color
- --ease-color-surface — Card/panel background
- --ease-color-text — Primary text color
- --ease-color-muted — Muted/secondary text
- --ease-color-neutral-200 — Border color
- --ease-radius-sm, --ease-radius-md, --ease-radius-lg — Border radius tokens
- --ease-shadow-sm, --ease-shadow-md, --ease-shadow-lg — Shadow tokens
- --ease-speed-fast, --ease-speed-medium, --ease-speed-slow — Animation speed tokens
- --ease-ease, --ease-ease-out, --ease-ease-bounce — Easing tokens
- --ease-font-sans, --ease-font-mono — Font family tokens
- --ease-text-xs, --ease-text-sm, --ease-text-base, --ease-text-lg — Font size tokens
- --ease-leading-normal — Line height token
