# Foldable Device Viewport Segment Utilities

Relates to feature request **#41203**.

## 1. What does this do?

Provides a responsive layout utility (`.ease-fold-layout`) that leverages CSS Viewport Segment Environment Variables to automatically adapt to dual-screen and foldable devices (such as the Microsoft Surface Duo or Samsung Galaxy Fold).

## 2. Why is this useful for EaseMotion CSS?

Foldable devices are becoming increasingly common, but standard responsive breakpoints (`max-width`) aren't sufficient for them. When a user spans an application across two screens, the browser window is technically very wide, but there is a physical hinge in the middle. 

If we rely purely on `max-width`, we might place content directly underneath the physical hinge, making it unreadable. The `horizontal-viewport-segments` media query allows us to detect this specific hardware state and snap our layout to perfectly align with the dual screens, avoiding the hinge. Adding this utility positions EaseMotion CSS as a forward-thinking library prepared for next-generation hardware.

## 3. How is it used?

**CSS Mechanism**
```css
/* Standard Single-Screen Layout */
.ease-fold-layout {
  display: grid;
  grid-template-columns: 1fr 2fr; /* Standard proportion */
  gap: 1rem;
}

/* Dual-Screen / Foldable Layout */
@media (horizontal-viewport-segments: 2) {
  .ease-fold-layout {
    /* Split evenly to perfectly map 1:1 with the physical screens */
    grid-template-columns: 1fr 1fr;
    
    /* Use the physical hinge size as the gap */
    gap: env(viewport-segment-width 0 0, 2rem);
  }
}
```

## 4. How to Test

Since most people don't have a foldable device handy:
1. Open the demo in Google Chrome.
2. Open Developer Tools (<kbd>F12</kbd>).
3. Toggle the Device Toolbar (<kbd>Ctrl+Shift+M</kbd>).
4. Select a foldable device from the dropdown (e.g., **Surface Duo**).
5. Click the "Toggle dual-screen mode" icon (looks like a book) next to the rotate icon.
6. The layout will instantly adapt, splitting 50/50 and changing the alert box to green.
