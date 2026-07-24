# EaseMotion — AI Automated Patent & Scientific Discovery Engine
### Showcase Phase #986

A premium, futuristic landing page for a fictional AI-powered patent and
scientific discovery platform. Built as a **product showcase**, not a
dashboard — the goal is to sell the idea of the engine, not to operate it.

Pure HTML + CSS. **No JavaScript, no build step, no dependencies** beyond
two Google Font families loaded via `<link>`.

---

## Overview

Easemotion's Discovery Engine reads research literature and prior art,
maps the novelty surface between what's known and what's merely assumed,
drafts patent claims against the strongest supporting evidence, and routes
every disclosure to a human examiner before filing.

The page borrows its visual vocabulary from **the real language of patent
prosecution** rather than generic "AI dashboard" tropes: claim-style
numbering (¶ 0001…), classification codes (`G06N 3/084`, `C12N 15/63`),
docket numbers, a rotated "FILED" stamp, and a blueprint/cyanotype color
story. The signature element is the **Patent Ledger card** — a glass card
with a faint technical diagram, a moving light border, and a corner stamp,
designed to feel like a patent illustration rather than a SaaS feature
tile.

---

## Features

- **Hero section** — claim-style status badge, serif display headline with
  an animated gradient accent, and a glass "live inference trace" panel
  with animated progress bars.
- **Research pipeline** — four ¶-numbered stage cards (Signal Ingestion →
  Novelty Mapping → Claim Drafting → Examiner Review), each with a glow
  that intensifies on hover.
- **Discovery statistics** — four glass stat cards with gradient-clipped
  numerals and a soft-scale entrance.
- **Patent Ledger cards** — the signature component: rotating conic-gradient
  border, rotated "FILED" stamp, classification code, docket number, a
  hand-drawn SVG technical diagram, and a novelty score.
- **Prosecution timeline** — a vertical rail tracing one disclosure from
  signal detection to filing, with a distinct amber "Filed" terminus.
- **Call-to-action** — a glass panel with an animated rotating border and
  dual primary/secondary actions.
- **Footer** — brand mark, section links, and a docket-style colophon line.
- **Atmosphere** — an animated, perspective-free grid field plus three
  blurred, independently floating gradient blobs (teal, amber, violet) that
  drift behind every section.

### Animations implemented
| Animation | Where it's used |
|---|---|
| Fade Up | Hero copy, timeline cards, pipeline/patent card entrance |
| Float | Background gradient blobs (`float-blob`) |
| Glow Pulse | Live-status dot, final ("Filed") timeline node |
| Gradient Shift | Hero headline accent text |
| Hover Lift | Pipeline cards, patent cards |
| Soft Scale | Statistics cards entrance |
| Animated Grid Background | Full-bleed drifting grid behind all content |
| Moving Light Border | Patent Ledger cards + CTA panel (conic-gradient rotation) |

All animations are GPU-friendly (`transform`/`opacity`/`background-position`
only — no layout-triggering properties), and every animation respects
`prefers-reduced-motion: reduce`.

---

## Folder Structure

```
submissions/examples/ai-automated-patent-scientific-discovery-engine-phase-986/
├── demo.html      → Page markup (semantic HTML5, no JS)
├── style.css      → Full design system: tokens, layout, components, animation library
└── README.md      → This file
```

This submission only adds files inside its own example folder and does not
modify `core/`, `components/`, or `docs/`.

---

## Customization

Everything is driven from CSS custom properties declared once in `:root`
at the top of `style.css`:

```css
:root {
  --bg-0: #060912;       /* deepest background */
  --bg-1: #0A0E1A;       /* base background */
  --teal-500: #3DDC97;   /* primary signal color */
  --amber-400: #F2B85C;  /* filing-stamp / secondary accent */
  --violet-500: #6E6BF4; /* ambient blob accent */

  --font-display: "Fraunces", serif;   /* headlines */
  --font-body: "Inter", sans-serif;    /* UI copy */
  --font-mono: "JetBrains Mono", monospace; /* docket numbers, data */
}
```

To re-theme the page, change the color tokens — every gradient, glow, and
border in the file references them, so a palette swap propagates
automatically. To change pacing, adjust the `--delay` inline custom
property on any `.fade-up` / `.soft-scale` element, or the animation
`duration` values declared next to each `@keyframes` block.

The patent cards, stat cards, and pipeline cards are independent
`<article>` blocks in `demo.html` — duplicate one and edit its content to
add more without touching the CSS.

---

## Browser Support

Built against current evergreen browsers (Chrome/Edge, Firefox, Safari —
last two major versions).

- Uses `backdrop-filter` for glassmorphism (supported in all evergreen
  browsers; Safari requires the `-webkit-` prefix, which is included).
- Uses `@property` + conic-gradient rotation for the moving light border
  on Patent Ledger cards and the CTA panel. In browsers without
  `@property` support, the border simply renders as a static gradient
  outline instead of animating — a graceful, non-breaking fallback.
- Fully responsive from 360px mobile up through ultra-wide desktop, with
  a fluid type scale (`clamp()`) and grid collapses at 1024px / 760px /
  680px / 600px / 560px breakpoints.
- Respects `prefers-reduced-motion: reduce` by disabling all animation
  and transition durations site-wide.

---

## Preview

```
┌──────────────────────────────────────────────┐
│  ● WO/2026/114-AI · Examining in real time    │
│                                                │
│  Discovery, drafted                           │
│  at the speed of insight.                     │
│                                                │
│  [ Start a discovery run → ]  [ See pipeline ] │
│                                                │
│  ┌ live_inference.trace ─────────────────┐    │
│  │ ▓▓▓▓▓▓▓▓▓░░ Parsing 41.2M prior-art    │    │
│  │ ▓▓▓▓▓▓░░░░░ Mapping citation graph     │    │
│  └────────────────────────────────────────┘    │
└──────────────────────────────────────────────┘
```

Open `demo.html` directly in any modern browser — no server or build step
required.

---

## License

Provided as an open-source example contribution for the EaseMotion CSS
showcase repository. Free to use, adapt, and remix for learning and
portfolio purposes.