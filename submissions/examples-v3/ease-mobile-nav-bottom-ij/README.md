# Mobile Nav Bottom (#36820)

A bottom navigation bar where the active item swaps icon prominence with its label for a clean mobile tab-bar pattern.

## CSS Custom Properties

| Prop | Default | Description |
|------|---------|-------------|
| `--nav-bg` | `#16161c` | Navigation bar background |
| `--icon-color` | `#666` | Default icon/label color |
| `--active-color` | `#6c5ce7` | Active item accent color |
| `--swap-duration` | `0.3s` | Transition duration for icon-label swap |

## Usage

```html
<nav class="mobile-nav" style="--nav-bg: #16161c; --active-color: #6c5ce7;">
  <a href="#" class="nav-item active">
    <span class="nav-icon">🏠</span>
    <span class="nav-label">Home</span>
  </a>
  <!-- ... -->
</nav>
```

## Features

- Icon scales up on active state
- Label fades in only for the active item
- Smooth color and transform transitions
- Dark-theme ready
