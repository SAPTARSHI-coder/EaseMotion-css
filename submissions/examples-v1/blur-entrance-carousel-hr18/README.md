# Blur-Entrance Carousel (`blur-entrance-carousel-hr18`)

A pure-CSS animated carousel with a "Blur-Entrance" slide transition,
styled for e-commerce checkout layouts, built for issue
[#50512](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50512).

## What it does

A single-item-at-a-time carousel — framed as a "You might also like" upsell
strip on a checkout review step — where each incoming slide sharpens into
view from a soft blur, slightly scaled down and transparent, rather than
cutting in abruptly. The **entrance animation itself is 100% CSS**
(`@keyframes ease-blur-carousel-in-hr18`, driven entirely by custom
properties); JavaScript only tracks which slide is active, toggles the
entrance class, and keeps the dot indicators and screen-reader status in
sync — there's no animation logic in JavaScript.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

```html
<div class="ease-carousel-blur-hr18" role="region" aria-roledescription="carousel" aria-label="You might also like" tabindex="0">
  <div class="bec-slide-track-hr18">
    <div class="bec-slide-hr18 is-active-hr18" data-index="0">
      <!-- slide content -->
    </div>
    <div class="bec-slide-hr18" data-index="1">
      <!-- slide content -->
    </div>
  </div>
  <!-- prev/next buttons + dots, see demo.html -->
</div>
```

Only one `.bec-slide-hr18` should carry `.is-active-hr18` at a time. When
navigating to a new slide, the script:

1. Removes `.is-active-hr18`/`.is-entering-hr18` from the current slide
2. Adds `.is-active-hr18` to the target slide
3. Forces a reflow, then adds `.is-entering-hr18` — which plays the
   blur-entrance keyframe every time, even on a slide that's been shown
   before

### Tuning the animation

| Property | Default | Controls |
|---|---|---|
| `--ease-blur-carousel-duration-hr18` | `420ms` | How long each slide's sharpen-in takes |
| `--ease-blur-carousel-easing-hr18` | `cubic-bezier(0.22, 1, 0.36, 1)` | The easing curve for the entrance |
| `--ease-blur-carousel-amount-hr18` | `12px` | Starting blur radius — higher looks softer/further away |
| `--ease-blur-carousel-scale-hr18` | `0.95` | Starting scale, so each slide also grows slightly into place |

```css
.ease-carousel-blur-hr18.dramatic {
  --ease-blur-carousel-amount-hr18: 22px;
  --ease-blur-carousel-duration-hr18: 600ms;
}
```

## Accessibility notes

- The carousel container uses `role="region"`,
  `aria-roledescription="carousel"`, and a descriptive `aria-label`, and is
  itself focusable (`tabindex="0"`) so keyboard users can reach it and use
  `←`/`→` to navigate without needing to tab to the arrow buttons first.
- Prev/next controls are native `<button>` elements with `aria-label`s
  ("Previous item" / "Next item"), not icon-only with no text alternative.
- Dot indicators use `aria-current="true"` on the active dot and a
  descriptive `aria-label` per dot ("Item 1 of 3"), so their state and
  position are both announced.
- A visually-hidden `role="status"` / `aria-live="polite"` region
  announces which item is now showing on every navigation, so screen
  reader users get the same "you moved to a new slide" feedback sighted
  users get visually.
- The blur/scale entrance respects
  `@media (prefers-reduced-motion: reduce)` and slides appear instantly at
  full clarity instead.

## Responsiveness

Slides stack into a centered, vertical layout (thumbnail above text)
under a `480px` viewport width instead of staying side-by-side in a
cramped row.

## Why this fits EaseMotion CSS

It's a self-contained, reusable interaction pattern with a distinct named
animation (`ease-blur-carousel-in`) exposed entirely through custom
properties — matching the issue's ask for zero JavaScript animation
overhead and tunable timing/easing/blur/scale — while remaining fully
keyboard accessible and screen-reader friendly.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/examples/`.
