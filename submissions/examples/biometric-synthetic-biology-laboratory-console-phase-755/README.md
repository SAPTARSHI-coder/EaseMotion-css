# Biometric Synthetic Biology Laboratory Console — Phase #755

**EaseMotion CSS Showcase** · `submissions/examples/biometric-synthetic-biology-laboratory-console-phase-755/`

A sleek, high-tech HUD UI showcase representing a synthetic biology laboratory console. Features a CSS-rendered 3D rotating DNA helix, scrolling genetic sequence feeds, and protein morphogenesis animations.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/biometric-synthetic-biology-laboratory-console-phase-755/demo.html
```

---

## Design Theme

Biotech UI, Synthetic Violet/Indigo, DNA Sequencing, and Clean Lab Interfaces.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#0f172a` | Deep Bio Indigo background |
| `--clr-violet`| `#8b5cf6` | Synthetic Violet / Primary UI |
| `--clr-gene-c`| `#38bdf8` | Cytosine Blue |
| `--clr-gene-g`| `#22c55e` | Guanine Green |

---

## Component Breakdown

### 1. Synthetic DNA Assembly (Center View)
- A 3D representation of a DNA Double Helix built purely with CSS.
- The parent `.helix` container uses `transform-style: preserve-3d` and rotates continuously (`rotate-helix` keyframe).
- Twelve `.rung` elements (representing base pairs) are stacked vertically. Each is rotated incrementally along the Y-axis (e.g., `rotateY(30deg)`) to form the spiral twist.
- The `.rung::before` and `.rung::after` pseudo-elements act as the colored nodes, spaced outwards to form the backbones.

### 2. Genetic Sequencing Data Stream (Left Sidebar)
- Simulates a live feed of nucleotide bases (A, C, T, G).
- The `.seq-row` elements slide upwards continuously using the `slide-up` keyframe.
- The `nth-child` selector is used to colorize the individual letters based on the 4 nucleotide bases without requiring individual span classes.

### 3. Protein Morphogenesis (Right Sidebar)
- Uses CSS `border-radius` morphing to simulate protein folding.
- The `.molecule` element's `border-radius` values transition between complex 8-point percentage values (e.g., `40% 60% 70% 30% / 40% 50% 60% 50%`) while rotating (`morph` keyframe), creating an organic, fluid shape.

---

## File Structure

```
biometric-synthetic-biology-laboratory-console-phase-755/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
