# 🔔 CSS Toast Motion

A collection of beautiful, pure CSS animated toast notifications for modern web applications.

## 🚀 Features

### Toast Types (6 variations)
1. **Success** - Green themed with checkmark
2. **Error** - Red themed with X icon
3. **Warning** - Orange themed with warning icon
4. **Info** - Blue themed with info icon
5. **Slide In** - Slides from right with purple theme
6. **Bounce In** - Bounces into view with pink theme

### Animation Styles
- Slide Down (default)
- Slide In from Right
- Bounce In with Scale
- Auto-dismiss after 3 seconds
- Smooth fade out

## 📂 Files
- `demo.html` - Main HTML structure
- `style.css` - All toast animations
- `readme.md` - Documentation

## 🛠️ How to Use

### Basic Toast
```html
<!-- Trigger Button -->
<label for="toast1" class="trigger-btn">Show Toast</label>

<!-- Hidden Checkbox -->
<input type="checkbox" id="toast1" class="toast-toggle">

<!-- Toast -->
<div class="toast toast-success">
    <div class="toast-icon">✅</div>
    <div class="toast-content">
        <h3>Success!</h3>
        <p>Your message here.</p>
    </div>
    <label for="toast1" class="toast-close">×</label>
</div>