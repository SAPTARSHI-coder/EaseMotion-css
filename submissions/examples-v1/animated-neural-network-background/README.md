# Animated Neural Network Background

> **EaseMotion CSS** — Premium Component Library  
> `animated-neural-network-background`

---

## Description

A fully CSS-only, animated neural network background component designed as a premium Hero section. It renders a field of glowing nodes connected by data-flow lines against a deep dark background with soft radial blobs, all layered beneath a glassmorphic hero card containing a badge, headline, description, and two CTAs.

It is built to feel at home alongside products from OpenAI, Anthropic, Apple, or Linear — premium, clean, purposeful, and alive without being distracting.

---

## Features

- **CSS Only** — Zero JavaScript, zero dependencies, zero build step
- **Responsive** — Desktop, tablet, and mobile breakpoints with carefully adjusted layouts and node/line density
- **Animated Nodes** — 36+ individually staggered pulsing glowing circles across the scene
- **Data Flow Lines** — Gradient-animated connection lines simulating live data traversal
- **Glassmorphism** — Backdrop-blur badge, ghost button, and frosted-glass depth throughout
- **Background Blobs** — Four large radial-gradient blobs that slowly drift to create atmospheric depth
- **Fade-in & Slide-up Hero** — Staggered CSS entrance animations for every hero element
- **Accent Gradient Animation** — The word "Connected" shifts through a blue→purple→cyan cycle
- **Glow Animations** — Badge border pulses, node box-shadows breathe, buttons glow on hover
- **Accessible** — Full `prefers-reduced-motion` support: all animations disabled, static fallback rendered

---

## Folder Structure

```
animated-neural-network-background/
├── demo.html     ← Full working demo
├── style.css     ← All component styles
└── README.md     ← This file
```

---

## Usage

**1. Copy the files into your project:**

```bash
cp demo.html   your-project/
cp style.css   your-project/
```

**2. Link the stylesheet in your HTML `<head>`:**

```html
<link rel="stylesheet" href="style.css" />
```

**3. Add the component markup:**

Paste the `.nn-scene` element (with all its children) into your page body. The component is self-contained — all nodes, lines, blobs, and hero content live inside `.nn-scene`.

**4. (Optional) Customise design tokens in `style.css`:**

```css
:root {
  --nn-blue: #2563eb; /* Primary blue  */
  --nn-purple: #7c3aed; /* Primary purple */
  --nn-cyan: #06b6d4; /* Primary cyan  */
  --nn-speed-blob: 18s; /* Blob drift speed */
  --nn-speed-node: 3.4s; /* Node pulse speed */
  --nn-speed-data: 4s; /* Data flow speed  */
}
```

All visual behaviour is controlled via CSS variables — no need to touch layout code.

---

## Animation Reference

| Class / Element            | Animation         | Default Duration |
| -------------------------- | ----------------- | ---------------- |
| `.nn-blob`                 | `nn-blob-drift`   | 18 – 24s         |
| `.nn-node`                 | `nn-node-pulse`   | 3.4s             |
| `.nn-line`                 | `nn-data-flow`    | 4 – 7.4s         |
| `.nn-hero`                 | `nn-hero-enter`   | 0.9s             |
| `.nn-hero__heading-accent` | `nn-accent-shift` | 6s               |
| `.nn-hero__badge`          | `nn-badge-glow`   | 3s               |
| `.nn-hero__badge-dot`      | `nn-dot-blink`    | 2.4s             |

---

## Why It Fits EaseMotion CSS

EaseMotion CSS is built around three core principles. This component was designed with each of them in mind from the first line of code:

### 1. Animation-First

Every element in this component exists to _move_. The nodes breathe. The lines carry data. The blobs drift. The hero text enters the stage with choreography. Motion is not a layer added on top of a static design — it is the design. The `@keyframes` are the primary building blocks; the layout and colour exist to frame them.

### 2. Human-Readable

Every CSS variable, class name, and keyframe is named to describe what it _is_ and what it _does_ in plain English: `nn-node-pulse`, `nn-data-flow`, `nn-hero-enter`, `nn-blob-drift`. A developer reading this file for the first time can understand the intent of any rule without a comment. Where a comment adds value beyond the name itself, it is there — but the names carry the meaning first.

### 3. Composable

The component is layered into independent, self-contained zones: `.nn-blobs`, `.nn-connections`, `.nn-nodes`, `.nn-vignette`, `.nn-hero`. Each layer can be removed, replaced, or restyled without breaking the others. The design tokens in `:root` form a shared vocabulary that any layer reads from. A developer can swap the hero content for their own, add more nodes by copying a single `<div>`, or change the entire colour scheme by editing five variables. That is composability — the architecture invites extension rather than resisting it.

---

## Browser Support

| Browser        | Support |
| -------------- | ------- |
| Chrome 88+     | ✅ Full |
| Firefox 87+    | ✅ Full |
| Safari 14+     | ✅ Full |
| Edge 88+       | ✅ Full |
| iOS Safari 14+ | ✅ Full |

> `backdrop-filter` / `-webkit-backdrop-filter` is used for glassmorphism effects and is supported in all modern browsers. Older browsers will display a solid semi-transparent fallback with no visual breakage.

---

## License

MIT — free to use in open-source and commercial projects.  
Part of the **EaseMotion CSS** open-source animation library.
