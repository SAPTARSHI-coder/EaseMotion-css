# Animated Aurora Hero Section

A premium, CSS-only animated hero section for the [EaseMotion CSS](https://github.com/your-org/easemotion-css) open-source animation library. Features flowing aurora background blobs, glassmorphism card styling, staggered entrance animations, and micro-interactive buttons — all with zero JavaScript.

---

## Description

This component delivers a production-ready hero section that feels at home on award-winning landing pages. Five independently animated gradient blobs create a living, breathing aurora effect beneath a glassmorphism content card. Every element enters with a staggered `fade-up` animation, the gradient heading cycles through a soft glow, and both buttons reward hover interactions with deliberate tactile feedback.

The entire experience is driven by CSS custom properties, keyframes, and `backdrop-filter` — no runtime JS, no frameworks, no build step required.

---

## Features

- **Animated Aurora Background** — Five multi-coloured radial-gradient blobs (violet, cobalt, cyan, teal, magenta) drift independently via CSS keyframe transforms and alternate-direction timing
- **Glassmorphism Card** — `backdrop-filter: blur()` + `saturate()` surface with a translucent border and a top-edge gradient shimmer line
- **Staggered Entrance Animations** — Badge, heading, description, buttons, and metrics each fade and slide up with `--delay` CSS variable offsets
- **Gradient Text Glow** — The accent heading line uses `background-clip: text` with an animated `drop-shadow` filter loop
- **Primary Button** — Full gradient fill, spring-eased lift on hover, animated inner glow, and an arrow that slides right
- **Ghost Button** — Glassmorphism base with a masked gradient border that fades in on hover
- **Responsive** — Three breakpoints (desktop / tablet / mobile) with collapsing button stack, adjusted card padding, and simplified metric layout
- **CSS Only** — Zero JavaScript; zero external frameworks; no build step
- **Motion Safe** — All animations respect `prefers-reduced-motion: reduce` via a single media-query override block

---

## Usage

### 1. Copy the files

```
animated-aurora-hero-section/
├── demo.html
├── style.css
└── README.md
```

### 2. Link the stylesheet

```html

```

### 3. Drop the markup into your page

Copy the contents of `demo.html`'s `<body>` into your own layout. The aurora stage is `position: fixed` so it tiles the viewport; the hero section itself is `position: relative; z-index: 1`.

### 4. Customise tokens

All colours, radii, spacing, and timing live in `:root` CSS variables at the top of `style.css`. Override them per-page without touching component code:

```css
:root {
  --aurora-a: #6e40c9; /* blob 1 colour */
  --aurora-b: #1a6cf6; /* blob 2 colour */
  --col-bg: #04060f; /* page background */
  --grad-text: linear-gradient(135deg, #a78bfa, #60a5fa, #22d3ee);
}
```

### 5. Stagger delay helper

The `.animate-fade-up` utility reads a `--delay` inline custom property:

```html
...
```

Chain as many elements as you like with increasing delays for smooth sequential reveals.

---

## Why it fits EaseMotion CSS

EaseMotion CSS is built on three core principles. This component embodies all three:

### Animation-first

Every visual layer is in motion: aurora blobs use uniquely timed `translate + scale` keyframe sequences, the badge dot pulses, the heading accent glows, the card shimmer animates, and the orbs float. Motion is not decorative afterthought — it _is_ the design. The component proves that expressive, multi-layered animation is achievable with pure CSS.

### Human-readable

The CSS is organised in clearly numbered sections (tokens → reset → aurora → hero → buttons → metrics → animations → responsive → reduced-motion). Keyframe names (`aurora-drift-2`, `fade-up-in`, `glow-text`) describe exactly what they do. Utility classes follow a consistent `animate-*` namespace. Any developer can scan the file and understand the animation architecture without reading documentation.

### Composable

Each animation piece is independent and reusable:

|
Piece
|
Reuse
|
|

---

## |

|
|
`.aurora-stage`

- `.aurora-blob`
  |
  Drop into any page as a full-screen background
  |
  |
  `.animate-fade-up`
- `--delay`
  |
  Apply to any element for staggered entrance
  |
  |
  `.btn--primary`
  /
  `.btn--ghost`
  |
  Standalone button styles
  |
  |
  `.hero__card`
  glassmorphism
  |
  Any card or modal surface
  |
  |
  `--grad-text`
  glow heading
  |
  Any display heading
  |

Compositions can be mixed: use the aurora background with a completely different card, or use the button styles in a navigation bar. Nothing is hardcoded to a single parent container.

---

## Folder Structure

```
animated-aurora-hero-section/
├── demo.html    ← Full working demo, self-contained markup
├── style.css    ← Complete stylesheet (tokens → layout → animations)
└── README.md    ← This file
```

---

## Browser Support

|
Feature
|
Support
|
|

---

## |

|
|
`backdrop-filter`
|
Chrome 76+, Safari 9+, Firefox 103+
|
|
CSS custom properties
|
All modern browsers
|
|
`background-clip: text`
|
All modern browsers (with
`-webkit-`
prefix included)
|
|
`prefers-reduced-motion`
|
All modern browsers
|

For browsers without `backdrop-filter` support, the card falls back gracefully to the semi-transparent background colour without blur.

---

## License

MIT — use freely in personal and commercial projects. Attribution appreciated but not required.
