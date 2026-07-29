# Deep-Space Satellite Constellation Telemetry — Phase 817

**AstraGrid Mission Control** — a self-contained, 60fps HTML/CSS UI showcase for a
deep-space satellite constellation telemetry dashboard, built on top of the
**EaseMotion CSS** framework.

## What does this do?

It renders a full, responsive mission-control dashboard — live status navbar,
mission sidebar, animated orbital-constellation hero visual, a scrolling
telemetry ticker, radar/progress/space-weather panels, a satellite fleet
table, ground-station operations, a mission timeline, and a live alert feed —
using nothing but semantic HTML and CSS (no external JS, no CDNs, no build step).

## Live preview

Open [`demo.html`](./demo.html) directly in any modern browser (Chrome, Edge,
Firefox, Safari). There is no server, bundler, or dependency to install:

```bash
# from the repo root
start submissions/examples/deep-space-satellite-constellation-telemetry-phase-817/demo.html   # Windows
open  submissions/examples/deep-space-satellite-constellation-telemetry-phase-817/demo.html   # macOS
xdg-open submissions/examples/deep-space-satellite-constellation-telemetry-phase-817/demo.html # Linux
```

`demo.html` loads the framework via a relative path
(`../../../easemotion.css`) so it also renders correctly straight from a
cloned copy of this repository.

## How is it used?

The demo consumes real EaseMotion CSS component classes directly — `style.css`
only adds the deep-space theme, custom layout, and bespoke visuals
(orbit rings, radar sweep, telemetry ticker, timeline) on top of them.

```html
<!-- Glass navbar + live status badge -->
<header class="ease-navbar-glass ease-navbar-glass-blur ease-navbar-glass-sticky dst817-navbar">
  <div class="ease-navbar-brand dst817-brand">...</div>
  <nav class="ease-navbar-menu"><a class="ease-navbar-item" href="#dst817-overview">Overview</a></nav>
  <span class="ease-badge ease-badge-success ease-badge-pulse">LIVE</span>
</header>

<!-- Sidebar layout -->
<div class="ease-sidebar-layout dst817-layout">
  <aside class="ease-sidebar dst817-sidebar">...</aside>
  <main class="ease-sidebar-main dst817-main">...</main>
</div>

<!-- Glass hero card with entrance animation + shimmer heading -->
<section class="ease-card ease-card-glass dst817-hero">
  <h1>Deep-Space Satellite <span class="ease-shimmer-text">Constellation Telemetry</span></h1>
  <button class="ease-btn ease-btn-primary ease-btn-pill ease-btn-hover">View Live Constellation</button>
</section>

<!-- Animated counter stat card -->
<div class="ease-card ease-card-stat ease-card-hover">
  <span class="ease-stat-value"><span class="ease-count-up" style="--ease-count-target: 142"></span></span>
  <span class="ease-stat-label">Satellites Online</span>
</div>

<!-- Live telemetry ticker -->
<div class="ease-marquee ease-marquee-pause-on-hover ease-marquee-fade-edges">
  <div class="ease-marquee-track"><span>ORB-101 ▲ Δv burn nominal</span> ...</div>
</div>

<!-- Progress, tags, toast alerts -->
<div class="ease-progress ease-progress-lg ease-progress-info ease-progress-striped ease-progress-animated">
  <div class="ease-progress-bar" style="width:91%"></div>
</div>
<span class="ease-tag ease-tag-success">Online</span>
<div class="ease-toast ease-toast-success"><div class="ease-toast-body"><strong>Telemetry Link Restored</strong></div></div>
```

## Why is it useful?

EaseMotion CSS is a utility + component framework meant to make interfaces
feel alive without hand-rolled JavaScript. This showcase demonstrates that
philosophy end-to-end on a genuinely complex, data-dense UI:

- **Real component usage, not a re-skin from scratch.** The dashboard is
  assembled from actual `ease-*` components — navbar, sidebar, cards, badges,
  tags, progress bars, avatars, tooltips, breadcrumbs, toasts, marquee,
  footer, and FAB — rather than one-off custom markup, so the maintainer can
  see the framework's components composing into a real product surface.
- **Theming through cascade layers, not overrides.** `style.css` re-declares
  EaseMotion's own design tokens (`--ease-color-primary`, `--ease-glass-bg`,
  `--ease-footer-*`, …) at `:root`, unlayered. Since EaseMotion's own rules
  live inside `@layer easemotion-*`, unlayered CSS wins the cascade
  automatically — every component re-skins to the deep-space palette without
  a single `!important`.
