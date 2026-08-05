# ease-scale-hover-navbar

A CSS-only scale-hover navbar component for fintech dashboard layouts.

## Description

The `ease-scale-hover-navbar` is a pure CSS navigation bar with scale hover effects. Perfect for fintech dashboards where smooth, professional navigation is essential.

## Features

- **Scale Hover Effect**: Navigation items scale up smoothly on hover
- **Multiple Variants**: Scale only, scale with background, scale with underline
- **Responsive Design**: Works seamlessly across all screen sizes
- **Accessibility**: Respects `prefers-reduced-motion` user preference
- **Pure CSS**: No JavaScript required

## Usage

```html
<nav class="ease-navbar ease-navbar-scale">
  <a href="#" class="ease-nav-link">Home</a>
  <a href="#" class="ease-nav-link">About</a>
  <a href="#" class="ease-nav-link">Services</a>
</nav>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.ease-navbar` | Base navbar styles |
| `.ease-navbar-scale` | Scale hover effect variant |
| `.ease-nav-link` | Navigation link base styles |
| `.ease-nav-link-scale` | Scale effect for links |
| `.ease-nav-link-bg` | Background change on hover |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ease-nav-height` | `64px` | Navbar height |
| `--ease-nav-bg` | `#1e293b` | Navbar background |
| `--ease-nav-link-color` | `#94a3b8` | Link color |
| `--ease-nav-link-hover` | `#ffffff` | Link hover color |
| `--ease-scale-factor` | `1.05` | Scale factor on hover |
