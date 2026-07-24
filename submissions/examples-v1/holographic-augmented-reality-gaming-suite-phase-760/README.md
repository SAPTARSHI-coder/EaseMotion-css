# Holographic Augmented Reality Gaming Suite — Phase #760

**EaseMotion CSS Showcase** · `submissions/examples/holographic-augmented-reality-gaming-suite-phase-760/`

A cyberpunk, synthwave-inspired AR gaming UI showcase built purely with HTML and CSS. It features 3D transforms, CSS glitch text effects, and holographic animations running at a smooth 60fps.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/holographic-augmented-reality-gaming-suite-phase-760/demo.html
```

---

## Design Theme

Cyberpunk neon, Synthwave grid, and Holographic interfaces.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#0d0221` | Deep purple space background |
| `--clr-cyan`| `#0df` | Primary UI / Electric Cyan |
| `--clr-pink`| `#f0f` | Secondary UI / Hot Pink |
| `--clr-purple`| `#8a2be2` | Accent Purple |
| `--clr-panel`| `rgba(13, 2, 33, 0.6)` | Translucent Glass Panels |

---

## Component Breakdown

### 1. Synthwave Grid Background
- The background grid uses `linear-gradient` layered lines. It is rotated using `transform: rotateX(75deg)` and animated along the Y-axis to create an infinite forward-scrolling floor effect typical of 80s synthwave aesthetics.

### 2. Holographic Projection
- **Projector Base**: An ellipse with a radial gradient and pulsing box-shadow (`pulse-base` keyframe) simulates a light source.
- **Hologram Avatar**: A floating, translucent box utilizing a repeating linear gradient overlay for scanlines. It features a continuous floating animation (`float` keyframe) and a subtle opacity flicker (`holo-flicker` keyframe) to simulate a slightly unstable holographic projection.
- **Scanline Pass**: A bright pink scanline bar moves from top to bottom on repeat via the `scan` keyframe.

### 3. CSS Text Glitch Effect
- The `.glitch` class applies a classic cyberpunk glitch effect without JavaScript. It uses `::before` and `::after` pseudo-elements containing the identical `attr(data-text)` content. These pseudo-elements are clipped using CSS `clip-path: inset()` and rapidly translated in opposite directions via alternating keyframes.

### 4. Glass Panels & Hover States
- UI panels use `backdrop-filter: blur(5px)` to blur the background grid as it passes underneath.
- Buttons and inventory slots feature aggressive hover states, triggering inset box-shadows, scaling, and pseudo-element background reveals.

---

## File Structure

```
holographic-augmented-reality-gaming-suite-phase-760/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
