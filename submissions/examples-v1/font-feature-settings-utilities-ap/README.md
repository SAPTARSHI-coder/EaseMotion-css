# Font Feature Settings Utilities Showcase

A premium, self-contained CSS utility showcase that demonstrates CSS `font-feature-settings` configurations within the EaseMotion CSS framework. This feature adds responsive design, interactive state modifiers, and real-world UI components leveraging advanced OpenType typographic controls.

## 📖 Table of Contents

- [Overview](#overview)
- [Class Reference Table](#class-reference-table)
- [Responsive Modifiers](#responsive-modifiers)
- [Interactive Sandbox](#interactive-sandbox)
- [Accessibility Compliance (WCAG 2.1)](#accessibility-compliance-wcag-21)
- [Installation & Setup](#installation--setup)

---

## 🌟 Overview

The `font-feature-settings` property provides low-level control over OpenType font features. It allows web developers to toggle advanced ligatures, lining/oldstyle numbers, tabular alignments, slashed zeros, and stylistic alternate glyphs in modern web fonts.

EaseMotion CSS Font Feature Settings Utilities are built to support:

1. **Financial Alignments**: Use tabular numbers (`tnum`) to align values in tables perfectly.
2. **Contextual Alternates**: Optimize programming ligatures (`calt`) and discretionary typography.
3. **Interactive States**: Transitions and layout configurations on hover or focus.

---

## 📊 Class Reference Table

Here are the utility classes included in this package:

| Category       | Utility Class           | CSS Output                                    | Description                          |
| :------------- | :---------------------- | :-------------------------------------------- | :----------------------------------- |
| **Reset**      | `font-feature-normal`   | `font-feature-settings: normal !important;`   | Resets all OpenType tags             |
| **Ligatures**  | `font-feature-liga-on`  | `font-feature-settings: "liga" 1 !important;` | Toggles standard ligatures on        |
|                | `font-feature-liga-off` | `font-feature-settings: "liga" 0 !important;` | Disables standard ligatures          |
|                | `font-feature-calt-on`  | `font-feature-settings: "calt" 1 !important;` | Contextual alternates (code symbols) |
| **Numbers**    | `font-feature-lnum`     | `font-feature-settings: "lnum" 1 !important;` | Lining figures (equal height)        |
|                | `font-feature-onum`     | `font-feature-settings: "onum" 1 !important;` | Oldstyle figures (descender scales)  |
|                | `font-feature-tnum`     | `font-feature-settings: "tnum" 1 !important;` | Tabular figures (equal width)        |
|                | `font-feature-pnum`     | `font-feature-settings: "pnum" 1 !important;` | Proportional figures (varying width) |
|                | `font-feature-frac`     | `font-feature-settings: "frac" 1 !important;` | Fractions (diagonal representation)  |
|                | `font-feature-zero`     | `font-feature-settings: "zero" 1 !important;` | Slashed zero representation          |
| **Alternates** | `font-feature-smcp`     | `font-feature-settings: "smcp" 1 !important;` | Small Caps (lowercase to caps)       |
|                | `font-feature-swsh`     | `font-feature-settings: "swsh" 1 !important;` | Elegant swash alternates             |

---

## 📱 Responsive Modifiers

Responsive breakpoint overrides are included out of the box to adapt items on smaller displays:

- **Desktop (default)**: Standard styling applies.
- **Medium Screens (`md: max-width: 1024px`)**: Prefix with `md-` (e.g. `md-font-feature-tnum`).
- **Small Screens (`sm: max-width: 768px`)**: Prefix with `sm-` (e.g. `sm-font-feature-zero`).

---

## 🛠️ Interactive Sandbox

The example directory includes a visual visualizer in `demo.html` to configure:

- **Preview Text**: Type custom strings to see numeric or character transitions.
- **Font Family**: Load Inter (sans-serif), Lora (serif), or Fira Code (monospaced) to test features on different designs.
- **OT Checklist**: Enable features like slashed zeros, oldstyle figures, or code ligatures simultaneously.

---

## ♿ Accessibility Compliance (WCAG 2.1)

Using advanced OpenType features requires careful attention to responsive wrapping and structural focus orders:

### 1. Font Scalability & Readability (Success Criterion 1.4.4)

> [!IMPORTANT]
> When applying stylistic sets (`ss01-ss05`) or alternates (`salt`, `swsh`), ensure the characters remain highly legible.
> **Best Practice**: Restrict alternates to decorative headers rather than paragraph content to ensure readability for cognitive or low-vision users.

### 2. Typographic Scannability (Success Criterion 1.4.3)

> [!CAUTION]
> Oldstyle figures (`onum`) look classic but can be hard to scan in financial dashboards. Use tabular lining figures (`tnum` + `lnum`) for rows of stats or prices to maintain alignment.

---

## 🚀 Installation & Setup

To view the showcase locally, spin up a basic HTTP server inside the project root:

```bash
# Using standard Node.js npx tool
npx live-server submissions/examples/font-feature-settings-utilities-ap/

# Or using Python 3
python -m http.server -d submissions/examples/font-feature-settings-utilities-ap/
```
