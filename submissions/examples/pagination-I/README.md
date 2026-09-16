 
# Pagination Component

Pagination component with active/disabled states and hover animations.

## Files

- demo.html - Interactive demo
- style.css - Pagination styles
- README.md - Documentation

## Classes

- ease-pagination - Base pagination wrapper
- ease-page-item - Individual page item
- ease-page-link - Page link
- ease-page-active - Active state
- ease-page-disabled - Disabled state
- ease-page-ellipsis - Ellipsis separator
- ease-pagination-small/large - Size variants
- ease-pagination-rounded - Rounded variant
- ease-pagination-success/danger/dark - Color variants

## Usage

```html
<div class="ease-pagination">
    <div class="ease-page-item ease-page-disabled">
        <a href="#" class="ease-page-link">«</a>
    </div>
    <div class="ease-page-item ease-page-active">
        <a href="#" class="ease-page-link">1</a>
    </div>
    <div class="ease-page-item">
        <a href="#" class="ease-page-link">2</a>
    </div>
    <div class="ease-page-item">
        <a href="#" class="ease-page-link">»</a>
    </div>
</div>