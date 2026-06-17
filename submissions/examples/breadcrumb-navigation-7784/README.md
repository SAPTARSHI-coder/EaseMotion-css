# Breadcrumb Navigation Component — Issue #7784

A breadcrumb navigation component showing page hierarchy with customizable separators.

## Features

- **`.ease-breadcrumb`** — flex row container with wrapping
- **`.ease-breadcrumb-item`** — individual crumb with auto-separator via `::before`
- **Separator variants** — slash (`/`), arrow (`>`), chevron (`›`), bullet (`•`)
- **`.ease-breadcrumb-item.active`** — bold, non-clickable current page
- **`.ease-breadcrumb-collapse`** — truncates items on mobile (≤640px)
- **Dark mode support** — via `prefers-color-scheme: dark`
- **Reduced motion** — disables transitions when `prefers-reduced-motion: reduce`
- **Focus-visible** — accessible focus ring on links

## Files

- `style.css` — all breadcrumb styles and responsive rules
- `demo.html` — working demo with 4 separator variants, collapsible example
- `README.md` — this file

## Usage

```html
<nav aria-label="Breadcrumb">
  <ol class="ease-breadcrumb ease-breadcrumb-separator-chevron">
    <li class="ease-breadcrumb-item"><a href="#">Home</a></li>
    <li class="ease-breadcrumb-item"><a href="#">Category</a></li>
    <li class="ease-breadcrumb-item active" aria-current="page">Current</li>
  </ol>
</nav>
```

### Separator variants

| Class | Separator |
|-------|-----------|
| `.ease-breadcrumb-separator-slash` | `/` |
| `.ease-breadcrumb-separator-arrow` | `>` |
| `.ease-breadcrumb-separator-chevron` | `›` |
| `.ease-breadcrumb-separator-bullet` | `•` |

### Mobile truncation

Add `.ease-breadcrumb-collapse` to truncate items on screens ≤640px.
