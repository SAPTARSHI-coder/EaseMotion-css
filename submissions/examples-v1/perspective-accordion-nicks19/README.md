# Perspective Accordion (Real Estate Theme)

A pure CSS accordion component that utilizes 3D transforms to create depth. Unselected items lean backward in perspective, while the selected item snaps to the front plane and expands, bringing focus and clarity inspired by luxury real estate platforms.

## Features

- **Pure CSS State Management**: Uses radio buttons (`<input type="radio">`) to ensure only one accordion item is open at a time, completely avoiding JavaScript.
- **3D Depth & Perspective**: The parent container establishes a 3D context (`perspective: 1200px`). Unchecked accordion items are pushed back and tilted (`rotateX(10deg) translateZ(-20px)`), creating a stacked, physical card feeling.
- **Grid-Based Expansion**: The content area expands using the modern `grid-template-rows: 0fr` to `1fr` interpolation technique, allowing for smooth height transitions without hardcoding pixel values.
- **Luxury Aesthetic**: Styled with elegant serif typography (`Playfair Display`), champagne gold accents (`#b4975a`), and refined drop shadows, perfect for presenting high-end products or properties.

## Installation

1. Copy the CSS from `style.css` into your stylesheet.
2. Copy the HTML structure from `demo.html`. Ensure that all `<input type="radio">` elements share the same `name` attribute so they act as a mutually exclusive group.

## Usage Example

```html
<div class="ease-perspective-accordion">
  
  <!-- Accordion Item -->
  <div class="ease-accordion-item">
    
    <!-- State Controller (Radio Button) -->
    <input type="radio" name="my-accordion" id="item-1" class="ease-accordion-toggle" checked>
    
    <!-- Clickable Header -->
    <label for="item-1" class="ease-accordion-header">
      <span class="ease-prop-title">The Glass Pavilion</span>
      <span class="ease-prop-price">$4.2M</span>
    </label>
    
    <!-- Expandable Content Wrapper -->
    <div class="ease-accordion-content">
      <div class="ease-content-inner">
        <p>Your content here...</p>
      </div>
    </div>
    
  </div>
  
  <!-- Add more items following the same structure -->
  
</div>
```

## Why it fits EaseMotion CSS

- **Hardware-Accelerated Layering**: The primary visual effect relies heavily on `transform: rotateX()` and `translateZ()`, keeping the animations entirely on the GPU and off the main thread for optimal performance.
- **Progressive Disclosure with Style**: It takes a standard, often boring UI pattern (the accordion) and elevates it with `cubic-bezier(0.34, 1.56, 0.64, 1)` spring physics, making the act of revealing information deeply satisfying.
- **No JS Dependencies**: Achieves complex layout animations and state toggling natively through CSS, embodying the core philosophy of the EaseMotion library.
