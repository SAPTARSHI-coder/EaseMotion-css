# CSS Morph-Glow Pricing Table for Fintech Dashboard Layouts

> Issue: [#59413](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59413)

A pure CSS morph-glow pricing table with animated rotating border gradients that morph around pricing cards, creating a living neon perimeter glow for fintech dashboards.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| **Morphing Border Glow** | `@keyframes morphGlow` smoothly shifts a multi-color gradient (`background-position`) around each card border. |
| **Glow Pulse** | Featured cards add `@keyframes glowPulse` for rhythmic opacity/blur oscillation. |
| **Hover Intensification** | Glow opacity jumps to 80%, blur expands, card scales 1.02×. |
| **Pure CSS Billing Toggle** | Monthly/Annual radio-based toggle with sliding indicator. |
| **3 Pricing Tiers** | API Starter ($49), Trading Pro ($179, featured), Institutional (Custom). |
| **Responsive** | 3 → 2 → 1 columns. |
| **Accessible** | `prefers-reduced-motion` disables glow animations. |

---

## 🎨 CSS Custom Properties

```css
:root {
    --glow-1: #a855f7;
    --glow-2: #d946ef;
    --glow-3: #ec4899;
    --glow-4: #8b5cf6;
    --glow-speed: 4s;
    --glow-size: 3px;
    --glow-blur: 14px;
}
```

---

## 🔧 Integration

1. Copy the folder into your project.
2. Link `style.css` in your `<head>`.
3. Each card needs a `.glow-border` sibling div for the animated border effect.
4. Customize glow colors, speed, and blur via CSS custom properties.

---

## 📂 File Structure

```
59413-css-morph-glow-pricing-table-fintech-dashboard/
├── demo.html    # Full pricing page
├── style.css    # Morph-glow animations
└── README.md    # Documentation
```

---

## 🎬 Animations

| Animation | Trigger | Description |
|---|---|---|
| `morphGlow` | Continuous | Gradient background-position cycles along the border |
| `glowPulse` | Continuous (featured) | Opacity and blur oscillation for emphasis |
| `cardReveal` | Page load | Staggered fade-in entrance |
| Hover glow | `:hover` | Increased opacity, blur, and card scale |

---

## ♿ Accessibility

- `prefers-reduced-motion: reduce` disables all animations; glow border shows static.
- Keyboard-focusable cards with visible focus rings.
- Semantic HTML and ARIA labels throughout.

---

## 📜 License

Part of [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).
