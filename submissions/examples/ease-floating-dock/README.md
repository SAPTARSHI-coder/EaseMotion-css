# CSS Native Floating Dock (macOS Style)

A macOS-style floating bottom dock where icons smoothly scale up when hovered, and push their neighbors away slightly. 

Historically, to create a true magnification effect where the hovered item scales up, and its immediate neighbors scale up slightly less, developers required complex JavaScript. JS had to read the mouse `X` and `Y` coordinates, calculate the geometric distance to every single icon in the dock, and apply dynamic inline `transform` scales to them.

This submission demonstrates how to bypass JavaScript completely, utilizing modern CSS pseudo-classes to achieve a flawless, hardware-accelerated magnification effect.

---

## 🏛️ The Architecture

### 1. The Directly Hovered Item
When an item in the dock is hovered, we apply our maximum scale (e.g., `1.5x`). We also increase its side margins slightly! This margin increase physically pushes its adjacent siblings outward, creating that "springy" dock feel.
```css
.dock-item:hover {
    transform: scale(1.5);
    margin: 0 10px;
}
```

### 2. Targeting RIGHT Neighbors
CSS has always had the Adjacent Sibling Combinator (`+`), which allows us to target elements immediately *after* (to the right of) the hovered element!
We scale the immediate right neighbor up slightly (`1.25x`), and the neighbor after that up even less (`1.1x`).
```css
/* Immediate right neighbor */
.dock-item:hover + .dock-item {
    transform: scale(1.25);
}

/* Far right neighbor */
.dock-item:hover + .dock-item + .dock-item {
    transform: scale(1.1);
}
```

### 3. Targeting LEFT Neighbors (The Modern CSS Magic)
The missing piece of the puzzle used to be targeting the elements to the *left*. CSS cascaded downwards, so it could only look "forward".
Thanks to the modern `:has()` pseudo-class, we can now look backward up the DOM tree!

We can construct a selector that says: *"Find a dock-item that HAS a hovered item immediately to its right"*
```css
/* Immediate left neighbor */
.dock-item:has(+ .dock-item:hover) {
    transform: scale(1.25);
}

/* Far left neighbor */
.dock-item:has(+ .dock-item + .dock-item:hover) {
    transform: scale(1.1);
}
```
By combining `:has()` and `+`, we can perfectly target and independently scale neighbors on *both* sides of the cursor using pure CSS!

### 4. Counter-Scaling Tooltips
When the parent button scales up to `1.5x`, any text inside it will also become `1.5x` larger, which looks blurry and wrong. To fix this, we apply a mathematical counter-scale to the tooltip using CSS `calc()`!
```css
.dock-item:hover .dock-tooltip {
    /* (1 / 1.5) = 0.666x */
    transform: scale(calc(1 / 1.5));
}
```
This ensures the tooltip text remains at its crisp, native pixel size regardless of how large the parent button grows.

---

## 💻 Usage

Copy the HTML structure and the CSS. You can add as many `.dock-item` buttons as you want, the `:has()` logic will automatically scale their neighbors correctly!

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`. We completely bypassed the complex `requestAnimationFrame` geometry distance calculations traditionally required for this effect.
- **Main Thread Blocking:** `0ms`. 
- **GPU Compositor:** By animating `transform: scale()`, the browser hands the interpolation entirely over to the GPU compositor thread for a flawless 60fps interaction.
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that strips the scaling transitions entirely, turning the dock into a static, highly legible navigation bar.
