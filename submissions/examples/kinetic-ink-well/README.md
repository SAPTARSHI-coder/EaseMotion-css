# 🖋️ Kinetic Ink Well

A self-contained interactive liquid-ink surface built with vanilla HTML, CSS, and JavaScript.

Kinetic Ink Well transforms a simple canvas into a responsive pool of animated ink. Pointer movement disturbs the surface, clicks create expanding ripples, and randomly generated droplets fall into the liquid to produce secondary waves.

No framework, build system, package, or external dependency is required.

---

## ✨ Features

* 🖋️ Interactive liquid ink surface
* 🌊 Expanding ripple simulation
* 🖱️ Pointer-based surface disturbance
* 💧 Automatic falling ink droplets
* ✨ Secondary ripple generation
* 🌫️ Subtle animated surface particles
* 📊 Real-time ink density indicator
* 💡 Pointer glow
* 🔄 Reset functionality
* ⌨️ Keyboard shortcuts
* 📱 Responsive layout
* ♿ Reduced-motion consideration
* 📦 Completely self-contained

---

## 🚀 Running the Demo

The component does not require a server.

Open:

```text
demo.html
```

directly in a modern browser.

The demo has been designed to work without:

* npm
* bundlers
* frameworks
* CDNs
* external JavaScript libraries

---

## 🎮 Interaction

### Pointer Movement

Moving the pointer across the ink surface creates small disturbances.

The component continuously tracks the pointer position and uses it to influence the surface animation.

### Click

Clicking the surface creates a stronger circular ripple.

```javascript
addRipple(x, y, 1);
```

### Create Ripple

The `Create Ripple` button produces a ripple at the center of the ink surface.

### Drop Ink

The `Drop Ink` button creates a simulated falling droplet.

The droplet travels toward the surface and generates a smaller secondary ripple when it lands.

### Reset

The reset control clears:

* active ripples
* falling droplets
* temporary disturbances

and restores the default ink density.

---

## ⌨️ Keyboard Controls

| Key   | Action                |
| ----- | --------------------- |
| Space | Create central ripple |
| R     | Reset surface         |

---

## 🌊 Ripple System

Every ripple contains several properties:

```javascript
{
  x,
  y,
  radius,
  alpha,
  speed,
  width
}
```

The animation loop increases the radius while gradually reducing opacity.

This creates the appearance of energy spreading through the liquid surface.

Old ripples are automatically removed once their energy falls below the rendering threshold.

---

## 💧 Droplet System

Droplets are represented as lightweight objects containing:

```javascript
{
  x,
  y,
  velocity,
  size,
  life
}
```

Gravity-like acceleration increases the droplet's velocity while it falls.

When the droplet reaches the surface, it is removed and converted into a ripple.

This allows a single event to transition between two animation systems:

```text
Droplet
   ↓
Surface collision
   ↓
Ripple
   ↓
Energy decay
```

---

## 📊 Ink Density

The demo contains a visual ink-density indicator.

Interaction increases the density value:

```javascript
density += 3;
```

while the animation loop slowly reduces it.

This gives the component a continuously changing state rather than a purely decorative animation.

The value is clamped between:

```text
0%
```

and:

```text
100%
```

---

## 🎨 Visual System

The component uses several visual layers:

1. Background gradient
2. Ink surface gradient
3. Surface waves
4. Animated micro-particles
5. Ripple rings
6. Pointer glow
7. UI overlays

The layers are rendered independently so the liquid animation can remain lightweight while the interface remains readable.

---

## 🛠️ Customization

### Ripple Count

Change the maximum number of active ripples:

```javascript
if (ripples.length > 20) {
  ripples.shift();
}
```

### Ripple Speed

Modify:

```javascript
speed: 2.2 + Math.random() * 1.2
```

### Droplet Frequency

Modify:

```javascript
2500 + Math.random() * 2500
```

to make droplets appear more or less frequently.

### Particle Count

The number of surface particles is calculated from the canvas dimensions:

```javascript
const count =
  Math.max(
    45,
    Math.floor(width * height / 9000)
  );
```

This automatically reduces visual complexity on smaller surfaces.

---

## 📱 Responsive Design

The component dynamically measures its container and resizes the canvas accordingly.

On smaller screens:

* Controls become flexible
* Header content stacks vertically
* Canvas height is reduced
* UI overlays move closer to the edges
* Interaction remains touch-friendly

---

## ♿ Accessibility

The component respects:

```css
@media (prefers-reduced-motion: reduce)
```

Interactive controls are implemented using semantic buttons.

The primary interaction surface remains visually understandable even without relying exclusively on animation.

---

## 🧩 Integration

The component can be copied into an existing project without introducing dependencies.

The important pieces are:

```text
demo.html
style.css
```

The Canvas element is:

```html
<canvas id="inkCanvas"></canvas>
```

The JavaScript controls the simulation through:

```javascript
requestAnimationFrame(render);
```

---

## 💡 Use Cases

Kinetic Ink Well works particularly well for:

* Portfolio websites
* Digital writing tools
* Calligraphy applications
* Creative landing pages
* Editorial interfaces
* Art portfolios
* Experimental UI libraries
* Interactive hero sections

---

## 📋 Browser Testing

Tested target browsers:

* Chrome
* Firefox
* Edge

Safari support is expected for modern versions supporting Canvas and Pointer Events.

---

## 📝 License

MIT License.

Free to use, modify, and distribute.

---

## ✨ Inspiration

The component is inspired by traditional ink wells, sumi-e painting, calligraphy, liquid surface tension, and the subtle visual movement found in a still pool of ink.

The goal is to make a small interface element feel tactile and physical rather than simply animated.
