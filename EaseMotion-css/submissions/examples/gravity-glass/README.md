# 🪐 Gravity Glass – Interactive Orbital Gravity Field

Gravity Glass is an interactive canvas-based animation that visualizes an invisible gravitational field using particles, orbital motion, glassmorphism, and pointer-based physics.

Instead of representing gravity with a traditional graph or static indicator, the component communicates the force through movement. Particles continuously orbit around a translucent central gravity core and react dynamically when the user moves their pointer through the field.

Moving the pointer creates a temporary secondary gravitational influence, causing nearby particles to accelerate and bend away from their normal orbital trajectories. Clicking the field or using the gravity pulse control creates a larger radial disturbance that propagates through the orbital system.

The component is completely self-contained and uses only vanilla HTML, CSS, and JavaScript.

---

## ✨ Features

* 🪐 Interactive central gravity core
* 🔵 3 independent orbital rings
* ✦ 28 animated particles
* 🖱️ Pointer-based gravity interaction
* 💫 Click-based gravity pulse
* 🌊 Smooth particle acceleration and recovery
* 🧲 Distance-based gravitational influence
* ✨ Glowing particle trails
* 🧊 Glassmorphism central orb
* 🌌 Layered radial background gradients
* 📊 Real-time gravity strength indicator
* 📈 Real-time particle count
* ✦ Gravity pulse counter
* 🎚️ Adjustable gravity strength
* 🎚️ Adjustable orbital speed
* 🔄 Reset control
* ⌨️ Keyboard shortcuts
* 📱 Responsive mobile layout
* 🚫 No external dependencies
* 🚫 No frameworks required

---

## 🎯 What It Does

Gravity Glass creates the visual illusion of a miniature gravitational system.

Particles begin in stable circular orbits around the central gravity core. Each particle has its own orbital radius, speed, phase, size, opacity, and movement state.

When the pointer enters the component, it becomes a temporary gravitational source.

Particles within the influence radius are attracted toward the pointer. The closer a particle gets to the pointer, the stronger the attraction becomes.

Once the pointer leaves the field, the particles gradually lose their additional velocity and return to their original orbital paths.

Clicking the component creates a gravity pulse originating from the central core. The pulse expands outward and temporarily disturbs particles along its path.

This creates a visual representation of force, acceleration, distance, and recovery.

---

## 🪐 Orbital System

The component contains three orbital layers.

| Orbit  | Radius | Particle Count | Behaviour |
| ------ | -----: | -------------: | --------- |
| Inner  |  100px |              8 | Fast      |
| Middle |  160px |             10 | Medium    |
| Outer  |  220px |             10 | Slow      |

The different radii and speeds prevent the animation from appearing synchronized.

Each particle receives a slightly randomized speed multiplier and starting phase, creating a more organic orbital system.

---

## ✦ Particle System

Every particle contains several properties controlling its movement and appearance.

```javascript
{
  baseRadius,
  radius,
  angle,
  baseSpeed,
  size,
  x,
  y,
  vx,
  vy,
  opacity,
  phase,
  trail
}
```

Particles use their orbital angle to determine their target position.

The target position is calculated using:

```text
x = centerX + cos(angle) × radius
y = centerY + sin(angle) × radius
```

Instead of instantly moving to the target position, the particle interpolates toward it.

This prevents sharp movement and creates smooth orbital motion.

---

## 🧲 Gravity Interaction

The pointer becomes a secondary gravity source when it enters the component.

The distance between the pointer and a particle is calculated using the Euclidean distance:

```text
distance = √(dx² + dy²)
```

The influence is then reduced based on distance:

```text
influence = (1 - distance / influenceRadius) × gravityStrength
```

This means particles closer to the pointer experience stronger attraction.

Particles outside the influence radius remain unaffected.

---

## 💫 Gravity Pulse

Clicking the field creates an expanding gravity pulse.

The pulse begins near the central gravity core and expands outward.

