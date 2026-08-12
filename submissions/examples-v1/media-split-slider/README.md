# Sandbox Component Showcase: Pure-CSS Asset-Independent "Before vs. After" Media Comparison Split Slider

## Overview
A zero-dependency, pure-CSS interactive "Before vs. After" media split comparison slider and layout separation widget component isolated within an examples subdirectory. It coordinates horizontal divider line positioning and absolute image vector masking natively via an overlayed HTML5 range input, running fluid tracking interactions smoothly without script utility dependencies.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained presentation user cockpit hosting stacked media panes, text labels, and the inline variable range hook.
* `style.css` — Scoped layout modifier asset layer specifying native vector inset clipping paths linked back to shared framework core tokens.

## 🚀 Key Layout Mechanics
1. **Zero-Dependency Range Interception:** Eliminates the necessity for performance-heavy scroll or mouse-move script event observers by overlaying a completely transparent native form slider input at the roof of the component stack (`input[type="range"]`). Drag tracks update an isolated element property variable instantly: `oninput="this.parentNode.style.setProperty('--slider-val', this.value + '%')"`.
2. **GPU-Accelerated Inset Clip Masks:** Slices the topmost image panel horizontally by evaluating custom variable parameters inside a hardware-optimized masking filter (`clip-path: inset(0 0 0 var(--slider-val));`). Because coordinates pass straight to the layout engine, the divider bar and clip line slide synchronously on separate GPU compositor layers, removing main-thread layout thrashing bottlenecks.
3. **Sandbox Compliance Safeguard:** Fully satisfies repository security policies by placing every asset line strictly inside `submissions/examples/media-split-slider/`.
