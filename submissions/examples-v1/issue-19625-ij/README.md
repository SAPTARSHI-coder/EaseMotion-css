---
title: Bar Chart
issue: 19625
type: animation
technique: height keyframes + animation-delay stagger
---

Five colored bars that grow from 0% to their target height with a staggered `animation-delay` (0s, 0.15s, 0.3s, 0.45s, 0.6s) creating a cascading reveal. Each bar uses a CSS custom property `--target-height` for per-bar configuration.
