# 🔮 Glow Card — `glow-card-rc`

A premium glassmorphism card component with animated gradient border glow, smooth hover lift, and rich content layout — built with **pure CSS**, zero JavaScript, zero dependencies.

---

## 📁 Folder Structure

```
submissions/examples/glow-card-rc/
├── demo.html    ← Self-contained demo (open directly in any browser)
├── style.css    ← All component styles (unique -rc suffix classes)
└── README.md    ← This file
```

---

## ❓ What Does This Do?

This component provides a **feature-rich UI card** with:

- **Glassmorphism design** — frosted glass background with `backdrop-filter: blur()`
- **Gradient border glow** — hidden by default, reveals a vibrant gradient outline on hover via a `::before` pseudo-element
- **Smooth lift animation** — `translateY(-10px) scale(1.015)` with a spring-eased transition
- **Outer glow** — coloured `box-shadow` that blooms on hover, matching the card's accent colour
- **Animated progress bars** — CSS `@keyframes` fill animation with staggered delays
- **Tag pills** — colour-shift on hover to match the card accent
- **Icon badge** — scales and rotates with a subtle glow on card hover
- **CTA arrow** — rotates 45° and fills with the accent colour on hover
- **Ambient background blobs** — pure CSS radial gradients with floating animation
- **Three colour variants** — Violet, Cyan, and Rose

All effects are achieved with **zero JavaScript** — only CSS transitions, transforms, and keyframe animations.

---

## 🛠️ How Is It Used?

### 1. Basic Card

```html
<link rel="stylesheet" href="style.css" />

<article class="card-rc card-rc--violet">
  <div class="card-rc__icon-wrap">
    <!-- Your SVG icon here -->
  </div>
  <div class="card-rc__body">
    <p class="card-rc__label">Category</p>
    <h2 class="card-rc__title">Card Title</h2>
    <p class="card-rc__desc">A short description of this card.</p>
  </div>
  <footer class="card-rc__footer">
    <div class="card-rc__author">
      <div class="avatar-rc">A</div>
      <div class="avatar-rc__info">
        <span class="avatar-rc__name">Author Name</span>
        <span class="avatar-rc__role">Role</span>
      </div>
    </div>
    <a href="#" class="cta-rc" aria-label="View details">→</a>
  </footer>
</article>
```

### 2. Colour Variants

| Class              | Accent    |
|--------------------|-----------|
| `card-rc--violet`  | Purple    |
| `card-rc--cyan`    | Teal/Cyan |
| `card-rc--rose`    | Red/Pink  |

### 3. Optional Float Animation

Add `card-rc--float` to enable a subtle idle floating effect:

```html
<article class="card-rc card-rc--violet card-rc--float">
```

### 4. Progress Bar

```html
<div class="progress-rc" role="progressbar" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-rc__fill" style="--rc-progress: 87%;"></div>
</div>
```

### 5. Tags

```html
<div class="card-rc__tags">
  <span class="tag-rc">Glassmorphism</span>
  <span class="tag-rc">Pure CSS</span>
</div>
```

---

## 💡 Why Is It Useful?

1. **Zero dependencies** — no frameworks, no build tools, no JavaScript
2. **Copy-paste ready** — drop into any project, works immediately
3. **Beginner-friendly** — clean, well-commented CSS with clear BEM-like naming
4. **Production-quality** — smooth 60fps GPU-accelerated transitions
5. **Accessible** — proper ARIA attributes, focus states, reduced-motion support
6. **Responsive** — adapts from 3-column desktop to single-column mobile
7. **Themeable** — all colours are CSS custom properties, easy to override
8. **Conflict-free** — every class ends with `-rc`, no naming collisions

---

## ♿ Accessibility Considerations

| Feature | Implementation |
|---|---|
| **Semantic HTML** | Uses `<article>`, `<header>`, `<footer>`, `<main>`, `<ul>` |
| **ARIA labels** | Cards, grids, progress bars, and CTAs all have descriptive `aria-label` attributes |
| **Progress bars** | `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax` |
| **Decorative icons** | All SVGs marked `aria-hidden="true"` |
| **Focus visible** | CTA buttons show a visible `outline` on keyboard focus |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` disables all animations and transforms |
| **Colour contrast** | Text colours meet WCAG AA contrast ratios against the dark background |
| **No hover-only content** | All information is visible without hovering; hover only enhances visual effects |

---

## 🌐 Browser Compatibility

| Browser | Support | Notes |
|---|---|---|
| Chrome 76+ | ✅ Full | |
| Firefox 103+ | ✅ Full | |
| Safari 15.4+ | ✅ Full | Uses `-webkit-backdrop-filter` prefix |
| Edge 79+ | ✅ Full | Chromium-based |
| Opera 63+ | ✅ Full | |
| iOS Safari 15.4+ | ✅ Full | |
| Samsung Internet 12+ | ✅ Full | |

### CSS Features Used

| Feature | Fallback |
|---|---|
| `backdrop-filter: blur()` | Degrades gracefully to solid background |
| `color-mix(in srgb, …)` | `@supports` fallback with hardcoded `rgba()` values |
| CSS Custom Properties | All modern browsers (IE not supported) |
| `@keyframes` animations | Disabled via `prefers-reduced-motion` |
| `inset` shorthand | Chrome 87+, Firefox 66+, Safari 14.1+ |

---

## 📝 License

Submitted under the [EaseMotion CSS project license](../../../LICENSE).

---

> **Built with ❤️ for GSSoC by Roshesh Chaware**
