# Holographic Foil Card Glare (`ease-holo-foil`)

An interactive holographic card glare effect created with pure CSS gradients, pseudo-elements, and blend modes.

---

### 1. What does this do?
`ease-holo-foil` creates a realistic, sweeping rainbow holographic glare effect on hover. It uses a `::after` pseudo-element styled with a multi-color 135-degree `repeating-linear-gradient` and `mix-blend-mode: color-dodge`. On hover, the glare smoothly fades in and animates diagonally across the card via a continuous `@keyframes` background sweep, mimicking authentic shiny trading cards and holographic foil finishes.

---

### 2. How is it used?
Simply add the `.ease-holo-foil` class to any card or element wrapper:

```html
<div class="card ease-holo-foil">
  <img src="artwork.png" alt="Card Artwork" />
  <h3>Legendary Item</h3>
  <p>Card description goes here...</p>
</div>
```

Ensure your stylesheet includes `style.css`:

```html
<link rel="stylesheet" href="style.css">
```

---

### 3. Why is it useful?
- **Zero JavaScript Overhead**: Traditional holographic card effects rely on heavy JavaScript event listeners to track mouse position (`mousemove`) and recalculate transforms in real-time. This pure CSS utility delivers high visual impact at 60 FPS without main-thread scripting overhead or external dependencies.
- **Hardware-Accelerated Performance**: Utilizes CSS transitions, keyframes, and blend modes that leverage GPU acceleration for buttery smooth rendering across desktop and mobile browsers.
- **Ideal for Premium UI**: Perfect for NFT marketplaces, gaming trading cards, luxury e-commerce products, digital badges, and high-conversion portfolio showcases.
