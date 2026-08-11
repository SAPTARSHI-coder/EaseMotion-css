# CSS Zig-zag Section Divider

A pure-CSS shape divider component designed to bridge the gap between two contrasting sections. It replaces boring, straight horizontal lines with a dynamic, geometric zig-zag pattern constructed entirely out of CSS linear gradients, meaning zero HTTP requests for SVGs or images.

## 📋 Mandatory Questions

### 1. What does this do?

This component attaches a repeating zig-zag (or "sawtooth") border to the bottom of a container block (e.g., a Hero section). The teeth of the zig-zag visually point downwards into the subsequent section, creating a playful and modern transition between distinct content areas.

### 2. How is it used?

The component works via a single utility class (`.zig-zag-bottom`) applied to the upper container. The CSS uses the `::after` pseudo-element to render two intersecting `-45deg` and `45deg` linear gradients. These gradients repeat along the X-axis (`repeat-x`) to generate the continuous pattern. 

**Important:** The color of the linear gradients *must* match the `background-color` of the section the `.zig-zag-bottom` class is applied to.

```html
<!-- Example Layout -->
<section class="hero-section zig-zag-bottom" style="background: #4f46e5;">
  <!-- Hero Content... -->
</section>

<!-- The section below should have a contrasting background -->
<section class="features-section" style="background: #f8fafc;">
  <!-- Next Section Content... -->
</section>
```

**Customization via CSS Properties:**
You can adjust the physics of the pattern via root variables:

```css
:root {
  --zig-size: 30px; /* Width of each zig-zag tooth */
  --zig-height: 15px; /* Height of the zig-zag (half of size is standard for 45deg angles) */
}
```

### 3. Why is it useful?

Traditionally, complex section dividers like waves, slopes, or zig-zags required embedding inline `<svg>` elements or linking to external image assets. This increases HTML bloat and requires designers to use tools like Figma or Illustrator to generate assets for every color variation. By leveraging pure CSS `linear-gradient` mathematics, this component achieves the exact same visual result with infinite scalability, zero network requests, and the ability to dynamically change colors purely through CSS variables.
