# Grid Column Span Utilities Showcase

A premium, self-contained CSS utility showcase that demonstrates CSS grid columns `span`, `start`, and `end` configurations within the EaseMotion CSS framework. This feature adds responsive design, interactive state modifiers, and real-world UI components leveraging CSS Grid.

## 📖 Table of Contents

- [Overview](#overview)
- [Class Reference Table](#class-reference-table)
- [Responsive Modifiers](#responsive-modifiers)
- [Interactive Sandbox](#interactive-sandbox)
- [Accessibility Compliance (WCAG 2.1)](#accessibility-compliance-wcag-21)
- [Installation & Setup](#installation--setup)

---

## 🌟 Overview

CSS Grid offers powerful mechanisms to place elements in alignment tracks. The `col-span-*`, `col-start-*`, and `col-end-*` classes make it easy to design dashboard layouts, grid galleries, and responsive card rows.

EaseMotion CSS Grid Column Span Utilities are built to support:

1. **Fluid Placement**: Control layout dimensions utilizing simple spans (like `col-span-3`, `col-span-6`, `col-span-full`).
2. **Interactive States**: Transitions and layout adjustments on hover or focus triggers.
3. **Accessibility Safeguards**: Guidelines for reading order alignment and viewport reflow.

---

## 📊 Class Reference Table

Here are the utility classes included in this package:

| Category         | Utility Class    | CSS Output                                   | Description                      |
| :--------------- | :--------------- | :------------------------------------------- | :------------------------------- |
| **Grid Column**  | `col-auto`       | `grid-column: auto !important;`              | Resolves based on grid algorithm |
|                  | `col-span-1`     | `grid-column: span 1 / span 1 !important;`   | Spans exactly 1 column track     |
|                  | `col-span-3`     | `grid-column: span 3 / span 3 !important;`   | Spans exactly 3 column tracks    |
|                  | `col-span-6`     | `grid-column: span 6 / span 6 !important;`   | Spans exactly 6 column tracks    |
|                  | `col-span-12`    | `grid-column: span 12 / span 12 !important;` | Spans exactly 12 column tracks   |
|                  | `col-span-full`  | `grid-column: 1 / -1 !important;`            | Spans full container columns     |
| **Column Start** | `col-start-1`    | `grid-column-start: 1 !important;`           | Begins item at column line 1     |
|                  | `col-start-6`    | `grid-column-start: 6 !important;`           | Begins item at column line 6     |
|                  | `col-start-auto` | `grid-column-start: auto !important;`        | Auto column start placement      |
| **Column End**   | `col-end-1`      | `grid-column-end: 1 !important;`             | Ends item before column line 1   |
|                  | `col-end-13`     | `grid-column-end: 13 !important;`            | Ends item before column line 13  |
|                  | `col-end-auto`   | `grid-column-end: auto !important;`          | Auto column end placement        |

---

## 📱 Responsive Modifiers

Responsive breakpoint overrides are included out of the box to adapt items on smaller displays:

- **Desktop (default)**: Standard styling applies.
- **Medium Screens (`md: max-width: 1024px`)**: Prefix with `md-` (e.g. `md-col-span-6`).
- **Small Screens (`sm: max-width: 768px`)**: Prefix with `sm-` (e.g. `sm-col-span-full`).

---

## 🛠️ Interactive Sandbox

The example directory includes a visual visualizer in `demo.html` to configure:

- **Active Grid Item**: Select between Grid Item 1, 2, or 3 to modify.
- **Placement Controls**: Select `span` values, `start` limits, and `end` lines dynamically.
- **HTML Markup Preview**: Live updates of the resulting code structure.

---

## ♿ Accessibility Compliance (WCAG 2.1)

Using CSS Grid layout systems requires careful attention to responsive wrapping and structural focus orders:

### 1. Sensory Order Alignment (Success Criterion 1.3.2)

> [!IMPORTANT]
> When applying custom placement offsets (like `col-start-4`), ensure that the visual layout matches the DOM reading sequence.
> **Best Practice**: Tab focus must flow naturally left-to-right/top-to-bottom. Avoid separating DOM ordering from visual ordering.

### 2. Reflow & Wrapping (Success Criterion 1.4.10)

> [!CAUTION]
> Always apply responsive column span classes (e.g., `.sm-col-span-full` or `.md-col-span-6`) on elements spanning large spans on desktop screens to support up to 400% zoom.

---

## 🚀 Installation & Setup

To view the showcase locally, spin up a basic HTTP server inside the project root:

```bash
# Using standard Node.js npx tool
npx live-server submissions/examples/grid-column-span-utilities-ap/

# Or using Python 3
python -m http.server -d submissions/examples/grid-column-span-utilities-ap/
```
