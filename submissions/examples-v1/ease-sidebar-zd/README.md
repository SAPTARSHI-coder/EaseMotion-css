# Ease Sidebar Zd

## What does this do?
An animated sidebar navigation component with staggered link entrance, active state highlighting, section labels, user profile, and responsive collapse — pure HTML and CSS.

## How is it used?
```html
<div class="sb-layout">
  <nav class="sb-sidebar" aria-label="Main navigation">
    <div class="sb-brand">
      <div class="sb-brand-icon">E</div>
      <span class="sb-brand-name">Brand</span>
    </div>
    <ul class="sb-nav">
      <li><a class="sb-link sb-link-active" href="#"><span class="sb-link-icon">📊</span> <span>Dashboard</span></a></li>
      <li><a class="sb-link" href="#"><span class="sb-link-icon">📁</span> <span>Projects</span></a></li>
    </ul>
    <div class="sb-footer">
      <div class="sb-user">...</div>
    </div>
  </nav>
  <main class="sb-main">Content here</main>
</div>
```

Use `.sb-link-active` on the current nav link. Section dividers use `.sb-section` + `.sb-section-label`.

## Why is it useful?
Sidebar navigation is a core pattern in dashboards, admin panels, and web applications. This component provides a polished, animated sidebar with hover effects, active states, and responsive collapse.
