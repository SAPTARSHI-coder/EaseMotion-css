# Firefly Avatar (Medical Monitoring Pattern)

A premium, performance-oriented dynamic avatar component crafted for the **EaseMotion CSS** library ecosystem. Tailored specifically for Medical Dashboards, clinical patient monitoring software, or high-focus practitioner profiles.

It utilizes multiple soft-glowing particle nodes ("fireflies") that pulse bioluminescent light asynchronously while tracing errant, organic orbital paths around the profile avatar perimeter.

## Features

- **Zero JavaScript:** Utilizes dual concurrent CSS animation loops (`em-firefly-orbit` for trajectory and `em-firefly-pulse` for light intensity) to simulate chaotic organic behavior purely through pseudo-random delay settings.
- **Medical Design Aesthetic:** Composed within a premium dark interface using glassmorphism principles and medical success teal/emerald accent colors.
- **Performance Optimized:** Primary orbital motion leverages `translate3d` to ensure hardware acceleration and buttery-smooth particle rendering.

## Directory Map

```text
firefly-avatar-medical/
├── demo.html   # Main Dashboard wrapper and practitioner card layout
├── style.css   # Keyframe interpolations, design tokens, and FF logic
└── README.md   # Deployment blueprint