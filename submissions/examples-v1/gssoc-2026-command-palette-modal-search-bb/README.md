# Command Palette Modal Dialog

A modal command palette dialog component for EaseMotion CSS featuring `Cmd+K` keyboard shortcuts, backdrop blur filters, search result categories, and keyboard navigation indicators.

## 1. What does this do?
This component renders an interactive command palette triggered by clicking the search bar or pressing `Cmd+K` / `Ctrl+K`. It features smooth modal entrance physics, categorized action lists, and backdrop overlay blur.

## 2. How is it used?
1. Include `style.css` in your project `<head>`.
2. Insert `.palette-overlay` and `.palette-modal` into your DOM body.
3. Listen for keydown events to toggle `.palette-overlay.active` dynamically.

## 3. Why is it useful?
- **Power User Productivity**: Provides instant access to documentation, settings, and workspace actions.
- **Accessible Shortcuts**: Traps focus safely and supports `ESC` key closing.
- **Hardware-Accelerated Physics**: Scale and transform transitions perform cleanly without layout thrashing.
