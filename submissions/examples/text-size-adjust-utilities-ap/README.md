# EaseMotion CSS — Text Size Adjust Utilities

This directory implements core utility classes for controlling the CSS `text-size-adjust` property across mobile viewports in EaseMotion CSS.

---

## What is Text Size Adjust?

Mobile devices (particularly iOS Safari and mobile Chrome) sometimes apply an automatic font inflation algorithm (commonly called **Font Boosting** or **Text Boosting**) when rendering text-heavy elements. When rotating from portrait to landscape orientation, the browser scales text sizes upward so users don't have to zoom manually.

While helpful, this auto-inflation behavior often distorts deliberate typography ratios, resulting in clipped elements, broken flex containers, or overlapping blocks.

---

## Utility Classes Reference

EaseMotion CSS provides clean and intuitive utility prefixes for configuring text size scaling.

| Utility Class | Standard Class           | CSS Rule                  | Description                                                                                             |
| :------------ | :----------------------- | :------------------------ | :------------------------------------------------------------------------------------------------------ |
| `.tsa-none`   | `.text-size-adjust-none` | `text-size-adjust: none;` | Disables automatic text scaling entirely on mobile layouts.                                             |
| `.tsa-auto`   | `.text-size-adjust-auto` | `text-size-adjust: auto;` | Browser default: allows automatic text scaling during orientation changes.                              |
| `.tsa-100`    | `.text-size-adjust-100`  | `text-size-adjust: 100%;` | Locks font sizes to exactly 100% scale, preventing auto-inflation while maintaining standard user zoom. |
| `.tsa-80`     | `.text-size-adjust-80`   | `text-size-adjust: 80%;`  | Sets scale factor to 80% size adjust.                                                                   |
| `.tsa-120`    | `.text-size-adjust-120`  | `text-size-adjust: 120%;` | Sets scale factor to 120% size adjust.                                                                  |
| `.tsa-150`    | `.text-size-adjust-150`  | `text-size-adjust: 150%;` | Sets scale factor to 150% size adjust.                                                                  |

---

## Usage Examples

### 1. Lock Page-Wide Inflation (100%)

To prevent automatic mobile font boosting globally while keeping site-wide layouts stable, apply `.tsa-100` to the root `<html>` or `<body>` element:

```html
<body class="tsa-100">
  <main class="page-container">
    <h1>Stable Mobile Layout</h1>
    <p>
      This page maintains its exact typography proportions when rotated on
      mobile devices.
    </p>
  </main>
</body>
```

### 2. Disabling Size Scaling on Dashboard Cards (None)

Disabling size adjustments is useful for dashboard cells or table cells where exact height spacing is required:

```html
<div class="card tsa-none">
  <span class="card-metric">$48,259.00</span>
  <p class="card-desc">Fixed-space metric label</p>
</div>
```

---

## Accessibility (WCAG 2.1) & Best Practices

> [!CAUTION]
> Disabling text-size adjustments (`text-size-adjust: none;`) can create accessibility issues. Under WCAG 2.1 (Success Criterion 1.4.4 - Resize Text), users must be able to zoom text up to 200% without loss of content or functionality.

- **Prefer `100%` over `none`**: On iOS Safari, using `text-size-adjust: 100%` prevents the automatic font boosting during rotation but _still allows users to pinch-to-zoom_ the page. Using `text-size-adjust: none` can sometimes disable pinch-to-zoom completely depending on safari system versions, which violates WCAG rules.
- **Limit `none` to small UI elements**: Avoid applying `tsa-none` to large reading passages. Keep it constrained to headers, buttons, navigation menus, and grid cells that must retain structural shapes.

---

## Browser Compatibility Notes

- **WebKit (iOS Safari, macOS Safari)**: Full support using the `-webkit-text-size-adjust` prefix. iOS Safari is the primary browser that utilizes font boosting.
- **Blink (Chrome for Android)**: Supports `-webkit-text-size-adjust` for mobile font boosting control.
- **Gecko (Firefox for Android)**: Full support using the `-moz-text-size-adjust` prefix.

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox sliders apply CSS values dynamically. Run standard smoke tests to confirm build compliance:

```bash
npm test
```
