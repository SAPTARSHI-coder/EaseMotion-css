# Hover Sidebar Documentation

An in-depth guide for integrating and customizing the **Hover Sidebar** component in EaseMotion CSS.

---

## Overview

The Hover Sidebar is a space-saving navigation pattern that stays collapsed (`72px`) by default to maximize viewport real estate, showing only icon rails. When a user hovers or focuses inside (`:focus-within`), the sidebar smoothly expands (`240px`) to reveal full text labels, user profiles, and submenus.

---

## Key Features

- **Icon Rail Efficiency**: Toggles between `--ease-side-collapsed-width` (`72px`) and `--ease-side-expanded-width` (`240px`).
- **Keyboard Traversal**: Utilizes CSS `:focus-within` so keyboard users pressing `Tab` automatically expand and access the full menu.
- **Pure CSS Transitions**: Interpolates sidebar width and text opacity seamlessly via `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Accessible Landmarks**: Fully decorated with `aside`, `aria-label="Main Navigation Sidebar"`, and `role="menubar"`.

---

## File Structure

```text
submissions/docs/hover-sidebar/
├── demo.html     # Live interactive showcase page
├── style.css     # Production CSS stylesheet
└── README.md     # Detailed usage guide & API specification