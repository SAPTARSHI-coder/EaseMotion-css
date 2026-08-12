# Breadcrumb Trail Path

An animated breadcrumb navigation trail with sliding arrow indicators between items. Each crumb fades and slides in sequentially, and the active crumb is highlighted with an underline indicator.

## HTML Structure

```html
<nav class="ease-breadcrumb-trail-path">
  <a href="#" class="crumb">Home</a>
  <span class="arrow">&rarr;</span>
  <a href="#" class="crumb active">Products</a>
</nav>
```

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--crumb-color` | `#6b7c93` | Default text color for breadcrumb links |
| `--crumb-active` | `#1a202c` | Text and underline color for the active crumb |
| `--crumb-hover` | `#4a6cf7` | Hover text color and background tint |
| `--arrow-color` | `#cbd5e0` | Color of the arrow separators between crumbs |

## Usage

Add the `.ease-breadcrumb-trail-path` class to a `<nav>` element. Inside, place `<a class="crumb">` for each item and `<span class="arrow">` for separators. Add `class="active"` to the current page's crumb. The animation plays on page load; replay by removing and re-adding the class.
