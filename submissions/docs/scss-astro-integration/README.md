# SCSS Integration Guide for Astro.build Projects

This guide explains how to integrate EaseMotion CSS with SCSS in an
Astro.build project — covering installation, variable mapping, mixin
usage, component scoping, and build optimisation.

---

## Prerequisites

- Node.js 18+
- An existing Astro project (`npm create astro@latest`)
- Basic familiarity with SCSS syntax

---

## 1. Install Dependencies

```bash
# Install Sass (Astro supports it natively — no plugin needed)
npm install -D sass

# Install EaseMotion CSS
npm install easemotion-css
```

Astro detects `.scss` files automatically once `sass` is installed.
No `astro.config.mjs` changes are required for basic usage.

---

## 2. Project Structure

Recommended folder layout for SCSS with EaseMotion in Astro:
src/

├── styles/

│ ├── \_variables.scss

│ ├── \_mixins.scss

│ ├── \_utilities.scss

│ └── global.scss

├── components/

│ ├── HeroSection.astro

│ └── Card.astro

└── layouts/

## └── Layout.astro

## 3. Global SCSS Setup

### src/styles/\_variables.scss

```scss
$ease-duration-fast: 150ms;
$ease-duration-base: 300ms;
$ease-duration-slow: 600ms;
$ease-duration-xslow: 1000ms;

$ease-in-out-smooth: cubic-bezier(0.4, 0, 0.2, 1);
$ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
$ease-snap: cubic-bezier(0.25, 0.46, 0.45, 0.94);

$ease-slide-distance: 24px;
$ease-skew-angle: 3deg;

$ease-primary: #6366f1;
$ease-primary-dark: #4f46e5;
$ease-surface: #1e293b;
$ease-border: rgba(255, 255, 255, 0.08);
```

### src/styles/\_mixins.scss

```scss
@use "variables" as v;

@mixin ease-animate(
  $name,
  $duration: v.$ease-duration-base,
  $easing: v.$ease-in-out-smooth,
  $delay: 0ms,
  $fill: both
) {
  animation: #{$name} $duration $easing $delay $fill;
}

@mixin ease-fade-up($duration: v.$ease-duration-base, $delay: 0ms) {
  opacity: 0;
  transform: translateY(v.$ease-slide-distance);
  @include ease-animate(ease-fade-up-kf, $duration, v.$ease-spring, $delay);

  @keyframes ease-fade-up-kf {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@mixin ease-stagger($base-delay: 100ms, $count: 6) {
  @for $i from 1 through $count {
    &:nth-child(#{$i}) {
      animation-delay: #{($i - 1) * $base-delay};
    }
  }
}

@mixin ease-hover-lift(
  $distance: 6px,
  $shadow: 0 20px 40px rgba(0, 0, 0, 0.3)
) {
  transition:
    transform v.$ease-duration-base v.$ease-snap,
    box-shadow v.$ease-duration-base v.$ease-snap;
  &:hover {
    transform: translateY(-#{$distance});
    box-shadow: $shadow;
  }
}

@mixin ease-safe-motion {
  @media (prefers-reduced-motion: no-preference) {
    @content;
  }
}
```

### src/styles/global.scss

```scss
@use "variables" as v;
@use "mixins" as m;
@use "easemotion-css/core" as *;

:root {
  --ease-duration-fast: #{v.$ease-duration-fast};
  --ease-duration-base: #{v.$ease-duration-base};
  --ease-duration-slow: #{v.$ease-duration-slow};
  --ease-primary: #{v.$ease-primary};
  --ease-surface: #{v.$ease-surface};
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 4. Load Global SCSS in Layout.astro

```astro
---
// src/layouts/Layout.astro
---
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{Astro.props.title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>

<style is:global lang="scss">
  @use '../styles/global.scss';
</style>
```

The `is:global` directive prevents Astro from scoping the styles to
the layout component making them available site-wide.

---

## 5. Using SCSS in Astro Components

### src/components/Card.astro

```astro
---
export interface Props {
  title: string;
  body:  string;
  delay?: number;
}
const { title, body, delay = 0 } = Astro.props;
---

<div class="card" style={`--delay: ${delay}ms`}>
  <h3>{title}</h3>
  <p>{body}</p>
</div>

<style lang="scss">
  @use '../styles/variables' as v;
  @use '../styles/mixins'    as m;

  .card {
    background:    v.$ease-surface;
    border:        1px solid v.$ease-border;
    border-radius: 12px;
    padding:       1.5rem;

    @include m.ease-safe-motion {
      @include m.ease-fade-up($delay: var(--delay, 0ms));
    }

    @include m.ease-hover-lift;

    h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; }
    p  { color: #64748b; font-size: 0.9rem; line-height: 1.6; }
  }
</style>
```

### src/components/HeroSection.astro

```astro
---
---

<section class="hero">
  <h1 class="hero-title">Build Faster with EaseMotion</h1>
  <p class="hero-sub">SCSS-powered animations for Astro projects.</p>
  <a class="hero-cta" href="#start">Get Started</a>
</section>

<style lang="scss">
  @use '../styles/variables' as v;
  @use '../styles/mixins'    as m;

  .hero {
    text-align: center;
    padding: 6rem 2rem;

    > * { @include m.ease-safe-motion { @include m.ease-fade-up; } }
    @include m.ease-stagger(120ms, 3);
  }

  .hero-title {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 900;
    color: #f0f4ff;
    margin-bottom: 1rem;
  }

  .hero-sub {
    color: #64748b;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .hero-cta {
    display: inline-block;
    background: v.$ease-primary;
    color: #fff;
    padding: 0.85rem 2rem;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
    transition: background v.$ease-duration-base v.$ease-snap,
                transform  v.$ease-duration-base v.$ease-snap;

    &:hover {
      background: v.$ease-primary-dark;
      transform: scale(1.04);
    }
  }
</style>
```

---

## 6. Astro Config — Advanced Options

```js
// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use 'src/styles/variables' as v;
            @use 'src/styles/mixins'    as m;
          `,
        },
      },
    },
  },
});
```

With `additionalData` you no longer need `@use` at the top of every
component — variables and mixins are available globally.

---

## 7. Build and Preview

```bash
npm run dev
npm run build
npm run preview
```

Astro automatically compiles SCSS, scopes component styles,
removes unused CSS in production, and inlines critical styles per page.

---

## 8. Common Issues and Fixes

| Issue                             | Cause                         | Fix                                |
| --------------------------------- | ----------------------------- | ---------------------------------- |
| Cannot find module sass           | Sass not installed            | npm install -D sass                |
| @use not resolving                | Wrong relative path           | Use correct ../ depth              |
| Styles leaking between components | Missing scope                 | Remove is:global                   |
| additionalData conflicts          | Double @use                   | Remove manual @use from components |
| Animation not playing             | prefers-reduced-motion active | Expected — accessibility respected |

---

## 9. Quick Reference

```scss
@include m.ease-fade-up($duration: 500ms, $delay: 200ms);
@include m.ease-stagger(100ms, 5);
@include m.ease-safe-motion {
  animation: myAnim 0.4s ease;
}
@include m.ease-hover-lift(8px);
```

---

## Files in This Submission

| File      | Purpose                                        |
| --------- | ---------------------------------------------- |
| README.md | This integration guide                         |
| demo.html | Visual preview of the patterns                 |
| style.css | Compiled output showing what the SCSS produces |
