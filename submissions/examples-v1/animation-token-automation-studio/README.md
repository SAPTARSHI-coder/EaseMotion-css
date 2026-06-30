# Animation Token Automation Studio

A professional design-system-grade frontend automation platform for generating, managing, visualizing, exporting, and synchronizing reusable animation design tokens across responsive web UI ecosystems.

## 📝 GSSoC 2026 Submission Questionnaire

### 1. What does this do?

This is an interactive design system workspace for establishing and organizing animation tokens at three architectural tiers (Global ➔ Semantic ➔ Component):

- **Motion Token Generator**: Tools to adjust and synchronize base timings (duration multipliers), delay cascades, and cubic-bezier easing values.
- **Design Token Hierarchy Visualizer**: An interactive tree nodes graph representing dependencies between Global variables, Semantic motion rules, and Component-level overrides.
- **Realtime Comparison Preview Sandbox**: A split-screen sandbox layout to compare two preset animation behaviors side-by-side (Side A vs Side B) under simulated viewports.
- **Animation Preset Library**: Quick selections for curated system settings (Cinematic Spring, Snappy Responsive, Playful Elastic, Accessibility Safe).
- **CSS & JSON Exporters**: Renders real-time compiled design code sheets. Supports production-ready CSS variables stylesheets and standard W3C-compatible JSON design token files.
- **A11y Safety Filters**: Detects vestibular comfort compliance and clamps velocities, translation lengths, and scaling ranges to 0 for prefers-reduced-motion fallback scenarios.

### 2. How is it used?

1. Open [demo.html](demo.html) directly in a web browser.
2. Under **"Preset Libraries"**, select a system setup for Side A and Side B (e.g. Cinematic for A, Elastic for B).
3. Click **"Trigger Previews"** to watch the mock cards animate side-by-side.
4. Interact with the nodes inside the **"Token Hierarchy Visualizer"** tree graph. Click any node to load its properties into the inspector sidebar.
5. In the **"Token Code Exporter"**, toggle between the **CSS Variables** tab and the **JSON Tokens** tab.
6. Click **"Copy Token Codes"** to instantly grab the production-ready code block.

### 3. Why is it useful?

Modern design systems require unified, multi-platform design tokens. Hardcoding transition speed constants or bezier curves in separate stylesheets causes style divergence and performance lag. This workspace bridges that gap by offering a visualization console to test curves, stagger delays, and coordinate hierarchies interactively. It automates the generation of compliant, platform-agnostic JSON tokens and clean responsive CSS media overrides, ensuring smooth transitions across any layout or client device.

---

## 🛠️ Tech Stack & Implementation Details

- **HTML5 & Vanilla CSS3**: Custom grid layout, glassmorphic card containers, and linear-connecting tree graphs.
- **Token Hierarchy Mapping**: Interactive Javascript node event triggers that map variable properties and draw active dependencies.
- **Standardized Export Compliers**: Generates W3C-standard JSON formats alongside custom CSS custom properties variables.
- **Accessibility**: Emulates full OS level media-query integrations for `prefers-reduced-motion`.
