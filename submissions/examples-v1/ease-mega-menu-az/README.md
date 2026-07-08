# Mega Menu Component

### What does this do?
Adds `ease-mega-menu-az` — a CSS-only mega menu with a multi-column dropdown grid, chevron rotation, hover and focus activation, icon support, link descriptions, and a footer section.

### How is it used?
The maintainer should copy `style.css` into `components/mega-menu.css` and import it.

```html
<div class="ease-mega-menu-az">
  <button class="ease-mega-menu-trigger-az">
    Products
    <svg class="ease-mega-menu-chevron-az"><!-- chevron icon --></svg>
  </button>
  <div class="ease-mega-menu-dropdown-az">
    <div class="ease-mega-menu-col-az">
      <div class="ease-mega-menu-col-title-az">Column Title</div>
      <a class="ease-mega-menu-link-az" href="#">Link</a>
    </div>
    <div class="ease-mega-menu-footer-az">
      <span>Footer text</span>
      <a href="#">Action &rarr;</a>
    </div>
  </div>
</div>
```

### Why is it useful?
1. **CSS-only activation** — dropdown opens on hover or `:focus-within` (keyboard accessible), no JS required
2. **Multi-column grid** — uses CSS Grid for flexible column layouts, collapses to single column on mobile
3. **Rich content** — icons, descriptions, column titles, dividers, and a footer section all fit naturally
