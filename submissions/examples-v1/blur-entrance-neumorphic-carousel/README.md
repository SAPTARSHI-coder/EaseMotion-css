# Blur-Entrance Neumorphic Carousel

A pure CSS carousel where each incoming slide sharpens into focus from a
soft blur, set inside a neumorphic soft-UI frame — dual soft shadows,
low-contrast background, and inset "pressed" surfaces. Built entirely on
native radio inputs, so it's fully keyboard operable with zero
JavaScript.

## Features

- ✅ Pure CSS — no JavaScript required
- ✅ "Blur-Entrance" transition: the outgoing slide blurs and fades out
     while the incoming slide sharpens from `blur(var(--bec-blur))` down
     to `blur(0)`, combined with a subtle scale-down
- ✅ Neumorphic Soft styling: raised outer shell, inset "pressed" track,
     soft dual-tone shadows on the carousel, arrows, and dots
- ✅ Fully keyboard accessible — built on a real radio group, so `Tab`
     reaches the carousel once and the native Arrow Left/Right keys cycle
     between slides, exactly like any other radio group
- ✅ Previous/next arrow controls and dot navigation, all driven by
     `<label for="...">` elements pointing at the underlying radios
- ✅ Timing, blur amount, scale, and neumorphic surface colors exposed as
     CSS custom properties
- ✅ Respects `prefers-reduced-motion`
- ✅ Fully responsive
- ✅ No external dependencies

## Files

```
blur-entrance-neumorphic-carousel/
├── demo.html   # Standalone demo with 4 slides, arrows, and dot nav
├── style.css   # Component styles and the blur-entrance transition
└── README.md   # This file
```

## Usage

Include `style.css`, then structure the carousel as a radio group
followed by a track of absolutely-stacked slides, followed by dot
navigation — all as direct children of `.bec-carousel` so the `~`
sibling selectors in `style.css` can reach them:

```html
<div class="bec-carousel" role="region" aria-roledescription="carousel" aria-label="Featured highlights">

  <input type="radio" name="bec-slide" id="bec-r1" class="bec-carousel__radio" checked />
  <input type="radio" name="bec-slide" id="bec-r2" class="bec-carousel__radio" />

  <div class="bec-carousel__track">
    <div class="bec-carousel__slide" role="group" aria-roledescription="slide" aria-label="1 of 2">
      <label for="bec-r2" class="bec-carousel__arrow bec-carousel__arrow--prev" aria-label="Previous slide">‹</label>
      <div class="bec-carousel__panel bec-carousel__panel--a">
        <h2 class="bec-carousel__title">Slide one</h2>
      </div>
      <label for="bec-r2" class="bec-carousel__arrow bec-carousel__arrow--next" aria-label="Next slide">›</label>
    </div>
    <div class="bec-carousel__slide" role="group" aria-roledescription="slide" aria-label="2 of 2">
      ...
    </div>
  </div>

  <div class="bec-carousel__nav" role="tablist" aria-label="Choose slide">
    <label for="bec-r1" class="bec-carousel__dot"><span class="sr-only">Slide 1</span></label>
    <label for="bec-r2" class="bec-carousel__dot"><span class="sr-only">Slide 2</span></label>
  </div>

</div>
```

- The radio inputs (`.bec-carousel__radio`) must come immediately after
  the opening `<div class="bec-carousel">` tag and before the track, so
  the CSS `~` sibling selectors that show the active slide/dot can find
  them.
- Each slide's `nth-child` position in `.bec-carousel__track` must match
  its corresponding radio's order (slide 1 ↔ radio 1, slide 2 ↔ radio 2,
  etc.) — the CSS wires this up explicitly per pair
  (`#bec-r1:checked ~ .bec-carousel__track .bec-carousel__slide:nth-child(1)`),
  so adding a 5th slide means adding one more matching rule.
- Each arrow is a `<label>` pointing at the previous/next radio's `id` —
  clicking it checks that radio and reveals the corresponding slide.
- Add or remove slides and radios in matching pairs; update the CSS
  rules and each arrow's `for` target accordingly.

## Customization

All motion and surface values are CSS custom properties, overridable
globally on `:root`:

| Variable              | Default                              | Description                              |
|--------------------------|------------------------------------------|-----------------------------------------------|
| `--bec-duration`        | `600ms`                                 | Blur-entrance transition duration               |
| `--bec-easing`          | `cubic-bezier(0.22, 1, 0.36, 1)`         | Transition easing curve                         |
| `--bec-blur`            | `14px`                                  | Blur amount for the incoming/outgoing slide     |
| `--bec-scale`           | `1.04`                                  | Scale applied to a slide while blurred          |
| `--bec-bg`              | `#e9edf3`                               | Neumorphic base surface color                   |
| `--bec-shadow-light`    | `rgba(255, 255, 255, 0.85)`              | Light-side neumorphic shadow color              |
| `--bec-shadow-dark`     | `rgba(163, 177, 198, 0.55)`              | Dark-side neumorphic shadow color               |
| `--bec-radius`          | `26px`                                  | Outer carousel corner radius                    |
| `--bec-accent`          | `#6366f1`                               | Arrow icon color and active dot color           |
| `--bec-height`          | `320px`                                 | Track height                                    |

## Accessibility

- The carousel is a real radio group (`<input type="radio">`), kept
  focusable and in the tab order via a clip-based visually-hidden
  technique (never `display: none`), so it's reachable with `Tab` and
  fully operable with the native Left/Right arrow key behavior browsers
  already provide for radio groups.
- `role="region"` with `aria-roledescription="carousel"` on the wrapper,
  and `role="group"` with `aria-roledescription="slide"` plus a
  numbered `aria-label` (e.g. "2 of 4") on each slide, follow the common
  carousel labeling pattern for assistive technology.
- Dot navigation uses visually-hidden (`sr-only`) text so each dot
  announces which slide it selects, not just a bare shape.
- All blur/scale/opacity transitions collapse to a simple opacity swap
  under `prefers-reduced-motion: reduce`.

## Browser Support

Tested and working on the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

Uses standard CSS custom properties, the checkbox/radio `:checked`
general sibling combinator, and `filter: blur()` — no vendor prefixes
required for modern browsers.

## Checklist

- [x] Pure CSS implementation, zero JavaScript
- [x] Blur-Entrance interaction transition
- [x] Neumorphic Soft aesthetic
- [x] Fully responsive
- [x] Keyboard accessible
- [x] Custom parameters exposed via CSS custom properties