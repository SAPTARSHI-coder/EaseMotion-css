# Grid and Flexbox Utility Classes Usage Guide

Welcome to the **Grid and Flexbox Utility Classes Usage Guide**! This comprehensive document details how to combine EaseMotion's layout utility classes with animation entrances, handle responsive screens, and resolve common layout-animation conflicts.

---

## 📋 Table of Contents
1. [Flexbox & Animation Blueprint](#1-flexbox--animation-blueprint)
2. [Grid & Staggered Children Blueprint](#2-grid--staggered-children-blueprint)
3. [Common Layout Pitfalls & Solutions](#3-common-layout-pitfalls--solutions)
4. [Responsive Layout Animation Guidelines](#4-responsive-layout-animation-guidelines)

---

## 1. Flexbox & Animation Blueprint

Combining layout classes (`ease-flex`, `ease-items-center`) with animation entries (`ease-fade-in`) allows building premium animated banners, headers, or navbars easily.

```html
<!-- Flexbox Alignment and Fade-In Entrance -->
<div class="ease-flex-row ease-justify-between ease-items-center">
  <div class="ease-fade-in">Brand Logo</div>
  <div class="ease-fade-in ease-delay-100">Nav links</div>
  <div class="ease-fade-in ease-delay-200">Action Button</div>
</div>
```

---

## 2. Grid & Staggered Children Blueprint

For grids (like product lists, pricing charts, or search results), use `ease-grid` along with staggered delay utilities to load items in sequence, guiding the user's attention.

```html
<!-- Grid cols and Staggered entrance cascade -->
<div class="ease-grid-cols-3 ease-gap-4">
  <div class="card ease-fade-in">Grid Card 1</div>
  <div class="card ease-fade-in ease-delay-150">Grid Card 2</div>
  <div class="card ease-fade-in ease-delay-300">Grid Card 3</div>
</div>
```

---

## 3. Common Layout Pitfalls & Solutions

When combining animations and layouts, developers often encounter common CSS conflicts:

### 1. Flex Item Scale Distortion
* **Problem**: Hover zoom scale transforms distort item boundaries because the parent container squishes the layout.
* **Solution**: Apply `flex-shrink: 0` to the animated item.

### 2. Z-Index Stacking Clipping
* **Problem**: Hovered items clip under adjacent grid cards.
* **Solution**: Ensure your hover selector states apply `z-index: 10` to elevate the active layer.

### 3. Shadow Cropping
* **Problem**: Parent borders crop card shadows.
* **Solution**: Avoid using `overflow: hidden` on parent containers, or adjust container padding values.

---

## 4. Responsive Layout Animation Guidelines

Animations can feel overwhelming on mobile screens. We recommend reducing or disabling animations on mobile viewports using media queries:

```css
/* Disable heavy hover translations on touch devices */
@media (max-width: 768px) {
  .ease-hover-float:hover {
    transform: none !important;
    box-shadow: none !important;
  }
}
```
