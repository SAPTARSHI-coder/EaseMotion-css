# SCSS Generative Topography Map (Hardware Accelerated)

An animated background pattern that resembles the organic contour lines of a geographic topography map, slowly shifting over time.

Historically, rendering generative fractal noise or topographic contours required mounting an HTML5 `<canvas>` and running a heavy Perlin Noise generator in JavaScript on every single frame. This submission demonstrates how to completely bypass Canvas/JS by combining mathematical CSS Gradients with native SVG `<filter>` displacement physics!

---

## 🏛️ The Architecture

### 1. The CSS Base Layer (Perfect Circles)
We start by drawing strict, mathematically perfect concentric rings using native CSS.
```css
background-image: repeating-radial-gradient(
    circle at center,
    #020617 0,
    #020617 49px,
    rgba(56, 189, 248, 0.3) 49px,
    rgba(56, 189, 248, 0.3) 50px
);
```
This gives us a clean "target" texture. But how do we make perfectly round rings look like organic, jagged mountain contours?

### 2. The SVG Math Filter (The Magic)
We inject a hidden `<svg>` block into the DOM. This SVG doesn't draw anything visible; it just defines a mathematical filter!
- **`<feTurbulence>`**: This primitive generates raw, high-frequency fractal noise (similar to Perlin noise). By setting a very low `baseFrequency` (e.g., `0.015`), we create massive, smooth "continents" of noise rather than static TV fuzz.
- **`<feDisplacementMap>`**: This primitive takes the fractal noise we just generated and uses it to physically drag and warp the pixels of whatever it is applied to!

### 3. The CSS/SVG Bridge
Inside our SCSS mixin, we apply the SVG math directly to our perfect CSS circles!
```css
filter: url('#ease-topography-filter');
```
The browser instantly takes the perfect concentric CSS rings and violently warps them using the SVG fractal noise. The resulting image looks exactly like organic, randomized geographical topography contour lines!

### 4. The Infinite Drift
To make the map feel alive, we simply animate the `background-position` of the CSS gradient. As the CSS circles slowly drift across the screen, they are continuously warped in real-time by the stationary SVG noise filter, creating an incredibly complex, infinitely generating pattern!

---

## 💻 Usage

Copy the invisible SVG `<filter>` block into your HTML anywhere. Then, import the SCSS mixin and apply it to a container!

```html
<svg style="display: none;">
    <defs>
        <filter id="ease-topography-filter">
            <!-- See index.html for the exact SVG nodes! -->
        </filter>
    </defs>
</svg>

<div class="my-hero-section">
    <h1>Topography</h1>
</div>
```

```scss
@import 'topography';

.my-hero-section {
    @include ease-topography-map(
        $bg-color: #020617,
        $line-color: rgba(56, 189, 248, 0.15)
    );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of Canvas APIs, WebGL, or JS Noise Libraries (like `simplex-noise.js`)!
- **DOM Manipulations:** `0`. It runs entirely on the CSS `background` and `filter` properties of a single HTML node.
- **GPU Compositor:** SVG Filters applied via CSS are natively hardware-accelerated in modern browsers. By hinting the browser with `will-change: background-position`, we force the browser engine to offload the 2D texture translations entirely to the GPU compositor thread, resulting in a flawless 60fps render without Paint thrashing!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills the infinite drifting animation, locking the map to a static, beautiful organic state.
