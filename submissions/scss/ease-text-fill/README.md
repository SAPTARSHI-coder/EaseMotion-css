# SCSS Dynamic Text Fill (Hardware Accelerated)

Large, transparent typography with a premium stroke outline that slowly fills with a solid color from the bottom up, like water filling a tank.

Historically, animating the fill of text in this manner required complex SVG paths with `stroke-dashoffset` tricks, or splitting the string into dual layers and manually calculating `overflow: hidden` heights using JavaScript scroll listeners. This submission demonstrates how to achieve an elegant, hardware-accelerated water-filling effect natively using CSS `background-clip: text`!

---

## 🏛️ The Architecture

### 1. Transparent Text & Webkit Stroke
First, we make the actual text transparent using `color: transparent;`. This is crucial because it allows the background layer to show through the physical characters! 
Then, we draw the "glass tank" outline around the letters using the `-webkit-text-stroke` property.

### 2. The "Water" Gradient
We construct a sharp CSS `linear-gradient` that acts as the physical "water".
```scss
background-image: linear-gradient(
    to top,
    #3b82f6 0%,   /* Water (Blue) */
    #3b82f6 50%,  /* Water stops exactly at 50% */
    transparent 50%, /* Empty space starts at 50% */
    transparent 100%
);
```
We apply this gradient to the text element's background.

### 3. Background Math (The Magic)
If the background is the exact same size as the text, the text will always be half full.
To animate the fill, we must make the background gradient *twice* as tall as the text element!
```css
background-size: 100% 200%;
```
Now, we can position the background all the way down (`background-position: 50% 100%`). Because the top half of our gradient is completely transparent, the text appears empty!

### 4. Background Clip & Animation
We apply `background-clip: text;` so the massive gradient is only visible *inside* the outline of the letters!
Finally, we apply a simple `@keyframes` animation that transitions the `background-position` from `100%` (bottom) to `0%` (top). This physically pulls the blue half of the gradient UP behind the text clip, creating a flawless simulation of rising liquid!

---

## 💻 Usage

Import the mixin into your SCSS file, and apply it to any block of text!

```scss
@import 'text-fill';

.my-hero-title {
    @include ease-text-fill(
        $fill-color: #ec4899,
        $stroke-color: rgba(255, 255, 255, 0.2),
        $duration: 3s
    );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of DOM manipulation libraries!
- **DOM Manipulations:** `0`. No duplicated strings, no nested `<span>` wrappers, no SVG layers. It is a single, semantically clean `<h2>` tag!
- **GPU Compositor:** Animating `background-position` on a CSS gradient is highly optimized. Because we are only translating a flat 2D texture behind a clipping mask, the browser hands the animation entirely over to the GPU compositor thread, resulting in a flawless 60fps render!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills the animation and snaps the gradient instantly to the 100% filled state, ensuring immediate legibility.
