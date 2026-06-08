# Changelog

All notable changes to EaseMotion CSS are documented here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Added

- Entrance animations `ease-slide-in-left` and `ease-slide-in-right` — horizontal siblings of `ease-slide-up` / `ease-slide-down`, completing the directional slide set (24px offset, fade-in)

---

## [v1.0.0] — 2026-03-29

### 🎉 Initial Public Release

EaseMotion CSS v1.0.0 is the first public release of the framework. This version establishes the core architecture, animation system, component library, and contribution pipeline.

---

### Added

#### Core System

- `core/variables.css` — Complete design token system
  - Transition speeds: `--ease-speed-fast`, `--ease-speed-medium`, `--ease-speed-slow`
  - Easing curves: `--ease-ease`, `--ease-ease-out`, `--ease-ease-bounce`
  - Color palette: primary, success, danger, warning, neutrals (50–900 scale)
  - Glow tokens: `--ease-glow-primary`, `--ease-glow-success`, `--ease-glow-danger`
  - Spacing scale: `--ease-space-1` through `--ease-space-16`
  - Border radius scale, shadow system, typography tokens, z-index scale

- `core/base.css` — Reset and typographic foundation
  - Box-model reset, smooth scroll, font smoothing
  - Inter (Google Fonts) as default sans-serif
  - Semantic element defaults: headings, paragraphs, links, lists, code, pre
  - Accessible focus ring, custom selection color

- `core/animations.css` — Animation library (12 keyframes, 20+ classes)
  - Entrance: `ease-fade-in`, `ease-fade-out`, `ease-slide-up`, `ease-slide-down`, `ease-slide-in-left`, `ease-slide-in-right`, `ease-zoom-in`, `ease-flip`
  - Looping: `ease-bounce`, `ease-rotate`, `ease-pulse`, `ease-ping`, `ease-shake`
  - Hover: `ease-hover-grow`, `ease-hover-shrink`, `ease-hover-glow`, `ease-hover-lift`, `ease-hover-underline`
  - Stagger delays: `ease-delay-75`, `ease-delay-100`, `ease-delay-150`, `ease-delay-200`, `ease-delay-300`, `ease-delay-400`, `ease-delay-500`, `ease-delay-600`, `ease-delay-700`, `ease-delay-800`, `ease-delay-1000`
  - Duration overrides: `ease-duration-fast/medium/slow`
  - `prefers-reduced-motion` support

- `core/utilities.css` — 80+ layout and styling utilities
  - Display: `ease-block`, `ease-flex`, `ease-grid`, `ease-hidden`
  - Flexbox: `ease-center`, `ease-flex-col`, `ease-items-*`, `ease-self-*`, `ease-justify-*`
  - Grid: `ease-grid-cols-1/2/3/4`, `ease-grid-auto`
  - Gap, padding, margin scales
  - Width/height, container, positioning, overflow
  - Typography: size, alignment, weight, transform
  - Color: text and background variants
  - Border, radius, shadow, opacity, cursor
  - Responsive helpers (`ease-sm-*`)

#### Components

- `components/buttons.css` — Full button system
  - Variants: primary, success, danger, outline, ghost, link
  - Sizes: sm, base, lg, xl
  - Modifiers: pill, block, icon, loading spinner
  - States: disabled, active
  - `ease-btn-hover` — composable lift+glow hover animation
  - Button group layout

- `components/cards.css` — 12 card variants
  - Base card with header/body/footer sections
  - Modifiers: shadow, hover, glow, flat, outlined, glass, accent, image, compact, horizontal
  - Alert colors: info, success, danger
  - Stat card with value + label layout

#### Integrations (from community submissions)

- `ease-hover-grow` — [INTEGRATED] from `submissions/examples/hover-grow/`
- `ease-hover-shimmer` — [INTEGRATED] from `submissions/examples/hover-shimmer/`
- `ease-card-lift` — [INTEGRATED] from `submissions/examples/card-lift/`

#### Infrastructure

- `easemotion.css` — Single-import entry point
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
