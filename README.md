<div align="center">

<img src="./docs/assets/logo.svg" alt="EaseMotion CSS" width="570" />

<br/>

# ⚡ EaseMotion CSS

**Modern animation framework for expressive UI motion.**

Write UI like you describe it in English. No build steps. No memorizing shorthand. Just link a file and ship.

<br/>

[![npm version](https://img.shields.io/npm/v/easemotion-css?style=flat-square&color=6c63ff&label=npm)](https://www.npmjs.com/package/easemotion-css)
[![Sponsor](https://img.shields.io/badge/Sponsor-💖-ea4aaa?style=flat-square)](https://github.com/sponsors/SAPTARSHI-coder)
[![npm downloads](https://img.shields.io/npm/dm/easemotion-css?style=flat-square&color=a78bfa&label=downloads%2Fmo)](https://www.npmjs.com/package/easemotion-css)
[![jsDelivr CDN](https://data.jsdelivr.com/v1/package/npm/easemotion-css/badge)](https://www.jsdelivr.com/package/npm/easemotion-css)
[![GitHub Stars](https://flat.badgen.net/github/stars/SAPTARSHI-coder/EaseMotion-css?color=6c63ff&icon=github&label=stars)](https://github.com/SAPTARSHI-coder/EaseMotion-css/stargazers)
[![GitHub Forks](https://flat.badgen.net/github/forks/SAPTARSHI-coder/EaseMotion-css?color=22c55e&icon=github&label=forks)](https://github.com/SAPTARSHI-coder/EaseMotion-css/network/members)
[![GitHub Contributors](https://img.shields.io/badge/contributors-236-f59e0b?style=flat-square)](https://github.com/SAPTARSHI-coder/EaseMotion-css/graphs/contributors)
[![Merged PRs](https://img.shields.io/badge/merged%20PRs-1591-8b5cf6?style=flat-square)](https://github.com/SAPTARSHI-coder/EaseMotion-css/pulls?q=is%3Apr+is%3Amerged)
[![Closed Issues](https://img.shields.io/badge/closed%20issues-1149-3b82f6?style=flat-square)](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues?q=is%3Aissue+is%3Aclosed)
[![Open PRs](https://flat.badgen.net/github/open-prs/SAPTARSHI-coder/EaseMotion-css?color=a78bfa&label=open%20PRs)](https://github.com/SAPTARSHI-coder/EaseMotion-css/pulls)
[![Open Issues](https://flat.badgen.net/github/open-issues/SAPTARSHI-coder/EaseMotion-css?color=ef4444&label=issues)](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues)
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
<h3 class="ease-slide-in-left">Slide left</h3>
<h4 class="ease-slide-in-right">Slide right</h4>
<h5 class="ease-slide-in-left">Slide from left</h5>
<h4 class="ease-zoom-in">Zoom in</h4>
<h5 class="ease-flip">3D flip</h5>
<h5 class="ease-contract-image-entrance">Contract image entrance</h5>

<!-- Staggered sequence — each item 100ms after previous -->
<div class="ease-slide-up ease-delay-100">First</div>
<div class="ease-slide-up ease-delay-200">Second</div>
<div class="ease-slide-up ease-delay-300">Third</div>

### Duration Helpers

```html
<div class="ease-slide-up ease-duration-fast">
  Fast Animation
</div>

<div class="ease-slide-up ease-duration-slow">
  Slow Animation
</div>
```

| Class | Duration |
|---------|----------|
| ease-duration-fast | 0.5s |
| ease-duration-normal | 1s |
| ease-duration-slow | 2s |
| ease-duration-extra-slow | 3s |

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

### Scroll-Triggered Animations (Ease Reveal)

To use `.ease-reveal` and have elements animate when scrolled into view, you must also include the `reveal.js` script in your HTML:

```html
<!-- Add this before closing </body> tag -->
<script src="https://cdn.jsdelivr.net/npm/easemotion-css/core/reveal.js"></script>
```

Then simply add `.ease-reveal` along with an animation class:

```html
<div class="ease-reveal ease-slide-up">
  This animates when scrolled into view!
</div>
```


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

### 233 Contributors

<table>
<tr><td align="center"><a href="https://github.com/SAPTARSHI-coder"><img src="https://avatars.githubusercontent.com/SAPTARSHI-coder?s=64" width="52" height="52" alt="SAPTARSHI-coder" style="border-radius:50%;margin:4px"/><br/><sub><b>SAPTARSHI-coder</b></sub><br/><sub>1823 commits</sub></a></td><td align="center"><a href="https://github.com/TavishaBudhiraja"><img src="https://avatars.githubusercontent.com/TavishaBudhiraja?s=64" width="52" height="52" alt="TavishaBudhiraja" style="border-radius:50%;margin:4px"/><br/><sub><b>TavishaBudhiraja</b></sub><br/><sub>79 commits</sub></a></td><td align="center"><a href="https://github.com/Aryan0819"><img src="https://avatars.githubusercontent.com/Aryan0819?s=64" width="52" height="52" alt="Aryan0819" style="border-radius:50%;margin:4px"/><br/><sub><b>Aryan0819</b></sub><br/><sub>72 commits</sub></a></td><td align="center"><a href="https://github.com/ishita526"><img src="https://avatars.githubusercontent.com/ishita526?s=64" width="52" height="52" alt="ishita526" style="border-radius:50%;margin:4px"/><br/><sub><b>ishita526</b></sub><br/><sub>61 commits</sub></a></td><td align="center"><a href="https://github.com/KRITIKA-l"><img src="https://avatars.githubusercontent.com/KRITIKA-l?s=64" width="52" height="52" alt="KRITIKA-l" style="border-radius:50%;margin:4px"/><br/><sub><b>KRITIKA-l</b></sub><br/><sub>61 commits</sub></a></td><td align="center"><a href="https://github.com/Prateek2007-cmd"><img src="https://avatars.githubusercontent.com/Prateek2007-cmd?s=64" width="52" height="52" alt="Prateek2007-cmd" style="border-radius:50%;margin:4px"/><br/><sub><b>Prateek2007-cmd</b></sub><br/><sub>54 commits</sub></a></td><td align="center"><a href="https://github.com/Shreeya1207"><img src="https://avatars.githubusercontent.com/Shreeya1207?s=64" width="52" height="52" alt="Shreeya1207" style="border-radius:50%;margin:4px"/><br/><sub><b>Shreeya1207</b></sub><br/><sub>51 commits</sub></a></td><td align="center"><a href="https://github.com/shresthbhargava"><img src="https://avatars.githubusercontent.com/shresthbhargava?s=64" width="52" height="52" alt="shresthbhargava" style="border-radius:50%;margin:4px"/><br/><sub><b>shresthbhargava</b></sub><br/><sub>50 commits</sub></a></td><td align="center"><a href="https://github.com/sricharan-213"><img src="https://avatars.githubusercontent.com/sricharan-213?s=64" width="52" height="52" alt="sricharan-213" style="border-radius:50%;margin:4px"/><br/><sub><b>sricharan-213</b></sub><br/><sub>47 commits</sub></a></td><td align="center"><a href="https://github.com/zen-ash-dev"><img src="https://avatars.githubusercontent.com/zen-ash-dev?s=64" width="52" height="52" alt="zen-ash-dev" style="border-radius:50%;margin:4px"/><br/><sub><b>zen-ash-dev</b></sub><br/><sub>42 commits</sub></a></td><td align="center"><a href="https://github.com/codedbydollys10"><img src="https://avatars.githubusercontent.com/codedbydollys10?s=64" width="52" height="52" alt="codedbydollys10" style="border-radius:50%;margin:4px"/><br/><sub><b>codedbydollys10</b></sub><br/><sub>39 commits</sub></a></td><td align="center"><a href="https://github.com/Rashi1404"><img src="https://avatars.githubusercontent.com/Rashi1404?s=64" width="52" height="52" alt="Rashi1404" style="border-radius:50%;margin:4px"/><br/><sub><b>Rashi1404</b></sub><br/><sub>28 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/AnanyaTiwari850"><img src="https://avatars.githubusercontent.com/AnanyaTiwari850?s=64" width="52" height="52" alt="AnanyaTiwari850" style="border-radius:50%;margin:4px"/><br/><sub><b>AnanyaTiwari850</b></sub><br/><sub>27 commits</sub></a></td><td align="center"><a href="https://github.com/Kokila-chandrakar"><img src="https://avatars.githubusercontent.com/Kokila-chandrakar?s=64" width="52" height="52" alt="Kokila-chandrakar" style="border-radius:50%;margin:4px"/><br/><sub><b>Kokila-chandrakar</b></sub><br/><sub>27 commits</sub></a></td><td align="center"><a href="https://github.com/Abhay-1704"><img src="https://avatars.githubusercontent.com/Abhay-1704?s=64" width="52" height="52" alt="Abhay-1704" style="border-radius:50%;margin:4px"/><br/><sub><b>Abhay-1704</b></sub><br/><sub>26 commits</sub></a></td><td align="center"><a href="https://github.com/nyxsky404"><img src="https://avatars.githubusercontent.com/nyxsky404?s=64" width="52" height="52" alt="nyxsky404" style="border-radius:50%;margin:4px"/><br/><sub><b>nyxsky404</b></sub><br/><sub>26 commits</sub></a></td><td align="center"><a href="https://github.com/sonusharma6-dsa"><img src="https://avatars.githubusercontent.com/sonusharma6-dsa?s=64" width="52" height="52" alt="sonusharma6-dsa" style="border-radius:50%;margin:4px"/><br/><sub><b>sonusharma6-dsa</b></sub><br/><sub>25 commits</sub></a></td><td align="center"><a href="https://github.com/sudha09-git"><img src="https://avatars.githubusercontent.com/sudha09-git?s=64" width="52" height="52" alt="sudha09-git" style="border-radius:50%;margin:4px"/><br/><sub><b>sudha09-git</b></sub><br/><sub>24 commits</sub></a></td><td align="center"><a href="https://github.com/TEJASWANIANIMIREDDY"><img src="https://avatars.githubusercontent.com/TEJASWANIANIMIREDDY?s=64" width="52" height="52" alt="TEJASWANIANIMIREDDY" style="border-radius:50%;margin:4px"/><br/><sub><b>TEJASWANIANIMIREDDY</b></sub><br/><sub>22 commits</sub></a></td><td align="center"><a href="https://github.com/pari-dubey1"><img src="https://avatars.githubusercontent.com/pari-dubey1?s=64" width="52" height="52" alt="pari-dubey1" style="border-radius:50%;margin:4px"/><br/><sub><b>pari-dubey1</b></sub><br/><sub>21 commits</sub></a></td><td align="center"><a href="https://github.com/Muditapandey26"><img src="https://avatars.githubusercontent.com/Muditapandey26?s=64" width="52" height="52" alt="Muditapandey26" style="border-radius:50%;margin:4px"/><br/><sub><b>Muditapandey26</b></sub><br/><sub>19 commits</sub></a></td><td align="center"><a href="https://github.com/Nicks-19"><img src="https://avatars.githubusercontent.com/Nicks-19?s=64" width="52" height="52" alt="Nicks-19" style="border-radius:50%;margin:4px"/><br/><sub><b>Nicks-19</b></sub><br/><sub>19 commits</sub></a></td><td align="center"><a href="https://github.com/hiitarun1"><img src="https://avatars.githubusercontent.com/hiitarun1?s=64" width="52" height="52" alt="hiitarun1" style="border-radius:50%;margin:4px"/><br/><sub><b>hiitarun1</b></sub><br/><sub>19 commits</sub></a></td><td align="center"><a href="https://github.com/Ayushisingh09"><img src="https://avatars.githubusercontent.com/Ayushisingh09?s=64" width="52" height="52" alt="Ayushisingh09" style="border-radius:50%;margin:4px"/><br/><sub><b>Ayushisingh09</b></sub><br/><sub>17 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Aryan-Agarwal-creator"><img src="https://avatars.githubusercontent.com/Aryan-Agarwal-creator?s=64" width="52" height="52" alt="Aryan-Agarwal-creator" style="border-radius:50%;margin:4px"/><br/><sub><b>Aryan-Agarwal-creator</b></sub><br/><sub>15 commits</sub></a></td><td align="center"><a href="https://github.com/AyushPrad2907"><img src="https://avatars.githubusercontent.com/AyushPrad2907?s=64" width="52" height="52" alt="AyushPrad2907" style="border-radius:50%;margin:4px"/><br/><sub><b>AyushPrad2907</b></sub><br/><sub>15 commits</sub></a></td><td align="center"><a href="https://github.com/KRUSHAL2956"><img src="https://avatars.githubusercontent.com/KRUSHAL2956?s=64" width="52" height="52" alt="KRUSHAL2956" style="border-radius:50%;margin:4px"/><br/><sub><b>KRUSHAL2956</b></sub><br/><sub>15 commits</sub></a></td><td align="center"><a href="https://github.com/Premshaw23"><img src="https://avatars.githubusercontent.com/Premshaw23?s=64" width="52" height="52" alt="Premshaw23" style="border-radius:50%;margin:4px"/><br/><sub><b>Premshaw23</b></sub><br/><sub>14 commits</sub></a></td><td align="center"><a href="https://github.com/ARPANPATRA111"><img src="https://avatars.githubusercontent.com/ARPANPATRA111?s=64" width="52" height="52" alt="ARPANPATRA111" style="border-radius:50%;margin:4px"/><br/><sub><b>ARPANPATRA111</b></sub><br/><sub>14 commits</sub></a></td><td align="center"><a href="https://github.com/Ankitkr16"><img src="https://avatars.githubusercontent.com/Ankitkr16?s=64" width="52" height="52" alt="Ankitkr16" style="border-radius:50%;margin:4px"/><br/><sub><b>Ankitkr16</b></sub><br/><sub>14 commits</sub></a></td><td align="center"><a href="https://github.com/zairahussain27"><img src="https://avatars.githubusercontent.com/zairahussain27?s=64" width="52" height="52" alt="zairahussain27" style="border-radius:50%;margin:4px"/><br/><sub><b>zairahussain27</b></sub><br/><sub>13 commits</sub></a></td><td align="center"><a href="https://github.com/Xploit-Ghost"><img src="https://avatars.githubusercontent.com/Xploit-Ghost?s=64" width="52" height="52" alt="Xploit-Ghost" style="border-radius:50%;margin:4px"/><br/><sub><b>Xploit-Ghost</b></sub><br/><sub>13 commits</sub></a></td><td align="center"><a href="https://github.com/bhavyabhardwaj001"><img src="https://avatars.githubusercontent.com/bhavyabhardwaj001?s=64" width="52" height="52" alt="bhavyabhardwaj001" style="border-radius:50%;margin:4px"/><br/><sub><b>bhavyabhardwaj001</b></sub><br/><sub>12 commits</sub></a></td><td align="center"><a href="https://github.com/Krish-Mishra"><img src="https://avatars.githubusercontent.com/Krish-Mishra?s=64" width="52" height="52" alt="Krish-Mishra" style="border-radius:50%;margin:4px"/><br/><sub><b>Krish-Mishra</b></sub><br/><sub>12 commits</sub></a></td><td align="center"><a href="https://github.com/BinaryBandit-07"><img src="https://avatars.githubusercontent.com/BinaryBandit-07?s=64" width="52" height="52" alt="BinaryBandit-07" style="border-radius:50%;margin:4px"/><br/><sub><b>BinaryBandit-07</b></sub><br/><sub>10 commits</sub></a></td><td align="center"><a href="https://github.com/Pr241singh"><img src="https://avatars.githubusercontent.com/Pr241singh?s=64" width="52" height="52" alt="Pr241singh" style="border-radius:50%;margin:4px"/><br/><sub><b>Pr241singh</b></sub><br/><sub>10 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/kunal-9090"><img src="https://avatars.githubusercontent.com/kunal-9090?s=64" width="52" height="52" alt="kunal-9090" style="border-radius:50%;margin:4px"/><br/><sub><b>kunal-9090</b></sub><br/><sub>9 commits</sub></a></td><td align="center"><a href="https://github.com/adyamohanka"><img src="https://avatars.githubusercontent.com/adyamohanka?s=64" width="52" height="52" alt="adyamohanka" style="border-radius:50%;margin:4px"/><br/><sub><b>adyamohanka</b></sub><br/><sub>9 commits</sub></a></td><td align="center"><a href="https://github.com/Aarju247"><img src="https://avatars.githubusercontent.com/Aarju247?s=64" width="52" height="52" alt="Aarju247" style="border-radius:50%;margin:4px"/><br/><sub><b>Aarju247</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/bhavyapandiya29"><img src="https://avatars.githubusercontent.com/bhavyapandiya29?s=64" width="52" height="52" alt="bhavyapandiya29" style="border-radius:50%;margin:4px"/><br/><sub><b>bhavyapandiya29</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/janievinod"><img src="https://avatars.githubusercontent.com/janievinod?s=64" width="52" height="52" alt="janievinod" style="border-radius:50%;margin:4px"/><br/><sub><b>janievinod</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/Juhi4433"><img src="https://avatars.githubusercontent.com/Juhi4433?s=64" width="52" height="52" alt="Juhi4433" style="border-radius:50%;margin:4px"/><br/><sub><b>Juhi4433</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/prerendrarahitya1708"><img src="https://avatars.githubusercontent.com/prerendrarahitya1708?s=64" width="52" height="52" alt="prerendrarahitya1708" style="border-radius:50%;margin:4px"/><br/><sub><b>prerendrarahitya1708</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/panditshubham766-dotcom"><img src="https://avatars.githubusercontent.com/panditshubham766-dotcom?s=64" width="52" height="52" alt="panditshubham766-dotcom" style="border-radius:50%;margin:4px"/><br/><sub><b>panditshubham766-dotcom</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/vbarik317-droid"><img src="https://avatars.githubusercontent.com/vbarik317-droid?s=64" width="52" height="52" alt="vbarik317-droid" style="border-radius:50%;margin:4px"/><br/><sub><b>vbarik317-droid</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/S0412-2007"><img src="https://avatars.githubusercontent.com/S0412-2007?s=64" width="52" height="52" alt="S0412-2007" style="border-radius:50%;margin:4px"/><br/><sub><b>S0412-2007</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/antara5603"><img src="https://avatars.githubusercontent.com/antara5603?s=64" width="52" height="52" alt="antara5603" style="border-radius:50%;margin:4px"/><br/><sub><b>antara5603</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/Dhruva5vora"><img src="https://avatars.githubusercontent.com/Dhruva5vora?s=64" width="52" height="52" alt="Dhruva5vora" style="border-radius:50%;margin:4px"/><br/><sub><b>Dhruva5vora</b></sub><br/><sub>7 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/yatri28"><img src="https://avatars.githubusercontent.com/yatri28?s=64" width="52" height="52" alt="yatri28" style="border-radius:50%;margin:4px"/><br/><sub><b>yatri28</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/saurabhhhcodes"><img src="https://avatars.githubusercontent.com/saurabhhhcodes?s=64" width="52" height="52" alt="saurabhhhcodes" style="border-radius:50%;margin:4px"/><br/><sub><b>saurabhhhcodes</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/Ru-2008"><img src="https://avatars.githubusercontent.com/Ru-2008?s=64" width="52" height="52" alt="Ru-2008" style="border-radius:50%;margin:4px"/><br/><sub><b>Ru-2008</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/Rakshita006"><img src="https://avatars.githubusercontent.com/Rakshita006?s=64" width="52" height="52" alt="Rakshita006" style="border-radius:50%;margin:4px"/><br/><sub><b>Rakshita006</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/Rajlakshmi-ai"><img src="https://avatars.githubusercontent.com/Rajlakshmi-ai?s=64" width="52" height="52" alt="Rajlakshmi-ai" style="border-radius:50%;margin:4px"/><br/><sub><b>Rajlakshmi-ai</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/Dharm3112"><img src="https://avatars.githubusercontent.com/Dharm3112?s=64" width="52" height="52" alt="Dharm3112" style="border-radius:50%;margin:4px"/><br/><sub><b>Dharm3112</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/gaurav123-4"><img src="https://avatars.githubusercontent.com/gaurav123-4?s=64" width="52" height="52" alt="gaurav123-4" style="border-radius:50%;margin:4px"/><br/><sub><b>gaurav123-4</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/Siddh2024"><img src="https://avatars.githubusercontent.com/Siddh2024?s=64" width="52" height="52" alt="Siddh2024" style="border-radius:50%;margin:4px"/><br/><sub><b>Siddh2024</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/mohamedfahim18"><img src="https://avatars.githubusercontent.com/mohamedfahim18?s=64" width="52" height="52" alt="mohamedfahim18" style="border-radius:50%;margin:4px"/><br/><sub><b>mohamedfahim18</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/MajBlaze"><img src="https://avatars.githubusercontent.com/MajBlaze?s=64" width="52" height="52" alt="MajBlaze" style="border-radius:50%;margin:4px"/><br/><sub><b>MajBlaze</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/srividrumavangara"><img src="https://avatars.githubusercontent.com/srividrumavangara?s=64" width="52" height="52" alt="srividrumavangara" style="border-radius:50%;margin:4px"/><br/><sub><b>srividrumavangara</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/jayesh-durge"><img src="https://avatars.githubusercontent.com/jayesh-durge?s=64" width="52" height="52" alt="jayesh-durge" style="border-radius:50%;margin:4px"/><br/><sub><b>jayesh-durge</b></sub><br/><sub>6 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/abhinavkhedwal4-maker"><img src="https://avatars.githubusercontent.com/abhinavkhedwal4-maker?s=64" width="52" height="52" alt="abhinavkhedwal4-maker" style="border-radius:50%;margin:4px"/><br/><sub><b>abhinavkhedwal4-maker</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/ionfwsrijan"><img src="https://avatars.githubusercontent.com/ionfwsrijan?s=64" width="52" height="52" alt="ionfwsrijan" style="border-radius:50%;margin:4px"/><br/><sub><b>ionfwsrijan</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/ShamrithaGS"><img src="https://avatars.githubusercontent.com/ShamrithaGS?s=64" width="52" height="52" alt="ShamrithaGS" style="border-radius:50%;margin:4px"/><br/><sub><b>ShamrithaGS</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/PradeepTech-hub"><img src="https://avatars.githubusercontent.com/PradeepTech-hub?s=64" width="52" height="52" alt="PradeepTech-hub" style="border-radius:50%;margin:4px"/><br/><sub><b>PradeepTech-hub</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/PRINCE-ANTHONY"><img src="https://avatars.githubusercontent.com/PRINCE-ANTHONY?s=64" width="52" height="52" alt="PRINCE-ANTHONY" style="border-radius:50%;margin:4px"/><br/><sub><b>PRINCE-ANTHONY</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/aryanmalhotraug25-hash"><img src="https://avatars.githubusercontent.com/aryanmalhotraug25-hash?s=64" width="52" height="52" alt="aryanmalhotraug25-hash" style="border-radius:50%;margin:4px"/><br/><sub><b>aryanmalhotraug25-hash</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/Ishika-1110"><img src="https://avatars.githubusercontent.com/Ishika-1110?s=64" width="52" height="52" alt="Ishika-1110" style="border-radius:50%;margin:4px"/><br/><sub><b>Ishika-1110</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/WHENKEY2007"><img src="https://avatars.githubusercontent.com/WHENKEY2007?s=64" width="52" height="52" alt="WHENKEY2007" style="border-radius:50%;margin:4px"/><br/><sub><b>WHENKEY2007</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/mokshikabhardwaj29"><img src="https://avatars.githubusercontent.com/mokshikabhardwaj29?s=64" width="52" height="52" alt="mokshikabhardwaj29" style="border-radius:50%;margin:4px"/><br/><sub><b>mokshikabhardwaj29</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/joshnajojo12"><img src="https://avatars.githubusercontent.com/joshnajojo12?s=64" width="52" height="52" alt="joshnajojo12" style="border-radius:50%;margin:4px"/><br/><sub><b>joshnajojo12</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/kavin553"><img src="https://avatars.githubusercontent.com/kavin553?s=64" width="52" height="52" alt="kavin553" style="border-radius:50%;margin:4px"/><br/><sub><b>kavin553</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/boss477"><img src="https://avatars.githubusercontent.com/boss477?s=64" width="52" height="52" alt="boss477" style="border-radius:50%;margin:4px"/><br/><sub><b>boss477</b></sub><br/><sub>5 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/YerraguntaAjayKumar"><img src="https://avatars.githubusercontent.com/YerraguntaAjayKumar?s=64" width="52" height="52" alt="YerraguntaAjayKumar" style="border-radius:50%;margin:4px"/><br/><sub><b>YerraguntaAjayKumar</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/Shruti1420"><img src="https://avatars.githubusercontent.com/Shruti1420?s=64" width="52" height="52" alt="Shruti1420" style="border-radius:50%;margin:4px"/><br/><sub><b>Shruti1420</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/SAMJOD07-devz"><img src="https://avatars.githubusercontent.com/SAMJOD07-devz?s=64" width="52" height="52" alt="SAMJOD07-devz" style="border-radius:50%;margin:4px"/><br/><sub><b>SAMJOD07-devz</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/Luffy-456"><img src="https://avatars.githubusercontent.com/Luffy-456?s=64" width="52" height="52" alt="Luffy-456" style="border-radius:50%;margin:4px"/><br/><sub><b>Luffy-456</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/Lehana02"><img src="https://avatars.githubusercontent.com/Lehana02?s=64" width="52" height="52" alt="Lehana02" style="border-radius:50%;margin:4px"/><br/><sub><b>Lehana02</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/bh462007"><img src="https://avatars.githubusercontent.com/bh462007?s=64" width="52" height="52" alt="bh462007" style="border-radius:50%;margin:4px"/><br/><sub><b>bh462007</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/alishaalmeida10"><img src="https://avatars.githubusercontent.com/alishaalmeida10?s=64" width="52" height="52" alt="alishaalmeida10" style="border-radius:50%;margin:4px"/><br/><sub><b>alishaalmeida10</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/AgnusSerena"><img src="https://avatars.githubusercontent.com/AgnusSerena?s=64" width="52" height="52" alt="AgnusSerena" style="border-radius:50%;margin:4px"/><br/><sub><b>AgnusSerena</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/unnatipandey19"><img src="https://avatars.githubusercontent.com/unnatipandey19?s=64" width="52" height="52" alt="unnatipandey19" style="border-radius:50%;margin:4px"/><br/><sub><b>unnatipandey19</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/kshah123919"><img src="https://avatars.githubusercontent.com/kshah123919?s=64" width="52" height="52" alt="kshah123919" style="border-radius:50%;margin:4px"/><br/><sub><b>kshah123919</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/rishikareddy771"><img src="https://avatars.githubusercontent.com/rishikareddy771?s=64" width="52" height="52" alt="rishikareddy771" style="border-radius:50%;margin:4px"/><br/><sub><b>rishikareddy771</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/bhaktisp15"><img src="https://avatars.githubusercontent.com/bhaktisp15?s=64" width="52" height="52" alt="bhaktisp15" style="border-radius:50%;margin:4px"/><br/><sub><b>bhaktisp15</b></sub><br/><sub>4 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Sreeya-kumari"><img src="https://avatars.githubusercontent.com/Sreeya-kumari?s=64" width="52" height="52" alt="Sreeya-kumari" style="border-radius:50%;margin:4px"/><br/><sub><b>Sreeya-kumari</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/SRSoham"><img src="https://avatars.githubusercontent.com/SRSoham?s=64" width="52" height="52" alt="SRSoham" style="border-radius:50%;margin:4px"/><br/><sub><b>SRSoham</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/ritikamahato924"><img src="https://avatars.githubusercontent.com/ritikamahato924?s=64" width="52" height="52" alt="ritikamahato924" style="border-radius:50%;margin:4px"/><br/><sub><b>ritikamahato924</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/PojashriJM"><img src="https://avatars.githubusercontent.com/PojashriJM?s=64" width="52" height="52" alt="PojashriJM" style="border-radius:50%;margin:4px"/><br/><sub><b>PojashriJM</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/Vitekarmayur"><img src="https://avatars.githubusercontent.com/Vitekarmayur?s=64" width="52" height="52" alt="Vitekarmayur" style="border-radius:50%;margin:4px"/><br/><sub><b>Vitekarmayur</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/JoyceHanan"><img src="https://avatars.githubusercontent.com/JoyceHanan?s=64" width="52" height="52" alt="JoyceHanan" style="border-radius:50%;margin:4px"/><br/><sub><b>JoyceHanan</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/dhruv-jani-0808"><img src="https://avatars.githubusercontent.com/dhruv-jani-0808?s=64" width="52" height="52" alt="dhruv-jani-0808" style="border-radius:50%;margin:4px"/><br/><sub><b>dhruv-jani-0808</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/HarmiBhikadiya"><img src="https://avatars.githubusercontent.com/HarmiBhikadiya?s=64" width="52" height="52" alt="HarmiBhikadiya" style="border-radius:50%;margin:4px"/><br/><sub><b>HarmiBhikadiya</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/Paawangarg1084"><img src="https://avatars.githubusercontent.com/Paawangarg1084?s=64" width="52" height="52" alt="Paawangarg1084" style="border-radius:50%;margin:4px"/><br/><sub><b>Paawangarg1084</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/geetanunakani"><img src="https://avatars.githubusercontent.com/geetanunakani?s=64" width="52" height="52" alt="geetanunakani" style="border-radius:50%;margin:4px"/><br/><sub><b>geetanunakani</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/karrisanthoshigayatri"><img src="https://avatars.githubusercontent.com/karrisanthoshigayatri?s=64" width="52" height="52" alt="karrisanthoshigayatri" style="border-radius:50%;margin:4px"/><br/><sub><b>karrisanthoshigayatri</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/lokeshkumar69"><img src="https://avatars.githubusercontent.com/lokeshkumar69?s=64" width="52" height="52" alt="lokeshkumar69" style="border-radius:50%;margin:4px"/><br/><sub><b>lokeshkumar69</b></sub><br/><sub>3 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/mythri2405"><img src="https://avatars.githubusercontent.com/mythri2405?s=64" width="52" height="52" alt="mythri2405" style="border-radius:50%;margin:4px"/><br/><sub><b>mythri2405</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/sarveshwarikumari05"><img src="https://avatars.githubusercontent.com/sarveshwarikumari05?s=64" width="52" height="52" alt="sarveshwarikumari05" style="border-radius:50%;margin:4px"/><br/><sub><b>sarveshwarikumari05</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/shyam-medh"><img src="https://avatars.githubusercontent.com/shyam-medh?s=64" width="52" height="52" alt="shyam-medh" style="border-radius:50%;margin:4px"/><br/><sub><b>shyam-medh</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/srujana-manda"><img src="https://avatars.githubusercontent.com/srujana-manda?s=64" width="52" height="52" alt="srujana-manda" style="border-radius:50%;margin:4px"/><br/><sub><b>srujana-manda</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/surajbharsakle07"><img src="https://avatars.githubusercontent.com/surajbharsakle07?s=64" width="52" height="52" alt="surajbharsakle07" style="border-radius:50%;margin:4px"/><br/><sub><b>surajbharsakle07</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/vs-tries-to-code"><img src="https://avatars.githubusercontent.com/vs-tries-to-code?s=64" width="52" height="52" alt="vs-tries-to-code" style="border-radius:50%;margin:4px"/><br/><sub><b>vs-tries-to-code</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Siddhi-Kapoor"><img src="https://avatars.githubusercontent.com/Siddhi-Kapoor?s=64" width="52" height="52" alt="Siddhi-Kapoor" style="border-radius:50%;margin:4px"/><br/><sub><b>Siddhi-Kapoor</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Ankitjsr-dev05"><img src="https://avatars.githubusercontent.com/Ankitjsr-dev05?s=64" width="52" height="52" alt="Ankitjsr-dev05" style="border-radius:50%;margin:4px"/><br/><sub><b>Ankitjsr-dev05</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Anshu2607-iiitr"><img src="https://avatars.githubusercontent.com/Anshu2607-iiitr?s=64" width="52" height="52" alt="Anshu2607-iiitr" style="border-radius:50%;margin:4px"/><br/><sub><b>Anshu2607-iiitr</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/anurag5603"><img src="https://avatars.githubusercontent.com/anurag5603?s=64" width="52" height="52" alt="anurag5603" style="border-radius:50%;margin:4px"/><br/><sub><b>anurag5603</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/ArchiGajera"><img src="https://avatars.githubusercontent.com/ArchiGajera?s=64" width="52" height="52" alt="ArchiGajera" style="border-radius:50%;margin:4px"/><br/><sub><b>ArchiGajera</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/sdeepika-2606"><img src="https://avatars.githubusercontent.com/sdeepika-2606?s=64" width="52" height="52" alt="sdeepika-2606" style="border-radius:50%;margin:4px"/><br/><sub><b>sdeepika-2606</b></sub><br/><sub>3 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/dishamaurya081-create"><img src="https://avatars.githubusercontent.com/dishamaurya081-create?s=64" width="52" height="52" alt="dishamaurya081-create" style="border-radius:50%;margin:4px"/><br/><sub><b>dishamaurya081-create</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/himanshursingh21-cloud"><img src="https://avatars.githubusercontent.com/himanshursingh21-cloud?s=64" width="52" height="52" alt="himanshursingh21-cloud" style="border-radius:50%;margin:4px"/><br/><sub><b>himanshursingh21-cloud</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Khushi-Rajput77"><img src="https://avatars.githubusercontent.com/Khushi-Rajput77?s=64" width="52" height="52" alt="Khushi-Rajput77" style="border-radius:50%;margin:4px"/><br/><sub><b>Khushi-Rajput77</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Man1ac-1773"><img src="https://avatars.githubusercontent.com/Man1ac-1773?s=64" width="52" height="52" alt="Man1ac-1773" style="border-radius:50%;margin:4px"/><br/><sub><b>Man1ac-1773</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Asifmd45"><img src="https://avatars.githubusercontent.com/Asifmd45?s=64" width="52" height="52" alt="Asifmd45" style="border-radius:50%;margin:4px"/><br/><sub><b>Asifmd45</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Muskan-S123"><img src="https://avatars.githubusercontent.com/Muskan-S123?s=64" width="52" height="52" alt="Muskan-S123" style="border-radius:50%;margin:4px"/><br/><sub><b>Muskan-S123</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Namratha36"><img src="https://avatars.githubusercontent.com/Namratha36?s=64" width="52" height="52" alt="Namratha36" style="border-radius:50%;margin:4px"/><br/><sub><b>Namratha36</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/PAWANBHOWATE04"><img src="https://avatars.githubusercontent.com/PAWANBHOWATE04?s=64" width="52" height="52" alt="PAWANBHOWATE04" style="border-radius:50%;margin:4px"/><br/><sub><b>PAWANBHOWATE04</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/hari2k7"><img src="https://avatars.githubusercontent.com/hari2k7?s=64" width="52" height="52" alt="hari2k7" style="border-radius:50%;margin:4px"/><br/><sub><b>hari2k7</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/bhanuvarma045"><img src="https://avatars.githubusercontent.com/bhanuvarma045?s=64" width="52" height="52" alt="bhanuvarma045" style="border-radius:50%;margin:4px"/><br/><sub><b>bhanuvarma045</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/adittya-code"><img src="https://avatars.githubusercontent.com/adittya-code?s=64" width="52" height="52" alt="adittya-code" style="border-radius:50%;margin:4px"/><br/><sub><b>adittya-code</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/abhi-nav-25"><img src="https://avatars.githubusercontent.com/abhi-nav-25?s=64" width="52" height="52" alt="abhi-nav-25" style="border-radius:50%;margin:4px"/><br/><sub><b>abhi-nav-25</b></sub><br/><sub>2 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Vishvadharman"><img src="https://avatars.githubusercontent.com/Vishvadharman?s=64" width="52" height="52" alt="Vishvadharman" style="border-radius:50%;margin:4px"/><br/><sub><b>Vishvadharman</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/vikasverma101"><img src="https://avatars.githubusercontent.com/vikasverma101?s=64" width="52" height="52" alt="vikasverma101" style="border-radius:50%;margin:4px"/><br/><sub><b>vikasverma101</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/toufiq00007"><img src="https://avatars.githubusercontent.com/toufiq00007?s=64" width="52" height="52" alt="toufiq00007" style="border-radius:50%;margin:4px"/><br/><sub><b>toufiq00007</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Sweksha-Kakkar"><img src="https://avatars.githubusercontent.com/Sweksha-Kakkar?s=64" width="52" height="52" alt="Sweksha-Kakkar" style="border-radius:50%;margin:4px"/><br/><sub><b>Sweksha-Kakkar</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/sudeekshaballanda-hub"><img src="https://avatars.githubusercontent.com/sudeekshaballanda-hub?s=64" width="52" height="52" alt="sudeekshaballanda-hub" style="border-radius:50%;margin:4px"/><br/><sub><b>sudeekshaballanda-hub</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/siri-004"><img src="https://avatars.githubusercontent.com/siri-004?s=64" width="52" height="52" alt="siri-004" style="border-radius:50%;margin:4px"/><br/><sub><b>siri-004</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/ankitrmishra01"><img src="https://avatars.githubusercontent.com/ankitrmishra01?s=64" width="52" height="52" alt="ankitrmishra01" style="border-radius:50%;margin:4px"/><br/><sub><b>ankitrmishra01</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/harshacodes0"><img src="https://avatars.githubusercontent.com/harshacodes0?s=64" width="52" height="52" alt="harshacodes0" style="border-radius:50%;margin:4px"/><br/><sub><b>harshacodes0</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/nishiagarwal2006-lang"><img src="https://avatars.githubusercontent.com/nishiagarwal2006-lang?s=64" width="52" height="52" alt="nishiagarwal2006-lang" style="border-radius:50%;margin:4px"/><br/><sub><b>nishiagarwal2006-lang</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/riddhimagupta2"><img src="https://avatars.githubusercontent.com/riddhimagupta2?s=64" width="52" height="52" alt="riddhimagupta2" style="border-radius:50%;margin:4px"/><br/><sub><b>riddhimagupta2</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/shivanisreejith1"><img src="https://avatars.githubusercontent.com/shivanisreejith1?s=64" width="52" height="52" alt="shivanisreejith1" style="border-radius:50%;margin:4px"/><br/><sub><b>shivanisreejith1</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/sri6792"><img src="https://avatars.githubusercontent.com/sri6792?s=64" width="52" height="52" alt="sri6792" style="border-radius:50%;margin:4px"/><br/><sub><b>sri6792</b></sub><br/><sub>2 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/sujeetkumar1425"><img src="https://avatars.githubusercontent.com/sujeetkumar1425?s=64" width="52" height="52" alt="sujeetkumar1425" style="border-radius:50%;margin:4px"/><br/><sub><b>sujeetkumar1425</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/tejasch2006-ux"><img src="https://avatars.githubusercontent.com/tejasch2006-ux?s=64" width="52" height="52" alt="tejasch2006-ux" style="border-radius:50%;margin:4px"/><br/><sub><b>tejasch2006-ux</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/tigerkun"><img src="https://avatars.githubusercontent.com/tigerkun?s=64" width="52" height="52" alt="tigerkun" style="border-radius:50%;margin:4px"/><br/><sub><b>tigerkun</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/vaishnavi003-svg"><img src="https://avatars.githubusercontent.com/vaishnavi003-svg?s=64" width="52" height="52" alt="vaishnavi003-svg" style="border-radius:50%;margin:4px"/><br/><sub><b>vaishnavi003-svg</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/divyasharma-21"><img src="https://avatars.githubusercontent.com/divyasharma-21?s=64" width="52" height="52" alt="divyasharma-21" style="border-radius:50%;margin:4px"/><br/><sub><b>divyasharma-21</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Hridayesh68"><img src="https://avatars.githubusercontent.com/Hridayesh68?s=64" width="52" height="52" alt="Hridayesh68" style="border-radius:50%;margin:4px"/><br/><sub><b>Hridayesh68</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/ishikamittal2002"><img src="https://avatars.githubusercontent.com/ishikamittal2002?s=64" width="52" height="52" alt="ishikamittal2002" style="border-radius:50%;margin:4px"/><br/><sub><b>ishikamittal2002</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Subhash21022"><img src="https://avatars.githubusercontent.com/Subhash21022?s=64" width="52" height="52" alt="Subhash21022" style="border-radius:50%;margin:4px"/><br/><sub><b>Subhash21022</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Akshu121796"><img src="https://avatars.githubusercontent.com/Akshu121796?s=64" width="52" height="52" alt="Akshu121796" style="border-radius:50%;margin:4px"/><br/><sub><b>Akshu121796</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/akshatsinghai6682-sketch"><img src="https://avatars.githubusercontent.com/akshatsinghai6682-sketch?s=64" width="52" height="52" alt="akshatsinghai6682-sketch" style="border-radius:50%;margin:4px"/><br/><sub><b>akshatsinghai6682-sketch</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Aditisingh0102"><img src="https://avatars.githubusercontent.com/Aditisingh0102?s=64" width="52" height="52" alt="Aditisingh0102" style="border-radius:50%;margin:4px"/><br/><sub><b>Aditisingh0102</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/AnushKamble"><img src="https://avatars.githubusercontent.com/AnushKamble?s=64" width="52" height="52" alt="AnushKamble" style="border-radius:50%;margin:4px"/><br/><sub><b>AnushKamble</b></sub><br/><sub>2 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Apurva-Lakhe"><img src="https://avatars.githubusercontent.com/Apurva-Lakhe?s=64" width="52" height="52" alt="Apurva-Lakhe" style="border-radius:50%;margin:4px"/><br/><sub><b>Apurva-Lakhe</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/aasheeshhh"><img src="https://avatars.githubusercontent.com/aasheeshhh?s=64" width="52" height="52" alt="aasheeshhh" style="border-radius:50%;margin:4px"/><br/><sub><b>aasheeshhh</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Bheemeswari497"><img src="https://avatars.githubusercontent.com/Bheemeswari497?s=64" width="52" height="52" alt="Bheemeswari497" style="border-radius:50%;margin:4px"/><br/><sub><b>Bheemeswari497</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Bhoomikakaushik"><img src="https://avatars.githubusercontent.com/Bhoomikakaushik?s=64" width="52" height="52" alt="Bhoomikakaushik" style="border-radius:50%;margin:4px"/><br/><sub><b>Bhoomikakaushik</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/chethanamp22-tech"><img src="https://avatars.githubusercontent.com/chethanamp22-tech?s=64" width="52" height="52" alt="chethanamp22-tech" style="border-radius:50%;margin:4px"/><br/><sub><b>chethanamp22-tech</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/chhavisharmaofficial11-cs"><img src="https://avatars.githubusercontent.com/chhavisharmaofficial11-cs?s=64" width="52" height="52" alt="chhavisharmaofficial11-cs" style="border-radius:50%;margin:4px"/><br/><sub><b>chhavisharmaofficial11-cs</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Christina1507"><img src="https://avatars.githubusercontent.com/Christina1507?s=64" width="52" height="52" alt="Christina1507" style="border-radius:50%;margin:4px"/><br/><sub><b>Christina1507</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/sinchana-aiml"><img src="https://avatars.githubusercontent.com/sinchana-aiml?s=64" width="52" height="52" alt="sinchana-aiml" style="border-radius:50%;margin:4px"/><br/><sub><b>sinchana-aiml</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/SaiRishithaK"><img src="https://avatars.githubusercontent.com/SaiRishithaK?s=64" width="52" height="52" alt="SaiRishithaK" style="border-radius:50%;margin:4px"/><br/><sub><b>SaiRishithaK</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/SHREYA-G-AMIN"><img src="https://avatars.githubusercontent.com/SHREYA-G-AMIN?s=64" width="52" height="52" alt="SHREYA-G-AMIN" style="border-radius:50%;margin:4px"/><br/><sub><b>SHREYA-G-AMIN</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/ParulPatil26"><img src="https://avatars.githubusercontent.com/ParulPatil26?s=64" width="52" height="52" alt="ParulPatil26" style="border-radius:50%;margin:4px"/><br/><sub><b>ParulPatil26</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/PalashKulkarni"><img src="https://avatars.githubusercontent.com/PalashKulkarni?s=64" width="52" height="52" alt="PalashKulkarni" style="border-radius:50%;margin:4px"/><br/><sub><b>PalashKulkarni</b></sub><br/><sub>2 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/NirmalSingh-09"><img src="https://avatars.githubusercontent.com/NirmalSingh-09?s=64" width="52" height="52" alt="NirmalSingh-09" style="border-radius:50%;margin:4px"/><br/><sub><b>NirmalSingh-09</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Nikitasoni22"><img src="https://avatars.githubusercontent.com/Nikitasoni22?s=64" width="52" height="52" alt="Nikitasoni22" style="border-radius:50%;margin:4px"/><br/><sub><b>Nikitasoni22</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Krishna009-pro"><img src="https://avatars.githubusercontent.com/Krishna009-pro?s=64" width="52" height="52" alt="Krishna009-pro" style="border-radius:50%;margin:4px"/><br/><sub><b>Krishna009-pro</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/kas2804"><img src="https://avatars.githubusercontent.com/kas2804?s=64" width="52" height="52" alt="kas2804" style="border-radius:50%;margin:4px"/><br/><sub><b>kas2804</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Jeet-Srivastava"><img src="https://avatars.githubusercontent.com/Jeet-Srivastava?s=64" width="52" height="52" alt="Jeet-Srivastava" style="border-radius:50%;margin:4px"/><br/><sub><b>Jeet-Srivastava</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Hasini2706"><img src="https://avatars.githubusercontent.com/Hasini2706?s=64" width="52" height="52" alt="Hasini2706" style="border-radius:50%;margin:4px"/><br/><sub><b>Hasini2706</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/dhruvil-1207"><img src="https://avatars.githubusercontent.com/dhruvil-1207?s=64" width="52" height="52" alt="dhruvil-1207" style="border-radius:50%;margin:4px"/><br/><sub><b>dhruvil-1207</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/darshiB27"><img src="https://avatars.githubusercontent.com/darshiB27?s=64" width="52" height="52" alt="darshiB27" style="border-radius:50%;margin:4px"/><br/><sub><b>darshiB27</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/gamana618"><img src="https://avatars.githubusercontent.com/gamana618?s=64" width="52" height="52" alt="gamana618" style="border-radius:50%;margin:4px"/><br/><sub><b>gamana618</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/FazilPRaphi"><img src="https://avatars.githubusercontent.com/FazilPRaphi?s=64" width="52" height="52" alt="FazilPRaphi" style="border-radius:50%;margin:4px"/><br/><sub><b>FazilPRaphi</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/edepraneethasri"><img src="https://avatars.githubusercontent.com/edepraneethasri?s=64" width="52" height="52" alt="edepraneethasri" style="border-radius:50%;margin:4px"/><br/><sub><b>edepraneethasri</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/dk132006"><img src="https://avatars.githubusercontent.com/dk132006?s=64" width="52" height="52" alt="dk132006" style="border-radius:50%;margin:4px"/><br/><sub><b>dk132006</b></sub><br/><sub>1 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/AbhijeetKushwaha1213"><img src="https://avatars.githubusercontent.com/AbhijeetKushwaha1213?s=64" width="52" height="52" alt="AbhijeetKushwaha1213" style="border-radius:50%;margin:4px"/><br/><sub><b>AbhijeetKushwaha1213</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/codematser69"><img src="https://avatars.githubusercontent.com/codematser69?s=64" width="52" height="52" alt="codematser69" style="border-radius:50%;margin:4px"/><br/><sub><b>codematser69</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/bivekm01"><img src="https://avatars.githubusercontent.com/bivekm01?s=64" width="52" height="52" alt="bivekm01" style="border-radius:50%;margin:4px"/><br/><sub><b>bivekm01</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/bhaiyachimkandi01-source"><img src="https://avatars.githubusercontent.com/bhaiyachimkandi01-source?s=64" width="52" height="52" alt="bhaiyachimkandi01-source" style="border-radius:50%;margin:4px"/><br/><sub><b>bhaiyachimkandi01-source</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/anjali62510-star"><img src="https://avatars.githubusercontent.com/anjali62510-star?s=64" width="52" height="52" alt="anjali62510-star" style="border-radius:50%;margin:4px"/><br/><sub><b>anjali62510-star</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/amisha-srivastavaa"><img src="https://avatars.githubusercontent.com/amisha-srivastavaa?s=64" width="52" height="52" alt="amisha-srivastavaa" style="border-radius:50%;margin:4px"/><br/><sub><b>amisha-srivastavaa</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/ambikabains"><img src="https://avatars.githubusercontent.com/ambikabains?s=64" width="52" height="52" alt="ambikabains" style="border-radius:50%;margin:4px"/><br/><sub><b>ambikabains</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/aditip01-cloud"><img src="https://avatars.githubusercontent.com/aditip01-cloud?s=64" width="52" height="52" alt="aditip01-cloud" style="border-radius:50%;margin:4px"/><br/><sub><b>aditip01-cloud</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/vishal-kushwaha-9912"><img src="https://avatars.githubusercontent.com/vishal-kushwaha-9912?s=64" width="52" height="52" alt="vishal-kushwaha-9912" style="border-radius:50%;margin:4px"/><br/><sub><b>vishal-kushwaha-9912</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/yash23082007"><img src="https://avatars.githubusercontent.com/yash23082007?s=64" width="52" height="52" alt="yash23082007" style="border-radius:50%;margin:4px"/><br/><sub><b>yash23082007</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Thacker-Meet"><img src="https://avatars.githubusercontent.com/Thacker-Meet?s=64" width="52" height="52" alt="Thacker-Meet" style="border-radius:50%;margin:4px"/><br/><sub><b>Thacker-Meet</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/swapnil2737"><img src="https://avatars.githubusercontent.com/swapnil2737?s=64" width="52" height="52" alt="swapnil2737" style="border-radius:50%;margin:4px"/><br/><sub><b>swapnil2737</b></sub><br/><sub>1 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/surbhii-thisside"><img src="https://avatars.githubusercontent.com/surbhii-thisside?s=64" width="52" height="52" alt="surbhii-thisside" style="border-radius:50%;margin:4px"/><br/><sub><b>surbhii-thisside</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/vs-learner-chhavi"><img src="https://avatars.githubusercontent.com/vs-learner-chhavi?s=64" width="52" height="52" alt="vs-learner-chhavi" style="border-radius:50%;margin:4px"/><br/><sub><b>vs-learner-chhavi</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/unknown-tech-ui"><img src="https://avatars.githubusercontent.com/unknown-tech-ui?s=64" width="52" height="52" alt="unknown-tech-ui" style="border-radius:50%;margin:4px"/><br/><sub><b>unknown-tech-ui</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/thakurakanksha288"><img src="https://avatars.githubusercontent.com/thakurakanksha288?s=64" width="52" height="52" alt="thakurakanksha288" style="border-radius:50%;margin:4px"/><br/><sub><b>thakurakanksha288</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/sarthakshruti999-code"><img src="https://avatars.githubusercontent.com/sarthakshruti999-code?s=64" width="52" height="52" alt="sarthakshruti999-code" style="border-radius:50%;margin:4px"/><br/><sub><b>sarthakshruti999-code</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/sandradominic"><img src="https://avatars.githubusercontent.com/sandradominic?s=64" width="52" height="52" alt="sandradominic" style="border-radius:50%;margin:4px"/><br/><sub><b>sandradominic</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/sakshishinde1606"><img src="https://avatars.githubusercontent.com/sakshishinde1606?s=64" width="52" height="52" alt="sakshishinde1606" style="border-radius:50%;margin:4px"/><br/><sub><b>sakshishinde1606</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/saibhumi146"><img src="https://avatars.githubusercontent.com/saibhumi146?s=64" width="52" height="52" alt="saibhumi146" style="border-radius:50%;margin:4px"/><br/><sub><b>saibhumi146</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/rpoojaa06-git"><img src="https://avatars.githubusercontent.com/rpoojaa06-git?s=64" width="52" height="52" alt="rpoojaa06-git" style="border-radius:50%;margin:4px"/><br/><sub><b>rpoojaa06-git</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/ranbeer06052009"><img src="https://avatars.githubusercontent.com/ranbeer06052009?s=64" width="52" height="52" alt="ranbeer06052009" style="border-radius:50%;margin:4px"/><br/><sub><b>ranbeer06052009</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/rachika08"><img src="https://avatars.githubusercontent.com/rachika08?s=64" width="52" height="52" alt="rachika08" style="border-radius:50%;margin:4px"/><br/><sub><b>rachika08</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/prithivika2007"><img src="https://avatars.githubusercontent.com/prithivika2007?s=64" width="52" height="52" alt="prithivika2007" style="border-radius:50%;margin:4px"/><br/><sub><b>prithivika2007</b></sub><br/><sub>1 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/tamoghnodeb"><img src="https://avatars.githubusercontent.com/tamoghnodeb?s=64" width="52" height="52" alt="tamoghnodeb" style="border-radius:50%;margin:4px"/><br/><sub><b>tamoghnodeb</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/ny798299-design"><img src="https://avatars.githubusercontent.com/ny798299-design?s=64" width="52" height="52" alt="ny798299-design" style="border-radius:50%;margin:4px"/><br/><sub><b>ny798299-design</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/kunalSingh026"><img src="https://avatars.githubusercontent.com/kunalSingh026?s=64" width="52" height="52" alt="kunalSingh026" style="border-radius:50%;margin:4px"/><br/><sub><b>kunalSingh026</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/khushboo-khatoon"><img src="https://avatars.githubusercontent.com/khushboo-khatoon?s=64" width="52" height="52" alt="khushboo-khatoon" style="border-radius:50%;margin:4px"/><br/><sub><b>khushboo-khatoon</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/kejriwalkaushal04"><img src="https://avatars.githubusercontent.com/kejriwalkaushal04?s=64" width="52" height="52" alt="kejriwalkaushal04" style="border-radius:50%;margin:4px"/><br/><sub><b>kejriwalkaushal04</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/himadri721"><img src="https://avatars.githubusercontent.com/himadri721?s=64" width="52" height="52" alt="himadri721" style="border-radius:50%;margin:4px"/><br/><sub><b>himadri721</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/GAURAVSHEEPU"><img src="https://avatars.githubusercontent.com/GAURAVSHEEPU?s=64" width="52" height="52" alt="GAURAVSHEEPU" style="border-radius:50%;margin:4px"/><br/><sub><b>GAURAVSHEEPU</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Malusnow"><img src="https://avatars.githubusercontent.com/Malusnow?s=64" width="52" height="52" alt="Malusnow" style="border-radius:50%;margin:4px"/><br/><sub><b>Malusnow</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/maheshbhojane1"><img src="https://avatars.githubusercontent.com/maheshbhojane1?s=64" width="52" height="52" alt="maheshbhojane1" style="border-radius:50%;margin:4px"/><br/><sub><b>maheshbhojane1</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Krithikakannan"><img src="https://avatars.githubusercontent.com/Krithikakannan?s=64" width="52" height="52" alt="Krithikakannan" style="border-radius:50%;margin:4px"/><br/><sub><b>Krithikakannan</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Krish0703-irl"><img src="https://avatars.githubusercontent.com/Krish0703-irl?s=64" width="52" height="52" alt="Krish0703-irl" style="border-radius:50%;margin:4px"/><br/><sub><b>Krish0703-irl</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/KartikHariramani"><img src="https://avatars.githubusercontent.com/KartikHariramani?s=64" width="52" height="52" alt="KartikHariramani" style="border-radius:50%;margin:4px"/><br/><sub><b>KartikHariramani</b></sub><br/><sub>1 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/hematejaswi-30"><img src="https://avatars.githubusercontent.com/hematejaswi-30?s=64" width="52" height="52" alt="hematejaswi-30" style="border-radius:50%;margin:4px"/><br/><sub><b>hematejaswi-30</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/devansh-nitb"><img src="https://avatars.githubusercontent.com/devansh-nitb?s=64" width="52" height="52" alt="devansh-nitb" style="border-radius:50%;margin:4px"/><br/><sub><b>devansh-nitb</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Dippp10-ally"><img src="https://avatars.githubusercontent.com/Dippp10-ally?s=64" width="52" height="52" alt="Dippp10-ally" style="border-radius:50%;margin:4px"/><br/><sub><b>Dippp10-ally</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/bhavyajain0810"><img src="https://avatars.githubusercontent.com/bhavyajain0810?s=64" width="52" height="52" alt="bhavyajain0810" style="border-radius:50%;margin:4px"/><br/><sub><b>bhavyajain0810</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/asxayush"><img src="https://avatars.githubusercontent.com/asxayush?s=64" width="52" height="52" alt="asxayush" style="border-radius:50%;margin:4px"/><br/><sub><b>asxayush</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Ayontikapal"><img src="https://avatars.githubusercontent.com/Ayontikapal?s=64" width="52" height="52" alt="Ayontikapal" style="border-radius:50%;margin:4px"/><br/><sub><b>Ayontikapal</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Aribafatma"><img src="https://avatars.githubusercontent.com/Aribafatma?s=64" width="52" height="52" alt="Aribafatma" style="border-radius:50%;margin:4px"/><br/><sub><b>Aribafatma</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/alisha-khan6"><img src="https://avatars.githubusercontent.com/alisha-khan6?s=64" width="52" height="52" alt="alisha-khan6" style="border-radius:50%;margin:4px"/><br/><sub><b>alisha-khan6</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Akhileswar6"><img src="https://avatars.githubusercontent.com/Akhileswar6?s=64" width="52" height="52" alt="Akhileswar6" style="border-radius:50%;margin:4px"/><br/><sub><b>Akhileswar6</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/AkankshaYadav05"><img src="https://avatars.githubusercontent.com/AkankshaYadav05?s=64" width="52" height="52" alt="AkankshaYadav05" style="border-radius:50%;margin:4px"/><br/><sub><b>AkankshaYadav05</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/aanyabansal-22"><img src="https://avatars.githubusercontent.com/aanyabansal-22?s=64" width="52" height="52" alt="aanyabansal-22" style="border-radius:50%;margin:4px"/><br/><sub><b>aanyabansal-22</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/ANUSHREE-123-S"><img src="https://avatars.githubusercontent.com/ANUSHREE-123-S?s=64" width="52" height="52" alt="ANUSHREE-123-S" style="border-radius:50%;margin:4px"/><br/><sub><b>ANUSHREE-123-S</b></sub><br/><sub>1 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/shikha123-ops"><img src="https://avatars.githubusercontent.com/shikha123-ops?s=64" width="52" height="52" alt="shikha123-ops" style="border-radius:50%;margin:4px"/><br/><sub><b>shikha123-ops</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Sejal10406"><img src="https://avatars.githubusercontent.com/Sejal10406?s=64" width="52" height="52" alt="Sejal10406" style="border-radius:50%;margin:4px"/><br/><sub><b>Sejal10406</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/SathvikaSingoti"><img src="https://avatars.githubusercontent.com/SathvikaSingoti?s=64" width="52" height="52" alt="SathvikaSingoti" style="border-radius:50%;margin:4px"/><br/><sub><b>SathvikaSingoti</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/saksham0777"><img src="https://avatars.githubusercontent.com/saksham0777?s=64" width="52" height="52" alt="saksham0777" style="border-radius:50%;margin:4px"/><br/><sub><b>saksham0777</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/silentguyracer"><img src="https://avatars.githubusercontent.com/silentguyracer?s=64" width="52" height="52" alt="silentguyracer" style="border-radius:50%;margin:4px"/><br/><sub><b>silentguyracer</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/RaviCoderWallah"><img src="https://avatars.githubusercontent.com/RaviCoderWallah?s=64" width="52" height="52" alt="RaviCoderWallah" style="border-radius:50%;margin:4px"/><br/><sub><b>RaviCoderWallah</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/pushtikadia"><img src="https://avatars.githubusercontent.com/pushtikadia?s=64" width="52" height="52" alt="pushtikadia" style="border-radius:50%;margin:4px"/><br/><sub><b>pushtikadia</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Priti-1001"><img src="https://avatars.githubusercontent.com/Priti-1001?s=64" width="52" height="52" alt="Priti-1001" style="border-radius:50%;margin:4px"/><br/><sub><b>Priti-1001</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/notlexius-glitch"><img src="https://avatars.githubusercontent.com/notlexius-glitch?s=64" width="52" height="52" alt="notlexius-glitch" style="border-radius:50%;margin:4px"/><br/><sub><b>notlexius-glitch</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Pratik-kr21"><img src="https://avatars.githubusercontent.com/Pratik-kr21?s=64" width="52" height="52" alt="Pratik-kr21" style="border-radius:50%;margin:4px"/><br/><sub><b>Pratik-kr21</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Parthasarathyjeeva27"><img src="https://avatars.githubusercontent.com/Parthasarathyjeeva27?s=64" width="52" height="52" alt="Parthasarathyjeeva27" style="border-radius:50%;margin:4px"/><br/><sub><b>Parthasarathyjeeva27</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Sricharan106"><img src="https://avatars.githubusercontent.com/Sricharan106?s=64" width="52" height="52" alt="Sricharan106" style="border-radius:50%;margin:4px"/><br/><sub><b>Sricharan106</b></sub><br/><sub>1 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/prasanthipallagani9-ops"><img src="https://avatars.githubusercontent.com/prasanthipallagani9-ops?s=64" width="52" height="52" alt="prasanthipallagani9-ops" style="border-radius:50%;margin:4px"/><br/><sub><b>prasanthipallagani9-ops</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Nish232003"><img src="https://avatars.githubusercontent.com/Nish232003?s=64" width="52" height="52" alt="Nish232003" style="border-radius:50%;margin:4px"/><br/><sub><b>Nish232003</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/NehaShrivastava-Tech"><img src="https://avatars.githubusercontent.com/NehaShrivastava-Tech?s=64" width="52" height="52" alt="NehaShrivastava-Tech" style="border-radius:50%;margin:4px"/><br/><sub><b>NehaShrivastava-Tech</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Naman-Bagoria17"><img src="https://avatars.githubusercontent.com/Naman-Bagoria17?s=64" width="52" height="52" alt="Naman-Bagoria17" style="border-radius:50%;margin:4px"/><br/><sub><b>Naman-Bagoria17</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/EchoOfCode"><img src="https://avatars.githubusercontent.com/EchoOfCode?s=64" width="52" height="52" alt="EchoOfCode" style="border-radius:50%;margin:4px"/><br/><sub><b>EchoOfCode</b></sub><br/><sub>1 commits</sub></a></td></tr>
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


## Accessibility

EaseMotion CSS supports the `prefers-reduced-motion` media query to respect users who prefer reduced motion and reduce animation-related discomfort. When enabled at the operating system level, animations and transitions are minimized to provide a more accessible experience.


