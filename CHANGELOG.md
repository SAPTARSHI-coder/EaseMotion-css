# Changelog

All notable changes to EaseMotion CSS are documented here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [v1.2.0] — 2026-07-08

### 🚀 Release Highlights

This release transforms EaseMotion CSS from a CSS utility library into a **full animation engineering platform** — adding a runtime motion engine, interactive playground, performance benchmarks, and a comprehensive test suite.

#### Added

##### Motion Engine (`easemotion/engine/`) — opt-in
A four-module animation DSL compiler and runtime:

- **`parser.js`** — Tokenizes `em=""` attribute strings into a typed AST.  
  `em="fade-in 500ms ease-out delay-200ms repeat-2"` → structured object.
- **`compiler.js`** — Converts AST into minimal CSS rules with stable hash-based class names. Automatically injects `prefers-reduced-motion` guards on every compiled rule.
- **`runtime.js`** — `MutationObserver`-powered browser runtime. Watches for `em=""` attributes, compiles them, and injects CSS on-the-fly. Auto-starts on `import 'easemotion-css/engine'`. Fully degrades when JS is disabled — pure CSS classes still work.
- **`optimizer.js`** — Build-time CSS tree-shaker. Strips unused `@keyframes` and `.ease-*` classes from the bundle based on what your HTML actually uses.
- **`easemotion/index.js`** — Public entry point. Re-exports all engine APIs.

Usage example:
```html
<!-- No class needed — the engine compiles and injects the CSS -->
<div em="slide-up 800ms spring delay-100ms"></div>

<script type="module">
  import 'easemotion-css/engine'; // opt-in
</script>
```

##### Interactive Playground (`docs/playground/index.html`)
Zero-dependency animation studio hosted on GitHub Pages:
- Live preview of all animations with real-time parameter controls
- Duration slider (100ms–3000ms), easing selector, delay, repeat
- Three output modes: **CSS class**, **`em=` attribute**, **npm/CDN snippet**
- One-click copy button for any output format

##### Benchmarks (`benchmarks/`)
- `bundle-size.mjs` — measures gzip size vs Animate.css and Framer Motion
- `benchmarks.yml` — GitHub Actions CI workflow that runs on every release tag and commits results back to `benchmarks/results/latest.json`

##### Tests
- `tests/engine.test.js` — 29 new unit tests for parser, compiler, and optimizer
- Total test suite: **61 tests** (up from 32)

#### Changed

- `package.json` bumped to `v1.2.0`
- Added full ESM `exports` map — tree-shaking-aware bundlers (Vite, Rollup, webpack 5) can now import individual engine modules:
  ```js
  import { parse }       from 'easemotion-css/engine/parser';
  import { compile }     from 'easemotion-css/engine/compiler';
  import { optimizeHtml } from 'easemotion-css/engine/optimizer';
  ```
- Added `benchmark` and `benchmark:fps` npm scripts
- Added `test:watch` script (`vitest` in watch mode)
- Description and keywords updated to reflect animation engine positioning

#### Notes

- **Zero breaking changes.** The engine is fully opt-in. Pure CSS users (`<link rel="stylesheet">`) are completely unaffected.
- The `em=""` runtime requires JavaScript. CSS class-based animations work without any JS.

---

## [v1.1.0] — 2026-06-28

### 🚀 Release Highlights

#### Added
- `.ease-text-underline-draw` — Animated left-to-right underline drawing on hover
- `.ease-text-strikethrough-draw` — Animated strikethrough sweep across text
- `.ease-text-gradient-flow` — Smooth 3-color looping text gradient animation
- `.ease-ambient-glow` — Pulsing glowing ambient box-shadow background utility
- `.ease-glass-card` — Glassmorphism card utility with backdrop blur and border styling

#### Changed & Cleaned
- Bumped package version to `1.1.0` and updated minified bundle builds
- Streamlined `submissions/examples/` directory by pruning 152 redundant duplicate clone folders while maintaining clean representative submissions

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
