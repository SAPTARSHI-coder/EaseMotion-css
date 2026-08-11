# Interactive Theme Playground

Provides four curated visual themes that can be applied with a single utility class. Each theme overrides EaseMotion CSS design tokens so buttons, cards, navbars, and core utilities inherit the new palette automatically.

## Available themes

- `ease-theme-ocean` — cool blue, modern SaaS palette.
- `ease-theme-midnight` — dark mode with bright accent colors.
- `ease-theme-sunset` — warm, energetic oranges and pinks.
- `ease-theme-forest` — natural greens and calm tones.

## Usage

```html
<body class="ease-theme-ocean">
  ...
</body>
```

## Supported design tokens

- `--ease-color-primary`
- `--ease-color-secondary`
- `--ease-color-success`
- `--ease-color-warning`
- `--ease-color-danger`
- `--ease-background-primary`
- `--ease-background-secondary`
- `--ease-text-primary`
- `--ease-text-secondary`
- `--ease-border-color`
- `--ease-shadow-sm`
- `--ease-shadow-md`
- `--ease-shadow-lg`

## Accessibility

- Each theme is designed for strong text contrast and readable color combinations.
- Buttons, cards, navbars, and interactive elements remain clear and accessible.
- Focus states are preserved via visible outline styling.

## Why it fits EaseMotion CSS

This feature is a design-token-first theme system that stays CSS-only and composable. It is ideal for instant visual variation without custom styles and preserves the readable, animation-friendly philosophy of EaseMotion CSS.
