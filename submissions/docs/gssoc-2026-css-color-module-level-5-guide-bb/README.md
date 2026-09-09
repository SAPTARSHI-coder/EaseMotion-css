# Modern CSS Color Module Level 5 Architecture Guide (GSSoC 2026)

## 1. What does this do?
The **Modern CSS Color Module Level 5 Architecture Guide** documents modern CSS color spaces (`oklch()`, `oklab()`, `color-mix()`), perceptual color uniformity, wide-gamut palettes, dynamic dark/light theme generation, and WCAG 2.2 contrast compliance.

## 2. How is it used?
Link the stylesheet in your HTML header:
```html
<link rel="stylesheet" href="style.css">
```
Use native CSS `color-mix()` and `oklch()` functions directly inside component styling:
```css
:root {
  --brand-oklch: oklch(0.65 0.24 250);
  --brand-hover: color-mix(in oklch, var(--brand-oklch) 80%, white);
}
```

## 3. Why is it useful?
- **Perceptual Uniformity**: Prevents muddy hue shifts when generating lighter or darker shades compared to legacy HSL or RGB color spaces.
- **Dynamic CSS Theme Generation**: Generates complete Accessible color systems dynamically without requiring preprocessor Sass/SCSS build steps.
- **Wide-Gamut Displays**: Unlocks vivid P3 and Rec. 2020 color gamut capabilities on modern modern devices.
