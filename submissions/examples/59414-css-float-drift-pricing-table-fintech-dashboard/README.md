# CSS Float-Drift Pricing Table for Fintech Dashboard Layouts

> Issue: [#59414](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59414)

A pure CSS float-drift pricing table with continuous gentle floating oscillation and micro-rotation, designed for fintech dashboards. Cards stabilize on hover for clear readability.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| **Float-Drift Animation** | Three unique `@keyframes` (`floatDrift1/2/3`) with varied timing and rotation for organic motion. |
| **Hover Stabilization** | `animation-play-state: paused` on hover stops drifting for readability. |
| **Pure CSS Billing Toggle** | Monthly/Annual toggle using radio inputs — no JavaScript required. |
| **3 Pricing Tiers** | Starter ($39/mo), Professional ($149/mo, featured), Enterprise (Custom). |
| **Responsive** | 3 columns → 2 columns → 1 column across breakpoints. |
| **Accessible** | `prefers-reduced-motion` disables all drift animations. |

---

## 🎨 CSS Custom Properties

```css
:root {
    --drift-distance: 12px;
    --drift-rotation: 1.2deg;
    --drift-duration-1: 4.5s;
    --drift-duration-2: 5.2s;
    --drift-duration-3: 4.8s;
    --emerald: #10b981;
    --teal: #14b8a6;
}
```

---

## 🔧 Integration

1. Copy the folder into your project.
2. Link `style.css` in your HTML `<head>`.
3. Use the pricing card markup from `demo.html`.
4. Customize drift distance, rotation, and timing via CSS custom properties.

---

## 📂 File Structure

```
59414-css-float-drift-pricing-table-fintech-dashboard/
├── demo.html    # Full pricing page with billing toggle
├── style.css    # Float-drift animations & styling
└── README.md    # Documentation (this file)
```

---

## 🎬 Animations

| Animation | Trigger | Description |
|---|---|---|
| `floatDrift1/2/3` | Continuous | Unique vertical oscillation + micro-rotation per card |
| `cardReveal` | Page load | Cards fade in from below with stagger |
| `orbSway` | Continuous | Background orbs drift for depth |
| Hover pause | `:hover` | Drifting pauses; card elevates with glow |

---

## ♿ Accessibility

- `prefers-reduced-motion: reduce` stops all animations.
- Billing toggle uses `role="radiogroup"` with `aria-label`.
- Cards are keyboard-focusable with visible focus rings.
- Semantic HTML with `<article>`, `<section>`, `<footer>`.

---

## 📜 License

Part of [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).
