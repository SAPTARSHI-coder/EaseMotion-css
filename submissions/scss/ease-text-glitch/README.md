# SCSS Cyberpunk Text Glitch (Hardware Accelerated)

A cyberpunk-style glitch effect applied to typography, where the text physically splits into RGB channels and stutters randomly, perfect for hero headers.

Historically, complex text glitching required either massive, unmaintainable CSS files (hundreds of manually typed `@keyframes`) or heavy JavaScript loopers to slice the DOM. This submission demonstrates how to achieve a flawless, hardware-accelerated text glitch natively using SCSS loops and CSS `clip-path`!

---

## 🏛️ The Architecture

### 1. Duplicating the Text Layer
To create the RGB split effect, we need multiple copies of the text stacked on top of each other. Instead of manually writing 3 `<span>` tags in our HTML, we use CSS pseudo-elements! 
By placing `data-text="GLITCH"` on our HTML element, our SCSS `::before` and `::after` elements can steal that text using `content: attr(data-text);`.

1. **The Base Layer:** The original text.
2. **The Red Channel (`::before`):** Shifted slightly left, colored red via `text-shadow`.
3. **The Blue Channel (`::after`):** Shifted slightly right, colored blue via `text-shadow`.

### 2. The SCSS Keyframe Generator (The Magic)
If we want the text to "glitch" realistically, we need to randomly slice chunks of the text away. In CSS, we do this using `clip-path: inset(top right bottom left);`. 
However, writing 20 different `@keyframes` with random clip values by hand is a nightmare. 

Instead, we utilize the power of SCSS `@for` loops and `random()` functions to generate the CSS dynamically at build time!
```scss
@for $i from 0 through 20 {
    #{$i * 5%} {
        $top: random(100) + 0%;
        $bottom: random(100) + 0%;
        clip-path: inset(#{$top} 0 #{$bottom} 0);
    }
}
```
This loop automatically generates a flawless 100% keyframe animation, randomly slicing horizontal chunks of our text layer away every 5%! 

### 3. Asymmetric Stuttering
To make the glitch look organic, we invoke the SCSS mixin *twice* to generate two completely unique, randomized keyframe animations. We apply one to the Red channel and one to the Blue channel. Because they have different randomized clip-paths, they stutter asymmetrically, creating a deeply realistic Cyberpunk aesthetic!

---

## 💻 Usage

Import the mixin into your SCSS file, and apply it to your text class. **Crucially**, ensure you pass the exact text string into the `data-text` attribute in your HTML!

```html
<h1 class="my-glitch" data-text="CYBERPUNK">CYBERPUNK</h1>
```

```scss
@import 'text-glitch';

.my-glitch {
    @include ease-text-glitch(
        $bg-color: #000000, /* MUST match your body background color! */
        $highlight1: #ff003c, /* Red */
        $highlight2: #00f0ff, /* Blue */
        $animation-speed: 2s
    );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`.
- **DOM Manipulations:** `0`. Uses existing pseudo-elements.
- **File Size:** Because the SCSS engine handles the randomization at compile time, the final CSS file is incredibly lightweight compared to importing a JS physics engine.
- **GPU Compositor:** Animating `clip-path` is heavily optimized by modern browser engines.
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that strips the keyframes and hides the duplicate pseudo-elements entirely, safely freezing the typography in a clean, legible state.
