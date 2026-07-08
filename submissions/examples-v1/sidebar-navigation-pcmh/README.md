# Sidebar Navigation — Issue #7524

## Overview

Collapsible sidebar navigation for dashboards. Supports expanded/collapsed modes, nested submenus, active state highlighting, badges, and responsive off-canvas mobile overlay.

## Features

- Fixed sidebar with smooth width transition (260px ↔ 64px)
- Collapsed icon-only mode
- Nested submenus with slide-toggle
- Active item: primary tint + left border accent
- Badge support for notification counts
- Section headers for nav grouping
- Responsive: off-canvas overlay on mobile

## States

| State | Behavior |
|-------|----------|
| Expanded | Full width with labels, badges, submenus |
| Collapsed | Icon-only (64px) |
| Mobile | Off-canvas with dark overlay |
| Active | Primary tint + left accent border |
| Submenu | Slide-toggle open/close |

## Usage

```html
<aside class="ease-sidebar">
  <div class="ease-sidebar-header">
    <div class="ease-sidebar-logo">E</div>
    <span class="ease-sidebar-brand">EaseMotion</span>
    <button class="ease-sidebar-toggle">◀</button>
  </div>
  <ul class="ease-sidebar-nav">
    <li><a class="ease-sidebar-item active" href="#">Dashboard</a></li>
  </ul>
</aside>
<main class="ease-main-content"><!-- content --></main>
```

## Files

- `demo.html` — Full dashboard demo with nav, submenus, responsive behavior
- `style.css` — Sidebar layout, collapse, submenus, active state, responsive
- `README.md` — This documentation
