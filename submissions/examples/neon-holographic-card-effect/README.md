# Neon Color Holographic Effect Utility

Introduces the premium multi-layered 3D holographic neon foil refraction token (`.ease-holographic-neon`) under issue #15272.

## Functional Mechanics

- **The Problem:** Recreating collectible foil finishes, digital trading tokens, or futuristic dashboard components traditionally demands bulky JavaScript canvas calculations or complex webgl frame layers that add overhead to typical page loads.
- **The Solution:** Leverages high-performance CSS blending properties. The `.ease-holographic-neon` class blends variable positional gradient values (`background-position`) directly alongside a custom pseudo-element layer running a `color-dodge` matrix. This simulates a shifting spectrum of neon pinks, cyans, and deep violets based on user cursor tracking states.

## Usage Layout Structure
```html
<div class="ease-holographic-neon">
  </div>
```

Closes #15272
