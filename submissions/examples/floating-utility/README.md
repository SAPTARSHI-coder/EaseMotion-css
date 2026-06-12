# Floating Animation Utility

A lightweight, pure CSS animation utility designed for the EaseMotion CSS library. It applies a continuous, subtle up-and-down floating motion to UI elements to enhance interactive layouts without relying on JavaScript.

## 📂 Submission Details

- **Feature:** Floating Animation Utility
- **Folder Location:** `submissions/examples/floating-animation/`
- **Required Files Included:** `demo.html`, `style.css`, `README.md`

## 🛠️ Implementation Details

- **Animation Timeline:** Uses a custom `@keyframes float-motion` timeline to smoothly translate elements along the Y-axis by `-6px`.
- **Performance Optimization:** Includes `will-change: transform;` to leverage hardware acceleration and ensure smooth rendering across modern browsers (Chrome, Firefox, Safari, Edge).
- **Rule Compliance:** Avoids the prohibited `ease-` prefix within the CSS to prevent framework naming collisions, leaving final prefixing to the project maintainers.

## 🚀 How to Use

```html
<div class="floating-utility">
  <!-- Your floating content here -->
</div>
```
