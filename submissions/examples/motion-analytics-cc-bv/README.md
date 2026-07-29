# Enterprise Motion Analytics Command Center

An enterprise-grade motion analytics reporting dashboard built using **EaseMotion CSS** layout systems, cards, buttons, and transition animations.

## What is this Showcase?

This project showcases the capability of the EaseMotion CSS library to sustain high-density dashboard layouts, complex tabular views, status indicators, and responsive configurations.

The command center includes:

1. **Executive Summary**: 4-column auto-fitting metrics grid representing Mean Time to Render (MTTR), WCAG Conformance percentages, User Conversion Lift, and the system Health Index.
2. **Component Performance & FPS Monitor**: A real-time data table tracking frames-per-second (FPS), repaint frequencies, hardware acceleration triggers (`will-change`), and automated load graph visualizers.
3. **Accessibility Audit Scanner**: Displays WCAG conformance reports and supports interactive validation scans to reconcile audit warning alerts.
4. **Active Animation Monitor**: Fluctuating counters tracking loop iterations, entrance counts, CPU overheads, and memory footprints.
5. **JSON Report Export Center**: A live JSON log output displaying data reports which users can download or share.

---

## EaseMotion CSS Utilities Used

This showcase integrates a comprehensive selection of EaseMotion CSS utilities:

- **Layout Utilities**:
  - `.ease-grid`: Displays panels in standard layouts.
  - `.ease-grid-auto`: Responsive auto-fitting columns that rearrange layouts fluidly across viewport widths.
  - `.ease-gap-6`, `.ease-gap-4`: Consistent spacing grid gaps.
  - `.ease-flex`, `.ease-justify-between`, `.ease-items-center`: Component layout control.

- **Components**:
  - `.ease-card`: Standard card structure.
  - `.ease-card-glass`: Semi-transparent background with backdrop blur (`backdrop-filter`) for premium glassmorphism.
  - `.ease-card-hover`: Visual micro-interaction raising cards with shadows on cursor focus.
  - `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`: Highly readable flat buttons.

- **Entrance Animations**:
  - `.ease-fade-in`: Animates body opacity on load.
  - `.ease-slide-up`: Entrance effect for headers, cards, and dashboards.
  - `.ease-delay-100`, `.ease-delay-200`, `.ease-delay-300`: Sequential delays creating card stagger entrance flows.

- **Interaction Effects**:
  - `.ease-hover-grow`: Gentle scaling on quick links and button operations.
  - `.ease-hover-glow`: Subtle neon glows highlighting active components on cursor hover.

---

## How to Run the Demo

To run this analytics command center locally:

1. Clone the repository.
2. Open [demo.html](demo.html) directly in any modern browser.

---

## Responsive Behavior & Layout Design

The dashboard uses a custom mobile-first column-scaling layout designed with CSS Grid and Flexbox:

- **Desktops (> 1024px)**: Dual-pane layout mapping the FPS tables (left 2/3) and audit scans (right 1/3) side-by-side.
- **Tablets & Mobile (< 1024px)**: Automatically cascades to a stacked display where grids collapse to single columns to maintain structural proportions and readability.

---

## Animation Showcase & Simulator Logic

1. **Repaint Fluctuation**: Component paint cycles tick up and FPS counts jitter slightly in real-time, reflecting live browser workloads.
2. **Audit Resolution**: Triggering the compliance scan runs a scanning delay sequence, corrects the iterations audit warning, and raises the overall Health Index to 100/100.
3. **Pulsing Loops**: Visual pulse loops indicate active loop triggers, proving animation status tracking.

---

## Screenshots

_(Screenshots will be included here upon integration into the main framework documentation)_
