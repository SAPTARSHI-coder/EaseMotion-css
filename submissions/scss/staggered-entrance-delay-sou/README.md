# Staggered Entrance Delay Utility Classes

> A reusable SCSS mixin and utility-class generator for creating **staggered entrance animation delays** on any group of elements (lists, cards, grids, menus, etc.).

**Author:** [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux)  
**Issue:** [#27660](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/27660) — Add staggered entrance delay utility classes  
**Track:** SCSS Integration

---

## What Does This Do?

This SCSS module provides three ways to apply staggered entrance delays to elements:

1. **Static utility classes** — `.ease-delay-1` through `.ease-delay-12` (auto-generated)
2. **A per-element mixin** — `@include ease-stagger-delay($index)` for custom scenarios
3. **An auto-stagger container** — `.ease-stagger-container` that automatically staggers its direct children using `:nth-child()`

Combine any of these with your favorite entrance animation (fade-in, slide-up, scale-in, etc.) to create polished, sequential reveal effects.

---

## Files

| File | Purpose |
|------|---------|
| `_staggered-entrance-delay-sou.scss` | The main SCSS partial (mixins + utility generator) |
| `style.css` | Compiled CSS output (ready to use without SCSS compiler) |
| `demo.html` | Standalone HTML demo (open directly in browser) |
| `README.md` | This documentation |

---

## Configurable Variables

You can override these before importing the partial:

| Variable | Default | Description |
|----------|---------|-------------|
| `$ease-stagger-count` | `12` | How many `.ease-delay-*` utility classes to generate |
| `$ease-stagger-step` | `100ms` | Delay increment between each stagger step |
| `$ease-stagger-base-delay` | `0ms` | Base delay before staggering begins |
| `$ease-stagger-prefix` | `'ease-delay'` | Prefix used for generated utility classes |

**Example:**

```scss
$ease-stagger-count: 20;
$ease-stagger-step: 80ms;
@import 'staggered-entrance-delay-sou';
```

---

## Usage

### 1. Static Utility Classes (easiest)

Apply the class directly to elements with an existing entrance animation:

```html
<div class="card fade-in ease-delay-1">Card 1</div>
<div class="card fade-in ease-delay-2">Card 2</div>
<div class="card fade-in ease-delay-3">Card 3</div>
<div class="card fade-in ease-delay-4">Card 4</div>
```

Each card will animate in 100 ms after the previous one.

---

### 2. Auto-Stagger Container (zero classes on children)

Simply wrap children in a container — delays are applied automatically via `:nth-child()`:

```html
<div class="ease-stagger-container">
  <div class="card fade-in">Item 1</div>
  <div class="card fade-in">Item 2</div>
  <div class="card fade-in">Item 3</div>
  <div class="card fade-in">Item 4</div>
</div>
```

Perfect for dynamic lists where you don't know how many items you'll have.

---

### 3. Mixin (`@include`) — for custom scenarios

Use inside your own selectors for full control:

```scss
@import 'staggered-entrance-delay-sou';

.menu-item {
  animation: slide-in 0.5s ease-out;

  @for $i from 1 through 5 {
    &:nth-child(#{$i}) {
      @include ease-stagger-delay($i, 150ms, 200ms);
    }
  }
}
```

Or stagger children of any element:

```scss
.gallery {
  @include ease-stagger-children(10, 80ms);
}
```

---

## Why Is This Useful?

Manually writing `animation-delay: 100ms;`, `200ms;`, `300ms;` … on every element is repetitive and error-prone. This utility:

- ✅ **Eliminates repetition** — one class or one `@include` handles the math
- ✅ **Encourages polished UI** — staggered entrances feel more premium than everything appearing at once
- ✅ **Is animation-agnostic** — works with any `@keyframes` (fade, slide, scale, rotate…)
- ✅ **Uses `animation-fill-mode: both`** — elements stay hidden until their delay elapses (no flash-of-content)
- ✅ **Fully configurable** — override step, base, count, and prefix to match your design system
- ✅ **Fits EaseMotion's philosophy** — small, composable, class-based animation utilities

---

## Demo

Open `demo.html` directly in any modern browser (no server required) to see:

- 8 cards fading in with manual `.ease-delay-*` classes
- 6 cards auto-staggered via `.ease-stagger-container`
- A "Replay Animation" button to re-trigger the effect

---

## Browser Support

Works in all modern browsers that support CSS `animation-delay` and `animation-fill-mode` — Chrome, Firefox, Safari, Edge, Opera (all current versions).
