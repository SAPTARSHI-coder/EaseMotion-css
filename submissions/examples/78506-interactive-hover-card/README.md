# Interactive CSS Hover Card Animation

A responsive interactive card collection built with pure HTML and
Vanilla CSS. The cards use layered gradients, animated highlights,
transforms, shadows, and glowing accents to create a polished hover
experience.

## Features

- Interactive CSS hover animation
- Keyboard-accessible focus interaction
- Three visual card variations
- Animated gradient glow
- Layered depth and shadows
- Transform-based elevation
- Animated card illustrations
- Responsive grid
- Smooth transitions
- `prefers-reduced-motion` support
- Pure HTML and Vanilla CSS
- No JavaScript or external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

The card can be used as a normal interactive link:

```html
<a class="hover-card" href="#">
  <span class="hover-card__badge">01</span>

  <div class="hover-card__content">
    <span class="hover-card__eyebrow">
      Category
    </span>

    <h2>Card title</h2>

    <p>
      Card description.
    </p>
  </div>
</a>