<div align="center">

<img src="./docs/assets/logo.svg" alt="EaseMotion CSS" width="570" />

<br/>

# ⚡ EaseMotion CSS

**A zero-dependency, animation-first CSS framework for faster, more expressive UI.**

EaseMotion CSS lets you build polished interfaces with readable class names such as `ease-fade-in`, `ease-slide-up`, and `ease-hover-grow`. No build step, no complex setup, and no need to memorize shorthand.

<br/>

[![npm version](https://img.shields.io/npm/v/easemotion-css?style=flat-square&color=6c63ff&label=npm)](https://www.npmjs.com/package/easemotion-css)
[![Sponsor](https://img.shields.io/badge/Sponsor-💖-ea4aaa?style=flat-square)](https://github.com/sponsors/SAPTARSHI-coder)
[![Discord](https://img.shields.io/badge/Discord-Join%20Server-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/hWSdGrccBU)
[![npm downloads](https://img.shields.io/npm/dm/easemotion-css?style=flat-square&color=a78bfa&label=downloads%2Fmo)](https://www.npmjs.com/package/easemotion-css)
[![jsDelivr CDN](https://data.jsdelivr.com/v1/package/npm/easemotion-css/badge)](https://www.jsdelivr.com/package/npm/easemotion-css)
[![GitHub Stars](https://flat.badgen.net/github/stars/SAPTARSHI-coder/EaseMotion-css?color=6c63ff&icon=github&label=stars)](https://github.com/SAPTARSHI-coder/EaseMotion-css/stargazers)
[![GitHub Forks](https://flat.badgen.net/github/forks/SAPTARSHI-coder/EaseMotion-css?color=22c55e&icon=github&label=forks)](https://github.com/SAPTARSHI-coder/EaseMotion-css/network/members)
[![GitHub Contributors](https://img.shields.io/badge/contributors-350-f59e0b?style=flat-square)](https://github.com/SAPTARSHI-coder/EaseMotion-css/graphs/contributors)
[![Merged PRs](https://img.shields.io/badge/merged%20PRs-5158-8b5cf6?style=flat-square)](https://github.com/SAPTARSHI-coder/EaseMotion-css/pulls?q=is%3Apr+is%3Amerged)
[![Closed Issues](https://img.shields.io/badge/closed%20issues-4725-3b82f6?style=flat-square)](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues?q=is%3Aissue+is%3Aclosed)
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
- [Usage and Examples](#usage-and-examples)
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

### 🚀 Quick Setup

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css"
/>
```

**[📖 Documentation](https://saptarshi-coder.github.io/EaseMotion-css/) · [🎮 Live Demo](https://saptarshi-coder.github.io/EaseMotion-css/demo.html) · [📦 npm](https://www.npmjs.com/package/easemotion-css) · [🤝 Contributing](./CONTRIBUTING.md)**

### Controlling looping animations

Looping animations such as `.ease-bounce`, `.ease-pulse`, `.ease-rotate`, `.ease-ping`, and `.ease-typewriter-loop` use the CSS variable `--ease-animation-iterations`.

The default value is `infinite`, which keeps existing behavior unchanged. If you want a looping animation to run only a few times, set the variable once in your project:

```css
:root {
  --ease-animation-iterations: 3;
}
```

This will apply the iteration count to all looping animation utilities by default.

---

## Support the Project

If EaseMotion CSS saves you time or helps your learning journey, please consider supporting it.

Most people simply forget. This is your reminder. 😊

<div align="center">

| Action                                                                                                               | Why it matters                                                     |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [💖 **Sponsor on GitHub**](https://github.com/sponsors/SAPTARSHI-coder)                                              | Directly support the creator to keep the project active and stable |
| [⭐ **Star the repo**](https://github.com/SAPTARSHI-coder/EaseMotion-css/stargazers)                                 | Helps more developers discover the project                         |
| [🍴 **Fork and contribute**](./CONTRIBUTING.md)                                                                      | Your idea could become a real framework class                      |
| [🐞 **Report an issue**](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/new?template=bug_report.md)        | Bugs you catch make it better for everyone                         |
| [💡 **Suggest a feature**](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/new?template=feature_request.md) | Good ideas ship faster than you think                              |

</div>

> Stars cost nothing and mean everything to an independent open-source project. If this saved you even 10 minutes, it's worth a click.

---

## Project Statistics

<div align="center">

| Metric               | Value                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------- |
| 📦 **npm Package**   | [`easemotion-css`](https://www.npmjs.com/package/easemotion-css)                                              |
| 🌐 **CDN**           | [cdn.jsdelivr.net/gh/...](https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css) |
| ⚡ **Classes**       | 80+ utility classes, 20+ animation classes                                                                    |
| 🎨 **Components**    | Buttons (6 variants), Cards (13 variants)                                                                     |
| 🔑 **Design Tokens** | 60+ CSS custom properties                                                                                     |
| ⚖️ **Bundle Size**   | 27.81 kB gzipped · 167.81 kB raw                                                                              |
| 📜 **License**       | MIT                                                                                                           |
| 🔧 **Build Step**    | ❌ None required                                                                                              |
| 🏗️ **Dependencies**  | ❌ Zero                                                                                                       |

</div>

---

## Browser Compatibility

EaseMotion CSS is built for modern evergreen browsers and relies on CSS3 custom properties, CSS animations, Flexbox, CSS Grid, transforms, transitions, and keyframe animations.

<div align="center">

| Browser | Minimum Version | `backdrop-filter`                                 | `aspect-ratio` | CSS variables | Animations | Notes     |
| ------- | --------------- | ------------------------------------------------- | -------------- | ------------- | ---------- | --------- | --- |
| Chrome  | 49+             | Supported                                         | Supported      | Supported     | Supported  |           |
| Firefox | 31+             | Supported                                         | Supported      | Supported     | Supported  |           |
| Safari  | 9.1+            | Supported with `-webkit-backdrop-filter` fallback | Supported      | Supported     | Supported  | Supported |     |
| Edge    | 15+             | Supported                                         | Supported      | Supported     | Supported  |           |
| Opera   | 36+             | Supported                                         | Supported      | Supported     | Supported  |           |

</div>

> Internet Explorer (IE 11 and earlier) is not supported.

---

## What is EaseMotion CSS?

EaseMotion CSS is a curated, animation-first CSS framework where class names read like plain English. It is designed for developers who want expressive motion and clean HTML without a build tool or complex configuration.

```html
<div class="ease-center ease-fade-in">
  <h1 class="ease-slide-up ease-delay-100">Build faster.</h1>
  <p class="ease-slide-up ease-delay-200">Animation-first CSS for humans.</p>
  <button
    class="ease-btn ease-btn-primary ease-btn-pill ease-hover-grow ease-delay-300"
  >
    Get Started →
  </button>
</div>
```

### Why it is easy to use

- Readable utility names such as `ease-center` and `ease-hover-grow`
- Zero dependency setup with CDN or npm
- Ready-to-use motion, layout, and component helpers
- Easy customization through CSS variables

---

## Why EaseMotion CSS?

|                 |    Vanilla CSS     |         Tailwind CSS         |      **EaseMotion CSS**      |
| --------------- | :----------------: | :--------------------------: | :--------------------------: |
| Setup           | Write from scratch |     Build step + config      |      **Link one file**       |
| Readability     |      ✅ High       | ❌ Low (`px-4 flex gap-x-2`) | ✅ **High** (`ease-center`)  |
| Animations      |     ⚙️ Manual      |          🔸 Minimal          |      ✅ **First-class**      |
| Zero config     |         ✅         |              ❌              |              ✅              |
| Quality control |        You         |             You              | ✅ **Curated by maintainer** |
| CDN ready       |        N/A         |              ❌              |          ✅ **Yes**          |
| Learning curve  |        High        |            Medium            |       ✅ **Near zero**       |

---

## Quick Start

### Option 1 — CDN _(fastest, zero setup, recommended)_

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css"
    />
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
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css"
/>
```

### unpkg

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/easemotion-css/easemotion.min.css"
/>
```

### GitHub Raw CDN

```html
<link
  rel="stylesheet"
  href="https://raw.githubusercontent.com/SAPTARSHI-coder/EaseMotion-css/main/easemotion.min.css"
/>
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

### Option 3 — Granular imports _(pick only what you need)_

```html
<!-- Font (optional — for Inter typography) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>

<!-- Core (always required — load in this exact order) -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/core/variables.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/core/base.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/core/animations.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/core/utilities.css"
/>

<!-- Components — add only what you use -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/components/buttons.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/components/cards.css"
/>
```

### Option 4 — Modular animation imports _(load only what you need)_

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion/variables.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion/fade.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion/slide.css"
/>
<!-- Add only the animation categories you need -->
```

### Full bundle

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion/all.css"
/>
```

> ⚠️ **`easemotion/variables.css` must always load before modular animation files.** It provides the shared custom properties used by all animation categories.

## Philosophy

EaseMotion CSS is not just a CSS library — it is a design language.

> _"If you can say it in English, you should be able to write it as a class."_

```html
<!-- Center this -->
<div class="ease-center">
  <!-- Fade this in -->
  <h1 class="ease-fade-in">
    <!-- Make it grow on hover --><button class="ease-hover-grow">
      <!-- Slide up with delay -->
      <p class="ease-slide-up ease-delay-200"></p>
    </button>
  </h1>
</div>
```

No documentation lookup required. The class name **is** the documentation.

### Four principles that never get broken

| Principle           | What it means                                            |
| ------------------- | ---------------------------------------------------------|
| **Human-readable**  | Class names describe behavior in plain English           |
| **Animation-first** | Motion is a first-class citizen, not an afterthought     |
| **Composable**      | Stack any classes freely — no specificity wars, ever     |
| **Curated**         | Every single class is maintainer-reviewed before release |

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

## Usage and Examples

### Development

Use the non-minified version for debugging and development:

```html
<link rel="stylesheet" href="easemotion.css" />
```

### Animations

```html
<!-- Entrance animations (run on page load) -->
<h1 class="ease-fade-in">Fade in</h1>
<h2 class="ease-slide-up">Slide up</h2>
<h3 class="ease-slide-in-left">Slide left</h3>
<h4 class="ease-slide-in-right">Slide right</h4>
<h5 class="ease-zoom-in">Zoom in</h5>
<h6 class="ease-flip">3D flip</h6>

<!-- Staggered sequence — each item starts 100ms later -->
<div class="ease-slide-up ease-delay-100">First</div>
<div class="ease-slide-up ease-delay-200">Second</div>
<div class="ease-slide-up ease-delay-300">Third</div>
```

### Duration Helpers

```html
<div class="ease-slide-up ease-duration-fast">Fast animation</div>
<div class="ease-slide-up ease-duration-slow">Slow animation</div>
```

| Class                | Duration |
| -------------------- | -------- |
| ease-duration-fast   | 150ms    |
| ease-duration-medium | 300ms    |
| ease-duration-slow   | 600ms    |

```html
<!-- Looping animations -->
<div class="ease-bounce">Bouncing</div>
<div class="ease-pulse">Pulsing</div>
<div class="ease-rotate">Rotating</div>
<div class="ease-ping">Ping</div>
```

You can customize the iteration count of looping animations:

```css
:root {
  --ease-animation-iterations: 3;
}
```

By default, the value is `infinite`, preserving existing behavior.

```html
<!-- Exit animation -->
<div class="ease-expand-border-exit"></div>
```

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
<div class="ease-hover-morph-card">Morph</div>
<div class="ease-hover-glow">Primary color glow</div>
<div class="ease-hover-lift">Lifts with shadow</div>
<div class="ease-hover-shimmer">Shimmer sweep effect</div>
<a class="ease-hover-underline">Animated underline</a>
<span class="ease-hover-bounce-text">Bounce!</span>
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
<button class="ease-btn ease-btn-primary ease-btn-lg ease-btn-pill">
  Large Pill
</button>
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
<nav
  class="ease-navbar-glass ease-navbar-glass-sticky"
  aria-label="Sticky navigation"
>
  <div class="ease-navbar-brand">Sticky Nav</div>
  <div class="ease-navbar-menu">
    <a class="ease-navbar-item" href="#">Overview</a>
    <a class="ease-navbar-item" href="#">Docs</a>
  </div>
</nav>
```

```html
<nav
  class="ease-navbar-glass ease-navbar-glass-blur"
  aria-label="Blurred navbar"
>
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
  <button
    class="ease-btn ease-btn-primary ease-btn-lg ease-btn-pill ease-hover-grow ease-delay-300"
  >
    Get Started →
  </button>
</section>
```

---

## Customization

Override any CSS custom property to theme the entire framework — no Sass, no PostCSS, just CSS:

```css
:root {
  /* Colors */
  --ease-color-primary: #f97316; /* swap to orange  */
  --ease-color-success: #10b981; /* teal green      */

  /* Motion */
  --ease-speed-fast: 100ms; /* snappier        */
  --ease-speed-medium: 400ms; /* slightly slower */
  --ease-ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Shape */
  --ease-radius-md: 1rem; /* rounder corners */
  --ease-radius-full: 9999px;

  /* Shadows */
  --ease-shadow-md: 0 4px 20px rgba(0, 0, 0, 0.15);
}
```

### Override framework styles with `@layer`

EaseMotion wraps all its CSS behind `@layer` cascade layers. Your own styles always win — even if the framework loads _after_ your stylesheet:

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

## File Structure

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

## Roadmap

> Track progress and vote on features via [GitHub Issues](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues).

| Feature                                               | Status             |
| ------------------------------------------------------| ------------------ |
| ✅ Human-readable core utilities (80+)                | **Shipped — v1.0** |
| ✅ Animation-first motion library (20+)               | **Shipped — v1.0** |
| ✅ Curated contribution pipeline                      | **Shipped — v1.0** |
| ✅ Component library (buttons, cards)                 | **Shipped — v1.0** |
| ✅ npm package + jsDelivr CDN                         | **Shipped — v1.0** |
| ✅ Full documentation site                            | **Shipped — v1.0** |
| 🔜 Form components (inputs, checkboxes, toggles)      | **Planned — v1.1** |
| 🔜 Dark mode token layer                              | **Planned — v1.1** |
| 🔜 Modal & tooltip components                         | **Planned — v1.2** |
| 🔜 Scroll-triggered animations (IntersectionObserver) | **Planned — v1.2** |
| 🔜 Navigation components (navbar, sidebar)            | **Planned — v1.3** |
| 🔜 CSS-only accordion & tabs                          | **Planned — v1.3** |
| 🔜 Badge, tag, avatar, progress bar                   | **Planned — v1.3** |
| 🔜 Theming CLI (generate custom token file)           | **Exploring**      |

---

## Contributing

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

### 📢 Contribution Rate Limit Update

To maintain repository stability, review quality, and fair contribution distribution, EaseMotion CSS is introducing a soft contribution limit:

- Contributors may submit up to **70 PRs per day**
- Focus on quality, originality, accessibility, and proper testing
- Low-effort, repetitive, or mass-generated PRs may be closed without review

#### Why This Change?

EaseMotion CSS has grown rapidly with hundreds of contributors and thousands of merged PRs. This update helps:

- Reduce merge conflicts
- Improve review quality
- Maintain framework consistency
- Encourage meaningful contributions over quantity

### 🧹 Clean Commit History & Squashing

To keep the repository's git history clean and readable, contributors must follow these rules:

- **Squash your commits:** Ensure all commits in your Pull Request are squashed into a single meaningful commit (or a few logical commits) before submitting for review. Do not push dozens of micro-commits (e.g., "fix", "typo", "update style.css", etc.) for a single change.
- **Keep history clean:** PRs containing noisy, repetitive, or excessive commit histories (e.g., dozens of micro-commits) may be closed without review or blocked from merging.
- **Write clear commit messages:** Use descriptive commit messages following the Conventional Commits format (e.g., `feat: add card component` or `fix: resolve hover animation issue`).

---

### 📢 Contribution Policy Update

All contributions are welcome and eligible for merge when submitted inside the `submissions/examples/` folder following the repository structure and guidelines.

To avoid naming conflicts and overlapping components, contributors must append a short unique identifier or abbreviation to their feature/component name.

**Example:**

- `ease-hover-sap`
- `ease-tabs-ak`
- `ease-card-pr`

This ensures:

- Unambiguous component naming,
- Preservation of every contributor's work,
- Conflict-free merges,
- Easier maintenance and review workflow,
- Support for parallel implementations of similar ideas.

The project encourages creative variations and parallel implementations rather than overwriting existing contributor work.

---

## Issue Labels 🏷️

| Label                 | Used for                                               |
| --------------------- | ------------------------------------------------------ |
| `good first issue`    | Easy entry points, perfect for first-time contributors |
| `animation`           | Hover effects, entrance animations, keyframe ideas     |
| `component`           | New UI components (modals, tooltips, badges, etc.)     |
| `enhancement`         | Improvements to existing classes                       |
| `documentation`       | README, docs site, submission guide                    |
| `curated`             | Accepted into the framework                            |
| `maintainer-approved` | Reviewed, pending integration                          |
| `featured`            | Exceptional submission — will be showcased             |

> **Issue Cooldown Rule:** Maximum **2 active assigned issues** per contributor. Issues with no progress for 24 hours (1 day) are unassigned and reopened.

---

## Community

<div align="center">

| Platform                | Link                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 🐛 **Bug Reports**      | [Open an issue](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/new?template=bug_report.md)          |
| 💡 **Feature Requests** | [Request a feature](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/new?template=feature_request.md) |
| 🔀 **Pull Requests**    | [Submit a contribution](https://github.com/SAPTARSHI-coder/EaseMotion-css/pulls)                              |
| 📖 **Documentation**    | [Full docs site](https://saptarshi-coder.github.io/EaseMotion-css/)                                           |
| 📦 **npm Package**      | [easemotion-css on npm](https://www.npmjs.com/package/easemotion-css)                                         |
| 🌐 **CDN**              | [jsDelivr (GitHub CDN)](https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css)   |
| 🏆 **GSSoC 2026**       | [GirlScript Summer of Code](https://gssoc.girlscript.tech/)                                                   |
| 💬 **Discord Server (Optional)**   | [Join Discord (Optional)](https://discord.gg/hWSdGrccBU)                                                                 |

</div>

> ⭐ **If EaseMotion CSS saves you time, consider starring the repo.** It helps more developers discover the project and motivates continued development.

---

## Contributors

Everyone who has submitted a PR, opened an issue, or contributed an idea. This wall **regenerates automatically** on every push to main.

<!-- CONTRIBUTOR-WALL-START -->
<div align="center">

### 350 Contributors

*(Contributor table intentionally omitted here for brevity — auto-generated on every push to main; see the live version in your repository's README.)*

*Auto-updated daily · [View all →](https://github.com/SAPTARSHI-coder/EaseMotion-css/graphs/contributors)*

</div>
<!-- CONTRIBUTOR-WALL-END -->

---

## Maintainer

<div align="center">

**Saptarshi Sadhu**

[![GitHub](https://img.shields.io/badge/GitHub-SAPTARSHI--coder-6c63ff?style=flat-square&logo=github)](https://github.com/SAPTARSHI-coder)

EaseMotion CSS is designed, curated, and actively maintained by Saptarshi Sadhu. All contributions are reviewed and standardized before integration. The framework does not accept unreviewed direct edits.

> Only the maintainer merges pull requests. This is enforced via [CODEOWNERS](./.github/CODEOWNERS).

</div>

---

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for the full release history.

**Latest: [v1.0.0](./CHANGELOG.md)** — Initial public release. 80+ utilities, 20+ animations, buttons, cards, full docs site, npm + CDN.

---

## License

**MIT © 2026 Saptarshi Sadhu** — see [LICENSE](./LICENSE) for details.

You are free to use EaseMotion CSS in personal and commercial projects. Attribution appreciated but not required.

---

<div align="center">

**Thank you for building EaseMotion CSS with me.** 💜

Every star, every PR, every issue — it all adds up.

_— Saptarshi Sadhu · [@SAPTARSHI-coder](https://github.com/SAPTARSHI-coder)_

<br/>

[![npm](https://img.shields.io/npm/v/easemotion-css?style=flat-square&color=6c63ff)](https://www.npmjs.com/package/easemotion-css)
[![Stars](https://img.shields.io/github/stars/SAPTARSHI-coder/EaseMotion-css?style=flat-square&color=6c63ff)](https://github.com/SAPTARSHI-coder/EaseMotion-css/stargazers)
[![License](https://img.shields.io/badge/License-MIT-6c63ff?style=flat-square)](./LICENSE)
[![Sponsor](https://img.shields.io/badge/Sponsor-GitHub-ea4aaa?style=flat-square&logo=github-sponsors)](https://github.com/sponsors/SAPTARSHI-coder)

Built with care &nbsp;·&nbsp; Zero dependencies &nbsp;·&nbsp; Animation-first &nbsp;·&nbsp; Community-driven

</div>

## Accessibility

EaseMotion CSS supports the `prefers-reduced-motion` media query to respect users who prefer reduced motion and reduce animation-related discomfort. When enabled at the operating system level, animations and transitions are minimized to provide a more accessible experience.
