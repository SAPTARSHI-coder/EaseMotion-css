# SCSS Audio Visualizer (Hardware Accelerated)

A bouncing frequency equalizer animation that mimics live audio playing, perfect for podcasts or music player UIs.

Historically, animating 20+ bouncing bars required running a heavy `requestAnimationFrame` loop in JavaScript, calling `Math.random()`, and constantly updating inline styles for every single bar frame-by-frame. This submission demonstrates how to utilize SCSS compiler mathematics and modulo operators to generate a pseudo-random, hardware-accelerated CSS equalizer with absolute zero JavaScript!

---

## 🏛️ The Architecture

### 1. The Base Animation
First, we define a standard `@keyframes` bouncing animation that scales an element on the Y-axis from 5% to 100%. We apply this uniformly to all the frequency bars, anchoring their `transform-origin` to the `bottom` so they grow upwards!

### 2. The Pseudo-Random Math Loop (The Magic)
If every bar had the exact same duration and delay, it would just look like a solid block moving up and down. We need chaos!
Instead of JavaScript `Math.random()`, we run an SCSS `@for` loop at compile time:
```scss
@for $i from 1 through $num-bars {
    $delay-factor: ($i * 7) % 11;
    $duration-factor: ($i * 13) % 5;
    
    $calculated-delay: ($delay-factor * 0.1s);
    $calculated-duration: $base-duration + ($duration-factor * 0.15s);
    
    & > :nth-child(#{$i}) {
        animation-delay: $calculated-delay;
        animation-duration: $calculated-duration;
    }
}
```

### 3. Why Modulo `(%)` and Prime Numbers?
By multiplying the current loop index `$i` by a prime number (like `7` or `13`) and returning the remainder (modulo `%` `11` or `5`), we generate a non-repeating, chaotic sequence of integers that *looks* entirely random to the human eye!
We use this math to output a unique `animation-delay` and `animation-duration` for every single `:nth-child` bar!
Because every bar is running on a slightly different duration, they will naturally drift out of sync over time, creating an infinitely varied, chaotic frequency wave that never loops perfectly!

---

## 💻 Usage

Import the mixin into your SCSS file, and apply it to a container with empty div children!

```html
<div class="my-audio-player">
    <!-- Define 10 bars -->
    <div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div>
</div>
```

```scss
@import 'audio-visualizer';

.my-audio-player {
    @include ease-audio-visualizer(
        $num-bars: 10,
        $bar-color: #10b981,
        $height: 40px
    );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`. We completely bypass the need for `requestAnimationFrame` render loops or Canvas APIs!
- **GPU Compositor:** By animating the `transform: scaleY()` property natively in CSS, the browser hands the heavy lifting entirely over to the GPU compositor thread. Because the random math was calculated at *compile time* by SCSS, the browser simply plays back a series of hyper-optimized hardware transforms, resulting in a flawless 60fps render without Paint thrashing!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills the chaotic bouncing animation and snaps the bars to a static, readable half-height state.
