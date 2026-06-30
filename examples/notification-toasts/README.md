# Standalone Elastic Notification Toast Banner System Sandbox

## Overview

An animation-focused notification toast banner layout system isolated completely within a sandbox pathway. It provides developers with highly responsive, theme-configured layout banners carrying mechanical overshoot spring entries.

## 📁 Sandbox Configuration Files

- `demo.html` — Interactive live verification board allowing manual generation and removal testing of semantic banners.
- `style.css` — Performance-tuned style layer utilizing custom `cubic-bezier` motion profiles mapped to root design tokens.

## 🚀 Key Layout Mechanics

1. **Inertial Momentum Simulation:** Instead of linear transitions, entry keyframes run on a custom physics matrix (`cubic-bezier(0.68, -0.6, 0.32, 1.6)`). This forces banners to briefly slide past their target resting markers before settling back into sequence alignment cleanly.
2. **Fixed Overlay Management:** The fixed container layout features `pointer-events: none` attributes, preventing the parent tracking layers from blocking user cursor clicks on base application layout fields.
3. **Hardware Rendering Pass:** Animation loops process exclusively via GPU translation coordinates (`translateX` and `scale`), bypassing text recalculations for reliable, drop-free rendering.
