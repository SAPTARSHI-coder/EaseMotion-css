# SCSS Neon Border Mixin (Hardware Accelerated)

Creating a card or button border that has a continuous "racing light" traveling around its perimeter usually requires rendering an animated SVG stroke via JavaScript, or creating complex nested HTML `<div>` structures that clutter the DOM.

This submission demonstrates how to achieve a flawless, hardware-accelerated "neon racing border" using purely SCSS conic gradients and pseudo-elements.

---

## 🏛️ The Architecture

### 1. The Conic Gradient Engine
Instead of trying to animate a border directly (which is notoriously difficult and computationally expensive in CSS), we use the `::before` pseudo-element to create a massive background square that sits *behind* the card.

We apply a `conic-gradient()` to this background. A conic gradient sweeps colors around a central point (like a radar sweep).
```css
background: conic-gradient(
    from 0deg, 
    transparent 0%, 
    var(--glow-color-1) 30%, 
    var(--glow-color-2) 50%, 
    transparent 80%
);
```

### 2. Masking the Center
If we left it like this, the entire background of the card would be a sweeping radar gradient. 
To isolate just the *edges* (creating the border), we use the `::after` pseudo-element to create a solid inner background that sits directly over the center of the conic gradient, hiding everything except a thin sliver protruding around the edges!

### 3. The Infinite Rotation
Finally, we apply a simple infinite CSS rotation to the `::before` conic gradient layer. 
```css
@keyframes ease-spin-border {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```
Because the center is masked by the `::after` layer, as the conic gradient spins, it looks exactly like a racing light traveling along the border! By applying `will-change: transform`, the browser offloads the infinite rotation completely to the GPU.

---

## 💻 Usage

Import the mixin into your SCSS file, and apply it to any block-level element. You can override the default variables to customize the speed, thickness, and colors!

```scss
@import 'neon-border';

.my-card {
    @include ease-neon-border(
        $border-width: 4px,
        $border-radius: 20px,
        $bg-color: #0f172a,
        $glow-color-1: #c026d3,
        $glow-color-2: #fb7185,
        $animation-speed: 1.5s
    );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`.
- **DOM Manipulations:** `0`. Clean HTML (only requires a single parent `<div>`).
- **Main Thread Blocking:** `0ms`. The infinite CSS rotation is handed off entirely to the GPU compositor thread natively.
- **Graceful Degradation:** Users with `prefers-reduced-motion` enabled simply see a beautiful static gradient border without the infinite spinning animation.
