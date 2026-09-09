# Neumorphic Soft Shadow Modal

A smooth, accessible, and performant pure CSS modal featuring Neumorphic (soft UI) styling.

## What does this do?
This is a fully functional, JavaScript-free modal dialog that uses the CSS `:target` pseudo-class for state management and features a modern neumorphic design with soft extruded shadows.

## How is it used?
Use an anchor tag `<a>` with an `href` pointing to the modal's `id` to open it, and point back to `#` or another non-existent ID to close it.

```html
<!-- Trigger -->
<a href="#neu-modal" class="neu-button">Open Modal</a>

<!-- Modal Structure -->
<div id="neu-modal" class="neu-modal-overlay">
  <div class="neu-modal-content">
    <div class="neu-modal-header">
      <h2>Modal Title</h2>
      <a href="#" class="neu-close-button">&times;</a>
    </div>
    <div class="neu-modal-body">
      <p>Content goes here...</p>
    </div>
  </div>
</div>
```

## Why is it useful?
It provides a lightweight, highly performant way to display critical content overlays without relying on JavaScript, aligning with EaseMotion's philosophy of powerful CSS-only UI components. The neumorphic styling offers a modern, tactile aesthetic that is highly sought after in contemporary web design.
