# Collapsible Sidebar

### What does this do?

It shows a sidebar that collapses from a labeled width to a slim icon rail when the menu button is pressed. The labels fade out while the icons stay, and the width animates smoothly. It works with no JavaScript by using a hidden checkbox.

### How is it used?

```html
<input type="checkbox" id="side-toggle" class="side-toggle" />
<aside class="sidebar">
  <label class="side-btn" for="side-toggle" aria-label="Toggle sidebar"><svg>...</svg><span class="side-btn-text">Menu</span></label>
  <a class="side-link is-active" href="#"><svg>...</svg><span>Dashboard</span></a>
</aside>
```

Keep the checkbox before the sidebar so the sibling selector can shrink it. When checked, the sidebar narrows and the link labels fade to zero opacity, leaving the icons.

### Why is it useful?

Dashboards let users collapse the sidebar to reclaim space while keeping quick icon access. This animates a sidebar between an expanded and a mini rail state using only a checkbox and CSS. The width and label transitions are removed under reduced motion.
