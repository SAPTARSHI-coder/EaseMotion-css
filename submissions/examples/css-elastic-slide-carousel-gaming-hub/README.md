# CSS Elastic-Slide Carousel — Gaming Hub Layout

A pure HTML5 + CSS carousel for gaming hub / featured-games layouts.
Sliding between games uses a springy, overshoot-and-settle "elastic"
transition instead of a flat linear slide. All navigation — arrows,
dots, and slide state — is handled entirely with the **radio-input
checkbox hack**. There is no JavaScript and no external framework
anywhere in this submission.

---

## Overview

The carousel displays five featured games in a horizontally sliding
track. Each slide fills the viewport with CSS-gradient cover art, a
title, genre tag, short description, and a "Play Now" call-to-action.
Navigation is available three ways: previous/next arrows on each slide,
dot indicators below the carousel, and direct keyboard focus on the
underlying (visually hidden) radio inputs. Moving between slides
triggers a bounce-like elastic transition powered by a custom
`cubic-bezier()` easing curve.

---

## Features

- **Elastic slide transition** — the track's `transform: translateX()`
  change is eased with `--em-ease-elastic`
  (`cubic-bezier(0.68, -0.6, 0.32, 1.6)`), which overshoots past its
  final position before settling — a springy motion instead of a flat
  linear or ease-out slide.
- **Zero JavaScript, zero frameworks** — slide state is driven by five
  hidden `<input type="radio">` elements, each paired with `<label>`
  triggers (arrows and dots) via the `:checked` pseudo-class and
  sibling combinators.
- **EaseMotion CSS utility classes** — uses `.em-fade-in-down` for the
  header's entrance animation. Defined as a self-contained fallback in
  `style.css` (see the "EaseMotion CSS utilities" section) so the demo
  works standalone; swap in the compiled `dist/ease-motion.css` core
  stylesheet when merging into the main repo and the same class name
  keeps working with the shared utility instead.
- **Three navigation methods** — per-slide prev/next arrows (each
  wired directly to its correct neighboring slide id, so no runtime
  "current ± 1" calculation is needed), a row of dot indicators showing
  the active slide, and native keyboard focus/selection on the radio
  inputs themselves.
- **Fully responsive** — carousel height, padding, typography, and
  arrow sizing all adapt across desktop, tablet (≤720px), and mobile
  (≤480px) breakpoints.
- **`prefers-reduced-motion` support** — the elastic overshoot
  transition is replaced with a fast linear transition, and all hover
  lift/scale effects on arrows, dots, and the CTA button are removed,
  for users who request reduced motion. Navigation remains fully
  functional either way.
- **Semantic, accessible markup** — `aria-roledescription="carousel"`,
  `role="tablist"`/`role="tab"` on the dot navigation with descriptive
  `aria-label`s per slide, `aria-label`s on the icon-only prev/next
  arrows, and a visible focus ring via `:focus-visible` on the hidden
  radio inputs.
- **Does not modify existing project files** — this is a fully
  self-contained folder under `submissions/examples/`; nothing outside
  it is touched.

---

## Folder structure

```
submissions/examples/css-elastic-slide-carousel-gaming-hub/
├── demo.html     # Semantic markup: 5 slides, radio-driven state, arrows, dots
├── style.css     # All layout, elastic-easing transition, and responsive styles
└── README.md     # This file
```

---

## Usage

1. Open `demo.html` directly in any modern browser — no build step,
   server, or JavaScript runtime required.
2. Navigate using:
   - The **‹** / **›** arrows on each slide, or
   - The dot indicators beneath the carousel, or
   - Tab to focus a hidden radio input and use arrow keys within the
     radio group.
3. To reuse this component elsewhere, copy the CSS custom properties
   from `:root`, the `.carousel__radio` / `.carousel__viewport` /
   `.carousel__track` / `.carousel__slide` / `.carousel__dots` rule
   blocks, and the corresponding markup pattern (radio inputs → track
   of slides with embedded prev/next labels → dot labels) from
   `demo.html`.

---

## Customization

