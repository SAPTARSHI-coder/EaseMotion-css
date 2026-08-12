# CSS Rotate-Fade Feature Grid

A sleek, minimalist feature grid utilizing pure CSS for rotate-fade entrance animations and interactive icon rotations on hover. Built for clean tech layouts, SaaS product pages, and modern corporate sites.

## 🚀 Features

- **Pure CSS / HTML:** No JavaScript dependencies required.
- **Rotate-Fade Entrance:** Grid items elegantly rotate and fade into view sequentially using CSS animations and custom properties for delays.
- **Interactive Icons:** Hovering over a card triggers a smooth 360-degree rotation and color inversion of the icon.
- **Dark Mode Ready:** Uses `prefers-color-scheme` to automatically adapt to the user's system theme (light/dark mode).
- **Fully Responsive:** Uses CSS Grid for fluid adaptation to desktop, tablet, and mobile screens.
- **Accessible:** Includes full `prefers-reduced-motion` support to disable all animations for users sensitive to motion.

## 📂 File Structure

- `demo.html`: The showcase HTML layout demonstrating the grid.
- `style.css`: All CSS styles, animations, variables, and media queries.
- `README.md`: This documentation file.

## 🎨 CSS Custom Properties (Variables)

The component is highly customizable via CSS variables. Colors adapt automatically based on the system's light/dark mode preference.

```css
:root {
    --bg-color: #fafafa;
    --text-primary: #171717;
    --text-secondary: #525252;
    --card-bg: #ffffff;
    --card-border: #e5e5e5;
    --accent: #2563eb;
    --transition-speed: 0.4s;
}
```

## 🛠 Usage

1. Copy the markup from `demo.html` into your project.
2. Link the `style.css` file to apply the styling and animations.
3. Apply the `.rotate-fade-enter` class to elements you want to animate on load. Use inline styles `style="--anim-delay: 0.2s"` to stagger the entrances.
4. Use the `.rotate-fade-icon` class on your SVG or font icons to enable the hover rotation effect.

## ♿ Accessibility

This component includes a comprehensive `@media (prefers-reduced-motion: reduce)` block. When reduced motion is enabled, all animations, transitions, and hover transforms are disabled, ensuring a static and accessible experience.
