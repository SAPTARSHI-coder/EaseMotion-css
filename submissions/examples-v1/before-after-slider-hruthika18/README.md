# Before/After Image Slider (`ease-ba-slider`)

A draggable image comparison slider — mouse drag, touch drag, click-to-jump,
and keyboard arrow-key control — built in plain HTML/CSS/vanilla JS with no
external dependencies.

## What it does

- **Draggable divider**: drag the circular handle (or click/tap anywhere
  on the image) to reveal more of the "before" or "after" image.
- **Touch support**: `touchstart`/`touchmove` handlers mirror the mouse
  behavior, with `touch-action: pan-y` so vertical page scroll still works
  on mobile.
- **Keyboard accessible**: the slider is a focusable `role="slider"` with
  `aria-valuemin`/`aria-valuemax`/`aria-valuenow`; arrow keys move it in
  5% steps, `Home`/`End` jump to the extremes.
- **Smooth animation**: position changes transition smoothly (disabled
  automatically under `prefers-reduced-motion: reduce`).
- **Responsive layout**: the slider scales to its container width at a
  fixed `aspect-ratio`, and recalculates on window resize.
- **Optional labels**: "Before"/"After" pill labels in the corners, which
  fade out automatically as the handle approaches that edge so they never
  overlap it.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div
  class="ease-ba-slider"
  data-ease-ba-slider
  role="slider"
  tabindex="0"
  aria-label="Before and after image comparison"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="50"
>
  <img class="ease-ba-slider__img ease-ba-slider__img--before" src="before.jpg" alt="Before" draggable="false" />

  <div class="ease-ba-slider__after-wrap" data-ease-ba-after-wrap>
    <img class="ease-ba-slider__img ease-ba-slider__img--after" src="after.jpg" alt="After" draggable="false" />
  </div>

  <span class="ease-ba-slider__label ease-ba-slider__label--before">Before</span>
  <span class="ease-ba-slider__label ease-ba-slider__label--after">After</span>

  <div class="ease-ba-slider__handle" data-ease-ba-handle>
    <span class="ease-ba-slider__handle-grip">&#10094;&#10095;</span>
  </div>
</div>

<script src="script.js"></script>
```

Swap `before.jpg`/`after.jpg` for your own images — they should be the
same dimensions so the comparison lines up. (The demo ships with two
generated placeholder SVGs, `before.svg` and `after.svg`, instead of real
photos.)

### Configuration via CSS custom properties

| Property | Default | Description |
|---|---|---|
| `--ease-ba-radius` | `14px` | Corner radius of the whole slider |
| `--ease-ba-handle-size` | `44px` | Diameter of the drag handle |
| `--ease-ba-line-width` | `3px` | Width of the divider line |
| `--ease-ba-accent` | `#ffffff` | Divider line and handle color |
| `--ease-ba-transition` | `0.15s ease` | Transition speed for position changes |

```css
.ease-ba-slider {
  --ease-ba-accent: #ffb347;
  --ease-ba-handle-size: 56px;
}
```

## How it works

The "after" image sits in a wrapper (`.ease-ba-slider__after-wrap`) that's
clipped to a percentage width driven by a `--ease-ba-position` CSS custom
property, which JS updates on drag/touch/keyboard input. Because the wrap
is narrower than the slider, its inner `<img>` is explicitly re-widened to
the slider's full pixel width (via `--ease-ba-slider-width`, also set by
JS) so the image doesn't visually squash as the clip narrows.

## Accessibility notes

- The slider root uses `role="slider"` with the standard `aria-value*`
  triad, kept in sync as the position changes.
- Fully keyboard-operable: `Tab` to focus, arrow keys to adjust, `Home`/
  `End` for the extremes.
- Images use `draggable="false"` so native browser image-drag doesn't
  fight with the custom drag behavior.
- Motion is suppressed under `prefers-reduced-motion: reduce`.

## Browser support

Uses standard CSS custom properties, `aspect-ratio`, `object-fit`,
`:focus-visible`, and vanilla JS pointer/touch/keyboard events — no vendor
prefixes needed for current evergreen browsers (Chrome, Edge, Firefox,
Safari).
