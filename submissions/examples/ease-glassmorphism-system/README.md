# Dynamic Glassmorphism Component System

A dependency-free glassmorphism component system using modern CSS `backdrop-filter`, CSS custom properties, and semantic class variants.

## Features

- **4 card variants**: Default, Interactive (blur deepens on hover), Elevated (lighter + stronger shadow), Bordered (colored accent)
- **Live controls**: Adjust blur radius, background opacity, and border opacity in real time via sliders
- **Light/Dark mode**: Full theme toggle with CSS custom properties — zero JavaScript state management
- **Animated background**: Three drifting gradient spheres that showcase the frosted-glass effect
- **CSS variable driven**: All glass properties use `--demo-blur`, `--demo-bg-opacity`, and `--demo-border-opacity`
- **Responsive grid**: Automatically wraps cards on smaller screens

## Usage

Copy the `.glass` class structure and customize via CSS variables:

```html
<div class="glass glass--interactive">
  <span class="glass-badge">Label</span>
  <h2 class="glass-title">Title</h2>
  <p class="glass-desc">Description text.</p>
  <button class="glass-btn">Action</button>
</div>
```

### CSS Variables

| Variable                | Default | Description           |
| ----------------------- | ------- | --------------------- |
| `--demo-blur`           | `15px`  | Backdrop blur radius  |
| `--demo-bg-opacity`     | `0.15`  | White overlay opacity |
| `--demo-border-opacity` | `0.2`   | Border opacity        |
| `--card-shadow`         | —       | Card box-shadow       |

## Variants

| Class                 | Behavior                                   |
| --------------------- | ------------------------------------------ |
| `.glass--default`     | Standard glass card                        |
| `.glass--interactive` | Blur increases on hover                    |
| `.glass--elevated`    | Stronger blur, lighter tint, deeper shadow |
| `.glass--bordered`    | Colored border accent                      |

## File Structure

```
ease-glassmorphism-system/
├── demo.html       # Demo page with all 4 variants + controls
├── style.css       # All glassmorphism styles
└── README.md       # This file
```
