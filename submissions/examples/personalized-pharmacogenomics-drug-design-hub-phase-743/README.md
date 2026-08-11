# Personalized Pharmacogenomics Drug Design Hub — Phase #743

**EaseMotion CSS Showcase** · `submissions/examples/personalized-pharmacogenomics-drug-design-hub-phase-743/`

A clean, clinical, and data-rich UI showcase for a personalized medicine and drug synthesis platform. Features CSS-rendered molecular models, data scanning animations, and a sleek medical aesthetic.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/personalized-pharmacogenomics-drug-design-hub-phase-743/demo.html
```

---

## Design Theme

Clinical UI, biomedical data visualization, clean white surfaces with vibrant data-accent colors.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#f8fafc` | Clean laboratory background |
| `--clr-dna-blue`| `#0ea5e9` | Primary accent / DNA modeling |
| `--clr-enzyme-teal`| `#14b8a6` | Secondary accent / Synthesis |
| `--clr-bio-purple`| `#8b5cf6` | Tertiary accent / Variants |

---

## Component Breakdown

### 1. CSS Molecule Visualizer (Main View)
- The central visualizer contains an entirely CSS-rendered abstract molecule (`.css-molecule`). 
- It uses absolutely positioned `div` elements for nodes (atoms) and rotated line elements for bonds.
- The entire molecule container applies a continuous `mol-float` animation to simulate suspension in a fluid environment.

### 2. Scanner Animation
- Inside the visualizer, a `.scan-line` div uses a `scan-vertical` keyframe animation. It moves from `top: 0` to `top: 100%` and fades in and out, simulating a continuous analysis scan over the molecular structure.

### 3. Conic Gradient Spinner
- The header brand icon uses a CSS `conic-gradient` with the brand colors, animated with a simple infinite rotation (`spin-slow`) to look like a loading/processing centrifuge.

### 4. Patient Genomic Profile (Left Sidebar)
- Clean card-based UI (`.gene-card`) showing patient alleles and phenotypes.
- Hover states include a subtle Y-axis translation and an inset colored border on the left (`::before` pseudo-element) that changes color based on the risk level of the variant.

---

## File Structure

```
personalized-pharmacogenomics-drug-design-hub-phase-743/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
