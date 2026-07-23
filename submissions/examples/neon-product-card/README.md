# Neon Product Card

## Description
An advanced product card featuring a full 3D flip (front → spec sheet back), a continuously rotating conic-gradient neon border, floating parallax glow orbs, and a staggered multi-layer content entrance sequence. Pure CSS — zero JavaScript, including a CSS-only ripple effect on the CTA button.

## Advanced techniques used
- **3D flip**: `perspective` + `transform-style: preserve-3d` + `backface-visibility: hidden`, triggered on `:hover`/`:focus-within` for keyboard accessibility
- **Rotating neon border**: `conic-gradient` animated via `@keyframes` rotation, masked to only show as a border ring (`mask-composite: exclude`)
- **Parallax glow orbs**: two independently-animated blurred circles with different float paths/durations for organic depth
- **Staggered entrance sequencing**: badge, title, subtitle, price, and CTA each fade/slide in with incrementing `animation-delay`, plus the whole card itself enters with a 3D rotate-in
- **Pure CSS ripple**: radial-gradient pseudo-element scaled/faded on `:active`, no JS/click-position tracking needed

## Usage
See `demo.html` for the full front/back markup structure. Core wrapper:
```html
<div class="ease-neon-card" tabindex="0">
  <div class="glow-orb glow-orb--1"></div>
  <div class="glow-orb glow-orb--2"></div>
  <div class="card-flip-inner">
    <div class="card-face card-front">...</div>
    <div class="card-face card-back">...</div>
  </div>
</div>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--flip-duration` | `0.8s` | 3D flip animation duration |
| `--flip-easing` | `cubic-bezier(0.65, 0, 0.35, 1)` | Flip timing function |
| `--border-spin-duration` | `4s` | Neon border rotation speed |
| `--entrance-duration` | `0.6s` | Card entrance animation duration |
| `--neon-primary` | `#00f0ff` | Primary neon color (cyan) |
| `--neon-secondary` | `#ff00c8` | Secondary neon color (magenta) |
| `--neon-tertiary` | `#a3ff00` | Tertiary neon color (lime) |

## Accessibility & Motion
Card is keyboard-focusable (`tabindex="0"`) and flips on `:focus-within` as well as `:hover`, so keyboard users can access the back face. All animations — entrance, border spin, orb float, content stagger — are disabled under `prefers-reduced-motion`, with content shown immediately in its final state.

## Files
- `demo.html` — live working example
- `style.css` — component styles and all animation sequencing
- `README.md` — this file