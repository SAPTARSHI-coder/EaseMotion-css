# Frontend Rendering Stress Simulator

A performance auditing and rendering stress testing showcase built using **EaseMotion CSS** utility structures, cards, buttons, and animations.

## What is this Showcase?

This project models a browser rendering profiler that evaluates browser FPS drop thresholds under animation load. It helps developers assess how web layouts sustain heavy animations.

The simulator includes:

1. **Performance Dashboard**: Displays real-time frames-per-second (FPS) counters, paint cycle counts, and browser layout reflow speeds.
2. **Stress Stage Canvas**: Spawns multiple circles (100, 500, or 1000) that trigger infinite looping EaseMotion animations (`ease-bounce`, `ease-pulse`, `ease-rotate`) concurrently, creating visual rendering load.
3. **Core Resource Monitors**: Visual bar meters tracking simulated CPU load (%) and memory heap allocations (MB).
4. **FPS History Timeline**: A rolling visual bar chart representing the last 30 seconds of frame rate trends.
5. **Stress Benchmark Logger**: Compiles peak CPU utilization, peak RAM overhead, lowest FPS limits, and saves a performance report.

---

## EaseMotion CSS Utilities Used

- **Layout Utilities**:
  - `.ease-grid`: Displays panels in standard layouts.
  - `.ease-grid-cols-2`: Dual column preset.
  - `.ease-gap-6`, `.ease-gap-4`: Consistent spacing grid gaps.
  - `.ease-flex`, `.ease-justify-between`, `.ease-items-center`: Component layout control.

- **Components**:
  - `.ease-card`: Standard card structure.
  - `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`, `.ease-btn-danger`: Composable visual buttons.

- **Entrance Animations**:
  - `.ease-fade-in`: Animates workspace layout on load.
  - `.ease-slide-up`: Entrance effect for panels.
  - `.ease-delay-100`, `.ease-delay-200`, `.ease-delay-300`: Sequential delays creating card stagger entrance flows.

- **Looping & Emphasis Animations (Spawning Nodes)**:
  - `.ease-bounce`: Infinite vertical bouncing.
  - `.ease-pulse`: Infinite pulsing.
  - `.ease-rotate`: Infinite rotation.

---

## How to Run the Demo

To run this stress simulator locally:

1. Clone the repository.
2. Open [demo.html](demo.html) directly in any modern browser.

---

## Responsive Behavior & Layout Design

The dashboard uses a grid structure (`profiler-grid`) designed with CSS Flexbox and Grid:

- **Desktop (> 1024px)**: 3-column layout mapping FPS timelines (left), canvas & core resource trackers (center), and benchmark logs (right).
- **Tablets & Mobile (< 1024px)**: Columns stack vertically into a single-column layout, maintaining proportion and readability.

---

## Animation Showcase & Simulator Logic

1. **Node Spawning**: Instantiates circles that move and scale concurrently using infinite loop timing overrides.
2. **Performance Degradation**: Spawning elements calculates stress multipliers. FPS drops, reflow latency expands, and CPU load goes critical.
3. **Export Reports**: Generates detailed system logs comparing peak metrics.

---

## Screenshots

_(Screenshots will be included here upon integration into the main framework documentation)_
