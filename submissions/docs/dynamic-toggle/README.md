# Dynamic Toggle Documentation

An in-depth guide for integrating and customizing the **Dynamic Toggle** component in EaseMotion CSS.

---

## Overview

The Dynamic Toggle component is a pure CSS switch control designed for settings panels, form controls, and preference toggles. It provides fluid thumb translation, ambient glow states, and seamless accessible interaction without JavaScript dependencies.

---

## Key Features

- **Pure CSS Motion**: Operates using standard HTML `<input type="checkbox">` elements and CSS `:checked` state selectors.
- **Hardware-Accelerated Slide**: Translates the inner thumb along `X` coordinates via CSS `transform`.
- **Ambient State Glow**: Projects diffuse box-shadow glows (`var(--ease-tgl-glow)`) when toggled on.
- **Form & Accessibility Ready**: Pairs with native `<label>` tags for full screen reader support and keyboard control (`Space`).
- **Reduced Motion Fallback**: Disables translation physics when `prefers-reduced-motion: reduce` is active.

---

## File Structure

```text
submissions/docs/dynamic-toggle/
├── demo.html     # Live interactive showcase page
├── style.css     # Production CSS stylesheet
└── README.md     # Detailed usage guide & API specification