# easemotion-scss — Standalone SCSS Package

Closes #23088 — Proposal and implementation guide for publishing the
EaseMotion CSS SCSS partials as a standalone npm package `easemotion-scss`.

---

## Overview

`easemotion-scss` is a standalone npm package that exposes all EaseMotion
CSS animation tokens, mixins, and utilities as SCSS partials. Developers
can import only what they need — no compiled CSS shipped, no runtime
overhead, full tree-shaking by default.

```bash
npm install easemotion-scss
```

---

## Package Structure

easemotion-scss/

├── package.json

├── README.md

├── index.scss # Main entry — forwards everything

├── scss/

│ ├── \_index.scss # Barrel file for @forward

│ ├── \_variables.scss # Duration, easing, colour tokens

│ ├── \_mixins.scss # Animation mixins

│ ├── \_utilities.scss # Utility classes (ease-fade-up etc.)

│ ├── \_keyframes.scss # @keyframes declarations

│ └── \_reset.scss # Optional motion-safe reset

└── dist/

## └── easemotion.css # Pre-compiled full CSS (optional CDN use)

## package.json

```json
{
  "name": "easemotion-scss",
  "version": "1.0.0",
  "description": "SCSS partials for EaseMotion CSS — tokens, mixins, and utilities",
  "main": "index.scss",
  "style": "dist/easemotion.css",
  "exports": {
    ".": "./index.scss",
    "./variables": "./scss/_variables.scss",
    "./mixins": "./scss/_mixins.scss",
    "./utilities": "./scss/_utilities.scss",
    "./keyframes": "./scss/_keyframes.scss",
    "./reset": "./scss/_reset.scss",
    "./dist/css": "./dist/easemotion.css"
  },
  "files": ["scss/", "dist/", "index.scss", "README.md"],
  "keywords": [
    "css",
    "scss",
    "sass",
    "animation",
    "easemotion",
    "transitions",
    "utilities",
    "motion",
    "keyframes"
  ],
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/SAPTARSHI-coder/EaseMotion-css"
  },
  "peerDependencies": {
    "sass": ">=1.50.0"
  }
}
```

---

## SCSS Partials

### scss/\_variables.scss

```scss
// ── Duration ─────────────────────────────────────────────────────
$ease-duration-instant: 100ms !default;
$ease-duration-fast: 150ms !default;
$ease-duration-base: 300ms !default;
$ease-duration-slow: 600ms !default;
$ease-duration-xslow: 1000ms !default;

// ── Easing ───────────────────────────────────────────────────────
$ease-linear: linear !default;
$ease-in: cubic-bezier(0.4, 0, 1, 1) !default;
$ease-out: cubic-bezier(0, 0, 0.2, 1) !default;
$ease-in-out: cubic-bezier(0.4, 0, 0.2, 1) !default;
$ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1) !default;
$ease-snap: cubic-bezier(0.25, 0.46, 0.45, 0.94) !default;
$ease-bounce: cubic-bezier(0.68, -0.55, 0.27, 1.55) !default;

// ── Motion scale ─────────────────────────────────────────────────
$ease-slide-sm: 12px !default;
$ease-slide-base: 24px !default;
$ease-slide-lg: 48px !default;
$ease-skew-base: 3deg !default;
$ease-skew-strong: 6deg !default;
$ease-scale-sm: 0.95 !default;
$ease-scale-base: 0.9 !default;

// ── Colour ───────────────────────────────────────────────────────
$ease-primary: #6366f1 !default;
$ease-primary-dark: #4f46e5 !default;
$ease-surface: #1e293b !default;
$ease-border: rgba(255, 255, 255, 0.08) !default;
$ease-text: #e2e8f0 !default;
$ease-muted: #64748b !default;
```

### scss/\_keyframes.scss

```scss
@keyframes ease-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes ease-fade-up {
  from {
    opacity: 0;
    transform: translateY(var(--ease-slide, 24px));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ease-fade-down {
  from {
    opacity: 0;
    transform: translateY(calc(var(--ease-slide, 24px) * -1));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ease-fade-left {
  from {
    opacity: 0;
    transform: translateX(var(--ease-slide, 24px));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes ease-fade-right {
  from {
    opacity: 0;
    transform: translateX(calc(var(--ease-slide, 24px) * -1));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes ease-zoom-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes ease-zoom-out {
  from {
    opacity: 0;
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes ease-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes ease-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

@keyframes ease-bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes ease-shake {
  0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-8px);
  }
  40%,
  80% {
    transform: translateX(8px);
  }
}
```

