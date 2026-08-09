# Autonomous Deep-Sea Exploration Intelligence Command — Phase #753

**EaseMotion CSS Showcase** · `submissions/examples/autonomous-deep-sea-exploration-intelligence-command-phase-753/`

An abyssal, submarine HUD UI showcase representing an autonomous deep-sea exploration vehicle's command interface. Features a CSS-rendered primary sonar sweep, scrolling seafloor topology, and ambient bubble particle effects.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/autonomous-deep-sea-exploration-intelligence-command-phase-753/demo.html
```

---

## Design Theme

Submarine UI, Deep Ocean, Sonar arrays, and Hydrothermal vents.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#020617` | Abyssal Navy background |
| `--clr-cyan`| `#0ea5e9` | Sonar Cyan / Primary UI |
| `--clr-green`| `#34d399` | Bioluminescent Green / Sonar Blips |
| `--clr-alert`| `#ef4444` | Pressure Red / Danger |

---

## Component Breakdown

### 1. Primary Sonar Radial Grid (Center View)
- The central `.sonar-view` uses a radial gradient background and dashed `.sonar-ring` elements to create a radar/sonar scope.
- **Sonar Sweep Ping**: The `.sonar-sweep` uses a `conic-gradient` with a hard green border edge, rotating continuously (`radar-spin` keyframe) from the center origin.
- **Sonar Blips**: Absolutely positioned `.sonar-blip` elements pulse (`blip-fade` keyframe) with staggered `animation-delay` to simulate objects being hit by the sonar ping.

### 2. Ambient Bubbles Background
- The `.bubbles` element sits in the background (`z-index: -1`) and uses multiple scattered `radial-gradient` dots.
- The `bubble-rise` keyframe animates the `background-position` upwards to create a continuous stream of rising bubbles.

### 3. Depth Telemetry Gauge (Left Sidebar)
- The `.depth-gauge` features an `::before` pseudo-element with a `repeating-linear-gradient` aligned to the right edge.
- The `depth-scroll` keyframe animates it vertically, creating the illusion of a scrolling measuring tape or depth line as the submersible dives.

### 4. Seafloor Topology (Right Sidebar)
- The `.seafloor` element uses a complex CSS `clip-path: polygon(...)` to create an irregular jagged shape representing the ocean floor.
- It is scaled to 200% width and animated horizontally (`terrain-scroll` keyframe) to simulate the submersible moving over the terrain.

---

## File Structure

```
autonomous-deep-sea-exploration-intelligence-command-phase-753/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
