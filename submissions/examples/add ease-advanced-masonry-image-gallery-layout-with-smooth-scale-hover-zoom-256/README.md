# Masonry Image Gallery Layout with Smooth Scale Hover Zoom (Compact Mobile-First Edition)

A high-quality, responsive masonry image gallery built with modern CSS. Designed with a mobile-first approach, this component elegantly scales from a single column on mobile devices to a stunning multi-column layout on larger screens. 

## Features

- **Mobile-First Design**: Optimized for compact screens by default, effortlessly scaling up using CSS columns.
- **Masonry Layout**: Uses CSS `column-count` and `break-inside: avoid` for a lightweight, JS-free masonry grid.
- **Smooth Scale Hover Zoom**: Fluid `transform: scale(1.08)` on hover with cubic-bezier easing for a premium feel.
- **Glassmorphism & Neon Accents**: Features subtle borders, dark mode background, and gradient text with a soft neon glow for a modern aesthetic.
- **Dynamic Overlay**: A smooth fading gradient overlay reveals image titles with a subtle slide-up animation.

## Files

- `demo.html`: The HTML structure of the gallery.
- `style.css`: The CSS variables, masonry layout, and hover effect styles.

## Usage

1. Link the `style.css` in your HTML `<head>`.
2. Wrap your images in a `.masonry-item` container inside a `.masonry-gallery`.
3. Add the `.overlay` div for the hover title effects.

```html
<main class="masonry-gallery">
    <div class="masonry-item">
        <img src="path/to/image.jpg" alt="Description">
        <div class="overlay">
            <span class="overlay-text">Title</span>
        </div>
    </div>
</main>
```
