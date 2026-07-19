# Mega Menu — CSS Hover

A CSS-only mega dropdown navigation triggered by hover. Multi-column grid layout with icons, section headers, and responsive collapsing.

## Features

- Hover-triggered mega dropdown with smooth reveal
- CSS Grid multi-column layout (4 columns)
- Section headers with icons
- Responsive — collapses to single column on mobile
- Sticky navbar, dark theme

## Usage

Add a `.mega-trigger` list item to your navbar with a `.mega-menu` child containing `.mega-col` columns:

```html
<li class="mega-trigger">
  <a href="#">Products ▾</a>
  <div class="mega-menu">
    <div class="mega-col">...</div>
  </div>
</li>
```
