# AI Synthetic Genome Sequencing Workbench — Phase #871

**EaseMotion CSS Showcase** · `submissions/examples/ai-synthetic-genome-sequencing-workbench-phase-871/`

A complete, single-page, responsive HTML/CSS UI design showcase for a futuristic AI-driven biotech sequencing interface — **SYNTHGENE**.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/ai-synthetic-genome-sequencing-workbench-phase-871/demo.html
```

---

## Design Theme

Bioluminescent biotech aesthetic — deep backgrounds with neon highlights representing genomic data.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#050814` | Deep void background |
| `--clr-dna-a` | `#34d399` | Adenine (Green) |
| `--clr-dna-c` | `#60a5fa` | Cytosine (Blue) |
| `--clr-dna-t` | `#f472b6` | Thymine (Pink) |
| `--clr-dna-g` | `#fbbf24` | Guanine (Yellow) |
| `--clr-primary` | `#00f0ff` | AI / Active state (Cyan) |
| `--clr-secondary`| `#a855f7` | Synthesis state (Purple) |
| `--clr-danger` | `#ff3864` | Mutation / Alert (Red) |

---

## Component Breakdown

### 1. Ambient Background
- CSS `body::before` creates a subtle coordinate grid.
- `.bg-glow` classes create massive, blurred radial blobs (`filter: blur(100px)`) that slowly float in the background using `translate` keyframes, simulating a fluid, organic environment.

### 2. Header & Navigation
- Glassmorphic header with `backdrop-filter: blur(12px)`.
- Pulsing AI cluster status dot.
- Left sidebar with active state indicators that feature a glowing left border.

### 3. DNA Helix Visualizer (CSS Art)
- A pure CSS 3D rotating DNA helix.
- Uses `perspective`, `transform-style: preserve-3d`, and `rotateY` keyframes.
- Staggered `animation-delay` on `.strand-pair` elements creates the helical twist effect.

### 4. Sequence Editor
- Raw genomic data rendered in `Fira Code` monospace.
- Individual `.base` spans are color-coded based on their nucleotide (A, C, T, G).
- Hovering over a base applies a scale transform.
- Specific classes like `.mutated` highlight anomalies with red underlines and backgrounds.

### 5. Expression Heatmap
- A dense CSS Grid of `.heat-cell` elements.
- Simulated intensity levels (`.heat-0` to `.heat-5`) using a dark-blue to bright-magenta color scale.

### 6. AI Diagnostics Panel (Right Sidebar)
- AI confidence cards with glowing gradient top borders.
- Animated progress meters showing viability prediction, mutation risk, and resource estimates.

### 7. Synthesis Queue
- A vertical stepper tracking the synthesis process.
- Active steps pulse, while completed steps glow with a success color.

---

## EaseMotion CSS Techniques Used

| Technique | Applied To |
|---|---|
| `fadeIn` entrance + staggered delay | All major panels and sidebar items |
| `rotateY` 3D animation | DNA Helix Visualizer |
| `float` translation | Ambient background blobs |
| `pulse` opacity keyframe | Status indicators, active synthesis step |
| `backdrop-filter: blur` | Header, main panels |
| Hover `scale` transform | Individual DNA bases |
| CSS Grid | Overall layout, Expression Heatmap |
| `prefers-reduced-motion` | Global animation disable |

---

## File Structure

```
ai-synthetic-genome-sequencing-workbench-phase-871/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```

---

## Browser Support

Targets evergreen browsers. Requires support for CSS variables, CSS Grid, `backdrop-filter`, and 3D transforms.
