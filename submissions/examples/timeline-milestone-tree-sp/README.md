# Interactive Timeline Milestone Tree with Scroll-Triggered Node Reveal

> A vertical milestone timeline component with `IntersectionObserver`-powered scroll reveals, a progressive spine fill, pulsing status nodes, and smooth expandable release notes cards. Built with pure HTML, CSS, and minimal vanilla JS.

## Features

- **Scroll-Triggered Node Reveal** — `IntersectionObserver` adds `.is-visible` to each `.timeline-item` as it enters the viewport, triggering alternating slide-in transitions (`translateX` + `opacity`).
- **Progressive Spine Fill** — A central gradient line (`--violet → --indigo → --cyan`) fills progressively as the user scrolls through the timeline section, giving a real-time sense of journey progress.
- **Pulsing Status Nodes** — Three distinct node styles: **Completed** (solid emerald glow), **In Progress** (animated indigo pulse ring), **Upcoming** (dashed amber border).
- **Alternating Layout** — Odd items slide in from the left; even items from the right, creating a visually balanced tree on desktop.
- **Expandable Release Notes Accordion** — Each card contains a `<button aria-expanded>` / `<div hidden>` accordion panel that opens/closes with a smooth CSS `max-height` + `opacity` transition without disrupting the spine alignment.
- **Mobile Stacked View** — Under 640px, all cards collapse to a single-column layout to the right of a left-anchored spine.
- **JS-Disabled Fallback** — A `<noscript>` style block overrides hidden state to render all cards fully visible when JavaScript is unavailable.
- **`prefers-reduced-motion` Safe** — All animations and transitions are disabled; items and spine fill to 100% immediately.

---

## Directory Structure

```
submissions/examples/timeline-milestone-tree-sp/
├── index.html    — Semantic HTML timeline with 6 milestone items and expand panels
├── style.css    — Central spine, node animations, alternating card transitions, mobile layout
├── script.js    — IntersectionObserver reveal, RAF-throttled spine fill, accordion logic
└── README.md    — Component documentation
```

---

## Design Tokens

| Variable | Default | Purpose |
|---|---|---|
| `--spine-width` | `3px` | Width of the central connecting spine line |
| `--node-size` | `44px` | Diameter of timeline milestone node circles |
| `--card-max-w` | `420px` | Maximum width of milestone cards on desktop |
| `--completed-color` | `#10b981` | Emerald — completed milestone accent |
| `--in-progress-color` | `#6366f1` | Indigo — in-progress milestone accent |
| `--upcoming-color` | `#f59e0b` | Amber — upcoming milestone accent |

---

## Usage

```html
<section class="timeline-section">
  <!-- Spine -->
  <div class="timeline-spine" aria-hidden="true">
    <div class="spine-fill" id="spine-fill"></div>
  </div>

  <!-- Milestone Item (left) -->
  <article class="timeline-item item-left" data-status="completed">
    <div class="timeline-node" aria-hidden="true">
      <div class="node-ring"></div>
      <div class="node-core"><!-- icon SVG --></div>
    </div>
    <div class="milestone-card">
      <!-- card content -->
      <button class="expand-btn" aria-expanded="false" aria-controls="details-1">
        View Release Notes
      </button>
      <div class="expand-panel" id="details-1" hidden>
        <ul class="release-notes-list"> ... </ul>
      </div>
    </div>
  </article>

  <!-- Milestone Item (right) -->
  <article class="timeline-item item-right" data-status="in-progress">
    ...
  </article>
</section>
```

---

## JavaScript Behavior

| Feature | Mechanism |
|---|---|
| Scroll reveal | `IntersectionObserver` with `threshold: 0.15` and `rootMargin: 0px 0px -10% 0px` |
| Spine fill | `window.scroll` + `requestAnimationFrame` throttle updating `spine-fill` height |
| Accordion open | `panel.removeAttribute('hidden')` → CSS `max-height` transition triggers |
| Accordion close | `panel.setAttribute('hidden', '')` → CSS collapses back to `max-height: 0` |
| Keyboard support | `Escape` key closes open panels and returns focus to trigger button |

---

## Acceptance Criteria ✅

- [x] Isolated in `submissions/examples/timeline-milestone-tree-sp/`.
- [x] Timeline nodes animate into view gracefully when scrolling down the page.
- [x] Vertical spine line highlights progressively based on active viewport scroll position.
- [x] Mobile view gracefully stacks all milestone cards to the right of the spine (≤640px).
- [x] Accordion expansion inside cards opens smoothly without disrupting spine alignment.
- [x] Graceful fallback — all cards fully visible if JavaScript is disabled or unsupported.

---

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
