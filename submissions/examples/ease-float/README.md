# ease-float

**EaseMotion CSS Feature** · Floating Hover Animation Utility · v1.0.0

---

## Description

`ease-float` is a composable, CSS-only floating animation utility for [EaseMotion CSS](https://easemotioncss.dev). It adds smooth, perpetual vertical drift to any element — from hero illustrations to product images, avatars, icons, and UI badges — with zero JavaScript, zero dependencies, and full accessibility support.

The utility ships with three distinct keyframe amplitudes, five pre-built timing variants, a hover-triggered mode, and a one-shot mode. Every variant is designed to compose freely, so you can combine classes to express exactly the motion your design needs.

---

## Features

| Feature | Class / Support |
|---|---|
| **CSS Only** | No JavaScript required |
| **Responsive** | Works at any viewport width |
| **Infinite Float** | `.ease-float` |
| **Hover Variant** | `.ease-float-hover` |
| **Once Variant** | `.ease-float-once` |
| **Fast Variant** | `.ease-float-fast` |
| **Slow Variant** | `.ease-float-slow` |
| **High Variant** | `.ease-float-high` |
| **Subtle Variant** | `.ease-float-subtle` |
| **Accessibility Support** | `@media (prefers-reduced-motion: reduce)` |

### Keyframes

| Name | Amplitude | Use Case |
|---|---|---|
| `ease-kf-float` | 12px | Default — balanced, universal |
| `ease-kf-float-high` | 28px | Hero graphics, dramatic illustrations |
| `ease-kf-float-subtle` | 5px | Badges, UI chrome, ambient elements |

---

## Usage

### Installation

Copy `style.css` into your project and link it in your HTML `<head>`:

```html
<link rel="stylesheet" href="style.css" />
```

---

### Basic Float

```html
<!-- Infinite float, default speed and amplitude -->
<img class="ease-float" src="hero.svg" alt="Hero illustration" />

<!-- Any element works -->
<div class="ease-float">🚀</div>
```

---

### Hover-Triggered Float

The element is still by default. The animation starts when the user hovers.

```html
<button class="ease-float-hover">
  Hover me
</button>
```

---

### Play Once

Float animates a single time and stops at its final position.

```html
<span class="ease-float-once">✦</span>
```

---

### Speed Variants

```html
<!-- 1.2s cycle — quick, energetic -->
<div class="ease-float-fast">⚡</div>

<!-- 6s cycle — slow, meditative -->
<div class="ease-float-slow">🌙</div>
```

---

### Amplitude Variants

```html
<!-- 28px vertical travel — dramatic -->
<div class="ease-float-high">🏔️</div>

<!-- 5px vertical travel — whisper-quiet -->
<div class="ease-float-subtle">💎</div>
```

---

### Composing Classes

Classes are designed to compose. Combine a speed variant with an amplitude variant freely:

```html
<!-- High amplitude, slow cadence -->
<div class="ease-float-high ease-float-slow">🌍</div>

<!-- Subtle amplitude, fast cadence -->
<div class="ease-float-subtle ease-float-fast">⚡</div>

<!-- Once + high amplitude -->
<div class="ease-float-once ease-float-high">🚀</div>
```

---

### Staggering with `animation-delay`

Use inline styles to stagger multiple floating elements for an orchestrated wave:

```html
<div class="ease-float" style="animation-delay: 0s;">🔒</div>
<div class="ease-float" style="animation-delay: 0.4s;">⚡</div>
<div class="ease-float" style="animation-delay: 0.8s;">📊</div>
<div class="ease-float" style="animation-delay: 1.2s;">⚙️</div>
```

---

### Custom Duration Override

Override the duration for a one-off value without creating a new class:

```html
<div class="ease-float" style="animation-duration: 2s;">🔮</div>
```

---

### Real-World Patterns

**Product image on a card:**
```html
<article class="product-card">
  <img class="ease-float-slow" src="watch.png" alt="Smart Watch" />
  <h2>Smart Watch</h2>
  <p>$399</p>
</article>
```

**Floating avatar with ring:**
```html
<div class="ease-float">
  <img class="avatar" src="user.jpg" alt="Alex Rivera" />
</div>
```

**Notification bell (urgent):**
```html
<span class="ease-float-fast" aria-label="New notifications">🔔</span>
```

**Hero section illustration:**
```html
<div class="hero">
  <div class="ease-float-high">
    <img src="rocket.svg" alt="Launch illustration" />
  </div>
  <h1>Launch your product</h1>
</div>
```

**Feature icons with stagger:**
```html
<ul class="features" aria-label="Feature icons">
  <li><span class="ease-float" style="animation-delay:0s"   aria-hidden="true">🔒</span> Security</li>
  <li><span class="ease-float" style="animation-delay:0.4s" aria-hidden="true">⚡</span> Speed</li>
  <li><span class="ease-float" style="animation-delay:0.8s" aria-hidden="true">☁️</span> Cloud</li>
</ul>
```

---

## Accessibility

`ease-float` fully respects the `prefers-reduced-motion` media query. When a user has enabled the "Reduce Motion" system preference, **all floating animations are disabled automatically** — no extra configuration needed.

```css
@media (prefers-reduced-motion: reduce) {
  .ease-float,
  .ease-float-once,
  .ease-float-hover,
  .ease-float-hover:hover,
  .ease-float-fast,
  .ease-float-slow,
  .ease-float-high,
  .ease-float-subtle {
    animation: none !important;
    transition: none !important;
  }
}
```

This ensures users with vestibular disorders, motion sensitivities, or cognitive differences are never adversely affected by animated content.

**Additional best practices:**

- Add `aria-hidden="true"` to purely decorative floating elements.
- Avoid floating elements that carry essential information not present in surrounding text.
- Do not rely on motion alone to communicate state or meaning.

---

## Why it fits EaseMotion CSS

EaseMotion CSS is built on three principles: **animation-first**, **composable**, and **human-readable**. `ease-float` embodies all three.

**Animation-first** — `ease-float` treats motion as a design primitive, not an afterthought. Rather than reaching for JavaScript or a full animation library to add a gentle floating effect, you apply a single, self-contained CSS class. The animation is baked in, production-ready, and requires no setup.

**Composable** — Every variant is an independent modifier. `.ease-float-high` changes the amplitude. `.ease-float-slow` changes the speed. `.ease-float-hover` changes the trigger. They combine without conflict because each variant modifies only the property it owns, leaving the others untouched. The pattern scales from a single floating icon all the way to an orchestrated multi-element hero section.

**Human-readable** — `.ease-float-slow` says what it does. `.ease-float-high` says what it does. A developer reading a template two years after it was written can understand the intent immediately, without opening a style sheet. The naming convention is deliberate: the `ease-` namespace, the motion verb `float`, and the modifier tell the whole story in three tokens.

Together, these properties make `ease-float` a natural citizen of the EaseMotion ecosystem — a building block that stays out of your way until you need it, and then works exactly as expected.

---

## Class Reference

| Class | Keyframe | Duration | Iterations | Trigger |
|---|---|---|---|---|
| `.ease-float` | `ease-kf-float` | 3s | infinite | immediate |
| `.ease-float-once` | `ease-kf-float` | 3s | 1 | immediate |
| `.ease-float-hover` | `ease-kf-float` | 3s | infinite | `:hover` |
| `.ease-float-fast` | `ease-kf-float` | 1.2s | infinite | immediate |
| `.ease-float-slow` | `ease-kf-float` | 6s | infinite | immediate |
| `.ease-float-high` | `ease-kf-float-high` | 3s | infinite | immediate |
| `.ease-float-subtle` | `ease-kf-float-subtle` | 3s | infinite | immediate |

---

## Files

```
ease-float/
├── style.css     — Keyframes, utility classes, accessibility rule, demo styles
├── demo.html     — Full interactive demo with nine live examples
└── README.md     — This file
```

---

*Part of EaseMotion CSS — animation-first, composable, human-readable.*