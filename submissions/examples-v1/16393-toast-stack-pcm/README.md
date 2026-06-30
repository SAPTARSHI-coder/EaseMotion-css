# Toast Notification Stacking & Positioning

1. What does this do? Provides a toast notification system with proper vertical stacking, 5 positioning options (top-right, top-left, bottom-right, bottom-left, top-center), 4 type variants (success, error, warning, info) with colored left borders and icons, entrance/exit animations, auto-dismiss with progress bar, and manual close button.

2. How is it used? Call the global `showToast({ message, type, title, duration, position })` function — it creates a positioned container on first use, appends each toast with slide-in animation, stacks them vertically, and auto-dismisses after the specified duration.

```html
<!-- Single toast -->
<script>
  showToast({
    message: "File saved",
    type: "success",
    title: "Success",
    duration: 4000,
    position: "top-right",
  });
</script>

<!-- Stack 5 toasts across different positions -->
<script>
  showToast({ message: "Toast 1", type: "info", position: "top-right" });
  showToast({ message: "Toast 2", type: "error", position: "bottom-left" });
  // ... they auto-stack in their respective containers
</script>

<!-- Manual dismiss -->
<script>
  // The close button × is automatically added to each toast
  // Or call dismissToast(element) programmatically
</script>
```

3. Why is it useful? Toast notifications are a fundamental UI pattern; the existing component lacks stacking and positioning — this enhancement adds a production-ready toast manager with 5 positions, 4 types, auto-dismiss, stacking, and accessibility, all fitting EaseMotion CSS's philosophy of composable, animated utilities.

Fixes #16393
