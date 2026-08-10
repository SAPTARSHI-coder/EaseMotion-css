# 🎨 Pendulum Art

Create mesmerizing geometric art using swinging pendulums! Adjust parameters, watch beautiful patterns emerge, and save your creations.

## 🎮 How to Play

- **Start/Pause** the pendulums to begin creating art
- **Adjust parameters** to change the patterns:
  - Length: How far the pendulum swings
  - Speed: How fast it moves
  - Damping: How quickly it slows down
  - Trail: Length of the trail left behind
  - Pendulums: Number of swinging arms
- **Change colors** to create vibrant artwork
- **Save** your creations as PNG images
- **Share** your art with friends

## ✨ Features

- **🎨 Real-time Art Creation** - Watch patterns emerge as pendulums swing
- **⚙️ Full Parameter Control** - Adjust length, speed, damping, and more
- **🌈 Multiple Pendulums** - Create complex patterns with up to 5 pendulums
- **🎯 Presets** - Quick patterns: Spiral, Flower, Chaos, Butterfly, Galaxy
- **💾 Save & Share** - Export as PNG or share directly
- **🎨 Color Customization** - Choose and add custom colors
- **⏱️ Real-time Stats** - Track time and rotations

## 🎯 Presets

| Preset | Description | Best For |
|--------|-------------|----------|
| 🌸 Flower | Flowing organic patterns | Beautiful mandalas |
| 🌀 Spiral | Classic spiral patterns | Mesmerizing loops |
| 🌌 Galaxy | Cosmic swirling patterns | Space-like art |
| 🦋 Butterfly | Symmetrical wing patterns | Elegant designs |
| 🌀 Chaos | Random complex patterns | Abstract art |

## 🎨 Color System

- **Add Colors**: Pick a color and click "+ Add" to add to palette
- **Multiple Colors**: Different pendulums can have different colors
- **Color Preview**: See all active colors in the stats

## 🎮 Controls

| Action | Desktop | Mobile |
|--------|---------|--------|
| Start/Stop | Click "Start/Stop" | Tap button |
| Pause/Resume | Click "Pause/Resume" | Tap button |
| Clear Art | Click "Clear" | Tap button |
| Save Art | Click "Save" | Tap button |
| Share Art | Click "Share" | Tap button |
| Presets | Click "Presets" | Tap button |
| Spacebar | Pause/Resume | - |
| 'C' key | Clear canvas | - |
| 'S' key | Save image | - |

## 🛠️ Technical Details

### Physics System
```javascript
// Simple Harmonic Motion
angularAcceleration = -(gravity / length) * sin(angle)
angularVelocity += angularAcceleration * deltaTime * speed
angularVelocity *= damping
angle += angularVelocity

// Position calculation
x = pivotX + length * sin(angle)
y = pivotY + length * cos(angle)