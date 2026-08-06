 
# Breadcrumb with Animated Separator

Breadcrumb navigation with animated separator icons — chevrons rotate, scale, or slide on hover.

## Files

- demo.html - Interactive demo
- style.css - Breadcrumb styles
- README.md - Documentation

## Classes

- ease-breadcrumb - Container
- breadcrumb-link - Navigation link
- breadcrumb-current - Current page
- breadcrumb-separator - Default separator
- breadcrumb-separator-rotate - Rotates on hover
- breadcrumb-separator-scale - Scales on hover
- breadcrumb-separator-slide - Slides on hover
- breadcrumb-separator-double - Double chevron
- breadcrumb-separator-slash - Slash separator
- breadcrumb-separator-dot - Dot separator

## Usage

```html
<div class="ease-breadcrumb">
    <a href="#" class="breadcrumb-link">Home</a>
    <span class="breadcrumb-separator-rotate">›</span>
    <a href="#" class="breadcrumb-link">Products</a>
    <span class="breadcrumb-separator">›</span>
    <span class="breadcrumb-current">Electronics</span>
</div>