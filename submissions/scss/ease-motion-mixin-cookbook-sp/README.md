# EaseMotion SCSS Motion Mixin Recipe Book

A cookbook-style SCSS submission with **10 ready-to-use motion mixin recipes** that demonstrate the official EaseMotion SCSS layer — `animate()`, `fade-in()`, `slide-up()`, `zoom-in()`, `transition()`, and token usage with `$speed-fast`, `$speed-medium`, and `$ease-bounce`.

> Submission track: `submissions/scss/ease-motion-mixin-cookbook-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43355

---

## What does this do?

EaseMotion CSS ships an SCSS layer with animation tokens and mixins under `scss/`, but there is no beginner-friendly cookbook in this repository. This submission provides:

1. **10 documented SCSS recipes** for real-world UI patterns
2. **Before/after HTML demos** (`demo.html`) for every recipe
3. **Copy-ready `@include` snippets** for pasting into your own stylesheets
4. **Parameter documentation** matching the official mixin API

## Files

| File | Purpose |
|------|---------|
| `_ease-motion-mixin-cookbook-sp.scss` | Tokens, core mixin mirrors, 10 recipe mixins, demo classes |
| `README.md` | This documentation |
| `demo.html` | Before/after browser demo (requires CDN + compiled CSS) |
| `demo-compiled.css` | Compiled output from the SCSS partial |

---

## Quick start

### 1. Install EaseMotion CSS

```bash
npm install easemotion-css
```

### 2. Load keyframes in your HTML or entry CSS

```css
@import 'easemotion-css/easemotion.min.css';
```

Keyframes like `ease-kf-fade-in` and `ease-kf-slide-up` live in the compiled CSS.

### 3. Use official mixins (recommended)

```scss
@use 'easemotion-css/scss' as ease;

.hero-title {
  @include ease.fade-in();
}
```

### 4. Or import this cookbook for recipe mixins

```scss
@use 'ease-motion-mixin-cookbook-sp' as cookbook;

.hero-title {
  @include cookbook.recipe-hero-fade-in();
}
```

### 5. Preview the demo

Open `demo.html` in a browser (needs internet for the EaseMotion CDN).

---

## SCSS tokens

These tokens mirror `scss/_variables.scss`:

| Token | Value | Maps to CSS var |
|-------|-------|-----------------|
| `$speed-fast` | `var(--ease-speed-fast)` | 150ms |
| `$speed-medium` | `var(--ease-speed-medium)` | 300ms |
| `$speed-slow` | `var(--ease-speed-slow)` | 600ms |
| `$ease-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default curve |
| `$ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bouncy overshoot |
| `$delay-none` | `0s` | No delay |
| `$fill-both` | `both` | Fill mode |

Aliases: `$duration-fast`, `$duration-normal`, `$duration-slow`, `$ease-in-out-cubic`, `$ease-elastic`.

---

## Core mixin API

| Mixin | Parameters | Description |
|-------|------------|-------------|
| `animate($name, $duration, $easing, $delay, $fill, $iteration)` | All optional except `$name` | Low-level animation shorthand |
| `transition($property, $duration, $easing, $delay)` | All have defaults | CSS transition shorthand |
| `fade-in($duration, $easing, $delay, $fill)` | Defaults to medium/normal | Opacity 0 → 1 |
| `fade-out($duration, $easing, $delay, $fill)` | Defaults to medium/normal | Opacity 1 → 0 |
| `slide-up($duration, $easing, $delay, $fill)` | Defaults to medium/normal | Translate up into view |
| `slide-down($duration, $easing, $delay, $fill)` | Defaults to medium/normal | Translate down into view |
| `zoom-in($duration, $easing, $delay, $fill)` | Default easing: out-cubic | Scale up entrance |
| `zoom-out($duration, $easing, $delay, $fill)` | Default easing: in-cubic | Scale down exit |

---

## Recipe catalog

### Recipe 01 — Hero fade-in

**Mixin:** `recipe-hero-fade-in($delay: 0s)`

```scss
.hero-title {
  @include recipe-hero-fade-in();
}
```

**Before (HTML):**

```html
<h1 class="hero-title">Welcome to EaseMotion</h1>
<!-- Static — fully visible immediately, no entrance -->
```

**After (HTML):**

```html
<h1 class="hero-title mc-recipe-01">Welcome to EaseMotion</h1>
<!-- Fades in over $speed-medium with $ease-ease -->
```

---

### Recipe 02 — Feature card slide-up

**Mixin:** `recipe-card-slide-up($delay: 0.15s)`

```scss
.feature-card {
  @include recipe-card-slide-up();
}
```

**Before:**

```html
<article class="feature-card">Fast animations</article>
```

**After:**

```html
<article class="feature-card">Fast animations</article>
<!-- Slides up from below with 150ms delay -->
```

---

### Recipe 03 — Modal zoom-in

**Mixin:** `recipe-modal-zoom-in($delay: 0s)`

```scss
.modal-panel {
  @include recipe-modal-zoom-in();
}
```

Uses `$speed-fast` + `$ease-bounce` for a snappy dialog entrance.

**Before:**

```html
<div class="modal-panel" role="dialog">Sign in</div>
```

**After:**

```html
<div class="modal-panel" role="dialog">Sign in</div>
<!-- Zooms in with bounce easing -->
```

---

### Recipe 04 — Toast slide-down

**Mixin:** `recipe-toast-slide-down($delay: 0.05s)`

```scss
.toast {
  @include recipe-toast-slide-down();
}
```

**Before:**

```html
<div class="toast" role="status">Saved successfully</div>
```

**After:**

```html
<div class="toast" role="status">Saved successfully</div>
<!-- Slides down from top with fast speed -->
```

---

### Recipe 05 — Lightbox zoom-out

**Mixin:** `recipe-lightbox-zoom-out($delay: 0s)`

```scss
.lightbox--closing {
  @include recipe-lightbox-zoom-out();
}
```

**Before:**

```html
<figure class="lightbox"><img src="photo.jpg" alt="" /></figure>
```

**After:**

```html
<figure class="lightbox lightbox--closing">
  <img src="photo.jpg" alt="" />
