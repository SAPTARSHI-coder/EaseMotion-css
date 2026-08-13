# 📼 CSS Cassette Tape Card

A retro-inspired cassette tape card recreated entirely with HTML and
CSS.

The component includes animated cassette reels, a tape window,
retro label styling, screws, and responsive behavior without any
external dependencies.

## Features

- Pure HTML and CSS
- No JavaScript
- Animated cassette reels
- Retro cassette tape appearance
- CSS-generated reel details
- Responsive layout
- Hover interaction
- Reduced-motion support
- No external assets required
- Self-contained demo

## Usage

Add the cassette card markup to your page and include `style.css`.

```html
<article class="cassette-card" aria-label="Retro cassette tape">
  <div class="cassette-label">
    <span class="label-small">SIDE A</span>

    <h2>MEMORY<br>LANE</h2>

    <span class="label-line"></span>

    <p>90 MIN · MIX TAPE</p>
  </div>

  <div class="cassette-window" aria-hidden="true">
    <div class="tape-window"></div>

    <div class="reel reel-left">
      <span></span>
    </div>

    <div class="reel reel-right">
      <span></span>
    </div>

    <div class="tape-line"></div>
  </div>
</article>