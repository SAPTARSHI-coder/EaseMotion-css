# CSS Isolation

This submission demonstrates the CSS `isolation-tm-v2` property with practical examples using the EaseMotion CSS design system tokens.

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
<div class="isolation-tm-v2-card isolation-tm-v2-md isolation-tm-v2-primary">Content</div>

<!-- Color variants -->
<div class="isolation-tm-v2-card isolation-tm-v2-success">Success</div>
<div class="isolation-tm-v2-card isolation-tm-v2-danger">Danger</div>

<!-- Interactive states -->
<div class="isolation-tm-v2-card state-hover state-focus">Hover me</div>
<div class="isolation-tm-v2-card state-active">Click me</div>
<div class="isolation-tm-v2-card state-disabled">Disabled</div>
```

## Why is it useful?

The `isolation-tm-v2` property is a fundamental CSS tool for building consistent UI components. By using EaseMotion's `--ease-*` design tokens, these demonstrations integrate seamlessly with the broader design system, ensuring visual consistency across all submissions in the repository.