### scss/\_mixins.scss

```scss
@use "variables" as v;

// ── Core animate mixin ────────────────────────────────────────────
@mixin ease-animate(
  $name,
  $duration: v.$ease-duration-base,
  $easing: v.$ease-in-out,
  $delay: 0ms,
  $fill: both,
  $count: 1
) {
  animation-name: $name;
  animation-duration: $duration;
  animation-timing-function: $easing;
  animation-delay: $delay;
  animation-fill-mode: $fill;
  animation-iteration-count: $count;
}

// ── Directional fade mixins ───────────────────────────────────────
@mixin ease-fade-in($duration: v.$ease-duration-base, $delay: 0ms) {
  @include ease-animate(ease-fade-in, $duration, v.$ease-in-out, $delay);
}

@mixin ease-fade-up(
  $duration: v.$ease-duration-base,
  $delay: 0ms,
  $distance: v.$ease-slide-base
) {
  --ease-slide: #{$distance};
  opacity: 0;
  transform: translateY($distance);
  @include ease-animate(ease-fade-up, $duration, v.$ease-spring, $delay);
}

@mixin ease-fade-down($duration: v.$ease-duration-base, $delay: 0ms) {
  @include ease-animate(ease-fade-down, $duration, v.$ease-spring, $delay);
}

@mixin ease-fade-left($duration: v.$ease-duration-base, $delay: 0ms) {
  @include ease-animate(ease-fade-left, $duration, v.$ease-spring, $delay);
}

@mixin ease-fade-right($duration: v.$ease-duration-base, $delay: 0ms) {
  @include ease-animate(ease-fade-right, $duration, v.$ease-spring, $delay);
}

@mixin ease-zoom-in($duration: v.$ease-duration-base, $delay: 0ms) {
  @include ease-animate(ease-zoom-in, $duration, v.$ease-spring, $delay);
}

// ── Stagger nth-child ─────────────────────────────────────────────
@mixin ease-stagger($base-delay: 100ms, $count: 6) {
  @for $i from 1 through $count {
    &:nth-child(#{$i}) {
      animation-delay: #{($i - 1) * $base-delay};
    }
  }
}

// ── Hover interactions ────────────────────────────────────────────
@mixin ease-hover-lift(
  $distance: 6px,
  $shadow: 0 20px 40px rgba(0, 0, 0, 0.25)
) {
  transition:
    transform v.$ease-duration-base v.$ease-snap,
    box-shadow v.$ease-duration-base v.$ease-snap;
  &:hover {
    transform: translateY(-$distance);
    box-shadow: $shadow;
  }
}

@mixin ease-hover-scale($scale: 1.04) {
  transition: transform v.$ease-duration-base v.$ease-snap;
  &:hover {
    transform: scale($scale);
  }
}

@mixin ease-hover-glow($color: v.$ease-primary, $spread: 24px) {
  transition: box-shadow v.$ease-duration-base v.$ease-snap;
  &:hover {
    box-shadow: 0 0 $spread #{$color}60;
  }
}

// ── Transition shorthand ──────────────────────────────────────────
@mixin ease-transition(
  $props: all,
  $duration: v.$ease-duration-base,
  $easing: v.$ease-snap
) {
  transition: $props $duration $easing;
}

// ── Safe motion wrapper ───────────────────────────────────────────
@mixin ease-safe-motion {
  @media (prefers-reduced-motion: no-preference) {
    @content;
  }
}

// ── Reduced motion reset ──────────────────────────────────────────
@mixin ease-reduced-motion-reset {
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !default;
      transition-duration: 0.01ms !important;
    }
  }
}
```

### scss/\_utilities.scss

