# Ease 3D Flip Navbar — Creative Portfolio

## Description
A navbar built around genuine 3D transforms rather than a simple flip-card pattern: a continuously auto-rotating cube logo (6 real faces in 3D space), nav links that flip 180° on hover to reveal an icon face, and — on mobile — a menu panel that opens with a true "page turn" rotation from its hinge edge (`rotateY` from the right side), not a slide or fade. Pure CSS, zero JavaScript.

## What makes this unique
- **Real 3D cube logo**: 6 positioned faces (`translateZ` + `rotateX/Y`) forming an actual cube, continuously spinning via `@keyframes` — not a flat icon.
- **Per-link 3D flip**: each nav item is its own `perspective` context; hovering rotates the link `rotateX(-180deg)` to swap from a text face to an icon+text face, using `backface-visibility: hidden` so only one face is ever visible.
- **3D page-turn mobile menu**: instead of the typical slide-down, the mobile panel is hinged at its right edge (`transform-origin: right center`) and rotates in from `rotateY(-100deg)` to `0deg` — genuinely reads as a panel swinging open in 3D space.
- **Staggered link reveal**: mobile menu items fade/slide in with incrementing delays once the panel has opened.

## Usage
See `demo.html` for full markup. Core structure:
```html
<nav class="ease-navbar">
  <div class="logo-cube-wrap">
    <div class="logo-cube">
      <div class="cube-face front">E</div>
      <div class="cube-face back">M</div>
      <div class="cube-face right">✦</div>
      <div class="cube-face left">✦</div>
      <div class="cube-face top">✦</div>
      <div class="cube-face bottom">✦</div>
    </div>
  </div>

  <ul class="nav-links">
    <li class="nav-item">
      <div class="nav-flip">
        <span class="nav-face face-text">Work</span>
        <span class="nav-face face-icon"><svg>...</svg>Work</span>
      </div>
    </li>
  </ul>

  <input type="checkbox" id="mobileMenuToggle" class="menu-toggle-input" />
  <label for="mobileMenuToggle" class="menu-toggle-label" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </label>

  <div class="mobile-menu-panel">
    <ul><li><a href="#">Work</a></li></ul>
  </div>
</nav>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--flip-duration` | `0.6s` | Nav link / menu panel flip duration |
| `--flip-easing` | `cubic-bezier(0.65, 0, 0.35, 1)` | Flip timing function |
| `--cube-size` | `40px` | Logo cube dimensions |
| `--nav-accent-1/2/3` | coral / violet / teal | Accent color trio used across cube, active state, hover icons |
| `--nav-height` | `76px` | Navbar height |

## Accessibility & Responsiveness
Nav link flips trigger on `:focus-within` as well as `:hover`, so keyboard users reach both faces. Mobile menu is a native checkbox/label toggle (fully keyboard operable). All 3D rotation animations — cube spin, link flip, menu page-turn — are disabled under `prefers-reduced-motion`, falling back to instant/opacity-only transitions. Collapses to the mobile hamburger + panel layout below 820px viewport width.

## Files
- `demo.html` — live working example
- `style.css` — all component styles and 3D animations
- `README.md` — this file