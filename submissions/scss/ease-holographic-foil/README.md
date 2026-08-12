# SCSS Holographic Foil Card (Hardware Accelerated)

A trading-card style holographic foil effect that shimmers organically as you hover over it, creating a stunning 3D light reflection.

Historically, complex foil glare physics required embedding the DOM inside an HTML5 `<canvas>` using external libraries like Three.js, mapping textures to a 3D plane, and calculating raytraced light reflections against the mouse coordinates. This submission demonstrates how to achieve an incredibly realistic, hardware-accelerated foil glare natively using stacked CSS gradients and advanced CSS Blend Modes!

---

## 🏛️ The Architecture

### 1. The Holographic Layers
To create the rainbow glare of a physical holographic foil, we don't use heavy JPG or PNG textures. We draw the rainbows mathematically using CSS `repeating-linear-gradient`!
We stack two separate gradients on top of each other.
* Layer 1 is a tight, repeating rainbow angled at `45deg`.
* Layer 2 is an opposing, slightly wider rainbow angled at `135deg`.
When these two gradients overlap, they create a chaotic "Moiré pattern" interference that perfectly simulates the microscopic ridges on a holographic trading card refracting light!

### 2. The Color Dodge Blend (The Magic)
If we just place the rainbows on top of the card, it looks flat and fake.
The secret to the physics simulation is applying `mix-blend-mode: color-dodge` to the foil layer!
Color Dodge aggressively brightens the base colors where the rainbows overlap. This means the foil reacts wildly differently depending on what is underneath it!
* **On Dark Cards:** The foil looks deep, richly saturated, and metallic.
* **On Light Cards:** The foil blows out the highlights, creating blinding white and pastel flares!

### 3. The Hover Pan
To make the foil "react" to the light, we don't need complex JavaScript to track mouse vectors.
We simply make the foil layer massive (`background-size: 300% 300%`), and when the user hovers the card, we transition the `background-position` diagonally (`100% 100%`).
This slowly pans the chaotic Moiré interference pattern across the card, perfectly simulating the light catching the foil!

---

## 💻 Usage

Import the mixin into your SCSS file, and apply it to any card container class!

```scss
@import 'holographic-foil';

.my-rare-card {
    @include ease-holographic-foil(
        $base-color: #111827, /* Try different base colors to see the blend mode react! */
        $shimmer-speed: 2s
    );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of WebGL/Three.js!
- **Image Assets:** `0 MB`. The foil is drawn procedurally using CSS gradients, saving massive amounts of bandwidth compared to loading heavy holographic textures.
- **GPU Compositor:** Animating `background-position` is highly optimized. Because we are only translating a flat 2D texture, the browser hands the animation entirely over to the GPU compositor thread!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills the continuous background panning and 3D card tilt, ensuring a static, safe interaction.
