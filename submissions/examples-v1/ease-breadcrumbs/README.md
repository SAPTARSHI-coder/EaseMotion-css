# Breadcrumbs Component

**Implements:** Issue #6584  
**Type:** New Component

## Overview

A fully accessible, animated breadcrumb navigation component
built with EaseMotion CSS design tokens.

## Variants

| Class                       | Separator           |
| --------------------------- | ------------------- |
| `ease-breadcrumb`           | `/` slash (default) |
| `ease-breadcrumb--chevron`  | `›` chevron         |
| `ease-breadcrumb--dot`      | `•` dot             |
| `ease-breadcrumb--pill`     | pill buttons        |
| `ease-breadcrumb--ghost`    | minimal underline   |
| `ease-breadcrumb--animated` | slide-in entrance   |

## Basic Usage

```html
<ol class="ease-breadcrumb" aria-label="Breadcrumb">
  <li class="ease-breadcrumb__item">
    <a class="ease-breadcrumb__link" href="#">Home</a>
  </li>
  <li class="ease-breadcrumb__item">
    <a class="ease-breadcrumb__link" href="#">Components</a>
  </li>
  <li class="ease-breadcrumb__item ease-breadcrumb__item--active">
    Breadcrumb
  </li>
</ol>
```

## Animated + Chevron combo

```html
<ol class="ease-breadcrumb ease-breadcrumb--chevron ease-breadcrumb--animated">
  ...
</ol>
```

## Accessibility

- Uses semantic `<ol>` list
- Includes `aria-label="Breadcrumb"` on nav
- Active item has no link (not interactive)
- Responsive: collapses middle items on mobile

## Files

| File        | Purpose                          |
| ----------- | -------------------------------- |
| `style.css` | Full breadcrumb component styles |
| `demo.html` | All variants with live demo      |
| `README.md` | This file                        |
