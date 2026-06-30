# Toast Notifications (Snackbars)

## What does this do?
Provides a lightweight, animated Toast Notification component for displaying non-intrusive, auto-disappearing feedback messages (success, error, warning, info). 

## How is it used?
This submission includes the CSS definition (`style.css`) and a tiny Vanilla JS utility (`ease-toast.js`) to handle DOM injection and automatic cleanup.

1. Include the CSS and JS files in your project.
2. Call the utility methods from your JavaScript:

```javascript
// Quick Helpers
easeToast.success('Your changes have been saved!', 'Success');
easeToast.error('A network error occurred.');
easeToast.warning('Session expiring soon.');
easeToast.info('Update available.');

// Advanced Configuration
easeToast.show({
  title: 'Custom Toast',
  message: 'I stay on screen until you close me.',
  type: 'primary',
  duration: 0 // 0 means sticky (no auto-close)
});
```

### Features
- **Animations:** Smooth slide-in entry and slide-out exit animations using EaseMotion CSS timing curves.
- **Progress Bar:** Visual indicator of the remaining time before the toast auto-closes.
- **Interaction:** Pauses the countdown timer when hovered.
- **Accessibility:** Uses `role="alert"` and `aria-live="assertive"`. Auto-disables animations for `prefers-reduced-motion`.

## Why is it useful?
Handling feedback is a core requirement of any UI shell. Providing a built-in Toast utility with polished CSS animations saves developers from writing complex z-indexing and animation cleanup logic from scratch, making EaseMotion CSS a more complete toolkit.
