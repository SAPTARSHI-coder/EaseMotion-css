# ease-breadcrumb

## What does this do?

Provides a CSS-only breadcrumb navigation component for displaying site hierarchy. Includes multiple divider styles (chevron, slash, dot, arrow), hover effects on links, distinct styling for the current page via `aria-current="page"`, and a responsive variant for mobile.

## How is it used?

**Default (slash divider):**

```html
<nav aria-label="Breadcrumb">
  <ol class="ease-breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Docs</a></li>
    <li aria-current="page">Breadcrumb</li>
  </ol>
</nav>
```

**With chevron divider:**

```html
<ol class="ease-breadcrumb ease-breadcrumb-chevron">
  ...
</ol>
```

### Variants

| Modifier | Divider |
|---|---|
| (none) | `/` (slash) |
| `.ease-breadcrumb-chevron` | `›` |
| `.ease-breadcrumb-slash` | `/` |
| `.ease-breadcrumb-dot` | `•` (middle dot) |
| `.ease-breadcrumb-arrow` | `→` (arrow) |
| `.ease-breadcrumb-responsive` | Collapses intermediate items on small screens |

### Styling

- Links are muted gray with a hover transition to the primary accent color
- The current page (element with `aria-current="page"`) is rendered as plain text in dark text with medium weight
- All colors adapt in dark mode via `prefers-color-scheme`

### Responsive

Adding `.ease-breadcrumb-responsive` collapses intermediate breadcrumb items on screens narrower than 480px, replacing them with an ellipsis. The first and last items remain visible.

## Why is it useful?

Breadcrumbs are essential for documentation sites, dashboards, e-commerce category pages, and any multi-level navigation. They provide users with spatial awareness of their location within the site hierarchy.

## Features

- Four divider styles: chevron, slash, dot, arrow
- Linked ancestor items with hover color transition
- Current page styled distinctly via `aria-current="page"`
- Responsive variant that collapses intermediate items on mobile
- Dark mode support via `prefers-color-scheme`
- Accessible by default (uses `<nav aria-label="Breadcrumb">` and `<ol>`)
