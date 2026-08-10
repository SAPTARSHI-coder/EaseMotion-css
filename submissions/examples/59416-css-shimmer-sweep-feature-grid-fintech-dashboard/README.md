# CSS Shimmer-Sweep Feature Grid for Fintech Dashboard Layouts

> Issue: [#59416](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59416)

A pure CSS shimmer-sweep feature grid with diagonal light-flare reflections that sweep across capability cards on hover, designed for fintech trading terminals.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| **Diagonal Shimmer Sweep** | A 115° gradient overlay slides from left to right on hover using `@keyframes shimmerSweep`. |
| **Continuous Featured Shimmer** | Featured/highlighted cards run a perpetual `shimmerContinuous` animation loop. |
| **Button Shimmer** | CTA button features its own shimmer sweep on hover. |
| **Responsive CSS Grid** | 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile). |
| **Grid Line Background** | Subtle CSS grid-line pattern for terminal aesthetics. |
| **Accessible** | Full `prefers-reduced-motion` support; shimmer overlays hidden entirely. |

---

## 🎨 CSS Custom Properties

```css
:root {
    --shimmer-color: rgba(255, 255, 255, 0.08);
    --shimmer-color-strong: rgba(255, 255, 255, 0.14);
    --shimmer-angle: 115deg;
    --shimmer-speed: 0.65s;
    --violet: #8b5cf6;
    --cyan: #06b6d4;
    --bg-body: #06080f;
}
```

---

## 🔧 Integration

1. **Copy** the `59416-css-shimmer-sweep-feature-grid-fintech-dashboard/` folder into your project.
2. **Link** `style.css` in your HTML `<head>`.
3. **Add** `.shimmer-overlay` div inside each card for the sweep effect.
4. **Mark** featured cards with the `.featured` class for continuous shimmer.
5. **Customise** via CSS custom properties.

---

## 📂 File Structure

```
59416-css-shimmer-sweep-feature-grid-fintech-dashboard/
├── demo.html    # Full HTML5 showcase page
├── style.css    # Pure CSS shimmer animations
└── README.md    # Documentation (this file)
```

---

## 🎬 Animations

| Animation | Trigger | Description |
|---|---|---|
| `shimmerSweep` | `:hover` / `:focus-visible` | Single diagonal light sweep across the card |
| `shimmerContinuous` | Automatic (`.featured`) | Perpetual shimmer loop on highlighted cards |
| `cardEnter` | Page load (staggered) | Cards fade in from below |
| `orbDrift` | Continuous | Background orbs gently drift |

---

## ♿ Accessibility

- `prefers-reduced-motion: reduce` disables all animations and hides shimmer overlays.
- Cards are keyboard-focusable with `:focus-visible` ring.
- ARIA labels on sections and decorative elements marked `aria-hidden`.

---

## 📜 License

Part of [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).
