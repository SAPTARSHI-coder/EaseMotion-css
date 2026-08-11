# Skew-Active Card Grid

A highly modern, interactive product card grid designed for e-commerce checkout or product showcase layouts. This example features a premium skew-active hover state that creates a sophisticated 3D presentation effect without any JavaScript.

## 🚀 Features

- **Pure CSS/HTML**: Lightweight, fast, and dependency-free.
- **Skew-Active Interaction**: Cards skew, lift, and scale subtly on hover to create dynamic focus.
- **Glassmorphism Aesthetics**: Elegant translucent backgrounds, subtle borders, and smooth shadows.
- **Shimmer Effect**: Beautiful sweep shimmer on the product image area during hover.
- **Accessibility Ready**: Full support for `prefers-reduced-motion: reduce`.
- **Fully Responsive**: Adapts seamlessly to all screen sizes using CSS Grid.

## 📁 File Structure

- `demo.html` — The HTML markup showcasing the card grid.
- `style.css` — The styles powering the animations and design.
- `README.md` — This documentation file.

## 🎨 CSS Custom Properties (Variables)

You can easily customize the grid by tweaking these variables in `style.css`:

| Variable | Description | Default |
|----------|-------------|---------|
| `--em-bg` | Main background color | `#0f172a` |
| `--em-text` | Primary text color | `#f8fafc` |
| `--em-text-muted` | Secondary text color | `#94a3b8` |
| `--em-card-bg` | Card background (with opacity) | `rgba(30, 41, 59, 0.7)` |
| `--em-card-border` | Card border color | `rgba(255, 255, 255, 0.1)` |
| `--em-accent` | Primary accent color | `#38bdf8` |
| `--em-transition` | Timing function for all animations | `0.4s cubic-bezier(0.25, 1, 0.5, 1)` |
| `--em-skew-x` | Skew angle on X-axis during hover | `-2deg` |
| `--em-skew-y` | Skew angle on Y-axis during hover | `2deg` |
| `--em-lift` | Translation distance on Y-axis during hover | `-8px` |

## 🛠️ Usage

Simply include the `style.css` in your project and copy the markup from `demo.html`. No extra dependencies required! 

```html
<div class="em-card-grid">
  <!-- Insert em-card elements here -->
</div>
```

---
*Created for the [EaseMotion CSS](https://github.com/pisum-sativum/EaseMotion-css) project.*
