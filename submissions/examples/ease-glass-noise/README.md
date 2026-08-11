# Procedural Glass Noise (Asset-Free Glassmorphism)

Premium frosted glass effects (Glassmorphism) often include a subtle film grain or noise texture overlay. Without this noise, the `backdrop-filter: blur()` can look completely flat and synthetic. With the noise, it mimics the physical texture of real frosted glass or premium polycarbonate.

Historically, this was achieved by loading a massive transparent PNG image of film grain. Not only does this hurt load times (TTI/LCP), but it often looks blurry or pixelated on high-DPI Retina screens if the asset isn't huge.

This submission demonstrates how to procedurally generate a high-frequency, Retina-ready TV-static noise texture entirely in CSS, without a single image asset or SVG filter!

---

## 🏛️ The Architecture

### 1. The Standard Glass Base
First, we establish the standard glassmorphism base on our card using `backdrop-filter`.
```css
.glass-card {
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px); /* For Safari Support */
}
```

### 2. The Procedural Noise (The Magic)
We use a `::before` pseudo-element to overlay the noise. 
To generate the noise, we use a `repeating-conic-gradient`. A conic gradient sweeps colors around a central point. By defining color stops that are incredibly small (fractional percentages like `0.0001%`), we force the browser's CSS rendering engine to rapidly pack thousands of contrasting pixels tightly together. The engine essentially "glitches" trying to interpolate them, generating a perfect, high-frequency static noise!

```css
.glass-card::before {
    content: '';
    position: absolute;
    inset: 0;
    
    background: repeating-conic-gradient(
        transparent 0%,
        rgba(0, 0, 0, 0.05) 0.0001%,
        transparent 0.0002%,
        rgba(255, 255, 255, 0.05) 0.0003%
    );
}
```

### 3. Tiling the Noise
Because `repeating-conic-gradient` relies on fractional percentages of the parent's width, if the card is very large, the noise can stretch and look low-res. To prevent this, we force the browser to render the noise in a small 100x100px square, and then seamlessly tile it across the card!

```css
.glass-card::before {
    background-size: 100px 100px;
}
```

---

## 💻 Usage

To add procedural noise to any existing glassmorphism card, simply ensure the card has `position: relative`, and apply the `::before` CSS block above to it! Make sure to add `pointer-events: none;` to the pseudo-element so it doesn't block clicks on the card's buttons or text.

---

## 🚀 Performance Benchmarks

- **Image Assets / Payloads:** `0 KB`. You no longer need to import heavy `noise.png` files.
- **SVG Filters:** `0`. Bypasses the need for `<feTurbulence>` SVG filters, which are notoriously slow to render on mobile devices and often cause scrolling jitter.
- **Resolution:** Because it is generated mathematically by the CSS engine, it is infinitely scalable and flawlessly sharp on 4K, 5K, and Retina displays.
