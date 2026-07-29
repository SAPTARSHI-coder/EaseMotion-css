# Global Hydrological Clean Water Filtration Grid — Phase #850

**EaseMotion CSS Showcase** · `submissions/examples/global-hydrological-clean-water-filtration-grid-phase-850/`

A complete, single-page, responsive HTML/CSS UI design showcase for a global water filtration grid dashboard.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/global-hydrological-clean-water-filtration-grid-phase-850/demo.html
```

---

## Design Theme

Clean, data-driven, ecological, and fluid.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#020b14` | Deep ocean background |
| `--clr-water-pure`| `#00f0ff` | Fresh water / nominal status |
| `--clr-eco-green` | `#10b981` | Optimal ecological status |
| `--clr-alert` | `#f43f5e` | Contamination warning (Red) |

---

## Component Breakdown

### 1. Ocean Current Background
- **Depth**: `body::before` uses a `radial-gradient` for a deep-sea lighting effect.
- **Current Flow**: `body::after` uses a `repeating-linear-gradient` over a very large area. The `current-drift` keyframe translates it infinitely on the Y-axis to simulate flowing ocean currents behind the UI.

### 2. Header Status
- Glassmorphic header (`backdrop-filter: blur(12px)`).
- Brand icon uses a dashed border that continuously spins (`spin` keyframe) around a static gradient core.

### 3. Regional Grid Status (Left Sidebar)
- Card-based layout for different global regions.
- Colored left borders and progress bars (`.prog-fill`) indicate status (Optimal, Stable, Warning).
- Hover interactions apply a subtle `translateX` and background glow.

### 4. Central Global Map
- A simplified SVG world map applied as a `background-image`.
- **Pinging Nodes**: Absolute positioned `.map-node` elements placed over key regions. They use an expanded `::before` pseudo-element with the `node-ping` keyframe (scaling up and fading out) to simulate sonar/radar pings.
- **Data Flow Connections**: An SVG overlay (`.map-connections`) with `.conn-line` paths connecting the nodes. The `dash-flow` keyframe animates `stroke-dashoffset` on dashed strokes to simulate data or water flowing between hubs.

### 5. Analytics (Right Sidebar)
- **Radial Chart**: A pure CSS rotating ring (`.purity-ring`) built with thick, multi-colored borders.
- **Event Log**: Simulated terminal output using a CSS `log-scroll` animation to create a continuous scrolling marquee of system events, with a gradient fade-out at the bottom.

---

## EaseMotion CSS Techniques Used

| Technique | Applied To |
|---|---|
| `fadeUp` entrance + delay | All sidebars and main panels |
| `current-drift` translation | Ocean current background |
| `spin` rotation | Brand logo & Purity chart |
| `node-ping` scale + opacity | Map nodes |
| `dash-flow` stroke-dashoffset | Map connection lines |
| `log-scroll` translation | Event log stream |
| `backdrop-filter: blur` | Header, panels |

---

## File Structure

```
global-hydrological-clean-water-filtration-grid-phase-850/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
