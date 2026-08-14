# 💎 Geode Pulse – Interactive Crystal Formation

Geode Pulse is a fully interactive animated component that transforms a sealed stone into a glowing crystal formation.

Instead of displaying a static geode illustration, the component allows the user to control the complete formation process.

As the growth percentage increases, cracks appear, the internal energy becomes visible, crystals emerge from the center, and mineral particles begin floating around the formation.

The component is built entirely with vanilla HTML, CSS, and JavaScript and can be opened directly in a browser without a server or build step.

---

## ✨ Features

* Interactive geode opening animation
* Crystal growth from 0–100%
* Smooth growth interpolation
* Progressive crack illumination
* Animated crystal cluster
* Pulsing internal energy
* Floating mineral particles
* Four mineral environments
* Real-time growth percentage
* Dynamic formation status
* Click-to-grow interaction
* Full-open button
* Reset button
* Keyboard shortcuts
* Responsive mobile layout
* Canvas-based particle system
* Pure HTML/CSS/JavaScript
* No external dependencies

---

## 💎 Available Mineral Scenes

Geode Pulse includes four different mineral environments.

### 💜 Amethyst

A deep violet crystal environment featuring purple crystal highlights and a soft lavender energy glow.

### 💚 Emerald

A green and teal environment inspired by natural emerald formations.

### 💙 Sapphire

A cool blue environment with cyan highlights and a deeper blue crystal chamber.

### 💛 Citrine

A warm amber and golden environment inspired by citrine crystals.

Each scene changes the visual identity of the formation while preserving the same animation system.

---

## 🪨 How the Animation Works

The geode uses a progressive formation model.

The current growth value ranges from:

```text
0 → 100
```

The displayed growth is interpolated toward the target growth value:

```text
currentGrowth +=
  (targetGrowth - currentGrowth) * 0.05;
```

This prevents the crystal formation from jumping immediately between states.

Instead, the visual state smoothly approaches the requested value.

---

## 🌱 Formation States

### 0% — Dormant

The stone remains completely closed.

Only subtle ambient particles are visible.

The internal crystal formation remains hidden.

---

### 1–30% — Awakening

The first cracks begin appearing.

A small amount of internal energy becomes visible.

The stone begins to feel active without being completely opened.

---

### 31–60% — Cracking

More cracks become illuminated.

The internal glow becomes stronger.

The first crystal shapes begin appearing.

---

### 61–84% — Revealing

The crystal formation becomes increasingly visible.

Crystals grow according to the current growth percentage.

The internal energy pulse becomes stronger.

---

### 85–100% — Fully Open

The geode shell moves away from the center.

The complete crystal formation is revealed.

The crystal cluster glows continuously while the mineral particles surround it.

---

## 🎮 Interaction

### Mouse

Click anywhere on the geode to increase the growth level.

Each click increases the target growth by approximately 10%.

### Slider

The growth slider provides direct control over the formation.

You can choose any value between:

```text
0%
```

and

```text
100%
```

### Open Button

The `Open Geode` button immediately moves the formation to 100%.

### Reset Button

The `Reset` button returns the geode to its dormant state.

---

## ⌨️ Keyboard Controls

| Key   | Action      |
| ----- | ----------- |
| Space | Open geode  |
| R     | Reset geode |

Keyboard shortcuts are disabled while interacting with form inputs.

---

## 🔮 Crystal System

The crystal formation consists of nine primary crystal elements.

Each crystal has its own:

* Height
* Rotation
* Position
* Animation delay
* Glow behavior

Example configuration:

```css
.c1 {
  --crystal-height: 105px;
  --rotation: -3deg;
}
```

Different heights and rotations prevent the cluster from looking perfectly symmetrical.

This produces a more natural mineral formation.

---

## ⚡ Crack System

The stone contains nine independent crack elements.

Each crack receives a threshold based on its index.

The opacity is calculated from the current growth level:

```javascript
const opacity =
  Math.max(
    0,
    Math.min(
      1,
      (currentGrowth - threshold) / 30
    )
  );
```

This allows cracks to appear progressively rather than all at once.

---

## 🌟 Particle System

The background uses a lightweight Canvas particle system.

The default configuration contains:

```text
35 particles
```

Each particle receives:

* Random position
* Random size
* Individual speed
* Animation phase
* Horizontal wobble
* Individual opacity

The particles are updated inside a `requestAnimationFrame` loop.

This allows the background atmosphere to remain continuously animated.

---

## 🌌 Pulse Animation

The crystal core uses a layered radial gradient.

