# 🧭 Echo Compass

> Navigate through animated directional waves.

Echo Compass is a self-contained interactive navigation component inspired by futuristic radar systems and directional instruments.

Instead of behaving like a traditional static compass, the component communicates heading changes through motion. Selecting a direction smoothly rotates the compass needle while directional energy pulses travel outward from the center.

The entire experience is built with vanilla HTML, CSS, JavaScript, and the Canvas API.

---

## ✨ Features

### 🧭 Eight-Way Navigation

Echo Compass supports eight standard compass directions:

- North
- Northeast
- East
- Southeast
- South
- Southwest
- West
- Northwest

Each direction can be selected directly from the compass.

---

### 🌊 Directional Echo Waves

Every navigation action creates an animated wave originating from the center of the compass.

The wave:

1. Starts near the compass core.
2. Travels toward the selected heading.
3. Expands as it moves.
4. Gradually fades.
5. Disappears after reaching the edge.

This creates a visual "echo" effect that gives the component its name.

---

### 🎯 Smooth Heading Rotation

The compass needle does not instantly jump between directions.

Instead, the target angle is interpolated continuously:

```js
currentAngle +=
  (targetAngle - currentAngle) * 0.08;