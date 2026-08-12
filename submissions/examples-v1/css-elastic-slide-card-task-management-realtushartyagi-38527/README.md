# CSS Elastic Slide Card (Task Management Layout)

A highly interactive task card that reveals quick actions through a dynamic, elastic sliding animation when hovered or focused. Perfect for Kanban boards, to-do lists, and task management dashboards.

## 🚀 Features
- **Zero JavaScript:** Built entirely with pure CSS transitions.
- **Elastic Animation:** Uses a custom `cubic-bezier` timing function to create a spring-like sliding effect.
- **Accessible:** Uses `:focus-within` for keyboard navigation support and `prefers-reduced-motion` to disable animations for sensitive users.
- **Auto Dark Mode:** Adapts seamlessly to user system preferences using `@media (prefers-color-scheme: dark)`.
- **Z-Index Layering:** Intelligently layers the front and back panels to hide actions until intended.

## 📁 Installation

1. Copy `style.css` into your project.
2. Structure your HTML according to `demo.html`.

## 🛠️ Usage Example

```html
<div class="ease-task-slide-card" tabindex="0">
  
  <!-- Front Panel (Visible) -->
  <div class="ease-task-front">
    <h3 class="task-title">Design System Revamp</h3>
    <p class="task-summary">Update component library...</p>
  </div>
  
  <!-- Back Panel (Hidden Actions) -->
  <div class="ease-task-back">
    <button class="action-btn">Mark Complete</button>
  </div>
  
</div>
```

## 🎨 Customization (CSS Variables)

Customize the look and feel easily by overriding root variables:

```css
:root {
  /* Change the primary action color */
  --ease-task-primary: #4f46e5;
  
  /* Change the tag colors */
  --ease-task-urgent-bg: #fee2e2;
  --ease-task-urgent-text: #b91c1c;
}
```
