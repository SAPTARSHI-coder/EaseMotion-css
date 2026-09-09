# Neumorphic Navbar Documentation

An in-depth guide for integrating and customizing the **Neumorphic Navbar** component in EaseMotion CSS.

---

## Overview

The Neumorphic Navbar is a soft-UI navigation bar component built using soft light and drop shadow techniques (`box-shadow: 6px 6px 12px ...`). It transitions menu links between extruded resting states and inset pressed active states, providing tactile feedback without external JavaScript dependencies.

---

## Key Features

- **Soft Tactile UI**: Dual drop shadow highlights (`var(--ease-neu-shadow-dark)` and `var(--ease-neu-shadow-light)`).
- **Pressed Inset States**: Active or clicked links switch from outer shadows to `box-shadow: inset ...`.
- **Pure CSS Mobile Drawer**: Toggles responsive overlay submenus on mobile viewports using pure CSS checkbox state management (`:checked`).
- **Accessible Design**: Annotated with semantic HTML5 `<nav>`, `role="menubar"`, `role="menuitem"`, and `:focus-visible` focus rings.

---

## File Structure

```text
submissions/docs/neumorphic-navbar/
├── demo.html     # Live interactive showcase page
├── style.css     # Production CSS stylesheet
└── README.md     # Detailed usage guide & API specification