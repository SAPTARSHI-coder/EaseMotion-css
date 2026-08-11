# Bouncing Dots Preloader

A playful "bouncing dots" preloader made of three circular dots that jump
up and down in a wave pattern — pure CSS/HTML, no JavaScript.

## Files

- `demo.html` — usage examples, including color variants
- `style.css` — all styles and animations
- `README.md` — this file

## How it works

Three `div.dot` elements sit side-by-side inside a `.bouncing-dots-loader`
container. Each dot uses a `@keyframes` animation (`dot-bounce`) that
translates it up and back down on the Y-axis (`transform: translateY()`).

To create the wave effect, each dot's animation is offset using
`animation-delay`:

```css
.bouncing-dots-loader .dot:nth-child(1) { animation-delay: 0s; }
.bouncing-dots-loader .dot:nth-child(2) { animation-delay: 0.15s; }
.bouncing-dots-loader .dot:nth-child(3) { animation-delay: 0.3s; }
```

Each dot runs the same bounce animation, but starts slightly later than
the one before it, producing a sequential "wave" rather than all three
dots moving in sync.

## Usage

```html
<div class="bouncing-dots-loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
```

No JavaScript needed — just drop in the three `.dot` elements and the
staggered bounce runs automatically.

### Color variants (optional)

Add one of these classes to `.bouncing-dots-loader` to change the dot
color:

- `success` — green
- `warning` — amber
- `danger` — red

### Accessibility / reduced motion

Users with `prefers-reduced-motion: reduce` enabled will see the dots
stay static instead of bouncing.

## Notes

- No existing files were modified — this is a strictly additive
  contribution living entirely in
  `submissions/examples/bouncing-dots-loader/`.
- No JavaScript is used; the stagger effect is achieved purely with
  `animation-delay` on each dot.
