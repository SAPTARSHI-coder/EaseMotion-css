# CSS 3D-Flip Feature Grid (Minimalist Tech Layouts)

A pure CSS interactive grid showcasing features using a 3D perspective flip effect upon hovering.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes CSS `transform: rotateY()` and `perspective` to create the 3D flipping effect.
- **3D-Flip Animation**: Hovering over a feature card smoothly rotates the card 180 degrees in 3D space to reveal the descriptive content on the back.
- **Minimalist Tech Theme**: Styled with a clean, low-contrast color palette, subtle drop shadows, and modern sans-serif typography, making it perfect for landing pages and SaaS product showcases.
- **Accessible & Responsive**: The grid gracefully adapts to tablet and mobile viewports. It fully supports `prefers-reduced-motion` by gracefully falling back from a 3D flip animation to a simple opacity cross-fade.

## Usage

Drop the HTML structure into your layout. The grid will automatically adjust its columns based on available space using CSS Grid `auto-fit`.

```html
<div class="feature-grid">
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <!-- Icon and Title -->
      </div>
      <div class="flip-card-back">
        <!-- Detailed Description -->
      </div>
    </div>
  </div>
  <!-- Add more cards as needed -->
</div>
```

## CSS Custom Properties
Easily customize the color scheme using the root variables in `style.css`:
- `--tech-bg`: Page background color (default: `#f8fafc`)
- `--tech-surface`: Card front background (default: `#ffffff`)
- `--tech-primary`: Primary color for icons and card back background (default: `#0ea5e9`)
- `--tech-text-dark`: Primary text color on the front (default: `#0f172a`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
