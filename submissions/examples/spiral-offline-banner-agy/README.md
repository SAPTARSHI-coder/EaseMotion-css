# Spiral Offline Banner (Spiral Style)

This component provides a premium, nature-inspired **Spiral Offline Banner** utilizing pure CSS animations and mathematical formulas (Fibonacci and Archimedean spirals) to display network connectivity states with high-fidelity visual feedback.

---

### 1. What does this do?

It creates an interactive, highly responsive, and accessible network connection status banner featuring a mathematical spiral animation that dynamically adapts its style, speed, and pulse waves to reflect offline, connecting, and online states without requiring JavaScript.

---

### 2. How is it used?

To use the Spiral Offline Banner in your project, include the main container with the indexed dot elements inside your HTML. The container class is `.ease-spiral-loader` and the dots are `.ease-spiral-dot`:

```html
<div class="ease-spiral-banner">
  <!-- The Spiral Component -->
  <div
    class="ease-spiral-loader"
    role="img"
    aria-label="Connection Status Spiral"
  >
    <!-- Define the nodes with sequential --index variables -->
    <div class="ease-spiral-dot" style="--index: 1;"></div>
    <div class="ease-spiral-dot" style="--index: 2;"></div>
    <div class="ease-spiral-dot" style="--index: 3;"></div>
    <div class="ease-spiral-dot" style="--index: 4;"></div>
    <div class="ease-spiral-dot" style="--index: 5;"></div>
    <!-- Add up to 16, 24, or 32 nodes for preferred density -->
    <div class="ease-spiral-dot" style="--index: 24;"></div>
  </div>

  <h2 class="connection-title">No Connection</h2>
  <p class="connection-desc">Attempting to locate network signals...</p>
</div>
```

---

### 3. Why is it useful?

It fits EaseMotion CSS's core philosophy of **performance-driven declarative motion** by replacing heavy, script-based canvas animations with lightweight, hardware-accelerated CSS animations.

Using nature-inspired Fibonacci spiral geometry (angle spacing of `137.5deg`), it provides a organic, non-disruptive, and premium visual loading state that keeps users calm during connection dropouts, while fully respecting user accessibility preferences via `@media (prefers-reduced-motion: reduce)`.

---

### Technical Breakdown

#### Archimedean & Fibonacci Spiral Formulation:

The dots are spaced and scaled using pure CSS custom property calculations based on their `--index` sequence:

- **Angle Offset**: `var(--index) * 137.5deg` (the golden angle in nature found in sunflowers and shells).
- **Radial Distance**: `14px + var(--index) * 4.2px` (creates a steady outward Archimedean expansion).
- **Scaling Curve**: `1.3 - var(--index) * 0.022` (ensures dots shrink gracefully towards the outer boundary).

#### Customization Options:

The spiral speed and density can be customized on the fly by overriding CSS variables:

- `--spiral-speed-base`: Adjusts rotation rate.
- `--spiral-density`: Adjusts dot spacing.
