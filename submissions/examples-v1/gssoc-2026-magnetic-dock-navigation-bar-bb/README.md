# MacOS Floating Dock Navigation Bar

A floating macOS-inspired glassmorphic dock navigation component for EaseMotion CSS featuring magnification hover scaling, active state indicator dots, and popover tooltips.

## 1. What does this do?
This component renders a floating navigation bar fixed near the bottom of the viewport. Hovering over dock icons triggers fluid magnification scaling and smooth tooltip popovers.

## 2. How is it used?
1. Link `style.css` in your HTML template.
2. Structure items in a `.dock-container` element using `.dock-item` and `.dock-btn`.
3. Add active state indicators with `.active-dot` elements dynamically.

## 3. Why is it useful?
- **Desktop Application Aesthetic**: Brings macOS dock navigation physics to modern web applications.
- **Hardware-Accelerated Scale**: Uses CSS `transform: translateY() scale()` for 60 FPS performance.
- **Accessible Attributes**: Buttons include `aria-label` descriptors for screen readers.
