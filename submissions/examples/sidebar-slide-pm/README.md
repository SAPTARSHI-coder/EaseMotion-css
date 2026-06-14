# Sidebar Navigation Component

## 1. What does this do?
A vertical sidebar navigation component with slide-in animation, collapsible icon-only mode, active state highlighting, and mobile off-canvas overlay with dark backdrop.

## 2. How is it used?

```html
<aside class="sidebar">
  <div class="sidebar-header">
    <span class="icon">&#9632;</span>
    <span class="brand">My App</span>
  </div>
  <nav class="sidebar-nav">
    <a href="#" class="sidebar-item active">
      <span class="icon">&#9632;</span>
      <span class="label">Dashboard</span>
    </a>
    <a href="#" class="sidebar-item">
      <span class="icon">&#9632;</span>
      <span class="label">Settings</span>
    </a>
  </nav>
</aside>
<div class="sidebar-overlay"></div>
<main class="main-content"><!-- content --></main>
```

Toggle collapsed mode with `.sidebar-collapsed`. On mobile, add `.open` to slide in from left.

## 3. Why is it useful?
EaseMotion CSS has horizontal navbar components but no sidebar for dashboard/admin layouts. This fills the gap with a responsive off-canvas sidebar that collapses to icon-only mode and uses smooth CSS transitions throughout.
