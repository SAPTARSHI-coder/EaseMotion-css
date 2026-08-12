# CSS Bento Card: Velvet Smooth Transition Variation

A meticulously crafted Bento Grid component featuring premium, ultra-smooth hover interactions using advanced CSS cubic-bezier timing functions.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript, utilizing native CSS Grid for structure.
- **Velvet Smooth Interactions**: Replaces standard linear or `ease` transitions with a custom `cubic-bezier(0.16, 1, 0.3, 1)` curve. This creates a "springy but dampened" velvet feel where elements rapidly respond to hover states but settle gently into their final positions.
- **Dynamic Radial Glow**: Utilizes a scaling `radial-gradient` pseudo-element that blooms outward from the center of the card upon hover, creating a premium depth effect without heavy DOM manipulation.
- **Bento Grid Architecture**: Demonstrates best practices for building responsive bento layouts using `grid-template-columns`, `grid-auto-rows`, and `grid-column: span` classes.
- **Accessible & Responsive**: Functions as semantic `<a>` tags with flawless keyboard focus states. Explicitly respects user preferences by gracefully disabling all scaling, translating, and glowing transitions via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your application layout. Adjust the `span-col-X` and `span-row-X` classes to organize your grid.

```html
<div class="bento-grid">
  <a href="#" class="bento-card span-col-2 span-row-2">
    <div class="bento-content">
      <!-- Card Content -->
    </div>
  </a>
</div>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The outer page background color (default: `#0f0c1b`)
- `--card-bg`: The base background color of the cards (default: `#1a162b`)
- `--card-border`: The thin subtle outline color (default: `rgba(255, 255, 255, 0.05)`)
- `--accent`: The primary velvet purple accent color (default: `#8b5cf6`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). The CSS Grid layout degrades gracefully on extremely old browsers, while transitions are universally supported.
