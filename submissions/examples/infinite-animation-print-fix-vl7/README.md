# Infinite Animations Print Reset

A self-contained solution addressing the bug where continuous EaseMotion CSS animations (such as `.ease-spin`, `.ease-pulse`, `.ease-bounce`, or `.ease-loader-spin`) continue executing keyframes during print rendering and PDF export.

## Problem Description
When printing a webpage or saving as PDF via Browser Print (`Ctrl + P`), active keyframe animations continue executing while the browser generates the print snapshot. This leads to:
- Elements frozen at awkward rotation angles (e.g. rotated 145° instead of 0°).
- Elements invisible or semi-transparent due to mid-fade keyframe opacities.
- Layout misalignment in printed documents.

## Fix Implementation
The `@media print` rule block resets all CSS animations and transitions, forcing full opacity and resetting transforms:

```css
@media print {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

## Folder Contents
- `demo.html`: Self-contained demonstration showcasing spinning, pulsing, and bouncing animated elements.
- `style.css`: Stylesheet containing keyframes and the `@media print` reset rule.
- `README.md`: Issue breakdown and verification instructions.

## How to Test
1. Open `demo.html` directly in any web browser.
2. Press `Ctrl + P` (or `Cmd + P` on macOS) to open Print Preview.
3. Observe that all icons remain upright, static, and fully opaque in the printed preview.
