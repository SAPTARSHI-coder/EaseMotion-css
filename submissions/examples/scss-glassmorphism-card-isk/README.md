# [SCSS] Glassmorphism Animated Card Mixin

## What does this do?
A reusable SCSS mixin for high-performance glassmorphism card components, including smooth translations and scaling hover transitions.

## How is it used?
Import the mixin and include it inside your card class selector:

```scss
@use 'glassmorphism' as *;

.my-custom-card {
  @include glass-card(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.20), 12px);
}
```

### Parameters
- `$bg-color` (Color): Background color with transparency (default: `rgba(255, 255, 255, 0.12)`)
- `$border-color` (Color): Border outline color with transparency (default: `rgba(255, 255, 255, 0.20)`)
- `$blur` (Length): Backdrop filter blur size (default: `12px`)
- `$shadow` (Shadow): Shadow value applied to card (default: `var(--ease-shadow-md)`)

## Why is it useful?
centralizing glassmorphism rules inside a Sass module prevents duplicating heavy backdrop filter properties and ensures consistent transitions and hover behaviors across the entire web application.
