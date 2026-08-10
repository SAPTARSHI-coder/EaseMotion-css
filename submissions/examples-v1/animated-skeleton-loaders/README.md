# Animated Skeleton Loaders

This submission showcases a modern **Skeleton Loading State** with a shimmer effect, seamlessly integrated with **EaseMotion CSS** for smooth state transitions. It demonstrates how to handle UX-friendly loading patterns without jarring layout shifts.

## ✨ Features
- **Shimmer Effect**: Custom CSS gradient animation for the skeleton blocks.
- **EaseMotion Integration**: 
  - `ease-pulse`: Applied to skeleton blocks to give a subtle, organic "breathing" loading feel alongside the shimmer.
  - `ease-fade-out` & `ease-fade-in`: Smooth cross-fade transitions when switching between loading and loaded states.
  - `ease-scale-up`: Elegant entrance animation for the loaded content.
  - `ease-hover-lift`: Interactive feedback on action buttons.
- **Zero Layout Shift**: The skeleton and loaded states share the same dimensional footprint.

## 🚀 How to Use
1. Open `demo.html` in any modern web browser.
2. Observe the initial skeleton loading state with the shimmer and pulse effects.
3. Click the **"Simulate Data Load"** button to see the smooth EaseMotion transition to the actual content.
4. Click again to revert to the loading state.

## 📂 Files
- `demo.html`: Standalone demo with vanilla JS state toggling.
- `style.css`: Custom shimmer keyframes and layout styling.