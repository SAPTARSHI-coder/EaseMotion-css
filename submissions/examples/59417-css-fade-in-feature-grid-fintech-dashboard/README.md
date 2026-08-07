# CSS Fade-In Feature Grid for Fintech Dashboard Layouts

> Issue: [#59417](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59417)

A pure CSS staggered fade-in feature grid designed for fintech dashboards, featuring smooth `@keyframes fadeInUp` entrance animations with configurable stagger delays, ambient glow hover states, and premium dark neon aesthetics.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| **Staggered Fade-In Entrance** | Six feature cards animate sequentially using `animation-delay` increments (0.1s–0.6s), each rising from `opacity:0; translateY(30px)` to full visibility. |
| **Hover Glow Elevation** | Cards elevate with neon-accented `box-shadow` and border glow on hover, with spring-eased icon scaling and rotation. |
| **Responsive CSS Grid** | Adapts from 3 columns (desktop) → 2 columns (tablet ≤900px) → 1 column (mobile ≤600px). |
| **Ambient Background Orbs** | Blurred gradient orbs with gentle floating animation for depth. |
| **CTA Section** | Fade-in scale animated call-to-action with gradient buttons. |
| **Accessible** | Full `prefers-reduced-motion` support disabling all animations and transitions. |
| **Focus Visible** | Keyboard-accessible cards with `:focus-visible` outline ring. |

---

## 🎨 CSS Custom Properties

```css
:root {
    /* Background & Surface */
    --bg-body: #0a0d14;
    --bg-card: rgba(16, 22, 36, 0.75);
    --bg-card-hover: rgba(24, 33, 54, 0.92);

    /* Accent Colors */
    --primary: #3b82f6;
    --cyan: #06b6d4;
    --emerald: #10b981;

    /* Shadows */
    --shadow-hover: 0 18px 40px -12px rgba(59,130,246,0.28),
                    0 0 18px rgba(6,182,212,0.12);

    /* Animation */
    --fade-duration: 0.7s;
    --stagger-base: 0.10s;
    --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 🔧 Integration

1. **Copy** the `59417-css-fade-in-feature-grid-fintech-dashboard/` folder into your project.
2. **Link** `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. **Use** the card markup structure from `demo.html`.
4. **Customise** colors, timing, and layout via the CSS custom properties listed above.

---

## 📂 File Structure

```
59417-css-fade-in-feature-grid-fintech-dashboard/
├── demo.html    # Full HTML5 showcase page
├── style.css    # Pure CSS animations & styling
└── README.md    # Documentation (this file)
```

---

## 🎬 Animations Used

| Animation | Trigger | Description |
|---|---|---|
| `fadeInUp` | Page load (staggered) | Cards rise from below with opacity transition |
| `fadeInScale` | Page load (delayed) | CTA section scales in from 92% |
| `orbFloat` | Continuous | Background orbs gently drift for ambient effect |
| Hover elevation | `:hover` / `:focus-visible` | Cards lift with glow shadow and icon rotation |

---

## ♿ Accessibility

- **`prefers-reduced-motion: reduce`**: Disables all animations and transitions.
- **`tabindex="0"`**: All cards are keyboard-focusable.
- **`:focus-visible`**: Visible focus ring on keyboard navigation.
- **ARIA labels**: Grid section and feature lists have descriptive labels.
- **Semantic HTML**: Uses `<article>`, `<header>`, `<footer>`, `<section>`, `<nav>` elements.

---

## 📜 License

Part of the [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) framework.
