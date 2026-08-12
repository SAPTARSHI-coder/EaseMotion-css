# Breadcrumb Text Wrapping Fix

## Description

This example prevents breadcrumb navigation from wrapping onto multiple lines when long labels are present. Instead, long items are truncated with an ellipsis while the breadcrumb remains on a single line.

## Usage

```html
<nav class="breadcrumb">
  <a href="#">Home</a>
  <span>/</span>
  <a href="#" class="truncate">
    Very Long Breadcrumb Item
  </a>
</nav>
```

## CSS

```css
.breadcrumb {
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow-x: auto;
}

.truncate {
  max-width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## Benefits

- Prevents unexpected line wrapping
- Keeps breadcrumb navigation readable
- Handles long labels gracefully
- Responsive and mobile-friendly
- Pure CSS solution