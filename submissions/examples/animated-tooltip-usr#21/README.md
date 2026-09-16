# Animated Tooltip Collection Submission

## 1. What does this do?
It provides a comprehensive collection of animated tooltips with multiple positions (top, right, bottom, left), themes (dark, light, primary, success, warning, danger), and animation styles (fade, scale, slide, bounce). Perfect for adding contextual help, icon labels, and extra information to any UI element.

## 2. How is it used?
Wrap any element in `.tooltip-wrapper` with a position class (`.tooltip-top`, `.tooltip-right`, `.tooltip-bottom`, `.tooltip-left`). Add a theme class (`.tooltip-dark`, `.tooltip-light`, `.tooltip-primary`, etc.) and animation class (`.tooltip-fade`, `.tooltip-scale`, `.tooltip-slide`, `.tooltip-bounce`). Include the tooltip content in a `.tooltip` span with `role="tooltip"` for accessibility.

## 3. Why is it useful?
- Essential UI component for contextual information
- 4 position variants (top, right, bottom, left)
- 6 theme variants (dark, light, primary, success, warning, danger)
- 4 animation styles (fade, scale, slide, bounce)
- Arrow indicators that match tooltip color
- Shows on both hover and keyboard focus
- Interactive examples (icon buttons, truncated text, form help)
- Fully accessible with ARIA labels and `role="tooltip"`
- Mobile-responsive design
- Includes `prefers-reduced-motion` support for accessibility
- Easy to customize colors, animations, and positions
- Maintainer can easily standardize this as `.ease-tooltip-[YOUR_INITIALS]` in the core library.