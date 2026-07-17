# Bionic Prosthetic Neural Feedback Studio Showcase

A futuristic, dark-themed responsive single-page showcase demonstrating myoelectric signal tuning and synaptic feedback calibration for advanced prosthetic limbs. This showcase runs entirely on HTML5, Vanilla CSS, and the EaseMotion CSS framework, with **zero JavaScript** or external library dependencies.

## Showcase Features

1. **Sticky Glass Navbar (`ease-navbar-glass`)**: A frosted-glass header with hover underlines that stays sticky at the top, adapting cleanly to mobile layouts.
2. **Hero Section**: Futuristic typography leveraging EaseMotion's looping typewriter animation (`ease-typewriter-loop`), clean call-to-actions, and an interactive structural myoelectric arm schematic.
3. **Interactive Arm Schematic**: A CSS-based structural diagram of a prosthetic arm with pulsing joint hubs using tooltip hover cards (`ease-tooltip`) to display diagnostics per node.
4. **Bento Grid Capabilities (`bento-grid`)**: A structured layout showcase using hover cards (`ease-card-hover`), flat/glass styling, and animated stat counts (`ease-count-up`) for low latency and locked integration.
5. **Real-time Telemetry Dashboard**: A diagnostic stat board showing synapse sync rates, temperatures, signal voltage peaks, and sensory index counters calibrated by EaseMotion counters.
6. **Calibration Stepper Workflow**: A clear step-by-step procedure outlining connections, filtering, afferent mapping, and final dexterity checks.
7. **Performance Presets (Pure-CSS Tabs)**: Interactive preset toggles (Beast, Precision, and Sensory modes) leveraging pure-CSS radio inputs and transition properties, shifting progress levels and details smoothly.
8. **Pulsing CTA Section (`ease-hover-glow`)**: A glowing showcase wrapper using background shimmer sweeps (`ease-shimmer-sweep`) and hover states to prompt device synchronization.

---

## EaseMotion CSS Reference Mapping

This showcase leverages EaseMotion CSS's variables, layout components, and animation helpers as follows:

### 1. Variables & Design Tokens (Overridden in `style.css`)
- **Theme Variables**:
  - `--ease-color-primary`: `#8b5cf6` (Cyber Violet accent lines and status controls)
  - `--ease-color-secondary`: `#06b6d4` (Bio-feedback Cyan telemetry elements)
  - `--ease-color-success`: `#10b981` (Connected/Locked status nodes)
  - `--ease-color-danger`: `#f43f5e` (Neural spike/Warning flags)
  - `--ease-color-bg`: `#030712` (Deep space void background color)
  - `--ease-color-surface`: `#0f172a` (Slate surface color for metallic cards)
- **Glassmorphism**:
  - Used `--ease-glass-bg` and `--ease-glass-border` configured to blend with cyberpunk neon highlights.

### 2. Composed Components
- **Navbar**: Composed with `.ease-navbar-glass-sticky`, `.ease-navbar-glass`, `.ease-navbar-brand`, `.ease-navbar-menu`, and `.ease-navbar-item`.
- **Buttons**: Combined standard state `.ease-btn`, sizing `.ease-btn-sm` / `.ease-btn-lg`, modifiers `.ease-btn-primary` / `.ease-btn-outline`, and hover transformations `.ease-btn-hover` / `.ease-squish-button`.
- **Cards**: Layered with `.ease-card`, `.ease-card-glass` (for glassmorphism), `.ease-card-hover` (for smooth liftoff translation), `.ease-card-glow` (for subtle shadow glow on hover), and `.ease-card-stat` (for telemetry indicators).
- **Tooltips**: Applied `.ease-tooltip` and `data-tooltip="..."` (with position overrides like `data-position="top"`) inside the schematic nodes for hover details.

### 3. Animations & Motion Utility Classes
- **Looping Motions**:
  - `.ease-typewriter-loop`: Used in the hero header to cycle text between neural links and sensory calibration.
  - `.ease-ping`: Applied to status lights and neural hubs to simulate pulsing feedback loops.
  - `.ease-shimmer-sweep`: Applied inside the CTA card container to create an active glowing background wave.
- **Entrance Effects**:
  - `.ease-slide-up` & `.ease-fade-in`: Animates the hero content smoothly on initial compile load.
  - `.ease-delay-200` to `.ease-delay-400`: Staggers sub-elements loading sequencing.
- **Hover Highlights**:
  - `.ease-hover-underline`: Animates nav item selection lines.
  - `.ease-hover-glow`: Renders soft drop-shadow glows around active cards.
- **Telemetry Counters**:
  - `.ease-count-up` and custom variables (e.g. `--ease-count-target: 98;`): Simulates live loading percentages, temperatures, voltages, and latency speeds upon initial load.

---

## File Structure

```text
submissions/examples/bionic-prosthetic-neural-feedback-studio-phase-1018/
├── demo.html     # Single-page semantic HTML structure
├── style.css     # Theme variables, custom schematics, CSS-only tabs, and graph overrides
└── README.md     # Documented feature overview and EaseMotion mapping (this file)
```

## How to Preview

To view the showcase page, open `demo.html` directly in any web browser. For prefers-reduced-motion verification, activate the OS reduce motion settings and observe that transition speeds and keyframes drop to static states according to standard specifications.
