# Changelog

All notable changes to Flow CSS are documented here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [v1.0.0] — 2026-03-29

### 🎉 Initial Public Release

Flow CSS v1.0.0 is the first public release of the framework. This version establishes the core architecture, animation system, component library, and contribution pipeline.

---

### Added

#### Core System

- `core/variables.css` — Complete design token system
  - Transition speeds: `--flow-speed-fast`, `--flow-speed-medium`, `--flow-speed-slow`
  - Easing curves: `--flow-ease`, `--flow-ease-out`, `--flow-ease-bounce`
  - Color palette: primary, success, danger, warning, neutrals (50–900 scale)
  - Glow tokens: `--flow-glow-primary`, `--flow-glow-success`, `--flow-glow-danger`
  - Spacing scale: `--flow-space-1` through `--flow-space-16`
  - Border radius scale, shadow system, typography tokens, z-index scale

- `core/base.css` — Reset and typographic foundation
  - Box-model reset, smooth scroll, font smoothing
  - Inter (Google Fonts) as default sans-serif
  - Semantic element defaults: headings, paragraphs, links, lists, code, pre
  - Accessible focus ring, custom selection color

- `core/animations.css` — Animation library (12 keyframes, 20+ classes)
  - Entrance: `flow-fade-in`, `flow-fade-out`, `flow-slide-up`, `flow-slide-down`, `flow-slide-in-left`, `flow-slide-in-right`, `flow-zoom-in`, `flow-flip`
  - Looping: `flow-bounce`, `flow-rotate`, `flow-pulse`, `flow-ping`, `flow-shake`
  - Hover: `flow-hover-grow`, `flow-hover-shrink`, `flow-hover-glow`, `flow-hover-lift`, `flow-hover-underline`
  - Stagger delays: `flow-delay-75`, `flow-delay-100`, `flow-delay-150`, `flow-delay-200`, `flow-delay-300`, `flow-delay-500`, `flow-delay-700`
  - Duration overrides: `flow-duration-fast/medium/slow`
  - `prefers-reduced-motion` support

- `core/utilities.css` — 80+ layout and styling utilities
  - Display: `flow-block`, `flow-flex`, `flow-grid`, `flow-hidden`
  - Flexbox: `flow-center`, `flow-flex-col`, `flow-items-*`, `flow-justify-*`
  - Grid: `flow-grid-cols-1/2/3/4`, `flow-grid-auto`
  - Gap, padding, margin scales
  - Width/height, container, positioning, overflow
  - Typography: size, alignment, weight, transform
  - Color: text and background variants
  - Border, radius, shadow, opacity, cursor
  - Responsive helpers (`flow-sm-*`)

#### Components

- `components/buttons.css` — Full button system
  - Variants: primary, success, danger, outline, ghost, link
  - Sizes: sm, base, lg, xl
  - Modifiers: pill, block, icon, loading spinner
  - States: disabled, active
  - `flow-btn-hover` — composable lift+glow hover animation
  - Button group layout

- `components/cards.css` — 12 card variants
  - Base card with header/body/footer sections
  - Modifiers: shadow, hover, glow, flat, outlined, glass, accent, image, compact, horizontal
  - Alert colors: info, success, danger
  - Stat card with value + label layout

#### Integrations (from community submissions)

- `flow-hover-grow` — [INTEGRATED] from `submissions/examples/hover-grow/`
- `flow-hover-shimmer` — [INTEGRATED] from `submissions/examples/hover-shimmer/`
- `flow-card-lift` — [INTEGRATED] from `submissions/examples/card-lift/`

#### Infrastructure

- `flow.css` — Single-import entry point
- `examples/demo.html` — Interactive showcase with dark theme, click-to-replay animations
- `docs/index.html` — Full sidebar documentation site
- `submissions/` — Curated contribution pipeline
  - `submissions/README.md` — Full workflow guide
  - `submissions/examples/hover-grow/` — Reference submission (integrated)
  - `submissions/examples/hover-shimmer/` — Reference submission (integrated)
  - `submissions/examples/card-lift/` — Reference submission (integrated)
  - `submissions/examples/button-glow/` — Pending review
- `.github/CODEOWNERS` — Maintainer enforced on all critical paths
- `.github/ISSUE_TEMPLATE/feature_request.md` — Structured feature request template
- `.github/PULL_REQUEST_TEMPLATE.md` — Strict PR checklist
- `.gitignore`

---

## Roadmap

See [VISION.md](./VISION.md) for the long-term direction.

---

*Maintained by [Saptarshi Sadhu](https://github.com/SAPTARSHI-coder)*