```text
Pulse Start
    ↓
Small Radius
    ↓
Expanding Ring
    ↓
Particle Interaction
    ↓
Velocity Change
    ↓
Dissipation
```

The pulse gradually loses strength while its radius increases.

This creates a temporary wave-like disturbance instead of permanently changing the orbital system.

---

## ✨ Particle Trails

Particles retain a short history of previous positions.

The stored positions are rendered as low-opacity lines behind each particle.

This creates subtle motion trails that communicate direction and velocity without overwhelming the interface.

Trail length is intentionally limited so the component remains lightweight.

---

## 🧊 Glass Gravity Core

The center of the component contains a translucent glass orb.

The core combines:

* Semi-transparent backgrounds
* Radial gradients
* Border highlights
* Backdrop blur
* Soft outer glow
* Rotating decorative rings
* Continuous pulse animation

The core represents the primary gravitational source.

The visual treatment is intentionally subtle so the particles remain the main focus.

---

## 📊 Real-Time Feedback

The interface displays three pieces of live information.

### Particles

Displays the number of active particles in the orbital system.

Default:

```text
28
```

### Gravity

Displays the current effective gravity strength.

The displayed value increases temporarily when the pointer or gravity pulse is active.

### Pulses

Tracks the total number of gravity pulses created during the current session.

---

## 🎚️ Controls

### Gravity Strength

Controls the strength of the pointer-based gravitational field.

Default:

```text
80%
```

Supported range:

```text
20% - 150%
```

---

### Orbit Speed

Controls the speed multiplier applied to every orbital particle.

Default:

```text
100%
```

Supported range:

```text
30% - 200%
```

---

### Gravity Pulse

Creates an expanding radial disturbance from the central gravity core.

The same action can also be triggered with the Space key.

---

### Reset Field

Removes the active pointer influence, clears the current pulse, resets the pulse counter, and recreates the particle system.

The reset action can also be triggered with the `R` key.

---

## ⌨️ Keyboard Controls

| Key     | Action               |
| ------- | -------------------- |
| `Space` | Create gravity pulse |
| `R`     | Reset field          |

Keyboard events are ignored for repeated Space presses to prevent accidental rapid pulse generation.

---

## 🖱️ Interaction

### Move Pointer

Move the pointer inside the field.

Particles close to the pointer will begin curving toward it.

### Leave Field

Moving the pointer outside the component removes the secondary gravitational influence.

Particles smoothly return to stable orbital movement.

### Click

Click anywhere inside the field to create a gravity pulse.

### Button

Use the `Gravity Pulse` button for the same pulse effect.

---

## 🎨 Design Philosophy

Gravity Glass follows an animation-first design philosophy.

Instead of displaying:

```text
Gravity: 80%
```

as the only representation of the force, the component makes the force visible through motion.

### Motion communicates gravity

Particles accelerate toward the pointer.

### Curvature communicates influence

Orbital paths bend when the gravitational field changes.

### Trails communicate velocity

Particles leave subtle traces behind their movement.

### Recovery communicates equilibrium

Particles gradually return to their original orbit after the external force disappears.

### Glass communicates depth

The central orb creates a visual focal point without blocking the particle system.

---

## 🛠️ Technologies Used

### HTML5

Used for the semantic structure of the component and interactive controls.

### CSS3

Used for:

* Glassmorphism
* Gradients
* Blur effects
* Responsive layout
* Range sliders
* Button states
* Orb animations
* Decorative rings

### JavaScript ES6

Used for:

* Canvas rendering
* Particle physics
* Orbital calculations
* Pointer tracking
* Gravity calculations
* Pulse animation
* Keyboard controls
* Real-time UI updates
* `requestAnimationFrame`

---

## 📁 File Structure

```text
gravity-glass/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

No installation is required.

Download or copy the three files into the same directory:

```text
demo.html
style.css
README.md
```

Then open:

```text
demo.html
```

directly in a browser.

The component does not require:

* npm
* Node.js
* a development server
* external JavaScript libraries
* external CSS frameworks

---

## 🔌 Basic HTML Structure

The main display can be embedded using the following structure:

```html
<section class="gravity-display" id="gravityDisplay">
  <canvas id="gravityCanvas"></canvas>

  <div class="gravity-overlay">
    <!-- Interface content -->
  </div>
