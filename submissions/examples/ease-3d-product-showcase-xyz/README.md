# 3D Product Showcase Kit (`.ease-3d-*-xyz`)

A premium, interactive 3D product card layout built with pure CSS. It utilizes `perspective`, `transform-style: preserve-3d`, and parallax depth layers to create a highly tactile, modern e-commerce feel without any JavaScript.

## Features

- 🧊 **True 3D Tilt**: Cards rotate in 3D space on hover using CSS transforms.
- ✨ **Moving Glare**: A light reflection sweeps across the card on hover.
- 🗂️ **Parallax Layers**: Badges, images, and text sit at different Z-depths, moving at different speeds.
- 🎢 **Premium Easing**: Uses `cubic-bezier(0.23, 1, 0.32, 1)` for buttery smooth, natural motion.
- 🎨 **Themed Variants**: Easy to apply different color glows to the top border.
- ♿ **Accessible**: Fully respects `prefers-reduced-motion`.

## Usage

Wrap your product content in the `.ease-3d-card-xyz` and `.ease-3d-card-inner-xyz` containers.

```html
<div class="ease-3d-card-xyz ease-3d-theme-blue-xyz">
    <div class="ease-3d-card-inner-xyz">
        <div class="ease-3d-glare-xyz"></div>
        <div class="ease-3d-badge-xyz">NEW</div>
        <div class="ease-3d-image-xyz">👟</div>
        <div class="ease-3d-info-xyz">
            <h3>Product Name</h3>
            <p>Description</p>
            <button class="ease-3d-btn-xyz">Add to Cart</button>
        </div>
    </div>
</div>