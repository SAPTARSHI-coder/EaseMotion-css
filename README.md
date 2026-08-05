<div align="center">

<img src="./docs/assets/logo.svg" alt="EaseMotion CSS" width="570" />

<br/>

# ⚡ EaseMotion CSS

**A zero-dependency, animation-first CSS framework for faster, more expressive UI.**

EaseMotion CSS lets you build polished interfaces with readable class names such as `ease-fade-in`, `ease-slide-up`, and `ease-hover-grow`. No build step, no complex setup, and no need to memorize shorthand.

<br/>

[![npm version](https://img.shields.io/npm/v/easemotion-css?style=flat-square&color=6c63ff&label=npm)](https://www.npmjs.com/package/easemotion-css)
[![committers.top public badge](https://user-badge.committers.top/india_public/SAPTARSHI-coder.svg)](https://committers.top/india_public)
[![committers.top private badge](https://user-badge.committers.top/india_private/SAPTARSHI-coder.svg)](https://committers.top/india_private)
[![Sponsor](https://img.shields.io/badge/Sponsor-💖-ea4aaa?style=flat-square)](https://github.com/sponsors/SAPTARSHI-coder)
[![Discord](https://img.shields.io/badge/Discord-Join%20Server-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/hWSdGrccBU)
[![npm downloads](https://img.shields.io/npm/dm/easemotion-css?style=flat-square&color=a78bfa&label=downloads%2Fmo)](https://www.npmjs.com/package/easemotion-css)
[![jsDelivr CDN](https://data.jsdelivr.com/v1/package/npm/easemotion-css/badge)](https://www.jsdelivr.com/package/npm/easemotion-css)
[![GitHub Stars](https://flat.badgen.net/github/stars/SAPTARSHI-coder/EaseMotion-css?color=6c63ff&icon=github&label=stars)](https://github.com/SAPTARSHI-coder/EaseMotion-css/stargazers)
[![GitHub Forks](https://flat.badgen.net/github/forks/SAPTARSHI-coder/EaseMotion-css?color=22c55e&icon=github&label=forks)](https://github.com/SAPTARSHI-coder/EaseMotion-css/network/members)
[![GitHub Contributors](https://img.shields.io/badge/contributors-704%2B-f59e0b?style=flat-square)](https://github.com/SAPTARSHI-coder/EaseMotion-css/graphs/contributors)
[![Merged PRs](https://img.shields.io/badge/merged%20PRs-27215-8b5cf6?style=flat-square)](https://github.com/SAPTARSHI-coder/EaseMotion-css/pulls?q=is%3Apr+is%3Amerged)
[![Closed PRs](https://img.shields.io/badge/closed%20PRs-32151-3b82f6?style=flat-square)](https://github.com/SAPTARSHI-coder/EaseMotion-css/pulls?q=is%3Apr+is%3Aclosed)
[![Closed Issues](https://img.shields.io/badge/closed%20issues-24579-3b82f6?style=flat-square)](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues?q=is%3Aissue+is%3Aclosed)
[![Open PRs](https://flat.badgen.net/github/open-prs/SAPTARSHI-coder/EaseMotion-css?color=a78bfa&label=open%20PRs)](https://github.com/SAPTARSHI-coder/EaseMotion-css/pulls)
[![Open Issues](https://flat.badgen.net/github/open-issues/SAPTARSHI-coder/EaseMotion-css?color=ef4444&label=issues)](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-6c63ff?style=flat-square)](./LICENSE)
[![GSSoC](https://img.shields.io/badge/GSSoC-2026-orange?style=flat-square)](https://gssoc.girlscript.tech/)
[![Maintainer](https://img.shields.io/badge/Maintainer-Saptarshi%20Sadhu%20%28Rank%20%233%20Public%20%7C%20%235%20All%20Time%20Private%20🇮🇳%29-a78bfa?style=flat-square)](https://github.com/SAPTARSHI-coder)

</div>

<br/>

> [!IMPORTANT]
> **📢 Maintainer Announcement & Contribution Guidelines (August 2026)**
>
> 1. **🔓 All Contributor Accounts Unbanned:** All contributor soft-bans have been removed! Everyone is welcome to contribute.
> 2. **⏱️ Daily Contribution Rate Limit:** Maximum **100 PRs per day** per contributor to maintain stability and review quality.
> 3. **✨ 500 New Approved GSSoC Issues Available:** 500 brand new approved issues (#59099 to #59610) are open for contribution!
> 4. **📁 Submission Directory:** All PRs MUST be submitted under `submissions/examples/your-feature-name/` containing `demo.html`, `style.css`, and `README.md`.

<br/>

## Table of Contents 📑

- [Support the Project](#support-the-project)
- [Project Statistics](#project-statistics)
- [Browser Compatibility](#browser-compatibility)
- [What is EaseMotion CSS?](#what-is-easemotion-css)
- [Why EaseMotion CSS?](#why-easemotion-css)
- [Quick Start](#quick-start)
- [Framework Integration](#framework-integration)
  - [React + Vite](#react--vite)
  - [Next.js](#nextjs)
  - [Vue / Svelte / Astro](#vue--svelte--astro)
- [SCSS Integration](#scss-integration)
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
| ⚖️ **Bundle Size**   | 28.2 kB gzipped · 174.1 kB raw                                                                               |
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

---

## Framework Integration

EaseMotion CSS is a pure CSS library — it works out of the box with every JavaScript framework by simply importing the stylesheet and applying class names to elements. Additionally, we ship a dedicated **React integration layer** to make animations even more declarative in JSX.

---

### React + Vite

#### 1. Install EaseMotion CSS

```bash
npm install easemotion-css
```

#### 2. Import in your entry file

```jsx
// main.jsx or App.jsx
import 'easemotion-css/easemotion.min.css';
```

#### 3. Use classes directly in JSX

```jsx
export default function HeroSection() {
  return (
    <div className="ease-center ease-fade-in">
      <h1 className="ease-slide-up ease-delay-100">Build faster.</h1>
      <p className="ease-slide-up ease-delay-200">Animation-first CSS for humans.</p>
      <button className="ease-btn ease-btn-primary ease-hover-grow ease-delay-300">
        Get Started →
      </button>
    </div>
  );
}
```

#### 4. Use the `<Animate>` wrapper component _(optional — in `examples/react-vite/`)_

We ship a React wrapper component that turns animation settings into declarative props:

```jsx
// Copy Animate.jsx from examples/react-vite/src/components/Animate.jsx
import Animate from './components/Animate';

export default function App() {
  return (
    <>
      {/* Fade in with a 200ms delay */}
      <Animate type="fade-in" delay={200}>
        <div className="ease-card">Hello World</div>
      </Animate>

      {/* Staggered list items */}
      {['A', 'B', 'C'].map((item, i) => (
        <Animate key={item} type="slide-up" delay={i * 100} hover="lift">
          <div className="ease-card">{item}</div>
        </Animate>
      ))}

      {/* Animate on mount (React remounts = re-animates) */}
      <Animate key={isOpen ? 'open' : 'closed'} type="zoom-in" duration={300}>
        {isOpen && <Modal />}
      </Animate>
    </>
  );
}
```

**`<Animate>` Props Reference:**

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `type` | `string` | — | EaseMotion animation name (e.g. `'fade-in'`, `'slide-up'`, `'zoom-in'`) |
| `duration` | `'fast' \| 'medium' \| 'slow' \| number` | `'medium'` | Duration keyword or milliseconds |
| `delay` | `number` | `0` | Delay in ms before animation starts |
| `hover` | `string` | — | Hover effect class (e.g. `'lift'`, `'glow'`, `'scale'`) |
| `tag` | `string` | `'div'` | HTML tag to render |
| `className` | `string` | `''` | Additional CSS classes |

#### 5. Run the showcase

The full interactive playground lives in `examples/react-vite/`. Clone the repo and run:

```bash
cd examples/react-vite
npm install
npm run dev
```

> This opens a dark-mode dashboard with live animation controls, staggered demos, and a modal transition showcase.

---

### Next.js

EaseMotion CSS is fully compatible with Next.js (App Router and Pages Router) since it is a static CSS file with no JavaScript dependencies.

#### App Router (Next.js 13+)

```jsx
// app/layout.js — import once globally
import 'easemotion-css/easemotion.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```jsx
// app/page.js — use class names in Server Components
export default function Page() {
  return (
    <main className="ease-center ease-fade-in">
      <h1 className="ease-slide-up">Welcome</h1>
    </main>
  );
}
```

#### Pages Router (Next.js 12 or earlier)

```jsx
// pages/_app.js
import 'easemotion-css/easemotion.min.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

> **Tip:** EaseMotion CSS works in Server Components (`'use server'`) without any hydration issues since it adds no runtime JavaScript.

---

### Vue / Svelte / Astro

Install via npm and import globally:

```bash
npm install easemotion-css
```

#### Vue 3

```js
// main.js
import 'easemotion-css/easemotion.min.css';
```

```vue
<!-- MyComponent.vue -->
<template>
  <div class="ease-fade-in ease-card">
    <h2 class="ease-slide-up ease-delay-100">Hello Vue!</h2>
  </div>
</template>
```

#### Svelte / SvelteKit

```js
// src/app.js or +layout.svelte <script>
import 'easemotion-css/easemotion.min.css';
```

```svelte
<div class="ease-fade-in ease-card">
  <h2 class="ease-slide-up ease-delay-100">Hello Svelte!</h2>
</div>
```

#### Astro

```js
// src/layouts/Layout.astro
import 'easemotion-css/easemotion.min.css';
```

Or via a `<link>` tag in the Astro layout:

```astro
<link rel="stylesheet" href="/node_modules/easemotion-css/easemotion.min.css" />
```

---

## SCSS Integration

EaseMotion CSS ships a **SCSS layer** under `scss/` that exposes animation tokens as SCSS variables and provides reusable mixins. This allows you to apply EaseMotion animations in your own SCSS stylesheets without adding extra classes to your HTML.

### Setup

Make sure you have Sass installed:

```bash
npm install --save-dev sass
```

Then import the SCSS package in your stylesheet:

```scss
// In your SCSS entry file
@use 'easemotion-css/scss' as ease;
```

Or import individual partials:

```scss
@use 'easemotion-css/scss/variables' as *;
@use 'easemotion-css/scss/mixins' as ease;
```

### Using the `animate()` mixin

```scss
.my-card {
  // Apply fade-in with a 400ms duration and 200ms delay
  @include ease.animate(ease-kf-fade-in, 400ms, $ease-in-out-cubic, 200ms);
}

.hero-title {
  // Use shorthand named mixins
  @include ease.slide-up($duration: 600ms, $delay: 100ms);
}

.cta-button {
  @include ease.zoom-in($duration: $speed-fast);
}
```

### Using the `transition()` mixin

```scss
.nav-item {
  @include ease.transition(color, $duration: $speed-fast, $easing: $ease-out-cubic);

  &:hover {
    color: var(--ease-color-primary);
  }
}
```

### Available SCSS Tokens

**Duration Tokens** (mapped to CSS custom properties):

| SCSS Variable | CSS Variable | Value |
| ------------- | ------------ | ----- |
| `$speed-fast` | `--ease-speed-fast` | CSS var |
| `$speed-medium` | `--ease-speed-medium` | CSS var |
| `$speed-slow` | `--ease-speed-slow` | CSS var |

**Easing Tokens**:

| SCSS Variable | Value |
| ------------- | ----- |
| `$ease-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `$ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `$ease-in-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `$ease-elastic` | Same as `$ease-bounce` |

### Available SCSS Mixins

| Mixin | Description |
| ----- | ----------- |
| `animate($name, $duration, $easing, $delay, $fill, $iteration)` | Base animation mixin |
| `transition($property, $duration, $easing, $delay)` | CSS transition helper |
| `fade-in(...)` | Applies `ease-kf-fade-in` animation |
| `fade-out(...)` | Applies `ease-kf-fade-out` animation |
| `slide-up(...)` | Applies `ease-kf-slide-up` animation |
| `slide-down(...)` | Applies `ease-kf-slide-down` animation |
| `zoom-in(...)` | Applies `ease-kf-zoom-in` animation |
| `zoom-out(...)` | Applies `ease-kf-zoom-out` animation |

### Build your SCSS

```bash
# Compile to CSS
npx sass scss/_index.scss dist/easemotion.scss.css

# Or use the npm script in the EaseMotion project
npm run build:scss
```

> **Contributing SCSS issues:** We have 100+ open GSSoC-26 issues for expanding the SCSS layer — from new mixins to modular per-animation partials. Browse [`label:scss`](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues?q=is:open+label:scss) to find one.

---

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
| ------------------- | -------------------------------------------------------- |
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

Yes. EaseMotion CSS works with any framework that renders standard HTML `class` attributes — React, Vue, Svelte, Angular, Astro, Next.js, and more. Install from npm, import the stylesheet, and use the class names directly in your components. We also ship a dedicated React `<Animate>` wrapper component in `examples/react-vite/` — see the [Framework Integration](#framework-integration) section for details.

### How do I submit a new component or utility?

Open or claim an issue first, then submit your work under the appropriate track directory in `submissions/` (e.g., `submissions/examples/` for HTML/CSS, `submissions/react/` for React components, `submissions/scss/` for SCSS mixins/tokens, or `submissions/docs/` for core bug fixes & docs showcases). The maintainer reviews your submission, standardizes names/tokens, and integrates it into the core framework.

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
├── scss/                       ← SCSS INTEGRATION LAYER
│   ├── _index.scss             ← entry point (@forward variables + mixins)
│   ├── _variables.scss         ← SCSS animation tokens ($speed-*, $ease-*)
│   └── _mixins.scss            ← reusable SCSS mixins (animate, hover-effect...)
│
├── examples/                   ← INTEGRATION SHOWCASES
│   ├── demo.html               ← source interactive showcase
│   ├── react-vite/             ← ⚛️ React + Vite integration showcase
│   │   ├── src/
│   │   │   ├── App.jsx         ← interactive animation playground
│   │   │   ├── App.css         ← dark-mode dashboard styles
│   │   │   └── components/
│   │   │       └── Animate.jsx ← <Animate> React wrapper component
│   │   └── package.json
│   └── ...
│
├── docs/demo.html              ← deployed live demo page
├── docs/index.html             ← full documentation site
│
├── submissions/                ← CONTRIBUTOR AREA
│   ├── README.md               ← full submission workflow
│   └── examples/
│       ├── hover-grow/         ← [INTEGRATED] → ease-hover-grow
│       ├── hover-shimmer/      ← [INTEGRATED] → ease-hover-shimmer
│       ├── card-lift/          ← [INTEGRATED] → ease-card-lift
│       └── button-glow/        ← pending review
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

| Feature                                               | Status                    |
| ----------------------------------------------------- | ------------------------- |
| ✅ Human-readable core utilities (80+)                | **Shipped — v1.0**        |
| ✅ Animation-first motion library (20+)               | **Shipped — v1.0**        |
| ✅ Curated contribution pipeline                      | **Shipped — v1.0**        |
| ✅ Component library (buttons, cards)                 | **Shipped — v1.0**        |
| ✅ npm package + jsDelivr CDN                         | **Shipped — v1.0**        |
| ✅ Full documentation site                            | **Shipped — v1.0**        |
| ✅ React + Vite integration showcase                  | **Shipped — v1.1**        |
| ✅ SCSS token layer (variables + mixins)              | **Shipped — v1.1**        |
| 🚧 React component library (hooks + wrappers)         | **In Progress — v1.1**    |
| 🚧 SCSS modular partials (per-animation modules)      | **In Progress — v1.1**    |
| 🚧 Next.js App Router template                        | **In Progress — v1.1**    |
| 🔜 Form components (inputs, checkboxes, toggles)      | **Planned — v1.2**        |
| 🔜 Dark mode token layer                              | **Planned — v1.2**        |
| 🔜 Modal & tooltip components                         | **Planned — v1.2**        |
| 🔜 Scroll-triggered animations (IntersectionObserver) | **Planned — v1.2**        |
| 🔜 Navigation components (navbar, sidebar)            | **Planned — v1.3**        |
| 🔜 CSS-only accordion & tabs                          | **Planned — v1.3**        |
| 🔜 Badge, tag, avatar, progress bar                   | **Planned — v1.3**        |
| 🔜 Theming CLI (generate custom token file)           | **Exploring**             |

---

## Contributing

EaseMotion CSS is a **curated, maintainer-reviewed framework**. Contributors submit raw ideas — the maintainer handles standardization, naming, and integration.

### ✅ What contributors do

```
✅ Place submissions inside the correct track folder (submissions/examples/, submissions/react/, submissions/scss/, or submissions/docs/)
✅ Include all required files (e.g. JSX + README for React, SCSS + README for SCSS, or HTML + CSS + README for Standard)
✅ Follow the suffix naming rule (e.g. ease-component-yourid) to avoid name collisions
✅ Squash commits to keep the repository history clean
✅ One feature/component per PR
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

- Contributors may submit up to **25 PRs per day**
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

All contributions are welcome and eligible for merge when submitted inside the correct track folder under the `submissions/` directory following the repository guidelines.

To avoid naming conflicts and overlapping implementations, contributors must append a short unique identifier or abbreviation to their feature/component/mixin name.

**Example:**

- `ease-hover-sap`
- `ease-tabs-ak`
- `ease-card-pr`

This ensures:

- Unambiguous component naming,
- Preservation of every contributor’s work,
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

### 249 Contributors

<table>
<tr><td align="center"><a href="https://github.com/SAPTARSHI-coder"><img src="https://avatars.githubusercontent.com/SAPTARSHI-coder?s=64" width="52" height="52" alt="SAPTARSHI-coder" style="border-radius:50%;margin:4px"/><br/><sub><b>SAPTARSHI-coder</b></sub><br/><sub>28440 commits</sub></a></td><td align="center"><a href="https://github.com/ionfwsrijan"><img src="https://avatars.githubusercontent.com/ionfwsrijan?s=64" width="52" height="52" alt="ionfwsrijan" style="border-radius:50%;margin:4px"/><br/><sub><b>ionfwsrijan</b></sub><br/><sub>2423 commits</sub></a></td><td align="center"><a href="https://github.com/srujana-manda"><img src="https://avatars.githubusercontent.com/srujana-manda?s=64" width="52" height="52" alt="srujana-manda" style="border-radius:50%;margin:4px"/><br/><sub><b>srujana-manda</b></sub><br/><sub>823 commits</sub></a></td><td align="center"><a href="https://github.com/realtushartyagi"><img src="https://avatars.githubusercontent.com/realtushartyagi?s=64" width="52" height="52" alt="realtushartyagi" style="border-radius:50%;margin:4px"/><br/><sub><b>realtushartyagi</b></sub><br/><sub>755 commits</sub></a></td><td align="center"><a href="https://github.com/harrshita123"><img src="https://avatars.githubusercontent.com/harrshita123?s=64" width="52" height="52" alt="harrshita123" style="border-radius:50%;margin:4px"/><br/><sub><b>harrshita123</b></sub><br/><sub>707 commits</sub></a></td><td align="center"><a href="https://github.com/tmdeveloper007"><img src="https://avatars.githubusercontent.com/tmdeveloper007?s=64" width="52" height="52" alt="tmdeveloper007" style="border-radius:50%;margin:4px"/><br/><sub><b>tmdeveloper007</b></sub><br/><sub>702 commits</sub></a></td><td align="center"><a href="https://github.com/sanrishi"><img src="https://avatars.githubusercontent.com/sanrishi?s=64" width="52" height="52" alt="sanrishi" style="border-radius:50%;margin:4px"/><br/><sub><b>sanrishi</b></sub><br/><sub>699 commits</sub></a></td><td align="center"><a href="https://github.com/Anexus5919"><img src="https://avatars.githubusercontent.com/Anexus5919?s=64" width="52" height="52" alt="Anexus5919" style="border-radius:50%;margin:4px"/><br/><sub><b>Anexus5919</b></sub><br/><sub>674 commits</sub></a></td><td align="center"><a href="https://github.com/sahare77"><img src="https://avatars.githubusercontent.com/sahare77?s=64" width="52" height="52" alt="sahare77" style="border-radius:50%;margin:4px"/><br/><sub><b>sahare77</b></sub><br/><sub>658 commits</sub></a></td><td align="center"><a href="https://github.com/richachauhan15"><img src="https://avatars.githubusercontent.com/richachauhan15?s=64" width="52" height="52" alt="richachauhan15" style="border-radius:50%;margin:4px"/><br/><sub><b>richachauhan15</b></sub><br/><sub>657 commits</sub></a></td><td align="center"><a href="https://github.com/KaparthyReddy"><img src="https://avatars.githubusercontent.com/KaparthyReddy?s=64" width="52" height="52" alt="KaparthyReddy" style="border-radius:50%;margin:4px"/><br/><sub><b>KaparthyReddy</b></sub><br/><sub>652 commits</sub></a></td><td align="center"><a href="https://github.com/nazneen-p1"><img src="https://avatars.githubusercontent.com/nazneen-p1?s=64" width="52" height="52" alt="nazneen-p1" style="border-radius:50%;margin:4px"/><br/><sub><b>nazneen-p1</b></sub><br/><sub>545 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Aryan0819"><img src="https://avatars.githubusercontent.com/Aryan0819?s=64" width="52" height="52" alt="Aryan0819" style="border-radius:50%;margin:4px"/><br/><sub><b>Aryan0819</b></sub><br/><sub>504 commits</sub></a></td><td align="center"><a href="https://github.com/Stewartsson"><img src="https://avatars.githubusercontent.com/Stewartsson?s=64" width="52" height="52" alt="Stewartsson" style="border-radius:50%;margin:4px"/><br/><sub><b>Stewartsson</b></sub><br/><sub>456 commits</sub></a></td><td align="center"><a href="https://github.com/Dharm3112"><img src="https://avatars.githubusercontent.com/Dharm3112?s=64" width="52" height="52" alt="Dharm3112" style="border-radius:50%;margin:4px"/><br/><sub><b>Dharm3112</b></sub><br/><sub>451 commits</sub></a></td><td align="center"><a href="https://github.com/scriptedbyshivam"><img src="https://avatars.githubusercontent.com/scriptedbyshivam?s=64" width="52" height="52" alt="scriptedbyshivam" style="border-radius:50%;margin:4px"/><br/><sub><b>scriptedbyshivam</b></sub><br/><sub>433 commits</sub></a></td><td align="center"><a href="https://github.com/kunal-9090"><img src="https://avatars.githubusercontent.com/kunal-9090?s=64" width="52" height="52" alt="kunal-9090" style="border-radius:50%;margin:4px"/><br/><sub><b>kunal-9090</b></sub><br/><sub>429 commits</sub></a></td><td align="center"><a href="https://github.com/22oo1cso56mansoorkhan-cell"><img src="https://avatars.githubusercontent.com/22oo1cso56mansoorkhan-cell?s=64" width="52" height="52" alt="22oo1cso56mansoorkhan-cell" style="border-radius:50%;margin:4px"/><br/><sub><b>22oo1cso56mansoorkhan-cell</b></sub><br/><sub>405 commits</sub></a></td><td align="center"><a href="https://github.com/Xenon010101"><img src="https://avatars.githubusercontent.com/Xenon010101?s=64" width="52" height="52" alt="Xenon010101" style="border-radius:50%;margin:4px"/><br/><sub><b>Xenon010101</b></sub><br/><sub>376 commits</sub></a></td><td align="center"><a href="https://github.com/thakurakanksha288"><img src="https://avatars.githubusercontent.com/thakurakanksha288?s=64" width="52" height="52" alt="thakurakanksha288" style="border-radius:50%;margin:4px"/><br/><sub><b>thakurakanksha288</b></sub><br/><sub>371 commits</sub></a></td><td align="center"><a href="https://github.com/Avinash-sdbegin"><img src="https://avatars.githubusercontent.com/Avinash-sdbegin?s=64" width="52" height="52" alt="Avinash-sdbegin" style="border-radius:50%;margin:4px"/><br/><sub><b>Avinash-sdbegin</b></sub><br/><sub>322 commits</sub></a></td><td align="center"><a href="https://github.com/sonusharma6-dsa"><img src="https://avatars.githubusercontent.com/sonusharma6-dsa?s=64" width="52" height="52" alt="sonusharma6-dsa" style="border-radius:50%;margin:4px"/><br/><sub><b>sonusharma6-dsa</b></sub><br/><sub>310 commits</sub></a></td><td align="center"><a href="https://github.com/vmdivyareddy18"><img src="https://avatars.githubusercontent.com/vmdivyareddy18?s=64" width="52" height="52" alt="vmdivyareddy18" style="border-radius:50%;margin:4px"/><br/><sub><b>vmdivyareddy18</b></sub><br/><sub>305 commits</sub></a></td><td align="center"><a href="https://github.com/ARPANPATRA111"><img src="https://avatars.githubusercontent.com/ARPANPATRA111?s=64" width="52" height="52" alt="ARPANPATRA111" style="border-radius:50%;margin:4px"/><br/><sub><b>ARPANPATRA111</b></sub><br/><sub>279 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/ash1shkumar"><img src="https://avatars.githubusercontent.com/ash1shkumar?s=64" width="52" height="52" alt="ash1shkumar" style="border-radius:50%;margin:4px"/><br/><sub><b>ash1shkumar</b></sub><br/><sub>255 commits</sub></a></td><td align="center"><a href="https://github.com/itssagarK"><img src="https://avatars.githubusercontent.com/itssagarK?s=64" width="52" height="52" alt="itssagarK" style="border-radius:50%;margin:4px"/><br/><sub><b>itssagarK</b></sub><br/><sub>254 commits</sub></a></td><td align="center"><a href="https://github.com/saidai-bhuvanesh"><img src="https://avatars.githubusercontent.com/saidai-bhuvanesh?s=64" width="52" height="52" alt="saidai-bhuvanesh" style="border-radius:50%;margin:4px"/><br/><sub><b>saidai-bhuvanesh</b></sub><br/><sub>252 commits</sub></a></td><td align="center"><a href="https://github.com/servis"><img src="https://avatars.githubusercontent.com/servis?s=64" width="52" height="52" alt="servis" style="border-radius:50%;margin:4px"/><br/><sub><b>servis</b></sub><br/><sub>243 commits</sub></a></td><td align="center"><a href="https://github.com/Pratyush-Panda-2006"><img src="https://avatars.githubusercontent.com/Pratyush-Panda-2006?s=64" width="52" height="52" alt="Pratyush-Panda-2006" style="border-radius:50%;margin:4px"/><br/><sub><b>Pratyush-Panda-2006</b></sub><br/><sub>238 commits</sub></a></td><td align="center"><a href="https://github.com/openhands-agent"><img src="https://avatars.githubusercontent.com/openhands-agent?s=64" width="52" height="52" alt="openhands-agent" style="border-radius:50%;margin:4px"/><br/><sub><b>openhands-agent</b></sub><br/><sub>230 commits</sub></a></td><td align="center"><a href="https://github.com/hrx01-dev"><img src="https://avatars.githubusercontent.com/hrx01-dev?s=64" width="52" height="52" alt="hrx01-dev" style="border-radius:50%;margin:4px"/><br/><sub><b>hrx01-dev</b></sub><br/><sub>226 commits</sub></a></td><td align="center"><a href="https://github.com/adarsh-gautam-sys"><img src="https://avatars.githubusercontent.com/adarsh-gautam-sys?s=64" width="52" height="52" alt="adarsh-gautam-sys" style="border-radius:50%;margin:4px"/><br/><sub><b>adarsh-gautam-sys</b></sub><br/><sub>219 commits</sub></a></td><td align="center"><a href="https://github.com/aaniya22"><img src="https://avatars.githubusercontent.com/aaniya22?s=64" width="52" height="52" alt="aaniya22" style="border-radius:50%;margin:4px"/><br/><sub><b>aaniya22</b></sub><br/><sub>196 commits</sub></a></td><td align="center"><a href="https://github.com/Tomeshwari-02"><img src="https://avatars.githubusercontent.com/Tomeshwari-02?s=64" width="52" height="52" alt="Tomeshwari-02" style="border-radius:50%;margin:4px"/><br/><sub><b>Tomeshwari-02</b></sub><br/><sub>187 commits</sub></a></td><td align="center"><a href="https://github.com/Anushreer22"><img src="https://avatars.githubusercontent.com/Anushreer22?s=64" width="52" height="52" alt="Anushreer22" style="border-radius:50%;margin:4px"/><br/><sub><b>Anushreer22</b></sub><br/><sub>171 commits</sub></a></td><td align="center"><a href="https://github.com/nyxsky404"><img src="https://avatars.githubusercontent.com/nyxsky404?s=64" width="52" height="52" alt="nyxsky404" style="border-radius:50%;margin:4px"/><br/><sub><b>nyxsky404</b></sub><br/><sub>161 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/ashrion"><img src="https://avatars.githubusercontent.com/ashrion?s=64" width="52" height="52" alt="ashrion" style="border-radius:50%;margin:4px"/><br/><sub><b>ashrion</b></sub><br/><sub>156 commits</sub></a></td><td align="center"><a href="https://github.com/suman20041"><img src="https://avatars.githubusercontent.com/suman20041?s=64" width="52" height="52" alt="suman20041" style="border-radius:50%;margin:4px"/><br/><sub><b>suman20041</b></sub><br/><sub>140 commits</sub></a></td><td align="center"><a href="https://github.com/Rashi1404"><img src="https://avatars.githubusercontent.com/Rashi1404?s=64" width="52" height="52" alt="Rashi1404" style="border-radius:50%;margin:4px"/><br/><sub><b>Rashi1404</b></sub><br/><sub>134 commits</sub></a></td><td align="center"><a href="https://github.com/nancy-verma780"><img src="https://avatars.githubusercontent.com/nancy-verma780?s=64" width="52" height="52" alt="nancy-verma780" style="border-radius:50%;margin:4px"/><br/><sub><b>nancy-verma780</b></sub><br/><sub>128 commits</sub></a></td><td align="center"><a href="https://github.com/avanibapna06"><img src="https://avatars.githubusercontent.com/avanibapna06?s=64" width="52" height="52" alt="avanibapna06" style="border-radius:50%;margin:4px"/><br/><sub><b>avanibapna06</b></sub><br/><sub>124 commits</sub></a></td><td align="center"><a href="https://github.com/sudha09-git"><img src="https://avatars.githubusercontent.com/sudha09-git?s=64" width="52" height="52" alt="sudha09-git" style="border-radius:50%;margin:4px"/><br/><sub><b>sudha09-git</b></sub><br/><sub>117 commits</sub></a></td><td align="center"><a href="https://github.com/jainiksha"><img src="https://avatars.githubusercontent.com/jainiksha?s=64" width="52" height="52" alt="jainiksha" style="border-radius:50%;margin:4px"/><br/><sub><b>jainiksha</b></sub><br/><sub>111 commits</sub></a></td><td align="center"><a href="https://github.com/Babin123456"><img src="https://avatars.githubusercontent.com/Babin123456?s=64" width="52" height="52" alt="Babin123456" style="border-radius:50%;margin:4px"/><br/><sub><b>Babin123456</b></sub><br/><sub>109 commits</sub></a></td><td align="center"><a href="https://github.com/pari-dubey1"><img src="https://avatars.githubusercontent.com/pari-dubey1?s=64" width="52" height="52" alt="pari-dubey1" style="border-radius:50%;margin:4px"/><br/><sub><b>pari-dubey1</b></sub><br/><sub>104 commits</sub></a></td><td align="center"><a href="https://github.com/eranmol2007-coder"><img src="https://avatars.githubusercontent.com/eranmol2007-coder?s=64" width="52" height="52" alt="eranmol2007-coder" style="border-radius:50%;margin:4px"/><br/><sub><b>eranmol2007-coder</b></sub><br/><sub>99 commits</sub></a></td><td align="center"><a href="https://github.com/iammissmiller"><img src="https://avatars.githubusercontent.com/iammissmiller?s=64" width="52" height="52" alt="iammissmiller" style="border-radius:50%;margin:4px"/><br/><sub><b>iammissmiller</b></sub><br/><sub>97 commits</sub></a></td><td align="center"><a href="https://github.com/bhaikd"><img src="https://avatars.githubusercontent.com/bhaikd?s=64" width="52" height="52" alt="bhaikd" style="border-radius:50%;margin:4px"/><br/><sub><b>bhaikd</b></sub><br/><sub>96 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/BhakktiGautam"><img src="https://avatars.githubusercontent.com/BhakktiGautam?s=64" width="52" height="52" alt="BhakktiGautam" style="border-radius:50%;margin:4px"/><br/><sub><b>BhakktiGautam</b></sub><br/><sub>95 commits</sub></a></td><td align="center"><a href="https://github.com/prerendrarahitya1708"><img src="https://avatars.githubusercontent.com/prerendrarahitya1708?s=64" width="52" height="52" alt="prerendrarahitya1708" style="border-radius:50%;margin:4px"/><br/><sub><b>prerendrarahitya1708</b></sub><br/><sub>95 commits</sub></a></td><td align="center"><a href="https://github.com/desireddymohithreddy0925"><img src="https://avatars.githubusercontent.com/desireddymohithreddy0925?s=64" width="52" height="52" alt="desireddymohithreddy0925" style="border-radius:50%;margin:4px"/><br/><sub><b>desireddymohithreddy0925</b></sub><br/><sub>93 commits</sub></a></td><td align="center"><a href="https://github.com/Nicks-19"><img src="https://avatars.githubusercontent.com/Nicks-19?s=64" width="52" height="52" alt="Nicks-19" style="border-radius:50%;margin:4px"/><br/><sub><b>Nicks-19</b></sub><br/><sub>92 commits</sub></a></td><td align="center"><a href="https://github.com/Prateek2007-cmd"><img src="https://avatars.githubusercontent.com/Prateek2007-cmd?s=64" width="52" height="52" alt="Prateek2007-cmd" style="border-radius:50%;margin:4px"/><br/><sub><b>Prateek2007-cmd</b></sub><br/><sub>92 commits</sub></a></td><td align="center"><a href="https://github.com/karishmaram-tech"><img src="https://avatars.githubusercontent.com/karishmaram-tech?s=64" width="52" height="52" alt="karishmaram-tech" style="border-radius:50%;margin:4px"/><br/><sub><b>karishmaram-tech</b></sub><br/><sub>91 commits</sub></a></td><td align="center"><a href="https://github.com/IshwinderKaur8"><img src="https://avatars.githubusercontent.com/IshwinderKaur8?s=64" width="52" height="52" alt="IshwinderKaur8" style="border-radius:50%;margin:4px"/><br/><sub><b>IshwinderKaur8</b></sub><br/><sub>89 commits</sub></a></td><td align="center"><a href="https://github.com/panditshubham766-dotcom"><img src="https://avatars.githubusercontent.com/panditshubham766-dotcom?s=64" width="52" height="52" alt="panditshubham766-dotcom" style="border-radius:50%;margin:4px"/><br/><sub><b>panditshubham766-dotcom</b></sub><br/><sub>88 commits</sub></a></td><td align="center"><a href="https://github.com/TavishaBudhiraja"><img src="https://avatars.githubusercontent.com/TavishaBudhiraja?s=64" width="52" height="52" alt="TavishaBudhiraja" style="border-radius:50%;margin:4px"/><br/><sub><b>TavishaBudhiraja</b></sub><br/><sub>87 commits</sub></a></td><td align="center"><a href="https://github.com/ishita526"><img src="https://avatars.githubusercontent.com/ishita526?s=64" width="52" height="52" alt="ishita526" style="border-radius:50%;margin:4px"/><br/><sub><b>ishita526</b></sub><br/><sub>86 commits</sub></a></td><td align="center"><a href="https://github.com/ArshVermaGit"><img src="https://avatars.githubusercontent.com/ArshVermaGit?s=64" width="52" height="52" alt="ArshVermaGit" style="border-radius:50%;margin:4px"/><br/><sub><b>ArshVermaGit</b></sub><br/><sub>86 commits</sub></a></td><td align="center"><a href="https://github.com/codedbydollys10"><img src="https://avatars.githubusercontent.com/codedbydollys10?s=64" width="52" height="52" alt="codedbydollys10" style="border-radius:50%;margin:4px"/><br/><sub><b>codedbydollys10</b></sub><br/><sub>82 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/kavin553"><img src="https://avatars.githubusercontent.com/kavin553?s=64" width="52" height="52" alt="kavin553" style="border-radius:50%;margin:4px"/><br/><sub><b>kavin553</b></sub><br/><sub>81 commits</sub></a></td><td align="center"><a href="https://github.com/Rajlakshmi-ai"><img src="https://avatars.githubusercontent.com/Rajlakshmi-ai?s=64" width="52" height="52" alt="Rajlakshmi-ai" style="border-radius:50%;margin:4px"/><br/><sub><b>Rajlakshmi-ai</b></sub><br/><sub>80 commits</sub></a></td><td align="center"><a href="https://github.com/pari-28"><img src="https://avatars.githubusercontent.com/pari-28?s=64" width="52" height="52" alt="pari-28" style="border-radius:50%;margin:4px"/><br/><sub><b>pari-28</b></sub><br/><sub>80 commits</sub></a></td><td align="center"><a href="https://github.com/Abhay-1704"><img src="https://avatars.githubusercontent.com/Abhay-1704?s=64" width="52" height="52" alt="Abhay-1704" style="border-radius:50%;margin:4px"/><br/><sub><b>Abhay-1704</b></sub><br/><sub>78 commits</sub></a></td><td align="center"><a href="https://github.com/KRITIKA-l"><img src="https://avatars.githubusercontent.com/KRITIKA-l?s=64" width="52" height="52" alt="KRITIKA-l" style="border-radius:50%;margin:4px"/><br/><sub><b>KRITIKA-l</b></sub><br/><sub>77 commits</sub></a></td><td align="center"><a href="https://github.com/dreynox"><img src="https://avatars.githubusercontent.com/dreynox?s=64" width="52" height="52" alt="dreynox" style="border-radius:50%;margin:4px"/><br/><sub><b>dreynox</b></sub><br/><sub>76 commits</sub></a></td><td align="center"><a href="https://github.com/broskell"><img src="https://avatars.githubusercontent.com/broskell?s=64" width="52" height="52" alt="broskell" style="border-radius:50%;margin:4px"/><br/><sub><b>broskell</b></sub><br/><sub>75 commits</sub></a></td><td align="center"><a href="https://github.com/Daksh7785"><img src="https://avatars.githubusercontent.com/Daksh7785?s=64" width="52" height="52" alt="Daksh7785" style="border-radius:50%;margin:4px"/><br/><sub><b>Daksh7785</b></sub><br/><sub>74 commits</sub></a></td><td align="center"><a href="https://github.com/aparna24bce11388"><img src="https://avatars.githubusercontent.com/aparna24bce11388?s=64" width="52" height="52" alt="aparna24bce11388" style="border-radius:50%;margin:4px"/><br/><sub><b>aparna24bce11388</b></sub><br/><sub>74 commits</sub></a></td><td align="center"><a href="https://github.com/dnyaneshwari44"><img src="https://avatars.githubusercontent.com/dnyaneshwari44?s=64" width="52" height="52" alt="dnyaneshwari44" style="border-radius:50%;margin:4px"/><br/><sub><b>dnyaneshwari44</b></sub><br/><sub>73 commits</sub></a></td><td align="center"><a href="https://github.com/Kokila-chandrakar"><img src="https://avatars.githubusercontent.com/Kokila-chandrakar?s=64" width="52" height="52" alt="Kokila-chandrakar" style="border-radius:50%;margin:4px"/><br/><sub><b>Kokila-chandrakar</b></sub><br/><sub>73 commits</sub></a></td><td align="center"><a href="https://github.com/shresthbhargava"><img src="https://avatars.githubusercontent.com/shresthbhargava?s=64" width="52" height="52" alt="shresthbhargava" style="border-radius:50%;margin:4px"/><br/><sub><b>shresthbhargava</b></sub><br/><sub>73 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/silentguyracer"><img src="https://avatars.githubusercontent.com/silentguyracer?s=64" width="52" height="52" alt="silentguyracer" style="border-radius:50%;margin:4px"/><br/><sub><b>silentguyracer</b></sub><br/><sub>73 commits</sub></a></td><td align="center"><a href="https://github.com/ZainabTravadi"><img src="https://avatars.githubusercontent.com/ZainabTravadi?s=64" width="52" height="52" alt="ZainabTravadi" style="border-radius:50%;margin:4px"/><br/><sub><b>ZainabTravadi</b></sub><br/><sub>72 commits</sub></a></td><td align="center"><a href="https://github.com/Shreeya1207"><img src="https://avatars.githubusercontent.com/Shreeya1207?s=64" width="52" height="52" alt="Shreeya1207" style="border-radius:50%;margin:4px"/><br/><sub><b>Shreeya1207</b></sub><br/><sub>69 commits</sub></a></td><td align="center"><a href="https://github.com/Ru-2008"><img src="https://avatars.githubusercontent.com/Ru-2008?s=64" width="52" height="52" alt="Ru-2008" style="border-radius:50%;margin:4px"/><br/><sub><b>Ru-2008</b></sub><br/><sub>68 commits</sub></a></td><td align="center"><a href="https://github.com/SathvikaSingoti"><img src="https://avatars.githubusercontent.com/SathvikaSingoti?s=64" width="52" height="52" alt="SathvikaSingoti" style="border-radius:50%;margin:4px"/><br/><sub><b>SathvikaSingoti</b></sub><br/><sub>68 commits</sub></a></td><td align="center"><a href="https://github.com/pradeep0153"><img src="https://avatars.githubusercontent.com/pradeep0153?s=64" width="52" height="52" alt="pradeep0153" style="border-radius:50%;margin:4px"/><br/><sub><b>pradeep0153</b></sub><br/><sub>66 commits</sub></a></td><td align="center"><a href="https://github.com/CoderMS07"><img src="https://avatars.githubusercontent.com/CoderMS07?s=64" width="52" height="52" alt="CoderMS07" style="border-radius:50%;margin:4px"/><br/><sub><b>CoderMS07</b></sub><br/><sub>63 commits</sub></a></td><td align="center"><a href="https://github.com/geetanunakani"><img src="https://avatars.githubusercontent.com/geetanunakani?s=64" width="52" height="52" alt="geetanunakani" style="border-radius:50%;margin:4px"/><br/><sub><b>geetanunakani</b></sub><br/><sub>63 commits</sub></a></td><td align="center"><a href="https://github.com/Ayontikapal"><img src="https://avatars.githubusercontent.com/Ayontikapal?s=64" width="52" height="52" alt="Ayontikapal" style="border-radius:50%;margin:4px"/><br/><sub><b>Ayontikapal</b></sub><br/><sub>59 commits</sub></a></td><td align="center"><a href="https://github.com/hruthika18"><img src="https://avatars.githubusercontent.com/hruthika18?s=64" width="52" height="52" alt="hruthika18" style="border-radius:50%;margin:4px"/><br/><sub><b>hruthika18</b></sub><br/><sub>59 commits</sub></a></td><td align="center"><a href="https://github.com/vaishnavi-212"><img src="https://avatars.githubusercontent.com/vaishnavi-212?s=64" width="52" height="52" alt="vaishnavi-212" style="border-radius:50%;margin:4px"/><br/><sub><b>vaishnavi-212</b></sub><br/><sub>59 commits</sub></a></td><td align="center"><a href="https://github.com/itsdakshjain"><img src="https://avatars.githubusercontent.com/itsdakshjain?s=64" width="52" height="52" alt="itsdakshjain" style="border-radius:50%;margin:4px"/><br/><sub><b>itsdakshjain</b></sub><br/><sub>57 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Hasini2706"><img src="https://avatars.githubusercontent.com/Hasini2706?s=64" width="52" height="52" alt="Hasini2706" style="border-radius:50%;margin:4px"/><br/><sub><b>Hasini2706</b></sub><br/><sub>56 commits</sub></a></td><td align="center"><a href="https://github.com/poorvanshi10"><img src="https://avatars.githubusercontent.com/poorvanshi10?s=64" width="52" height="52" alt="poorvanshi10" style="border-radius:50%;margin:4px"/><br/><sub><b>poorvanshi10</b></sub><br/><sub>55 commits</sub></a></td><td align="center"><a href="https://github.com/JAY4IGNITE"><img src="https://avatars.githubusercontent.com/JAY4IGNITE?s=64" width="52" height="52" alt="JAY4IGNITE" style="border-radius:50%;margin:4px"/><br/><sub><b>JAY4IGNITE</b></sub><br/><sub>55 commits</sub></a></td><td align="center"><a href="https://github.com/chavanGaneshDatta"><img src="https://avatars.githubusercontent.com/chavanGaneshDatta?s=64" width="52" height="52" alt="chavanGaneshDatta" style="border-radius:50%;margin:4px"/><br/><sub><b>chavanGaneshDatta</b></sub><br/><sub>55 commits</sub></a></td><td align="center"><a href="https://github.com/Aditya8369"><img src="https://avatars.githubusercontent.com/Aditya8369?s=64" width="52" height="52" alt="Aditya8369" style="border-radius:50%;margin:4px"/><br/><sub><b>Aditya8369</b></sub><br/><sub>55 commits</sub></a></td><td align="center"><a href="https://github.com/REHAN-503"><img src="https://avatars.githubusercontent.com/REHAN-503?s=64" width="52" height="52" alt="REHAN-503" style="border-radius:50%;margin:4px"/><br/><sub><b>REHAN-503</b></sub><br/><sub>54 commits</sub></a></td><td align="center"><a href="https://github.com/soumyasekharshee265-ops"><img src="https://avatars.githubusercontent.com/soumyasekharshee265-ops?s=64" width="52" height="52" alt="soumyasekharshee265-ops" style="border-radius:50%;margin:4px"/><br/><sub><b>soumyasekharshee265-ops</b></sub><br/><sub>52 commits</sub></a></td><td align="center"><a href="https://github.com/Aryan-Agarwal-creator"><img src="https://avatars.githubusercontent.com/Aryan-Agarwal-creator?s=64" width="52" height="52" alt="Aryan-Agarwal-creator" style="border-radius:50%;margin:4px"/><br/><sub><b>Aryan-Agarwal-creator</b></sub><br/><sub>51 commits</sub></a></td><td align="center"><a href="https://github.com/ayushsri-dev"><img src="https://avatars.githubusercontent.com/ayushsri-dev?s=64" width="52" height="52" alt="ayushsri-dev" style="border-radius:50%;margin:4px"/><br/><sub><b>ayushsri-dev</b></sub><br/><sub>49 commits</sub></a></td><td align="center"><a href="https://github.com/WHENKEY2007"><img src="https://avatars.githubusercontent.com/WHENKEY2007?s=64" width="52" height="52" alt="WHENKEY2007" style="border-radius:50%;margin:4px"/><br/><sub><b>WHENKEY2007</b></sub><br/><sub>48 commits</sub></a></td><td align="center"><a href="https://github.com/Aditya948351"><img src="https://avatars.githubusercontent.com/Aditya948351?s=64" width="52" height="52" alt="Aditya948351" style="border-radius:50%;margin:4px"/><br/><sub><b>Aditya948351</b></sub><br/><sub>47 commits</sub></a></td><td align="center"><a href="https://github.com/ArchiGajera"><img src="https://avatars.githubusercontent.com/ArchiGajera?s=64" width="52" height="52" alt="ArchiGajera" style="border-radius:50%;margin:4px"/><br/><sub><b>ArchiGajera</b></sub><br/><sub>47 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/sricharan-213"><img src="https://avatars.githubusercontent.com/sricharan-213?s=64" width="52" height="52" alt="sricharan-213" style="border-radius:50%;margin:4px"/><br/><sub><b>sricharan-213</b></sub><br/><sub>47 commits</sub></a></td><td align="center"><a href="https://github.com/TanCodeX"><img src="https://avatars.githubusercontent.com/TanCodeX?s=64" width="52" height="52" alt="TanCodeX" style="border-radius:50%;margin:4px"/><br/><sub><b>TanCodeX</b></sub><br/><sub>46 commits</sub></a></td></tr>
</table>

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

**Latest: [v1.1.0](./CHANGELOG.md)** — New text motion & ambient utilities, v1.1 release, minified bundle optimization, 12,000+ merged PRs.

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
