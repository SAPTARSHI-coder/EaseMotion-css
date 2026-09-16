# SCSS Retro CRT Monitor (Hardware Accelerated)

A retro CRT monitor effect that applies a curved screen bulge, subtle RGB chromatic aberration, and an infinitely scrolling horizontal scanline across any container or image!

Historically, realistic CRT screen effects required embedding the DOM inside an HTML5 `<canvas>` using external libraries like `html2canvas`, and applying complex WebGL fragment shaders. This submission demonstrates how to achieve a deeply realistic, hardware-accelerated retro monitor overlay natively using an SCSS mixin!

---

## 🏛️ The Architecture

### 1. Chromatic Aberration (RGB Split)
The defining characteristic of an old CRT tube is that the electron guns are slightly misaligned, causing the red and blue channels of text to bleed slightly at the edges.
We simulate this perfectly in CSS by applying a global `text-shadow` to the container:
```css
text-shadow: 
    2px 0 0 rgba(255, 0, 0, 0.7),
    -2px 0 0 rgba(0, 0, 255, 0.7);
```

### 2. The CRT Overlay Layer
We want to apply the vignette and scanlines *over* the content, but we don't want to block the user from clicking the buttons underneath! 
We achieve this by attaching a `::after` pseudo-element to our container that acts as a full-screen overlay, and utilizing the `pointer-events: none;` CSS property to make it physically click-through!

### 3. The Curved Screen Vignette
Convex CRT monitors are darker in the corners. We simulate this 3D depth by applying a massive inset `box-shadow` to our overlay layer.
```css
box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.8);
```

### 4. The Infinite Scanlines (The Magic)
Instead of loading a heavy transparent PNG texture for the scanlines, we mathematically draw them using a CSS `repeating-linear-gradient`!
```css
background: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent 2px,
    rgba(255, 255, 255, 0.05) 3px,
    rgba(255, 255, 255, 0.05) 4px
);
```
We then apply an infinite `@keyframes` animation to the `background-position`, scrolling the drawn scanline gradient continuously down the screen!

---

## 💻 Usage

Import the mixin into your SCSS file, and apply it to any container class.

```scss
@import 'crt';

.my-terminal {
    @include ease-crt-screen(
        $scanline-color: rgba(74, 222, 128, 0.05), /* Tint scanlines green */
        $vignette-color: rgba(0, 0, 0, 0.85),
        $rgb-split-amount: 3px,
        $flicker-speed: 4s,
        $scanline-speed: 8s
    );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of WebGL/Canvas libraries!
- **DOM Manipulations:** `0`. Uses existing pseudo-elements.
- **Image Assets:** `0 MB`. The scanlines are drawn procedurally using CSS gradients, saving massive amounts of bandwidth compared to static PNG textures.
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills the screen flicker, removes the scrolling scanlines entirely, and resets the RGB `text-shadow` split to ensure crisp, static typography that won't trigger motion sickness or eye strain.
