# Shimmer-Sweep Carousel for Cyberpunk Neon Layouts

A dynamic, pure CSS shimmer-sweep carousel effect designed for cyberpunk-themed interfaces. This component adds a futuristic glowing light sweep over cards on hover, enhancing the overall neon aesthetic.

## Usage

Add the `ease-shimmer-sweep` class to your carousel cards. The card container must have `position: relative` and `overflow: hidden` for the shimmer effect to stay within boundaries.

```html
<div class="carousel-card ease-shimmer-sweep">
    <div class="card-content">
        <h3>Cyberpunk Theme</h3>
        <p>Hover to see the shimmer sweep effect.</p>
    </div>
</div>
```

## Why is it useful?

This component leverages pure CSS animations without relying on JavaScript, making it lightweight and highly performant. The shimmer sweep combined with neon glow box-shadows provides an immersive futuristic feel, aligning perfectly with EaseMotion's goal of smooth, performant, and accessible motion design. Supports `prefers-reduced-motion` for accessibility.
