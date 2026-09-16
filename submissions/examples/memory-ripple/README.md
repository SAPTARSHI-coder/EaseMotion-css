# 🫧 Memory Ripple

Memory Ripple is an interactive canvas component where every user interaction temporarily remains visible as an expanding ripple.

Instead of treating clicks as simple events, the component turns them into visual memories that propagate through a soft particle surface.

The result is a calm, responsive interaction layer suitable for experimental interfaces, creative landing pages, portfolios, ambient UI, and interactive showcases.

## ✨ Features

- Interactive ripple generation
- Multiple simultaneous ripples
- Smooth ripple expansion
- Ripple fading
- Particle displacement
- 70 background particles
- Soft radial lighting
- Real-time ripple counter
- Mouse interaction
- Touch interaction
- Center ripple button
- Reset functionality
- Responsive canvas
- No external dependencies

## 🌊 How It Works

Each interaction creates a ripple object containing its position, radius, lifetime, speed, and strength.

The animation loop updates the ripple radius every frame.

As the ripple expands, nearby particles calculate their distance from the ripple wave.

Particles close to the wave receive a temporary displacement force.

This creates the impression that the entire surface reacts to the user's interaction.

## 🖱️ Interaction

### Pointer

Click or touch anywhere on the surface to create a ripple.

### Button

Use "Create Ripple" to generate a centered interaction.

### Reset

Use "Reset Memory" to remove all active ripples and reset the counter.

## 🎨 Design Philosophy

Memory Ripple is based around the idea of temporary visual memory.

A normal interface forgets a click immediately.

This component allows the interface to remember it for a short period.

The ripple gradually expands, affects surrounding particles, fades away, and eventually disappears.

This creates a more organic relationship between user input and animation.

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript ES6
- Canvas API
- requestAnimationFrame
- Pointer Events

## 🔧 Customization

Ripple speed can be modified inside the ripple object.

```js
speed: Math.random() * 1.2 + 1.4