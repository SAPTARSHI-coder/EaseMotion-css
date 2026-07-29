# CSS Slide-Up Card Grid — Gaming Hub Layout

A fully responsive, pure HTML5 + CSS card grid built for gaming hub / game
library style layouts. Cards sit in a clean grid, and on hover each card
lifts up while an internal "slide panel" glides upward to reveal the game
description and a Play Now call-to-action. No JavaScript is used anywhere
in this submission.

---

## Features

- **Slide-up hover interaction** — each card lifts (`translateY`) and its
  content panel slides upward on hover/focus, revealing a description and
  CTA button that are hidden at rest.
- **Staggered entrance animation** — cards fade/slide into view on page
  load with a per-card animation delay (`--em-delay`), giving the grid a
  polished, sequential reveal.
- **EaseMotion CSS utility classes** — uses `.em-fade-in-down` and
  `.em-fade-in-up` for entrance animation. These are defined as
  self-contained fallbacks in `style.css` so the demo works standalone,
  but are named and structured to match EaseMotion's shared utility
  conventions. Once merged into the main repo, linking the compiled
  `dist/ease-motion.css` core stylesheet instead of (or alongside)
  `style.css` will let the core utilities take over seamlessly.
- **Keyboard accessible** — hover effects are mirrored on `:focus-within`,
  so the slide-up reveal also works for keyboard navigation via the
  "Play Now" link.
- **Fully responsive** — 3-column grid on desktop, 2-column on tablet
  (≤900px), single column on mobile (≤560px).
- **`prefers-reduced-motion` support** — all keyframe animations and
  transform transitions are disabled for users who request reduced
  motion, while hover states remain functional without movement.
- **Pure CSS gradient artwork** — each card's media banner is a unique
  CSS gradient, so the demo needs no external image assets.
- **Semantic markup** — `<header>`, `<main>`, `<section>`, `<article>`,
  and `<footer>` are used throughout for a clean, accessible document
  structure.

---

## Folder structure

```
submissions/examples/css-slide-up-card-grid/
├── demo.html     # Semantic markup for the gaming hub card grid
├── style.css     # All layout, animation, and responsive styles
└── README.md     # This file
```

---

## Usage

1. Open `demo.html` directly in any modern browser — no build step or
   server required.
2. To reuse the grid in your own project, copy `style.css` and the
   `.hub-main` / `.card-grid` / `.game-card` markup block from
   `demo.html` into your page.
3. If integrating into the full EaseMotion CSS repository, replace the
   local `.em-fade-in-down` / `.em-fade-in-up` fallback rules at the top
   of `style.css` with a `<link>` to the compiled core stylesheet
   (e.g. `../../../dist/ease-motion.css`), keeping the rest of the file
   as-is.

---

## Customization

| What to change              | Where                                                              |
|------------------------------|---------------------------------------------------------------------|
| Color palette                | CSS custom properties in the `:root` block at the top of `style.css` |
| Number of cards / grid columns | `.card-grid` (`grid-template-columns`) and its media queries      |
| Card height                  | `.game-card { height: ... }`                                       |
| Card artwork                 | `.game-card__media--*` gradient classes, or swap for `background-image` |
| Slide-up distance / speed    | `.game-card__slide-panel { transform }` and the `--em-duration-*` tokens |
| Entrance stagger timing      | Inline `style="--em-delay: ...ms;"` on each `.game-card` in `demo.html` |
| Badge labels ("New", "Hot")  | `.game-card__badge` elements inside each card in `demo.html`         |

---

## Browser support

Uses only standard, widely supported CSS: CSS custom properties, CSS
Grid, `transform`/`transition`, `@keyframes`, and the
`prefers-reduced-motion` media feature. Works in all current versions of
Chrome, Firefox, Safari, and Edge.