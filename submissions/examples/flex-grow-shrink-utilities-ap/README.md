# Flex Grow & Flex Shrink Utilities Showcase

A premium, self-contained CSS utility showcase that demonstrates CSS `flex-grow` and `flex-shrink` configurations within the EaseMotion CSS framework. This feature adds responsive design, interactive state modifiers, and real-world UI components leveraging flexbox space distribution.

## 📖 Table of Contents

- [Overview](#overview)
- [Class Reference Table](#class-reference-table)
- [Responsive Modifiers](#responsive-modifiers)
- [Interactive Sandbox](#interactive-sandbox)
- [Accessibility Compliance (WCAG 2.1)](#accessibility-compliance-wcag-21)
- [Installation & Setup](#installation--setup)

---

## 🌟 Overview

The `flex-grow` and `flex-shrink` properties define how flex items expand to fill excess space or shrink to fit within their container limits. They dictate the responsiveness of headers, sidebars, and grid cards.

EaseMotion CSS Flex Grow & Flex Shrink Utilities are built to support:

1. **Space Allocation**: Set exact sizing coefficients (`flex-grow-1`, `flex-grow-2`, `flex-shrink-0`) to distribute available space proportionally.
2. **Interactive States**: Transitions and layout adjustments on hover or focus triggers.
3. **Accessibility Safeguards**: Guidelines for viewport reflow, content containment, and zoom capabilities.

---

## 📊 Class Reference Table

Here are the utility classes included in this package:

| Category        | Utility Class    | CSS Output                    | Description                            |
| :-------------- | :--------------- | :---------------------------- | :------------------------------------- |
| **Flex Grow**   | `flex-grow-0`    | `flex-grow: 0 !important;`    | Prevents element growth (default)      |
|                 | `flex-grow-1`    | `flex-grow: 1 !important;`    | Grows to fill remaining space          |
|                 | `flex-grow-2`    | `flex-grow: 2 !important;`    | Grows twice as fast as grow-1          |
|                 | `flex-grow-3`    | `flex-grow: 3 !important;`    | Grows three times as fast as grow-1    |
|                 | `flex-grow-6`    | `flex-grow: 6 !important;`    | High priority space distribution       |
|                 | `flex-grow-12`   | `flex-grow: 12 !important;`   | Maximum space growth coefficient       |
| **Flex Shrink** | `flex-shrink-0`  | `flex-shrink: 0 !important;`  | Prevents element shrinking             |
|                 | `flex-shrink-1`  | `flex-shrink: 1 !important;`  | Shrinks to fit container (default)     |
|                 | `flex-shrink-2`  | `flex-shrink: 2 !important;`  | Shrinks twice as fast as shrink-1      |
|                 | `flex-shrink-4`  | `flex-shrink: 4 !important;`  | Shrinks four times as fast as shrink-1 |
|                 | `flex-shrink-12` | `flex-shrink: 12 !important;` | High priority compression rate         |

---

## 📱 Responsive Modifiers

Responsive breakpoint overrides are included out of the box to adapt items on smaller displays:

- **Desktop (default)**: Standard styling applies.
- **Medium Screens (`md: max-width: 1024px`)**: Prefix with `md-` (e.g. `md-flex-grow-1`).
- **Small Screens (`sm: max-width: 768px`)**: Prefix with `sm-` (e.g. `sm-flex-shrink-0`).

---

## 🛠️ Interactive Sandbox

The example directory includes a visual visualizer in `demo.html` to configure:

- **Container Width**: A range slider (300px - 750px) to see grow/shrink in action.
- **Item Sizing Rates**: Configures individual grow and shrink values for three distinct boxes.
- **Markup Generator**: Real-time output of the generated HTML code.

---

## ♿ Accessibility Compliance (WCAG 2.1)

Using flexbox space distribution layouts requires careful attention to responsive wrapping and structural focus orders:

### 1. Reflow & Content Clipping (Success Criterion 1.4.10)

> [!IMPORTANT]
> When applying `flex-shrink-0`, items will refuse to contract under high zoom configurations.
> **Best Practice**: Avoid applying `flex-shrink-0` to large textual blocks, paragraphs, or important data grids to prevent content overflows off the screen.

### 2. Responsive Wrapping (Success Criterion 1.4.4)

> [!CAUTION]
> In narrow viewports, it's recommended to flip container orientation to `flex-direction: column` and apply `.sm-flex-grow-1` or `.sm-flex-shrink-1` to maintain visual readability.

---

## 🚀 Installation & Setup

To view the showcase locally, spin up a basic HTTP server inside the project root:

```bash
# Using standard Node.js npx tool
npx live-server submissions/examples/flex-grow-shrink-utilities-ap/

# Or using Python 3
python -m http.server -d submissions/examples/flex-grow-shrink-utilities-ap/
```
