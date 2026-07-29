# Pure CSS Draw-Border Popover

### 1. What does this do?
This is a responsive, highly configurable, pure CSS interactive Popover that features a smooth "line-drawing" micro-border animation transition upon trigger activation.

### 2. How is it used?
Assemble the HTML structure utilizing the checkbox-toggle hook pattern:
```html
<div class="checkout-popover-container">
  <input type="checkbox" id="popover" class="popover-toggle">
  <label for="popover" class="popover-trigger">Open</label>
  <div class="popover-content">
    <!-- Popover interior content here -->
  </div>
</div>