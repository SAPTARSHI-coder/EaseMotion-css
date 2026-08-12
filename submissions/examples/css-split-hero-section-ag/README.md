# CSS Split Hero Section

A premium, highly responsive hero section featuring a dynamic diagonal split between typography and imagery, achieved purely through CSS.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Relies on the highly performant CSS `clip-path: polygon()` property to create the angled divide.
- **Dynamic Interaction**: Hovering anywhere within the hero section triggers a smooth, orchestrated `cubic-bezier` transition that shifts the diagonal angle of the `clip-path` while simultaneously scaling the background image, creating a sophisticated parallax-like reveal effect.
- **Responsive Layout**: On desktop screens, the split runs vertically with the image anchored to the right. On mobile devices (`max-width: 768px`), the layout elegantly restructures: the image fills the top portion, the `clip-path` transitions to a horizontal diagonal slice at the bottom of the image, and the text aligns centrally below it.
- **Depth and Readability**: Utilizes a subtle CSS `linear-gradient` overlay on the image edge to ensure text remains highly legible even if window resizing forces overlap.
- **Accessible**: Fully respects user preferences by gracefully disabling the `clip-path` shifting and image scaling animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into the top of your landing page. Replace the `src` attribute of the `.hero-image` tag with your own high-resolution asset.

```html
<section class="split-hero">
  <div class="hero-content">
    <h1>Your Title</h1>
    <p>Your description...</p>
    <a href="#" class="hero-btn">Call to Action</a>
  </div>
  
  <div class="hero-image-wrapper">
    <img class="hero-image" src="your-image.jpg" alt="Hero background" />
  </div>
</section>
```

## CSS Custom Properties
Easily customize the layout and angles using the root variables in `style.css`:
- `--bg-color`: The primary background color (default: `#020617`)
- `--accent-color`: Highlight color for subtitles and buttons (default: `#38bdf8`)
- `--clip-desktop-default`: The initial `clip-path` polygon for desktop views.
- `--clip-desktop-hover`: The expanded `clip-path` polygon triggered on hover.
- `--clip-mobile-default`: The initial `clip-path` polygon for mobile views.

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge) that support `clip-path`.
