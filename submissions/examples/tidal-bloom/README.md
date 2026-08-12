# 🌊 Tidal Bloom

A self-contained interactive underwater animation where a glowing
bioluminescent bloom responds to changing ocean tide levels.

Tidal Bloom transforms a simple 0–100% value into a living visual system
using animated waves, floating particles, smooth interpolation, and a
responsive underwater atmosphere.

No frameworks or external dependencies are required.

---

## ✨ Features

- 🌊 Dynamic tidal bloom
- 📈 0–100% tide control
- 🫧 Animated concentric wave system
- ✨ Bioluminescent particle system
- 💫 Interactive bloom pulse
- 🌙 Deep underwater atmosphere
- 📊 Real-time tide percentage
- 🔄 Smooth tide interpolation
- 🌊 Four tide states
- ⌨️ Keyboard shortcuts
- 📱 Responsive layout
- 🎨 Glass-style control interface
- 🚫 No external dependencies

---

## 🌊 Tide States

The component automatically determines the current environmental state
based on the tide percentage.

| Tide | Range | Behavior |
|---|---:|---|
| Low Tide | 0–24% | Small and calm bloom |
| Rising Tide | 25–59% | Increasing bloom activity |
| High Tide | 60–84% | Large glowing bloom |
| Peak Tide | 85–100% | Maximum intensity |

The state changes automatically while the animation is running.

---

## 💫 Bloom System

The central bloom is the primary visual element.

Its radius is calculated from the current tide level.

At low tide:

- The bloom remains small.
- Glow intensity is reduced.
- Wave activity is subtle.

At high tide:

- The bloom becomes larger.
- Its glow becomes stronger.
- Surrounding waves become more visible.
- Particles become brighter.

The bloom also supports a temporary pulse animation.

When a pulse is triggered, the bloom temporarily expands beyond its
normal tide-controlled radius.

---

## 🫧 Wave System

Multiple independent wave objects are created around the bloom.

Each wave contains:

- Radius
- Opacity
- Animation speed
- Independent phase

The waves continuously expand outward and reset after reaching their
maximum radius.

The expansion speed is affected by the current tide level.

This allows the environment to feel increasingly active as the tide rises.

---

## ✨ Particle System

Tidal Bloom includes a lightweight particle system containing 45 floating
underwater particles.

Each particle has:

- Random position
- Random size
- Individual movement speed
- Independent animation phase
- Horizontal wobble

Particles slowly move upward and horizontally to simulate suspended
particles drifting through underwater currents.

Particle brightness is also influenced by the tide level.

---

## 🎚️ Tide Control

The tide slider accepts values between:

```text
0% → 100%