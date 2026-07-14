# Spotlight Voice Recorder Component

Resolves feature request ticket #42608. Delivers a responsive voice recorder interface styled with space-inspired radial spotlights, active live state indicators, and dynamic audio equalizer waveforms—built with pure CSS state handling.

## ⚙️ Key Technical Features
* **Zero-JS State Management**: Utilizes an invisible checkbox toggle (`input[type="checkbox"]` + `:checked`) to manage recording state transitions cleanly.
* **Calculated Staggered Waveforms**: Equalizer bars utilize inline CSS variables (`--bar-index`) to stagger wave height animations (`calc(var(--bar-index) * 0.12s)`).
* **Accessible Motion & ARIA Hooks**: Provides keyboard accessibility support, explicit ARIA state updates, and `@media (prefers-reduced-motion)` safe overrides.
