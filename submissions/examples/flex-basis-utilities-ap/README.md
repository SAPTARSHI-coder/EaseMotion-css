# Flex Basis Utilities Showcase

A premium, self-contained CSS utility showcase that demonstrates CSS `flex-basis` configurations within the EaseMotion CSS framework. This feature adds responsive design, interactive state modifiers, and real-world UI components leveraging flex sizing structures.

## 📖 Table of Contents

- [Overview](#overview)
- [Class Reference Table](#class-reference-table)
- [Responsive Modifiers](#responsive-modifiers)
- [Interactive Sandbox](#interactive-sandbox)
- [Accessibility Compliance (WCAG 2.1)](#accessibility-compliance-wcag-21)
- [Installation & Setup](#installation--setup)

---

## 🌟 Overview

The `flex-basis` property specifies the initial main size of a flex item before space distribution. It forms the foundation of robust column systems, sidebars, and grid cards.

EaseMotion CSS Flex Basis Utilities are built to support:

1. **Fluid Grid Spanning**: Standardize layouts using exact fractions (like `1/2`, `1/3`, `3/4`) or absolute spacing sizes (such as `flex-basis-32` / 128px).
2. **Interactive States**: Transitions and size adaptations on hover or focus states.
3. **Accessibility Safeguards**: Guidelines for viewport reflow, wrapping, and logical tab sequences.

---

## 📊 Class Reference Table

Here are the utility classes included in this package:

| Category          | Utility Class        | CSS Output                        | Description                   |
| :---------------- | :------------------- | :-------------------------------- | :---------------------------- |
| **Keywords**      | `flex-basis-auto`    | `flex-basis: auto !important;`    | Resolves based on item width  |
|                   | `flex-basis-content` | `flex-basis: content !important;` | Sizes based on text content   |
|                   | `flex-basis-px`      | `flex-basis: 1px !important;`     | Exactly 1px width basis       |
| **Spacing Scale** | `flex-basis-0`       | `flex-basis: 0px !important;`     | Ignores initial content width |
|                   | `flex-basis-4`       | `flex-basis: 1rem !important;`    | 16px initial width            |
|                   | `flex-basis-16`      | `flex-basis: 4rem !important;`    | 64px initial width            |
|                   | `flex-basis-32`      | `flex-basis: 8rem !important;`    | 128px initial width           |
|                   | `flex-basis-64`      | `flex-basis: 16rem !important;`   | 256px initial width (sidebar) |
| **Fractions**     | `flex-basis-1/2`     | `flex-basis: 50% !important;`     | Splits space in half          |
|                   | `flex-basis-1/3`     | `flex-basis: 33.333% !important;` | Fits exactly three columns    |
|                   | `flex-basis-2/3`     | `flex-basis: 66.666% !important;` | Standard main area span       |
|                   | `flex-basis-1/4`     | `flex-basis: 25% !important;`     | Fits exactly four columns     |
|                   | `flex-basis-3/4`     | `flex-basis: 75% !important;`     | Wide main area span           |
|                   | `flex-basis-full`    | `flex-basis: 100% !important;`    | Spans full container          |

---

## 📱 Responsive Modifiers

Responsive breakpoint overrides are included out of the box to adapt items on smaller displays:

- **Desktop (default)**: Standard styling applies.
- **Medium Screens (`md: max-width: 1024px`)**: Prefix with `md-` (e.g. `md-flex-basis-1/2`).
- **Small Screens (`sm: max-width: 768px`)**: Prefix with `sm-` (e.g. `sm-flex-basis-full`).

---

## 🛠️ Interactive Sandbox

The example directory includes a visual visualizer in `demo.html` to configure:

- **Flex Direction**: Switch between `row` and `column` layouts.
- **Target Flex Basis**: Live dropdown to set fractional or spacing-based sizes on Item 2.
- **Flex Grow / Shrink**: Combine grow and shrink rules to preview how basis changes before/after space distribution.

---

## ♿ Accessibility Compliance (WCAG 2.1)

Using flexbox layouts requires careful attention to responsive wrapping and structural focus orders:

### 1. Reflow & Wrapping (Success Criterion 1.4.10)

> [!IMPORTANT]
> When applying fixed-size basis values (e.g. `flex-basis-64`), ensure the parent container includes `flex-wrap: wrap;` or toggle to `.sm-flex-basis-full` on mobile.
> This prevents horizontal scrollbars and text truncation on small screen sizes.

### 2. Focus Order Alignment (Success Criterion 2.4.3)

> [!CAUTION]
> Avoid separating flex-basis adjustments from the natural DOM sequence.
> Refrain from combining heavy `order` shifts with flex-basis sizing, as keyboard tab focus order must match the visual order of items.

---

## 🚀 Installation & Setup

To view the showcase locally, spin up a basic HTTP server inside the project root:

```bash
# Using standard Node.js npx tool
npx live-server submissions/examples/flex-basis-utilities-ap/

# Or using Python 3
python -m http.server -d submissions/examples/flex-basis-utilities-ap/
```
