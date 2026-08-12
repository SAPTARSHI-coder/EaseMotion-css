# Perspective Tilt Tabs

CSS-only tabs with a subtle 3D perspective tilt effect for responsive dashboard layouts.

## What does this do?

Creates pure CSS tabbed navigation where the active tab tilts toward the viewer using a `rotateX` transform and slight scale, creating a clean depth effect. No JavaScript required.

## How is it used?

Include `style.css` and use the expected markup:

```html
<div class="perspective-tilt-tabs">
  <input type="radio" name="tabs" id="tab1" checked />
  <label for="tab1">Tab One</label>
  <div class="tab-panel">...</div>
  <!-- more tabs -->
</div>
```

Customize via CSS custom properties:

```css
.perspective-tilt-tabs {
  --tabs-duration: 0.3s;
  --tabs-easing: ease;
  --tabs-tilt-angle: 5deg;
  --tabs-accent-color: #6366f1;
  --tabs-scale: 1.05;
}
```

## Why is it useful?

Provides a lightweight, accessible tab component with a polished 3D feel that integrates into dashboard UIs without adding JavaScript dependencies.
