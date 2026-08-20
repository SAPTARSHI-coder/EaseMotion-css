# 🧬 Neural Mycelium

An interactive biological network visualization where a living mycelium system explores its environment, discovers nutrients, establishes connections, and gradually evolves into a complex underground network.

## 📖 Overview

Neural Mycelium is a self-contained interactive component inspired by fungal mycelium networks.

Instead of presenting a static illustration of a fungal network, the component simulates a continuously evolving organism.

The network begins with a central spore. From this point, branches gradually spread through the environment while searching for nearby nutrient nodes.

When a nutrient is discovered, the corresponding connection becomes stronger and brighter. Additional branches can emerge from successful paths, allowing the network to become increasingly interconnected.

Users can directly influence the ecosystem by clicking anywhere inside the underground environment to create additional nutrient sources.

The result is a procedural network that changes depending on where resources are introduced.

---

## ✨ Features

- 🧬 Procedural mycelium growth
- 🌱 Dynamic branching
- 💎 Interactive nutrient nodes
- 🕸️ Adaptive network connections
- ✨ Glowing active branch tips
- 🍂 Gradual path decay
- 🟢 Traveling spore particles
- 📊 Real-time network statistics
- 🧠 Network intelligence control
- 🍂 Path decay control
- 🌑 Dormant mode
- 🌿 Growing mode
- ✨ Blooming mode
- ⏸️ Pause / Resume
- ↻ Network reset
- 🖱️ Interactive nutrient placement
- ⌨️ Keyboard shortcuts
- 📱 Responsive layout
- 🚫 No external dependencies

---

## 🌿 How It Works

The component uses a lightweight procedural growth system.

A central spore acts as the origin of the network.

```text
                    ● Nutrient
                   /
              ────╯
             /
       ●────●────────●
        \             \
         \             ● Nutrient
          \
           ●
           │
           │
        🧬 SPORE