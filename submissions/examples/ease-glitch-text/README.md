# Pure CSS Glitch Text Effect

Creating a cyberpunk-style glitching text effect typically requires canvas manipulation or heavy JS libraries that duplicate the text DOM dozens of times to create offset layers. This causes severe accessibility issues (screen readers read the duplicated text multiple times) and unnecessary Main Thread blocking.

This submission demonstrates how to build a flawlessly smooth, hardware-accelerated text glitch using purely CSS pseudo-elements and `clip-path` geometry.

---

## 🏛️ The Architecture

### 1. The `data-text` Attribute
To create the glitch effect, we need multiple layers of the exact same text sitting on top of each other. Instead of duplicating the `<h1>` in HTML, we use a single `<h1>` and pass the string to a `data-text` attribute.

```html
<h1 class="glitch-text" data-text="CYBERPUNK">CYBERPUNK</h1>
```

### 2. Pseudo-Element Layering
In our CSS, we use the `::before` and `::after` pseudo-elements to generate two identical clones of the text, perfectly layered over the original using `content: attr(data-text)`. 

Screen readers ignore pseudo-element content generated via `attr()`, meaning this is 100% accessible!

### 3. Chaotic `clip-path` Keyframes
We offset the red and blue channels of the pseudo-elements using `text-shadow`.
Then, we apply chaotic `@keyframes` that rapidly change the `clip-path: polygon()` coordinates. 

The `clip-path` acts like a physical razor blade, rapidly cutting horizontal slices out of the red and blue pseudo-elements. When combined with rapid X/Y `transform` translations, it perfectly simulates a broken CRT monitor or VHS tracking error natively on the GPU Compositor.

---

## 💻 Usage

To use this glitch effect in your own project:

1. Copy the `.glitch-wrapper` and `.glitch-text` HTML structure.
2. Ensure the `data-text` attribute exactly matches the inner text.
3. Import the `style.css` which contains the `@keyframes`.

```html
<div class="glitch-wrapper">
    <h1 class="glitch-text" data-text="ERROR 404">ERROR 404</h1>
</div>
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`.
- **DOM Manipulations:** `0`.
- **Accessibility:** 100% Screen Reader safe.
- **Graceful Degradation:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that strips the animations, safely freezing the text in its readable state.
