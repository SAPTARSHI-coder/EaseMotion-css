# 🌌 Gravity Garden

An interactive orbital garden where flowers grow and continuously orbit around a glowing central star.

## 📖 Description

Gravity Garden is an experimental animation component that combines orbital mathematics with organic growth.

The scene contains a central glowing star that acts as a gravity source. Flowers are placed around the star and gradually grow before entering their orbital motion.

Each flower has independent properties such as:

- Orbital radius
- Orbital angle
- Growth progress
- Flower size
- Rotation
- Animation phase

This makes every flower behave slightly differently.

## ✨ Features

- ⭐ Animated central gravity star
- 🌸 Interactive flower planting
- 🌱 Progressive flower growth
- 🪐 Multiple orbital paths
- ✨ 45 floating pollen particles
- 🎚️ Adjustable gravity strength
- 🌱 Spring mode
- ☀️ Summer mode
- 🍂 Autumn mode
- 🌙 Moon Garden mode
- 📊 Real-time flower counter
- 🖱️ Click interaction
- ⌨️ Keyboard shortcuts
- 🔄 Reset functionality
- 📱 Responsive design
- 🚫 No external dependencies

## 🌿 Garden Modes

### 🌱 Spring

Flowers grow faster with gentle orbital movement.

### ☀️ Summer

The garden becomes more energetic with stronger orbital motion and faster growth.

### 🍂 Autumn

Growth slows down and flowers use a warmer visual appearance.

### 🌙 Moon Garden

A darker atmospheric mode with cooler glowing flowers.

## ⭐ Gravity System

The central star acts as the visual gravity source.

Each flower maintains an orbital radius around the center while continuously changing its angle.

The effective orbital movement is influenced by the gravity slider:

```js
flower.angle +=
  settings.speed * gravityStrength;