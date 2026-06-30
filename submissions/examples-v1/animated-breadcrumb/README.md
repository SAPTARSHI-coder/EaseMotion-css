# animated-breadcrumb

An animated breadcrumb navigation component for EaseMotion CSS.

## Usage

```html
<nav aria-label="Breadcrumb">
  <ol class="ease-breadcrumb ease-breadcrumb-slash">
    <li class="ease-breadcrumb-item">
      <a class="ease-breadcrumb-link" href="#">Home</a>
      <span class="ease-breadcrumb-separator"></span>
    </li>
    <li class="ease-breadcrumb-item">
      <a class="ease-breadcrumb-link" href="#">Docs</a>
      <span class="ease-breadcrumb-separator"></span>
    </li>
    <li class="ease-breadcrumb-item">
      <span class="ease-breadcrumb-current" aria-current="page">
        Components
      </span>
    </li>
  </ol>
</nav>
```

## Separator Variants

| Class                     | Separator |
| ------------------------- | --------- |
| `ease-breadcrumb-slash`   | /         |
| `ease-breadcrumb-arrow`   | →         |
| `ease-breadcrumb-dot`     | •         |
| `ease-breadcrumb-chevron` | ›         |

## Classes

| Class                       | Description               |
| --------------------------- | ------------------------- |
| `ease-breadcrumb`           | Base breadcrumb list      |
| `ease-breadcrumb-item`      | Individual crumb wrapper  |
| `ease-breadcrumb-link`      | Clickable crumb link      |
| `ease-breadcrumb-separator` | Separator between crumbs  |
| `ease-breadcrumb-current`   | Active/current page crumb |

## Features

- Staggered entrance animation per crumb
- 4 separator variants
- Hover effect on links
- Focus ring for keyboard users
- ARIA accessible
- Responsive mobile truncation
- Respects prefers-reduced-motion
- Uses EaseMotion CSS design tokens
