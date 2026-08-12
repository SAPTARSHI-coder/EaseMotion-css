# Sub-Orbital Space Tourism Booking Portal — Phase #756

**EaseMotion CSS Showcase** · `submissions/examples/sub-orbital-space-tourism-booking-portal-phase-756/`

A luxury, dark-themed UI showcase for a fictional space tourism agency. Features a multi-layered parallax starfield background, glassmorphism panels, and elegant CSS entrance animations.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/sub-orbital-space-tourism-booking-portal-phase-756/demo.html
```

---

## Design Theme

Luxury space travel, expansive dark midnight UI, elegant typography, and glowing interactive elements.

| Token | Value | Purpose |
|---|---|---|
| `--clr-space` | `#050814` | Deep space background |
| `--clr-starlight`| `#f8fafc` | Primary Text |
| `--clr-gold`| `#fbbf24` | Call-to-action & luxury accents |
| `--clr-nebula`| `#a855f7` | Ambient background glow |

---

## Component Breakdown

### 1. CSS-Only Infinite Starfield
- **Parallax Stars**: Built using multiple layers of `radial-gradient` backgrounds on `body::before` (tiny, fast stars) and `body::after` (large, slow stars). These layers are animated infinitely along the X/Y axes using `background-position` to create a feeling of drifting through space.
- **Nebula Glow**: A fixed `.nebula-glow` div utilizes a `blur(60px)` filter and a slow pulsing animation to provide an ambient purple haze behind the content.

### 2. Glassmorphism Booking Panel
- The right sidebar uses `backdrop-filter: blur(20px)` combined with a semi-transparent border and background (`rgba(255, 255, 255, 0.05)`) to create a high-end frosted glass effect hovering over the starfield.

### 3. Rotating Planet Visual
- A decorative planet (`.planet-visual`) is created entirely with CSS using a circular `radial-gradient` and inset box shadows to simulate a spherical 3D volume. It rotates continuously over a 60-second span.

### 4. Interactive Elements
- **Destination Cards**: Feature hover states that slightly lift the card (`translateY`) and selection states that apply a golden glow (`box-shadow`).
- **Book Button**: An aggressive CTA with a glowing box-shadow and a `::before` pseudo-element that creates a shiny sweeping gradient effect when hovered.
- **Entrance Stagger**: Uses a `fadeUp` animation with a custom `cubic-bezier` timing function, paired with `delay-X` utility classes for sequential loading.

---

## File Structure

```
sub-orbital-space-tourism-booking-portal-phase-756/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
