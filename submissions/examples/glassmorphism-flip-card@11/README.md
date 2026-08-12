# Glassmorphism 3D Flip Card

A smooth, 3D flip card component utilizing glassmorphism aesthetics and hardware-accelerated CSS transforms. It provides a beautiful way to reveal secondary information upon hover or focus.

## Features
- **3D Flip Animation:** Smooth rotation on the Y-axis using CSS `transform` and `perspective`.
- **Glassmorphism UI:** Uses `backdrop-filter` for a modern frosted-glass look.
- **Neon Glow Effect:** Adds a subtle drop-shadow animation on interaction.
- **Zero Dependencies:** Pure HTML and CSS.
- **Accessibility:** Includes `prefers-reduced-motion` support and keyboard focus states (`tabindex`).

## Usage
Include `demo.html` and `style.css` in your project.

```html
<div class="card-container" tabindex="0">
    <div class="card">
        <div class="card-face card-front">
            <!-- Front Content -->
        </div>
        <div class="card-face card-back">
            <!-- Back Content -->
        </div>
    </div>
</div>