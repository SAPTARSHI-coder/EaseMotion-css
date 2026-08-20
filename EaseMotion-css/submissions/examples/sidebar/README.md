# Sidebar

**Category:** Navigation
**Issue:** #88692 (v1.3 roadmap — navigation components)

A vertical navigation panel with a sliding accent bar on the active link
and an optional collapsed, icon-only rail variant.

## How to use

```html
<aside class="ease-sidebar">
  <div class="ease-sidebar-header">Dashboard</div>
  <nav class="ease-sidebar-nav">
    <a href="#" class="ease-sidebar-link ease-sidebar-link--active">
      <span>📊</span><span class="ease-sidebar-label">Overview</span>
    </a>
    <a href="#" class="ease-sidebar-link">
      <span>📈</span><span class="ease-sidebar-label">Analytics</span>
    </a>
  </nav>
</aside>
```

Add `ease-sidebar--collapsed` to the outer element to shrink it to an
icon-only rail (labels fade and width animates down).

## Why it fits EaseMotion CSS
- Zero dependencies — pure CSS, no JS required for the core component
- Themeable via CSS custom properties (`--ease-sidebar-accent`, `--ease-sidebar-width`, etc.)
- Respects `prefers-reduced-motion` and `prefers-color-scheme`

## Browser support
Chrome, Firefox, Edge, Safari.
