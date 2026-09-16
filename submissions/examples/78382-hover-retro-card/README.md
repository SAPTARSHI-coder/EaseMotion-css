# Hover Card with Retro Styling

A responsive CSS-only hover card component inspired by classic arcade
interfaces, vintage computing, synthwave visuals, chunky borders, and
retro print aesthetics.

## Features

- CSS-only hover interaction
- Three retro card variations
- Arcade visual
- Synthwave visual
- Terminal visual
- Chunky retro borders
- Offset hard shadows
- Pixel-inspired graphics
- Scanline effect
- Responsive layout
- Keyboard focus support
- Hover and focus states
- Reduced-motion support
- No JavaScript
- No external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

A basic card structure looks like:

```html
<article class="retro-card">
  <div class="retro-card__top">
    <span class="retro-card__badge">
      01
    </span>

    <span class="retro-card__year">
      1984
    </span>
  </div>

  <div class="retro-card__content">
    <span class="retro-card__category">
      ARCADE
    </span>

    <h2>
      Neon Drive
    </h2>

    <p>
      Retro-inspired card content.
    </p>

    <a class="retro-card__action" href="#">
      PLAY NOW
    </a>
  </div>
</article>