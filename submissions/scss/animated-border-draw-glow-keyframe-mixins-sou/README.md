# Animated Border Draw & Glow Keyframe Mixins

> Reusable SCSS mixins for creating **animated border-draw** effects (top → right → bottom → left) and **pulsing glow halos** around any element.

**Author:** [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux)  
**Issue:** [#27836](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/27836)  
**Track:** SCSS Integration

---

## What Does This Do?

Provides three composable SCSS mixins and matching utility classes for:

1. **`ease-animated-border`** — draws a border sequentially around an element
2. **`ease-glow-pulse`** — adds a soft, pulsing box-shadow halo
3. **`ease-border-glow-combo`** — combines both effects for a rich interactive look

Perfect for buttons, cards, badges, focus states, and attention-grabbing UI elements.

---

## Files

| File | Purpose |
|------|---------|
| `_animated-border-draw-glow-keyframe-mixins-sou.scss` | Main SCSS partial (mixins + keyframes) |
| `style.css` | Compiled CSS output |
| `demo.html` | Standalone browser demo |
| `README.md` | This documentation |

---

## Configurable Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `$ease-border-color` | `#3b82f6` | Border color |
| `$ease-border-width` | `2px` | Border thickness |
| `$ease-border-duration` | `1.2s` | Border draw duration |
| `$ease-border-timing` | `ease-in-out` | Animation timing function |
| `$ease-glow-color` | `rgba(59,130,246,0.7)` | Glow halo color |
| `$ease-glow-duration` | `1.8s` | One glow pulse cycle |
| `$ease-glow-spread` | `12px` | Max glow spread radius |

---

## Usage

### 1. Utility Classes

```html
<button class="ease-border-draw">Draw Border</button>
<button class="ease-glow-pulse">Pulse Glow</button>
<button class="ease-border-glow">Border + Glow</button>
```

### 2. Mixins (`@include`)

```scss
@import 'animated-border-draw-glow-keyframe-mixins-sou';

.my-button {
  @include ease-animated-border(#ff5722, 3px, 1s);
}

.my-card {
  @include ease-glow-pulse(rgba(255, 0, 150, 0.6), 2s, 20px);
}

.my-hero-cta {
  @include ease-border-glow-combo(#00e0ff);
}
```

---

## Why Is This Useful?

- ✅ **Composable** — use border-draw, glow, or both together
- ✅ **Fully configurable** — override color, width, duration, spread
- ✅ **Animation-agnostic** — works standalone or with other effects
- ✅ **Attention magnet** — perfect for CTAs, form focus states, badges
- ✅ **Fits EaseMotion's philosophy** — small, class-based, human-readable

---

## Demo

Open `demo.html` in any modern browser to see all three effects live, plus a "Replay Animations" button.

---

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge, Opera) that support CSS `animation`, `@keyframes`, and multi-value `background-image`.
