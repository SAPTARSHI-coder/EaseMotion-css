# Cursor Glow Lightbox (E-Commerce Theme)

A premium E-Commerce lightbox component that features a dynamic, interactive "Cursor Glow" effect. As the user moves their mouse over the product details, a soft, colored aura tracks the cursor, creating a highly polished, tactile shopping experience.

## Features

- **Pure CSS State Management**: The opening and closing of the lightbox is handled entirely via CSS using the "Checkbox Hack" (`<input type="checkbox">` + `<label>`), keeping the core interaction logic lightweight and JS-free.
- **Dynamic Cursor Glow**: Utilizes a tiny vanilla JavaScript snippet purely to map the mouse coordinates (`X` and `Y`) to CSS Custom Properties (`--mouse-x` and `--mouse-y`). The actual glow rendering is handled natively by CSS `radial-gradient` for maximum performance.
- **Premium E-Commerce Layout**: Designed as a split-pane modal (Product Image on the left, Details and Add to Cart on the right), mimicking high-end online stores.
- **Hardware-Accelerated Entrance**: The modal scales up and slides in (`transform: scale(0.95) translateY(20px)` to `scale(1) translateY(0)`) for a buttery-smooth entrance.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`.
3. Ensure the tiny JavaScript snippet included at the bottom of `demo.html` is present to enable the cursor tracking coordinates.

## Usage Example

```html
<!-- State Controller -->
<input type="checkbox" id="lightbox-1" class="ease-lightbox-toggle">

<!-- Trigger -->
<label for="lightbox-1" class="ease-product-thumb">
  <img src="thumb.jpg" alt="Product">
</label>

<!-- The Lightbox Modal -->
<div class="ease-glow-lightbox">
  <label for="lightbox-1" class="ease-lightbox-overlay"></label>
  
  <div class="ease-lightbox-content" id="glow-container">
    <label for="lightbox-1" class="ease-lightbox-close">&times;</label>
    
    <!-- The Element Rendering the Glow -->
    <div class="ease-cursor-glow"></div>
    
    <div class="ease-lightbox-image-wrapper">
      <img src="product.jpg" alt="Product Full">
    </div>
    
    <div class="ease-product-details">
      <h2>Premium Product</h2>
      <button class="ease-btn-add">Add to Cart</button>
    </div>
  </div>
</div>

<!-- Tiny JS to track coordinates for the CSS variables -->
<script>
  const container = document.getElementById('glow-container');
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    container.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    container.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
</script>
```

## Why it fits EaseMotion CSS

- **Modern Micro-Interactions**: Cursor-tracking glows are a hallmark of modern, high-end web design (popularized by Vercel and Stripe). This component brings that premium feel to a standard e-commerce lightbox.
- **Separation of Concerns**: Even though JavaScript is required to get the raw mouse coordinates, the *presentation* and *rendering* of the glow (the colors, size, opacity transitions, and gradient math) remain strictly in the CSS, perfectly aligning with EaseMotion's philosophy.
