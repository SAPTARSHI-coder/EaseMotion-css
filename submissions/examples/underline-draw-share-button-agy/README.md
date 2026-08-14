# Underline Draw Share Button

This component provides a premium, responsive **Underline Draw Share Button** inspired by SaaS Dashboard design patterns, offering sleek drawing highlights and staggered dropdown social links.

---

### 1. What does this do?

It creates an interactive sharing button featuring 5 unique hover underline-draw directions (Center-Out, Left-to-Right, Right-to-Left, Dual Border, and Corner Frame) that smoothly reveal a pure CSS social sharing dropdown menu upon user interaction.

---

### 2. How is it used?

Configure share buttons using the base class `.ease-share-btn` combined with a drawing variation (e.g., `.ease-draw-center`):

```html
<!-- 1. Center-Out Draw Share Button -->
<button class="ease-share-btn ease-draw-center">Share Document</button>

<!-- 2. Left-to-Right Draw Share Button -->
<button class="ease-share-btn ease-draw-ltr">Share Document</button>

<!-- 3. Dual Line Border Draw Share Button -->
<button class="ease-share-btn ease-draw-dual">Share Document</button>

<!-- 4. Corner Frame Draw Share Button -->
<button class="ease-share-btn ease-draw-corners">Share Document</button>
```

To create an interactive dropdown menu, wrap the elements inside a container with a native checkbox toggle:

```html
<div class="share-menu-container">
  <!-- Checkbox controller -->
  <input
    type="checkbox"
    id="share-menu"
    class="state-input menu-toggle-input"
  />

  <label for="share-menu" class="ease-share-btn ease-draw-center">
    <span>Interactive Share</span>
  </label>

  <!-- Dropdown Links -->
  <div class="share-dropdown-menu">
    <a href="#" class="dropdown-item">Share to Twitter/X</a>
    <a href="#" class="dropdown-item">Share to LinkedIn</a>
  </div>
</div>
```

---

### 3. Why is it useful?

It fits EaseMotion CSS's core philosophy of **minimalist and high-performance layout micro-interactions** by replacing heavy jQuery or React-based overlay scripts with lightweight, CSS-only translation/scaling properties.

It provides immediate tactile feedback when hovered or selected, drawing clean boundaries around elements, which increases conversion on sharing buttons on modern SaaS platforms. The component is also fully accessible, incorporating high-contrast borders and automatic animation disabling for users with `prefers-reduced-motion` enabled.

---

### Technical Breakdown

#### Customization Options

The underline speeds, thickness, and color variables can be customized in the playground:

- **Speeds**: `--draw-speed: 0.15s` (Fast), `0.3s` (Normal), `0.5s` (Slow).
- **Thickness**: `--draw-thickness: 1px`, `2px`, `4px`.
