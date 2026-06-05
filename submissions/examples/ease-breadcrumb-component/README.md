# ease-breadcrumb — Breadcrumb Navigation

Lightweight breadcrumb navigation component with a customizable separator via CSS variable.

## Classes

| Class                  | Description              |
| ---------------------- | ------------------------ |
| `ease-breadcrumb`      | Wrapper `<ol>` or `<ul>` |
| `ease-breadcrumb-item` | Each `<li>` item         |

## Customization

Override the separator by setting `--ease-breadcrumb-sep`:

```html
<ol class="ease-breadcrumb" style="--ease-breadcrumb-sep: '›'"></ol>
```

## Usage

```html
<nav aria-label="breadcrumb">
  <ol class="ease-breadcrumb">
    <li class="ease-breadcrumb-item"><a href="#">Home</a></li>
    <li class="ease-breadcrumb-item"><a href="#">Products</a></li>
    <li class="ease-breadcrumb-item">Current Page</li>
  </ol>
</nav>
```

## Why it fits EaseMotion CSS

Pure CSS with customizable separator via CSS custom property. Uses design tokens. Accessible with semantic `<nav>` + `aria-label`.
