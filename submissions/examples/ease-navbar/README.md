# ease-navbar Component

Responsive navbar with mobile hamburger toggle (pure CSS).

## Files

| File | Description |
|------|-------------|
| 📄 [demo.html](./demo.html) | Interactive demo with all variants |
| 🎨 [style.css](./style.css) | Navbar component styles |
| 📖 [README.md](./README.md) | Documentation |

## Classes

| Class | Description |
|-------|-------------|
| `ease-navbar` | Main navbar container |
| `ease-navbar-brand` | Logo/brand section |
| `ease-navbar-links` | Navigation links |
| `ease-navbar-sticky` | Sticky on scroll |
| `ease-navbar-centered` | Centered layout |
| `ease-navbar-transparent` | Glass/blur effect |

## Variants

- **Basic** - Default navbar
- **Sticky** - Stays on top
- **Centered** - Centered items
- **Transparent** - Glassmorphism

## Quick Start

```html
<nav class="ease-navbar">
    <div class="ease-navbar-brand">Logo</div>
    <input type="checkbox" id="nav-toggle" class="ease-nav-toggle">
    <label for="nav-toggle" class="ease-nav-hamburger">
        <span></span><span></span><span></span>
    </label>
    <ul class="ease-navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
    </ul>
</nav>