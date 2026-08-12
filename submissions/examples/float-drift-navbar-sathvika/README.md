# CSS Float-Drift Navbar

A navbar that gently floats up and down in a slow, continuous loop.

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--ease-nav-bg` | `#ffffff` | Navbar background |
| `--ease-nav-accent` | `#4f46e5` | Link hover color |

## Usage
```html
<nav class="ease-navbar">
  <span class="ease-navbar__brand">Brand</span>
  <ul class="ease-navbar__links">
    <li><a href="#" class="ease-navbar__link">Home</a></li>
  </ul>
</nav>
```

## Accessibility
Standard semantic `<nav>`/`<a>` markup, fully keyboard navigable. `prefers-reduced-motion` disables the float loop.

## Why it fits EaseMotion CSS
Pure CSS ambient float animation, `ease-` prefixed classes, themeable, zero dependencies.
