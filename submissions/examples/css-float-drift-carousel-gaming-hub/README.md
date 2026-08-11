# CSS Float-Drift Carousel — Gaming Hub Layout

A pure HTML5 + CSS carousel for gaming hub / featured-games layouts,
built around two continuous ambient motions — a slow drifting
background and gently floating foreground content — layered on top of
a soft, overshoot-eased slide transition. Navigation (arrows, dots,
slide state) is handled entirely with the **radio-input checkbox
hack**. There is no JavaScript and no external framework anywhere in
this submission.

---

## Overview

The carousel displays five featured games in a horizontally sliding
track. Each slide has two independently animated layers: a background
gradient that slowly pans back and forth (the "drift"), sprinkled with
small glowing particles that float upward and fade, and a foreground
content card — title, genre, description, CTA — that gently bobs up
and down (the "float"). Moving between slides shifts the track with a
soft overshoot easing curve, so each slide settles into place rather
than stopping abruptly. Navigation is available via per-slide
previous/next arrows, dot indicators, or keyboard focus.

---

## Features

- **Two-layer ambient motion** — a `bgDrift` keyframe animation slowly
  pans each slide's background gradient, while independent
  `particleFloat` keyframes send small glowing orbs drifting upward and
  fading out at staggered delays, creating a parallax-like sense of
  depth without any external images or JavaScript.
- **Floating content card** — the foreground `.drift-carousel__content`
  layer runs its own slow `contentFloat` bob, decoupled from the
  background drift, so text and the CTA feel weightless rather than
  pinned in place.
- **Soft drift-to-rest slide transition** — changing slides eases the
  track's `transform: translateX()` with `--em-ease-drift`
  (`cubic-bezier(0.34, 1.56, 0.64, 1)`), a gentle overshoot that settles
  smoothly rather than snapping to a stop.
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
  wired directly to its correct neighboring slide id), a row of dot
  indicators showing the active slide, and native keyboard focus on the
  radio inputs.
- **Fully responsive** — carousel height, content padding, typography,
  and arrow sizing all adapt across desktop, tablet (≤720px), and
  mobile (≤480px) breakpoints.
- **`prefers-reduced-motion` support** — all continuous ambient
  animations (background drift, floating particles, floating content)
  are stopped outright, particles are hidden entirely, the slide
  transition drops its overshoot for a quick linear change, and hover
  lift effects are removed — while every navigation method stays fully
  functional.
- **Semantic, accessible markup** — `aria-roledescription="carousel"`,
  `role="tablist"`/`role="tab"` on the dot navigation with descriptive
  per-slide `aria-label`s, `aria-label`s on the icon-only arrows, and a
  visible focus ring via `:focus-visible` on the hidden radio inputs.
- **Does not modify existing repository files** — this is a fully
  self-contained folder under `submissions/examples/`; nothing outside
  it is touched.

---

## Folder Structure

```
submissions/examples/css-float-drift-carousel-gaming-hub/
├── demo.html     # Semantic markup: 5 slides, radio-driven state, arrows, dots
├── style.css     # Layout, drift/float keyframes, slide transition, responsive styles
└── README.md     # This file
```

---

## Installation/Usage

1. Open `demo.html` directly in any modern browser — no build step,
   server, or JavaScript runtime required.
2. Navigate using:
   - The **‹** / **›** arrows on each slide, or
   - The dot indicators beneath the carousel, or
   - Tab to focus a hidden radio input and use arrow keys within the
     radio group.
3. To reuse this component elsewhere, copy the CSS custom properties
   from `:root`, the `.drift-carousel__radio` / `.drift-carousel__viewport`
   / `.drift-carousel__track` / `.drift-carousel__slide` /
   `.drift-carousel__bg` / `.drift-carousel__content` /
   `.drift-carousel__dots` rule blocks, and the corresponding markup
   pattern (radio inputs → track of slides, each with a background
   layer + content layer + embedded prev/next labels → dot labels)
   from `demo.html`.

---

## CSS Custom Properties

