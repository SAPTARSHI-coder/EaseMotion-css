# ML Experiment Intelligence Hub

## What does this do?

The ML Experiment Intelligence Hub is a premium enterprise dashboard for data scientists and ML engineers to track, compare, and analyze machine learning experiments. It provides a unified interface for monitoring training runs, comparing model metrics, detecting data drift, and surfacing intelligence insights — all built with pure CSS and powered by EaseMotion CSS animations.

## Features

- **Hero Dashboard** — Product branding with live status indicators, active experiment count, and staggered entrance animations.
- **Experiment Tracking Panel** — Track experiment cards with training status (Training / Completed / Queued), dataset versions, model versions, run duration, and epoch progress bars.
- **Metrics Comparison Area** — Visual comparison of Accuracy, Precision, Recall, and F1 Score with animated bar charts showing current best runs vs baselines.
- **Data Drift Monitoring** — Monitor feature drift with PSI and KL divergence metrics. Categorized risk levels (High / Medium / Low) with color-coded alert cards.
- **Experiment Timeline** — Chronological feed of training events, deployment milestones, retraining triggers, and AutoML sweeps with animated reveal effects.
- **Intelligence Insights Panel** — Actionable recommendations, observations, performance summaries, and warnings surfaced from experiment data.
- **Feature Distribution Summary** — Visual distribution bars for numerical, categorical, and text embedding features.
- **Activity Feed** — Real-time event stream with color-coded status dots for experiment lifecycle events.

## Design Highlights

- **Glassmorphism panels** with backdrop blur and subtle border glow on hover
- **Dark enterprise theme** with deep navy background and cyan/green/purple accent palette
- **Layered depth** through radial gradient backgrounds and floating accent orbs
- **Professional typography hierarchy** using Inter for UI text and Fira Code for data/monospace values
- **Consistent spacing** and alignment across all panel types and card styles
- **Left-accent borders** on insight cards and drift alerts for scannable severity levels

## Animation Highlights

- **Staggered card reveals** using `fade-in-up` keyframes with progressive animation delays
- **Timeline slide-in** reveals for chronological events
- **Gradient motion** on the brand title for subtle brand presence
- **Pulse dot** indicators on status badges for active system state
- **Progress bar grow** animation on epoch tracking
- **Bar chart grow** animation on metrics comparison bars with staggered baseline bars
- **Hover elevation** effects on panels, experiment cards, and stat cards
- **Floating accent orbs** with slow drift animation for ambient depth
- All animations use `cubic-bezier(0.16, 1, 0.3, 1)` for a premium, non-distracting feel

## Responsive Behavior

- **Desktop** (1200px+): Three-column grid layout with sidebar panels
- **Tablet** (640px–1200px): Single-column stacked layout, 2-column stat grid
- **Mobile** (640px–): Single-column layout with reduced padding and font sizes

## Tech Stack

- HTML5 (semantic markup with `header`, `section`, `aside` elements)
- CSS3 (custom properties, grid layout, flexbox, backdrop-filter, keyframe animations)

No JavaScript, no external frameworks, no build tools, no dependencies.

## File Structure

```
submissions/examples/ml-experiment-intel-bv/
├── demo.html
├── style.css
└── README.md
```

## Usage

Open `demo.html` directly in any modern browser:

- **Desktop**: Three-column dashboard layout for maximum data density.
- **Tablet / Mobile**: Single-column responsive layout adapts for smaller screens.
- **Interactive exploration**: Hover over panels, cards, and metrics to see elevation effects and visual feedback.

No build step, no server, no dependencies required.