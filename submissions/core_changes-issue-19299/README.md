# Animated Sidebar Navigation with Collapse Effect — Issue #19299

## What does this do?
A pure-CSS animated sidebar navigation that collapses from 240px to 72px using a hidden checkbox toggle, with SVG icons, active-state accent bar, hover effects, responsive mobile overlay, and reduced-motion support.

## How is it used?
```html
<input type="checkbox" id="collapse" class="collapse-toggle" />
<aside class="sidebar">
  <div class="sidebar-header">
    <label for="collapse" class="toggle-btn">☰</label>
    <span class="brand-text">EaseMotion</span>
  </div>
  <nav class="nav-list">
    <a href="#" class="nav-item active">
      <span class="nav-icon"><!-- SVG --></span>
      <span class="nav-label">Dashboard</span>
    </a>
  </nav>
</aside>
<main class="main-content">...</main>
```

The hidden checkbox controls the sidebar width via CSS sibling selector (`#collapse:checked ~ .sidebar`). No JavaScript required.

## Why is it useful for EaseMotion CSS?
Sidebar navigation is a foundational UI pattern used in admin dashboards, documentation sites, and web apps. A CSS-only collapsible sidebar with smooth transitions and responsive mobile behavior provides a reusable, accessible pattern that fits EaseMotion CSS's motion-first philosophy.
