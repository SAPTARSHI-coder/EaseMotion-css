# Glowing Carousel with Neon Styling

A responsive CSS-only carousel concept featuring glowing cards,
neon gradients, animated rings, luminous orbs, and a futuristic
dark interface.

## Features

- Responsive carousel layout
- Neon purple, cyan, and pink themes
- Animated glowing orbs
- Rotating neon rings
- Perspective grid effects
- Hover and focus interactions
- Responsive desktop, tablet, and mobile layouts
- CSS-only visuals
- Reduced-motion support
- No JavaScript required
- No external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

A basic slide uses this structure:

```html
<article class="slide slide--purple">
  <div class="slide__glow"></div>

  <div class="slide__top">
    <span class="slide__number">
      01
    </span>

    <span class="slide__type">
      DIGITAL
    </span>
  </div>

  <div class="slide__art">
    <div class="orb orb--purple"></div>

    <div class="rings">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div class="slide__content">
    <h2>
      Neon Pulse
    </h2>

    <p>
      Your content goes here.
    </p>
  </div>
</article>