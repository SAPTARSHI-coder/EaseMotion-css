### 1. What does this do?
This component implements a lightweight, pure CSS offcanvas sidebar menu with a smooth slide-in animation and a backdrop overlay.

### 2. How is it used?
It uses the HTML "checkbox hack" (`<input type="checkbox">` combined with `<label>`) to manage the open/close state without any JavaScript. The `.offcanvas-menu` slides in when the checkbox is checked, and clicking the `.offcanvas-overlay` dismisses it.

### 3. Why is it useful?
It fits EaseMotion's philosophy perfectly by providing a modern layout transition and interactive component with zero JavaScript dependencies, keeping the framework fast, lightweight, and beginner-friendly.