# Animated Toast Notification Component

An elegant, modern, accessible, and completely framework-independent toast notification system featuring fluid hardware-accelerated animations and interactive countdown timers.

---

### 1. What does this component do?

This component provides a lightweight, responsive, and reusable toast notification system to display non-disruptive feedback messages (Success, Error, Warning, and Info variants) to users. The notifications automatically stack vertically and dismiss after 5 seconds, featuring a visual progress indicator that pauses on mouse hover and resumes when the mouse leaves.

---

### 2. How is it used?

#### Example HTML Usage

To use the toast notification, add the container once to your page body:

```html
<div id="toast-container" aria-live="polite"></div>
```

Ensure the layout classes and theme styles from `style.css` are imported. Then, use the vanilla Javascript `ToastManager` class to trigger notifications programmatically:

```javascript
// Initialize the Toast Manager
const toast = new ToastManager("toast-container");

// Trigger a toast notification
toast.create({
  type: "success", // Options: 'success', 'error', 'warning', 'info'
  title: "Changes Saved",
  message: "All your updates have been saved successfully.",
  duration: 5000, // Auto-dismiss after 5 seconds (5000ms)
});
```

---

### 3. Why is it useful?

This component aligns perfectly with EaseMotion CSS's core philosophy of providing **reusable, lightweight, and high-performance UI components**:

- **Zero External Dependencies:** Built using standard web APIs (HTML5, Vanilla CSS, and Vanilla JS). No React, Vue, jQuery, Tailwind, or external icon libraries are required.
- **Hardware-Accelerated Transitions:** Progress bar countdown animations use GPU-accelerated CSS `transform: scaleX()` rather than modifying layout-dependent `width` properties, minimizing browser reflows and keeping animations running at 60+ FPS.
- **Fully Accessible:** Out of the box support for ARIA attributes (`role="alert"`/`role="status"`, `aria-live`), visible focus rings, high color contrast themes, and complete keyboard navigation.
- **Fluid Layout Stacking:** Stacking list adjustments use transitioning `max-height` and `margin` values, offering buttery-smooth stack collapse animations when individual items are removed.
- **Built-in Theme Support:** Built with highly maintainable CSS Custom Properties (CSS variables) that automatically respect system prefers-color-scheme or manual Light/Dark overrides.
