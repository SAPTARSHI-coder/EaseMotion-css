# EaseMotion CSS - Navbar UI Fix

## Issue

The existing EaseMotion CSS website had problems with the navigation bar:

1. Navigation buttons were not aligned properly.
2. Some buttons appeared left-aligned while others appeared right-aligned.
3. The navbar did not have a consistent modern UI.
4. The navbar disappeared while scrolling.
5. The Read Docs page had an inconsistent navbar appearance.
6. The navigation did not provide a polished and professional user experience.

---

## Expected Behaviour

The updated implementation provides:

- Properly centered navigation buttons.
- Consistent spacing between navigation items.
- Glassmorphism-based navbar design.
- Fixed navbar at the top of the screen.
- Responsive navigation layout.
- Hover effects for navigation buttons.
- Active navigation state.
- Consistent appearance across the website.
- Improved Read Docs page navigation.
- Responsive behaviour for desktop, tablet and mobile.

---

## Changes Made

### 1. Navbar Alignment

The navbar uses CSS Grid:

```css
.nav-container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
}