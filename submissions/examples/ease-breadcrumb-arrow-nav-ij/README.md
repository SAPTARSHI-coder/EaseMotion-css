# Breadcrumb Arrow Nav

A clean breadcrumb navigation component with arrow (slash) separators and hover/active state transitions.

## Features

- Inline-flex layout for horizontal breadcrumb trail
- Arrow separators via `::after` pseudo-elements
- Customizable CSS custom properties
- Active/highlighted current page with underline transition
- Hover underline for clickable previous steps

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--crumb-arrow-duration` | `0.3s` | Transition duration |
| `--crumb-arrow-color` | `#6b7280` | Default link color |
| `--crumb-active-color` | `#111827` | Active page color |
| `--crumb-inactive-color` | `#9ca3af` | Inactive item color |
| `--crumb-bg` | `transparent` | Navigation background |

## Usage

Include the stylesheet and use the semantic HTML structure:

```html
<nav aria-label="Breadcrumb">
  <ol class="crumb-arrow-nav">
    <li class="crumb-arrow-nav__item"><a href="#" class="crumb-arrow-nav__link">Home</a></li>
    <li class="crumb-arrow-nav__item"><a href="#" class="crumb-arrow-nav__link" aria-current="page">Current</a></li>
  </ol>
</nav>
```

## License

MIT
