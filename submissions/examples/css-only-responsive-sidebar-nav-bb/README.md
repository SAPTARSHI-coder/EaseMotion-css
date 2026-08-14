# CSS-Only Responsive Sidebar Navigation

A collapsible sidebar navigation that converts to an overlay on mobile using the CSS checkbox hack. Pure CSS, no JavaScript.

## What does this do?

Provides a fixed sidebar navigation on desktop that slides in as an overlay on mobile. The toggle uses a hidden checkbox and `:checked` selector — no JavaScript required.

## How is it used?

```html
<!-- Hidden checkbox for toggle state -->
<input type="checkbox" id="sidebar-toggle" class="sidebar-toggle" />

<div class="sidebar-layout">
  <aside class="sidebar">
    <div class="sidebar__header">
      <span class="sidebar__brand">Brand</span>
      <label for="sidebar-toggle" class="sidebar__close">&times;</label>
    </div>
    <nav class="sidebar__nav">
      <a href="#" class="sidebar__link sidebar__link--active">Dashboard</a>
      <a href="#" class="sidebar__link">Settings</a>
    </nav>
  </aside>

  <div class="sidebar-main">
    <div class="sidebar-topbar">
      <label for="sidebar-toggle" class="sidebar-burger">Menu</label>
    </div>
    <div class="sidebar-content">
      <!-- page content -->
    </div>
  </div>
</div>
```

## Why is it useful?

- **Zero JavaScript** — toggle uses CSS checkbox hack
- **Responsive** — fixed sidebar on desktop, overlay on mobile
- **Accessible** — `aria-label` on navigation, `focus-visible` styles
- **Reduced motion** — transitions disabled when `prefers-reduced-motion` is active
- **Production-ready** — includes active states, section titles, icons, and mobile backdrop
