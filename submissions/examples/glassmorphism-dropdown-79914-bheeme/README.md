# Responsive Dropdown with Glassmorphism Styling Component

A responsive, pure HTML/CSS navigation dropdown component featuring frosted glass backdrop blur, smooth scale transitions, interactive hover states, accessibility roles, and click-away backdrop dismiss.

---

### 1. What does this do?
This component provides a sleek glassmorphic dropdown user menu that expands and collapses without JavaScript using the CSS checkbox state trigger (`:checked` selector) and backdrop filter effects.

---

### 2. How is it used?
Place the HTML markup in your layout:

```html
<div class="dropdown-wrapper">
  <!-- Checkbox State Toggle -->
  <input type="checkbox" id="glass-dropdown-toggle" class="dropdown-checkbox" hidden>
  
  <!-- Backdrop Click-Away Dismiss -->
  <label for="glass-dropdown-toggle" class="dropdown-backdrop" aria-label="Close menu"></label>

  <!-- Trigger Button -->
  <label for="glass-dropdown-toggle" class="dropdown-trigger" tabindex="0" role="button" aria-haspopup="true">
    <div class="avatar"><img src="user.jpg" alt="User"></div>
    <span class="user-name">Alex Morgan</span>
  </label>

  <!-- Menu Content Surface -->
  <div class="glass-menu" role="menu">
    <div class="menu-group">
      <a href="#" class="menu-item" role="menuitem">Dashboard</a>
      <a href="#" class="menu-item" role="menuitem">Settings</a>
    </div>
  </div>
</div>
```

Include `style.css` in your project stylesheet.

---

### 3. Why is it useful?
- **Modern Glassmorphism UI:** Built with `backdrop-filter: blur()`, subtle border lighting, translucent background layers, and floating ambient orb accents.
- **Zero JS Engine Performance:** Pure HTML/CSS state toggle ensures lightweight rendering and instant response.
- **Click-Outside Dismiss:** Built-in `<label class="dropdown-backdrop">` handles closing the menu when clicking anywhere on the screen.
- **Accessibility & Mobile Ready:** Supports ARIA roles (`role="menu"`, `role="menuitem"`), keyboard focus rings (`:focus-visible`), responsive alignment, and `prefers-reduced-motion`.
