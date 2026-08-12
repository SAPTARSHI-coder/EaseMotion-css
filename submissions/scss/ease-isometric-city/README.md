# Trigonometric 3D Isometric Cityscape Generator

Generative 3D art on the web usually requires massive JavaScript libraries like WebGL or Three.js. Rendering complex 3D structures purely in CSS sounds impossible because it requires advanced trigonometry (Sine and Cosine) to calculate isometric projections, which natively CSS (and historically SCSS) struggles with.

This incredibly advanced SCSS mixin procedurally generates a massive 3D isometric city out of a **single HTML `<div>`**.

---

## 📐 The Mathematics: Taylor Series in SCSS

To calculate the isometric projection (converting a 2D `[x,y]` grid into a 3D isometric perspective), we need Sine and Cosine functions. Because native Sass math modules are not universally available in older build pipelines, this file implements custom **Taylor Series Polynomial Approximations** purely in SCSS.

By looping through polynomial expansions (using custom Exponent and Factorial helper functions), we can calculate the Sine and Cosine of any angle to an incredibly high degree of precision natively during the SCSS compilation step!

```scss
@function sin($angle) {
  $sin: 0;
  $angle: rad($angle);
  @for $i from 0 through 10 {
    $sin: $sin + pow(-1, $i) * pow($angle, (2 * $i + 1)) / fact(2 * $i + 1);
  }
  @return $sin;
}
```

---

## 🏙️ The Architecture

1. **The Seed:** We start with a single 10x10 pixel HTML `<div>`.
2. **The Grid Loop:** SCSS loops through a configurable X and Y grid (e.g., 15x15).
3. **The Projection:** Using our custom trigonometry, it calculates the true screen `[x,y]` coordinates for an isometric perspective.
4. **Procedural Height:** A custom Linear Congruential Generator creates pseudo-random heights for each building in the grid.
5. **The Extrusion Loop:** A tertiary loop iterates through the Z-axis (height). It generates a `box-shadow` value for every single pixel of height, calculating dynamic lighting (darker at the bottom, lighter at the top).
6. **The Compilation:** All of these strings are appended into a massive Sass List and applied as a single `box-shadow` property to the seed `<div>`.

---

## ⚙️ Configuration Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$grid-size`| `Number`| `15` | The number of blocks on the X and Y axes. A grid of 15 generates 225 buildings. |
| `$block-size`| `Size` | `20px` | The physical pixel size of the base seed div. |
| `$base-color`| `Color` | `#3b82f6`| The core color hue of the city. Lighting is generated dynamically from this color. |
| `$angle-iso`| `Angle` | `30deg` | The isometric projection angle. |

---

## 💻 Usage

```html
<div class="scene">
    <div class="my-isometric-city"></div>
</div>
```

```scss
@import 'ease-isometric-city';

.my-isometric-city {
    // Generate a massive Blue city
    @include generate-isometric-city(
        $grid-size: 20,
        $block-size: 15px,
        $base-color: #3b82f6
    );
    
    // Optional: Add a slow rotation to show off the 3D depth
    animation: rotate-city 40s linear infinite;
}

@keyframes rotate-city {
    0% { transform: rotateX(60deg) rotateZ(0deg); }
    100% { transform: rotateX(60deg) rotateZ(360deg); }
}
```

---

## ⚡ Performance Note

Because the entire city is generated during the build step (SCSS -> CSS), the client browser does absolutely 0 calculation. It simply receives a static CSS file containing a very long `box-shadow` string. Rendering a complex box-shadow is highly optimized in modern browser engines, making this significantly more performant and lightweight than booting up a WebGL context for a background aesthetic.
