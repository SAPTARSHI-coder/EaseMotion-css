<div align="center">

<img src="https://raw.githubusercontent.com/SAPTARSHI-coder/EaseMotion-css/main/docs/assets/banner.svg" alt="EaseMotion CSS" width="100%" />

# ⚡ EaseMotion CSS

**Human-readable. Animation-first. Zero dependencies.**

Write UI like you describe it in English. No build steps. No memorizing shorthand. Just link a file and ship.

<br/>

[![npm version](https://img.shields.io/npm/v/easemotion-css?style=flat-square&color=6c63ff&label=npm)](https://www.npmjs.com/package/easemotion-css)
[![Sponsor](https://img.shields.io/badge/Sponsor-💖-ea4aaa?style=flat-square)](https://github.com/sponsors/SAPTARSHI-coder)
[![npm downloads](https://img.shields.io/npm/dm/easemotion-css?style=flat-square&color=a78bfa&label=downloads%2Fmo)](https://www.npmjs.com/package/easemotion-css)
[![jsDelivr CDN](https://data.jsdelivr.com/v1/package/npm/easemotion-css/badge)](https://www.jsdelivr.com/package/npm/easemotion-css)
[![GitHub Stars](https://img.shields.io/github/stars/SAPTARSHI-coder/EaseMotion-css?style=flat-square&color=6c63ff)](https://github.com/SAPTARSHI-coder/EaseMotion-css/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/SAPTARSHI-coder/EaseMotion-css?style=flat-square&color=22c55e)](https://github.com/SAPTARSHI-coder/EaseMotion-css/network/members)
[![GitHub Contributors](https://img.shields.io/github/contributors/SAPTARSHI-coder/EaseMotion-css?style=flat-square&color=f59e0b)](https://github.com/SAPTARSHI-coder/EaseMotion-css/graphs/contributors)
[![Open PRs](https://img.shields.io/github/issues-pr/SAPTARSHI-coder/EaseMotion-css?style=flat-square&color=a78bfa&label=open%20PRs)](https://github.com/SAPTARSHI-coder/EaseMotion-css/pulls)
[![Open Issues](https://img.shields.io/github/issues/SAPTARSHI-coder/EaseMotion-css?style=flat-square&color=ef4444&label=issues)](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-6c63ff?style=flat-square)](./LICENSE)
[![GSSoC](https://img.shields.io/badge/GSSoC-2026-orange?style=flat-square)](https://gssoc.girlscript.tech/)
[![Maintainer](https://img.shields.io/badge/Maintainer-Saptarshi%20Sadhu-a78bfa?style=flat-square)](https://github.com/SAPTARSHI-coder)

</div>

<br/>

> [!IMPORTANT]
> **Temporary Contribution Guidelines & Freeze Notice**
> 
> Due to the high volume of contributions and multiple merge conflicts affecting framework stability, PRs modifying core files, workflows, configs, or shared framework code are temporarily restricted.
> 
> For now, only self-contained submissions inside `submissions/examples/*` will be reviewed and merged.
> 
> This is being done to stabilize the repository, reduce breaking changes, and ensure contributor work is preserved without conflicts or accidental overwrites.
> 
> Core contribution access may reopen once the framework structure and validation systems are fully stabilized.

<br/>

## Table of Contents 📑

- [Support the Project](#support-the-project)
- [Project Statistics](#project-statistics)
- [Browser Compatibility](#browser-compatibility)
- [What is EaseMotion CSS?](#what-is-easemotion-css)
- [Why EaseMotion CSS?](#why-easemotion-css)
- [Quick Start](#quick-start)
- [Philosophy](#philosophy)
- [Usage & Examples](#usage--examples)
- [Customization](#customization)
- [FAQ](#faq)
- [File Structure](#file-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Community](#community)
- [Contributors](#contributors)
- [Maintainer](#maintainer)
- [Changelog](#changelog)
- [License](#license)

---

### 🚀 Quick Start

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css" />
```

**[📖 Documentation](https://saptarshi-coder.github.io/EaseMotion-css/) · [🎮 Live Demo](https://saptarshi-coder.github.io/EaseMotion-css/demo.html) · [📦 npm](https://www.npmjs.com/package/easemotion-css) · [🤝 Contributing](./CONTRIBUTING.md)**

### Animation Iterations

Looping animations in EaseMotion CSS (for example: `.ease-bounce`, `.ease-pulse`, `.ease-rotate`, `.ease-ping`, and the `.ease-typewriter-loop`) now respect a global CSS custom property: `--ease-animation-iterations`.

The default remains `infinite` so existing behavior is unchanged. To run looping animations a fixed number of times, override the variable in your project:

```css
:root {
  --ease-animation-iterations: 3;
}
```

This will apply the iteration count to all looping animation utilities by default.

---

## Support the Project ⭐

If EaseMotion CSS saves you time or helps your learning journey, please consider supporting it.

Most people simply forget. This is your reminder. 😊

<div align="center">

| Action | Why it matters |
|--------|----------------|
| [💖 **Sponsor on GitHub**](https://github.com/sponsors/SAPTARSHI-coder) | Directly support the creator to keep the project active and stable |
| [⭐ **Star the repo**](https://github.com/SAPTARSHI-coder/EaseMotion-css/stargazers) | Helps more developers discover the project |
| [🍴 **Fork and contribute**](./CONTRIBUTING.md) | Your idea could become a real framework class |
| [🐞 **Report an issue**](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/new?template=bug_report.md) | Bugs you catch make it better for everyone |
| [💡 **Suggest a feature**](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/new?template=feature_request.md) | Good ideas ship faster than you think |

</div>

> Stars cost nothing and mean everything to an independent open-source project. If this saved you even 10 minutes, it's worth a click.

---

## Project Statistics 📊

<div align="center">

| Metric | Value |
|--------|-------|
| 📦 **npm Package** | [`easemotion-css`](https://www.npmjs.com/package/easemotion-css) |
| 🌐 **CDN** | [cdn.jsdelivr.net/npm/easemotion-css](https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css) |
| ⚡ **Classes** | 80+ utility classes, 20+ animation classes |
| 🎨 **Components** | Buttons (6 variants), Cards (13 variants) |
| 🔑 **Design Tokens** | 60+ CSS custom properties |
| ⚖️ **Bundle Size** | ~15 kB (unpacked: ~62 kB) |
| 📜 **License** | MIT |
| 🔧 **Build Step** | ❌ None required |
| 🏗️ **Dependencies** | ❌ Zero |

</div>

---

## Browser Compatibility 🌐

EaseMotion CSS is built for modern evergreen browsers and relies on CSS3 custom properties, CSS animations, Flexbox, CSS Grid, transforms, transitions, and keyframe animations.

<div align="center">

| Browser | Minimum Version | `backdrop-filter` | `aspect-ratio` | CSS variables | Animations | Notes |
|---------|-----------------|-------------------|----------------|---------------|------------|-------|
| Chrome  | 49+ | Supported | Supported | Supported | Supported | |
| Firefox | 31+ | Supported | Supported | Supported | Supported | |
| Safari  | 9.1+ | Supported with `-webkit-backdrop-filter` fallback | Supported | Supported | Supported | Supported | |
| Edge    | 15+ | Supported | Supported | Supported | Supported | |
| Opera   | 36+ | Supported | Supported | Supported | Supported | |

</div>

> Internet Explorer (IE 11 and earlier) is not supported.

---

## What is EaseMotion CSS? ✨

EaseMotion CSS is a curated, animation-first CSS framework where **class names read like plain English**. No memorizing shorthand. No build steps. No configuration. Just write HTML and it works.

```html
<!-- This is all it takes -->
<div class="ease-center ease-fade-in">
  <h1 class="ease-slide-up ease-delay-100">Build faster.</h1>
  <p class="ease-slide-up ease-delay-200">Animation-first CSS for humans.</p>
  <button class="ease-btn ease-btn-primary ease-btn-pill ease-hover-grow ease-delay-300">
    Get Started →
  </button>
</div>
```

> ⚡ Build beautiful animated interfaces using readable CSS classes. No build step. No configuration. Just link a file and start building.

---

## Why EaseMotion CSS? 🆚

| | Vanilla CSS | Tailwind CSS | **EaseMotion CSS** |
|---|:---:|:---:|:---:|
| Setup | Write from scratch | Build step + config | **Link one file** |
| Readability | ✅ High | ❌ Low (`px-4 flex gap-x-2`) | ✅ **High** (`ease-center`) |
| Animations | ⚙️ Manual | 🔸 Minimal | ✅ **First-class** |
| Zero config | ✅ | ❌ | ✅ |
| Quality control | You | You | ✅ **Curated by maintainer** |
| CDN ready | N/A | ❌ | ✅ **Yes** |
| Learning curve | High | Medium | ✅ **Near zero** |

---

## Quick Start ⚡

### Option 1 — CDN *(fastest, zero setup, recommended)*

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css" />
</head>
<body>
  <div class="ease-center ease-fade-in">
    <h1>Hello, EaseMotion!</h1>
  </div>
</body>
</html>
```

> Powered by jsDelivr — globally cached, always fast, no account needed. The CDN link is live the moment you paste it.

## Alternative CDN Providers

EaseMotion CSS can also be loaded using alternative CDN providers.

### jsDelivr (recommended)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css" />
```

### unpkg

```html
<link rel="stylesheet" href="https://unpkg.com/easemotion-css/easemotion.min.css" />
```

### GitHub Raw CDN

```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/SAPTARSHI-coder/EaseMotion-css/main/easemotion.min.css" />
```

> jsDelivr is recommended for production usage because it provides global caching and better reliability.

### Option 2 — npm

```bash
npm install easemotion-css
```

Then in your HTML:

```html
<link rel="stylesheet" href="node_modules/easemotion-css/easemotion.min.css" />
```

Or in CSS / PostCSS / Sass:

```css
@import "easemotion-css/easemotion.min.css";
```

### Option 3 — Granular imports *(pick only what you need)*

```html
<!-- Font (optional — for Inter typography) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

<!-- Core (always required — load in this exact order) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/core/variables.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/core/base.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/core/animations.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/core/utilities.css" />

<!-- Components — add only what you use -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/components/buttons.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/components/cards.css" />
```

### Option 4 — Modular animation imports *(load only what you need)*

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion/variables.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion/fade.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion/slide.css" />
<!-- Add only the animation categories you need -->
```

### Full bundle

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion/all.css" />
```

> ⚠️ **`easemotion/variables.css` must always load before modular animation files.** It provides the shared custom properties used by all animation categories.


## Philosophy 🧠

EaseMotion CSS is not just a CSS library — it is a design language.

> *"If you can say it in English, you should be able to write it as a class."*

```html
<!-- Center this -->         <div class="ease-center">
<!-- Fade this in -->        <h1 class="ease-fade-in">
<!-- Make it grow on hover --><button class="ease-hover-grow">
<!-- Slide up with delay -->  <p class="ease-slide-up ease-delay-200">
```

No documentation lookup required. The class name **is** the documentation.

### Four principles that never get broken

| Principle | What it means |
|-----------|---------------|
| **Human-readable** | Class names describe behavior in plain English |
| **Animation-first** | Motion is a first-class citizen, not an afterthought |
| **Composable** | Stack any classes freely — no specificity wars, ever |
| **Curated** | Every single class is maintainer-reviewed before release |

### How the curation pipeline works

```
1. Contributors submit raw HTML + CSS
         ↓
2. Maintainer reviews and evaluates fit
         ↓
3. Code is converted into EaseMotion CSS format
   (ease-* naming · CSS variables · accessibility)
         ↓
4. Integrated into core/ or components/
         ↓
5. Released, documented, and credited
```

Every class in the framework has passed through this process. The curation is what makes EaseMotion CSS consistent.

---

## Usage & Examples 💡

### Animations

```html
<!-- Entrance animations (fire on page load) -->
<h1 class="ease-fade-in">Fade in</h1>
<h2 class="ease-slide-up">Slide up</h2>
<h3 class="ease-slide-left">Slide left</h3>
<h4 class="ease-slide-right">Slide right</h4>
<h5 class="ease-slide-in-left">Slide from left</h5>
<h4 class="ease-zoom-in">Zoom in</h4>
<h5 class="ease-flip">3D flip</h5>
<h5>class="ease-contract-image-entrance">Contract image entrance</h5>

<!-- Staggered sequence — each item 100ms after previous -->
<div class="ease-slide-up ease-delay-100">First</div>
<div class="ease-slide-up ease-delay-200">Second</div>
<div class="ease-slide-up ease-delay-300">Third</div>

<!-- Looping animations -->
<div class="ease-bounce">Bouncing</div>
<div class="ease-pulse">Pulsing</div>
<div class="ease-rotate">Rotating</div>
<div class="ease-ping">Ping</div>

You can customize the iteration count of looping animations:

```css
:root {
  --ease-animation-iterations: 3;
}
```

By default, the value is `infinite`, preserving existing behavior.

<!-- Exit animation -->
<div class="ease-expand-border-exit"></div>


### Hover Effects

```html
<button class="ease-hover-grow">Scales up on hover</button>
<div    class="ease-hover-morph-card">Morph</div>
<div    class="ease-hover-glow">Primary color glow</div>
<div    class="ease-hover-lift">Lifts with shadow</div>
<div    class="ease-hover-shimmer">Shimmer sweep effect</div>
<a      class="ease-hover-underline">Animated underline</a>
<span   class="ease-hover-bounce-text">Bounce!</span>
```

Applies a quick squish animation during hover, focus, and active interactions.
### Layout Utilities

```html
<!-- Centering (the most-used utility) -->
<div class="ease-center">Perfectly centered</div>

<!-- Flexbox -->
<div class="ease-flex ease-justify-between ease-items-center ease-gap-4">
  <span>Left</span>
  <span class="ease-self-end">Right</span>
</div>

<!-- Flex wrap utilities -->
<div class="ease-flex ease-flex-wrap ease-gap-3">Wrap</div>
<div class="ease-flex ease-flex-nowrap ease-gap-3">No wrap</div>
<div class="ease-flex ease-flex-wrap-reverse ease-gap-3">Reverse wrap</div>

<!-- Align self utilities -->
<div class="ease-flex ease-items-stretch ease-gap-3">
  <span class="ease-self-start">Start</span>
  <span class="ease-self-center">Center</span>
  <span class="ease-self-end">End</span>
  <span class="ease-self-stretch">Stretch</span>
</div>

<!-- Responsive auto-fit grid (no media queries needed) -->
<div class="ease-grid ease-grid-auto ease-gap-6">
  <div class="ease-card">Card 1</div>
  <div class="ease-card">Card 2</div>
  <div class="ease-card">Card 3</div>
</div>

<!-- Grid placement utilities -->
<div class="ease-grid ease-grid-cols-4 ease-place-center ease-gap-4">
  <div class="ease-col-span-2">Centered span 2</div>
  <div class="ease-col-span-1">Span 1</div>
  <div class="ease-col-span-1">Span 1</div>
</div>
<div class="ease-grid ease-grid-cols-3 ease-place-start ease-gap-4">Start</div>
<div class="ease-grid ease-grid-cols-3 ease-place-end ease-gap-4">End</div>
```

### Align Self Utilities

```html
<div class="ease-flex">
  <div class="ease-self-start">Start</div>
  <div class="ease-self-center">Center</div>
  <div class="ease-self-end">End</div>
  <div class="ease-self-stretch">Stretch</div>
</div>
```

#### Available Classes

- `.ease-self-start` → `align-self: flex-start`
- `.ease-self-center` → `align-self: center`
- `.ease-self-end` → `align-self: flex-end`
- `.ease-self-stretch` → `align-self: stretch`

### Hover Animation Examples

Common hover-triggered animation examples are available for:

- Buttons
- Cards
- Images

Example showcase:

- hover-animation-showcase
- hover-sweep

### Buttons

```html
<!-- Variants -->
<button class="ease-btn ease-btn-primary">Primary</button>
<button class="ease-btn ease-btn-success">Success</button>
<button class="ease-btn ease-btn-danger">Danger</button>
<button class="ease-btn ease-btn-outline">Outline</button>
<button class="ease-btn ease-btn-ghost">Ghost</button>

<!-- With hover animation -->
<button class="ease-btn ease-btn-primary ease-btn-hover">Animated</button>

<!-- With squish button -->
<button class="ease-btn ease-btn-primary ease-squish-button">Squish Me</button>

<!-- Sizes + shapes -->
<button class="ease-btn ease-btn-primary ease-btn-sm">Small</button>
<button class="ease-btn ease-btn-primary ease-btn-lg ease-btn-pill">Large Pill</button>
```

### Cards

```html
<!-- Hover card with shadow -->
<div class="ease-card ease-card-shadow ease-card-hover">
  <div class="ease-card-header">
    <h3 class="ease-card-title">Title</h3>
  </div>
  <div class="ease-card-body"><p>Content goes here.</p></div>
  <div class="ease-card-footer">
    <button class="ease-btn ease-btn-primary ease-btn-sm">Action</button>
  </div>
</div>

<!-- Glassmorphism -->
<div class="ease-card ease-card-glass">Glass card</div>

<!-- Neumorphic -->
<div class="ease-card ease-card-neumorphic">Soft UI card</div>

<!-- Accent border -->
<div class="ease-card ease-card-accent">Highlighted card</div>
```

### Navigation

```html
<nav class="ease-navbar-glass" aria-label="Primary navigation">
  <div class="ease-navbar-brand">EaseMotion</div>
  <div class="ease-navbar-menu">
    <a class="ease-navbar-item" href="#">Home</a>
    <a class="ease-navbar-item" href="#">Features</a>
    <a class="ease-navbar-item" href="#">Contact</a>
  </div>
</nav>
```

```html
<nav class="ease-navbar-glass ease-navbar-glass-sticky" aria-label="Sticky navigation">
  <div class="ease-navbar-brand">Sticky Nav</div>
  <div class="ease-navbar-menu">
    <a class="ease-navbar-item" href="#">Overview</a>
    <a class="ease-navbar-item" href="#">Docs</a>
  </div>
</nav>
```

```html
<nav class="ease-navbar-glass ease-navbar-glass-blur" aria-label="Blurred navbar">
  <div class="ease-navbar-brand">Deep Blur</div>
  <div class="ease-navbar-menu">
    <a class="ease-navbar-item" href="#">Product</a>
    <a class="ease-navbar-item" href="#">Support</a>
  </div>
</nav>
```

### Build a Hero Section in 5 Lines

```html
<section class="ease-center ease-padding-16">
  <h1 class="ease-fade-in">Build faster.</h1>
  <p class="ease-slide-up ease-delay-200">Animation-first CSS for humans.</p>
  <button class="ease-btn ease-btn-primary ease-btn-lg ease-btn-pill ease-hover-grow ease-delay-300">
    Get Started →
  </button>
</section>
```

---

## Customization ⚙️

Override any CSS custom property to theme the entire framework — no Sass, no PostCSS, just CSS:

```css
:root {
  /* Colors */
  --ease-color-primary:   #f97316;   /* swap to orange  */
  --ease-color-success:   #10b981;   /* teal green      */

  /* Motion */
  --ease-speed-fast:      100ms;     /* snappier        */
  --ease-speed-medium:    400ms;     /* slightly slower */
  --ease-ease-bounce:     cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Shape */
  --ease-radius-md:       1rem;      /* rounder corners */
  --ease-radius-full:     9999px;

  /* Shadows */
  --ease-shadow-md:       0 4px 20px rgba(0,0,0,0.15);
}
```

### Override framework styles with `@layer`

EaseMotion wraps all its CSS behind `@layer` cascade layers. Your own styles always win — even if the framework loads *after* your stylesheet:

```css
/* Your custom overrides — always takes priority */
@layer easemotion.components {
  .ease-btn-primary {
    background: var(--ease-color-orange);
    border-radius: 2rem;
  }
}
```

No `!important` needed.

---

## FAQ

### How does EaseMotion CSS differ from Tailwind?

Tailwind is a utility-first framework built around short atomic class names and usually fits best in a build-driven workflow. EaseMotion CSS focuses on human-readable class names like `ease-center` and `ease-fade-in`, treats animation as a first-class feature, and is designed to work immediately by linking a stylesheet.

### Can I use it with React/Vue?

Yes. EaseMotion CSS works with React, Vue, plain HTML, or any framework that renders standard `class` attributes. You can install it from npm, import the stylesheet, and use the classes directly in your components.

### How do I submit a new component?

Open or claim an issue first for non-trivial ideas, then add your raw demo inside `submissions/examples/your-feature-name/` with `demo.html`, `style.css`, and `README.md`. The maintainer reviews it, standardizes naming, and integrates it into the framework if it fits the project.

### Does it work without a build step?

Yes. That is one of the core goals of EaseMotion CSS. You can use the CDN link or local CSS files directly without configuring a bundler, compiler, or build pipeline.

---
## File Structure 📂

```
easemotion-css/
├── easemotion.css              ← readable source entry point
├── easemotion.min.css          ← bundled production build
│
├── core/                       ← MAINTAINER-ONLY
│   ├── variables.css           ← 60+ design tokens
│   ├── base.css                ← reset + typography (Inter font)
│   ├── animations.css          ← 20+ animation classes
│   └── utilities.css           ← 80+ layout utilities
│
├── components/                 ← MAINTAINER-ONLY
│   ├── buttons.css             ← 6 variants, 4 sizes, pill, icon
│   └── cards.css               ← 13 card variants
│
├── submissions/                ← CONTRIBUTOR AREA
│   ├── README.md               ← full submission workflow
│   └── examples/
│       ├── hover-grow/         ← [INTEGRATED] → ease-hover-grow
│       ├── hover-shimmer/      ← [INTEGRATED] → ease-hover-shimmer
│       ├── card-lift/          ← [INTEGRATED] → ease-card-lift
│       └── button-glow/        ← pending review
│
├── examples/demo.html          ← source interactive showcase
├── docs/demo.html              ← deployed live demo page
├── docs/index.html             ← full documentation site
│
├── .github/
│   ├── CODEOWNERS
│   ├── ISSUE_TEMPLATE/
│   │   ├── feature_request.md
│   │   └── bug_report.md
│   └── PULL_REQUEST_TEMPLATE.md
│
├── VISION.md                   ← long-term project direction
├── CHANGELOG.md                ← full release history
├── CONTRIBUTING.md             ← contribution guide
├── LICENSE                     ← MIT © 2026 Saptarshi Sadhu
└── README.md
```

---

## Roadmap 🗺️

> Track progress and vote on features via [GitHub Issues](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues).

| Feature | Status |
|---------|--------|
| ✅ Human-readable core utilities (80+) | **Shipped — v1.0** |
| ✅ Animation-first motion library (20+) | **Shipped — v1.0** |
| ✅ Curated contribution pipeline | **Shipped — v1.0** |
| ✅ Component library (buttons, cards) | **Shipped — v1.0** |
| ✅ npm package + jsDelivr CDN | **Shipped — v1.0** |
| ✅ Full documentation site | **Shipped — v1.0** |
| 🔜 Form components (inputs, checkboxes, toggles) | **Planned — v1.1** |
| 🔜 Dark mode token layer | **Planned — v1.1** |
| 🔜 Modal & tooltip components | **Planned — v1.2** |
| 🔜 Scroll-triggered animations (IntersectionObserver) | **Planned — v1.2** |
| 🔜 Navigation components (navbar, sidebar) | **Planned — v1.3** |
| 🔜 CSS-only accordion & tabs | **Planned — v1.3** |
| 🔜 Badge, tag, avatar, progress bar | **Planned — v1.3** |
| 🔜 Theming CLI (generate custom token file) | **Exploring** |

---

## Contributing 🤝

EaseMotion CSS is a **curated, maintainer-reviewed framework**. Contributors submit raw ideas — the maintainer handles standardization, naming, and integration.

### ✅ What contributors do

```
✅ Add a folder to submissions/examples/your-feature/
✅ Include: demo.html + style.css + README.md
✅ Use any class naming — no ease- prefix required
✅ One feature per PR
```

### ❌ What contributors do NOT do

```
❌ Edit core/           → PR closed without review
❌ Edit components/     → PR closed without review
❌ Merge their own PRs  → Maintainer-only
❌ Claim more than 2 active issues at once
```

### The submission pipeline

```
Your raw CSS  →  Maintainer standardizes  →  ease-* class ships
.hover-grow       ease-hover-grow              core/animations.css
```

### 🌟 Why contribute?

- **Beginner-friendly** — write raw CSS, no conventions to memorize
- **Learn real system design** — see how raw ideas become a coherent API
- **Your idea ships** — accepted submissions become real framework classes
- **Credited in CHANGELOG** — your contribution is documented permanently
- **Your name in the README** — see the contributor wall below

📖 Read the full guide → [CONTRIBUTING.md](./CONTRIBUTING.md)

### 📢 Contribution Policy Update

All contributions are welcome and eligible for merge when submitted inside the `submissions/examples/` folder following the repository structure and guidelines.

To avoid naming conflicts and overlapping components, contributors must append a short unique identifier or abbreviation to their feature/component name.

**Example:**
*   `ease-hover-sap`
*   `ease-tabs-ak`
*   `ease-card-pr`

This ensures:
*   Unambiguous component naming,
*   Preservation of every contributor’s work,
*   Conflict-free merges,
*   Easier maintenance and review workflow,
*   Support for parallel implementations of similar ideas.

The project encourages creative variations and parallel implementations rather than overwriting existing contributor work.

---

## Issue Labels 🏷️

| Label | Used for |
|-------|----------|
| `good first issue` | Easy entry points, perfect for first-time contributors |
| `animation` | Hover effects, entrance animations, keyframe ideas |
| `component` | New UI components (modals, tooltips, badges, etc.) |
| `enhancement` | Improvements to existing classes |
| `documentation` | README, docs site, submission guide |
| `curated` | Accepted into the framework |
| `maintainer-approved` | Reviewed, pending integration |
| `featured` | Exceptional submission — will be showcased |

> **Issue Cooldown Rule:** Maximum **2 active assigned issues** per contributor. Issues with no progress for 5 days are unassigned and reopened.

---

## Community 💬

<div align="center">

| Platform | Link |
|----------|------|
| 🐛 **Bug Reports** | [Open an issue](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/new?template=bug_report.md) |
| 💡 **Feature Requests** | [Request a feature](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/new?template=feature_request.md) |
| 🔀 **Pull Requests** | [Submit a contribution](https://github.com/SAPTARSHI-coder/EaseMotion-css/pulls) |
| 📖 **Documentation** | [Full docs site](https://saptarshi-coder.github.io/EaseMotion-css/) |
| 📦 **npm Package** | [easemotion-css on npm](https://www.npmjs.com/package/easemotion-css) |
| 🌐 **CDN** | [jsDelivr](https://www.jsdelivr.com/package/npm/easemotion-css) |
| 🏆 **GSSoC 2026** | [GirlScript Summer of Code](https://gssoc.girlscript.tech/) |

</div>

> ⭐ **If EaseMotion CSS saves you time, consider starring the repo.** It helps more developers discover the project and motivates continued development.
---

## Contributors 🏆

Everyone who has submitted a PR, opened an issue, or contributed an idea. This wall **regenerates automatically** on every push to main.

<!-- CONTRIBUTOR-WALL-START -->
<div align="center">

### 154 Contributors

<table>
<tr><td align="center"><a href="https://github.com/SAPTARSHI-coder"><img src="https://avatars.githubusercontent.com/SAPTARSHI-coder?s=64" width="52" height="52" alt="SAPTARSHI-coder" style="border-radius:50%;margin:4px"/><br/><sub><b>SAPTARSHI-coder</b></sub><br/><sub>285 commits</sub></a></td><td align="center"><a href="https://github.com/shresthbhargava"><img src="https://avatars.githubusercontent.com/shresthbhargava?s=64" width="52" height="52" alt="shresthbhargava" style="border-radius:50%;margin:4px"/><br/><sub><b>shresthbhargava</b></sub><br/><sub>34 commits</sub></a></td><td align="center"><a href="https://github.com/Muditapandey26"><img src="https://avatars.githubusercontent.com/Muditapandey26?s=64" width="52" height="52" alt="Muditapandey26" style="border-radius:50%;margin:4px"/><br/><sub><b>Muditapandey26</b></sub><br/><sub>19 commits</sub></a></td><td align="center"><a href="https://github.com/Nicks-19"><img src="https://avatars.githubusercontent.com/Nicks-19?s=64" width="52" height="52" alt="Nicks-19" style="border-radius:50%;margin:4px"/><br/><sub><b>Nicks-19</b></sub><br/><sub>16 commits</sub></a></td><td align="center"><a href="https://github.com/bhavyabhardwaj001"><img src="https://avatars.githubusercontent.com/bhavyabhardwaj001?s=64" width="52" height="52" alt="bhavyabhardwaj001" style="border-radius:50%;margin:4px"/><br/><sub><b>bhavyabhardwaj001</b></sub><br/><sub>12 commits</sub></a></td><td align="center"><a href="https://github.com/kunal-9090"><img src="https://avatars.githubusercontent.com/kunal-9090?s=64" width="52" height="52" alt="kunal-9090" style="border-radius:50%;margin:4px"/><br/><sub><b>kunal-9090</b></sub><br/><sub>9 commits</sub></a></td><td align="center"><a href="https://github.com/AnanyaTiwari850"><img src="https://avatars.githubusercontent.com/AnanyaTiwari850?s=64" width="52" height="52" alt="AnanyaTiwari850" style="border-radius:50%;margin:4px"/><br/><sub><b>AnanyaTiwari850</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/saurabhhhcodes"><img src="https://avatars.githubusercontent.com/saurabhhhcodes?s=64" width="52" height="52" alt="saurabhhhcodes" style="border-radius:50%;margin:4px"/><br/><sub><b>saurabhhhcodes</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/AyushPrad2907"><img src="https://avatars.githubusercontent.com/AyushPrad2907?s=64" width="52" height="52" alt="AyushPrad2907" style="border-radius:50%;margin:4px"/><br/><sub><b>AyushPrad2907</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/Rakshita006"><img src="https://avatars.githubusercontent.com/Rakshita006?s=64" width="52" height="52" alt="Rakshita006" style="border-radius:50%;margin:4px"/><br/><sub><b>Rakshita006</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/nyxsky404"><img src="https://avatars.githubusercontent.com/nyxsky404?s=64" width="52" height="52" alt="nyxsky404" style="border-radius:50%;margin:4px"/><br/><sub><b>nyxsky404</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/Dhruva5vora"><img src="https://avatars.githubusercontent.com/Dhruva5vora?s=64" width="52" height="52" alt="Dhruva5vora" style="border-radius:50%;margin:4px"/><br/><sub><b>Dhruva5vora</b></sub><br/><sub>6 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Pr241singh"><img src="https://avatars.githubusercontent.com/Pr241singh?s=64" width="52" height="52" alt="Pr241singh" style="border-radius:50%;margin:4px"/><br/><sub><b>Pr241singh</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/Premshaw23"><img src="https://avatars.githubusercontent.com/Premshaw23?s=64" width="52" height="52" alt="Premshaw23" style="border-radius:50%;margin:4px"/><br/><sub><b>Premshaw23</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/hiitarun1"><img src="https://avatars.githubusercontent.com/hiitarun1?s=64" width="52" height="52" alt="hiitarun1" style="border-radius:50%;margin:4px"/><br/><sub><b>hiitarun1</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/AgnusSerena"><img src="https://avatars.githubusercontent.com/AgnusSerena?s=64" width="52" height="52" alt="AgnusSerena" style="border-radius:50%;margin:4px"/><br/><sub><b>AgnusSerena</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/JoyceHanan"><img src="https://avatars.githubusercontent.com/JoyceHanan?s=64" width="52" height="52" alt="JoyceHanan" style="border-radius:50%;margin:4px"/><br/><sub><b>JoyceHanan</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/Anshu2607-iiitr"><img src="https://avatars.githubusercontent.com/Anshu2607-iiitr?s=64" width="52" height="52" alt="Anshu2607-iiitr" style="border-radius:50%;margin:4px"/><br/><sub><b>Anshu2607-iiitr</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Xploit-Ghost"><img src="https://avatars.githubusercontent.com/Xploit-Ghost?s=64" width="52" height="52" alt="Xploit-Ghost" style="border-radius:50%;margin:4px"/><br/><sub><b>Xploit-Ghost</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/bh462007"><img src="https://avatars.githubusercontent.com/bh462007?s=64" width="52" height="52" alt="bh462007" style="border-radius:50%;margin:4px"/><br/><sub><b>bh462007</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/sdeepika-2606"><img src="https://avatars.githubusercontent.com/sdeepika-2606?s=64" width="52" height="52" alt="sdeepika-2606" style="border-radius:50%;margin:4px"/><br/><sub><b>sdeepika-2606</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Muskan-S123"><img src="https://avatars.githubusercontent.com/Muskan-S123?s=64" width="52" height="52" alt="Muskan-S123" style="border-radius:50%;margin:4px"/><br/><sub><b>Muskan-S123</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/boss477"><img src="https://avatars.githubusercontent.com/boss477?s=64" width="52" height="52" alt="boss477" style="border-radius:50%;margin:4px"/><br/><sub><b>boss477</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/ishita526"><img src="https://avatars.githubusercontent.com/ishita526?s=64" width="52" height="52" alt="ishita526" style="border-radius:50%;margin:4px"/><br/><sub><b>ishita526</b></sub><br/><sub>3 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/lokeshkumar69"><img src="https://avatars.githubusercontent.com/lokeshkumar69?s=64" width="52" height="52" alt="lokeshkumar69" style="border-radius:50%;margin:4px"/><br/><sub><b>lokeshkumar69</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/pari-dubey1"><img src="https://avatars.githubusercontent.com/pari-dubey1?s=64" width="52" height="52" alt="pari-dubey1" style="border-radius:50%;margin:4px"/><br/><sub><b>pari-dubey1</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/rishikareddy771"><img src="https://avatars.githubusercontent.com/rishikareddy771?s=64" width="52" height="52" alt="rishikareddy771" style="border-radius:50%;margin:4px"/><br/><sub><b>rishikareddy771</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Aditisingh0102"><img src="https://avatars.githubusercontent.com/Aditisingh0102?s=64" width="52" height="52" alt="Aditisingh0102" style="border-radius:50%;margin:4px"/><br/><sub><b>Aditisingh0102</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Akshu121796"><img src="https://avatars.githubusercontent.com/Akshu121796?s=64" width="52" height="52" alt="Akshu121796" style="border-radius:50%;margin:4px"/><br/><sub><b>Akshu121796</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/alishaalmeida10"><img src="https://avatars.githubusercontent.com/alishaalmeida10?s=64" width="52" height="52" alt="alishaalmeida10" style="border-radius:50%;margin:4px"/><br/><sub><b>alishaalmeida10</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Ankitkr16"><img src="https://avatars.githubusercontent.com/Ankitkr16?s=64" width="52" height="52" alt="Ankitkr16" style="border-radius:50%;margin:4px"/><br/><sub><b>Ankitkr16</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/AnushKamble"><img src="https://avatars.githubusercontent.com/AnushKamble?s=64" width="52" height="52" alt="AnushKamble" style="border-radius:50%;margin:4px"/><br/><sub><b>AnushKamble</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/dishamaurya081-create"><img src="https://avatars.githubusercontent.com/dishamaurya081-create?s=64" width="52" height="52" alt="dishamaurya081-create" style="border-radius:50%;margin:4px"/><br/><sub><b>dishamaurya081-create</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Jeet-Srivastava"><img src="https://avatars.githubusercontent.com/Jeet-Srivastava?s=64" width="52" height="52" alt="Jeet-Srivastava" style="border-radius:50%;margin:4px"/><br/><sub><b>Jeet-Srivastava</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/kas2804"><img src="https://avatars.githubusercontent.com/kas2804?s=64" width="52" height="52" alt="kas2804" style="border-radius:50%;margin:4px"/><br/><sub><b>kas2804</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Krish-Mishra"><img src="https://avatars.githubusercontent.com/Krish-Mishra?s=64" width="52" height="52" alt="Krish-Mishra" style="border-radius:50%;margin:4px"/><br/><sub><b>Krish-Mishra</b></sub><br/><sub>2 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/mohamedfahim18"><img src="https://avatars.githubusercontent.com/mohamedfahim18?s=64" width="52" height="52" alt="mohamedfahim18" style="border-radius:50%;margin:4px"/><br/><sub><b>mohamedfahim18</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Paawangarg1084"><img src="https://avatars.githubusercontent.com/Paawangarg1084?s=64" width="52" height="52" alt="Paawangarg1084" style="border-radius:50%;margin:4px"/><br/><sub><b>Paawangarg1084</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/SaiRishithaK"><img src="https://avatars.githubusercontent.com/SaiRishithaK?s=64" width="52" height="52" alt="SaiRishithaK" style="border-radius:50%;margin:4px"/><br/><sub><b>SaiRishithaK</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/adittya-code"><img src="https://avatars.githubusercontent.com/adittya-code?s=64" width="52" height="52" alt="adittya-code" style="border-radius:50%;margin:4px"/><br/><sub><b>adittya-code</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/shivanisreejith1"><img src="https://avatars.githubusercontent.com/shivanisreejith1?s=64" width="52" height="52" alt="shivanisreejith1" style="border-radius:50%;margin:4px"/><br/><sub><b>shivanisreejith1</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/kshah123919"><img src="https://avatars.githubusercontent.com/kshah123919?s=64" width="52" height="52" alt="kshah123919" style="border-radius:50%;margin:4px"/><br/><sub><b>kshah123919</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Abhay-1704"><img src="https://avatars.githubusercontent.com/Abhay-1704?s=64" width="52" height="52" alt="Abhay-1704" style="border-radius:50%;margin:4px"/><br/><sub><b>Abhay-1704</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/alisha-khan6"><img src="https://avatars.githubusercontent.com/alisha-khan6?s=64" width="52" height="52" alt="alisha-khan6" style="border-radius:50%;margin:4px"/><br/><sub><b>alisha-khan6</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/aasheeshhh"><img src="https://avatars.githubusercontent.com/aasheeshhh?s=64" width="52" height="52" alt="aasheeshhh" style="border-radius:50%;margin:4px"/><br/><sub><b>aasheeshhh</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/bhavyajain0810"><img src="https://avatars.githubusercontent.com/bhavyajain0810?s=64" width="52" height="52" alt="bhavyajain0810" style="border-radius:50%;margin:4px"/><br/><sub><b>bhavyajain0810</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/hematejaswi-30"><img src="https://avatars.githubusercontent.com/hematejaswi-30?s=64" width="52" height="52" alt="hematejaswi-30" style="border-radius:50%;margin:4px"/><br/><sub><b>hematejaswi-30</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Lehana02"><img src="https://avatars.githubusercontent.com/Lehana02?s=64" width="52" height="52" alt="Lehana02" style="border-radius:50%;margin:4px"/><br/><sub><b>Lehana02</b></sub><br/><sub>1 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/maheshbhojane1"><img src="https://avatars.githubusercontent.com/maheshbhojane1?s=64" width="52" height="52" alt="maheshbhojane1" style="border-radius:50%;margin:4px"/><br/><sub><b>maheshbhojane1</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Man1ac-1773"><img src="https://avatars.githubusercontent.com/Man1ac-1773?s=64" width="52" height="52" alt="Man1ac-1773" style="border-radius:50%;margin:4px"/><br/><sub><b>Man1ac-1773</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/EchoOfCode"><img src="https://avatars.githubusercontent.com/EchoOfCode?s=64" width="52" height="52" alt="EchoOfCode" style="border-radius:50%;margin:4px"/><br/><sub><b>EchoOfCode</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/NirmalSingh-09"><img src="https://avatars.githubusercontent.com/NirmalSingh-09?s=64" width="52" height="52" alt="NirmalSingh-09" style="border-radius:50%;margin:4px"/><br/><sub><b>NirmalSingh-09</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Rashi1404"><img src="https://avatars.githubusercontent.com/Rashi1404?s=64" width="52" height="52" alt="Rashi1404" style="border-radius:50%;margin:4px"/><br/><sub><b>Rashi1404</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/RaviCoderWallah"><img src="https://avatars.githubusercontent.com/RaviCoderWallah?s=64" width="52" height="52" alt="RaviCoderWallah" style="border-radius:50%;margin:4px"/><br/><sub><b>RaviCoderWallah</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/ritikamahato924"><img src="https://avatars.githubusercontent.com/ritikamahato924?s=64" width="52" height="52" alt="ritikamahato924" style="border-radius:50%;margin:4px"/><br/><sub><b>ritikamahato924</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/saksham0777"><img src="https://avatars.githubusercontent.com/saksham0777?s=64" width="52" height="52" alt="saksham0777" style="border-radius:50%;margin:4px"/><br/><sub><b>saksham0777</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/panditshubham766-dotcom"><img src="https://avatars.githubusercontent.com/panditshubham766-dotcom?s=64" width="52" height="52" alt="panditshubham766-dotcom" style="border-radius:50%;margin:4px"/><br/><sub><b>panditshubham766-dotcom</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/sinchana-aiml"><img src="https://avatars.githubusercontent.com/sinchana-aiml?s=64" width="52" height="52" alt="sinchana-aiml" style="border-radius:50%;margin:4px"/><br/><sub><b>sinchana-aiml</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/siri-004"><img src="https://avatars.githubusercontent.com/siri-004?s=64" width="52" height="52" alt="siri-004" style="border-radius:50%;margin:4px"/><br/><sub><b>siri-004</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/SRSoham"><img src="https://avatars.githubusercontent.com/SRSoham?s=64" width="52" height="52" alt="SRSoham" style="border-radius:50%;margin:4px"/><br/><sub><b>SRSoham</b></sub><br/><sub>1 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Vishvadharman"><img src="https://avatars.githubusercontent.com/Vishvadharman?s=64" width="52" height="52" alt="Vishvadharman" style="border-radius:50%;margin:4px"/><br/><sub><b>Vishvadharman</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/zairahussain27"><img src="https://avatars.githubusercontent.com/zairahussain27?s=64" width="52" height="52" alt="zairahussain27" style="border-radius:50%;margin:4px"/><br/><sub><b>zairahussain27</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/aditip01-cloud"><img src="https://avatars.githubusercontent.com/aditip01-cloud?s=64" width="52" height="52" alt="aditip01-cloud" style="border-radius:50%;margin:4px"/><br/><sub><b>aditip01-cloud</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/kejriwalkaushal04"><img src="https://avatars.githubusercontent.com/kejriwalkaushal04?s=64" width="52" height="52" alt="kejriwalkaushal04" style="border-radius:50%;margin:4px"/><br/><sub><b>kejriwalkaushal04</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/khushboo-khatoon"><img src="https://avatars.githubusercontent.com/khushboo-khatoon?s=64" width="52" height="52" alt="khushboo-khatoon" style="border-radius:50%;margin:4px"/><br/><sub><b>khushboo-khatoon</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/kunalSingh026"><img src="https://avatars.githubusercontent.com/kunalSingh026?s=64" width="52" height="52" alt="kunalSingh026" style="border-radius:50%;margin:4px"/><br/><sub><b>kunalSingh026</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/rachika08"><img src="https://avatars.githubusercontent.com/rachika08?s=64" width="52" height="52" alt="rachika08" style="border-radius:50%;margin:4px"/><br/><sub><b>rachika08</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/riddhimagupta2"><img src="https://avatars.githubusercontent.com/riddhimagupta2?s=64" width="52" height="52" alt="riddhimagupta2" style="border-radius:50%;margin:4px"/><br/><sub><b>riddhimagupta2</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/saibhumi146"><img src="https://avatars.githubusercontent.com/saibhumi146?s=64" width="52" height="52" alt="saibhumi146" style="border-radius:50%;margin:4px"/><br/><sub><b>saibhumi146</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/surajbharsakle07"><img src="https://avatars.githubusercontent.com/surajbharsakle07?s=64" width="52" height="52" alt="surajbharsakle07" style="border-radius:50%;margin:4px"/><br/><sub><b>surajbharsakle07</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/tejasch2006-ux"><img src="https://avatars.githubusercontent.com/tejasch2006-ux?s=64" width="52" height="52" alt="tejasch2006-ux" style="border-radius:50%;margin:4px"/><br/><sub><b>tejasch2006-ux</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/unnatipandey19"><img src="https://avatars.githubusercontent.com/unnatipandey19?s=64" width="52" height="52" alt="unnatipandey19" style="border-radius:50%;margin:4px"/><br/><sub><b>unnatipandey19</b></sub><br/><sub>1 commits</sub></a></td></tr>
</table>

*Auto-updated daily · [View all →](https://github.com/SAPTARSHI-coder/EaseMotion-css/graphs/contributors)*

</div>
<!-- CONTRIBUTOR-WALL-END -->

---

## Maintainer 👤

<div align="center">

**Saptarshi Sadhu**

[![GitHub](https://img.shields.io/badge/GitHub-SAPTARSHI--coder-6c63ff?style=flat-square&logo=github)](https://github.com/SAPTARSHI-coder)

EaseMotion CSS is designed, curated, and actively maintained by Saptarshi Sadhu. All contributions are reviewed and standardized before integration. The framework does not accept unreviewed direct edits.

> Only the maintainer merges pull requests. This is enforced via [CODEOWNERS](./.github/CODEOWNERS).

</div>

---

## Changelog 📜

See [CHANGELOG.md](./CHANGELOG.md) for the full release history.

**Latest: [v1.0.0](./CHANGELOG.md)** — Initial public release. 80+ utilities, 20+ animations, buttons, cards, full docs site, npm + CDN.

---

## License ⚖️

**MIT © 2026 Saptarshi Sadhu** — see [LICENSE](./LICENSE) for details.

You are free to use EaseMotion CSS in personal and commercial projects. Attribution appreciated but not required.

---

<div align="center">

**Thank you for building EaseMotion CSS with me.** 💜

Every star, every PR, every issue — it all adds up.

*— Saptarshi Sadhu · [@SAPTARSHI-coder](https://github.com/SAPTARSHI-coder)*

<br/>

[![npm](https://img.shields.io/npm/v/easemotion-css?style=flat-square&color=6c63ff)](https://www.npmjs.com/package/easemotion-css)
[![Stars](https://img.shields.io/github/stars/SAPTARSHI-coder/EaseMotion-css?style=flat-square&color=6c63ff)](https://github.com/SAPTARSHI-coder/EaseMotion-css/stargazers)
[![License](https://img.shields.io/badge/License-MIT-6c63ff?style=flat-square)](./LICENSE)
[![Sponsor](https://img.shields.io/badge/Sponsor-GitHub-ea4aaa?style=flat-square&logo=github-sponsors)](https://github.com/sponsors/SAPTARSHI-coder)

Built with care &nbsp;·&nbsp; Zero dependencies &nbsp;·&nbsp; Animation-first &nbsp;·&nbsp; Community-driven

</div>