</figure>
<!-- Zooms out when closing -->
```

---

### Recipe 06 — Section fade-out

**Mixin:** `recipe-section-fade-out($delay: 0s)`

```scss
.section--leaving {
  @include recipe-section-fade-out();
}
```

Uses `$speed-slow` for a gentle exit.

---

### Recipe 07 — CTA hover lift

**Mixin:** `recipe-cta-hover-lift()`

```scss
.cta-btn {
  @include recipe-cta-hover-lift();
}
```

Combines `transition()` with hover `transform` and `box-shadow`:

```scss
// Under the hood:
@include transition(transform box-shadow, $speed-fast, $ease-bounce);
&:hover { transform: translateY(-3px); }
```

**Before:** Button has no hover motion.  
**After:** Button lifts on hover with bounce easing.

---

### Recipe 08 — Nav link transition

**Mixin:** `recipe-nav-link-transition()`

```scss
.nav-link {
  @include recipe-nav-link-transition();
}
```

```scss
@include transition(color opacity, $speed-medium, $ease-ease);
```

**Before:** Link color changes instantly on hover.  
**After:** Smooth color + opacity shift over `$speed-medium`.

---

### Recipe 09 — Bounce slide-up (low-level animate)

**Mixin:** `recipe-bounce-slide-up($delay: 0.2s)`

```scss
.panel {
  @include recipe-bounce-slide-up();
}
```

Demonstrates the base `animate()` mixin with full parameter control:

```scss
@include animate(
  ease-kf-slide-up,
  $speed-slow,
  $ease-bounce,
  0.2s,
  both,
  1
);
```

---

### Recipe 10 — Staggered pricing grid

**Mixin:** `recipe-staggered-grid($count: 4)`  
**Helper:** `stagger-entrance($mixin-name, $base-delay, $step, $count)`

```scss
.pricing-grid > .plan-card {
  @include stagger-entrance(slide-up, 0.05s, 0.12s, 4);
}
```

**Before:**

```html
<div class="pricing-grid">
  <div class="plan-card">Basic</div>
  <div class="plan-card">Pro</div>
  <div class="plan-card">Team</div>
  <div class="plan-card">Enterprise</div>
</div>
<!-- All cards appear at once -->
```

**After:**

```html
<div class="pricing-grid">
  <div class="plan-card">Basic</div>       <!-- delay 0.05s -->
  <div class="plan-card">Pro</div>         <!-- delay 0.17s -->
  <div class="plan-card">Team</div>        <!-- delay 0.29s -->
  <div class="plan-card">Enterprise</div> <!-- delay 0.41s -->
</div>
<!-- Each card slides up with increasing delay -->
```

---

## Copy-ready snippets

```scss
// 01 Hero
.hero-title { @include fade-in($speed-medium, $ease-ease); }

// 02 Card
.feature-card { @include slide-up($speed-medium, $ease-ease, 0.15s); }

// 03 Modal
.modal-panel { @include zoom-in($speed-fast, $ease-bounce); }

// 04 Toast
.toast { @include slide-down($speed-fast, $ease-ease, 0.05s); }

// 05 Lightbox exit
.lightbox--closing { @include zoom-out($speed-medium, $ease-in-cubic); }

// 06 Section exit
.section--leaving { @include fade-out($speed-slow, $ease-ease); }

// 07 CTA hover
.cta-btn {
  @include transition(transform box-shadow, $speed-fast, $ease-bounce);
  &:hover { transform: translateY(-3px); }
}

// 08 Nav link
.nav-link { @include transition(color opacity, $speed-medium, $ease-ease); }

// 09 Custom animate
.panel {
  @include animate(ease-kf-slide-up, $speed-slow, $ease-bounce, 0.2s);
}

// 10 Stagger
.pricing-grid > .plan-card {
  @include stagger-entrance(slide-up, 0.05s, 0.12s, 4);
}
```

---

## Accessibility

Every recipe mixin wraps animations in `motion-safe`, which disables animation under `prefers-reduced-motion: reduce`. Hover-only recipes (07, 08) also reset transforms when reduced motion is preferred.

---

## Compile locally

```bash
npx sass submissions/scss/ease-motion-mixin-cookbook-sp/_ease-motion-mixin-cookbook-sp.scss demo-compiled.css
```

---

## Compliance notes

- Only **new files** inside `submissions/scss/`.
- Mirrors official `scss/_variables.scss` and `scss/_mixins.scss` — no core edits.
- Folder name carries unique contributor suffix `-sp`.
- Requires `easemotion.min.css` for `ease-kf-*` keyframes.
