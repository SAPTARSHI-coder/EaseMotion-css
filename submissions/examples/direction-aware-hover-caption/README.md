# Direction-Aware Hover Caption Reveal

A CSS-only image card effect where a caption overlay smoothly slides into view from a specified direction when the user hovers over the card. No JavaScript required — open `demo.html` directly in any modern browser.

---

## Preview

A 2×2 responsive grid of image cards, each demonstrating a different slide direction:

| Card | Direction class | Behaviour |
|------|----------------|-----------|
| Mountain at Golden Hour | `.dah-from-bottom` | Caption rises up from below |
| Ocean Waves | `.dah-from-top` | Caption drops down from above |
| Forest Light | `.dah-from-left` | Caption sweeps in from the left |
| Starry Night | `.dah-from-right` | Caption sweeps in from the right |

---

## Folder contents

```
direction-aware-hover-caption/
├── demo.html   — Standalone demo (2×2 card grid)
├── style.css   — All styles for the feature
└── README.md   — This file
```

---

## Usage

### 1. Include the stylesheet

```html
<link rel="stylesheet" href="path/to/style.css" />
```

Optionally also link EaseMotion core variables for full token support:

```html
<link rel="stylesheet" href="path/to/core/variables.css" />
<link rel="stylesheet" href="path/to/style.css" />
```

### 2. HTML structure

Every card follows this pattern — swap the direction modifier class to change the reveal direction.

```html
<div class="dah-card dah-from-bottom">
  <img
    class="dah-card__image"
    src="your-image.jpg"
    alt="Descriptive alt text"
  />
  <div class="dah-card__caption">
    <span class="dah-card__caption-title">Card Title</span>
    <span class="dah-card__caption-desc">Short description here.</span>
  </div>
</div>
```

---

## Direction classes

| Class | Starting position | Slide direction |
|-------|------------------|-----------------|
| `.dah-from-bottom` | Caption starts **below** the card | Slides **up** into view |
| `.dah-from-top` | Caption starts **above** the card | Slides **down** into view |
| `.dah-from-left` | Caption starts **left** of the card | Slides **right** into view |
| `.dah-from-right` | Caption starts **right** of the card | Slides **left** into view |

Apply exactly **one** direction class alongside `.dah-card`:

```html
<!-- bottom (default) -->
<div class="dah-card dah-from-bottom"> … </div>

<!-- top -->
<div class="dah-card dah-from-top"> … </div>

<!-- left -->
<div class="dah-card dah-from-left"> … </div>

<!-- right -->
<div class="dah-card dah-from-right"> … </div>
```

---

## How it works

The card container uses `overflow: hidden` to clip the caption overlay. Each direction variant positions the caption **completely outside** the card via `transform: translate(±100%)`. On `:hover`, the transform is reset to `translate(0, 0)` and opacity fades in, giving a smooth slide reveal powered by CSS transitions.

EaseMotion design tokens used:

| Token | Role |
|-------|------|
| `--ease-speed-medium` | Transition duration (defaults to `300ms`) |
| `--ease-ease` | Transition timing function |
| `--ease-color-primary` | Accent bar colour on caption |
| `--ease-glass-bg` | Glassmorphism tint in overlay gradient |

All tokens have hard-coded fallback values, so the component works even without `variables.css`.

---

## Accessibility

- **`@media (prefers-reduced-motion: reduce)`** — When the user has requested reduced motion, all transitions and transforms are disabled. The caption is shown statically (fully visible, no animation) so content is never hidden from users who rely on this setting.
- **`aria-hidden="true"`** on `.dah-card__caption` — the overlay is decorative; the image `alt` text already provides the primary content description.
- **Keyboard / focus** — For interactive use cases, wrap the card in an `<a>` or `<button>` and remove `aria-hidden` from the caption so it reads correctly via screen readers.

---

## Example — full card with wrapper link

```html
<a href="/destination" class="dah-card dah-from-bottom" aria-label="Mountain at Golden Hour">
  <img
    class="dah-card__image"
    src="mountain.jpg"
    alt="Mountain landscape at golden hour"
  />
  <div class="dah-card__caption">
    <span class="dah-card__caption-title">Mountain at Golden Hour</span>
    <span class="dah-card__caption-desc">
      Explore alpine trails and stunning vistas.
    </span>
  </div>
</a>
```

---

## Browser support

Works in all evergreen browsers (Chrome, Firefox, Safari, Edge). Uses only `transform`, `transition`, `overflow: hidden`, and `opacity` — no experimental CSS required.
