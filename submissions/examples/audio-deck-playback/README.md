# Sandbox Component Showcase: Pure-CSS Interactive Audio Playback Deck and Equalizer

## Overview

A zero-dependency, pure-CSS interactive audio podcast player deck and playback equalizer animation component isolated within an examples subdirectory. It manages visual media metric switches natively via form state triggers, running complex keyframe transformations without running JavaScript.

## 📁 Sandbox Configuration Files

- `demo.html` — Interactive user cockpit hosting media layout elements and action buttons to evaluate loop synchronization.
- `style.css` — Scoped modifier asset layer configuring independent vertical timeline transformations linked back to global core variables.

## 🚀 Key Layout Mechanics

1. **Checkbox Sibling Icon Toggling:** Bypasses custom class-manipulation scripts by linking a semantic clickable `<label>` handle with a hidden checkbox. The state shift swaps shape dimensions using pure CSS borders (`border-style: double`).
2. **GPU-Accelerated Equalizer Loops:** Coordinates vertical wave bar motion loops via hardware-accelerated transforms (`transform: scaleY()`). This eliminates layout thrashing by keeping rendering pipelines fully constrained to the browser's compositor layer.
3. **Sandbox Compliance Safeguard:** Fully satisfies repository security policies by placing every asset line strictly inside `submissions/examples/audio-deck-playback/`.
