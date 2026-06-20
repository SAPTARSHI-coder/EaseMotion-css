# Animated Neon Border Button Collection

**Path:** `submissions/examples/animated-neon-buttons/`  
**Issue:** [#14328](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/14328)

---

## What does this component do?

A self-contained set of neon-styled buttons built entirely with CSS custom properties and `@keyframes`. No JavaScript, no external dependencies — just drop the files in and open `demo.html`.

| Feature | Technique |
|---|---|
| Animated glowing border | `box-shadow` layering + `neon-pulse` keyframe |
| Electric flicker on hover | `neon-flicker` keyframe (rapid opacity steps) |
| Idle breathing glow | `neon-breathe` keyframe (3 s ease-in-out loop) |
| Ripple on click | `::after` pseudo-element + `neon-ripple` keyframe |
| 4 colour themes | CSS custom properties (`--neon-core`, `--neon-glow`, `--neon-bright`) |
| Variants | `.cta`, `.outline`, `.icon` modifier classes |
| Sizes | `.sm`, `.lg` modifier classes |
| Accessibility | `focus-visible` ring, `aria-disabled`, `prefers-reduced-motion` |

---

## What problem does it solve?

EaseMotion CSS already ships glassmorphism panels and animated gradient cards, but had no dedicated **interactive-element** neon pattern.  
Neon buttons are one of the most-requested UI elements in dark-mode dashboards, game UIs, and cyberpunk landing pages. This component fills that gap while demonstrating a `box-shadow` + flicker combination that is architecturally distinct from the gradient-border approach used in the card collection.

---

## How do I use it?

### 1 — Copy the files

```
your-project/
└── animated-neon-buttons/
    ├── style.css   ← component styles
    └── demo.html   ← standalone showcase (open directly in browser)
```

### 2 — Link the stylesheet

```html
<link rel="stylesheet" href="animated-neon-buttons/style.css" />
```

### 3 — Add a button

The base class is `.neon-btn`. Combine it with one **theme** and one optional **variant**:

```html
<!-- Themes: plasma | acid | infrared | arctic -->
<!-- Variants: cta | outline | icon -->
<!-- Sizes: sm | lg -->

<button class="neon-btn plasma">Default</button>
<button class="neon-btn cta acid">CTA Acid</button>
<button class="neon-btn outline arctic">Outline Arctic</button>
<button class="neon-btn icon infrared" aria-label="Power">⚡</button>
<button class="neon-btn lg plasma">Large Plasma</button>
```

### 4 — Custom theme

Override the three core tokens on any element:

```css
.neon-btn.my-theme {
  --neon-core:   #ff00cc;   /* border + inner glow colour */
  --neon-glow:   #9900ff;   /* outer spread colour */
  --neon-bright: #ffaaee;   /* text colour */
  --neon-bg:     rgba(200, 0, 200, 0.08); /* fill */
}
```

---

## File listing

| File | Purpose |
|---|---|
| `style.css` | All custom properties, keyframes, base class, theme modifiers, variant modifiers |
| `demo.html` | Self-contained demo — opens directly in any browser, zero dependencies |
| `README.md` | This file |

---

## Browser support

All features use broadly supported CSS (custom properties, `@keyframes`, `box-shadow`, `color-mix`).  
`color-mix()` is supported in Chrome 111+, Firefox 113+, Safari 16.2+.  
For older browsers the fallback is the `--neon-bg` rgba value defined in `:root`.