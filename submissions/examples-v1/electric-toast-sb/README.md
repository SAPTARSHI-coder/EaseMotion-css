# ⚡ Electric Toast Component

A responsive, accessible toast component for EaseMotion CSS.

## Features
- Pure CSS + minimal JavaScript
- 3 variants: Info, Success, Error
- Slide-in/slide-out animations
- Auto-dismiss after 3 seconds
- Close button support
- Responsive on mobile
- Uses EaseMotion CSS variables

## Usage
```html
<!-- Add the toast container -->
<div id="toast-container" class="ease-toast-container"></div>

<!-- Call the function -->
<button onclick="showToast('info')">Show Info Toast</button>
<script>
  function showToast(type) {
    // ... (see demo.html for full implementation)
  }
</script>