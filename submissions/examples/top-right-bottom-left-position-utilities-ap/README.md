# EaseMotion CSS — Position Placement Utilities (Top, Right, Bottom, Left)

This directory implements core utility classes for controlling the CSS position offset properties (`top`, `right`, `bottom`, `left`) in EaseMotion CSS.

---

## What are Position Offset Utilities?

The `top`, `right`, `bottom`, and `left` properties determine the vertical and horizontal offsets of a positioned element (an element whose `position` property is set to `absolute`, `relative`, `fixed`, or `sticky`).

Adjusting these values serves several primary layout purposes:

1. **Absolute Pinned Overlays**: Placing badges, tags, buttons, or indicator dots at specific corners of a parent container.
2. **Negative Margin Overlaps**: Pushing content slightly outside of borders or boundaries (e.g. notifications hanging off card edges).
3. **Axis-based Alignments**: Positioning dropdowns, modals, and tooltips relative to their anchor coordinates.

---

## Utility Classes Reference

EaseMotion CSS provides standard classes, percentage-based fractions, and negative offset modifiers for position properties.

### 1. Spacing Scale Offsets (rem/px)

For each axis (`top`, `right`, `bottom`, `left`), the following standard values are provided:

| Spacing scale | CSS Equivalent                |
| :------------ | :---------------------------- |
| `*-0`         | `0px !important;`             |
| `*-px`        | `1px !important;`             |
| `*-0.5`       | `0.125rem !important;` (2px)  |
| `*-1`         | `0.25rem !important;` (4px)   |
| `*-1.5`       | `0.375rem !important;` (6px)  |
| `*-2`         | `0.5rem !important;` (8px)    |
| `*-2.5`       | `0.625rem !important;` (10px) |
| `*-3`         | `0.75rem !important;` (12px)  |
| `*-3.5`       | `0.875rem !important;` (14px) |
| `*-4`         | `1rem !important;` (16px)     |
| `*-5`         | `1.25rem !important;` (20px)  |
| `*-6`         | `1.5rem !important;` (24px)   |
| `*-8`         | `2rem !important;` (32px)     |
| `*-10`        | `2.5rem !important;` (40px)   |
| `*-12`        | `3rem !important;` (48px)     |
| `*-16`        | `4rem !important;` (64px)     |
| `*-20`        | `5rem !important;` (80px)     |
| `*-24`        | `6rem !important;` (96px)     |
| `*-32`        | `8rem !important;` (128px)    |
| `*-40`        | `10rem !important;` (160px)   |
| `*-48`        | `12rem !important;` (192px)   |
| `*-56`        | `14rem !important;` (224px)   |
| `*-64`        | `16rem !important;` (256px)   |

### 2. Percentage Offsets

For percentage placement:

- `*-1/2`: `50%`
- `*-1/3`: `33.333333%`
- `*-2/3`: `66.666667%`
- `*-1/4`: `25%`
- `*-3/4`: `75%`
- `*-full`: `100%`

### 3. Negative Offsets

Prefix with `-` to create outer-hanging offsets:

- `*-top-px`, `*-top-1`, `*-top-2`, `*-top-3`, `*-top-4`, `*-top-6`, `*-top-8`, `*-top-12`, `*-top-16`, `*-top-1/2`, `*-top-full` (same for right, bottom, left).

---

## Usage Examples

### 1. Absolute Corner Badge

Combine `.absolute` positioning with corner classes (like `.top-0` and `.right-0`):

```html
<div class="card relative">
  <span class="absolute top-0 right-0 flag-badge">New</span>
  <h3>Feature Update</h3>
</div>
```

### 2. Pushing Notifications Partially Off-Edge (Negative Offset)

Hanging badges slightly off card borders using negative values improves visual hierarchy:

```html
<div class="card relative">
  <!-- Pushed 12px out top and right -->
  <span class="absolute -top-3 -right-3 notification-dot">3</span>
  <h3>Inbox Messages</h3>
</div>
```

### 3. Absolute Centering (Percentage Offset)

Centering elements horizontally or vertically relative to their parent container:

```html
<div class="banner relative">
  <div
    class="absolute top-1/2 left-1/2"
    style="transform: translate(-50%, -50%);"
  >
    <h2>Promotional Banner</h2>
  </div>
</div>
```

---

## Accessibility (WCAG 2.1) & Best Practices

- **Ensure Text Zoom Scaling (Success Criterion 1.4.4)**: Absolute positioning can cause overlapping content when users boost font size adjustments. Keep reading copy blocks structured in default block streams, and restrict absolute placement to badges, controls, illustrations, and small metrics.
- **Maintain Reading Order Hierarchy**: Absolute positioning visually moves elements around, but screen readers read elements in the exact order they are defined in HTML source. Keep structural semantic tags ordered logically in HTML source, regardless of CSS absolute overrides.

---

## Browser Compatibility Notes

- **Full support**: Pinned values (`top`, `right`, `bottom`, `left`) are fully supported by all modern browsers (including Internet Explorer/legacy Safari versions).

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox configuration options apply CSS values dynamically. Run standard project tests to confirm compliance:

```bash
npm test
```