```scss
@use "variables" as v;
@use "keyframes";

// Utility classes that mirror the mixin output
.ease-fade-in {
  animation: ease-fade-in v.$ease-duration-base v.$ease-in-out both;
}
.ease-fade-up {
  animation: ease-fade-up v.$ease-duration-base v.$ease-spring both;
  opacity: 0;
  transform: translateY(v.$ease-slide-base);
}
.ease-fade-down {
  animation: ease-fade-down v.$ease-duration-base v.$ease-spring both;
}
.ease-zoom-in {
  animation: ease-zoom-in v.$ease-duration-base v.$ease-spring both;
}
.ease-spin {
  animation: ease-spin 1s linear infinite;
}
.ease-pulse {
  animation: ease-pulse 2s ease-in-out infinite;
}
.ease-bounce-in {
  animation: ease-bounce-in v.$ease-duration-slow v.$ease-out both;
}
.ease-shake {
  animation: ease-shake 500ms v.$ease-snap both;
}

// Duration modifiers
.ease-fast {
  animation-duration: v.$ease-duration-fast !important;
}
.ease-slow {
  animation-duration: v.$ease-duration-slow !important;
}
.ease-xslow {
  animation-duration: v.$ease-duration-xslow !important;
}

// Delay modifiers
.ease-delay-100 {
  animation-delay: 100ms;
}
.ease-delay-200 {
  animation-delay: 200ms;
}
.ease-delay-300 {
  animation-delay: 300ms;
}
.ease-delay-400 {
  animation-delay: 400ms;
}
.ease-delay-500 {
  animation-delay: 500ms;
}
.ease-delay-700 {
  animation-delay: 700ms;
}

// Hover utilities
.ease-hover-lift {
  transition:
    transform v.$ease-duration-base v.$ease-snap,
    box-shadow v.$ease-duration-base v.$ease-snap;
}
.ease-hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}
.ease-hover-scale {
  transition: transform v.$ease-duration-base v.$ease-snap;
}
.ease-hover-scale:hover {
  transform: scale(1.04);
}
```

### scss/\_reset.scss

```scss
// Optional motion-safe reset — import separately if needed
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### scss/\_index.scss (barrel file)

```scss
@forward "variables";
@forward "keyframes";
@forward "mixins";
@forward "utilities";
```

### index.scss (main entry)

```scss
// easemotion-scss — main entry point
// @use 'easemotion-scss' to get everything
// @use 'easemotion-scss/variables' for tokens only
@forward "scss/index";
```

---

## Usage After Installing

### Get everything

```scss
@use "easemotion-scss" as em;

.hero {
  @include em.ease-fade-up($delay: 200ms);
  @include em.ease-hover-lift;
}
```

### Get only what you need (tree-shakeable)

```scss
// Only tokens — zero CSS output
@use "easemotion-scss/variables" as v;

.btn {
  transition: background v.$ease-duration-base v.$ease-snap;
}
```

### Only mixins

```scss
@use "easemotion-scss/mixins" as m;

.card {
  @include m.ease-fade-up;
  @include m.ease-safe-motion {
    @include m.ease-hover-lift(8px);
  }
}
```

### Only utility classes

```scss
// Generates .ease-fade-up, .ease-zoom-in, .ease-hover-scale etc.
@use "easemotion-scss/utilities";
```

---

## Framework Examples

### React + CSS Modules

```scss
// Button.module.scss
@use "easemotion-scss/mixins" as m;
@use "easemotion-scss/variables" as v;

.button {
  background: v.$ease-primary;
  @include m.ease-hover-scale(1.05);
  @include m.ease-transition(background);
}
```

### Vue 3 SFC

```vue
<style lang="scss" scoped>
@use "easemotion-scss/mixins" as m;

.hero-title {
  @include m.ease-safe-motion {
    @include m.ease-fade-up($duration: 600ms);
  }
}
</style>
```

### Astro Component

```astro
<style lang="scss">
@use 'easemotion-scss' as em;

.card {
  @include em.ease-fade-up($delay: var(--delay, 0ms));
  @include em.ease-hover-lift;
}
</style>
```

### SvelteKit Component

```svelte
<style lang="scss">
@use 'easemotion-scss/mixins' as m;

.section > * {
  @include m.ease-safe-motion { @include m.ease-fade-up; }
  @include m.ease-stagger(120ms, 4);
}
</style>
```

### Plain SCSS (Webpack / Vite)

```scss
// main.scss
@use "easemotion-scss/reset"; // motion-safe reset
@use "easemotion-scss/utilities"; // utility classes
```

---

## Publishing to npm

```bash
# Authenticate
npm login

# Dry run — check what gets published
npm pack --dry-run

# Publish
npm publish --access public
```

Versioning follows semantic versioning (semver):

- Patch `1.0.x` — bug fixes, typo corrections
- Minor `1.x.0` — new mixins or tokens (backward compatible)
- Major `x.0.0` — breaking changes to existing mixin signatures

---

## Files in This Submission

| File      | Purpose                                        |
| --------- | ---------------------------------------------- |
| README.md | This package guide and API reference           |
| demo.html | Visual preview of all mixins and utilities     |
| style.css | Compiled output showing what the SCSS produces |
