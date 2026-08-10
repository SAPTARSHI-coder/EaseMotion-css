# ease-contrast-a11y-bh

High Contrast Accessibility Support for EaseMotion CSS.

## What does this do?
Adds prefers-contrast: more media query support for users requiring higher contrast.

## How is it used?
```css
/* High contrast focus rings */
@media (prefers-contrast: more) {
  button:focus {
    outline: 3px solid CanvasText;
  }
}
```

## Why is it useful?
- WCAG AAA compliance
- Better accessibility
- Solid borders replace shadows
