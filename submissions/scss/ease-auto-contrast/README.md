# SCSS Auto-Contrast Mixin

A highly useful SCSS utility that guarantees WCAG-compliant text contrast automatically.

## Features
- Accepts any `$background-color` (hex, rgb, hsl).
- Automatically calculates the mathematical `lightness()` of the background.
- Dynamically outputs either a light or dark text `color` property to ensure maximum readability.
- Customizable threshold and output colors.

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$background-color` | `Color` | Required | The background color of your component. |
| `$light-text` | `Color` | `#ffffff` | The text color to use when the background is dark. |
| `$dark-text` | `Color` | `#0f172a` | The text color to use when the background is light. |
| `$threshold` | `Number` | `50%` | The lightness percentage at which the switch occurs. |

## Usage

Import the mixin and use it in your components, particularly those that receive dynamic background colors (like tags, badges, or themed buttons).

```scss
@import 'ease-auto-contrast';

// Generates: background-color: #000000; color: #ffffff;
.badge-dark {
  @include ease-auto-contrast(#000000);
}

// Generates: background-color: #f1f5f9; color: #0f172a;
.badge-light {
  @include ease-auto-contrast(#f1f5f9);
}

// With custom text colors
.badge-custom {
  @include ease-auto-contrast(#e11d48, #f8fafc, #1e293b);
}
```

## Why it fits EaseMotion CSS
Building dynamic components often leads to accessibility oversights when arbitrary background colors are passed in via props or CMS data. This mixin perfectly embodies the EaseMotion philosophy of abstracting complex logic into simple, robust utilities, ensuring that interactive and dynamic elements always maintain perfect, accessible contrast without requiring manual developer oversight.
