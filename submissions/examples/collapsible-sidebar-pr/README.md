# Collapsible Dropdown Sidebar Navigation

## 1. What does this do?
A documentation sidebar with collapsible dropdown sections that
expand and collapse smoothly on click.

## 2. How is it used?

```html
<div class="sidebar-section">
  <div class="sidebar-section-header">
    <span>Section Title</span>
    <span class="sidebar-arrow">▶</span>
  </div>
  <div class="sidebar-items">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
  </div>
</div>
```

Toggle the `.open` class on `.sidebar-section` via JS to expand/collapse.

## 3. Why is it useful?
Collapsible sidebars are essential for documentation sites with many
sections. This uses only CSS max-height transitions and a JS class
toggle — no libraries needed — fitting EaseMotion CSS's philosophy
of lightweight pure-CSS utilities.