The core continuously changes its scale and opacity.

This produces the appearance of energy pulsing inside the geode.

The effect is deliberately slow so the component feels organic rather than aggressive.

---

## 🧩 HTML Structure

The main structure is organized into several layers:

```text
geode-card
│
├── geode-header
│
├── geode-display
│   ├── canvas
│   ├── core-glow
│   ├── crystal-cluster
│   ├── geode-shell
│   ├── cracks
│   └── geode-status
│
├── geode-info
│
├── controls
│   ├── growth-slider
│   └── scene-options
│
├── actions
│
└── hint
```

This keeps the visual layers independent and makes the component easier to customize.

---

## 🎨 Customization

### Change Growth Speed

Modify:

```javascript
currentGrowth +=
  (targetGrowth - currentGrowth) * 0.05;
```

For example:

```javascript
currentGrowth +=
  (targetGrowth - currentGrowth) * 0.08;
```

A larger value produces faster interpolation.

---

### Change Particle Count

Modify:

```javascript
for (let i = 0; i < 35; i++) {
```

For example:

```javascript
for (let i = 0; i < 60; i++) {
```

---

### Change Crystal Count

Additional crystal elements can be added to:

```html
<div class="crystal-cluster">
```

Each crystal can then receive its own position, height, rotation, and animation delay.

---

### Change Crack Count

Additional crack elements can be added to:

```html
<div class="cracks">
```

The JavaScript automatically processes the crack collection.

---

## 🎨 Scene Configuration

All mineral scenes are stored inside the `scenes` object.

Example:

```javascript
const scenes = {

  amethyst: {
    name: "Amethyst",
    primary: "#b48cff",
    secondary: "#6f4fc4",
    glow: "#d8c2ff",
    particle: "#c9aaff"
  }

};
```

A new scene can therefore be added without changing the rest of the component architecture.

---

## 📱 Responsive Behavior

The component automatically adapts to smaller screens.

On mobile:

* The geode scales down
* Crystal dimensions are reduced visually
* Controls stack vertically
* Scene buttons become flexible
* Header content becomes vertical
* The main animation remains active

The component does not require a separate mobile implementation.

---

## ♿ Accessibility Considerations

The controls use native HTML elements where possible.

The growth slider remains keyboard accessible.

Buttons contain visible labels or emoji icons with descriptive `title` attributes.

The animation itself is decorative and the component remains usable through:

* Slider input
* Buttons
* Keyboard shortcuts

---

## 🛠️ Technologies

### HTML5

Provides the semantic component structure and native controls.

### CSS3

Used for:

* Gradients
* Glass effects
* Crystal shapes
* Transforms
* Glow effects
* Responsive layout
* Animations
* Clip paths

### JavaScript ES6

Handles:

* Interaction
* Growth interpolation
* Scene switching
* Keyboard controls
* Particle animation
* Dynamic state updates

### Canvas API

Used for the floating mineral particle system.

### requestAnimationFrame

Used to maintain the animation loop.

---

## 🚀 Running the Demo

No installation is required.

Simply open:

```text
demo.html
```

in a modern browser.

The component runs completely client-side.

No:

* npm install
* build process
* framework
* server
* external library

is required.

---

## 📸 Expected Experience

### Initial

A dark sealed stone sits in the center of the display.

Small particles drift through the background.

### Interaction

Clicking the formation increases the growth percentage.

Cracks gradually become visible.

### Mid Formation

The internal glow becomes stronger.

Crystal tips emerge from the opening.

### Complete Formation

The stone opens fully.

The crystal cluster becomes the visual focus.

Particles and glow create the final mineral atmosphere.

---

## 💡 Use Cases

Geode Pulse can be adapted for:

* Geological websites
* Science education
* Fantasy interfaces
* Game menus
* Product reveals
* Interactive portfolios
* Landing pages
* Digital art
* Museum experiences
* Mineral collection websites
* Interactive storytelling

---

## 🔧 Design Philosophy

The main idea behind Geode Pulse is transformation.

The user should not simply see a finished object.

They should experience the object becoming something else.

The animation therefore uses multiple layers of motion:

```text
Dormant Stone
      ↓
Energy Awakening
      ↓
Surface Cracking
      ↓
Crystal Emergence
      ↓
Full Mineral Formation
```

This makes the component feel more like an interaction than a static illustration.

---

## 📄 License

MIT License.

Free to use, modify, remix, and distribute.

---

## ✨ Credits

Created as a lightweight, dependency-free animated UI component inspired by natural geode formations, mineral growth, and hidden-energy reveal interactions.
