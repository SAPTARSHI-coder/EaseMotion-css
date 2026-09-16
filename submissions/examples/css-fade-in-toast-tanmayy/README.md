# CSS Fade-In Toast

A pure-CSS animated toast notification utilizing a smooth Fade-In interaction transition, styled to complement Gaming Hub interface aesthetics. It requires zero JavaScript for its state management, making it highly performant and easy to integrate.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a "Toast" or "Achievement Unlocked" notification typical in gaming interfaces. It appears smoothly from the bottom corner with a fade and slight slide-up animation. It uses a pure CSS mechanism (hidden checkbox) to toggle its visibility state without requiring JavaScript event listeners for the show/hide logic.

### 2. How is it used?

The component uses a hidden checkbox (`.toast-trigger`) and the `~` general sibling selector to control the visibility and animation of the `.toast-container` without JS. A label styled as a button triggers the toast, and a label inside the toast styled as an 'X' dismisses it.

```html
<!-- Hidden Checkbox State -->
<input type="checkbox" id="toast-trigger" class="toast-trigger" hidden aria-hidden="true">

<!-- Trigger Button -->
<label for="toast-trigger" class="trigger-btn">
  GRANT REWARD
</label>

<!-- Toast Content -->
<div class="toast-container" role="alert" aria-live="assertive">
  <div class="toast-card ease-glass-card">
    <div class="toast-content">
      <!-- Notification details -->
    </div>
    <!-- Dismiss Button -->
    <label for="toast-trigger" class="toast-close" aria-label="Close Toast">
      <!-- SVG Close Icon -->
    </label>
  </div>
</div>
```

**Customization via CSS Properties:**
You can easily adjust the animation parameters and aesthetics using the exposed custom properties on `:root` or locally:

```css
:root {
  --toast-fade-duration: 0.5s;
  --toast-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --toast-bg: rgba(13, 17, 23, 0.9);
  --toast-border: rgba(48, 54, 61, 0.8);
  --toast-accent: #f2a900; /* Gold achievement color */
  --toast-accent-glow: rgba(242, 169, 0, 0.5);
}
```

### 3. Why is it useful?

Toast notifications are a core element of modern user interfaces, especially in gaming and SaaS dashboards where non-intrusive alerts are necessary. Building these entirely in CSS removes the need for complex JavaScript state management or heavy libraries just to show an alert. It handles transitions and interactions gracefully, fully supports `prefers-reduced-motion` for accessibility, and provides a polished, interactive element out of the box.
