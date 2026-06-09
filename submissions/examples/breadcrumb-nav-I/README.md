# Breadcrumb Component

Breadcrumb navigation component with customizable separator via CSS variable.

## Files

- demo.html - Interactive demo
- style.css - Breadcrumb styles
- README.md - Documentation

## Classes

- ease-breadcrumb - Breadcrumb wrapper
- ease-breadcrumb-item - Individual breadcrumb item
- ease-breadcrumb-dark - Dark theme variant

## CSS Variables

- --ease-breadcrumb-sep - Separator character (default: '›')

## Usage

```html
<div class="ease-breadcrumb">
  <div class="ease-breadcrumb-item">
    <a href="#">Home</a>
  </div>
  <div class="ease-breadcrumb-item">
    <a href="#">Products</a>
  </div>
  <div class="ease-breadcrumb-item">
    <span>Electronics</span>
  </div>
</div>

<!-- Custom separator -->
<div class="ease-breadcrumb" style="--ease-breadcrumb-sep: '/';">...</div>
```
