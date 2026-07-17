# Rotate Testimonial Card

A 3D flip-card component that rotates around the Y-axis on hover, revealing the testimonial quote on the back face. Inspired by modern social media card designs.

## Features

- **3D Y-axis flip** — CSS `perspective` and `rotateY` with `backface-visibility: hidden`
- **Dual face design** — front shows avatar + identity; back shows testimonial quote + stars
- **Social media aesthetic** — dark glassmorphism, accent glows, subtle gradients
- **Animated avatar ring** — pulsing gradient ring with glow halo
- **Star ratings** — golden star display with glow effect
- **Repeating dot pattern** — subtle texture on card back
- **Pure CSS** — no JavaScript required
- **Accessible** — `focus-within` fallback for keyboard users; `aria-label` on stars

## File Structure

```
rotate-testimonial-card/
├── demo.html
├── style.css
└── README.md
```

## How It Works

The card uses a **preserve-3d** inner container with two absolutely-positioned faces:

- **Front face** — visible by default; contains the user's avatar, name, role, and company
- **Back face** — hidden behind the front (`rotateY(180deg)`); contains the testimonial quote, star rating, and date

On `:hover` (or `:focus-within`), the inner container rotates `180deg` on the Y axis, revealing the back face. The transition uses a custom `cubic-bezier` curve for a satisfying physical feel.

### Key CSS Properties

| Property | Value | Purpose |
|---|---|---|
| `perspective` | `1000px` | Sets the viewing distance for 3D transforms |
| `transform-style` | `preserve-3d` | Keeps children in 3D space |
| `backface-visibility` | `hidden` | Hides the back of each face |
| `transition` | `0.7s cubic-bezier(0.4, 0.2, 0.2, 1)` | Smooth, slightly dampened flip |
| `rotateY(180deg)` | on `.card-back` | Pre-rotated so it faces away |

## Usage

Open `demo.html` in any modern browser. Hover over any card to trigger the 3D rotation and read the testimonial.

## Customization

Override CSS custom properties to match your brand:

```css
:root {
  --accent: #your-brand-color;
  --accent-glow: rgba(brand, 0.4);
  --bg-card-front: #your-dark-bg;
  --bg-card-back: #your-darker-bg;
}
```
