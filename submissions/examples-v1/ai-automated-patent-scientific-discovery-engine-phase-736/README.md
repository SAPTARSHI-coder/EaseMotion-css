# AI Automated Patent & Scientific Discovery Engine — Phase #736

**EaseMotion CSS Showcase** · `submissions/examples/ai-automated-patent-scientific-discovery-engine-phase-736/`

A sleek, data-driven academic UI showcase representing an AI-powered search engine for patents and scientific literature. Features a CSS-rendered floating knowledge graph and smooth data-card animations.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/ai-automated-patent-scientific-discovery-engine-phase-736/demo.html
```

---

## Design Theme

Academic, clean, knowledge-focused, with subtle animated details.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#f1f5f9` | Light slate background |
| `--clr-primary`| `#4f46e5` | Indigo / Main brand color |
| `--clr-accent`| `#0d9488` | Teal / Secondary accent |
| `--clr-text`| `#1e293b` | High contrast navy text |

---

## Component Breakdown

### 1. Knowledge Graph Visualizer (Main View)
- A central panel showcasing a CSS-simulated knowledge graph.
- **Nodes**: Built with `div` elements styled as circles (`border-radius: 50%`). Orbiting nodes use continuous `float-1` and `float-2` animations (translating on the Y-axis) to simulate a dynamic, connected system. Hovering over a node enlarges it and brings it to the foreground (`z-index: 10`).
- **Edges**: Utilizes an inline `<svg>` layer with `<line>` elements connecting the nodes. The edges feature a `stroke-dasharray` and are animated using `stroke-dashoffset` (`dash-flow` keyframe) to visualize data flowing between concepts.
- **Depth Overlay**: A `radial-gradient` overlay casts a subtle vignette/fade around the edges of the graph container.

### 2. AI Synthesis Panel (Left Sidebar)
- A text-heavy panel designed for readability using the `Work Sans` font.
- Features a pulsing AI badge (`pulse-ai` keyframe) that uses animated box-shadows to draw the user's eye, indicating the system is "thinking" or processing data in real-time.

### 3. Prior Art Results Feed (Right Sidebar)
- Interactive document cards for patents and research papers.
- Features color-coded badges and tags. Hovering over a card triggers a slight X-axis translation (`translateX(-4px)`) and a shadow increase, encouraging interaction.

---

## File Structure

```
ai-automated-patent-scientific-discovery-engine-phase-736/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
