# Animated Masonry Gallery

A Pinterest-inspired, premium masonry gallery component for [EaseMotion CSS](https://github.com/easemotioncss) — built with pure HTML and CSS, zero JavaScript, zero dependencies.

---

## Description

Animated Masonry Gallery is a production-ready UI component that arranges content cards into a fluid, variable-height masonry layout. It uses CSS multi-column layout to achieve the Pinterest-style column flow, and layers in a full animation system — from staggered entrance keyframes to spring-physics hover lifts — entirely in CSS.

The visual language draws from glassmorphism: translucent surfaces, blurred backdrop layers, blue-purple gradient palettes, and soft volumetric orb decorations. The result feels at home on design-forward products like Framer, Linear, or Vercel.

---

## Features

| Feature | Detail |
|---|---|
| **Masonry Layout** | CSS `columns` multi-column layout. Cards break-inside: avoid to prevent splits. |
| **Responsive** | 4 columns on desktop → 2 on tablet (≤900px) → 1 on mobile (≤520px). 5 columns on large screens (≥1600px). |
| **Staggered Load Animation** | Each card fades and slides up independently via a CSS variable `--card-delay` and `@keyframes card-enter`. |
| **Hover Lift** | Cards translate upward (`translateY(-8px)`) and scale slightly (`scale(1.015)`) on hover. |
| **Image Zoom** | The card visual region scales to `1.04` independently via a nested `transform` — only the image zooms, not the text body. |
| **Shadow Transition** | Shadow deepens and gains a blue-purple tint on hover using layered `box-shadow` tokens. |
| **Border Glow** | Border color transitions from a neutral transparent to a vivid `rgba(140, 100, 255, 0.55)` on hover. |
| **Glassmorphism** | Cards use `backdrop-filter: blur(12px)`, semi-transparent backgrounds, and layered shadow systems. |
| **Ambient Orb Animations** | Blurred light orbs inside each card visual drift on an infinite `alternate` loop — adding life without distraction. |
| **Gradient Placeholders** | 12 unique gradient schemes cover every card, using a full set of named CSS variable gradients. |
| **Reduced Motion** | All animations and transitions are disabled for users with `prefers-reduced-motion: reduce`. Cards remain fully visible. |
| **CSS Only** | Zero JavaScript. Zero frameworks. Zero build steps. |

---

## Usage

### 1. Copy the files into your project

```
animated-masonry-gallery/
├── demo.html
├── style.css
└── README.md
```

### 2. Link the stylesheet in your HTML

```html
<link rel="stylesheet" href="style.css" />
```

### 3. Add the gallery markup

```html
<div class="masonry-grid">

  <article class="card card--tall" style="--card-delay: 0.05s;">
    <div class="card__visual card__visual--ai">
      <div class="card__visual-layer"></div>
      <div class="card__orb card__orb--1"></div>
      <div class="card__orb card__orb--2"></div>
    </div>
    <div class="card__body">
      <span class="card__category">Artificial Intelligence</span>
      <h2 class="card__title">Neural Aesthetics</h2>
      <p class="card__desc">Your description here.</p>
    </div>
    <div class="card__glow"></div>
  </article>

  <!-- Repeat for more cards -->

</div>
```

### 4. Card height variants

Assign one of three height modifier classes to each card:

| Class | Visual Height |
|---|---|
| `.card--short` | 160px |
| `.card--medium` | 220px |
| `.card--tall` | 300px |

Mixing these creates the characteristic masonry stagger.

### 5. Staggered delay

Set `--card-delay` on each card as an inline style to control when it enters:

```html
<article class="card card--medium" style="--card-delay: 0.15s;">
```

Increment by `0.05s`–`0.10s` per card for a natural cascade effect.

### 6. Visual themes

Each `.card__visual` receives a gradient theme via a BEM modifier:

```css
/* Built-in themes */
.card__visual--ai        /* deep cosmic purple */
.card__visual--photo     /* warm amber */
.card__visual--design    /* blue-violet */
.card__visual--travel    /* teal-emerald */
.card__visual--tech      /* dark midnight */
.card__visual--portfolio /* indigo */
.card__visual--arch      /* emerald */
.card__visual--ai2       /* aurora multi-color */
.card__visual--photo2    /* crimson */
.card__visual--motion    /* neon teal */
.card__visual--travel2   /* sky blue */
.card__visual--quantum   /* rose-purple */
```

To add a custom theme, define a gradient variable and map it:

```css
:root {
  --grad-custom: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

.card__visual--custom {
  background: var(--grad-custom);
}
```

### 7. Using real images

Replace the gradient visual with a real image by adding an `<img>` inside `.card__visual`:

```html
<div class="card__visual card__visual--ai">
  <img src="your-image.jpg" alt="Description" style="width:100%;height:100%;object-fit:cover;" />
  <div class="card__visual-layer"></div>
</div>
```

---

## CSS Architecture

The stylesheet is organized into 12 clearly commented sections:

```
1.  Design Tokens (CSS Variables)
2.  Reset & Base
3.  Site Header
4.  Hero Section
5.  Gallery Layout (Masonry Grid)
6.  Card — Structure
7.  Card — Visuals (Gradient Placeholders)
    7a. Orbs & Decorative Elements
8.  Card — Hover Animations
9.  Keyframe Definitions
10. Site Footer
11. Media Queries
12. Reduced Motion Accessibility
```

---

## Animation Reference

| Animation | Trigger | Duration | Easing |
|---|---|---|---|
| `card-enter` | page load | `0.55s` | `cubic-bezier(0, 0, 0.2, 1)` |
| Stagger delay | `--card-delay` CSS var | `0.05s` steps | — |
| Lift + Scale | `:hover` | `0.40s` | Spring `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| Image zoom | `:hover` | `0.40s` | Smooth |
| Shadow deepen | `:hover` | `0.40s` | Smooth |
| Border glow | `:hover` | `0.40s` | Smooth |
| Title glow | `:hover` | `0.25s` | Smooth |
| `orb-drift-1/2` | ambient/always | `8s–10s` | `ease-in-out infinite alternate` |
| `rings-pulse` | ambient/always | `3s` | `ease-in-out infinite` |
| `pulse-dot` | ambient/always | `2.4s` | `ease-in-out infinite` |
| `header-in` | page load | `0.60s` | ease-out |
| `fade-up` | page load | `0.70s` | ease-out |

---

## Why It Fits EaseMotion CSS

EaseMotion CSS is built on three philosophical pillars — and this component embodies all three:

### 1. Animation-first

Every interactive state in this component is driven by animation. Hover is not a simple color change; it is a choreographed multi-property sequence: lift, zoom, shadow, glow, text-shadow, and border-color all transition in concert. The staggered page entrance ensures content appears alive from the first frame. Ambient orb animations keep the component breathing even at rest. Animation is not an afterthought — it is the primary interface feedback mechanism.

### 2. Human-readable

The CSS is written to be read. Design tokens are named semantically (`--ease-spring`, `--shadow-card-hover`, `--dur-base`). Card modifiers follow BEM (`card__visual--ai`). Keyframes have descriptive names (`card-enter`, `orb-drift-1`, `rings-pulse`). Every section is delimited by a clear comment header. A developer unfamiliar with the codebase can open `style.css` and immediately understand the animation system without needing documentation.

### 3. Composable

Every element of this component is independently overridable. Want a different card height? Change the modifier class. Want a different color theme? Override one CSS variable. Want a faster hover? Change `--dur-base`. The grid responsiveness is a single `columns` value change per breakpoint. New card types can be added with only an additional `.card__visual--name` gradient rule. The component's architecture encourages extension over modification.

---

## Folder Structure

```
animated-masonry-gallery/
├── demo.html       ← Full working demo with 12 sample cards
├── style.css       ← Complete animation + layout system
└── README.md       ← This file
```

---

## Browser Support

| Feature | Support |
|---|---|
| CSS `columns` (multi-column) | All modern browsers, IE10+ |
| `backdrop-filter` | Chrome 76+, Safari 9+, Firefox 103+ |
| CSS Custom Properties | All modern browsers, IE edge |
| `@keyframes` | Universal |
| `prefers-reduced-motion` | Chrome 74+, Firefox 63+, Safari 10.1+ |

For environments without `backdrop-filter` support, the cards gracefully fall back to a semi-transparent solid surface — no layout breaks.

---

## License

MIT — free for personal and commercial use.

---

*Part of the [EaseMotion CSS](https://github.com/easemotioncss) open-source animation component library.*