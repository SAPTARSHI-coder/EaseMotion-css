# 🧲 Magnetic Moon

Magnetic Moon is an interactive orbital playground that visualizes the effect of temporary gravity wells on a moving particle field.

Users can click anywhere in the space to create a gravity well.

Nearby particles are attracted toward the newly created point while the central moon continues following its orbital path.

The component is designed as a visual experiment rather than a physically accurate astronomical simulation.

---

## ✨ Features

- 🌍 Central planet
- 🌙 Orbiting moon
- 🧲 Interactive gravity wells
- ✨ 70 particles
- 🌀 Particle attraction
- 💫 Gravity field visualization
- 🎚️ Gravity strength
- 🎚️ Orbit speed
- 📊 Active well counter
- 🔄 Clear controls
- 🖱️ Pointer interaction
- ⌨️ Keyboard controls
- 📱 Responsive layout

---

## Interaction

Click anywhere inside the orbital field.

A gravity well appears at that location.

Particles near the well begin accelerating toward it.

Multiple wells may coexist simultaneously.

Each well gradually fades away.

---

## Gravity Model

The component uses a simplified attraction model.

For each particle:

```text
dx = wellX - particleX
dy = wellY - particleY

distance = sqrt(dx² + dy²)