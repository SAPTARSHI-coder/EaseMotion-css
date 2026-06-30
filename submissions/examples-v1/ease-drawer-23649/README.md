# Off-Canvas Drawer (left & right)

## What does this do?

An off-canvas sliding panel component that slides into view from either the left or right edge of the screen, combined with a blurred overlay backdrop to focus user attention on mobile menus, navigation links, filters, or shopping carts.

## How is it used?

Add the drawer and overlay to your HTML structure:

```html
<!-- The overlay backdrop -->
<div class="ease-drawer-overlay" id="my-overlay"></div>

<!-- Left drawer panel -->
<div class="ease-drawer ease-drawer-left" id="my-left-drawer">
  <div class="ease-drawer-header">
    <h3 class="ease-drawer-title">Navigation</h3>
    <button data-close-drawer class="ease-drawer-close">✕</button>
  </div>
  <div class="ease-drawer-body">
    <!-- Panel content goes here -->
  </div>
  <div class="ease-drawer-footer">
    <!-- Optional footer content -->
  </div>
</div>
```

Toggle the visibility of the drawer and overlay by adding/removing the `.ease-drawer-open` class:

```javascript
// Open
drawer.classList.add("ease-drawer-open");
overlay.classList.add("ease-drawer-open");

// Close
drawer.classList.remove("ease-drawer-open");
overlay.classList.remove("ease-drawer-open");
```

## Why is it useful?

Drawers are crucial for responsive design on smaller viewports. While the framework provides a static sidebar, mobile navigations require animated off-canvas drawers that conserve valuable screen estate. This component integrates seamlessly with EaseMotion CSS's built-in easing functions, dark/light theme tokens, and shadow system to deliver a premium, native-feeling user experience.
