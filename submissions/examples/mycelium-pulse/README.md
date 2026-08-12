# 🌿 Mycelium Pulse

A living underground network visualization where glowing nutrient signals travel through an organic fungal system.

Mycelium Pulse transforms a traditional node-and-edge visualization into a biological ecosystem. Instead of presenting a conventional graph, the component creates an irregular underground network made from curved fungal branches, connected nodes, moving nutrient pulses, soil particles, and temporary illumination.

The result is a calm but continuously evolving visualization that feels like a hidden ecosystem operating beneath the surface.

---

## ✨ Features

- 🌱 Organic mycelium network
- 🔗 42 interconnected nodes
- 🌀 Curved biological-style branches
- ✦ 8 continuously moving nutrient pulses
- 💡 Node activation glow
- 🌿 Temporary branch illumination
- 🌊 Smooth pulse propagation
- ✨ 45 atmospheric soil particles
- 🫧 Central ecosystem glow
- 📈 Dynamic network vitality
- 🖱️ Click-to-inject pulse interaction
- ⌨️ Keyboard shortcuts
- 🔄 Network regeneration
- 📱 Responsive layout
- 🚫 No external dependencies

---

## 🎯 What This Component Does

The component represents an underground fungal network as a continuously animated system.

The network contains nodes connected by curved branches. Nutrient pulses move through these connections and activate the nodes they reach.

When a pulse reaches a node, the node temporarily becomes brighter and the corresponding branch receives a short-lived glow.

After reaching a node, the pulse chooses another available connection and continues traveling.

This creates an organic propagation effect instead of a predictable linear animation.

---

## 🌱 Network Generation

The network is procedurally generated when the component starts.

The system creates:

- 42 nodes
- A central core node
- Randomly distributed surrounding nodes
- Automatic nearest-neighbor connections
- Additional cross-connections
- Curved control points for organic branches

Each node stores its connected neighbors, allowing pulses to navigate through the network.

The resulting structure changes whenever the network is reset.

---

## ✦ Nutrient Pulse System

Nutrient pulses are the primary animated elements.

Each pulse contains:

- Current node
- Destination node
- Progress value
- Movement speed
- Lifetime

The pulse moves between connected nodes using quadratic Bézier interpolation.

When the pulse reaches its destination:

1. The destination node is activated.
2. The connected branch glows.
3. A new destination is selected.
4. The pulse continues through the network.

This allows several independent pulses to move through the network at the same time.

---

## 🖱️ Interaction

### Click

Click anywhere inside the visualization.

The closest network node to the click location becomes the starting point for a new nutrient pulse.

This makes the network feel responsive to direct interaction.

### Generate Pulse

The `Generate Pulse` button introduces a new pulse at a random network node.

### Reset Network

The reset button:

- Removes existing pulses
- Regenerates the node structure
- Regenerates atmospheric particles
- Restores vitality
- Creates a fresh ecosystem

---

## ⌨️ Keyboard Controls

| Key | Action |
|---|---|
| `Space` | Generate nutrient pulse |
| `R` | Reset network |

---

## 📊 Network Statistics

The interface exposes several live values.

### Active Pulses

Number of nutrient signals currently traveling through the network.

### Nodes

Total number of generated network nodes.

### Connections

Number of branches connecting the nodes.

### Last Pulse

Displays when a pulse was most recently injected.

### Vitality

A dynamic value representing the current activity level of the ecosystem.

Pulse activity increases vitality while inactivity gradually decreases it.

---

## 🎨 Visual System

The component uses a dark underground environment to contrast with the glowing biological network.

### Background

A layered radial and linear gradient creates the impression of a deep underground environment.

### Mycelium

Branches use low-opacity green tones when inactive.

Active branches become brighter and temporarily increase in visual thickness.

### Nodes

Nodes remain subtly visible even when inactive.

When a pulse reaches a node, its glow expands temporarily before gradually fading.

### Nutrient Pulses

Pulses use a bright glowing core with a soft shadow to make their movement easy to follow.

### Soil Particles

Small particles move subtly across the environment to prevent the background from feeling completely static.

---

## 🧠 Animation Architecture

The component uses a single `requestAnimationFrame` loop.

The animation cycle performs:

1. Canvas clearing
2. Core rendering
3. Soil particle rendering
4. Branch rendering
5. Node rendering
6. Pulse updates
7. Pulse rendering
8. Vitality updates
9. UI statistic updates

This keeps the component self-contained and avoids external animation dependencies.

---

## 🌀 Bézier Branches

Branches are rendered using quadratic Bézier curves rather than straight lines.

Each branch contains:

```js
{
  a,
  b,
  control,
  glow
}