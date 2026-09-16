# Glassmorphism Gradient Shimmer

A set of frosted-glass cards demonstrating three "Gradient Shimmer"
techniques: an animated gradient border, a shimmer sweep across heading
text, and a shimmer sweep across the whole glass surface. Pure CSS/HTML —
no JavaScript, no images.

## ✨ Features

- **Pure CSS / HTML** — no JS, no external libraries
- **Hardware accelerated** — shimmer effects animate `background-position`
  and `transform` only, keeping them GPU-composited and jank-free
- **Three shimmer variants in one component set**:
  1. **Border shimmer** — a rotating conic-style gradient band traces the
     card edge
  2. **Text shimmer** — a `background-clip: text` gradient sweeps across
     the heading
  3. **Surface shimmer** — a diagonal light sweep passes across the whole
     frosted panel
- **True glassmorphism** — `backdrop-filter: blur()` + translucency + soft
  inset highlight border
- **Dark mode compatible** — full palette swap via
  `prefers-color-scheme: dark`
- **Accessible** — decorative shimmer layers don't interfere with content,
  and `prefers-reduced-motion` freezes all animation to a static frame
- **Fully responsive** — 3 → 2 → 1 column layout across breakpoints

## 📁 Files

| File | Purpose |
|---|---|
| `demo.html` | Showcase page with all three shimmer card variants |
| `style.css` | All styling, glass effect, and shimmer animation logic |
| `README.md` | This file |

## 🚀 Usage

1. Include `style.css` in your page `<head>`.
2. Pick a variant and use the matching markup.

### Border shimmer

```html
<article class="em-glass-card em-glass-card--border-shimmer">
  <div class="em-glass-card-inner">
    <span class="em-glass-icon" aria-hidden="true">✦</span>
    <h2 class="em-glass-title">Gradient Shimmer</h2>
    <p class="em-glass-copy">Your copy here.</p>
    <button type="button" class="em-btn em-btn-glass">Explore</button>
  </div>
</article>
```

### Text shimmer

Swap the heading class to `.em-shimmer-text` (works standalone, with or
without the border-shimmer variant):

```html
<h2 class="em-shimmer-text">Gradient Shimmer</h2>
```

### Surface shimmer

```html
<article class="em-glass-card em-glass-card--surface-shimmer">
  <div class="em-glass-card-inner">
    ...
  </div>
</article>
```

### Calm / static glass card

Just use `.em-glass-card` with no modifier for a plain, non-animated glass
panel — useful as a resting-state companion.

## 🎛️ CSS Custom Properties

Customize the theme by overriding these variables on `:root` or a scoped
parent:

```css
:root {
  --em-page-bg-1: #eef1fb;        /* page background gradient start */
  --em-page-bg-2: #f7eefb;        /* page background gradient end */
  --em-page-text: #1c1d26;        /* primary text color */
  --em-page-text-dim: #5a5d6b;    /* muted text color */

  --em-glass-bg: rgba(255,255,255,0.35);     /* glass surface fill */
  --em-glass-border: rgba(255,255,255,0.55); /* glass surface border */
  --em-glass-blur: 16px;                      /* backdrop blur amount */
  --em-glass-shadow: rgba(31,38,90,0.18);     /* card drop shadow */

  --em-shimmer-1: #7c5cff;   /* shimmer gradient stop 1 */
  --em-shimmer-2: #22d3ee;   /* shimmer gradient stop 2 */
  --em-shimmer-3: #ff8fd6;   /* shimmer gradient stop 3 */
  --em-shimmer-4: #7c5cff;   /* shimmer gradient stop 4 (loop back to 1) */

  --em-radius: 20px;         /* card corner radius */
  --em-dur-border: 6s;       /* border shimmer cycle duration */
  --em-dur-text: 3.2s;       /* text shimmer sweep duration */
  --em-dur-surface: 7s;      /* surface shimmer sweep duration */
}
```

Dark mode automatically overrides the palette (background, glass opacity,
shimmer brightness) inside a `prefers-color-scheme: dark` block — no
separate dark-mode class needed.

## 🧩 Key Classes

| Class | Purpose |
|---|---|
| `.em-glass-card` | Base glass card wrapper |
| `.em-glass-card-inner` | The actual frosted-glass surface (blur + translucency) |
| `.em-glass-card--border-shimmer` | Modifier: animated gradient border |
| `.em-glass-card--surface-shimmer` | Modifier: diagonal shimmer sweep across the surface |
| `.em-shimmer-text` | Standalone gradient-text shimmer for any heading |
| `.em-glass-icon` / `.em-glass-title` / `.em-glass-copy` | Content styling helpers |

## ♿ Accessibility Notes

- All shimmer effects are purely decorative visual embellishments layered
  behind or around real text content — no `aria-hidden` is needed on the
  text itself since it remains real, readable DOM text (not an image).
- The surface-shimmer sweep pseudo-element sits behind the content
  (`z-index` ordering) and never intercepts pointer or focus events.
- Under `prefers-reduced-motion: reduce`, all three shimmer animations
  (border, text, surface) are disabled and pinned to a single static
  frame, so the component remains visually intact without motion.
- Sufficient color contrast is maintained between text and the glass
  surface in both light and dark palettes.

## ⚡ Performance Notes

- Border and text shimmer animate `background-position` on a
  large, repeating gradient — compositable and inexpensive.
- Surface shimmer animates `transform: translate3d()` on a pseudo-element,
  avoiding layout/paint thrashing.
- `will-change` hints are applied to each animated layer so the browser
  can promote them to their own compositor layer ahead of time.

## 📱 Responsive Behavior

- **Desktop (>900px):** 3-column grid.
- **Tablet (620–900px):** 2-column grid; third card centers and spans
  below the first two.
- **Mobile (<620px):** single-column stack with reduced card padding.

## 🌐 Browser Support

Relies on standard, widely-supported CSS: CSS custom properties,
`backdrop-filter` (with `-webkit-` fallback for Safari),
`background-clip: text` (with `-webkit-` fallback), gradients,
`transform3d`, `prefers-color-scheme`, and `prefers-reduced-motion`. Works
in all modern evergreen browsers.