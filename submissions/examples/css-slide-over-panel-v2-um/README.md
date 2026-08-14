# CSS Slide-over Panel v2

## 1. What does this do?
This component renders a responsive sidebar slide-over drawer panel that enters smoothly from the left side of the screen upon button trigger, featuring a blurred backdrop click-to-close overlay.

## 2. How is it used?
Configure the input trigger checkbox and label wrappers to toggle states:
```html
<!-- Checkbox Trigger -->
<input type="checkbox" id="drawer-trigger" class="drawer-trigger">

<!-- Clickable Backdrop -->
<label for="drawer-trigger" class="drawer-backdrop"></label>

<!-- Left Slide-over Panel -->
<div class="drawer-panel" role="dialog" aria-modal="true">
  <header class="drawer-header">
    <label for="drawer-trigger" class="btn-close" role="button">&times;</label>
  </header>
</div>

<main class="dashboard-page">
  <label for="drawer-trigger" class="btn-open" role="button">Open Panel</label>
</main>
```

## 3. Why is it useful?
It provides front-end developers with an accessible left-aligned navigation drawer built natively using checkbox states and CSS transform easing properties, removing bulky JS-driven sidebar plugins.
