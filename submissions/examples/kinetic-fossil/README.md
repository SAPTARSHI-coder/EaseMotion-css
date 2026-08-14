# 🪨 Kinetic Fossil

An interactive archaeological excavation experience where an ancient fossil is gradually uncovered beneath layers of geological sediment.

Kinetic Fossil transforms a simple progress interaction into a small visual excavation simulation. Instead of instantly revealing the final result, the component gradually exposes different fossil fragments while generating dust, rock particles, geological cracks, and real-time archaeological information.

The entire component is built with vanilla HTML, CSS, JavaScript, and the Canvas API.

No frameworks, libraries, build tools, or external dependencies are required.

---

## ✨ Features

### 🪨 Layered Geological Surface

The excavation surface contains multiple geological strata instead of a single flat background.

The layers transition through:

- Surface Soil
- Upper Sediment
- Mineral Layer
- Ancient Stratum
- Fossil Bed

The current geological layer is displayed in the research panel as excavation progresses.

---

### 🦴 Progressive Fossil Discovery

The fossil is divided into six independently revealed fragments.

Fragments include:

- Skull
- Spine
- Ribs
- Front limb
- Rear limb
- Tail

Each fragment has its own excavation threshold.

This means the specimen slowly emerges instead of appearing as a single object.

---

### 💨 Excavation Particle System

Every excavation interaction creates small particles around the excavation location.

Particles contain:

- Position
- Velocity
- Size
- Lifetime
- Opacity

Particles naturally move upward, fall slightly, and fade away.

This creates a subtle dust effect without requiring an external particle library.

---

### 🪨 Geological Crack Animation

Cracks begin appearing once deeper geological layers are reached.

Their quantity increases with excavation progress, creating the impression that the user is gradually exposing an older and more fragile geological formation.

The crack system is generated dynamically with JavaScript.

---

### 🔍 Archaeological Readout

The research panel continuously displays:

- Excavation percentage
- Fossil fragments discovered
- Current geological stratum
- Stratum description
- Field notes
- Excavation status

Example:

EXCAVATION

67%

SPECIMEN FRAGMENTS

4 / 6

CURRENT STRATUM

Ancient Stratum

FIELD NOTE

4 fossil fragments detected.

---

## 🎮 Interaction

### Mouse / Pointer

Click anywhere on the excavation surface to remove sediment.

Drag across the surface for continuous excavation.

### Button

The `EXCAVATE` button performs an excavation pulse near the center of the site.

### Keyboard

| Key | Action |
|-----|--------|
| Space | Excavation pulse |
| R | Reset excavation |

---

## 🧩 Excavation States

### 0%

The site is completely undisturbed.

The user sees only geological sediment.

Status:

SITE UNDISTURBED

---

### 1–34%

Surface excavation is taking place.

Dust particles begin appearing around the excavation points.

Status:

SURFACE EXCAVATION

---

### 35–64%

The first fossil fragments begin appearing.

The skull, spine, and rib structures progressively emerge.

Status:

SPECIMEN DETECTED

---

### 65–84%

The excavation reaches deeper geological material.

Additional limbs appear while geological cracks become more visible.

Status:

DEEP EXCAVATION

---

### 85–99%

The excavation reaches the fossil bed.

The tail section becomes visible and most of the specimen is uncovered.

---

### 100%

The complete fossil specimen has been revealed.

Status:

SPECIMEN RECOVERED

---

## 🧠 Animation Architecture

The component uses a lightweight animation loop based on:

```js
requestAnimationFrame(animationLoop);