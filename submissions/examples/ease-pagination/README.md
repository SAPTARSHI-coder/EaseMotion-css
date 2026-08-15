# Ease Pagination

## What does this do?
This component provides a premium, responsive, and fluidly animated CSS-only pagination interface with glassmorphic styles, elastic hover motion, and distinct active/disabled states.

## How is it used?
Wrap page list elements (`.ease-page-item`) inside an `.ease-pagination` list container, using the `.ease-page-link` on the anchors:

```html
<nav aria-label="Page navigation">
  <ul class="ease-pagination">
    <!-- Disabled Prev Link -->
    <li class="ease-page-item ease-page-disabled">
      <a class="ease-page-link" href="#" tabindex="-1">«</a>
    </li>
    
    <!-- Active Link -->
    <li class="ease-page-item ease-page-active">
      <a class="ease-page-link" href="#">1</a>
    </li>
    
    <!-- Standard Link -->
    <li class="ease-page-item">
      <a class="ease-page-link" href="#">2</a>
    </li>
  </ul>
</nav>
```

### Design Variants
Apply modifier classes to the main wrapper to change shapes and styling:
* **Rounded Pills:** `.ease-pagination-pill`
* **Clean/Borderless:** `.ease-pagination-clean`

---

## Why is it useful?
It provides a completely JavaScript-free pagination solution that elevates standard list elements with advanced CSS attributes (e.g. spring easing transformations, backdrop filtering, and soft radial shadows), delivering a high-end, tactile interface feel that aligns perfectly with the EaseMotion CSS design philosophy.

---

## Features
- **Elastic Transitions:** Snappy scale-and-lift motion on hover via custom spring `cubic-bezier(0.34, 1.56, 0.64, 1)` easing.
- **Visual Depth:** Uses glassmorphism (`backdrop-filter`) and soft glowing dropshadows (`box-shadow`) to blend seamlessly with dark dashboard layouts.
- **Accessibility & Focus Rings:** Explicit `:focus-visible` outlines with color contrast alignment, full support for `aria-label`, and automatic suppression of animations for users with `prefers-reduced-motion: reduce`.
- **Pure CSS Layout:** Lightweight, performant, and zero runtime dependencies.
