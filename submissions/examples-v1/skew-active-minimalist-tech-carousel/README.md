# Skew-Active Carousel

A pure CSS carousel styled for minimalist tech interfaces — black frame,
monospace numeric index, thin progress line — where each slide slides in
at a slight skew and straightens as it becomes active. Built entirely on
real radio inputs, so it's fully keyboard operable with zero JavaScript.

## Features

- ✅ Pure CSS — no JavaScript required
- ✅ "Skew-Active" transition: inactive slides sit skewed and offset
     (`skewX(var(--ska-skew)) translateX(var(--ska-distance))`); the
     active slide straightens to `skewX(0) translateX(0)`
- ✅ Minimalist Tech styling: near-black frame, monospace slide index
     (`01`, `02`...), thin accent-colored progress line, square outlined
     arrow buttons
- ✅ Fully keyboard accessible — built on a real radio group, so `Tab`
     reaches the carousel once and the native Arrow Left/Right keys cycle
     between slides
- ✅ Contextual previous/next arrows and a live numeric counter (`01 / 04`)
- ✅ Timing, easing, skew angle, and slide distance exposed as CSS custom
     properties
- ✅ Respects `prefers-reduced-motion`
- ✅ Fully responsive
- ✅ No external dependencies

## Files

```
skew-active-minimalist-tech-carousel/
├── demo.html   # Standalone demo with 4 slides, arrows, and progress/counter
├── style.css   # Component styles and the skew-active transition
└── README.md   # This file
```

## Usage

Include `style.css`, then structure the carousel as a radio group,
followed by a track of absolutely-stacked slides, followed by a progress
line and counter — all as direct children of `.ska-carousel` so the `~`
sibling selectors in `style.css` can reach them:

```html
<div class="ska-carousel" role="region" aria-roledescription="carousel" aria-label="Product highlights">

  <input type="radio" name="ska-slide" id="ska-r1" class="ska-carousel__radio" checked />
  <input type="radio" name="ska-slide" id="ska-r2" class="ska-carousel__radio" />

  <div class="ska-carousel__frame">
    <div class="ska-carousel__track">
      <div class="ska-carousel__slide" role="group" aria-roledescription="slide" aria-label="1 of 2">
        <label for="ska-r2" class="ska-carousel__arrow ska-carousel__arrow--prev" aria-label="Previous slide">
          <span aria-hidden="true">&#8592;</span>
        </label>
        <span class="ska-carousel__index">01</span>
        <h2 class="ska-carousel__title-text">Slide one</h2>
        <p class="ska-carousel__text">Description text.</p>
        <label for="ska-r2" class="ska-carousel__arrow ska-carousel__arrow--next" aria-label="Next slide">
          <span aria-hidden="true">&#8594;</span>
        </label>
      </div>
      <div class="ska-carousel__slide" role="group" aria-roledescription="slide" aria-label="2 of 2">
        ...
      </div>
    </div>
  </div>

  <div class="ska-carousel__meta">
    <div class="ska-carousel__progress" aria-hidden="true">
      <span class="ska-carousel__progress-fill"></span>
    </div>
    <div class="ska-carousel__counter" aria-hidden="true">
      <span class="ska-carousel__counter-current"></span>
      <span class="ska-carousel__counter-sep">/</span>
      <span class="ska-carousel__counter-total">02</span>
    </div>
  </div>

</div>
```

- The radio inputs (`.ska-carousel__radio`) must come immediately after
  the opening `<div class="ska-carousel">` tag, before the frame/track,
  so the CSS `~` sibling selectors that reveal the active slide, progress
  fill, and counter digit can find them.
- Each slide's `nth-child` position must match its radio's order (slide 1
  ↔ radio 1, slide 2 ↔ radio 2, etc.) — wired explicitly per pair in the
  CSS, so adding a 5th slide means adding one more matching rule for the
  slide, the progress fill position, and the counter digit.
- Each arrow is a `<label>` pointing at the previous/next radio's `id`,
  placed inside its slide so only the currently-visible slide's arrows
  are interactive.

## Customization

All motion and surface values are CSS custom properties, overridable
globally on `:root`:

| Variable            | Default                              | Description                              |
|-----------------------|------------------------------------------|-----------------------------------------------|
| `--ska-duration`     | `550ms`                                 | Skew-active transition duration                |
| `--ska-easing`       | `cubic-bezier(0.22, 1, 0.36, 1)`         | Transition easing curve                        |
| `--ska-skew`         | `-8deg`                                 | Skew angle applied to inactive slides          |
| `--ska-distance`     | `36px`                                  | Horizontal offset applied to inactive slides   |
| `--ska-surface`      | `#0a0a0a`                               | Carousel frame background color                |
| `--ska-border`       | `#1f1f1f`                               | Frame and arrow border color                   |
| `--ska-accent`       | `#00e5a0`                               | Index number and progress-line accent color    |
| `--ska-text`         | `#ffffff`                               | Slide heading color                            |
| `--ska-text-muted`   | `#9a9a9a`                               | Slide body text color                          |
| `--ska-height`       | `300px`                                 | Track height                                   |

## Accessibility

- The carousel is a real radio group (`<input type="radio">`), kept
  focusable and in the tab order via a clip-based visually-hidden
  technique (never `display: none`), so it's reachable with `Tab` and
  fully operable with the native Left/Right arrow key behavior browsers
  already provide for radio groups.
- `role="region"` with `aria-roledescription="carousel"` on the wrapper,
  and `role="group"` with `aria-roledescription="slide"` plus a numbered
  `aria-label` (e.g. "2 of 4") on each slide, follow the common carousel
  labeling pattern for assistive technology.
- The progress line and numeric counter are purely decorative (already
  redundant with each slide's `aria-label`) and are marked
  `aria-hidden="true"` to avoid duplicate announcements.
- A visible focus outline appears around the whole frame via
  `:focus-within` when the radio group has keyboard focus.
- All skew/transform transitions collapse to a simple opacity/position
  swap under `prefers-reduced-motion: reduce`.

## Browser Support

Tested and working on the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

Uses standard CSS custom properties, the radio `:checked` general
sibling combinator, and `transform: skewX()` — no vendor prefixes
required for modern browsers.

## Checklist

- [x] Pure CSS implementation, zero JavaScript
- [x] Skew-Active interaction transition
- [x] Minimalist Tech aesthetic
- [x] Fully responsive
- [x] Keyboard accessible
- [x] Custom parameters exposed via CSS custom properties