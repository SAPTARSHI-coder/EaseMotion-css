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
[![GitHub Contributors](https://img.shields.io/badge/contributors-420+-f59e0b?style=flat-square)](https://github.com/SAPTARSHI-coder/EaseMotion-css/graphs/contributors)
[![Merged PRs](https://img.shields.io/badge/merged%20PRs-12078-8b5cf6?style=flat-square)](https://github.com/SAPTARSHI-coder/EaseMotion-css/pulls?q=is%3Apr+is%3Amerged)
[![Closed Issues](https://img.shields.io/badge/closed%20issues-10211-3b82f6?style=flat-square)](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues?q=is%3Aissue+is%3Aclosed)
[![Open PRs](https://flat.badgen.net/github/open-prs/SAPTARSHI-coder/EaseMotion-css?color=a78bfa&label=open%20PRs)](https://github.com/SAPTARSHI-coder/EaseMotion-css/pulls)
[![Open Issues](https://flat.badgen.net/github/open-issues/SAPTARSHI-coder/EaseMotion-css?color=ef4444&label=issues)](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-6c63ff?style=flat-square)](./LICENSE)
[![GSSoC](https://img.shields.io/badge/GSSoC-2026-orange?style=flat-square)](https://gssoc.girlscript.tech/)
[![Maintainer](https://img.shields.io/badge/Maintainer-Saptarshi%20Sadhu%20%28Rank%20%232%20Public%20%7C%20%235%20All%20Time%20Private%20🇮🇳%29-a78bfa?style=flat-square)](https://github.com/SAPTARSHI-coder)

</div>

<br/>

> [!IMPORTANT]
> **Temporary Contribution Guidelines & Freeze Notice**
>
> Due to the high volume of contributions and multiple merge conflicts affecting framework stability, PRs modifying core files, workflows, configs, or shared framework code are temporarily restricted.
>
> For now, only self-contained submissions inside the `submissions/` directory (e.g. `submissions/examples/`, `submissions/react/`, or `submissions/scss/`) will be reviewed and merged.
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

Open or claim an issue first, then submit your work under the appropriate track directory in `submissions/` (e.g., `submissions/examples/` for HTML/CSS, `submissions/react/` for React components, or `submissions/scss/` for SCSS mixins/tokens). The maintainer reviews your submission, standardizes names/tokens, and integrates it into the core framework.

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
✅ Place submissions inside the correct track folder (submissions/examples/, submissions/react/, or submissions/scss/)
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

### 372 Contributors

<table>
<tr><td align="center"><a href="https://github.com/SAPTARSHI-coder"><img src="https://avatars.githubusercontent.com/SAPTARSHI-coder?s=64" width="52" height="52" alt="SAPTARSHI-coder" style="border-radius:50%;margin:4px"/><br/><sub><b>SAPTARSHI-coder</b></sub><br/><sub>15307 commits</sub></a></td><td align="center"><a href="https://github.com/tmdeveloper007"><img src="https://avatars.githubusercontent.com/tmdeveloper007?s=64" width="52" height="52" alt="tmdeveloper007" style="border-radius:50%;margin:4px"/><br/><sub><b>tmdeveloper007</b></sub><br/><sub>703 commits</sub></a></td><td align="center"><a href="https://github.com/sanrishi"><img src="https://avatars.githubusercontent.com/sanrishi?s=64" width="52" height="52" alt="sanrishi" style="border-radius:50%;margin:4px"/><br/><sub><b>sanrishi</b></sub><br/><sub>679 commits</sub></a></td><td align="center"><a href="https://github.com/KaparthyReddy"><img src="https://avatars.githubusercontent.com/KaparthyReddy?s=64" width="52" height="52" alt="KaparthyReddy" style="border-radius:50%;margin:4px"/><br/><sub><b>KaparthyReddy</b></sub><br/><sub>652 commits</sub></a></td><td align="center"><a href="https://github.com/richachauhan15"><img src="https://avatars.githubusercontent.com/richachauhan15?s=64" width="52" height="52" alt="richachauhan15" style="border-radius:50%;margin:4px"/><br/><sub><b>richachauhan15</b></sub><br/><sub>577 commits</sub></a></td><td align="center"><a href="https://github.com/Aryan0819"><img src="https://avatars.githubusercontent.com/Aryan0819?s=64" width="52" height="52" alt="Aryan0819" style="border-radius:50%;margin:4px"/><br/><sub><b>Aryan0819</b></sub><br/><sub>427 commits</sub></a></td><td align="center"><a href="https://github.com/nazneen-p1"><img src="https://avatars.githubusercontent.com/nazneen-p1?s=64" width="52" height="52" alt="nazneen-p1" style="border-radius:50%;margin:4px"/><br/><sub><b>nazneen-p1</b></sub><br/><sub>412 commits</sub></a></td><td align="center"><a href="https://github.com/Xenon010101"><img src="https://avatars.githubusercontent.com/Xenon010101?s=64" width="52" height="52" alt="Xenon010101" style="border-radius:50%;margin:4px"/><br/><sub><b>Xenon010101</b></sub><br/><sub>369 commits</sub></a></td><td align="center"><a href="https://github.com/realtushartyagi"><img src="https://avatars.githubusercontent.com/realtushartyagi?s=64" width="52" height="52" alt="realtushartyagi" style="border-radius:50%;margin:4px"/><br/><sub><b>realtushartyagi</b></sub><br/><sub>332 commits</sub></a></td><td align="center"><a href="https://github.com/sonusharma6-dsa"><img src="https://avatars.githubusercontent.com/sonusharma6-dsa?s=64" width="52" height="52" alt="sonusharma6-dsa" style="border-radius:50%;margin:4px"/><br/><sub><b>sonusharma6-dsa</b></sub><br/><sub>306 commits</sub></a></td><td align="center"><a href="https://github.com/Dharm3112"><img src="https://avatars.githubusercontent.com/Dharm3112?s=64" width="52" height="52" alt="Dharm3112" style="border-radius:50%;margin:4px"/><br/><sub><b>Dharm3112</b></sub><br/><sub>303 commits</sub></a></td><td align="center"><a href="https://github.com/ash1shkumar"><img src="https://avatars.githubusercontent.com/ash1shkumar?s=64" width="52" height="52" alt="ash1shkumar" style="border-radius:50%;margin:4px"/><br/><sub><b>ash1shkumar</b></sub><br/><sub>255 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/itssagarK"><img src="https://avatars.githubusercontent.com/itssagarK?s=64" width="52" height="52" alt="itssagarK" style="border-radius:50%;margin:4px"/><br/><sub><b>itssagarK</b></sub><br/><sub>254 commits</sub></a></td><td align="center"><a href="https://github.com/kunal-9090"><img src="https://avatars.githubusercontent.com/kunal-9090?s=64" width="52" height="52" alt="kunal-9090" style="border-radius:50%;margin:4px"/><br/><sub><b>kunal-9090</b></sub><br/><sub>213 commits</sub></a></td><td align="center"><a href="https://github.com/saidai-bhuvanesh"><img src="https://avatars.githubusercontent.com/saidai-bhuvanesh?s=64" width="52" height="52" alt="saidai-bhuvanesh" style="border-radius:50%;margin:4px"/><br/><sub><b>saidai-bhuvanesh</b></sub><br/><sub>209 commits</sub></a></td><td align="center"><a href="https://github.com/ARPANPATRA111"><img src="https://avatars.githubusercontent.com/ARPANPATRA111?s=64" width="52" height="52" alt="ARPANPATRA111" style="border-radius:50%;margin:4px"/><br/><sub><b>ARPANPATRA111</b></sub><br/><sub>193 commits</sub></a></td><td align="center"><a href="https://github.com/Tomeshwari-02"><img src="https://avatars.githubusercontent.com/Tomeshwari-02?s=64" width="52" height="52" alt="Tomeshwari-02" style="border-radius:50%;margin:4px"/><br/><sub><b>Tomeshwari-02</b></sub><br/><sub>186 commits</sub></a></td><td align="center"><a href="https://github.com/sahare-mayur-0071"><img src="https://avatars.githubusercontent.com/sahare-mayur-0071?s=64" width="52" height="52" alt="sahare-mayur-0071" style="border-radius:50%;margin:4px"/><br/><sub><b>sahare-mayur-0071</b></sub><br/><sub>177 commits</sub></a></td><td align="center"><a href="https://github.com/Anushreer22"><img src="https://avatars.githubusercontent.com/Anushreer22?s=64" width="52" height="52" alt="Anushreer22" style="border-radius:50%;margin:4px"/><br/><sub><b>Anushreer22</b></sub><br/><sub>171 commits</sub></a></td><td align="center"><a href="https://github.com/ionfwsrijan"><img src="https://avatars.githubusercontent.com/ionfwsrijan?s=64" width="52" height="52" alt="ionfwsrijan" style="border-radius:50%;margin:4px"/><br/><sub><b>ionfwsrijan</b></sub><br/><sub>171 commits</sub></a></td><td align="center"><a href="https://github.com/adarsh-gautam-sys"><img src="https://avatars.githubusercontent.com/adarsh-gautam-sys?s=64" width="52" height="52" alt="adarsh-gautam-sys" style="border-radius:50%;margin:4px"/><br/><sub><b>adarsh-gautam-sys</b></sub><br/><sub>164 commits</sub></a></td><td align="center"><a href="https://github.com/ashrion"><img src="https://avatars.githubusercontent.com/ashrion?s=64" width="52" height="52" alt="ashrion" style="border-radius:50%;margin:4px"/><br/><sub><b>ashrion</b></sub><br/><sub>156 commits</sub></a></td><td align="center"><a href="https://github.com/Pratyush-Panda-2006"><img src="https://avatars.githubusercontent.com/Pratyush-Panda-2006?s=64" width="52" height="52" alt="Pratyush-Panda-2006" style="border-radius:50%;margin:4px"/><br/><sub><b>Pratyush-Panda-2006</b></sub><br/><sub>149 commits</sub></a></td><td align="center"><a href="https://github.com/nyxsky404"><img src="https://avatars.githubusercontent.com/nyxsky404?s=64" width="52" height="52" alt="nyxsky404" style="border-radius:50%;margin:4px"/><br/><sub><b>nyxsky404</b></sub><br/><sub>146 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/thakurakanksha288"><img src="https://avatars.githubusercontent.com/thakurakanksha288?s=64" width="52" height="52" alt="thakurakanksha288" style="border-radius:50%;margin:4px"/><br/><sub><b>thakurakanksha288</b></sub><br/><sub>139 commits</sub></a></td><td align="center"><a href="https://github.com/Rashi1404"><img src="https://avatars.githubusercontent.com/Rashi1404?s=64" width="52" height="52" alt="Rashi1404" style="border-radius:50%;margin:4px"/><br/><sub><b>Rashi1404</b></sub><br/><sub>131 commits</sub></a></td><td align="center"><a href="https://github.com/vmdivyareddy18"><img src="https://avatars.githubusercontent.com/vmdivyareddy18?s=64" width="52" height="52" alt="vmdivyareddy18" style="border-radius:50%;margin:4px"/><br/><sub><b>vmdivyareddy18</b></sub><br/><sub>123 commits</sub></a></td><td align="center"><a href="https://github.com/harrshita123"><img src="https://avatars.githubusercontent.com/harrshita123?s=64" width="52" height="52" alt="harrshita123" style="border-radius:50%;margin:4px"/><br/><sub><b>harrshita123</b></sub><br/><sub>107 commits</sub></a></td><td align="center"><a href="https://github.com/scriptedbyshivam"><img src="https://avatars.githubusercontent.com/scriptedbyshivam?s=64" width="52" height="52" alt="scriptedbyshivam" style="border-radius:50%;margin:4px"/><br/><sub><b>scriptedbyshivam</b></sub><br/><sub>106 commits</sub></a></td><td align="center"><a href="https://github.com/jainiksha"><img src="https://avatars.githubusercontent.com/jainiksha?s=64" width="52" height="52" alt="jainiksha" style="border-radius:50%;margin:4px"/><br/><sub><b>jainiksha</b></sub><br/><sub>106 commits</sub></a></td><td align="center"><a href="https://github.com/aaniya22"><img src="https://avatars.githubusercontent.com/aaniya22?s=64" width="52" height="52" alt="aaniya22" style="border-radius:50%;margin:4px"/><br/><sub><b>aaniya22</b></sub><br/><sub>104 commits</sub></a></td><td align="center"><a href="https://github.com/sudha09-git"><img src="https://avatars.githubusercontent.com/sudha09-git?s=64" width="52" height="52" alt="sudha09-git" style="border-radius:50%;margin:4px"/><br/><sub><b>sudha09-git</b></sub><br/><sub>98 commits</sub></a></td><td align="center"><a href="https://github.com/avanibapna06"><img src="https://avatars.githubusercontent.com/avanibapna06?s=64" width="52" height="52" alt="avanibapna06" style="border-radius:50%;margin:4px"/><br/><sub><b>avanibapna06</b></sub><br/><sub>97 commits</sub></a></td><td align="center"><a href="https://github.com/iammissmiller"><img src="https://avatars.githubusercontent.com/iammissmiller?s=64" width="52" height="52" alt="iammissmiller" style="border-radius:50%;margin:4px"/><br/><sub><b>iammissmiller</b></sub><br/><sub>96 commits</sub></a></td><td align="center"><a href="https://github.com/prerendrarahitya1708"><img src="https://avatars.githubusercontent.com/prerendrarahitya1708?s=64" width="52" height="52" alt="prerendrarahitya1708" style="border-radius:50%;margin:4px"/><br/><sub><b>prerendrarahitya1708</b></sub><br/><sub>95 commits</sub></a></td><td align="center"><a href="https://github.com/Prateek2007-cmd"><img src="https://avatars.githubusercontent.com/Prateek2007-cmd?s=64" width="52" height="52" alt="Prateek2007-cmd" style="border-radius:50%;margin:4px"/><br/><sub><b>Prateek2007-cmd</b></sub><br/><sub>94 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/TavishaBudhiraja"><img src="https://avatars.githubusercontent.com/TavishaBudhiraja?s=64" width="52" height="52" alt="TavishaBudhiraja" style="border-radius:50%;margin:4px"/><br/><sub><b>TavishaBudhiraja</b></sub><br/><sub>90 commits</sub></a></td><td align="center"><a href="https://github.com/ishita526"><img src="https://avatars.githubusercontent.com/ishita526?s=64" width="52" height="52" alt="ishita526" style="border-radius:50%;margin:4px"/><br/><sub><b>ishita526</b></sub><br/><sub>86 commits</sub></a></td><td align="center"><a href="https://github.com/ArshVermaGit"><img src="https://avatars.githubusercontent.com/ArshVermaGit?s=64" width="52" height="52" alt="ArshVermaGit" style="border-radius:50%;margin:4px"/><br/><sub><b>ArshVermaGit</b></sub><br/><sub>86 commits</sub></a></td><td align="center"><a href="https://github.com/codedbydollys10"><img src="https://avatars.githubusercontent.com/codedbydollys10?s=64" width="52" height="52" alt="codedbydollys10" style="border-radius:50%;margin:4px"/><br/><sub><b>codedbydollys10</b></sub><br/><sub>81 commits</sub></a></td><td align="center"><a href="https://github.com/Rajlakshmi-ai"><img src="https://avatars.githubusercontent.com/Rajlakshmi-ai?s=64" width="52" height="52" alt="Rajlakshmi-ai" style="border-radius:50%;margin:4px"/><br/><sub><b>Rajlakshmi-ai</b></sub><br/><sub>80 commits</sub></a></td><td align="center"><a href="https://github.com/KRITIKA-l"><img src="https://avatars.githubusercontent.com/KRITIKA-l?s=64" width="52" height="52" alt="KRITIKA-l" style="border-radius:50%;margin:4px"/><br/><sub><b>KRITIKA-l</b></sub><br/><sub>79 commits</sub></a></td><td align="center"><a href="https://github.com/Abhay-1704"><img src="https://avatars.githubusercontent.com/Abhay-1704?s=64" width="52" height="52" alt="Abhay-1704" style="border-radius:50%;margin:4px"/><br/><sub><b>Abhay-1704</b></sub><br/><sub>78 commits</sub></a></td><td align="center"><a href="https://github.com/pari-dubey1"><img src="https://avatars.githubusercontent.com/pari-dubey1?s=64" width="52" height="52" alt="pari-dubey1" style="border-radius:50%;margin:4px"/><br/><sub><b>pari-dubey1</b></sub><br/><sub>77 commits</sub></a></td><td align="center"><a href="https://github.com/dreynox"><img src="https://avatars.githubusercontent.com/dreynox?s=64" width="52" height="52" alt="dreynox" style="border-radius:50%;margin:4px"/><br/><sub><b>dreynox</b></sub><br/><sub>75 commits</sub></a></td><td align="center"><a href="https://github.com/Kokila-chandrakar"><img src="https://avatars.githubusercontent.com/Kokila-chandrakar?s=64" width="52" height="52" alt="Kokila-chandrakar" style="border-radius:50%;margin:4px"/><br/><sub><b>Kokila-chandrakar</b></sub><br/><sub>72 commits</sub></a></td><td align="center"><a href="https://github.com/ZainabTravadi"><img src="https://avatars.githubusercontent.com/ZainabTravadi?s=64" width="52" height="52" alt="ZainabTravadi" style="border-radius:50%;margin:4px"/><br/><sub><b>ZainabTravadi</b></sub><br/><sub>72 commits</sub></a></td><td align="center"><a href="https://github.com/shresthbhargava"><img src="https://avatars.githubusercontent.com/shresthbhargava?s=64" width="52" height="52" alt="shresthbhargava" style="border-radius:50%;margin:4px"/><br/><sub><b>shresthbhargava</b></sub><br/><sub>72 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Shreeya1207"><img src="https://avatars.githubusercontent.com/Shreeya1207?s=64" width="52" height="52" alt="Shreeya1207" style="border-radius:50%;margin:4px"/><br/><sub><b>Shreeya1207</b></sub><br/><sub>69 commits</sub></a></td><td align="center"><a href="https://github.com/Ru-2008"><img src="https://avatars.githubusercontent.com/Ru-2008?s=64" width="52" height="52" alt="Ru-2008" style="border-radius:50%;margin:4px"/><br/><sub><b>Ru-2008</b></sub><br/><sub>68 commits</sub></a></td><td align="center"><a href="https://github.com/silentguyracer"><img src="https://avatars.githubusercontent.com/silentguyracer?s=64" width="52" height="52" alt="silentguyracer" style="border-radius:50%;margin:4px"/><br/><sub><b>silentguyracer</b></sub><br/><sub>67 commits</sub></a></td><td align="center"><a href="https://github.com/pradeep0153"><img src="https://avatars.githubusercontent.com/pradeep0153?s=64" width="52" height="52" alt="pradeep0153" style="border-radius:50%;margin:4px"/><br/><sub><b>pradeep0153</b></sub><br/><sub>66 commits</sub></a></td><td align="center"><a href="https://github.com/nancy-verma780"><img src="https://avatars.githubusercontent.com/nancy-verma780?s=64" width="52" height="52" alt="nancy-verma780" style="border-radius:50%;margin:4px"/><br/><sub><b>nancy-verma780</b></sub><br/><sub>65 commits</sub></a></td><td align="center"><a href="https://github.com/IshwinderKaur8"><img src="https://avatars.githubusercontent.com/IshwinderKaur8?s=64" width="52" height="52" alt="IshwinderKaur8" style="border-radius:50%;margin:4px"/><br/><sub><b>IshwinderKaur8</b></sub><br/><sub>64 commits</sub></a></td><td align="center"><a href="https://github.com/geetanunakani"><img src="https://avatars.githubusercontent.com/geetanunakani?s=64" width="52" height="52" alt="geetanunakani" style="border-radius:50%;margin:4px"/><br/><sub><b>geetanunakani</b></sub><br/><sub>63 commits</sub></a></td><td align="center"><a href="https://github.com/itsdakshjain"><img src="https://avatars.githubusercontent.com/itsdakshjain?s=64" width="52" height="52" alt="itsdakshjain" style="border-radius:50%;margin:4px"/><br/><sub><b>itsdakshjain</b></sub><br/><sub>57 commits</sub></a></td><td align="center"><a href="https://github.com/chavanGaneshDatta"><img src="https://avatars.githubusercontent.com/chavanGaneshDatta?s=64" width="52" height="52" alt="chavanGaneshDatta" style="border-radius:50%;margin:4px"/><br/><sub><b>chavanGaneshDatta</b></sub><br/><sub>55 commits</sub></a></td><td align="center"><a href="https://github.com/REHAN-503"><img src="https://avatars.githubusercontent.com/REHAN-503?s=64" width="52" height="52" alt="REHAN-503" style="border-radius:50%;margin:4px"/><br/><sub><b>REHAN-503</b></sub><br/><sub>54 commits</sub></a></td><td align="center"><a href="https://github.com/Aditya8369"><img src="https://avatars.githubusercontent.com/Aditya8369?s=64" width="52" height="52" alt="Aditya8369" style="border-radius:50%;margin:4px"/><br/><sub><b>Aditya8369</b></sub><br/><sub>52 commits</sub></a></td><td align="center"><a href="https://github.com/soumyasekharshee265-ux"><img src="https://avatars.githubusercontent.com/soumyasekharshee265-ux?s=64" width="52" height="52" alt="soumyasekharshee265-ux" style="border-radius:50%;margin:4px"/><br/><sub><b>soumyasekharshee265-ux</b></sub><br/><sub>52 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Aryan-Agarwal-creator"><img src="https://avatars.githubusercontent.com/Aryan-Agarwal-creator?s=64" width="52" height="52" alt="Aryan-Agarwal-creator" style="border-radius:50%;margin:4px"/><br/><sub><b>Aryan-Agarwal-creator</b></sub><br/><sub>51 commits</sub></a></td><td align="center"><a href="https://github.com/Ayontikapal"><img src="https://avatars.githubusercontent.com/Ayontikapal?s=64" width="52" height="52" alt="Ayontikapal" style="border-radius:50%;margin:4px"/><br/><sub><b>Ayontikapal</b></sub><br/><sub>51 commits</sub></a></td><td align="center"><a href="https://github.com/Aditya948351"><img src="https://avatars.githubusercontent.com/Aditya948351?s=64" width="52" height="52" alt="Aditya948351" style="border-radius:50%;margin:4px"/><br/><sub><b>Aditya948351</b></sub><br/><sub>47 commits</sub></a></td><td align="center"><a href="https://github.com/sricharan-213"><img src="https://avatars.githubusercontent.com/sricharan-213?s=64" width="52" height="52" alt="sricharan-213" style="border-radius:50%;margin:4px"/><br/><sub><b>sricharan-213</b></sub><br/><sub>47 commits</sub></a></td><td align="center"><a href="https://github.com/Man1ac-1773"><img src="https://avatars.githubusercontent.com/Man1ac-1773?s=64" width="52" height="52" alt="Man1ac-1773" style="border-radius:50%;margin:4px"/><br/><sub><b>Man1ac-1773</b></sub><br/><sub>45 commits</sub></a></td><td align="center"><a href="https://github.com/Ishika-1110"><img src="https://avatars.githubusercontent.com/Ishika-1110?s=64" width="52" height="52" alt="Ishika-1110" style="border-radius:50%;margin:4px"/><br/><sub><b>Ishika-1110</b></sub><br/><sub>43 commits</sub></a></td><td align="center"><a href="https://github.com/AnanyaTiwari850"><img src="https://avatars.githubusercontent.com/AnanyaTiwari850?s=64" width="52" height="52" alt="AnanyaTiwari850" style="border-radius:50%;margin:4px"/><br/><sub><b>AnanyaTiwari850</b></sub><br/><sub>43 commits</sub></a></td><td align="center"><a href="https://github.com/Hasini2706"><img src="https://avatars.githubusercontent.com/Hasini2706?s=64" width="52" height="52" alt="Hasini2706" style="border-radius:50%;margin:4px"/><br/><sub><b>Hasini2706</b></sub><br/><sub>42 commits</sub></a></td><td align="center"><a href="https://github.com/kanishka-2007-tech"><img src="https://avatars.githubusercontent.com/kanishka-2007-tech?s=64" width="52" height="52" alt="kanishka-2007-tech" style="border-radius:50%;margin:4px"/><br/><sub><b>kanishka-2007-tech</b></sub><br/><sub>39 commits</sub></a></td><td align="center"><a href="https://github.com/Nicks-19"><img src="https://avatars.githubusercontent.com/Nicks-19?s=64" width="52" height="52" alt="Nicks-19" style="border-radius:50%;margin:4px"/><br/><sub><b>Nicks-19</b></sub><br/><sub>39 commits</sub></a></td><td align="center"><a href="https://github.com/Subhash21022"><img src="https://avatars.githubusercontent.com/Subhash21022?s=64" width="52" height="52" alt="Subhash21022" style="border-radius:50%;margin:4px"/><br/><sub><b>Subhash21022</b></sub><br/><sub>37 commits</sub></a></td><td align="center"><a href="https://github.com/rpoojaa06-git"><img src="https://avatars.githubusercontent.com/rpoojaa06-git?s=64" width="52" height="52" alt="rpoojaa06-git" style="border-radius:50%;margin:4px"/><br/><sub><b>rpoojaa06-git</b></sub><br/><sub>36 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Pranaykarvi"><img src="https://avatars.githubusercontent.com/Pranaykarvi?s=64" width="52" height="52" alt="Pranaykarvi" style="border-radius:50%;margin:4px"/><br/><sub><b>Pranaykarvi</b></sub><br/><sub>35 commits</sub></a></td><td align="center"><a href="https://github.com/aditya-5224"><img src="https://avatars.githubusercontent.com/aditya-5224?s=64" width="52" height="52" alt="aditya-5224" style="border-radius:50%;margin:4px"/><br/><sub><b>aditya-5224</b></sub><br/><sub>33 commits</sub></a></td><td align="center"><a href="https://github.com/DivyaShreeS09"><img src="https://avatars.githubusercontent.com/DivyaShreeS09?s=64" width="52" height="52" alt="DivyaShreeS09" style="border-radius:50%;margin:4px"/><br/><sub><b>DivyaShreeS09</b></sub><br/><sub>32 commits</sub></a></td><td align="center"><a href="https://github.com/srinidhi-2006-bit"><img src="https://avatars.githubusercontent.com/srinidhi-2006-bit?s=64" width="52" height="52" alt="srinidhi-2006-bit" style="border-radius:50%;margin:4px"/><br/><sub><b>srinidhi-2006-bit</b></sub><br/><sub>32 commits</sub></a></td><td align="center"><a href="https://github.com/CoderMS07"><img src="https://avatars.githubusercontent.com/CoderMS07?s=64" width="52" height="52" alt="CoderMS07" style="border-radius:50%;margin:4px"/><br/><sub><b>CoderMS07</b></sub><br/><sub>32 commits</sub></a></td><td align="center"><a href="https://github.com/AyushPrad2907"><img src="https://avatars.githubusercontent.com/AyushPrad2907?s=64" width="52" height="52" alt="AyushPrad2907" style="border-radius:50%;margin:4px"/><br/><sub><b>AyushPrad2907</b></sub><br/><sub>32 commits</sub></a></td><td align="center"><a href="https://github.com/Pr241singh"><img src="https://avatars.githubusercontent.com/Pr241singh?s=64" width="52" height="52" alt="Pr241singh" style="border-radius:50%;margin:4px"/><br/><sub><b>Pr241singh</b></sub><br/><sub>31 commits</sub></a></td><td align="center"><a href="https://github.com/rima48-bit"><img src="https://avatars.githubusercontent.com/rima48-bit?s=64" width="52" height="52" alt="rima48-bit" style="border-radius:50%;margin:4px"/><br/><sub><b>rima48-bit</b></sub><br/><sub>31 commits</sub></a></td><td align="center"><a href="https://github.com/panditshubham766-dotcom"><img src="https://avatars.githubusercontent.com/panditshubham766-dotcom?s=64" width="52" height="52" alt="panditshubham766-dotcom" style="border-radius:50%;margin:4px"/><br/><sub><b>panditshubham766-dotcom</b></sub><br/><sub>31 commits</sub></a></td><td align="center"><a href="https://github.com/SatyamxBuilds"><img src="https://avatars.githubusercontent.com/SatyamxBuilds?s=64" width="52" height="52" alt="SatyamxBuilds" style="border-radius:50%;margin:4px"/><br/><sub><b>SatyamxBuilds</b></sub><br/><sub>30 commits</sub></a></td><td align="center"><a href="https://github.com/dishamaurya081-create"><img src="https://avatars.githubusercontent.com/dishamaurya081-create?s=64" width="52" height="52" alt="dishamaurya081-create" style="border-radius:50%;margin:4px"/><br/><sub><b>dishamaurya081-create</b></sub><br/><sub>27 commits</sub></a></td><td align="center"><a href="https://github.com/Kadaliswarna"><img src="https://avatars.githubusercontent.com/Kadaliswarna?s=64" width="52" height="52" alt="Kadaliswarna" style="border-radius:50%;margin:4px"/><br/><sub><b>Kadaliswarna</b></sub><br/><sub>27 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Vidheendu"><img src="https://avatars.githubusercontent.com/Vidheendu?s=64" width="52" height="52" alt="Vidheendu" style="border-radius:50%;margin:4px"/><br/><sub><b>Vidheendu</b></sub><br/><sub>27 commits</sub></a></td><td align="center"><a href="https://github.com/DebasmitaBose0"><img src="https://avatars.githubusercontent.com/DebasmitaBose0?s=64" width="52" height="52" alt="DebasmitaBose0" style="border-radius:50%;margin:4px"/><br/><sub><b>DebasmitaBose0</b></sub><br/><sub>26 commits</sub></a></td><td align="center"><a href="https://github.com/SG17THEProgrammer"><img src="https://avatars.githubusercontent.com/SG17THEProgrammer?s=64" width="52" height="52" alt="SG17THEProgrammer" style="border-radius:50%;margin:4px"/><br/><sub><b>SG17THEProgrammer</b></sub><br/><sub>26 commits</sub></a></td><td align="center"><a href="https://github.com/abhinavkhedwal4-maker"><img src="https://avatars.githubusercontent.com/abhinavkhedwal4-maker?s=64" width="52" height="52" alt="abhinavkhedwal4-maker" style="border-radius:50%;margin:4px"/><br/><sub><b>abhinavkhedwal4-maker</b></sub><br/><sub>26 commits</sub></a></td><td align="center"><a href="https://github.com/soumyasync"><img src="https://avatars.githubusercontent.com/soumyasync?s=64" width="52" height="52" alt="soumyasync" style="border-radius:50%;margin:4px"/><br/><sub><b>soumyasync</b></sub><br/><sub>26 commits</sub></a></td><td align="center"><a href="https://github.com/Yogender-verma"><img src="https://avatars.githubusercontent.com/Yogender-verma?s=64" width="52" height="52" alt="Yogender-verma" style="border-radius:50%;margin:4px"/><br/><sub><b>Yogender-verma</b></sub><br/><sub>25 commits</sub></a></td><td align="center"><a href="https://github.com/KRUSHAL2956"><img src="https://avatars.githubusercontent.com/KRUSHAL2956?s=64" width="52" height="52" alt="KRUSHAL2956" style="border-radius:50%;margin:4px"/><br/><sub><b>KRUSHAL2956</b></sub><br/><sub>24 commits</sub></a></td><td align="center"><a href="https://github.com/Praharsh7270"><img src="https://avatars.githubusercontent.com/Praharsh7270?s=64" width="52" height="52" alt="Praharsh7270" style="border-radius:50%;margin:4px"/><br/><sub><b>Praharsh7270</b></sub><br/><sub>23 commits</sub></a></td><td align="center"><a href="https://github.com/neha28kudale"><img src="https://avatars.githubusercontent.com/neha28kudale?s=64" width="52" height="52" alt="neha28kudale" style="border-radius:50%;margin:4px"/><br/><sub><b>neha28kudale</b></sub><br/><sub>22 commits</sub></a></td><td align="center"><a href="https://github.com/Puneethteja"><img src="https://avatars.githubusercontent.com/Puneethteja?s=64" width="52" height="52" alt="Puneethteja" style="border-radius:50%;margin:4px"/><br/><sub><b>Puneethteja</b></sub><br/><sub>22 commits</sub></a></td><td align="center"><a href="https://github.com/shankumar7"><img src="https://avatars.githubusercontent.com/shankumar7?s=64" width="52" height="52" alt="shankumar7" style="border-radius:50%;margin:4px"/><br/><sub><b>shankumar7</b></sub><br/><sub>22 commits</sub></a></td><td align="center"><a href="https://github.com/TEJASWANIANIMIREDDY"><img src="https://avatars.githubusercontent.com/TEJASWANIANIMIREDDY?s=64" width="52" height="52" alt="TEJASWANIANIMIREDDY" style="border-radius:50%;margin:4px"/><br/><sub><b>TEJASWANIANIMIREDDY</b></sub><br/><sub>22 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Xploit-Ghost"><img src="https://avatars.githubusercontent.com/Xploit-Ghost?s=64" width="52" height="52" alt="Xploit-Ghost" style="border-radius:50%;margin:4px"/><br/><sub><b>Xploit-Ghost</b></sub><br/><sub>22 commits</sub></a></td><td align="center"><a href="https://github.com/HarshaNaidu11"><img src="https://avatars.githubusercontent.com/HarshaNaidu11?s=64" width="52" height="52" alt="HarshaNaidu11" style="border-radius:50%;margin:4px"/><br/><sub><b>HarshaNaidu11</b></sub><br/><sub>21 commits</sub></a></td><td align="center"><a href="https://github.com/nyaminidurga-cmd"><img src="https://avatars.githubusercontent.com/nyaminidurga-cmd?s=64" width="52" height="52" alt="nyaminidurga-cmd" style="border-radius:50%;margin:4px"/><br/><sub><b>nyaminidurga-cmd</b></sub><br/><sub>21 commits</sub></a></td><td align="center"><a href="https://github.com/hiitarun1"><img src="https://avatars.githubusercontent.com/hiitarun1?s=64" width="52" height="52" alt="hiitarun1" style="border-radius:50%;margin:4px"/><br/><sub><b>hiitarun1</b></sub><br/><sub>21 commits</sub></a></td><td align="center"><a href="https://github.com/srujana-manda"><img src="https://avatars.githubusercontent.com/srujana-manda?s=64" width="52" height="52" alt="srujana-manda" style="border-radius:50%;margin:4px"/><br/><sub><b>srujana-manda</b></sub><br/><sub>20 commits</sub></a></td><td align="center"><a href="https://github.com/Shanidhya01"><img src="https://avatars.githubusercontent.com/Shanidhya01?s=64" width="52" height="52" alt="Shanidhya01" style="border-radius:50%;margin:4px"/><br/><sub><b>Shanidhya01</b></sub><br/><sub>20 commits</sub></a></td><td align="center"><a href="https://github.com/desireddymohithreddy0925"><img src="https://avatars.githubusercontent.com/desireddymohithreddy0925?s=64" width="52" height="52" alt="desireddymohithreddy0925" style="border-radius:50%;margin:4px"/><br/><sub><b>desireddymohithreddy0925</b></sub><br/><sub>20 commits</sub></a></td><td align="center"><a href="https://github.com/bhavyapandiya29"><img src="https://avatars.githubusercontent.com/bhavyapandiya29?s=64" width="52" height="52" alt="bhavyapandiya29" style="border-radius:50%;margin:4px"/><br/><sub><b>bhavyapandiya29</b></sub><br/><sub>20 commits</sub></a></td><td align="center"><a href="https://github.com/Muditapandey26"><img src="https://avatars.githubusercontent.com/Muditapandey26?s=64" width="52" height="52" alt="Muditapandey26" style="border-radius:50%;margin:4px"/><br/><sub><b>Muditapandey26</b></sub><br/><sub>19 commits</sub></a></td><td align="center"><a href="https://github.com/Manav5234"><img src="https://avatars.githubusercontent.com/Manav5234?s=64" width="52" height="52" alt="Manav5234" style="border-radius:50%;margin:4px"/><br/><sub><b>Manav5234</b></sub><br/><sub>19 commits</sub></a></td><td align="center"><a href="https://github.com/Chaudhary8587"><img src="https://avatars.githubusercontent.com/Chaudhary8587?s=64" width="52" height="52" alt="Chaudhary8587" style="border-radius:50%;margin:4px"/><br/><sub><b>Chaudhary8587</b></sub><br/><sub>19 commits</sub></a></td><td align="center"><a href="https://github.com/Thacker-Meet"><img src="https://avatars.githubusercontent.com/Thacker-Meet?s=64" width="52" height="52" alt="Thacker-Meet" style="border-radius:50%;margin:4px"/><br/><sub><b>Thacker-Meet</b></sub><br/><sub>19 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/srividrumavangara"><img src="https://avatars.githubusercontent.com/srividrumavangara?s=64" width="52" height="52" alt="srividrumavangara" style="border-radius:50%;margin:4px"/><br/><sub><b>srividrumavangara</b></sub><br/><sub>19 commits</sub></a></td><td align="center"><a href="https://github.com/Nilamma19"><img src="https://avatars.githubusercontent.com/Nilamma19?s=64" width="52" height="52" alt="Nilamma19" style="border-radius:50%;margin:4px"/><br/><sub><b>Nilamma19</b></sub><br/><sub>18 commits</sub></a></td><td align="center"><a href="https://github.com/divyansha12"><img src="https://avatars.githubusercontent.com/divyansha12?s=64" width="52" height="52" alt="divyansha12" style="border-radius:50%;margin:4px"/><br/><sub><b>divyansha12</b></sub><br/><sub>18 commits</sub></a></td><td align="center"><a href="https://github.com/ksrikarsai"><img src="https://avatars.githubusercontent.com/ksrikarsai?s=64" width="52" height="52" alt="ksrikarsai" style="border-radius:50%;margin:4px"/><br/><sub><b>ksrikarsai</b></sub><br/><sub>18 commits</sub></a></td><td align="center"><a href="https://github.com/kshah123919"><img src="https://avatars.githubusercontent.com/kshah123919?s=64" width="52" height="52" alt="kshah123919" style="border-radius:50%;margin:4px"/><br/><sub><b>kshah123919</b></sub><br/><sub>17 commits</sub></a></td><td align="center"><a href="https://github.com/paramsavla06"><img src="https://avatars.githubusercontent.com/paramsavla06?s=64" width="52" height="52" alt="paramsavla06" style="border-radius:50%;margin:4px"/><br/><sub><b>paramsavla06</b></sub><br/><sub>17 commits</sub></a></td><td align="center"><a href="https://github.com/Kritika200520"><img src="https://avatars.githubusercontent.com/Kritika200520?s=64" width="52" height="52" alt="Kritika200520" style="border-radius:50%;margin:4px"/><br/><sub><b>Kritika200520</b></sub><br/><sub>17 commits</sub></a></td><td align="center"><a href="https://github.com/vbarik317-droid"><img src="https://avatars.githubusercontent.com/vbarik317-droid?s=64" width="52" height="52" alt="vbarik317-droid" style="border-radius:50%;margin:4px"/><br/><sub><b>vbarik317-droid</b></sub><br/><sub>17 commits</sub></a></td><td align="center"><a href="https://github.com/Vaishnavi10706"><img src="https://avatars.githubusercontent.com/Vaishnavi10706?s=64" width="52" height="52" alt="Vaishnavi10706" style="border-radius:50%;margin:4px"/><br/><sub><b>Vaishnavi10706</b></sub><br/><sub>17 commits</sub></a></td><td align="center"><a href="https://github.com/Ayushisingh09"><img src="https://avatars.githubusercontent.com/Ayushisingh09?s=64" width="52" height="52" alt="Ayushisingh09" style="border-radius:50%;margin:4px"/><br/><sub><b>Ayushisingh09</b></sub><br/><sub>17 commits</sub></a></td><td align="center"><a href="https://github.com/ankitrmishra01"><img src="https://avatars.githubusercontent.com/ankitrmishra01?s=64" width="52" height="52" alt="ankitrmishra01" style="border-radius:50%;margin:4px"/><br/><sub><b>ankitrmishra01</b></sub><br/><sub>17 commits</sub></a></td><td align="center"><a href="https://github.com/PradeepTech-hub"><img src="https://avatars.githubusercontent.com/PradeepTech-hub?s=64" width="52" height="52" alt="PradeepTech-hub" style="border-radius:50%;margin:4px"/><br/><sub><b>PradeepTech-hub</b></sub><br/><sub>16 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/TanCodeX"><img src="https://avatars.githubusercontent.com/TanCodeX?s=64" width="52" height="52" alt="TanCodeX" style="border-radius:50%;margin:4px"/><br/><sub><b>TanCodeX</b></sub><br/><sub>16 commits</sub></a></td><td align="center"><a href="https://github.com/deepsikha-dash"><img src="https://avatars.githubusercontent.com/deepsikha-dash?s=64" width="52" height="52" alt="deepsikha-dash" style="border-radius:50%;margin:4px"/><br/><sub><b>deepsikha-dash</b></sub><br/><sub>16 commits</sub></a></td><td align="center"><a href="https://github.com/pooja-0206"><img src="https://avatars.githubusercontent.com/pooja-0206?s=64" width="52" height="52" alt="pooja-0206" style="border-radius:50%;margin:4px"/><br/><sub><b>pooja-0206</b></sub><br/><sub>16 commits</sub></a></td><td align="center"><a href="https://github.com/ArchiGajera"><img src="https://avatars.githubusercontent.com/ArchiGajera?s=64" width="52" height="52" alt="ArchiGajera" style="border-radius:50%;margin:4px"/><br/><sub><b>ArchiGajera</b></sub><br/><sub>15 commits</sub></a></td><td align="center"><a href="https://github.com/Khushi-Rajput77"><img src="https://avatars.githubusercontent.com/Khushi-Rajput77?s=64" width="52" height="52" alt="Khushi-Rajput77" style="border-radius:50%;margin:4px"/><br/><sub><b>Khushi-Rajput77</b></sub><br/><sub>15 commits</sub></a></td><td align="center"><a href="https://github.com/AjaayMohare"><img src="https://avatars.githubusercontent.com/AjaayMohare?s=64" width="52" height="52" alt="AjaayMohare" style="border-radius:50%;margin:4px"/><br/><sub><b>AjaayMohare</b></sub><br/><sub>15 commits</sub></a></td><td align="center"><a href="https://github.com/purvacode-80"><img src="https://avatars.githubusercontent.com/purvacode-80?s=64" width="52" height="52" alt="purvacode-80" style="border-radius:50%;margin:4px"/><br/><sub><b>purvacode-80</b></sub><br/><sub>14 commits</sub></a></td><td align="center"><a href="https://github.com/Ankitkr16"><img src="https://avatars.githubusercontent.com/Ankitkr16?s=64" width="52" height="52" alt="Ankitkr16" style="border-radius:50%;margin:4px"/><br/><sub><b>Ankitkr16</b></sub><br/><sub>14 commits</sub></a></td><td align="center"><a href="https://github.com/paridhijain153"><img src="https://avatars.githubusercontent.com/paridhijain153?s=64" width="52" height="52" alt="paridhijain153" style="border-radius:50%;margin:4px"/><br/><sub><b>paridhijain153</b></sub><br/><sub>14 commits</sub></a></td><td align="center"><a href="https://github.com/Premshaw23"><img src="https://avatars.githubusercontent.com/Premshaw23?s=64" width="52" height="52" alt="Premshaw23" style="border-radius:50%;margin:4px"/><br/><sub><b>Premshaw23</b></sub><br/><sub>14 commits</sub></a></td><td align="center"><a href="https://github.com/Abhushan187"><img src="https://avatars.githubusercontent.com/Abhushan187?s=64" width="52" height="52" alt="Abhushan187" style="border-radius:50%;margin:4px"/><br/><sub><b>Abhushan187</b></sub><br/><sub>14 commits</sub></a></td><td align="center"><a href="https://github.com/Juhi4433"><img src="https://avatars.githubusercontent.com/Juhi4433?s=64" width="52" height="52" alt="Juhi4433" style="border-radius:50%;margin:4px"/><br/><sub><b>Juhi4433</b></sub><br/><sub>13 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/WHENKEY2007"><img src="https://avatars.githubusercontent.com/WHENKEY2007?s=64" width="52" height="52" alt="WHENKEY2007" style="border-radius:50%;margin:4px"/><br/><sub><b>WHENKEY2007</b></sub><br/><sub>13 commits</sub></a></td><td align="center"><a href="https://github.com/zairahussain27"><img src="https://avatars.githubusercontent.com/zairahussain27?s=64" width="52" height="52" alt="zairahussain27" style="border-radius:50%;margin:4px"/><br/><sub><b>zairahussain27</b></sub><br/><sub>13 commits</sub></a></td><td align="center"><a href="https://github.com/surajbharsakle07"><img src="https://avatars.githubusercontent.com/surajbharsakle07?s=64" width="52" height="52" alt="surajbharsakle07" style="border-radius:50%;margin:4px"/><br/><sub><b>surajbharsakle07</b></sub><br/><sub>13 commits</sub></a></td><td align="center"><a href="https://github.com/Bheemeswari497"><img src="https://avatars.githubusercontent.com/Bheemeswari497?s=64" width="52" height="52" alt="Bheemeswari497" style="border-radius:50%;margin:4px"/><br/><sub><b>Bheemeswari497</b></sub><br/><sub>12 commits</sub></a></td><td align="center"><a href="https://github.com/gayatridot"><img src="https://avatars.githubusercontent.com/gayatridot?s=64" width="52" height="52" alt="gayatridot" style="border-radius:50%;margin:4px"/><br/><sub><b>gayatridot</b></sub><br/><sub>12 commits</sub></a></td><td align="center"><a href="https://github.com/Sricharan106"><img src="https://avatars.githubusercontent.com/Sricharan106?s=64" width="52" height="52" alt="Sricharan106" style="border-radius:50%;margin:4px"/><br/><sub><b>Sricharan106</b></sub><br/><sub>12 commits</sub></a></td><td align="center"><a href="https://github.com/bhavyabhardwaj001"><img src="https://avatars.githubusercontent.com/bhavyabhardwaj001?s=64" width="52" height="52" alt="bhavyabhardwaj001" style="border-radius:50%;margin:4px"/><br/><sub><b>bhavyabhardwaj001</b></sub><br/><sub>12 commits</sub></a></td><td align="center"><a href="https://github.com/Krish-Mishra"><img src="https://avatars.githubusercontent.com/Krish-Mishra?s=64" width="52" height="52" alt="Krish-Mishra" style="border-radius:50%;margin:4px"/><br/><sub><b>Krish-Mishra</b></sub><br/><sub>12 commits</sub></a></td><td align="center"><a href="https://github.com/Mohanapriya-sparks"><img src="https://avatars.githubusercontent.com/Mohanapriya-sparks?s=64" width="52" height="52" alt="Mohanapriya-sparks" style="border-radius:50%;margin:4px"/><br/><sub><b>Mohanapriya-sparks</b></sub><br/><sub>11 commits</sub></a></td><td align="center"><a href="https://github.com/PRINCE-ANTHONY"><img src="https://avatars.githubusercontent.com/PRINCE-ANTHONY?s=64" width="52" height="52" alt="PRINCE-ANTHONY" style="border-radius:50%;margin:4px"/><br/><sub><b>PRINCE-ANTHONY</b></sub><br/><sub>11 commits</sub></a></td><td align="center"><a href="https://github.com/openhands-agent"><img src="https://avatars.githubusercontent.com/openhands-agent?s=64" width="52" height="52" alt="openhands-agent" style="border-radius:50%;margin:4px"/><br/><sub><b>openhands-agent</b></sub><br/><sub>11 commits</sub></a></td><td align="center"><a href="https://github.com/HarmiBhikadiya"><img src="https://avatars.githubusercontent.com/HarmiBhikadiya?s=64" width="52" height="52" alt="HarmiBhikadiya" style="border-radius:50%;margin:4px"/><br/><sub><b>HarmiBhikadiya</b></sub><br/><sub>11 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/dhruv-jani-0808"><img src="https://avatars.githubusercontent.com/dhruv-jani-0808?s=64" width="52" height="52" alt="dhruv-jani-0808" style="border-radius:50%;margin:4px"/><br/><sub><b>dhruv-jani-0808</b></sub><br/><sub>11 commits</sub></a></td><td align="center"><a href="https://github.com/BinaryBandit-07"><img src="https://avatars.githubusercontent.com/BinaryBandit-07?s=64" width="52" height="52" alt="BinaryBandit-07" style="border-radius:50%;margin:4px"/><br/><sub><b>BinaryBandit-07</b></sub><br/><sub>10 commits</sub></a></td><td align="center"><a href="https://github.com/joshnajojo12"><img src="https://avatars.githubusercontent.com/joshnajojo12?s=64" width="52" height="52" alt="joshnajojo12" style="border-radius:50%;margin:4px"/><br/><sub><b>joshnajojo12</b></sub><br/><sub>10 commits</sub></a></td><td align="center"><a href="https://github.com/janievinod"><img src="https://avatars.githubusercontent.com/janievinod?s=64" width="52" height="52" alt="janievinod" style="border-radius:50%;margin:4px"/><br/><sub><b>janievinod</b></sub><br/><sub>10 commits</sub></a></td><td align="center"><a href="https://github.com/ni2-vsv11"><img src="https://avatars.githubusercontent.com/ni2-vsv11?s=64" width="52" height="52" alt="ni2-vsv11" style="border-radius:50%;margin:4px"/><br/><sub><b>ni2-vsv11</b></sub><br/><sub>10 commits</sub></a></td><td align="center"><a href="https://github.com/bhaktisp15"><img src="https://avatars.githubusercontent.com/bhaktisp15?s=64" width="52" height="52" alt="bhaktisp15" style="border-radius:50%;margin:4px"/><br/><sub><b>bhaktisp15</b></sub><br/><sub>10 commits</sub></a></td><td align="center"><a href="https://github.com/toufiq00007"><img src="https://avatars.githubusercontent.com/toufiq00007?s=64" width="52" height="52" alt="toufiq00007" style="border-radius:50%;margin:4px"/><br/><sub><b>toufiq00007</b></sub><br/><sub>10 commits</sub></a></td><td align="center"><a href="https://github.com/alishaalmeida10"><img src="https://avatars.githubusercontent.com/alishaalmeida10?s=64" width="52" height="52" alt="alishaalmeida10" style="border-radius:50%;margin:4px"/><br/><sub><b>alishaalmeida10</b></sub><br/><sub>10 commits</sub></a></td><td align="center"><a href="https://github.com/SathvikaSingoti"><img src="https://avatars.githubusercontent.com/SathvikaSingoti?s=64" width="52" height="52" alt="SathvikaSingoti" style="border-radius:50%;margin:4px"/><br/><sub><b>SathvikaSingoti</b></sub><br/><sub>10 commits</sub></a></td><td align="center"><a href="https://github.com/22oo1cso56mansoorkhan-cell"><img src="https://avatars.githubusercontent.com/22oo1cso56mansoorkhan-cell?s=64" width="52" height="52" alt="22oo1cso56mansoorkhan-cell" style="border-radius:50%;margin:4px"/><br/><sub><b>22oo1cso56mansoorkhan-cell</b></sub><br/><sub>10 commits</sub></a></td><td align="center"><a href="https://github.com/riddhima25bet10005-a11y"><img src="https://avatars.githubusercontent.com/riddhima25bet10005-a11y?s=64" width="52" height="52" alt="riddhima25bet10005-a11y" style="border-radius:50%;margin:4px"/><br/><sub><b>riddhima25bet10005-a11y</b></sub><br/><sub>10 commits</sub></a></td><td align="center"><a href="https://github.com/Aritra235"><img src="https://avatars.githubusercontent.com/Aritra235?s=64" width="52" height="52" alt="Aritra235" style="border-radius:50%;margin:4px"/><br/><sub><b>Aritra235</b></sub><br/><sub>9 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/nithinsai-dev"><img src="https://avatars.githubusercontent.com/nithinsai-dev?s=64" width="52" height="52" alt="nithinsai-dev" style="border-radius:50%;margin:4px"/><br/><sub><b>nithinsai-dev</b></sub><br/><sub>9 commits</sub></a></td><td align="center"><a href="https://github.com/adyamohanka"><img src="https://avatars.githubusercontent.com/adyamohanka?s=64" width="52" height="52" alt="adyamohanka" style="border-radius:50%;margin:4px"/><br/><sub><b>adyamohanka</b></sub><br/><sub>9 commits</sub></a></td><td align="center"><a href="https://github.com/Siddh2024"><img src="https://avatars.githubusercontent.com/Siddh2024?s=64" width="52" height="52" alt="Siddh2024" style="border-radius:50%;margin:4px"/><br/><sub><b>Siddh2024</b></sub><br/><sub>9 commits</sub></a></td><td align="center"><a href="https://github.com/notlexius-glitch"><img src="https://avatars.githubusercontent.com/notlexius-glitch?s=64" width="52" height="52" alt="notlexius-glitch" style="border-radius:50%;margin:4px"/><br/><sub><b>notlexius-glitch</b></sub><br/><sub>9 commits</sub></a></td><td align="center"><a href="https://github.com/ARKCodes25"><img src="https://avatars.githubusercontent.com/ARKCodes25?s=64" width="52" height="52" alt="ARKCodes25" style="border-radius:50%;margin:4px"/><br/><sub><b>ARKCodes25</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/S0412-2007"><img src="https://avatars.githubusercontent.com/S0412-2007?s=64" width="52" height="52" alt="S0412-2007" style="border-radius:50%;margin:4px"/><br/><sub><b>S0412-2007</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/sarveshwarikumari05"><img src="https://avatars.githubusercontent.com/sarveshwarikumari05?s=64" width="52" height="52" alt="sarveshwarikumari05" style="border-radius:50%;margin:4px"/><br/><sub><b>sarveshwarikumari05</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/bhaiyachimkandi01-source"><img src="https://avatars.githubusercontent.com/bhaiyachimkandi01-source?s=64" width="52" height="52" alt="bhaiyachimkandi01-source" style="border-radius:50%;margin:4px"/><br/><sub><b>bhaiyachimkandi01-source</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/PAWANBHOWATE04"><img src="https://avatars.githubusercontent.com/PAWANBHOWATE04?s=64" width="52" height="52" alt="PAWANBHOWATE04" style="border-radius:50%;margin:4px"/><br/><sub><b>PAWANBHOWATE04</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/Neelr1912"><img src="https://avatars.githubusercontent.com/Neelr1912?s=64" width="52" height="52" alt="Neelr1912" style="border-radius:50%;margin:4px"/><br/><sub><b>Neelr1912</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/MajBlaze"><img src="https://avatars.githubusercontent.com/MajBlaze?s=64" width="52" height="52" alt="MajBlaze" style="border-radius:50%;margin:4px"/><br/><sub><b>MajBlaze</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/jayshreerathoreai32-hue"><img src="https://avatars.githubusercontent.com/jayshreerathoreai32-hue?s=64" width="52" height="52" alt="jayshreerathoreai32-hue" style="border-radius:50%;margin:4px"/><br/><sub><b>jayshreerathoreai32-hue</b></sub><br/><sub>8 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Abhi666-max"><img src="https://avatars.githubusercontent.com/Abhi666-max?s=64" width="52" height="52" alt="Abhi666-max" style="border-radius:50%;margin:4px"/><br/><sub><b>Abhi666-max</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/Aarju247"><img src="https://avatars.githubusercontent.com/Aarju247?s=64" width="52" height="52" alt="Aarju247" style="border-radius:50%;margin:4px"/><br/><sub><b>Aarju247</b></sub><br/><sub>8 commits</sub></a></td><td align="center"><a href="https://github.com/ujwal-224"><img src="https://avatars.githubusercontent.com/ujwal-224?s=64" width="52" height="52" alt="ujwal-224" style="border-radius:50%;margin:4px"/><br/><sub><b>ujwal-224</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/Dhruva5vora"><img src="https://avatars.githubusercontent.com/Dhruva5vora?s=64" width="52" height="52" alt="Dhruva5vora" style="border-radius:50%;margin:4px"/><br/><sub><b>Dhruva5vora</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/shauryaparth1902-blip"><img src="https://avatars.githubusercontent.com/shauryaparth1902-blip?s=64" width="52" height="52" alt="shauryaparth1902-blip" style="border-radius:50%;margin:4px"/><br/><sub><b>shauryaparth1902-blip</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/antara5603"><img src="https://avatars.githubusercontent.com/antara5603?s=64" width="52" height="52" alt="antara5603" style="border-radius:50%;margin:4px"/><br/><sub><b>antara5603</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/yatri28"><img src="https://avatars.githubusercontent.com/yatri28?s=64" width="52" height="52" alt="yatri28" style="border-radius:50%;margin:4px"/><br/><sub><b>yatri28</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/shyam-medh"><img src="https://avatars.githubusercontent.com/shyam-medh?s=64" width="52" height="52" alt="shyam-medh" style="border-radius:50%;margin:4px"/><br/><sub><b>shyam-medh</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/riddhimagupta2"><img src="https://avatars.githubusercontent.com/riddhimagupta2?s=64" width="52" height="52" alt="riddhimagupta2" style="border-radius:50%;margin:4px"/><br/><sub><b>riddhimagupta2</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/nishiagarwal2006-lang"><img src="https://avatars.githubusercontent.com/nishiagarwal2006-lang?s=64" width="52" height="52" alt="nishiagarwal2006-lang" style="border-radius:50%;margin:4px"/><br/><sub><b>nishiagarwal2006-lang</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/krutthiikaaa"><img src="https://avatars.githubusercontent.com/krutthiikaaa?s=64" width="52" height="52" alt="krutthiikaaa" style="border-radius:50%;margin:4px"/><br/><sub><b>krutthiikaaa</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/jayesh-durge"><img src="https://avatars.githubusercontent.com/jayesh-durge?s=64" width="52" height="52" alt="jayesh-durge" style="border-radius:50%;margin:4px"/><br/><sub><b>jayesh-durge</b></sub><br/><sub>7 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/himadri721"><img src="https://avatars.githubusercontent.com/himadri721?s=64" width="52" height="52" alt="himadri721" style="border-radius:50%;margin:4px"/><br/><sub><b>himadri721</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/saurabhhhcodes"><img src="https://avatars.githubusercontent.com/saurabhhhcodes?s=64" width="52" height="52" alt="saurabhhhcodes" style="border-radius:50%;margin:4px"/><br/><sub><b>saurabhhhcodes</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/Rakshita006"><img src="https://avatars.githubusercontent.com/Rakshita006?s=64" width="52" height="52" alt="Rakshita006" style="border-radius:50%;margin:4px"/><br/><sub><b>Rakshita006</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/Mehul5124"><img src="https://avatars.githubusercontent.com/Mehul5124?s=64" width="52" height="52" alt="Mehul5124" style="border-radius:50%;margin:4px"/><br/><sub><b>Mehul5124</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/aryanmalhotraug25-hash"><img src="https://avatars.githubusercontent.com/aryanmalhotraug25-hash?s=64" width="52" height="52" alt="aryanmalhotraug25-hash" style="border-radius:50%;margin:4px"/><br/><sub><b>aryanmalhotraug25-hash</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/harshap0"><img src="https://avatars.githubusercontent.com/harshap0?s=64" width="52" height="52" alt="harshap0" style="border-radius:50%;margin:4px"/><br/><sub><b>harshap0</b></sub><br/><sub>7 commits</sub></a></td><td align="center"><a href="https://github.com/Diya-od"><img src="https://avatars.githubusercontent.com/Diya-od?s=64" width="52" height="52" alt="Diya-od" style="border-radius:50%;margin:4px"/><br/><sub><b>Diya-od</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/aisshwaryaa8-collab"><img src="https://avatars.githubusercontent.com/aisshwaryaa8-collab?s=64" width="52" height="52" alt="aisshwaryaa8-collab" style="border-radius:50%;margin:4px"/><br/><sub><b>aisshwaryaa8-collab</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/anshithayeruva"><img src="https://avatars.githubusercontent.com/anshithayeruva?s=64" width="52" height="52" alt="anshithayeruva" style="border-radius:50%;margin:4px"/><br/><sub><b>anshithayeruva</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/gowrishvarma2003"><img src="https://avatars.githubusercontent.com/gowrishvarma2003?s=64" width="52" height="52" alt="gowrishvarma2003" style="border-radius:50%;margin:4px"/><br/><sub><b>gowrishvarma2003</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/hrshjswniii"><img src="https://avatars.githubusercontent.com/hrshjswniii?s=64" width="52" height="52" alt="hrshjswniii" style="border-radius:50%;margin:4px"/><br/><sub><b>hrshjswniii</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/monushah108"><img src="https://avatars.githubusercontent.com/monushah108?s=64" width="52" height="52" alt="monushah108" style="border-radius:50%;margin:4px"/><br/><sub><b>monushah108</b></sub><br/><sub>6 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/shahabhilash"><img src="https://avatars.githubusercontent.com/shahabhilash?s=64" width="52" height="52" alt="shahabhilash" style="border-radius:50%;margin:4px"/><br/><sub><b>shahabhilash</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/mohamedfahim18"><img src="https://avatars.githubusercontent.com/mohamedfahim18?s=64" width="52" height="52" alt="mohamedfahim18" style="border-radius:50%;margin:4px"/><br/><sub><b>mohamedfahim18</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/lahari465"><img src="https://avatars.githubusercontent.com/lahari465?s=64" width="52" height="52" alt="lahari465" style="border-radius:50%;margin:4px"/><br/><sub><b>lahari465</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/Anmol-Srivastava-073"><img src="https://avatars.githubusercontent.com/Anmol-Srivastava-073?s=64" width="52" height="52" alt="Anmol-Srivastava-073" style="border-radius:50%;margin:4px"/><br/><sub><b>Anmol-Srivastava-073</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/Hemant-kalia"><img src="https://avatars.githubusercontent.com/Hemant-kalia?s=64" width="52" height="52" alt="Hemant-kalia" style="border-radius:50%;margin:4px"/><br/><sub><b>Hemant-kalia</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/Alishaa-987"><img src="https://avatars.githubusercontent.com/Alishaa-987?s=64" width="52" height="52" alt="Alishaa-987" style="border-radius:50%;margin:4px"/><br/><sub><b>Alishaa-987</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/Akhileswar6"><img src="https://avatars.githubusercontent.com/Akhileswar6?s=64" width="52" height="52" alt="Akhileswar6" style="border-radius:50%;margin:4px"/><br/><sub><b>Akhileswar6</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/Khushii-exe"><img src="https://avatars.githubusercontent.com/Khushii-exe?s=64" width="52" height="52" alt="Khushii-exe" style="border-radius:50%;margin:4px"/><br/><sub><b>Khushii-exe</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/Mansi0905"><img src="https://avatars.githubusercontent.com/Mansi0905?s=64" width="52" height="52" alt="Mansi0905" style="border-radius:50%;margin:4px"/><br/><sub><b>Mansi0905</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/mokshikabhardwaj29"><img src="https://avatars.githubusercontent.com/mokshikabhardwaj29?s=64" width="52" height="52" alt="mokshikabhardwaj29" style="border-radius:50%;margin:4px"/><br/><sub><b>mokshikabhardwaj29</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/Muskan-S123"><img src="https://avatars.githubusercontent.com/Muskan-S123?s=64" width="52" height="52" alt="Muskan-S123" style="border-radius:50%;margin:4px"/><br/><sub><b>Muskan-S123</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/ParulPatil26"><img src="https://avatars.githubusercontent.com/ParulPatil26?s=64" width="52" height="52" alt="ParulPatil26" style="border-radius:50%;margin:4px"/><br/><sub><b>ParulPatil26</b></sub><br/><sub>6 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Piyush4801"><img src="https://avatars.githubusercontent.com/Piyush4801?s=64" width="52" height="52" alt="Piyush4801" style="border-radius:50%;margin:4px"/><br/><sub><b>Piyush4801</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/ShamrithaGS"><img src="https://avatars.githubusercontent.com/ShamrithaGS?s=64" width="52" height="52" alt="ShamrithaGS" style="border-radius:50%;margin:4px"/><br/><sub><b>ShamrithaGS</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/RehanAhmad25"><img src="https://avatars.githubusercontent.com/RehanAhmad25?s=64" width="52" height="52" alt="RehanAhmad25" style="border-radius:50%;margin:4px"/><br/><sub><b>RehanAhmad25</b></sub><br/><sub>6 commits</sub></a></td><td align="center"><a href="https://github.com/darshiB27"><img src="https://avatars.githubusercontent.com/darshiB27?s=64" width="52" height="52" alt="darshiB27" style="border-radius:50%;margin:4px"/><br/><sub><b>darshiB27</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/YerraguntaAjayKumar"><img src="https://avatars.githubusercontent.com/YerraguntaAjayKumar?s=64" width="52" height="52" alt="YerraguntaAjayKumar" style="border-radius:50%;margin:4px"/><br/><sub><b>YerraguntaAjayKumar</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/boss477"><img src="https://avatars.githubusercontent.com/boss477?s=64" width="52" height="52" alt="boss477" style="border-radius:50%;margin:4px"/><br/><sub><b>boss477</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/karthikeyakakarlapudi2007"><img src="https://avatars.githubusercontent.com/karthikeyakakarlapudi2007?s=64" width="52" height="52" alt="karthikeyakakarlapudi2007" style="border-radius:50%;margin:4px"/><br/><sub><b>karthikeyakakarlapudi2007</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/kavin553"><img src="https://avatars.githubusercontent.com/kavin553?s=64" width="52" height="52" alt="kavin553" style="border-radius:50%;margin:4px"/><br/><sub><b>kavin553</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/rishikareddy771"><img src="https://avatars.githubusercontent.com/rishikareddy771?s=64" width="52" height="52" alt="rishikareddy771" style="border-radius:50%;margin:4px"/><br/><sub><b>rishikareddy771</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/udaycodespace"><img src="https://avatars.githubusercontent.com/udaycodespace?s=64" width="52" height="52" alt="udaycodespace" style="border-radius:50%;margin:4px"/><br/><sub><b>udaycodespace</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/unnatipandey19"><img src="https://avatars.githubusercontent.com/unnatipandey19?s=64" width="52" height="52" alt="unnatipandey19" style="border-radius:50%;margin:4px"/><br/><sub><b>unnatipandey19</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/vs-learner-chhavi"><img src="https://avatars.githubusercontent.com/vs-learner-chhavi?s=64" width="52" height="52" alt="vs-learner-chhavi" style="border-radius:50%;margin:4px"/><br/><sub><b>vs-learner-chhavi</b></sub><br/><sub>5 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/aryan-nmaurya"><img src="https://avatars.githubusercontent.com/aryan-nmaurya?s=64" width="52" height="52" alt="aryan-nmaurya" style="border-radius:50%;margin:4px"/><br/><sub><b>aryan-nmaurya</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/itsLohith01"><img src="https://avatars.githubusercontent.com/itsLohith01?s=64" width="52" height="52" alt="itsLohith01" style="border-radius:50%;margin:4px"/><br/><sub><b>itsLohith01</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/Siddhi-Kapoor"><img src="https://avatars.githubusercontent.com/Siddhi-Kapoor?s=64" width="52" height="52" alt="Siddhi-Kapoor" style="border-radius:50%;margin:4px"/><br/><sub><b>Siddhi-Kapoor</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/gaurav123-4"><img src="https://avatars.githubusercontent.com/gaurav123-4?s=64" width="52" height="52" alt="gaurav123-4" style="border-radius:50%;margin:4px"/><br/><sub><b>gaurav123-4</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/himanshursingh21-cloud"><img src="https://avatars.githubusercontent.com/himanshursingh21-cloud?s=64" width="52" height="52" alt="himanshursingh21-cloud" style="border-radius:50%;margin:4px"/><br/><sub><b>himanshursingh21-cloud</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/bh462007"><img src="https://avatars.githubusercontent.com/bh462007?s=64" width="52" height="52" alt="bh462007" style="border-radius:50%;margin:4px"/><br/><sub><b>bh462007</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/Lehana02"><img src="https://avatars.githubusercontent.com/Lehana02?s=64" width="52" height="52" alt="Lehana02" style="border-radius:50%;margin:4px"/><br/><sub><b>Lehana02</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/Luffy-456"><img src="https://avatars.githubusercontent.com/Luffy-456?s=64" width="52" height="52" alt="Luffy-456" style="border-radius:50%;margin:4px"/><br/><sub><b>Luffy-456</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/AgnusSerena"><img src="https://avatars.githubusercontent.com/AgnusSerena?s=64" width="52" height="52" alt="AgnusSerena" style="border-radius:50%;margin:4px"/><br/><sub><b>AgnusSerena</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/one8alpha"><img src="https://avatars.githubusercontent.com/one8alpha?s=64" width="52" height="52" alt="one8alpha" style="border-radius:50%;margin:4px"/><br/><sub><b>one8alpha</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/nityanara"><img src="https://avatars.githubusercontent.com/nityanara?s=64" width="52" height="52" alt="nityanara" style="border-radius:50%;margin:4px"/><br/><sub><b>nityanara</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/vaddempuditejaswini30-star"><img src="https://avatars.githubusercontent.com/vaddempuditejaswini30-star?s=64" width="52" height="52" alt="vaddempuditejaswini30-star" style="border-radius:50%;margin:4px"/><br/><sub><b>vaddempuditejaswini30-star</b></sub><br/><sub>5 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Shruti1420"><img src="https://avatars.githubusercontent.com/Shruti1420?s=64" width="52" height="52" alt="Shruti1420" style="border-radius:50%;margin:4px"/><br/><sub><b>Shruti1420</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/ShafinNigamana"><img src="https://avatars.githubusercontent.com/ShafinNigamana?s=64" width="52" height="52" alt="ShafinNigamana" style="border-radius:50%;margin:4px"/><br/><sub><b>ShafinNigamana</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/Sai-Ramya-prog"><img src="https://avatars.githubusercontent.com/Sai-Ramya-prog?s=64" width="52" height="52" alt="Sai-Ramya-prog" style="border-radius:50%;margin:4px"/><br/><sub><b>Sai-Ramya-prog</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/SAMJOD07-devz"><img src="https://avatars.githubusercontent.com/SAMJOD07-devz?s=64" width="52" height="52" alt="SAMJOD07-devz" style="border-radius:50%;margin:4px"/><br/><sub><b>SAMJOD07-devz</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/PojashriJM"><img src="https://avatars.githubusercontent.com/PojashriJM?s=64" width="52" height="52" alt="PojashriJM" style="border-radius:50%;margin:4px"/><br/><sub><b>PojashriJM</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/PalashKulkarni"><img src="https://avatars.githubusercontent.com/PalashKulkarni?s=64" width="52" height="52" alt="PalashKulkarni" style="border-radius:50%;margin:4px"/><br/><sub><b>PalashKulkarni</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/Namratha36"><img src="https://avatars.githubusercontent.com/Namratha36?s=64" width="52" height="52" alt="Namratha36" style="border-radius:50%;margin:4px"/><br/><sub><b>Namratha36</b></sub><br/><sub>5 commits</sub></a></td><td align="center"><a href="https://github.com/pushtikadia"><img src="https://avatars.githubusercontent.com/pushtikadia?s=64" width="52" height="52" alt="pushtikadia" style="border-radius:50%;margin:4px"/><br/><sub><b>pushtikadia</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/Hridayesh68"><img src="https://avatars.githubusercontent.com/Hridayesh68?s=64" width="52" height="52" alt="Hridayesh68" style="border-radius:50%;margin:4px"/><br/><sub><b>Hridayesh68</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/renoschubert"><img src="https://avatars.githubusercontent.com/renoschubert?s=64" width="52" height="52" alt="renoschubert" style="border-radius:50%;margin:4px"/><br/><sub><b>renoschubert</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/Yazhini74"><img src="https://avatars.githubusercontent.com/Yazhini74?s=64" width="52" height="52" alt="Yazhini74" style="border-radius:50%;margin:4px"/><br/><sub><b>Yazhini74</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/ida-jemi"><img src="https://avatars.githubusercontent.com/ida-jemi?s=64" width="52" height="52" alt="ida-jemi" style="border-radius:50%;margin:4px"/><br/><sub><b>ida-jemi</b></sub><br/><sub>4 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/bhanuvarma045"><img src="https://avatars.githubusercontent.com/bhanuvarma045?s=64" width="52" height="52" alt="bhanuvarma045" style="border-radius:50%;margin:4px"/><br/><sub><b>bhanuvarma045</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/Sreeya-kumari"><img src="https://avatars.githubusercontent.com/Sreeya-kumari?s=64" width="52" height="52" alt="Sreeya-kumari" style="border-radius:50%;margin:4px"/><br/><sub><b>Sreeya-kumari</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/SRSoham"><img src="https://avatars.githubusercontent.com/SRSoham?s=64" width="52" height="52" alt="SRSoham" style="border-radius:50%;margin:4px"/><br/><sub><b>SRSoham</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/ritikamahato924"><img src="https://avatars.githubusercontent.com/ritikamahato924?s=64" width="52" height="52" alt="ritikamahato924" style="border-radius:50%;margin:4px"/><br/><sub><b>ritikamahato924</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/prastutirai847-design"><img src="https://avatars.githubusercontent.com/prastutirai847-design?s=64" width="52" height="52" alt="prastutirai847-design" style="border-radius:50%;margin:4px"/><br/><sub><b>prastutirai847-design</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/Pallavi960"><img src="https://avatars.githubusercontent.com/Pallavi960?s=64" width="52" height="52" alt="Pallavi960" style="border-radius:50%;margin:4px"/><br/><sub><b>Pallavi960</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/Paawangarg1084"><img src="https://avatars.githubusercontent.com/Paawangarg1084?s=64" width="52" height="52" alt="Paawangarg1084" style="border-radius:50%;margin:4px"/><br/><sub><b>Paawangarg1084</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/Nikitasoni22"><img src="https://avatars.githubusercontent.com/Nikitasoni22?s=64" width="52" height="52" alt="Nikitasoni22" style="border-radius:50%;margin:4px"/><br/><sub><b>Nikitasoni22</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/Asifmd45"><img src="https://avatars.githubusercontent.com/Asifmd45?s=64" width="52" height="52" alt="Asifmd45" style="border-radius:50%;margin:4px"/><br/><sub><b>Asifmd45</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/JoyceHanan"><img src="https://avatars.githubusercontent.com/JoyceHanan?s=64" width="52" height="52" alt="JoyceHanan" style="border-radius:50%;margin:4px"/><br/><sub><b>JoyceHanan</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/GaganGoyal2008"><img src="https://avatars.githubusercontent.com/GaganGoyal2008?s=64" width="52" height="52" alt="GaganGoyal2008" style="border-radius:50%;margin:4px"/><br/><sub><b>GaganGoyal2008</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/keerthana266"><img src="https://avatars.githubusercontent.com/keerthana266?s=64" width="52" height="52" alt="keerthana266" style="border-radius:50%;margin:4px"/><br/><sub><b>keerthana266</b></sub><br/><sub>4 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/BatoolAmina"><img src="https://avatars.githubusercontent.com/BatoolAmina?s=64" width="52" height="52" alt="BatoolAmina" style="border-radius:50%;margin:4px"/><br/><sub><b>BatoolAmina</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/Hima451"><img src="https://avatars.githubusercontent.com/Hima451?s=64" width="52" height="52" alt="Hima451" style="border-radius:50%;margin:4px"/><br/><sub><b>Hima451</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/Abhinav21Chauhan"><img src="https://avatars.githubusercontent.com/Abhinav21Chauhan?s=64" width="52" height="52" alt="Abhinav21Chauhan" style="border-radius:50%;margin:4px"/><br/><sub><b>Abhinav21Chauhan</b></sub><br/><sub>4 commits</sub></a></td><td align="center"><a href="https://github.com/karrisanthoshigayatri"><img src="https://avatars.githubusercontent.com/karrisanthoshigayatri?s=64" width="52" height="52" alt="karrisanthoshigayatri" style="border-radius:50%;margin:4px"/><br/><sub><b>karrisanthoshigayatri</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/jigyashujaiswal-45"><img src="https://avatars.githubusercontent.com/jigyashujaiswal-45?s=64" width="52" height="52" alt="jigyashujaiswal-45" style="border-radius:50%;margin:4px"/><br/><sub><b>jigyashujaiswal-45</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/buildwithnisha"><img src="https://avatars.githubusercontent.com/buildwithnisha?s=64" width="52" height="52" alt="buildwithnisha" style="border-radius:50%;margin:4px"/><br/><sub><b>buildwithnisha</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Maqbool61"><img src="https://avatars.githubusercontent.com/Maqbool61?s=64" width="52" height="52" alt="Maqbool61" style="border-radius:50%;margin:4px"/><br/><sub><b>Maqbool61</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/YASHK-arch"><img src="https://avatars.githubusercontent.com/YASHK-arch?s=64" width="52" height="52" alt="YASHK-arch" style="border-radius:50%;margin:4px"/><br/><sub><b>YASHK-arch</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Y-o-ULA"><img src="https://avatars.githubusercontent.com/Y-o-ULA?s=64" width="52" height="52" alt="Y-o-ULA" style="border-radius:50%;margin:4px"/><br/><sub><b>Y-o-ULA</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/likhithsai007"><img src="https://avatars.githubusercontent.com/likhithsai007?s=64" width="52" height="52" alt="likhithsai007" style="border-radius:50%;margin:4px"/><br/><sub><b>likhithsai007</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/lokeshkumar69"><img src="https://avatars.githubusercontent.com/lokeshkumar69?s=64" width="52" height="52" alt="lokeshkumar69" style="border-radius:50%;margin:4px"/><br/><sub><b>lokeshkumar69</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/mythri2405"><img src="https://avatars.githubusercontent.com/mythri2405?s=64" width="52" height="52" alt="mythri2405" style="border-radius:50%;margin:4px"/><br/><sub><b>mythri2405</b></sub><br/><sub>3 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Pranathi-Kunjeti"><img src="https://avatars.githubusercontent.com/Pranathi-Kunjeti?s=64" width="52" height="52" alt="Pranathi-Kunjeti" style="border-radius:50%;margin:4px"/><br/><sub><b>Pranathi-Kunjeti</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/samikshapatil5"><img src="https://avatars.githubusercontent.com/samikshapatil5?s=64" width="52" height="52" alt="samikshapatil5" style="border-radius:50%;margin:4px"/><br/><sub><b>samikshapatil5</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/sam987-dek"><img src="https://avatars.githubusercontent.com/sam987-dek?s=64" width="52" height="52" alt="sam987-dek" style="border-radius:50%;margin:4px"/><br/><sub><b>sam987-dek</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/shakilathasneem9"><img src="https://avatars.githubusercontent.com/shakilathasneem9?s=64" width="52" height="52" alt="shakilathasneem9" style="border-radius:50%;margin:4px"/><br/><sub><b>shakilathasneem9</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/vs-tries-to-code"><img src="https://avatars.githubusercontent.com/vs-tries-to-code?s=64" width="52" height="52" alt="vs-tries-to-code" style="border-radius:50%;margin:4px"/><br/><sub><b>vs-tries-to-code</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/vyshnavivardireddy"><img src="https://avatars.githubusercontent.com/vyshnavivardireddy?s=64" width="52" height="52" alt="vyshnavivardireddy" style="border-radius:50%;margin:4px"/><br/><sub><b>vyshnavivardireddy</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/25032007"><img src="https://avatars.githubusercontent.com/25032007?s=64" width="52" height="52" alt="25032007" style="border-radius:50%;margin:4px"/><br/><sub><b>25032007</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Ankitjsr-dev05"><img src="https://avatars.githubusercontent.com/Ankitjsr-dev05?s=64" width="52" height="52" alt="Ankitjsr-dev05" style="border-radius:50%;margin:4px"/><br/><sub><b>Ankitjsr-dev05</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/aanyabansal-22"><img src="https://avatars.githubusercontent.com/aanyabansal-22?s=64" width="52" height="52" alt="aanyabansal-22" style="border-radius:50%;margin:4px"/><br/><sub><b>aanyabansal-22</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Aditya-deshmukh-1410"><img src="https://avatars.githubusercontent.com/Aditya-deshmukh-1410?s=64" width="52" height="52" alt="Aditya-deshmukh-1410" style="border-radius:50%;margin:4px"/><br/><sub><b>Aditya-deshmukh-1410</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/alisha-khan6"><img src="https://avatars.githubusercontent.com/alisha-khan6?s=64" width="52" height="52" alt="alisha-khan6" style="border-radius:50%;margin:4px"/><br/><sub><b>alisha-khan6</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Anshu2607-iiitr"><img src="https://avatars.githubusercontent.com/Anshu2607-iiitr?s=64" width="52" height="52" alt="Anshu2607-iiitr" style="border-radius:50%;margin:4px"/><br/><sub><b>Anshu2607-iiitr</b></sub><br/><sub>3 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/anurag5603"><img src="https://avatars.githubusercontent.com/anurag5603?s=64" width="52" height="52" alt="anurag5603" style="border-radius:50%;margin:4px"/><br/><sub><b>anurag5603</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Bhoomikakaushik"><img src="https://avatars.githubusercontent.com/Bhoomikakaushik?s=64" width="52" height="52" alt="Bhoomikakaushik" style="border-radius:50%;margin:4px"/><br/><sub><b>Bhoomikakaushik</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/Christina1507"><img src="https://avatars.githubusercontent.com/Christina1507?s=64" width="52" height="52" alt="Christina1507" style="border-radius:50%;margin:4px"/><br/><sub><b>Christina1507</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/sdeepika-2606"><img src="https://avatars.githubusercontent.com/sdeepika-2606?s=64" width="52" height="52" alt="sdeepika-2606" style="border-radius:50%;margin:4px"/><br/><sub><b>sdeepika-2606</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/DharshiniPujarolla"><img src="https://avatars.githubusercontent.com/DharshiniPujarolla?s=64" width="52" height="52" alt="DharshiniPujarolla" style="border-radius:50%;margin:4px"/><br/><sub><b>DharshiniPujarolla</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/RosheshChaware"><img src="https://avatars.githubusercontent.com/RosheshChaware?s=64" width="52" height="52" alt="RosheshChaware" style="border-radius:50%;margin:4px"/><br/><sub><b>RosheshChaware</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/saii-Abburi"><img src="https://avatars.githubusercontent.com/saii-Abburi?s=64" width="52" height="52" alt="saii-Abburi" style="border-radius:50%;margin:4px"/><br/><sub><b>saii-Abburi</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/sasikiranambati"><img src="https://avatars.githubusercontent.com/sasikiranambati?s=64" width="52" height="52" alt="sasikiranambati" style="border-radius:50%;margin:4px"/><br/><sub><b>sasikiranambati</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/sathvika32427"><img src="https://avatars.githubusercontent.com/sathvika32427?s=64" width="52" height="52" alt="sathvika32427" style="border-radius:50%;margin:4px"/><br/><sub><b>sathvika32427</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/sudeekshaballanda-hub"><img src="https://avatars.githubusercontent.com/sudeekshaballanda-hub?s=64" width="52" height="52" alt="sudeekshaballanda-hub" style="border-radius:50%;margin:4px"/><br/><sub><b>sudeekshaballanda-hub</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/swastiksinha1"><img src="https://avatars.githubusercontent.com/swastiksinha1?s=64" width="52" height="52" alt="swastiksinha1" style="border-radius:50%;margin:4px"/><br/><sub><b>swastiksinha1</b></sub><br/><sub>3 commits</sub></a></td><td align="center"><a href="https://github.com/vivek0369"><img src="https://avatars.githubusercontent.com/vivek0369?s=64" width="52" height="52" alt="vivek0369" style="border-radius:50%;margin:4px"/><br/><sub><b>vivek0369</b></sub><br/><sub>3 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Vishvadharman"><img src="https://avatars.githubusercontent.com/Vishvadharman?s=64" width="52" height="52" alt="Vishvadharman" style="border-radius:50%;margin:4px"/><br/><sub><b>Vishvadharman</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Vrutik-0"><img src="https://avatars.githubusercontent.com/Vrutik-0?s=64" width="52" height="52" alt="Vrutik-0" style="border-radius:50%;margin:4px"/><br/><sub><b>Vrutik-0</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/abhi-nav-25"><img src="https://avatars.githubusercontent.com/abhi-nav-25?s=64" width="52" height="52" alt="abhi-nav-25" style="border-radius:50%;margin:4px"/><br/><sub><b>abhi-nav-25</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/adittya-code"><img src="https://avatars.githubusercontent.com/adittya-code?s=64" width="52" height="52" alt="adittya-code" style="border-radius:50%;margin:4px"/><br/><sub><b>adittya-code</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/gamana618"><img src="https://avatars.githubusercontent.com/gamana618?s=64" width="52" height="52" alt="gamana618" style="border-radius:50%;margin:4px"/><br/><sub><b>gamana618</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/hari2k7"><img src="https://avatars.githubusercontent.com/hari2k7?s=64" width="52" height="52" alt="hari2k7" style="border-radius:50%;margin:4px"/><br/><sub><b>hari2k7</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/vikasverma101"><img src="https://avatars.githubusercontent.com/vikasverma101?s=64" width="52" height="52" alt="vikasverma101" style="border-radius:50%;margin:4px"/><br/><sub><b>vikasverma101</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Sweksha-Kakkar"><img src="https://avatars.githubusercontent.com/Sweksha-Kakkar?s=64" width="52" height="52" alt="Sweksha-Kakkar" style="border-radius:50%;margin:4px"/><br/><sub><b>Sweksha-Kakkar</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/SuraviGhosh45"><img src="https://avatars.githubusercontent.com/SuraviGhosh45?s=64" width="52" height="52" alt="SuraviGhosh45" style="border-radius:50%;margin:4px"/><br/><sub><b>SuraviGhosh45</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/siri-004"><img src="https://avatars.githubusercontent.com/siri-004?s=64" width="52" height="52" alt="siri-004" style="border-radius:50%;margin:4px"/><br/><sub><b>siri-004</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/sinchana-aiml"><img src="https://avatars.githubusercontent.com/sinchana-aiml?s=64" width="52" height="52" alt="sinchana-aiml" style="border-radius:50%;margin:4px"/><br/><sub><b>sinchana-aiml</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Sargam-Ghagre"><img src="https://avatars.githubusercontent.com/Sargam-Ghagre?s=64" width="52" height="52" alt="Sargam-Ghagre" style="border-radius:50%;margin:4px"/><br/><sub><b>Sargam-Ghagre</b></sub><br/><sub>2 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/SaiRishithaK"><img src="https://avatars.githubusercontent.com/SaiRishithaK?s=64" width="52" height="52" alt="SaiRishithaK" style="border-radius:50%;margin:4px"/><br/><sub><b>SaiRishithaK</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/24CS059Aemi"><img src="https://avatars.githubusercontent.com/24CS059Aemi?s=64" width="52" height="52" alt="24CS059Aemi" style="border-radius:50%;margin:4px"/><br/><sub><b>24CS059Aemi</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/harshacodes0"><img src="https://avatars.githubusercontent.com/harshacodes0?s=64" width="52" height="52" alt="harshacodes0" style="border-radius:50%;margin:4px"/><br/><sub><b>harshacodes0</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/navdeep214"><img src="https://avatars.githubusercontent.com/navdeep214?s=64" width="52" height="52" alt="navdeep214" style="border-radius:50%;margin:4px"/><br/><sub><b>navdeep214</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/niharikasinghchaudhary"><img src="https://avatars.githubusercontent.com/niharikasinghchaudhary?s=64" width="52" height="52" alt="niharikasinghchaudhary" style="border-radius:50%;margin:4px"/><br/><sub><b>niharikasinghchaudhary</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/nileshtripathy"><img src="https://avatars.githubusercontent.com/nileshtripathy?s=64" width="52" height="52" alt="nileshtripathy" style="border-radius:50%;margin:4px"/><br/><sub><b>nileshtripathy</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/piyushsinghania06-hub"><img src="https://avatars.githubusercontent.com/piyushsinghania06-hub?s=64" width="52" height="52" alt="piyushsinghania06-hub" style="border-radius:50%;margin:4px"/><br/><sub><b>piyushsinghania06-hub</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/shivanisreejith1"><img src="https://avatars.githubusercontent.com/shivanisreejith1?s=64" width="52" height="52" alt="shivanisreejith1" style="border-radius:50%;margin:4px"/><br/><sub><b>shivanisreejith1</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/sri6792"><img src="https://avatars.githubusercontent.com/sri6792?s=64" width="52" height="52" alt="sri6792" style="border-radius:50%;margin:4px"/><br/><sub><b>sri6792</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/srushti234oss"><img src="https://avatars.githubusercontent.com/srushti234oss?s=64" width="52" height="52" alt="srushti234oss" style="border-radius:50%;margin:4px"/><br/><sub><b>srushti234oss</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/sujeetkumar1425"><img src="https://avatars.githubusercontent.com/sujeetkumar1425?s=64" width="52" height="52" alt="sujeetkumar1425" style="border-radius:50%;margin:4px"/><br/><sub><b>sujeetkumar1425</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/tejasch2006-ux"><img src="https://avatars.githubusercontent.com/tejasch2006-ux?s=64" width="52" height="52" alt="tejasch2006-ux" style="border-radius:50%;margin:4px"/><br/><sub><b>tejasch2006-ux</b></sub><br/><sub>2 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/tigerkun"><img src="https://avatars.githubusercontent.com/tigerkun?s=64" width="52" height="52" alt="tigerkun" style="border-radius:50%;margin:4px"/><br/><sub><b>tigerkun</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/UjsGit"><img src="https://avatars.githubusercontent.com/UjsGit?s=64" width="52" height="52" alt="UjsGit" style="border-radius:50%;margin:4px"/><br/><sub><b>UjsGit</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/vaishnavi003-svg"><img src="https://avatars.githubusercontent.com/vaishnavi003-svg?s=64" width="52" height="52" alt="vaishnavi003-svg" style="border-radius:50%;margin:4px"/><br/><sub><b>vaishnavi003-svg</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/divyasharma-21"><img src="https://avatars.githubusercontent.com/divyasharma-21?s=64" width="52" height="52" alt="divyasharma-21" style="border-radius:50%;margin:4px"/><br/><sub><b>divyasharma-21</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/ishikamittal2002"><img src="https://avatars.githubusercontent.com/ishikamittal2002?s=64" width="52" height="52" alt="ishikamittal2002" style="border-radius:50%;margin:4px"/><br/><sub><b>ishikamittal2002</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Aditisingh0102"><img src="https://avatars.githubusercontent.com/Aditisingh0102?s=64" width="52" height="52" alt="Aditisingh0102" style="border-radius:50%;margin:4px"/><br/><sub><b>Aditisingh0102</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/akshatsinghai6682-sketch"><img src="https://avatars.githubusercontent.com/akshatsinghai6682-sketch?s=64" width="52" height="52" alt="akshatsinghai6682-sketch" style="border-radius:50%;margin:4px"/><br/><sub><b>akshatsinghai6682-sketch</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Akshu121796"><img src="https://avatars.githubusercontent.com/Akshu121796?s=64" width="52" height="52" alt="Akshu121796" style="border-radius:50%;margin:4px"/><br/><sub><b>Akshu121796</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Ananya-0711"><img src="https://avatars.githubusercontent.com/Ananya-0711?s=64" width="52" height="52" alt="Ananya-0711" style="border-radius:50%;margin:4px"/><br/><sub><b>Ananya-0711</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Anubhav-Ray"><img src="https://avatars.githubusercontent.com/Anubhav-Ray?s=64" width="52" height="52" alt="Anubhav-Ray" style="border-radius:50%;margin:4px"/><br/><sub><b>Anubhav-Ray</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/AnushKamble"><img src="https://avatars.githubusercontent.com/AnushKamble?s=64" width="52" height="52" alt="AnushKamble" style="border-radius:50%;margin:4px"/><br/><sub><b>AnushKamble</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Apurva-Lakhe"><img src="https://avatars.githubusercontent.com/Apurva-Lakhe?s=64" width="52" height="52" alt="Apurva-Lakhe" style="border-radius:50%;margin:4px"/><br/><sub><b>Apurva-Lakhe</b></sub><br/><sub>2 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Aribafatma"><img src="https://avatars.githubusercontent.com/Aribafatma?s=64" width="52" height="52" alt="Aribafatma" style="border-radius:50%;margin:4px"/><br/><sub><b>Aribafatma</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/aasheeshhh"><img src="https://avatars.githubusercontent.com/aasheeshhh?s=64" width="52" height="52" alt="aasheeshhh" style="border-radius:50%;margin:4px"/><br/><sub><b>aasheeshhh</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Avyakta-dev"><img src="https://avatars.githubusercontent.com/Avyakta-dev?s=64" width="52" height="52" alt="Avyakta-dev" style="border-radius:50%;margin:4px"/><br/><sub><b>Avyakta-dev</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/chethanamp22-tech"><img src="https://avatars.githubusercontent.com/chethanamp22-tech?s=64" width="52" height="52" alt="chethanamp22-tech" style="border-radius:50%;margin:4px"/><br/><sub><b>chethanamp22-tech</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/chhavisharmaofficial11-cs"><img src="https://avatars.githubusercontent.com/chhavisharmaofficial11-cs?s=64" width="52" height="52" alt="chhavisharmaofficial11-cs" style="border-radius:50%;margin:4px"/><br/><sub><b>chhavisharmaofficial11-cs</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/depurusrijahnavi-cloud"><img src="https://avatars.githubusercontent.com/depurusrijahnavi-cloud?s=64" width="52" height="52" alt="depurusrijahnavi-cloud" style="border-radius:50%;margin:4px"/><br/><sub><b>depurusrijahnavi-cloud</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/dhruvil-1207"><img src="https://avatars.githubusercontent.com/dhruvil-1207?s=64" width="52" height="52" alt="dhruvil-1207" style="border-radius:50%;margin:4px"/><br/><sub><b>dhruvil-1207</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/SHREYA-G-AMIN"><img src="https://avatars.githubusercontent.com/SHREYA-G-AMIN?s=64" width="52" height="52" alt="SHREYA-G-AMIN" style="border-radius:50%;margin:4px"/><br/><sub><b>SHREYA-G-AMIN</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Rohan-R07"><img src="https://avatars.githubusercontent.com/Rohan-R07?s=64" width="52" height="52" alt="Rohan-R07" style="border-radius:50%;margin:4px"/><br/><sub><b>Rohan-R07</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/revanthbaspally6-cell"><img src="https://avatars.githubusercontent.com/revanthbaspally6-cell?s=64" width="52" height="52" alt="revanthbaspally6-cell" style="border-radius:50%;margin:4px"/><br/><sub><b>revanthbaspally6-cell</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/ramya2006sri"><img src="https://avatars.githubusercontent.com/ramya2006sri?s=64" width="52" height="52" alt="ramya2006sri" style="border-radius:50%;margin:4px"/><br/><sub><b>ramya2006sri</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Pratik-kr21"><img src="https://avatars.githubusercontent.com/Pratik-kr21?s=64" width="52" height="52" alt="Pratik-kr21" style="border-radius:50%;margin:4px"/><br/><sub><b>Pratik-kr21</b></sub><br/><sub>2 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/pranav-ui215"><img src="https://avatars.githubusercontent.com/pranav-ui215?s=64" width="52" height="52" alt="pranav-ui215" style="border-radius:50%;margin:4px"/><br/><sub><b>pranav-ui215</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/prasanthipallagani9-ops"><img src="https://avatars.githubusercontent.com/prasanthipallagani9-ops?s=64" width="52" height="52" alt="prasanthipallagani9-ops" style="border-radius:50%;margin:4px"/><br/><sub><b>prasanthipallagani9-ops</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/NirmalSingh-09"><img src="https://avatars.githubusercontent.com/NirmalSingh-09?s=64" width="52" height="52" alt="NirmalSingh-09" style="border-radius:50%;margin:4px"/><br/><sub><b>NirmalSingh-09</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/jahnavigu"><img src="https://avatars.githubusercontent.com/jahnavigu?s=64" width="52" height="52" alt="jahnavigu" style="border-radius:50%;margin:4px"/><br/><sub><b>jahnavigu</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Jaswanth-Kumar-2007"><img src="https://avatars.githubusercontent.com/Jaswanth-Kumar-2007?s=64" width="52" height="52" alt="Jaswanth-Kumar-2007" style="border-radius:50%;margin:4px"/><br/><sub><b>Jaswanth-Kumar-2007</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Jeet-Srivastava"><img src="https://avatars.githubusercontent.com/Jeet-Srivastava?s=64" width="52" height="52" alt="Jeet-Srivastava" style="border-radius:50%;margin:4px"/><br/><sub><b>Jeet-Srivastava</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/kas2804"><img src="https://avatars.githubusercontent.com/kas2804?s=64" width="52" height="52" alt="kas2804" style="border-radius:50%;margin:4px"/><br/><sub><b>kas2804</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/NehaShrivastava-Tech"><img src="https://avatars.githubusercontent.com/NehaShrivastava-Tech?s=64" width="52" height="52" alt="NehaShrivastava-Tech" style="border-radius:50%;margin:4px"/><br/><sub><b>NehaShrivastava-Tech</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Naman-Bagoria17"><img src="https://avatars.githubusercontent.com/Naman-Bagoria17?s=64" width="52" height="52" alt="Naman-Bagoria17" style="border-radius:50%;margin:4px"/><br/><sub><b>Naman-Bagoria17</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Krishna009-pro"><img src="https://avatars.githubusercontent.com/Krishna009-pro?s=64" width="52" height="52" alt="Krishna009-pro" style="border-radius:50%;margin:4px"/><br/><sub><b>Krishna009-pro</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/Malhar-M"><img src="https://avatars.githubusercontent.com/Malhar-M?s=64" width="52" height="52" alt="Malhar-M" style="border-radius:50%;margin:4px"/><br/><sub><b>Malhar-M</b></sub><br/><sub>2 commits</sub></a></td><td align="center"><a href="https://github.com/talkox-tech"><img src="https://avatars.githubusercontent.com/talkox-tech?s=64" width="52" height="52" alt="talkox-tech" style="border-radius:50%;margin:4px"/><br/><sub><b>talkox-tech</b></sub><br/><sub>1 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/Himanshujha7"><img src="https://avatars.githubusercontent.com/Himanshujha7?s=64" width="52" height="52" alt="Himanshujha7" style="border-radius:50%;margin:4px"/><br/><sub><b>Himanshujha7</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/hematejaswi-30"><img src="https://avatars.githubusercontent.com/hematejaswi-30?s=64" width="52" height="52" alt="hematejaswi-30" style="border-radius:50%;margin:4px"/><br/><sub><b>hematejaswi-30</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/HarShada8G"><img src="https://avatars.githubusercontent.com/HarShada8G?s=64" width="52" height="52" alt="HarShada8G" style="border-radius:50%;margin:4px"/><br/><sub><b>HarShada8G</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Garcia-786"><img src="https://avatars.githubusercontent.com/Garcia-786?s=64" width="52" height="52" alt="Garcia-786" style="border-radius:50%;margin:4px"/><br/><sub><b>Garcia-786</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/divyanshisrivastava395"><img src="https://avatars.githubusercontent.com/divyanshisrivastava395?s=64" width="52" height="52" alt="divyanshisrivastava395" style="border-radius:50%;margin:4px"/><br/><sub><b>divyanshisrivastava395</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/DheergaMShetty"><img src="https://avatars.githubusercontent.com/DheergaMShetty?s=64" width="52" height="52" alt="DheergaMShetty" style="border-radius:50%;margin:4px"/><br/><sub><b>DheergaMShetty</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/devansh-nitb"><img src="https://avatars.githubusercontent.com/devansh-nitb?s=64" width="52" height="52" alt="devansh-nitb" style="border-radius:50%;margin:4px"/><br/><sub><b>devansh-nitb</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Dippp10-ally"><img src="https://avatars.githubusercontent.com/Dippp10-ally?s=64" width="52" height="52" alt="Dippp10-ally" style="border-radius:50%;margin:4px"/><br/><sub><b>Dippp10-ally</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/nishantpurohit04"><img src="https://avatars.githubusercontent.com/nishantpurohit04?s=64" width="52" height="52" alt="nishantpurohit04" style="border-radius:50%;margin:4px"/><br/><sub><b>nishantpurohit04</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/ChintaTejaswini"><img src="https://avatars.githubusercontent.com/ChintaTejaswini?s=64" width="52" height="52" alt="ChintaTejaswini" style="border-radius:50%;margin:4px"/><br/><sub><b>ChintaTejaswini</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/vibeetroot"><img src="https://avatars.githubusercontent.com/vibeetroot?s=64" width="52" height="52" alt="vibeetroot" style="border-radius:50%;margin:4px"/><br/><sub><b>vibeetroot</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/CSquareClub"><img src="https://avatars.githubusercontent.com/CSquareClub?s=64" width="52" height="52" alt="CSquareClub" style="border-radius:50%;margin:4px"/><br/><sub><b>CSquareClub</b></sub><br/><sub>1 commits</sub></a></td></tr>
<tr><td align="center"><a href="https://github.com/bhavyajain0810"><img src="https://avatars.githubusercontent.com/bhavyajain0810?s=64" width="52" height="52" alt="bhavyajain0810" style="border-radius:50%;margin:4px"/><br/><sub><b>bhavyajain0810</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/asxayush"><img src="https://avatars.githubusercontent.com/asxayush?s=64" width="52" height="52" alt="asxayush" style="border-radius:50%;margin:4px"/><br/><sub><b>asxayush</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Anup1dubey"><img src="https://avatars.githubusercontent.com/Anup1dubey?s=64" width="52" height="52" alt="Anup1dubey" style="border-radius:50%;margin:4px"/><br/><sub><b>Anup1dubey</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/anujvajha1804"><img src="https://avatars.githubusercontent.com/anujvajha1804?s=64" width="52" height="52" alt="anujvajha1804" style="border-radius:50%;margin:4px"/><br/><sub><b>anujvajha1804</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/anujsharma8d"><img src="https://avatars.githubusercontent.com/anujsharma8d?s=64" width="52" height="52" alt="anujsharma8d" style="border-radius:50%;margin:4px"/><br/><sub><b>anujsharma8d</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/anshul23102"><img src="https://avatars.githubusercontent.com/anshul23102?s=64" width="52" height="52" alt="anshul23102" style="border-radius:50%;margin:4px"/><br/><sub><b>anshul23102</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Akriti1331"><img src="https://avatars.githubusercontent.com/Akriti1331?s=64" width="52" height="52" alt="Akriti1331" style="border-radius:50%;margin:4px"/><br/><sub><b>Akriti1331</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/Akhand-Mishra-1"><img src="https://avatars.githubusercontent.com/Akhand-Mishra-1?s=64" width="52" height="52" alt="Akhand-Mishra-1" style="border-radius:50%;margin:4px"/><br/><sub><b>Akhand-Mishra-1</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/AkankshaYadav05"><img src="https://avatars.githubusercontent.com/AkankshaYadav05?s=64" width="52" height="52" alt="AkankshaYadav05" style="border-radius:50%;margin:4px"/><br/><sub><b>AkankshaYadav05</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/theblag"><img src="https://avatars.githubusercontent.com/theblag?s=64" width="52" height="52" alt="theblag" style="border-radius:50%;margin:4px"/><br/><sub><b>theblag</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/ANUSHREE-123-S"><img src="https://avatars.githubusercontent.com/ANUSHREE-123-S?s=64" width="52" height="52" alt="ANUSHREE-123-S" style="border-radius:50%;margin:4px"/><br/><sub><b>ANUSHREE-123-S</b></sub><br/><sub>1 commits</sub></a></td><td align="center"><a href="https://github.com/ADITYAKUSHWAHA7975"><img src="https://avatars.githubusercontent.com/ADITYAKUSHWAHA7975?s=64" width="52" height="52" alt="ADITYAKUSHWAHA7975" style="border-radius:50%;margin:4px"/><br/><sub><b>ADITYAKUSHWAHA7975</b></sub><br/><sub>1 commits</sub></a></td></tr>
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
