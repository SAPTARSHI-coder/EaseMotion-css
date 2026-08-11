# Cinematic Depth-of-Field Parallax (Hardware Accelerated)

Standard parallax simply moves background layers at a slower Y-axis rate than foreground layers to simulate depth. 

Premium "cinematic" parallax, often seen on AAA game websites (like God of War or Final Fantasy landing pages), goes a step further: it physically blurs the foreground and background based on scroll depth to simulate a physical camera lens' **Depth of Field (DoF)** shifting focus.

Historically, this required binding heavy `window.addEventListener('scroll')` events in JavaScript, calculating the Intersection Observer ratios of multiple DOM elements, and manually applying inline `filter: blur()` CSS properties 60 times a second. This caused massive Layout Thrashing and severe scrolling lag on lower-end laptops and mobile devices.

This highly advanced submission completely re-engineers this pattern. We mathematically map both the `translateY` offset AND the CSS `filter: blur()` value directly to the scrollbar natively on the GPU using the bleeding-edge `animation-timeline: scroll()` specification.

---

## 🏛️ The Architecture

### 1. The Scroll Track & Viewport
Because the animations are tied to the scrollbar, we need a physical "track" for the user to scroll down. 
We create a parent `<div class="scroll-track">` and set its height to `300vh`. 

Inside it, we place our `<div class="parallax-viewport">` and set it to `position: sticky; top: 0; height: 100vh;`. This ensures the layers remain locked in the camera view while the user scrolls down the massive 300vh track.

### 2. Native Scroll Timeline Binding
Every parallax layer uses the following CSS to bind its `@keyframes` directly to the scrollbar:
```css
.parallax-layer {
    /* 
      We bind the animation to the nearest scrollable ancestor (the root block)
      The animation will be at 0% when the user is at the top of the track,
      and 100% when they reach the bottom of the track!
    */
    animation-timeline: scroll(root block);
    animation-timing-function: linear;
}
```

### 3. Animating `translateY` and `blur()` together
The absolute magic happens inside the `@keyframes`. We do not just animate the Y-axis; we simultaneously animate the CSS `filter` property.

For example, the **Midground Forest** starts in razor-sharp focus (`0px` blur). As the user scrolls down and the camera "pushes past" it towards the distant mountains, the forest physically blurs out of focus (`15px` blur).
```css
@keyframes cinematic-forest {
    0% {
        transform: translateY(0) scale(1);
        filter: blur(0px);
    }
    100% {
        transform: translateY(50%) scale(1.2);
        filter: blur(15px);
    }
}
```
Conversely, the **Distant Mountains** start blurred (`6px`), and slowly come into razor-sharp focus (`0px`) as the user scrolls!
```css
@keyframes cinematic-mountains {
    0% {
        transform: translateY(0) scale(1.1);
        filter: blur(6px);
    }
    100% {
        transform: translateY(20%) scale(1.1);
        filter: blur(0px);
    }
}
```

---

## ⚙️ Usage

To use this Cinematic Parallax in your own project:
1. Ensure your container has enough scrollable height (e.g., `300vh`).
2. Separate your scene into distinct transparent PNG layers (Sky, Background, Midground, Foreground).
3. Apply `position: sticky` to a viewport wrapper holding the layers.
4. Bind the animations using `animation-timeline: scroll(root block)`.

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`. Completely bypasses ScrollMagic, GSAP, and Intersection Observers.
- **Main Thread Blocking:** `0ms`. (Because we added `will-change: transform, filter`, the browser pre-allocates memory. The `transform` and `filter` interpolation is handed off entirely to the GPU compositor thread natively by the CSS engine).
- **Graceful Degradation:** If a user is on an older browser that doesn't support `animation-timeline`, the scene simply falls back to a beautiful, static, fully-assembled landscape. The site never breaks!

---

## 🐛 Troubleshooting

- **The animation doesn't play.** The `animation-timeline` specification currently requires Chromium 115+ (Chrome, Edge). Firefox and Safari support are currently behind experimental feature flags. 
- **The edges of the images are bleeding when blurred.** When you apply `filter: blur(10px)` to an image, the blurred pixels extend outside the bounds of the image, revealing the background behind it. To fix this, always scale your layers up slightly (e.g., `scale(1.1)`) to ensure the blurred edges are pushed completely off-screen!
- **It lags on my 4K monitor.** Blurring massive transparent PNGs across a 4K resolution is heavily taxing on the GPU (even without JS). To optimize, try restricting the `parallax-viewport` `max-width` to `1920px`, or limit the maximum blur radius on the largest background layers.