| Property                  | Default                              | Purpose                                              |
|-----------------------------|----------------------------------------|---------------------------------------------------------|
| `--bg-void`                 | `#0a0a0f`                             | Page background                                          |
| `--bg-card`                 | `#15151f`                             | Carousel viewport background                             |
| `--border-subtle`           | `rgba(255, 255, 255, 0.08)`           | Hairline borders, inactive dots                          |
| `--accent-cyan`              | `#22d3ee`                             | Primary accent (badges, genre tags, gradients)           |
| `--accent-violet`           | `#a78bfa`                             | Secondary accent (gradients, active dot)                 |
| `--accent-pink`              | `#f472b6`                             | "Hot" badge accent                                       |
| `--text-primary`            | `#f5f5f7`                             | Primary text color                                       |
| `--text-muted`              | `#9a9aa8`                             | Secondary/description text color                         |
| `--em-ease-standard`        | `cubic-bezier(0.22, 1, 0.36, 1)`      | General-purpose easing (fades)                           |
| `--em-ease-snappy`          | `cubic-bezier(0.16, 1, 0.3, 1)`       | Hover lift/scale easing                                  |
| `--em-ease-drift`           | `cubic-bezier(0.34, 1.56, 0.64, 1)`   | Gentle overshoot easing for the slide transition         |
| `--em-duration-fast`        | `200ms`                               | Hover/focus transition duration                          |
| `--em-duration-base`        | `450ms`                               | Header entrance animation duration                       |
| `--em-duration-drift`       | `850ms`                               | Slide track transition duration                          |
| `--float-duration`          | `6s`                                  | Foreground content bob cycle length                      |
| `--bg-drift-duration`       | `16s`                                 | Background pan cycle length                              |
| `--particle-duration`       | `9s`                                  | Floating particle rise/fade cycle length                 |
| `--carousel-slide-count`    | `5`                                   | Number of slides (drives track width math)               |
| `--carousel-height`         | `440px`                               | Viewport height (overridden per breakpoint)              |
| `--radius-lg`               | `22px`                                | Corner radius on the carousel viewport                   |

---

## Customization

| What to change                    | Where                                                                 |
|-------------------------------------|----------------------------------------------------------------------|
| Color palette                        | CSS custom properties in `:root`                                    |
| Number of slides                     | Update `--carousel-slide-count` in `:root`, then add/remove a radio input, a `.drift-carousel__slide` (with its own `.drift-carousel__bg` + particles + `.drift-carousel__content` + prev/next labels), and a matching dot label in `demo.html`, plus the corresponding `#drift-slide-N:checked ~ ...` transform/dot rules in `style.css` |
| Drift/float intensity or speed       | `--float-duration`, `--bg-drift-duration`, `--particle-duration`, and the translate distances inside the `contentFloat`, `bgDrift`, and `particleFloat` `@keyframes` blocks |
| Slide transition feel                | `--em-ease-drift` (adjust the overshoot control points) and `--em-duration-drift` |
| Carousel height                      | `--carousel-height` (also set per breakpoint in the responsive section) |
| Slide background art                 | `.drift-carousel__bg--*` gradient classes, or swap `background-image` for `url(...)` |
| Particle count/position               | Add/remove `.drift-carousel__particle` spans per slide, adjusting the `--p-x` / `--p-y` / `--p-delay` inline custom properties |
| Default starting slide               | Move the `checked` attribute in `demo.html` to a different `.drift-carousel__radio` |

---

## Browser Compatibility

Uses only standard, widely supported CSS: custom properties, flexbox,
`transform`/`transition` with custom `cubic-bezier()` easing,
`@keyframes` animations, the `:checked` and `:focus-visible`
pseudo-classes with sibling combinators, and the `prefers-reduced-motion`
media feature. Works in all current versions of Chrome, Firefox,
Safari, and Edge. In browsers without `:focus-visible` support,
keyboard focus still works via each browser's default focus styling;
only the custom focus-ring styling on the viewport is skipped.

---

## Accessibility

- The carousel container uses `aria-roledescription="carousel"` and an
  `aria-label` describing its contents.
- Dot navigation follows a `role="tablist"` / `role="tab"` pattern,
  with each dot's `aria-label` naming the specific slide it activates
  (e.g. "Slide 3: Neon Drift") so screen reader users don't have to
  rely on position alone.
- Icon-only prev/next arrows include `aria-label="Previous slide"` /
  `"Next slide"`.
- Decorative elements — background layers and floating particles — are
  marked `aria-hidden="true"` so they don't clutter screen reader
  output.
- Every interactive control is a real `<label>` bound to a real
  `<input type="radio">`, so the whole carousel is keyboard-operable
  without any custom scripting.
- A visible focus ring (`:focus-visible` on the hidden radio inputs,
  styled via the sibling `.drift-carousel__viewport`) helps keyboard
  users track focus.
- `prefers-reduced-motion: reduce` stops every continuous ambient
  animation (background drift, particles, content float), hides the
  particles outright, swaps the slide transition's overshoot for a
  quick linear change, and removes hover-based movement — while every
  navigation method remains fully functional.