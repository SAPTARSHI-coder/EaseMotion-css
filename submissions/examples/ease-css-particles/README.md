# Native CSS Generative Particle Network

The classic "connected particle web" background (popularized by libraries like `particles.js`) is an incredibly common aesthetic in modern tech landing pages. 

However, rendering this effect is universally assumed to be impossible without JavaScript `<canvas>` engines. These engines constantly loop at 60fps to calculate particle positions and draw connection lines between them, notoriously draining laptop batteries and causing performance bottlenecks on lower-end mobile devices.

This incredibly advanced submission proves that a hyper-complex, connected particle network can be simulated entirely via **Hardware-Accelerated CSS and SVG Matrix Mathematics**, with 0 bytes of JavaScript payload.

---

## 🧪 The Architecture (How it Works)

This effect relies on the fusion of massive generative SCSS loops and bleeding-edge DOM composite rendering.

### 1. The Generative SCSS Loop
Instead of calculating particle positions on the fly via JS, we use SCSS to procedurally generate hundreds of unique `@keyframes` during the build step.
* We loop 100 times (once for each particle).
* We use a custom pseudo-random number generator (LCG) to calculate a random `start-x` and `start-y` percentage for the particle.
* We generate a massive, random floating path using `translate3d(..., ..., 0)` and assign it to a unique `@keyframes float-#{$i}` rule.
* We randomize the `animation-delay` and `animation-duration` so the particles move completely out of sync with each other, mimicking organic chaos.

### 2. Simulating the "Connections"
Normally, drawing a line between two moving particles requires Canvas pathing. We fake this using a visual trick!
* Every particle `.particle` has a `::after` pseudo-element.
* This pseudo-element is styled to be a long, thin horizontal line (e.g., 150px wide, 4px tall).
* We assign a *second* random animation to this line that causes it to constantly rotate (`rotate(0deg)` to `rotate(360deg)`).
* As particles float around, these invisible "arms" swing around them.

### 3. The SVG Alpha Threshold (Gooey Matrix)
The final magic trick happens in the GPU. We apply a hidden SVG `<filter>` to the entire `.particle-network` container.
* **The Blur:** The filter applies a `<feGaussianBlur>` to all particles and their spinning arms.
* **The Alpha Matrix:** The filter applies a harsh `<feColorMatrix>` (specifically, `0 0 0 19 -9` on the alpha channel). 
* **The Result:** When the spinning, blurred arm of one particle overlaps with the blurred body of another particle, the Alpha Threshold forces the intersection to solidify. It visually creates a solid, liquid "bridge" between the two elements! As they float apart, the bridge stretches and eventually "snaps," perfectly mimicking a network connection algorithm.

---

## ⚙️ Configuration Parameters

You can completely customize the network via the SCSS mixin.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$particle-count`| `Number`| `100` | The number of child `.particle` divs inside your HTML container. |
| `$particle-color`| `Color` | `#3b82f6`| The core color hue of the particles and connection lines. |
| `$speed`| `Number` | `1` | Animation duration multiplier. Higher numbers mean *slower* movement. |

---

## 💻 Usage

```html
<!-- You MUST include the SVG Filter somewhere in the DOM -->
<svg style="display: none;">
    <filter id="particle-goo">
        <!-- See demo.html for full filter code -->
    </filter>
</svg>

<!-- The Container -->
<div class="my-network">
    <div class="particle"></div>
    <!-- Repeat 100 times ... -->
</div>
```

```scss
@import 'ease-particles';

.my-network {
    @include generate-particles(
        $particle-count: 100,
        $particle-color: #ec4899,
        $speed: 1.5
    );
}
```

---

## ⚡ Performance Note

Because the entire calculation occurs during the SCSS build step, the client browser does absolutely 0 coordinate math. It simply receives a static CSS file containing `translate3d` animations. By forcing `translate3d`, the browser offloads the movement entirely to the GPU compositor thread. This makes the animation significantly more performant and lightweight than booting up a JavaScript `<canvas>` context!
