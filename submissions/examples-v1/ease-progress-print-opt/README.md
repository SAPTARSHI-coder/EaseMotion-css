# EaseProgress Print Optimization Module

Print-specific resets and styles for the `ease-progress` component to prevent ink waste and optimize text contrast on physical paper.

## What is it?
This print overlay module intercepts printing triggers (`@media print`) for the progress component. It strips out complex backgrounds, box-shadows, animations, and high-saturation color gradients. 

Instead, it renders a high-contrast thin dark-gray border for the progress container and fills the progress status bar with a solid grayscale ink-saving pattern.

---

## How to use it?

### 1. Include the Resets
Add the print-optimization stylesheet to your document:
```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="style.css" />
```

### 2. Standard Layout Support
The print stylesheet targets standard `.ease-progress` and `.ease-progress-bar` class names natively. When a user presses print:
- High-saturation theme colors (success, info, warning, danger) revert to dark gray/black fills (`#555`).
- Linear background stripes (`.ease-progress-striped`) and sliding keyframe animations (`.ease-progress-animated`) are fully stripped.
- Background fills on the container reset to `transparent` to avoid wasting toner.
- Text labels accompanying the progress bar receive high-contrast black colors (`#000`).

---

## Technical Details

We utilize standard CSS printing properties to preserve bar visibility while saving ink:
```css
@media print {
  .ease-progress-bar {
    background-color: #555555 !important;
    background-image: none !important;
    
    /* Forces browsers to print background colors instead of stripping them */
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
```

## Why it fits EaseMotion CSS
A modern, production-grade animation framework should perform beautifully on digital displays but also handle physical printing gracefully. By default, browser rendering engines strip background colors during printing, which makes progress bars completely invisible, or prints heavy colors wasting ink. This optimization ensures a robust, reliable, and ink-friendly print behavior.