</section>
```

The canvas handles the particle system while the HTML overlay provides the interface and live information.

---

## 🔧 Customization

### Particle Count

Modify the number of particles inside the orbital configuration:

```javascript
const orbitConfig = [
  {
    radius: 100,
    speed: 0.008,
    count: 8
  },
  {
    radius: 160,
    speed: 0.0055,
    count: 10
  },
  {
    radius: 220,
    speed: 0.0038,
    count: 10
  }
];
```

Increasing the count produces a denser field.

---

### Orbital Radius

Change:

```javascript
radius: 160
```

to increase or decrease the distance between an orbital layer and the central core.

---

### Orbital Speed

Change:

```javascript
speed: 0.0055
```

to modify the default orbital speed.

---

### Gravity Influence Radius

The pointer influence is controlled by:

```javascript
const influenceRadius = 180;
```

Increasing this value creates a larger interactive field.

---

### Gravity Strength

The default strength is:

```javascript
let gravityStrength = 0.8;
```

This value is connected to the range slider.

---

### Particle Trail Length

Particle trails are limited using:

```javascript
if (this.trail.length > 7) {
  this.trail.shift();
}
```

Increasing the value creates longer trails.

---

### Pulse Strength

The initial pulse strength can be modified here:

```javascript
pulse.strength = 0.8;
```

Higher values create stronger particle disturbances.

---

## 📸 Visual States

| State          | Visual Behaviour                                   |
| -------------- | -------------------------------------------------- |
| Stable Orbit   | Particles move smoothly around the core            |
| Pointer Active | Nearby particles bend toward the pointer           |
| Strong Gravity | Particle acceleration becomes more visible         |
| Gravity Pulse  | Expanding ring disturbs orbital particles          |
| Recovery       | Particles gradually return to their original paths |
| Reset          | Orbital system is recreated                        |

---

## 📱 Responsive Behaviour

The component adapts to smaller screens.

On desktop:

* Large orbital field
* Three information cards
* Full instruction text
* Two-column control layout

On mobile:

* Reduced display height
* Smaller gravity core
* Compact information cards
* Stacked controls
* Responsive buttons
* Simplified instruction display

The canvas automatically resizes when the viewport changes.

---

## ⚡ Performance

The animation uses `requestAnimationFrame()` for continuous rendering.

The particle system is intentionally lightweight.

The component uses:

* A single canvas
* A small particle collection
* Short particle trails
* No external animation libraries
* No continuous DOM particle creation

This keeps the animation suitable for interactive UI environments.

---

## 🌟 Possible Extensions

The component can be extended with:

* Multiple gravity sources
* Black-hole mode
* Particle collisions
* Adjustable orbital count
* Gravitational attraction between particles
* Touch-based gravity fields
* Variable particle mass
* Gravity visualization lines
* Audio-reactive gravity
* Magnetic field mode
* Preset physics configurations
* Chaos mode
* Inverse gravity mode

These extensions can be added without changing the fundamental particle architecture.

---

## 💡 Why This Fits EaseMotion CSS

Gravity Glass is designed around the idea that animation should communicate behaviour rather than simply decorate an interface.

The component demonstrates:

* Continuous orbital motion
* Physics-inspired interaction
* Smooth interpolation
* Pointer-responsive animation
* Distance-based force
* Particle trails
* Layered visual feedback
* Glassmorphism
* Responsive interaction
* Keyboard accessibility

The animation itself becomes the explanation of the component.

---

## 📜 License

MIT License – free to use, modify, and distribute.

---

## ✨ Inspiration

Inspired by orbital mechanics, gravitational fields, glass interfaces, planetary systems, and the visual behaviour of particles moving through invisible forces.

Gravity Glass turns an abstract concept into an interactive visual experience where the user can directly manipulate the simulated field.
