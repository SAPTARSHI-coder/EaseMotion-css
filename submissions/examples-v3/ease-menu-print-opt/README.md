# EaseMenu Print Optimization Module

Print-specific stylesheet resets and overrides for the `ease-menu` component to ensure ink economy and maximum readability on physical paper.

## What is it?
This print overlay module adapts the `ease-menu` component for printing (`@media print`). When printing, standard menus often waste substantial printer ink due to dark/colored backgrounds, card elevations (box-shadows), and custom gradients. 

This stylesheet strips those decorative elements, resets container backgrounds to `transparent`, outlines them with a clean `1px` border, and formats text labels to solid high-contrast black (`#000`) for absolute readability on physical pages.

---

## How to use it?

### 1. Include the Stylesheets
Include the core framework styling along with the print-optimization stylesheet:
```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="style.css" />
```

### 2. Standard Structure
Use standard menu wrappers and list items:
```html
<div class="ease-menu">
  <div class="ease-menu-header">Menu Group</div>
  <a class="ease-menu-item">Option 1</a>
  <div class="ease-menu-divider"></div>
  <a class="ease-menu-item">Option 2</a>
</div>
```

---

## Technical Details

We implement a clean media reset to save toner ink:
```css
@media print {
  .ease-menu {
    background: transparent !important;
    border: 1px solid #333333 !important;
    box-shadow: none !important;
  }
  
  .ease-menu-item {
    background: transparent !important;
    color: #000000 !important;
  }
}
```

## Why it fits EaseMotion CSS
A robust, production-ready design system must cover all media surfaces. While menus are designed to look vibrant and float on digital screens with shadow overlays, printing them verbatim creates visual clutter. This print optimization ensures that static document exports render beautifully and legibly.
