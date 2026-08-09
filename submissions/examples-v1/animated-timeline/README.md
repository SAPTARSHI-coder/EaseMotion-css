# Animated Timeline/Roadmap Component

A clean, modern, and fully responsive **Timeline/Roadmap Component** perfect for product roadmaps, company history, project tracking, and educational content. This example demonstrates how to combine **EaseMotion CSS** for staggered item entrances, smooth connecting line animations, and interactive milestone markers to create an engaging, chronological display.

## 🚀 Features

- **Alternating Layout**: Timeline items alternate between left and right sides for visual balance.
- **Staggered Entrances**: Each item fades in from its respective side using `ease-fade-in-left` and `ease-fade-in-right` with staggered delays.
- **Bouncy Milestone Markers**: Markers pop into view using `ease-bounce-in` for a playful effect.
- **Pulsing Current Milestone**: The active/current milestone uses `ease-pulse` to draw attention.
- **Three Status States**: Completed (green), Current (purple with pulse), and Upcoming (gray) markers with distinct colors.
- **Interactive Hover States**: Cards lift on hover with enhanced shadows and accent borders using `ease-hover-grow`.
- **Gradient Connecting Line**: A vertical line with gradient coloring connects all milestones.
- **Tag System**: Color-coded tags for categorizing each milestone.
- **Fully Responsive**: On mobile, all items align to the left with the timeline line on the left edge.

## 📂 File Structure

```text
submissions/examples/animated-timeline/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for timeline layout, markers, and responsive behavior
└── README.md    # Documentation