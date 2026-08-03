# Modal with Cursor Glow Animation

### What does this do?
Adds a pure-CSS modal window designed around minimalist aesthetics that opens and closes seamlessly via native form elements and features an interactive directional background glow following the user's mouse position.

### How is it used?
```html
<input type="checkbox" id="modal-toggle-sap" class="modal-checkbox-sap">
<label for="modal-toggle-sap" class="trigger-btn-sap">Open Modal</label>

<div class="modal-overlay-sap">
  <div class="modal-card-sap">
    <div class="glow-grid-sap">
      <div class="sector-sap s-1"></div>
      <div class="glow-effect-sap"></div>
    </div>
    <div class="modal-content-sap">...</div>
  </div>
</div>
```

### Why is it useful?
It allows developers to implement highly interactive, modern security alerts or dialog popups with contextual micro-interactions using standard CSS grid layouts and zero runtime JavaScript dependencies.