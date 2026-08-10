# CSS Heartbeat Progress (#70953)

Dynamic heart rate line component where pulse animation frequency speeds up seamlessly as progress stage increases, implemented entirely with pure CSS.

## Features
- **Progressive Frequency Scaling:** Animated ECG heartbeat line sweep that scales speed directly across progress milestones (25%, 50%, 75%, 100%).
- **Pure CSS State Logic:** Driven by hidden radio input `:checked` state selectors without JavaScript.
- **Glowing Visualizer Canvas:** Dark mode SVG waveform visualization with drop-shadow glow and grid backdrop.
- **Accessible & Responsive:** Screen reader accessible radio controls, focus states, `role="progressbar"`, and `prefers-reduced-motion` compliance.

## Structure
- `style.css` - Component variables, ECG stroke dash animation, stage transition logic, and grid styling.
- `demo.html` - Interactive demo showcasing progress stage controls and animated ECG pulse line.
