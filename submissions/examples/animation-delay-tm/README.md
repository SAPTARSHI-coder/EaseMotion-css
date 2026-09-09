# Animation Delay

This submission demonstrates the CSS `animation-delay-tm` property with practical examples using the EaseMotion CSS design system tokens.

## Features

- Multiple size variants (sm, md, lg, xl)
- Color variants using `--ease-color-*` design tokens
- Interactive state demonstrations (hover, focus, active, disabled)
- Fully responsive grid layout with CSS Grid
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`
- Uses `--ease-*` CSS custom properties from `core/variables.css`

## Usage

```html
<!-- Size variant -->
<div class="animation-delay-tm-card animation-delay-tm-md animation-delay-tm-primary">Content</div>

<!-- Color variants -->
<div class="animation-delay-tm-card animation-delay-tm-success">Success</div>
<div class="animation-delay-tm-card animation-delay-tm-danger">Danger</div>

<!-- Interactive states -->
<div class="animation-delay-tm-card state-hover state-focus">Hover me</div>
<div class="animation-delay-tm-card state-active">Click me</div>
<div class="animation-delay-tm-card state-disabled">Disabled</div>
```

## Why is it useful?

The `animation-delay-tm` property is a fundamental CSS tool for building consistent UI components. By using EaseMotion's `--ease-*` design tokens, these demonstrations integrate seamlessly with the broader design system, ensuring visual consistency across all submissions in the repository.
