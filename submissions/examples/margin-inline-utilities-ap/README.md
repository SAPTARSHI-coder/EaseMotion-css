# EaseMotion CSS — Margin Inline Utilities

This directory implements core utility classes for controlling the CSS `margin-inline` property (axis-both, start-only, and end-only) in EaseMotion CSS.

---

## What is Margin Inline?

`margin-inline` is a CSS logical (flow-relative) property that controls spacing on the **inline-axis** of elements. Unlike physical properties (e.g. `margin-left` and `margin-right`), logical margins adjust automatically depending on the container's **directionality** (`direction: ltr` or `rtl`) and **writing mode** (`writing-mode: horizontal-tb`, `vertical-rl`, or `vertical-lr`).

### Mapping Mappings

Depending on the context, logical margin-inline boundaries map dynamically:

| Writing Mode / Direction | logical `margin-inline-start`   | logical `margin-inline-end`      |
| :----------------------- | :------------------------------ | :------------------------------- |
| **Horizontal LTR**       | maps to physical `margin-left`  | maps to physical `margin-right`  |
| **Horizontal RTL**       | maps to physical `margin-right` | maps to physical `margin-left`   |
| **Vertical RL**          | maps to physical `margin-top`   | maps to physical `margin-bottom` |
| **Vertical LR**          | maps to physical `margin-top`   | maps to physical `margin-bottom` |

---

## Utility Classes Reference

EaseMotion CSS provides shorthand and long-form utility classes mapping to standard spacing scales:

### 1. Axis-Both Inline Spacing (`margin-inline`)

| Shorthand Class | Long-Form Class       | CSS Equivalent                              |
| :-------------- | :-------------------- | :------------------------------------------ |
| `.mi-0`         | `.margin-inline-0`    | `margin-inline: 0rem !important;`           |
| `.mi-1`         | `.margin-inline-1`    | `margin-inline: 0.25rem !important;` (4px)  |
| `.mi-2`         | `.margin-inline-2`    | `margin-inline: 0.5rem !important;` (8px)   |
| `.mi-3`         | `.margin-inline-3`    | `margin-inline: 0.75rem !important;` (12px) |
| `.mi-4`         | `.margin-inline-4`    | `margin-inline: 1rem !important;` (16px)    |
| `.mi-5`         | `.margin-inline-5`    | `margin-inline: 1.25rem !important;` (20px) |
| `.mi-6`         | `.margin-inline-6`    | `margin-inline: 1.5rem !important;` (24px)  |
| `.mi-8`         | `.margin-inline-8`    | `margin-inline: 2rem !important;` (32px)    |
| `.mi-10`        | `.margin-inline-10`   | `margin-inline: 2.5rem !important;` (40px)  |
| `.mi-12`        | `.margin-inline-12`   | `margin-inline: 3rem !important;` (48px)    |
| `.mi-16`        | `.margin-inline-16`   | `margin-inline: 4rem !important;` (64px)    |
| `.mi-auto`      | `.margin-inline-auto` | `margin-inline: auto !important;`           |

### 2. Start-Side Inline Spacing (`margin-inline-start`)

Sets spacing at the inline-start edge (left in LTR, right in RTL, top in vertical writing).

| Shorthand Class | Long-Form Class             |
| :-------------- | :-------------------------- |
| `.mi-s-0`       | `.margin-inline-start-0`    |
| `.mi-s-1`       | `.margin-inline-start-1`    |
| `.mi-s-2`       | `.margin-inline-start-2`    |
| `.mi-s-3`       | `.margin-inline-start-3`    |
| `.mi-s-4`       | `.margin-inline-start-4`    |
| `.mi-s-6`       | `.margin-inline-start-6`    |
| `.mi-s-8`       | `.margin-inline-start-8`    |
| `.mi-s-12`      | `.margin-inline-start-12`   |
| `.mi-s-16`      | `.margin-inline-start-16`   |
| `.mi-s-auto`    | `.margin-inline-start-auto` |

### 3. End-Side Inline Spacing (`margin-inline-end`)

Sets spacing at the inline-end edge (right in LTR, left in RTL, bottom in vertical writing).

| Shorthand Class | Long-Form Class           |
| :-------------- | :------------------------ |
| `.mi-e-0`       | `.margin-inline-end-0`    |
| `.mi-e-1`       | `.margin-inline-end-1`    |
| `.mi-e-2`       | `.margin-inline-end-2`    |
| `.mi-e-3`       | `.margin-inline-end-3`    |
| `.mi-e-4`       | `.margin-inline-end-4`    |
| `.mi-e-6`       | `.margin-inline-end-6`    |
| `.mi-e-8`       | `.margin-inline-end-8`    |
| `.mi-e-12`      | `.margin-inline-end-12`   |
| `.mi-e-16`      | `.margin-inline-end-16`   |
| `.mi-e-auto`    | `.margin-inline-end-auto` |

### 4. Negative Axis-Both Inline Spacing (`-margin-inline`)

| Shorthand Class | Long-Form Class     | CSS Equivalent                        |
| :-------------- | :------------------ | :------------------------------------ |
| `.-mi-1`        | `.-margin-inline-1` | `margin-inline: -0.25rem !important;` |
| `.-mi-2`        | `.-margin-inline-2` | `margin-inline: -0.5rem !important;`  |
| `.-mi-4`        | `.-margin-inline-4` | `margin-inline: -1rem !important;`    |

---

## Usage Examples

### 1. Bilingual Navigation Links (LTR & RTL Support)

Automatically space out horizontal lists without writing separate CSS overrides for LTR and RTL:

```html
<nav class="navigation-bar">
  <span class="logo">EASE</span>
  <ul class="nav-links">
    <!-- Spaced out on the end-side (right in LTR, left in RTL) -->
    <li class="mi-e-4"><a href="#">Home</a></li>
    <li class="mi-e-4"><a href="#">Docs</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>
```

### 2. Nesting Threaded Chat Replies

Indents comment boxes properly depending on writing flow direction:

```html
<!-- Parent Comment -->
<div class="comment-box">
  <strong>Pratyush Panda</strong>: Logical spacing is elegant!
</div>

<!-- Nested Reply -->
<div class="comment-box mi-s-6">
  <strong>Saptarshi Sadhu</strong>: Indents left in LTR, right in RTL.
</div>
```

### 3. Vertical Poetry / Classical Layouts

In vertical writing layout systems, inline margins map to vertical margins:

```html
<div class="vertical-scroll" style="writing-mode: vertical-rl;">
  <!-- Space title below the section header (end margin) -->
  <h1 class="mi-e-5">第一章 飛翔</h1>
  <p class="mi-s-3">未来のウェブデザインの姿だ。</p>
</div>
```

---

## Accessibility (WCAG 2.1) & Best Practices

- **Dynamic Reading Flow Order**: Logical properties prevent developers from using direction overrides like `direction: rtl` or `flex-direction: row-reverse` to force visual changes. Reversing layout rows changes keyboard tab index order, causing keyboard and screen reader focus indicators to jump unintuitively across viewports. Use logical margin properties to adjust spacing while maintaining correct DOM sequence.
- **Responsiveness**: Ensure layout elements adapt correctly under low resolutions or high text zoom (Success Criterion 1.4.4 - Resize Text). Logical properties allow clean wrapping transitions.

---

## Verification & Testing

Verify correctness by launching `demo.html` in your browser. All interactive modes (LTR, RTL, vertical writing-modes) must show margins positioned on the correct sides.

To run project smoke tests, use:

```bash
npm test
```
