# 3D-Flip Pricing Table (Glassmorphism)

A pure CSS/HTML pricing table where each card flips in 3D on hover/focus to
reveal its full feature list on the back — built with a frosted-glass
(glassmorphism) surface over a vibrant gradient background. No JavaScript.

## ✨ Features

- **Pure CSS / HTML** — no JS frameworks, no dependencies
- **True 3D flip** — `perspective` + `rotateY(180deg)` with `backface-visibility: hidden`, not a fade trick
- **Glassmorphism surface** — `backdrop-filter: blur()` + translucent background + soft borders
- **Keyboard accessible flip** — triggers on `:hover` *and* `:focus-within`, so tabbing to the "Choose Plan" link on the back also works without a mouse
- **Featured plan styling** — a highlighted middle card with a badge and accent glow
- **Fully responsive** — 3 → 2 → 1 column layout across breakpoints
- **Accessible** — `prefers-reduced-motion` swaps the 3D rotation for a simple opacity crossfade

## 📁 Files

| File | Purpose |
|---|---|
| `demo.html` | Standalone showcase page with a 3-tier pricing grid |
| `style.css` | All styling, glass effect, and flip animation logic |
| `README.md` | This file |

## 🚀 Usage

1. Include `style.css` in your page `<head>`.
2. Build each pricing card with the flip-card structure:

```html
<div class="em-flip-card">
  <div class="em-flip-card-inner">

    <div class="em-flip-card-face em-flip-card-front em-glass">
      <p class="em-plan-name">Starter</p>
      <p class="em-plan-price">$9<span>/mo</span></p>
      <p class="em-plan-tagline">For solo projects</p>
      <button class="em-btn em-btn-glass" tabindex="-1">Flip for details</button>
    </div>

    <div class="em-flip-card-face em-flip-card-back em-glass">
      <p class="em-plan-name">Starter includes</p>
      <ul class="em-feature-list">
        <li>1 project workspace</li>
        <li>5GB storage</li>
      </ul>
      <a href="#" class="em-btn em-btn-solid">Choose Starter</a>
    </div>

  </div>
</div>
```

3. Wrap any number of cards in `.em-pricing-grid` for the responsive layout.
4. Mark a card as the highlighted plan with an extra modifier class:

```html
<div class="em-flip-card em-flip-card--featured">
  ...
  <span class="em-badge">Most Popular</span>
  ...
</div>
```

> The front-face button uses `tabindex="-1"` since it's purely a visual cue
> ("flip for details") — the real call-to-action link lives on the back
> face and receives focus naturally, which is what triggers the flip via
> `:focus-within` for keyboard users.

## 🎛️ CSS Custom Properties

Customize the theme by overriding these variables on `:root` or a scoped
parent:

```css
:root {
  --em-bg-1: #1a1035;              /* page background gradient start */
  --em-bg-2: #0e1a3a;              /* page background gradient end */

  --em-text: #f4f4fb;              /* primary text color */
  --em-text-dim: rgba(244,244,251,0.7); /* secondary/muted text */

  --em-glass-bg: rgba(255,255,255,0.08);   /* glass surface fill */
  --em-glass-border: rgba(255,255,255,0.22); /* glass surface border */
  --em-glass-blur: 14px;                    /* backdrop blur amount */

  --em-primary: #7c5cff;           /* primary accent (buttons, gradient) */
  --em-secondary: #22d3ee;         /* secondary accent (checkmarks, links) */
  --em-featured: #ff8fd6;          /* featured-card accent color */

  --em-radius: 18px;               /* card corner radius */
  --em-duration-flip: 0.7s;        /* 3D flip duration */
  --em-ease-flip: cubic-bezier(0.4, 0.2, 0.2, 1); /* flip easing curve */
}
```

Swap `--em-primary` / `--em-secondary` / `--em-featured` for a different
palette — buttons, checkmarks, badges, and the featured-card glow all
reference these automatically.

## 🧩 Key Classes

| Class | Purpose |
|---|---|
| `.em-pricing-grid` | Responsive grid container for the cards |
| `.em-flip-card` | Outer wrapper — sets 3D `perspective` and card height |
| `.em-flip-card-inner` | The element that actually rotates 180° on hover/focus |
| `.em-flip-card-face` | Shared face styling (`backface-visibility: hidden`) |
| `.em-flip-card-front` / `.em-flip-card-back` | Front (summary) and back (feature list) faces |
| `.em-flip-card--featured` | Modifier for the highlighted/recommended plan |
| `.em-glass` | Reusable glassmorphism surface (blur + translucency + border) |
| `.em-badge` | "Most Popular" style ribbon for the featured card |

## ♿ Accessibility Notes

- The flip is triggered by both `:hover` and `:focus-within`, so keyboard
  users tabbing through the page will see the back face as soon as focus
  lands on its content.
- Under `prefers-reduced-motion: reduce`, the 3D `rotateY` transform is
  disabled entirely; the component instead crossfades between front and
  back content, so the same information is still reachable without
  motion-triggered discomfort.
- Card content maintains sufficient color contrast against the glass
  surface thanks to the darker gradient background behind it.

## 📱 Responsive Behavior

- **Desktop (>900px):** 3-column grid.
- **Tablet (620–900px):** 2-column grid; the third card centers and spans
  below the first two.
- **Mobile (<620px):** single-column stack with reduced card height and
  padding for smaller viewports.

## 🌐 Browser Support

Relies on standard, widely-supported CSS: `perspective`,
`transform-style: preserve-3d`, `backface-visibility`, `backdrop-filter`
(with `-webkit-` fallback for Safari), CSS custom properties, and
`:focus-within`. Works in all modern evergreen browsers.