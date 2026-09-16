# CSS Classified Ad Card

A vintage-inspired newspaper classified ad card component featuring dense typography, CSS-generated paper textures, and a delightful highlighter hover effect.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript or external image assets.
- **Procedural Paper Texture**: Utilizes an inline SVG `feTurbulence` data URI applied as a `background-image` to generate a subtle, realistic paper noise texture without HTTP requests.
- **Vintage Typography Elements**: Showcases standard newspaper design patterns including heavy double borders (via `border` and `::before`), dense justified text, and a classic drop cap using the `::first-letter` pseudo-element.
- **Micro-Interactions**: Hovering the card physically lifts it from the page (`translateY` and `rotate`) while simultaneously animating a yellow "marker highlight" across key text using a transitioning `background-size` property.
- **Accessible & Responsive**: Built on a semantic `<a>` tag for perfect keyboard navigability. Uses `aria-label` to announce the ad link to screen readers. Respects user preferences by gracefully disabling the physical lift and highlight animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your grid layouts.

```html
<a href="#" class="classified-card" aria-label="View details">
  <div class="ad-category">Category</div>
  <h2 class="ad-title">Headline</h2>
  <p class="ad-body">
    Ad text goes here. 
    <span class="highlight-text">Highlighted text!</span>
  </p>
  <p class="ad-contact">Contact Info</p>
</a>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--paper-bg`: Background color of the paper (default: `#fdfbf7`)
- `--ink-color`: The primary black ink color (default: `#1a1a1a`)
- `--highlight-color`: The marker highlight color (default: `#ffeb3b`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). The SVG filter data URI is universally supported.