- **60fps by construction.** Every custom keyframe (`dst817-orbit-spin`,
  `dst817-radar-spin`, `dst817-blip-ping`, `dst817-nebula-drift`, …) only
  animates `transform` and `opacity`, so the compositor handles them without
  triggering layout or paint. `prefers-reduced-motion: reduce` disables all
  decorative motion.
- **Actually responsive, without JavaScript.** EaseMotion's `ease-sidebar`
  ships an off-canvas mobile behavior that assumes a JS toggle. Since this
  track forbids JavaScript, `style.css` overrides the sidebar back to a
  static, reflowed layout under `900px` so the mission menu stays usable on
  mobile instead of disappearing.

## Component breakdown

| Section | EaseMotion components used |
|---|---|
| Top navigation | `ease-navbar-glass`, `ease-navbar-glass-blur`, `ease-navbar-glass-sticky`, `ease-navbar-brand`, `ease-navbar-menu`, `ease-navbar-item`, `ease-badge`, `ease-badge-success`, `ease-badge-pulse` |
| Breadcrumb | `ease-breadcrumb`, `ease-breadcrumb-list`, `ease-breadcrumb-item`, `ease-breadcrumb-link`, `ease-breadcrumb-separator`, `ease-breadcrumb-active` |
| Layout | `ease-sidebar-layout`, `ease-sidebar`, `ease-sidebar-main`, `ease-sidebar-label`, `ease-progress` (constellation health) |
| Hero | `ease-card`, `ease-card-glass`, `ease-tag`, `ease-shimmer-text`, `ease-fade-in`, `ease-slide-up`, `ease-btn`, `ease-btn-primary/outline`, `ease-btn-pill`, `ease-btn-hover`, `ease-hover-lift` |
| Stat grid | `ease-card-stat`, `ease-card-hover`, `ease-stat-value`, `ease-stat-label`, `ease-count-up`, `ease-delay-150/300/500` |
| Telemetry ticker | `ease-marquee`, `ease-marquee-track`, `ease-marquee-pause-on-hover`, `ease-marquee-fade-edges` |
| Telemetry panels | `ease-card-glass`, `ease-card-hover`, `ease-badge`, `ease-progress-lg/info/striped/animated`, `ease-tag-success/warning/info` |
| Link budget & fleet | `ease-card-outlined`, `ease-hover-lift-shadow`, `ease-tag-success/warning/danger` |
| Ground ops | `ease-avatar`, `ease-avatar-group`, `ease-tooltip`, `ease-tag-sm` |
| Mission timeline | `ease-bounce-in`, `ease-slide-in-left`, `ease-delay-*` |
| Alert feed | `ease-toast`, `ease-toast-success/warning/info`, `ease-toast-icon`, `ease-toast-body`, `ease-slide-in-left` |
| Footer | `ease-footer`, `ease-footer-container`, `ease-footer-grid`, `ease-footer-brand`, `ease-footer-logo`, `ease-footer-col`, `ease-footer-col-title`, `ease-footer-links`, `ease-footer-bottom`, `ease-footer-bottom-links` |
| FAB | `ease-fab`, `ease-fab-lg`, `ease-hover-glow` |
| Scroll feedback | `ease-scroll-progress`, `ease-scroll-progress-root` |

## Features

- Fully responsive: desktop, tablet, and mobile breakpoints (`1024px` /
  `900px` / `768px` / `480px`)
- Glassmorphism panels with a live deep-space starfield/nebula background
- Animated orbital-constellation hero visual (three counter-rotating rings)
- Rotating radar sweep with pinging satellite blips
- Live-scrolling telemetry ticker (`ease-marquee`)
- Striped/animated mission-progress bar
- Satellite fleet status table and ground-station roster
- Mission timeline with completed/pending states
- Static toast-styled live alert feed
- Zero external JavaScript, zero CDNs, zero build tools
- Respects `prefers-reduced-motion`

## Folder structure

```
deep-space-satellite-constellation-telemetry-phase-817/
├── demo.html   — full interactive dashboard markup
├── style.css   — deep-space theme, layout, and keyframe animations
└── README.md   — this file
```

## Technologies used

- HTML5 (semantic landmarks, `aria-label`s, skip link)
- CSS3 (Grid, Flexbox, `@layer` cascade, custom properties, `@property`,
  `conic-gradient`, scroll-driven `animation-timeline: scroll()`)
- EaseMotion CSS component library

## Notes

- No external JavaScript libraries or inline `<script>` tags are used.
- All animations are `transform`/`opacity`-driven for a stable 60fps and are
  disabled under `prefers-reduced-motion: reduce`.
- This submission only adds files under `submissions/examples/` and does not
  modify any existing framework file, per the project's contribution rules.
