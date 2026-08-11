# 🍞 EaseToast Stack — Stackable Toast Notification System

`ease-toast-stack` is a premium, stackable toast notification system designed for the **EaseMotion CSS** library. It extends the base `.ease-toast` pattern with dynamic stacking, responsive position presets, visual countdown timers, pause-on-hover timers, and a smooth CSS grid-based layout reflow when items are added or dismissed.

---

## 📋 Features

- 🔄 **Smooth Reflow Transition** — Utilizes a modern CSS grid `grid-template-rows` transition to smoothly collapse height, margins, and padding when a toast is closed, preventing layout snapping.
- ⏱️ **Hover-Pausing Countdown Timer** — Visual progress countdown line that pauses alongside the JavaScript timeout when the user hovers over a notification, and resumes when they mouse away.
- 📐 **Preset Layout Positions** — Fully supports six positioning combinations (`top-right`, `top-left`, `bottom-right`, `bottom-left`, `top-center`, `bottom-center`).
- 🎨 **Harmonious Variants** — Includes visual styles and custom SVG icons for 4 standard variants: `success`, `error` / `danger`, `warning`, and `info`.
- 🛑 **Stack Limiting & Overflow Control** — Set a maximum number of concurrent visible notifications (FIFO cleanup) and automatically handles window viewport overflow.
- ♿ **WAI-ARIA Compliant** — Includes attributes (`role="status"`, `aria-live="polite"`, `aria-atomic="true"`) for accessible announcements, and respects `prefers-reduced-motion` media queries.

---

## 🚀 Quick Start

### 1. Link Stylesheet & Script

Include both components in your project:

```html
<link rel="stylesheet" href="style.css" />
<script src="script.js" defer></script>
```

### 2. Basic JavaScript Usage

Use the global `toast` object to trigger notifications:

```javascript
// Quick shorthand triggers
toast.success("Success!", "Profile changes saved successfully.");
toast.error("Error Encountered", "Failed to sync changes with the database.");
toast.warning("Warning", "Your session will expire in 5 minutes.");
toast.info("Info Notification", "System updates have been applied.");

// Full customizable config triggers
toast.show({
  title: "Custom Notification",
  message: "This notification has custom behavior.",
  variant: "info",          // success | error | warning | info
  position: "bottom-left",  // top-right | top-left | bottom-right | bottom-left | top-center | bottom-center
  duration: 5000,           // time in ms (set to 0 to disable auto-dismiss)
  maxToasts: 3,             // max active toasts in this container stack
  dismissible: true         // show/hide manual close button
});
```

---

## ⚙️ Configuration Options

The `toast.show(options)` method accepts the following configuration fields:

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `String` | `undefined` | Bold heading text at the top of the toast. |
| `message` | `String` | `undefined` | Description or body text of the toast. |
| `variant` | `String` | `'info'` | Stylistic theme preset: `'success'`, `'error'`, `'warning'`, `'info'`. |
| `position` | `String` | `'top-right'` | Placement on screen: `'top-right'`, `'top-left'`, `'bottom-right'`, `'bottom-left'`, `'top-center'`, `'bottom-center'`. |
| `duration` | `Number` | `4000` | Delay in milliseconds before auto-dismissing. Set to `0` or `null` to disable auto-dismiss. |
| `maxToasts` | `Number` | `5` | Maximum number of concurrent toasts visible in the selected position stack before oldest ones are auto-dismissed (FIFO). |
| `dismissible` | `Boolean` | `true` | When true, renders a close icon button in the top-right corner. |
| `icon` | `String` | `undefined` | Custom SVG markup to override the default variant icon. |

---

## 🎨 Theme Customization (CSS Tokens)

You can customize the appearance of the toast system using root CSS variables:

```css
:root {
  --toast-width: 24rem;                /* Width of individual toasts */
  --toast-border-radius: 0.5rem;       /* Roundness of borders */
  --toast-transition: 300ms cubic-bezier(0.16, 1, 0.3, 1); /* Slide-in duration */
  --toast-collapse-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1); /* Reflow collapse duration */
  
  /* Color theme defaults (can map directly to design system properties) */
  --toast-bg: var(--ease-color-surface, #ffffff);
  --toast-text: var(--ease-color-text, #1e293b);
  --toast-muted: var(--ease-color-muted, #64748b);
  --toast-shadow: var(--ease-shadow-lg, 0 10px 25px rgba(0, 0, 0, 0.08));
}
```

---

## ♿ Accessibility & Motion Preferences

1. **Screen Readers**:
   - Containers are initialized with `role="status"` and `aria-live="polite"`, which informs screen reader users of asynchronous changes without disrupting their current focus.
   - Action close buttons include explicit `aria-label="Close notification"` descriptors.
2. **Reduced Motion**:
   - If a user has enabled reduced motion preferences (`prefers-reduced-motion: reduce`), the transition animations (slide-in, collapse reflow, and scale-out) are deactivated instantly, and the countdown visualizer is hidden to prevent cognitive overload.
