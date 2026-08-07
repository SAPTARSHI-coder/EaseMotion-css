# CSS Morph-Glow Card Grid

A pure CSS morphing glow card grid layout, ideal for e-commerce checkout layouts. It features smooth transitions and animated glowing gradients on hover.

## 🚀 Features

- **Pure CSS/HTML:** No JavaScript required.
- **Morphing Glow:** Smooth, animated radial gradients on hover.
- **Responsive:** Adapts perfectly to desktop, tablet, and mobile using CSS Grid.
- **Accessible:** Includes `prefers-reduced-motion` support.

## 📂 File Structure

- `demo.html` - The showcase page demonstrating the grid layout.
- `style.css` - The core CSS file with animations, variables, and styling.

## 🎨 Custom Properties (CSS Variables)

You can easily customize the appearance by modifying the CSS variables in the `:root` selector within `style.css`.

```css
:root {
    --bg-color: #111827;
    --text-primary: #f3f4f6;
    --text-secondary: #9ca3af;
    --card-bg: rgba(31, 41, 55, 0.5);
    --primary-color: #3b82f6;
    --glow-color: rgba(59, 130, 246, 0.5);
    --glow-hover-color: rgba(139, 92, 246, 0.8);
    --transition-speed: 0.4s;
}
```

## 🛠️ Usage

1. Link the `style.css` in your HTML file.
2. Use the standard `.morph-glow-grid` and `.morph-glow-card` classes.

Enjoy building your next e-commerce checkout!