| What to change                    | Where                                                                 |
|-------------------------------------|----------------------------------------------------------------------|
| Color palette                        | CSS custom properties in `:root`                                    |
| Number of slides                     | Update `--carousel-slide-count` in `:root`, then add/remove a radio input, a `.carousel__slide`, its prev/next `<label>` targets, and a matching `.carousel__dot` label in `demo.html`, plus the corresponding `#slide-N:checked ~ ...` transform/dot rules in `style.css` |
| Elastic bounce intensity             | The `--em-ease-elastic` cubic-bezier value — increasing the negative/over-1 control points increases overshoot |
| Slide transition speed               | `--em-duration-elastic`                                              |
| Carousel height                      | `--carousel-height` (also set per breakpoint in the responsive section) |
| Slide cover art                      | `.carousel__slide--*` background-image gradients, or swap for `background-image: url(...)` |
| Default starting slide               | Move the `checked` attribute in `demo.html` to a different `.carousel__radio` |

---

## CSS custom properties

| Property                | Default                              | Purpose                                          |
|--------------------------|---------------------------------------|---------------------------------------------------|
| `--bg-void`              | `#0a0a0f`                             | Page background                                    |
| `--bg-card`              | `#1b1b26`                             | Carousel viewport background                       |
| `--border-subtle`        | `rgba(255, 255, 255, 0.08)`           | Hairline borders, inactive dots                    |
| `--accent-cyan`          | `#22d3ee`                             | Primary accent (badges, genre tags, gradients)     |
| `--accent-violet`        | `#a78bfa`                             | Secondary accent (gradients, active dot)           |
| `--accent-pink`          | `#f472b6`                             | "Hot" badge accent                                 |
| `--text-primary`         | `#f5f5f7`                             | Primary text color                                 |
| `--text-muted`           | `#9a9aa8`                             | Secondary/description text color                   |
| `--em-ease-standard`     | `cubic-bezier(0.22, 1, 0.36, 1)`      | General-purpose easing (fades)                     |
| `--em-ease-snappy`       | `cubic-bezier(0.16, 1, 0.3, 1)`       | Hover lift/scale easing                            |
| `--em-ease-elastic`      | `cubic-bezier(0.68, -0.6, 0.32, 1.6)` | Springy overshoot easing for the slide transition  |
| `--em-duration-fast`     | `200ms`                               | Hover/focus transition duration                    |
| `--em-duration-base`     | `450ms`                               | Header entrance animation duration                 |
| `--em-duration-elastic`  | `750ms`                               | Slide track transition duration                    |
| `--carousel-slide-count` | `5`                                   | Number of slides (drives track width math)         |
| `--carousel-height`      | `420px`                               | Viewport height (overridden per breakpoint)        |
| `--radius-lg`            | `20px`                                | Corner radius on the carousel viewport             |

---

## Accessibility

- The carousel container uses `aria-roledescription="carousel"` and an
  `aria-label` describing its contents.
- Dot navigation follows a `role="tablist"` / `role="tab"` pattern,
  with each dot's `aria-label` naming the specific slide it activates
  (e.g. "Slide 2: Ironforge Legends") so screen reader users don't have
  to rely on position alone.
- Icon-only prev/next arrows include `aria-label="Previous slide"` /
  `"Next slide"`.
- Every interactive control is a real `<label>` bound to a real
  `<input type="radio">`, so the whole carousel is keyboard-operable
  without any custom scripting.
- A visible focus ring (`:focus-visible` on the hidden radio inputs,
  styled via the sibling `.carousel__viewport`) helps keyboard users
  track focus.
- `prefers-reduced-motion: reduce` swaps the elastic overshoot
  transition for a quick linear one and removes hover-based movement,
  while keeping every navigation method fully functional.

---

## Browser compatibility

Uses only standard, widely supported CSS: custom properties, flexbox,
`transform`/`transition` with custom `cubic-bezier()` easing, the
`:checked` and `:focus-visible` pseudo-classes with sibling
combinators, and the `prefers-reduced-motion` media feature. Works in
all current versions of Chrome, Firefox, Safari, and Edge. In browsers
without `:focus-visible` support, keyboard focus still works via each
browser's default focus styling; only the custom focus-ring styling on
the viewport is skipped.