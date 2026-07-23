# Component Title Showcase 188 (variation: `sou`)

A premium, pure-CSS animated **showcase card** built for EaseMotion CSS — featuring a rotating conic-gradient border, glassmorphism surface, shimmer gradient title, floating premium badge, and a magnetic-glow CTA button.

> Variation suffix: **`sou`** — parallel implementation alongside `new-comp-slug-188-sn250`.

---

## 1. What does this do?

It renders a self-contained, animated dark-theme showcase card with a rotating gradient border, shimmering title, and an interactive call-to-action — using only HTML and CSS (no JavaScript, no external assets).

## 2. How is it used?

Drop the markup below inside your page and link `style.css`:

```html
<link rel="stylesheet" href="style.css" />

<article class="ease-showcase-188-sou">
  <div class="ease-showcase-188-sou__inner">
    <span class="ease-showcase-188-sou__badge">Premium · 188</span>

    <h2 class="ease-showcase-188-sou__title">
      Component Title Showcase 188
    </h2>

    <p class="ease-showcase-188-sou__desc">
      A self-contained, pure-CSS showcase card.
    </p>

    <div class="ease-showcase-188-sou__meta">
      <div><span>Type</span><span>Showcase</span></div>
      <div><span>Variant</span><span>sou</span></div>
      <div><span>Motion</span><span>Subtle</span></div>
    </div>

    <button type="button" class="ease-showcase-188-sou__cta">
      Explore
    </button>
  </div>
</article>
```

### Class reference

| Class | Purpose |
|---|---|
| `.ease-showcase-188-sou` | Root element. Holds the rotating conic-gradient border and float animation. |
| `.ease-showcase-188-sou__inner` | Glassmorphism surface containing all content. |
| `.ease-showcase-188-sou__badge` | Floating gradient pill badge. |
| `.ease-showcase-188-sou__title` | Shimmering gradient heading. |
| `.ease-showcase-188-sou__desc` | Muted description paragraph. |
| `.ease-showcase-188-sou__meta` | Meta row (3 columns: label + value). |
| `.ease-showcase-188-sou__cta` | Gradient action button with magnetic-glow hover. |

## 3. Why is it useful?

This submission fits EaseMotion CSS's philosophy of **expressive, motion-rich UI built entirely with native CSS**:

- 🎨 **100% pure CSS** — zero JavaScript, zero CDNs, zero external dependencies.
- 🌀 Uses modern CSS features (`conic-gradient`, `@layer`, `backdrop-filter`, `mask-composite`, `background-clip: text`) to demonstrate what raw CSS can do.
- 🧩 **Self-contained & token-driven** — all colors, radii, and shadows live as scoped custom properties (`--es-*`), making theming trivial.
- ♿ **Accessibility-aware** — respects `prefers-reduced-motion`, includes `:focus-visible` styles, and uses semantic HTML (`<article>`, `aria-label`).
- 🧠 Provides a **parallel design variation** to `new-comp-slug-188-sn250` (a simple button), expanding the showcase from a single control to a full content card — exactly as encouraged by the EaseMotion contribution guidelines.

---

## Features

- Rotating conic-gradient border (6s loop)
- Glassmorphism inner surface with backdrop blur
- Animated radial glow blob
- Shimmer gradient text title (4s loop)
- Floating premium badge with subtle bob
- Magnetic-glow CTA with shine sweep + arrow nudge on hover
- Full `prefers-reduced-motion` support

## Browser support

Works in all modern evergreen browsers (Chrome, Edge, Firefox, Safari, Opera).