# Interactive Animated Vertical Timeline

This submission showcases a modern **Vertical Timeline / Roadmap** component. It demonstrates how to use **EaseMotion CSS** combined with minimal JavaScript to create a dynamic, step-by-step reveal experience where the central line grows and content cards slide in from alternating sides.

## ✨ Features
- **Dynamic Line Growth**: The central connecting line smoothly grows to connect to each new milestone as it is revealed.
- **Directional Animations**: Left-side cards slide in from the left, and right-side cards slide in from the right.
- **Interactive Reveal**: A "Reveal Next Milestone" button triggers the animations sequentially.
- **EaseMotion Integration**: 
  - `ease-slide-in-left` & `ease-slide-in-right`: Directional entrance for the timeline cards and dots.
  - `ease-scale-up`: Applied to the dots for a satisfying "pop" effect when they appear.
  - `ease-hover-lift`: Tactile, premium hover feedback on the timeline cards and the main action button.
  - `ease-fade-in` & `ease-slide-down`: Elegant entrance for the page header.

## 🚀 How to Use
1. Open `demo.html` in any modern web browser.
2. The first milestone will auto-reveal after a short delay.
3. Click the **"Reveal Next Milestone"** button to sequentially reveal the remaining items.
4. Observe the central line growing and the cards sliding in from their respective sides.
5. Hover over the cards to see the `ease-hover-lift` effect.

## 📂 Files
- `demo.html`: Standalone demo with vanilla JS for sequential state management.
- `style.css`: Custom layout, alternating grid logic, and responsive mobile fallback.