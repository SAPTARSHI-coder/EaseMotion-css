# Animated Tooltip Component Submission

## 1. What does this do?
It provides a modern, accessible tooltip component with smooth animations, multiple positions (top, bottom, left, right), and various style variants (default, light, success, warning, error).

## 2. How is it used?
Wrap any element in a `.tooltip-wrapper` and add a `.tooltip` span with position classes (`.tooltip-top`, `.tooltip-bottom`, `.tooltip-left`, `.tooltip-right`). Add style variants like `.tooltip-light`, `.tooltip-success`, etc. as needed.

## 3. Why is it useful?
- Tooltips are essential for providing additional context without cluttering the UI
- 4 different positions for flexible placement
- 5 style variants for different use cases (info, success, warning, error)
- Smooth fade and slide animations using EaseMotion CSS
- Fully accessible with proper ARIA attributes (`role="tooltip"`)
- Works with buttons, links, icons, badges, and disabled elements
- Includes `prefers-reduced-motion` support for accessibility
- Mobile-responsive design
- Pure CSS implementation (no JavaScript required)
- Maintainer can easily standardize this as `.ease-tooltip-[YOUR_INITIALS]` in the core library.