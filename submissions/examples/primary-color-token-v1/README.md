# Primary Color Token

A lightweight demonstration of using `--ease-color-primary` as a centralized design token for primary-colored UI elements. This approach allows developers to update the primary theme color from a single location.

## Features

- Pure CSS implementation
- Single source of truth for primary color styling
- Easy theme customization
- Lightweight and reusable
- Cross-browser compatible
- No JavaScript required

## Usage

```css
:root {
  --ease-color-primary: #6366f1;
}
```

```html
<button class="ease-btn-primary">Primary Button</button>
```

## Behavior

- Primary buttons use the token
- Primary text uses the token
- Primary borders use the token
- Changing one variable updates all dependent elements

## Browser Support

| Browser | Supported |
| ------- | --------- |
| Chrome  | ✅        |
| Firefox | ✅        |
| Safari  | ✅        |
| Edge    | ✅        |

## Why is it Useful?

A centralized color token improves maintainability and enables one-line theme changes. Developers can update the primary brand color in a single location and automatically apply the change across all primary-themed UI elements.

---

**Submitted by:** @Muditapandey26
**Date:** 2026-05-31
**Status:** Ready for review
