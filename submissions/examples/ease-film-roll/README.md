# Cinematic Film Roll (Hardware Accelerated)

A horizontal strip of photos/videos that warps and bends backwards at the edges of the screen, creating a 3D cylindrical "film roll" effect as the user scrolls horizontally.

Historically, syncing 3D transforms to a user's scroll position required attaching expensive `window.addEventListener('scroll')` hooks in JavaScript, running complex trigonometry calculations on the main thread, and forcing the DOM to repaint 60 times a second. This submission demonstrates how to utilize the bleeding-edge CSS Scroll-Driven Animations API to map 3D physics directly to the scrollbar natively in the GPU!

---

## 🏛️ The Architecture

### 1. The Scroll Container
First, we build a standard horizontal scrolling container using `overflow-x: scroll`.
To enable 3D physics on the children, we apply `perspective: 1200px` and `transform-style: preserve-3d` to this parent wrapper!

### 2. The Native Scroll Hook (`animation-timeline`)
We define a standard `@keyframes` block, but instead of assigning it a time duration (e.g., `2s`), we link it directly to the scrollbar!
```css
.film-frame {
    animation: film-roll-bend linear;
    animation-timeline: view(inline); /* The Magic! */
}
```
The `view()` function tells the browser to track the element's position as it moves across its parent's scrollport. The `inline` keyword specifies we are tracking horizontal (X-axis) scrolling, not vertical.

### 3. Keyframe Mapping (0% to 100%)
Because this keyframe is linked to `view(inline)` rather than a clock, the percentages represent physical positions on the screen!
- **`0%`:** The exact moment the element ENTERS the right side of the screen.
- **`50%`:** The exact moment the element is in the dead CENTER of the screen.
- **`100%`:** The exact moment the element EXITS the left side of the screen.

### 4. The 3D Bend
By mapping 3D transforms to these physical positions, the film roll builds itself organically:
- At `0%` (entering right), we apply `rotateY(-45deg) translateZ(-200px)`. It bends sharply away from the camera.
- At `50%` (center screen), we apply `rotateY(0deg) translateZ(0)`. The image flattens out perfectly to face the user.
- At `100%` (exiting left), we apply `rotateY(45deg) translateZ(-200px)`. It bends away in the opposite direction!

---

## 💻 Usage

Copy the HTML structure and the CSS Scroll-Driven hooks.

```html
<div class="film-roll-container">
    <div class="film-frame"><img src="..." /></div>
    <div class="film-frame"><img src="..." /></div>
</div>
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`! We completely bypass React `onScroll` events or vanilla JS listeners!
- **GPU Compositor:** Tying `transform` properties to the CSS `animation-timeline` API is currently the single most performant way to build parallax in modern web design. The browser hands the entire scroll-syncing math directly to the GPU compositor thread, guaranteeing a flawless 60fps render that will never stutter even if the main JS thread freezes!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that unhooks the `animation-timeline`, allowing the images to scroll horizontally as a standard, flat carousel.

*(Note: The CSS Scroll-Driven Animations API is bleeding-edge. As of 2024, it is natively supported in Chrome/Edge, with Firefox and Safari working on implementations. Fallbacks are naturally handled by browsers ignoring the `animation-timeline` property).*
