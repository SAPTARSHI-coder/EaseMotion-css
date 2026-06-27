# Filter Effect Utilities Showcase

A premium, self-contained CSS utility showcase that demonstrates CSS filter effects within the EaseMotion CSS framework. This feature adds responsive design, interactive state modifiers, and real-world UI components leveraging graphical filters.

## 📖 Table of Contents

- [Overview](#overview)
- [Class Reference Table](#class-reference-table)
- [Responsive Modifiers](#responsive-modifiers)
- [Interactive Sandbox](#interactive-sandbox)
- [Accessibility Compliance (WCAG 2.1)](#accessibility-compliance-wcag-21)
- [Installation & Setup](#installation--setup)

---

## 🌟 Overview

CSS filters allow developers to apply graphical operations like blur, brightness shifts, contrast adjustments, grayscales, hue shifts, inverts, saturations, and drop-shadows directly in the browser.

EaseMotion CSS Filter Effect Utilities are built to support:

1. **Rich Art Direction**: Turn messy background visuals or multi-colored brand logos into clean, harmonious grids.
2. **Interactive States**: Smoothly transition filter effects on hover or focus.
3. **Accessibility Safeguards**: Built-in guidance for color contrast minimums and motion-related triggers.

---

## 📊 Class Reference Table

Here are the utility classes included in this package:

| Category        | Utility Class           | CSS Output                               | Description                 |
| :-------------- | :---------------------- | :--------------------------------------- | :-------------------------- |
| **Blur**        | `filter-blur-0`         | `filter: blur(0px) !important;`          | Removes blur                |
|                 | `filter-blur-sm`        | `filter: blur(4px) !important;`          | Subtle soft blur            |
|                 | `filter-blur-md`        | `filter: blur(8px) !important;`          | Medium blur                 |
|                 | `filter-blur-lg`        | `filter: blur(16px) !important;`         | Strong blur                 |
|                 | `filter-blur-xl`        | `filter: blur(24px) !important;`         | Extra strong blur           |
| **Brightness**  | `filter-brightness-50`  | `filter: brightness(0.5) !important;`    | Darkens element by 50%      |
|                 | `filter-brightness-75`  | `filter: brightness(0.75) !important;`   | Darkens element by 25%      |
|                 | `filter-brightness-100` | `filter: brightness(1) !important;`      | Default brightness          |
|                 | `filter-brightness-125` | `filter: brightness(1.25) !important;`   | Brightens element by 25%    |
|                 | `filter-brightness-150` | `filter: brightness(1.5) !important;`    | Brightens element by 50%    |
| **Contrast**    | `filter-contrast-50`    | `filter: contrast(0.5) !important;`      | Low contrast                |
|                 | `filter-contrast-100`   | `filter: contrast(1) !important;`        | Standard contrast           |
|                 | `filter-contrast-150`   | `filter: contrast(1.5) !important;`      | High contrast               |
|                 | `filter-contrast-200`   | `filter: contrast(2) !important;`        | High-impact contrast        |
| **Grayscale**   | `filter-grayscale-0`    | `filter: grayscale(0) !important;`       | Full color                  |
|                 | `filter-grayscale-100`  | `filter: grayscale(1) !important;`       | Complete grayscale          |
| **Hue-Rotate**  | `filter-hue-rotate-90`  | `filter: hue-rotate(90deg) !important;`  | Shifts hue colors by 90deg  |
|                 | `filter-hue-rotate-180` | `filter: hue-rotate(180deg) !important;` | Shifts hue colors by 180deg |
| **Invert**      | `filter-invert-0`       | `filter: invert(0) !important;`          | Normal colors               |
|                 | `filter-invert-100`     | `filter: invert(1) !important;`          | Fully inverted colors       |
| **Drop Shadow** | `filter-drop-shadow-sm` | `filter: drop-shadow(...) !important;`   | Small shadow offset         |
|                 | `filter-drop-shadow-lg` | `filter: drop-shadow(...) !important;`   | Large shadow offset         |

---

## 📱 Responsive Modifiers

Responsive breakpoint overrides are included out of the box to adapt filter strength on smaller displays:

- **Desktop (default)**: Standard styling applies.
- **Medium Screens (`md: max-width: 1024px`)**: Prefix with `md-` (e.g. `md-filter-grayscale-100`).
- **Small Screens (`sm: max-width: 768px`)**: Prefix with `sm-` (e.g. `sm-filter-blur-sm`).

---

## 🛠️ Interactive Sandbox

The example directory includes a visual visualizer in `demo.html` with preset theme buttons:

- **Cyber Neon**: Applies hue rotation combined with high saturation and large drop shadows.
- **Retro Sepia**: Implements low-brightness sepia styles to create classic warm layouts.
- **Dark Invert**: Flips contrast color bounds completely.

---

## ♿ Accessibility Compliance (WCAG 2.1)

Applying CSS filters directly to text containers or high-importance graphics requires careful design:

### 1. Contrast Minimums (Success Criterion 1.4.3)

> [!IMPORTANT]
> When applying `brightness`, `contrast`, `sepia`, or `grayscale` filters, ensure the final text color contrast against its background remains at least **4.5:1** (or **3:1** for large text).
> **Best Practice**: Apply filters primarily to layout images, background shapes, or decoration cards rather than the parent container holding body text.

### 2. Seizure Prevention & Reduced Motion (Success Criterion 2.3.1)

> [!CAUTION]
> Avoid rapid transitions or animations of high-contrast filter classes (e.g. flashing between `invert-0` and `invert-100` or rotating hue at extreme speeds).
> Keep any filter animations slower than **3 flashes per second** to prevent photosensitive epileptic triggers.

---

## 🚀 Installation & Setup

To view the showcase locally, spin up a basic HTTP server inside the project root:

```bash
# Using standard Node.js npx tool
npx live-server submissions/examples/filter-effect-utilities-ap/

# Or using Python 3
python -m http.server -d submissions/examples/filter-effect-utilities-ap/
```
