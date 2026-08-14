# Animated SaaS Timeline / Roadmap

A sleek, dark-themed **Animated Roadmap Timeline** built with **EaseMotion CSS**. This component demonstrates how to create alternating left-right layouts, center connecting lines, glowing milestone nodes, and complex staggered entrance animations.

## ✨ Features

- **📱 Fully Responsive**: Alternates left/right on desktop, seamlessly collapses to a single left-aligned timeline on mobile.
- **🎬 Directional Animations**: Uses `ease-slide-in-left` and `ease-slide-in-right` combined with `ease-delay-*` to draw the user's eye down the timeline.
- **✨ Interactive Hover**: Cards lift dynamically using `ease-hover-lift`.
- **🎨 Custom Nodes & Lines**: Pure CSS connecting lines with glowing effects for completed milestones.
- **🌑 Dark Mode Aesthetic**: Designed with modern dark UI principles, grid backgrounds, and neon accents.

## 🧩 EaseMotion Classes Used

| Class | Purpose |
|-------|---------|
| `ease-center` | Centers the main container and header elements. |
| `ease-fade-in` | Fades in the entire roadmap wrapper smoothly. |
| `ease-slide-in-left` / `ease-slide-in-right` | Alternating directional entrance for timeline cards. |
| `ease-delay-400` to `ease-delay-800` | Staggered cascading effect down the timeline. |
| `ease-card` | Applies base card padding and border-radius. |
| `ease-hover-lift` | Adds depth with shadow and Y-axis translation on hover. |

## 🚀 How to Use
1. Open `demo.html` in your browser.
2. Observe how the cards slide in from alternating sides with staggered delays.
3. Hover over any card to see the `ease-hover-lift` effect.
4. Resize your window below `768px` to see the timeline snap to a mobile-friendly left-aligned layout.