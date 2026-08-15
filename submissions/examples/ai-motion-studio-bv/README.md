# AI Motion Design Studio

A professional, interactive animation workspace playground built with **EaseMotion CSS** layout components, cards, buttons, and animations.

## What is this Showcase?

This showcase serves as a developer dashboard showcasing the core and components libraries of EaseMotion CSS in an interactive workspace context.

The studio includes:

1. **Preview Canvas**: The interactive testing stage where target elements animate in real-time based on builder inputs.
2. **Animation Builder**: Interactive sliders and selection lists to customize timing curves, duration, delay offsets, iterations, and loops.
3. **Preset Library**: Selectable catalog of EaseMotion animations (`ease-fade-in`, `ease-slide-up`, `ease-zoom-in`, `ease-flip`, `ease-bounce`, `ease-pulse`, `ease-rotate`, `ease-ping`).
4. **Visual Timeline**: A track-bar sequence representation that maps intro gates and emphasis iterations visually.
5. **Performance Metrics**: Real-time FPS, paint cycles count, and hardware acceleration status.
6. **Accessibility Auditor**: Audits WCAG contrast, high-frequency warnings, and simulates the `prefers-reduced-motion` OS-level behavior.
7. **Export Center**: Generated copy-paste snippets (HTML + custom CSS timing variable overrides).

---

## EaseMotion CSS Utilities Used

- **Layout Utilities**:
  - `.ease-grid`: Displays panels in standard layouts.
  - `.ease-grid-cols-2`: Dual column preset.
  - `.ease-gap-6`, `.ease-gap-4`: Consistent spacing grid gaps.
  - `.ease-center`: Centering canvas layouts.
  - `.ease-flex`, `.ease-justify-between`, `.ease-items-center`: Component layout control.

- **Components**:
  - `.ease-card`: Standard card structure.
  - `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`: Highly readable flat buttons.

- **Entrance Animations**:
  - `.ease-fade-in`: Animates workspace layout on load.
  - `.ease-slide-up`: Entrance effect for panels.
  - `.ease-delay-100`, `.ease-delay-200`, `.ease-delay-300`, `.ease-delay-400`, `.ease-delay-500`, `.ease-delay-600`: Sequential delays creating card stagger entrance flows.

- **Interaction Effects**:
  - `.ease-hover-grow`: Gentle scaling on buttons and selection list items.
  - `.ease-hover-lift`: Lifts preset cards on hover.

---

## How to Run the Demo

To run this studio locally:

1. Clone the repository.
2. Open [demo.html](demo.html) directly in any modern browser.

---

## Responsive Behavior & Layout Design

The dashboard uses a grid structure (`studio-grid`) designed with CSS Flexbox and Grid:

- **Desktop (> 1024px)**: 3-column layout mapping selectors (left), preview & timeline (center), and auditors & exports (right).
- **Tablets & Mobile (< 1024px)**: Columns stack vertically into a single-column layout, maintaining proportion and readability.

---

## Animation Showcase & Simulator Logic

1. **Pre-filled Overrides**: Selecting a loop preset (like Bounce) automatically sets iterations to infinite, while normal presets set it to 1 cycle.
2. **Reduced Motion Simulation**: Toggling this mode restricts all animations and sets the canvas to an inactive state, proving accessibility support.
3. **Visual Timeline**: The track bars expand and offset in real-time as sliders change.

---

## Screenshots

_(Screenshots will be included here upon integration into the main framework documentation)_
