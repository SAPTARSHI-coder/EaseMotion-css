# CSS Sidebar Menu

## What does this do?
CSS sidebar navigation menu with collapsible submenu items (checkbox hack), icons, active state highlight, and content area layout.

## How is it used?
```html
<div class="sm-sidebar"><div class="sm-item sm-active"><a href="#"><span class="sm-icon">🏠</span><span>Dashboard</span></a></div><div class="sm-item sm-has-sub"><input type="checkbox" id="sub" class="sm-sub-check"><label for="sub" class="sm-sub-toggle"><span>Settings</span><span class="sm-arrow">▼</span></label><div class="sm-submenu"><a href="#">Sub Item</a></div></div></div>
```

## Why is it useful?
Provides sidebar navigation UI without JavaScript. Icons with labels per item. Collapsible submenus via checkbox hack with smooth animation. Active state accent highlight. Brand header. Responsive width via CSS variable. Ideal for admin panels and dashboards.
