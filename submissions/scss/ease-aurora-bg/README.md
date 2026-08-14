# SCSS Aurora Borealis Background (Hardware Accelerated)

Creating an organic, flowing, multi-color aurora background typically requires WebGL shaders or massive MP4 video loops. WebGL shaders are incredibly difficult to write, require massive libraries like Three.js, and drain mobile batteries rapidly by pegging the GPU usage at 100%. Video loops are massive files that hurt your Time to Interactive (TTI) and Largest Contentful Paint (LCP) SEO scores.

This submission demonstrates how to achieve a stunning, WebGL-style fluid background using purely native CSS and SCSS mixins!

---

## 🏛️ The Architecture

### 1. The Radial Gradients
We use the `::before` and `::after` pseudo-elements of the parent container to generate massive `radial-gradient` circles. 
Instead of solid colors, we use multi-stop gradients that fade out into transparency.
```css
background: radial-gradient(circle, var(--color-1) 0%, transparent 70%);
```

### 2. The Fluid Distortion
A perfect circle rotating doesn't look organic. To make it look like a fluid, undulating wave of aurora light, we stretch the transform origin of the pseudo-elements *off-center*.
```css
transform-origin: 60% 40%;
```
When this off-center stretched element rotates, it wobbles!

### 3. The Extreme Blur (The Magic)
If you just wobble some radial gradients, it looks like a cheap PowerPoint animation. 
The absolute magic of this effect is applying an **extreme** blur to the pseudo-elements.
```css
filter: blur(120px);
```
By blurring the elements aggressively, the hard edges of the gradients completely disappear, and the colors bleed into each other organically. As the off-center blobs wobble around, the bleeding colors mix and separate, perfectly mimicking fluid dynamics and WebGL noise shaders!

---

## 💻 Usage

Import the mixin into your SCSS file, and apply it to your body tag or a full-screen wrapper. You can override the default variables to customize the colors and animation speed!

```scss
@import 'aurora';

.my-background {
    @include ease-aurora-bg(
        $color-1: rgba(56, 189, 248, 0.8), /* Sky Blue */
        $color-2: rgba(139, 92, 246, 0.8), /* Violet */
        $color-3: rgba(236, 72, 153, 0.8), /* Pink */
        $bg-base: #0f172a, /* Dark slate background */
        $blur-radius: 150px,
        $animation-speed: 25s
    );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`.
- **DOM Manipulations:** `0`. Clean HTML (only requires a single parent `<div>`).
- **Main Thread Blocking:** `0ms`.
- **GPU Compositor:** By applying `will-change: transform`, the CSS engine hands the rotations entirely to the GPU compositor thread, resulting in a flawless 60fps animation that barely registers on battery drain compared to WebGL.
