# Contribution Guide: Adding a New Animation to EaseMotion CSS

> Submission for issue [#16969](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/16969)
>
> **Goal:** Provide a dedicated, opinionated guide for contributors who want to propose new animations for the EaseMotion CSS framework. This guide complements the general `CONTRIBUTING.md` with animation-specific rules covering **naming conventions, SCSS/CSS structure, customization patterns, accessibility, and testing**.
>
> A complete reference implementation (`style.css` + `demo.html`) lives next to this file as proof that every convention works.

---

## Table of Contents

1. [Animation Philosophy](#1-animation-philosophy)
2. [Naming Convention](#2-naming-convention)
3. [SCSS / CSS File Structure](#3-scss--css-file-structure)
4. [Custom Properties (the public API)](#4-custom-properties-the-public-api)
5. [Modifier Classes](#5-modifier-classes)
6. [Accessibility — `prefers-reduced-motion`](#6-accessibility--prefers-reduced-motion)
7. [Testing a New Animation](#7-testing-a-new-animation)
8. [Submission Checklist for Animations](#8-submission-checklist-for-animations)
9. [Reference Implementation](#9-reference-implementation)

---

## 1. Animation Philosophy

EaseMotion CSS animations follow three non-negotiable principles:

| Principle        | What it means                                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **CSS-first**    | Animations must work without JavaScript. JS may _trigger_ state classes but never _drive_ frames.                                           |
| **Customizable** | Every animation must expose CSS custom properties so consumers can tweak duration, delay, easing, and distance without overriding the rule. |
| **Accessible**   | Every animation **must** have a `prefers-reduced-motion` fallback that disables motion.                                                     |

If your animation can't satisfy these three rules, it isn't ready for the framework.

---

## 2. Naming Convention

All animation classes follow a **BEM-style** convention with an `ease-anim-` prefix.

```
.ease-anim-{name}              ← Block (the base animation)
.ease-anim-{name}--{modifier}  ← Modifier (speed, delay, size variants)
.is-paused                     ← State (shared utility, applied by parent or JS)
```

### Rules

| Rule                                    | Example                                                           | Notes                                                  |
| --------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------ |
| Always prefixed with `ease-anim-`       | `.ease-anim-fade-slide-up`                                        | Distinguishes animations from components and utilities |
| Use lowercase **kebab-case**            | `ease-anim-bounce-in`, **not** `easeAnimBounceIn`                 | Matches CSS convention                                 |
| Use descriptive verbs/adverbs           | `fade-in`, `slide-up`, `bounce-out`, `flip-x`                     | Avoid ambiguous names like `cool-effect`               |
| Keyframe name **must match** class name | `.ease-anim-fade-slide-up` ↔ `@keyframes ease-anim-fade-slide-up` | Makes debugging and grep trivial                       |

### Standard modifier vocabulary

Stick to this vocabulary so the API stays predictable across animations:

| Category                           | Modifiers                                                                 |
| ---------------------------------- | ------------------------------------------------------------------------- |
| **Speed**                          | `--instant` (0.15s), `--fast` (0.3s), default (0.6s), `--slow` (1.2s)     |
| **Delay**                          | `--delay-100`, `--delay-200`, `--delay-300`, `--delay-500` (milliseconds) |
| **Size / distance**                | `--sm`, `--md`, `--lg`, `--xl`                                            |
| **Direction** _(if applicable)_    | `--up`, `--down`, `--left`, `--right`                                     |
| **Loop control** _(if applicable)_ | `--once`, `--infinite`                                                    |

---

## 3. SCSS / CSS File Structure

Every animation file should follow this **6-block layout** in this order:

```
1. Block-level custom properties (the public API)
2. The @keyframes definition
3. Speed modifiers
4. Delay modifiers
5. Size / distance / direction modifiers
6. prefers-reduced-motion accessibility block
```

### Suggested SCSS skeleton

```scss
// _fade-slide-up.scss — example animation partial

// 1. Public API
.ease-anim-fade-slide-up {
  --ease-anim-duration: 0.6s;
  --ease-anim-delay: 0s;
  --ease-anim-distance: 24px;
  --ease-anim-timing: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-anim-fill: both;

  opacity: 0;
  transform: translateY(var(--ease-anim-distance));
  animation: ease-anim-fade-slide-up var(--ease-anim-duration)
    var(--ease-anim-timing) var(--ease-anim-delay) var(--ease-anim-fill);
}

// 2. Keyframes
@keyframes ease-anim-fade-slide-up {
  from {
    opacity: 0;
    transform: translateY(var(--ease-anim-distance));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 3. Speed
.ease-anim-fade-slide-up--fast {
  --ease-anim-duration: 0.3s;
}
.ease-anim-fade-slide-up--slow {
  --ease-anim-duration: 1.2s;
}
.ease-anim-fade-slide-up--instant {
  --ease-anim-duration: 0.15s;
}

// 4. Delay
.ease-anim-fade-slide-up--delay-100 {
  --ease-anim-delay: 100ms;
}
.ease-anim-fade-slide-up--delay-200 {
  --ease-anim-delay: 200ms;
}
.ease-anim-fade-slide-up--delay-300 {
  --ease-anim-delay: 300ms;
}
.ease-anim-fade-slide-up--delay-500 {
  --ease-anim-delay: 500ms;
}

// 5. Distance
.ease-anim-fade-slide-up--sm {
  --ease-anim-distance: 8px;
}
.ease-anim-fade-slide-up--md {
  --ease-anim-distance: 16px;
}
.ease-anim-fade-slide-up--lg {
  --ease-anim-distance: 40px;
}
.ease-anim-fade-slide-up--xl {
  --ease-anim-distance: 64px;
}

// 6. Accessibility
@media (prefers-reduced-motion: reduce) {
  .ease-anim-fade-slide-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

### Where animation files live (during maintainer integration)

```
src/
└── scss/
    └── animations/
        ├── _index.scss              ← @forward each animation partial
        ├── _fade-slide-up.scss
        ├── _bounce-in.scss
        └── _flip-x.scss
```

> ℹ️ Contributors do **not** need to add the SCSS partial themselves — submit raw CSS inside `submissions/examples/your-animation-name/` and the maintainer will port it during standardization.

---

## 4. Custom Properties (the public API)

Every animation **must** expose these five custom properties on the block class:

| Variable                              | Purpose                                       | Required default               |
| ------------------------------------- | --------------------------------------------- | ------------------------------ |
| `--ease-anim-duration`                | How long the animation runs                   | `0.6s`                         |
| `--ease-anim-delay`                   | Delay before starting                         | `0s`                           |
| `--ease-anim-timing`                  | Easing function                               | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--ease-anim-fill`                    | `animation-fill-mode` value                   | `both`                         |
| `--ease-anim-distance` _(or similar)_ | Movement amount, scale factor, rotation, etc. | depends on animation           |

This means a consumer can override any property inline without touching the stylesheet:

```html
<div
  class="ease-anim-fade-slide-up"
  style="--ease-anim-duration: 2s; --ease-anim-distance: 80px;"
>
  Slow, dramatic entrance
</div>
```

---

## 5. Modifier Classes

Stack modifiers freely — they only update custom properties, so combining them is safe:

```html
<!-- Slow, large-distance, delayed entrance -->
<div
  class="ease-anim-fade-slide-up
            ease-anim-fade-slide-up--slow
            ease-anim-fade-slide-up--lg
            ease-anim-fade-slide-up--delay-300"
>
  …
</div>
```

> ✅ **Rule:** modifiers must only mutate custom properties. They must **never** override the base `animation` shorthand, opacity, or transform directly. This guarantees stacking is always safe.

---

## 6. Accessibility — `prefers-reduced-motion`

This is a **hard requirement**. PRs missing this block will be requested for changes.

```css
@media (prefers-reduced-motion: reduce) {
  .ease-anim-fade-slide-up {
    animation: none;
    opacity: 1; /* reset to final visual state */
    transform: none;
  }
}
```

### Why it matters

Some users have vestibular disorders, migraines, or simply prefer no motion. Honoring `prefers-reduced-motion` is a baseline accessibility expectation in 2024+.

### Testing it

In Chrome DevTools:

1. Open DevTools (`F12`)
2. `Cmd/Ctrl + Shift + P` → search for **"Emulate CSS prefers-reduced-motion"** → select **reduce**
3. Reload the demo — your animation should appear in its final state with no motion.

---

## 7. Testing a New Animation

Animations should be verified with **four manual smoke-tests** before opening a PR:

### Test 1 — Visual smoke test

Open `demo.html` in a browser and confirm:

- The animation plays once on page load (or on the trigger you designed for).
- The final state is correct (no flash of unstyled content, no missing opacity).

### Test 2 — Modifier composition test

Apply combinations of modifiers (e.g. `--slow + --lg + --delay-300`) and verify they all stack without breaking.

### Test 3 — Custom property override test

Add `style="--ease-anim-duration: 2s;"` to a test element and confirm the duration changes without editing CSS.

### Test 4 — Reduced motion test

Toggle Chrome's "Emulate CSS prefers-reduced-motion: reduce" and reload. The animation must not run.

### Optional — Cross-browser test

Open `demo.html` in Chrome, Firefox, and Edge. Animations using `transform` + `opacity` should look identical across all three.

> 🧪 The framework currently does **not** require automated unit tests for animations — manual verification via the four tests above is the standard. If you want to add automated visual-regression tests in the future, open a separate proposal issue.

---

## 8. Submission Checklist for Animations

Use this checklist in addition to the standard `CONTRIBUTING.md` checklist:

- [ ] Class name follows `ease-anim-{kebab-case-name}` convention
- [ ] `@keyframes` block name exactly matches the class name
- [ ] Exposes the 5 standard custom properties on the block class
- [ ] Provides at least the **speed** modifier set (`--instant/--fast/--slow`)
- [ ] Provides delay modifiers if the animation is suitable for cascading entrances
- [ ] Includes a `@media (prefers-reduced-motion: reduce)` block
- [ ] Passes all 4 manual smoke tests
- [ ] Submitted inside `submissions/examples/your-animation-name/` only
- [ ] Includes a `demo.html` showing the base animation + every modifier in action

---

## 9. Reference Implementation

The companion files in this folder demonstrate every rule above:

| File        | What it shows                                                                                                                                                                                                         |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `style.css` | A complete `ease-anim-fade-slide-up` animation following all 6 structural blocks                                                                                                                                      |
| `demo.html` | Live demonstrations of the base animation, all speed modifiers, all delay modifiers, all distance modifiers, and a per-element custom-property override — plus a replay button so reviewers can re-trigger animations |

Open `demo.html` directly in any modern browser (no server required) and reviewers can verify the conventions in seconds.

---

## Why This Guide Fits EaseMotion CSS

EaseMotion CSS is an **animation-first** framework whose value lies in being predictable, beautiful, and accessible. A dedicated animation contribution guide protects all three:

- **Predictable** — every animation follows the same shape, so consumers learn one and know them all.
- **Beautiful** — opinionated defaults (timing, easing, fill mode) keep the framework cohesive even with many contributors.
- **Accessible** — the mandatory `prefers-reduced-motion` block makes the framework inclusive by default.

> Maintainer note: this guide is intended to be lifted into `docs/animations/CONTRIBUTING-ANIMATIONS.md` (or merged into the existing `CONTRIBUTING.md` as a new section) during the standardization step.
