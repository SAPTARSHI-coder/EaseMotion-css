# Morphing Dropdown Documentation

An in-depth guide for integrating and customizing the **Morphing Dropdown** navigation component in EaseMotion CSS.

---

## Overview

The Morphing Dropdown is a pure CSS navigation menu pattern featuring fluid container size adjustment and smooth popover scaling as users hover or focus across navigation items. It mimics complex JavaScript morphing menus using pure CSS `:focus-within` and `:hover` triggers.

---

## Key Features

- **Pure CSS Morphing**: Smoothly interpolates `opacity`, `transform`, and `width` on popover elements.
- **Keyboard Traversal**: Uses `:focus-within` so keyboard users (`Tab`, `Shift+Tab`) can step through submenus naturally.
- **Flexible Popover Widths**: Standard (`240px`) or Wide (`340px`) utility classes for varied link densities.
- **ARIA Compliant**: Fully decorated with `role="menubar"`, `role="menu"`, and `role="menuitem"` semantics.

---

## File Structure

```text
submissions/docs/morphing-dropdown/
├── demo.html     # Live interactive showcase page
├── style.css     # Production CSS stylesheet
└── README.md     # Detailed usage guide & API specification