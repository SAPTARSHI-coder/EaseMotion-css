# Floating Action Button with Expandable Menu

**EaseMotion CSS UI Component Showcase** · `submissions/examples/ease-floating-action-button-menu-expand-um/`

A sleek, animated Floating Action Button (FAB) that expands into a vertical menu of secondary actions on click.

---

## 1. What does this do?

This component provides a fully functional, zero-JavaScript expandable FAB menu using the CSS checkbox hack. It features smooth staggered fanning animations, bounce easing, and morphing toggle icons (plus/close), entirely driven by CSS transitions.

## 2. How is it used?

Include the CSS and use the following HTML structure. The unique `-um` suffix prevents class name collisions.

```html
<div class="ease-fab-wrapper-um">
  <!-- Hidden toggle -->
  <input type="checkbox" id="fab-toggle" class="ease-fab-toggle-um">
  
  <!-- Menu Items -->
  <ul class="ease-fab-menu-um">
    <li>
      <a href="#" class="ease-fab-item-um" data-label="Create Document">
        <!-- Icon SVG here -->
      </a>
    </li>
    <!-- Add more items as needed -->
  </ul>

  <!-- Main Button -->
  <label for="fab-toggle" class="ease-fab-main-um">
    <!-- Plus / Close SVGs here -->
  </label>
</div>
```

## 3. Why is it useful?

Expandable FABs are a very common design pattern in modern web apps for grouping primary actions in a space-saving way. Implementing the complex staggered animations, tooltip positioning, and icon morphing in pure CSS eliminates the need for expensive React/JS state management just to open a menu. It aligns with the EaseMotion philosophy by relying on hardware-accelerated transitions and semantic HTML structure.
