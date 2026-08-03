# Nanotech Molecular Assembler Control Panel — Phase #734

**EaseMotion CSS Showcase** · `submissions/examples/nanotech-molecular-assembler-control-panel-phase-734/`

A sci-fi, industrial dark-mode UI simulating a control interface for a nanoscale fabrication chamber. Features a CSS-rendered hexagonal grid, spinning assembler animations, and a nanobot swarm status matrix.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/nanotech-molecular-assembler-control-panel-phase-734/demo.html
```

---

## Design Theme

Industrial sci-fi, dark carbon interfaces, and glowing neon plasma indicators.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#0a0a0a` | Deep carbon black |
| `--clr-orange`| `#fb923c` | Plasma Orange / Active state |
| `--clr-blue`| `#38bdf8` | Electron Blue / Primary |
| `--clr-green`| `#4ade80` | Atomic Green / Stable |

---

## Component Breakdown

### 1. CSS Hexagonal Grid Background
- The background pattern uses a complex series of overlapping `linear-gradient` declarations to generate a seamless hexagonal mesh without relying on SVGs or external images.

### 2. Fabrication Chamber Visualizer (Main View)
- Built entirely with CSS borders, `border-radius`, and shadows.
- **Outer Ring**: A dashed border that rotates infinitely (`spin-ring`).
- **Inner Core**: A `conic-gradient` masked with an inner solid circle rotates counter to the outer ring, creating a mechanical spinning rotor effect.
- **Target Molecule**: A central diamond shape (rotated 45deg) that pulses using `transform: scale` and inset box-shadows.

### 3. Nanobot Swarm Grid
- A grid of small squares (`.bot-node`) representing individual nanobots.
- Uses various CSS animation keyframes to represent state: `bot-flicker` (idle/connecting), static solid colors (active/busy), and `blink-err` (offline/error).

### 4. Entrance Animations
- The left and right sidebars slide in using a custom mechanical cubic-bezier bounce curve (`--ease-mech`), giving the UI a heavy, physical feel.

---

## File Structure

```
nanotech-molecular-assembler-control-panel-phase-734/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
