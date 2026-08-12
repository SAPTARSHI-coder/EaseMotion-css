# 🪟 CSS Modal Motion

A collection of beautiful, pure CSS animated modals and popups for modern web applications.

## 🚀 Features

### Modal Animations (6 variations)
1. **Fade In** - Smooth opacity and scale transition
2. **Slide Up** - Slides from bottom with elastic easing
3. **Rotate In** - 3D rotation with perspective
4. **Zoom In** - Scales from small to full size
5. **Bounce In** - Elastic bounce effect
6. **Flip In** - 3D flip with depth perspective

### Design Features
- Blurred backdrop overlay
- Smooth transitions (60fps)
- Close button functionality
- Click outside to close
- Fully responsive design
- Pure CSS implementation (no JS)

## 📂 Files
- `demo.html` - Main HTML structure
- `style.css` - All modal animations
- `readme.md` - Documentation

## 🛠️ How to Use

### Basic Modal
```html
<!-- Trigger Button -->
<label for="modal1" class="trigger-btn">Open Modal</label>

<!-- Hidden Checkbox -->
<input type="checkbox" id="modal1" class="modal-toggle">

<!-- Modal -->
<div class="modal modal-fade">
    <div class="modal-content">
        <label for="modal1" class="modal-close">×</label>
        <h2>Modal Title</h2>
        <p>Modal content here.</p>
        <label for="modal1" class="modal-btn">Close</label>
    </div>
</div>