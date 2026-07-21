# Exoplanet Bio-Habitability Exploration Index — Phase #762

**EaseMotion CSS Showcase** · `submissions/examples/exoplanet-bio-habitability-exploration-index-phase-762/`

A deep-space, astrobiology HUD UI showcase representing an exoplanet habitability scanner. Features a CSS-rendered 3D holographic planet with sweeping scanners, deep space starfields, and rotating orbital rings.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/exoplanet-bio-habitability-exploration-index-phase-762/demo.html
```

---

## Design Theme

Deep Space, Planetary UI, Holographic Projections, and Astrobiology.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#09090b` | Void Black background |
| `--clr-cyan`| `#06b6d4` | Biosphere Cyan / Holograms |
| `--clr-purple`| `#a855f7` | Nebula Purple / Gas Spectra |
| `--clr-gold`| `#fbbf24` | Starlight Gold / Stellar data |

---

## Component Breakdown

### 1. 3D Holographic Exoplanet (Center View)
- The `.exoplanet` uses a combination of `linear-gradient` (for spherical shading) and a `repeating-linear-gradient` (to simulate planetary bands/clouds).
- Complex `box-shadow` configurations (using `inset`) give it a 3D spherical depth.
- The `planet-spin` keyframe animates the `background-position` to simulate rotation.
- **Scanner Sweep**: An `::after` pseudo-element on the planet creates a holographic scanner line that sweeps down the planet using the `scan-sweep` keyframe.

### 2. Deep Space Starfield Background
- Built entirely with CSS `radial-gradient` dots spread across the viewport.
- The `star-drift` keyframe slowly pans the background to simulate travel through space.
- A secondary `.nebula-pulse` creates a soft, ambient purple glow in the corner.

### 3. Surface Topology Radar (Right Sidebar)
- The `.topo-grid` uses a grid background pattern.
- An `::after` pseudo-element with a `conic-gradient` acts as a radar sweep, rotating continuously (`radar-spin` keyframe) to simulate scanning the planetary surface.

### 4. Habitability Score Ring (Left Sidebar)
- The `.hab-score` outer ring has a dashed border and rotates continuously.
- The `.hab-score-inner` content rotates in the *exact opposite* direction (`rotate-dash-rev`) at the same speed. This keeps the text perfectly level while the border ring spins around it.

---

## File Structure

```
exoplanet-bio-habitability-exploration-index-phase-762/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
