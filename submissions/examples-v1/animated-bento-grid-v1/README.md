# Animated Bento Grid Layout

> An EaseMotion CSS component — animation-first, human-readable, composable.

---

## Description

**Animated Bento Grid** is a production-ready, CSS-only layout component inspired by Apple's product-marketing grids, Framer's component library, and Linear's application UI. It arranges a set of feature cards in an asymmetric multi-column bento pattern — large hero, small accent, wide banner, and medium trio — with fluid responsive breakpoints that gracefully collapse the layout down to a single-column mobile feed.

Every visual effect — glassmorphism surfaces, entrance choreography, hover lift, gradient glows — is implemented with pure HTML and CSS. Zero JavaScript. Zero build step. Drop in two files and it works.

---

## Features

- **CSS Grid layout** — named template areas define the bento structure; easy to re-arrange without touching the HTML
- **Animation-first** — staggered `em-fade-up` entrance, hover `translateY` lift, scale pulse, and ambient ring rotation are all declared via `@keyframes` and `transition`
- **Glassmorphism** — `backdrop-filter: blur()` + translucent `rgba` backgrounds produce a frosted-glass depth effect
- **Gradient accent system** — each card carries a BEM modifier (`--accent-blue`, `--accent-purple`, …) that applies a distinct radial glow on hover
- **Responsive at every breakpoint** — 4-column → 2-column → 1-column via two clean `@media` queries
- **Accessible** — `aria-label` on every card, `prefers-reduced-motion` respected, semantic `<article>` elements
- **No JavaScript** — no framework, no CDN dependency, no build tooling required
- **MIT licensed** — free to use, modify, and distribute

---

## Usage

### 1. Copy the files into your project

```
animated-bento-grid/
├── demo.html
├── style.css
└── README.md
```

### 2. Link the stylesheet

```html
<link rel="stylesheet" href="style.css" />
```

### 3. Add the grid markup

The minimum skeleton for one card is:

```html
<div class="bento-grid">
  <article class="bento-card bento-card--large bento-card--accent-blue">
    <div class="bento-card__glow" aria-hidden="true"></div>
    <div class="bento-card__inner">
      <span class="bento-card__icon">🚀</span>
      <div class="bento-card__body">
        <h2 class="bento-card__title">Card Title</h2>
        <p class="bento-card__desc">Short description here.</p>
      </div>
    </div>
  </article>
  <!-- …more cards -->
</div>
```

### 4. Choose a size modifier

| Modifier | Grid area | Typical use |
|---|---|---|
| `bento-card--large`  | spans 3 columns | Hero feature |
| `bento-card--small`  | 1 column        | Secondary highlight |
| `bento-card--wide`   | spans 3 columns | Horizontal stat or banner |
| `bento-card--medium` | 1 column each   | Three-up feature row |

### 5. Choose an accent modifier

| Modifier | Accent |
|---|---|
| `bento-card--accent-blue`     | Electric blue |
| `bento-card--accent-purple`   | Soft violet |
| `bento-card--accent-cyan`     | Bright cyan |
| `bento-card--accent-indigo`   | Indigo |
| `bento-card--accent-rose`     | Rose |
| `bento-card--accent-teal`     | Teal |
| `bento-card--accent-gradient` | Blue → cyan gradient (wide card) |

### 6. Customise tokens

All colours, radii, gaps, and easing curves live in `:root` CSS custom properties at the top of `style.css`. Override them globally or scope them to a wrapper element:

```css
.my-section {
  --color-bg:      #f8f9fc;          /* switch to light theme */
  --accent-blue:   #2563eb;
  --radius-card:   24px;
}
```

---

## Why it fits EaseMotion CSS

EaseMotion CSS is built on three tenets:

### Human-readable
Every class name maps to a plain-English concept. `bento-card--accent-purple` means exactly what it says. `em-fade-up` names the animation the way a motion designer would name it on a storyboard. No utility soup, no cryptic abbreviations.

### Animation-first
Animations are not bolted on after the fact — they are structural. The entrance stagger is defined at the grid level. The hover lift is part of the base card definition. The glow blob is always in the DOM; the `opacity` transition on hover is all that fires it. Animations compose with the layout, not against it.

### Composable
Each concern — size, accent, inner layout, decoration — is an independent modifier or element. `bento-card--large` controls grid placement. `bento-card--accent-blue` controls glow colour. `bento-card__inner--row` switches the inner flex direction. Mixing them produces no conflicts because they operate on orthogonal properties.

---

## Folder Structure

```
animated-bento-grid/
├── demo.html      ← fully self-contained browser demo
├── style.css      ← all tokens, layout, animations, responsive rules
└── README.md      ← this file
```

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge 88+ | ✅ Full (backdrop-filter unprefixed) |
| Firefox 103+ | ✅ Full |
| Safari 14+ | ✅ Full (`-webkit-backdrop-filter` included) |
| iOS Safari 14+ | ✅ Full |

---

## License

MIT — © EaseMotion CSS contributors.
Use it, fork it, ship it.