# Modal Backdrop Mobile Fix

Fixes the issue where modal backdrop overlays (`.ease-modal-backdrop`) fail to cover the full viewport on mobile devices when browser toolbars dynamically hide.

**What does this do?**
It updates the `.ease-modal-backdrop` to use `bottom: 0` alongside modern `height: 100dvh` (Dynamic Viewport Height). This ensures the overlay strictly adheres to the exact visible edges of the screen, dynamically responding to UI changes like scrolling.

**How is it used?**
The styling applies automatically to the `.ease-modal-backdrop` element.

```html
<div class="ease-modal-backdrop">
  <!-- Modal Content -->
</div>
```

**Why is it useful?**
It prevents the UI from looking broken (displaying a gap at the bottom of the screen) when users scroll to view long modal content on mobile devices.
