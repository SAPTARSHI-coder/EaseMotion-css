# EaseMotion Toast Notification Example

This directory provides a standalone example demonstrating how to combine EaseMotion animation utility classes with Vanilla JavaScript to create a robust Toast Notification system.

## Overview

Toast notifications are transient elements that appear to provide feedback and disappear automatically. Building them requires coordinating CSS animations for entrance/exit with JavaScript for DOM lifecycle management (creation, timing, and removal).

This example implements:
- `ease-slide-in-right` for the entrance animation.
- `ease-fade-out` for the exit animation.
- Automatic dismissal after 3 seconds.
- Proper cleanup (removing elements from the DOM after the exit animation completes).
- Stacking of multiple simultaneous notifications.

## How it Works

### 1. The Container
Toasts are appended to a fixed `#toast-container` positioned at the bottom right. Using `display: flex; flex-direction: column; gap: 10px;` ensures that as new toasts are appended, existing ones are cleanly pushed up without overlapping.

### 2. The JavaScript Lifecycle
When a user clicks a button:
1. JS creates a `div` and adds the `toast` and `ease-slide-in-right` classes.
2. The element is appended to the DOM, triggering the entrance animation.
3. A `setTimeout` is initiated.
4. After 3 seconds, JS removes `ease-slide-in-right` and applies `ease-fade-out`.
5. JS listens for the `animationend` event on the toast. Once the exit animation finishes, it calls `.removeChild()` to safely clear the DOM.

### 3. Accessibility (a11y)
- **ARIA Roles**: The container uses `aria-live="polite"` to ensure screen readers announce new toasts. Errors and warnings dynamically receive `role="alert"`, while success and info messages receive `role="status"`.
- **Reduced Motion**: The `@media (prefers-reduced-motion: reduce)` block in `style.css` strips the animation duration. The JavaScript includes a fallback to instantly remove the element from the DOM if reduced motion is enabled, preventing the element from getting stuck if the `animationend` event doesn't fire.

## Usage
Simply open `index.html` in any modern browser and click the buttons to see the notifications in action. No build tools or bundlers are required.
