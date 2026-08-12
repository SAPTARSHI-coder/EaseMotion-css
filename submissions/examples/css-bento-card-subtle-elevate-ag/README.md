# CSS Bento Card: Subtle Elevate Variation

A minimalist, highly polished Bento Grid component featuring a clean "Subtle Elevate" hover interaction often found in premium SaaS and corporate dashboards.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript, utilizing native CSS Grid for dynamic structure.
- **Subtle Elevate Interaction**: Uses a combination of `translateY(-6px)` and a deeply blurred, highly transparent `box-shadow` to simulate the card physically lifting off the background. The animation is driven by a crisp `cubic-bezier(0.2, 0.8, 0.2, 1)` easing curve for an Apple/Vercel-like snappy feel.
- **Native Dark Mode**: Fully supports `@media (prefers-color-scheme: dark)`. The drop shadows are automatically recalibrated in dark mode (higher opacity) to ensure the elevation effect remains visible and elegant against dark backgrounds.
- **Bento Grid Architecture**: Demonstrates best practices for building responsive bento layouts using `grid-template-columns`, `grid-auto-rows`, and modular `grid-column: span` classes.
- **Accessible & Responsive**: Functions as semantic `<a>` tags with flawless keyboard focus states. Explicitly respects user preferences by gracefully disabling all lifting and scaling transitions via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your application layout. Adjust the `span-col-X` and `span-row-X` classes to organize your grid.

```html
<div class="bento-grid">
  <a href="#" class="bento-card span-col-2 span-row-2">
    <!-- Card Content -->
  </a>
</div>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The outer page background color.
- `--card-bg`: The base background color of the cards.
- `--card-border`: The thin subtle outline color.
- `--accent`: The primary accent color (default: `#3b82f6` Blue).
- `--shadow-base` & `--shadow-elevate`: The highly tuned drop shadows for resting and hover states.

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). The CSS Grid layout degrades gracefully on extremely old browsers, while transitions are universally supported.
