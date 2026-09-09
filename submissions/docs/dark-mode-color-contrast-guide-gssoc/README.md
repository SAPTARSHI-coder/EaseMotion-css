# Dark Mode & Color Contrast Architecture Guide

## 1. What does this do?
This documentation guide presents design guidelines for constructing accessible dark mode palettes, surface elevation opacity layering, and WCAG 4.5:1 / 7:1 contrast ratio compliance.

## 2. How is it used?
Incorporate the elevation tokens and `color-scheme: dark light;` declarations in root styles.

```css
:root {
  color-scheme: dark light;
  --bg-dark: #090d16;
  --card-elevation-1: rgba(30, 41, 59, 0.9);
}
```

## 3. Why is it useful?
It prevents visual fatigue, glare, and legibility issues in low-light environments while adhering to accessibility guidelines.
