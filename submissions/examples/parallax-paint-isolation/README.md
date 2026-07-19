# Sandbox Layout Fix: Mobile Viewport Parallax Background Jitter Paint Optimization

## Overview
A structural performance-centric rendering fix for parallax backgrounds inside mobile webviews to completely eliminate touch-scrolling jitter, stop image wobbling, and bypass mobile Safari layout paint bottlenecks.

## 📁 Sandbox Configuration Files
* `demo.html` — Precision presentation tracking monitor container hosting overlapping content sections to evaluate touch scrolling velocity rows.
* `style.css` — Scoped layout modifier asset layer specifying independent hardware composition coordinates linked back to global tokens.

## 🐛 The Bug Resolved
Previously, constructing parallax backgrounds using desktop layout filters (`background-attachment: fixed;`) triggered extreme performance frame drops and rendering lag across iOS Safari and mobile Chrome engines. Because mobile architectures separate scrolling actions into an independent composite thread, fixed background attachments force the container to constantly invalidate its style map. The browser must continuously repaint background text elements and graphical layers simultaneously on the main thread during drag gestures, causing the background image to lag behind, flicker, and wobble out of synchronization.

## 🛠️ The Solution
The graphics painting pipelines are optimized. By banning direct fixed background modifiers from the root container elements completely, the parent document tracks operate over cached texture paths. The static background properties are shifted onto an independent, absolute child background layer (`.alm-isolated-parallax-bg`) executing under a rigid hardware positioning flag pairing (`position: fixed; will-change: transform;`). This configuration prompts the layout engine to promote the graphic elements onto its own dedicated GPU compositing plane, ensuring steady 60fps mobile swipes.
