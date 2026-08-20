# Skew-Active Card Grid

A modern, dynamic card grid layout designed for SaaS feature showcases. Built entirely with pure CSS and HTML, featuring smooth 3D transform transitions and hover states.

## 🌟 Features

- **Pure CSS / HTML**: No JavaScript required.
- **3D Transitions**: Smooth `transform` and `perspective` animations.
- **Contextual Hover**: When hovering the grid, inactive cards dim and recede, while the active card straightens out (`skewY(0)`) and elevates.
- **Fully Responsive**: Gracefully falls back to a standard vertical stack on mobile devices.
- **Accessible**: Full support for `prefers-reduced-motion` media queries.

## 🚀 Usage

1. Link the stylesheet `style.css` in your HTML `<head>`.
2. Wrap your cards in the `.em-card-grid` container.
3. Use the `.em-card` class for individual feature cards.

### HTML Structure
```html
<div class="em-card-grid">
  <div class="em-card">
    <div class="em-card-icon">
      <!-- SVG Icon -->
    </div>
    <h3>Feature Title</h3>
    <p>Feature description goes here.</p>
    <a href="#" class="em-card-link">Learn More</a>
  </div>
  <!-- Additional cards... -->
</div>
```

## 🎨 Customization

You can easily customize the look and feel by overriding the CSS variables in the `:root` pseudo-class:

```css
:root {
  --em-primary-color: #6366f1;       /* Accent color */
  --em-bg-color: #0f172a;            /* Page background */
  --em-card-bg: #1e293b;             /* Card background */
  --em-skew-angle: -3deg;            /* Initial skew angle of cards */
  --em-transition-speed: 0.4s;       /* Animation duration */
}
```

## 📱 Responsive Behavior

On screens smaller than `768px`, the grid collapses into a single column. To ensure readability and usability on touch devices, the 3D skew effect is disabled on mobile viewports.
