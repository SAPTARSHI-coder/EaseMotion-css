# Premium Animated Team Leaderboard

A highly polished, interactive, and animation-first Team Performance Leaderboard component. Designed with a modern SaaS aesthetic inspired by platforms like Linear, ClickUp, and Asana, this component features a split-view layout featuring a 3D-esque podium for top tiers alongside detail-rich metric rows for the remaining field.

Built with **pure HTML and CSS**, it is completely self-contained, responsive, and framework-independent.

---

## 🛠️ Key Architectural & Animation Features

### 1. Kinetic Spring Micro-Interactions
Standard linear transitions often feel mechanical and flat. This component utilizes a custom high-frequency spring curve (`cubic-bezier(0.34, 1.65, 0.4, 1)`) to handle card entries and interactive hover states. When hovered, cards and rows subtly lift, scale, and cast an organic shadow mimicking physical elevation.

### 2. Calculated Staggered Entry Pipeline
Rather than popping onto the screen simultaneously, components utilize a progressive loading sequence driven by CSS Custom Properties (`--stagger`). 
* The podium reveals itself in an ergonomic `2nd -> 1st -> 3rd` order to center user focus on the winner.
* The ranking rows cascade downward sequentially using automated mathematical animation delays (`calc(var(--stagger) * 0.08s)`).

### 3. Native Dark Mode Integration
The component includes a fully native, semantic dark mode layer utilizing the `prefers-color-scheme` media query. It maps fluidly across high-contrast depth tones without needing a single line of JavaScript or class toggles.

### 4. Precision Fill Keyframes
Progress tracks don't rely on basic width transitions. The data tracks parse individual inline structural logic (`--width` and `--height`) to trigger hardware-accelerated rendering transforms (`scaleX` and `scaleY`), ensuring ultra-smooth 60fps filling animations on page load.

### 5. Intentional Accessibility Design
Includes a rigorous fallback system for users with vestibular system sensitivities. Under `prefers-reduced-motion: reduce`, all spring elements, loading delays, cascading animations, and keyframe loops gracefully scale back into instant, accessible high-fidelity static layouts.

---

## 📁 Submission Layout
```text
submissions/examples/animated-team-performance-leaderboard/
├── demo.html     # High-fidelity dashboard markup & layout
├── style.css     # Production-grade variables, animations, and design tokens
└── README.md     # Component documentation