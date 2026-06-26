# EaseMotion CSS — Z-Index Scale Utilities

This directory implements core utility classes for controlling the CSS `z-index` property in EaseMotion CSS, allowing you to manage the stacking order of overlapping positioned elements.

---

## What is Z-Index?

The `z-index` property sets the Z-axis stack positioning of an element. Elements with a larger z-index cover elements with a smaller one.

> [!IMPORTANT]
> The `z-index` property only operates on positioned elements (e.g. elements with `position: relative;`, `position: absolute;`, `position: fixed;`, or `position: sticky;`). Standard static elements ignore z-index rules.

---

## Utility Classes Reference

EaseMotion CSS provides core z-index scales, negative layering classes, interactive state overrides, and responsive breakpoint modifiers:

### 1. Positive Stacking Scales

| Utility Class | CSS Equivalent              | Description                                      |
| :------------ | :-------------------------- | :----------------------------------------------- |
| `.z-auto`     | `z-index: auto !important;` | Resolves stacking automatically.                 |
| `.z-0`        | `z-index: 0 !important;`    | Base stacking layer.                             |
| `.z-1`        | `z-index: 1 !important;`    | Layer 1.                                         |
| `.z-2`        | `z-index: 2 !important;`    | Layer 2.                                         |
| `.z-5`        | `z-index: 5 !important;`    | Layer 5.                                         |
| `.z-10`       | `z-index: 10 !important;`   | Layer 10 (Standard layouts).                     |
| `.z-20`       | `z-index: 20 !important;`   | Layer 20.                                        |
| `.z-30`       | `z-index: 30 !important;`   | Layer 30 (Dropdown triggers).                    |
| `.z-40`       | `z-index: 40 !important;`   | Layer 40.                                        |
| `.z-50`       | `z-index: 50 !important;`   | Layer 50 (Sticky navigation bars).               |
| `.z-100`      | `z-index: 100 !important;`  | Layer 100.                                       |
| `.z-500`      | `z-index: 500 !important;`  | Layer 500.                                       |
| `.z-1000`     | `z-index: 1000 !important;` | Layer 1000 (Modal backdrops).                    |
| `.z-9999`     | `z-index: 9999 !important;` | Topmost layer (Tooltips / system notifications). |

### 2. Negative Stacking Scales (Background Layering)

Useful for placing decorative objects, patterns, or shape frames behind text container wrappers:

- `.z-n1` (`z-index: -1 !important;`)
- `.z-n2` (`z-index: -2 !important;`)
- `.z-n5` (`z-index: -5 !important;`)
- `.z-n10` (`z-index: -10 !important;`)
- `.z-n20` (`z-index: -20 !important;`)
- `.z-n50` (`z-index: -50 !important;`)
- `.z-n100` (`z-index: -100 !important;`)

### 3. Interactive State Modifiers

Adjust stacking order dynamically on user interactions:

- **Hover**: `.hover-z-10` through `.hover-z-9999` (e.g. pull hovered card elements to the front).
- **Focus**: `.focus-z-10` through `.focus-z-50`.
- **Active**: `.active-z-10`, `.active-z-50`.

### 4. Responsive Breakpoints

Apply z-index stack overrides at specific viewport sizes:

- `.sm-z-auto`, `.sm-z-0`, `.sm-z-10`, `.sm-z-20`, `.sm-z-50` (Mobile screens, `max-width: 768px`).
- `.md-z-auto`, `.md-z-0`, `.md-z-10`, `.md-z-20`, `.md-z-50` (Tablet screens, `max-width: 1024px`).

---

## Usage Examples

### 1. Interactive Pile (Hover-to-Front)

Hovering over any item expands it and pulls it to the front of the stacking context:

```html
<div class="avatar-stack" style="display: flex;">
  <div class="avatar relative z-10 hover-z-30">User A</div>
  <div
    class="avatar relative z-20 hover-z-30"
    style="margin-inline-start: -12px;"
  >
    User B
  </div>
</div>
```

### 2. Modal Popup Dialog Over Navigation Bars

```html
<!-- Sticky Header at z-50 -->
<header class="navbar sticky top-0 z-50">Navigation Header</header>

<!-- Modal backdrop overlay at z-1000 -->
<div
  class="modal-backdrop fixed inset-0 z-1000"
  style="background: rgba(0,0,0,0.5);"
>
  <div class="modal-card">Popup Window</div>
</div>
```

---

## CRITICAL ACCESSIBILITY (WCAG 2.1) BENEFITS

> [!IMPORTANT]
> The Z-index only alters visual stacking; it does not change keyboard navigation or DOM structure.

1. **Success Criterion 2.4.3 - Focus Order**: When displaying a modal or popover with high Z-index, the keyboard tab focus must not be allowed to escape into the elements behind it. Implement focus traps on modals to preserve logical user sequences.
2. **Preventing Invisible Focus**: Ensure that hidden background focus elements do not capture input when covered by active overlays.

---

## Verification & Testing

Verify visual z-index stacking by launching `demo.html` in your browser. Toggle the 3D Mode button to inspect stacking context separation in Z-space.

To run the project test suite, execute:

```bash
npm test
```
