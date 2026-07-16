# AI Synthetic Genome Sequencing Workbench Showcase

A premium, responsive, biotech-themed single-page laboratory workbench designed for simulated DNA sequencing, neural base pairing, and mutation diagnostics. This workbench runs entirely on semantic HTML5 and vanilla CSS with **zero JavaScript** or external library dependencies, styled using the EaseMotion CSS framework.

## Showcase Features

1. **Sticky Glass Navbar (`ease-navbar-glass`)**: A frosted-glass header with hover underlines that stays sticky at the top, adapting seamlessly to mobile, tablet, and desktop layouts.
2. **Hero Section**: Futuristic laboratory header, looping status ticker (`ease-typewriter-loop`), call-to-actions, and a 3D-twisting DNA double-helix simulation.
3. **3D DNA Helix (CSS-Only)**: A vertical, rotating DNA ladder mockup made of rungs and offset nodes that simulate rotating motion through CSS translate and scale keyframes.
4. **DNA Sequencing Pipeline**: An active nucleotide block stream visualizing Adenine (A), Thymine (T), Cytosine (C), and Guanine (G) bases.
5. **Genome Analysis Bento Cards**: Bento-style grid cards displaying codon allocations, synthesis latency counters (`ease-count-up`), replication accuracy, and active splicing nodes.
6. **AI Mutation Detection Section**: Diagnostic dashboard panels showing mutation drift probabilities and simulated gene-splicing anomaly log feeds.
7. **Laboratory Workflow Timeline**: A vertical timeline layout indicating the extraction, mapping, diagnostic, and physical compilation phases.
8. **Research Statistics (CSS Chart)**: A vertical bar graph mockup indicating chemical base pairing clearance rates per block interval, built with pure-CSS animations.
9. **Sequencing Accuracy Metrics**: Diagnostic widgets featuring counter metrics (`ease-count-up` targets for precision indexes, block coverage, and splicing).
10. **Team & Leadership Grid**: Showcase cards displaying laboratory directors with glowing profile tags.
11. **Pricing / Subscription plans**: Clear subscription options (Academic Core, Pro Sequencing, Quantum Synthesis) with pricing numbers, checks, and action buttons.
12. **FAQ Accordions**: Dropdown details accordions using `<details>` and `<summary>` elements styled with border glows and transitions.
13. **Pulsing Footer Status (`ease-ping`)**: Disclaimer links, copyright details, and a green pulsing status indicator representing active laboratory tunnels.

---

## EaseMotion CSS Reference Mapping

This showcase leverages EaseMotion CSS variables, components, and animation utility classes as follows:

### 1. Variables & Design Tokens (Overridden in `style.css`)

- **Theme Variables**:
  - `--ease-color-primary`: `#10b981` (Biotech Emerald Green representing stable gene sequences)
  - `--ease-color-secondary`: `#06b6d4` (Teal/Cyan representing diagnostic telemetry)
  - `--ease-color-success`: `#10b981` (Stable base pairing checks)
  - `--ease-color-danger`: `#ef4444` (Anomaly mutation drifts)
  - `--ease-color-bg`: `#040814` (Midnight laboratory void background)
  - `--ease-color-surface`: `#0a1128` (Cool slate diagnostic panels)
- **Glassmorphism**:
  - Configured custom `--ease-glass-bg` and `--ease-glass-border` with emerald-tinted highlights.

### 2. Composed Components

- **Navbar**: Layered with `.ease-navbar-glass-sticky`, `.ease-navbar-glass`, `.ease-navbar-brand`, `.ease-navbar-menu`, and `.ease-navbar-item`.
- **Buttons**: Combined standard state `.ease-btn`, size overrides `.ease-btn-sm` / `.ease-btn-lg`, layouts `.ease-btn-block`, modifiers `.ease-btn-primary` / `.ease-btn-outline`, and action animations `.ease-btn-hover` / `.ease-squish-button`.
- **Cards**: Handled with `.ease-card`, `.ease-card-glass`, `.ease-card-hover` (for smooth liftoff translation on focus), and `.ease-card-compact`.

### 3. Animations & Motion Utility Classes

- **Looping Motions**:
  - `.ease-typewriter-loop`: Used in the hero header to cycle active sequencing and sync console states.
  - `.ease-ping`: Simulates glowing signal flashes on active laboratory tunnels.
- **Entrance Effects**:
  - `.ease-slide-up` & `.ease-fade-in`: Animates core console blocks on initial load.
  - `.ease-delay-200` to `.ease-delay-400`: Staggers sub-element entrance timings.
- **Hover Highlights**:
  - `.ease-hover-underline`: Animates nav selection transitions.

---

## File Structure

```text
submissions/examples/ai-synthetic-genome-sequencing-workbench-phase-1021/
├── demo.html     # Single-page semantic HTML structure
├── style.css     # Design overrides, custom DNA helix, and progress bar loaders
└── README.md     # Feature summary and EaseMotion reference mapping (this file)
```

## How to Preview

Open `demo.html` in any modern web browser. To check responsiveness, drag the browser window to simulate mobile, tablet, and widescreen layouts, verifying that bento grids stack cleanly and spacing adapts.
