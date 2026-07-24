# ✨ Spotlight Card — `spotlight-card-rc`

A premium SaaS-style card component with an interactive **radial spotlight glow** overlay, smooth hover lift, and subtle scale effect — built with **pure CSS**, zero JavaScript, zero dependencies.

---

## 📁 Folder Structure

```
submissions/examples/spotlight-card-rc/
├── demo.html    ← Self-contained demo (open directly in any browser)
├── style.css    ← All component styles (unique -rc suffix classes)
└── README.md    ← This file
```

---

## ❓ What Does This Do?

This component provides a **feature card with an interactive spotlight effect**:

- **Radial spotlight glow** — a soft `radial-gradient` overlay fades in from the top of the card on hover, simulating a focused beam of light
- **Top shimmer line** — a gradient `::after` pseudo-element creates a glowing highlight along the card's top edge on hover
- **Smooth lift animation** — `translateY(-8px) scale(1.02)` with a spring-eased transition for a natural, bouncy feel
- **Ambient outer glow** — coloured `box-shadow` blooms on hover, matching the card's accent colour
- **Accent colour variants** — Indigo, Teal, and Pink themes via CSS custom properties
- **Feature bullet points** — dots that glow and text that brightens on card hover
- **CTA button** — fills with the accent colour and the arrow slides right on hover
- **Idle pulse glow** — a subtle `box-shadow` pulse animation for attention (optional class)
- **Ambient background blobs** — pure CSS radial gradients with floating animation
- **Rounded corners** — `28px` border-radius for a modern, premium aesthetic

All effects are achieved with **zero JavaScript** — only CSS transitions, pseudo-elements, and keyframe animations.

---

## 🛠️ How Is It Used?

### 1. Basic Spotlight Card

```html
<link rel="stylesheet" href="style.css" />

<article class="spotlight-card-rc spotlight-card-rc--indigo-rc">
  <div class="spotlight-icon-rc">
    <!-- Your SVG icon here -->
  </div>
  <div class="spotlight-body-rc">
    <p class="spotlight-label-rc">Category</p>
    <h2 class="spotlight-title-rc">Card Title</h2>
    <p class="spotlight-desc-rc">A short description of this card.</p>
    <a href="#" class="spotlight-cta-rc">Explore →</a>
  </div>
</article>
```

### 2. Colour Variants

| Class                           | Accent       |
|---------------------------------|-------------|
| `spotlight-card-rc--indigo-rc`  | Indigo/Blue |
| `spotlight-card-rc--teal-rc`    | Teal/Mint   |
| `spotlight-card-rc--pink-rc`    | Pink/Rose   |

### 3. Optional Pulse Animation

Add `spotlight-card-rc--pulse-rc` for a subtle idle glow pulse:

```html
<article class="spotlight-card-rc spotlight-card-rc--indigo-rc spotlight-card-rc--pulse-rc">
```

### 4. Feature List

```html
<ul class="spotlight-features-rc">
  <li class="feature-item-rc">
    <span class="feature-dot-rc"></span>
    Feature description
  </li>
</ul>
```

### 5. CTA Button

```html
<a href="#" class="spotlight-cta-rc">
  Explore
  <svg><!-- arrow icon --></svg>
</a>
```

---

## 💡 Why Is It Useful?

1. **Zero dependencies** — no frameworks, no build tools, no JavaScript
2. **Copy-paste ready** — drop into any project, works immediately
3. **Beginner-friendly** — clean, well-commented CSS with clear BEM-like naming
4. **Unique spotlight effect** — radial gradient overlay creates a premium light effect rarely seen in CSS-only components
5. **Production-quality** — smooth 60fps GPU-accelerated transitions using `transform` and `opacity`
6. **Accessible** — proper ARIA attributes, focus-visible states, reduced-motion support
7. **Responsive** — adapts from 3-column desktop to single-column mobile
8. **Themeable** — all colours are CSS custom properties, easy to override
9. **Conflict-free** — every class ends with `-rc`, no naming collisions
10. **SaaS-ready** — designed for product feature cards, pricing pages, and landing sections

---

## ♿ Accessibility Considerations

| Feature | Implementation |
|---|---|
| **Semantic HTML** | Uses `<article>`, `<header>`, `<footer>`, `<main>`, `<ul>` |
| **ARIA labels** | Cards, grids, feature lists, and CTAs all have descriptive `aria-label` attributes |
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
| Safari 15.4+ | ✅ Full | |
| Edge 79+ | ✅ Full | Chromium-based |
| Opera 63+ | ✅ Full | |
| iOS Safari 15.4+ | ✅ Full | |

### CSS Features Used

| Feature | Fallback |
|---|---|
| `radial-gradient` spotlight | Supported in all modern browsers |
| CSS Custom Properties | All modern browsers (IE not supported) |
| `::before` / `::after` | Universal support |
| `@keyframes` animations | Disabled via `prefers-reduced-motion` |

---

## 📝 License

Submitted under the [EaseMotion CSS project license](../../../LICENSE).

---

> **Built with ❤️ for GSSoC by Roshesh Chaware**
