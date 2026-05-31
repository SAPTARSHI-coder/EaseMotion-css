# Feature: Auto Dark Mode Variables

## Description
Adds a raw HTML and CSS demo showing how EaseMotion tokens can support automatic dark mode with a `@media (prefers-color-scheme: dark)` block.

## Features
- Uses CSS custom properties for light and dark palettes
- Switches automatically based on the user's system color preference
- Keeps all colors centralized in `:root` variables
- Includes a responsive card preview with adaptive background, text, border, shadow, and accent tokens

## Why it fits EaseMotion CSS
This feature keeps theme behavior lightweight, reusable, and dependency-free. It complements EaseMotion CSS by making motion-focused UI surfaces automatically adapt to the user's preferred color scheme without extra JavaScript or framework setup.

## Usage
Define the default light palette in `:root`, then override only the token values inside the dark color-scheme media query:

```css
:root {
  --page-bg: #f7f9fc;
  --surface-bg: #ffffff;
  --text-primary: #172033;
}

@media (prefers-color-scheme: dark) {
  :root {
    --page-bg: #10131a;
    --surface-bg: #171c26;
    --text-primary: #f3f6fb;
  }
}
```
