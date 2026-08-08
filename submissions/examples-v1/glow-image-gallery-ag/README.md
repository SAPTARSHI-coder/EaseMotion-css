# Glow Image Gallery

A responsive, blog-inspired image gallery that utilizes a sleek, primary-color glow effect and scale animation on hover.

## 🌟 What is this?

Image galleries are essential for blogs and portfolios. This component provides a fully responsive CSS Grid layout combined with a highly polished `.ease-image-glow-hover` utility class. It makes images "pop" out of the layout with a subtle scale and dynamic shadow when the user interacts with them.

## 🛠️ How it uses EaseMotion CSS

- **Design Tokens:** Leverages `var(--ease-glow-primary)` for the core aesthetic effect, alongside `var(--ease-radius-md)` and `var(--ease-space-6)` for layout spacing.
- **Motion First:** The hover state transforms the element across the Y-axis and applies a scale transformation concurrently with the shadow, powered by `var(--ease-speed-medium)` and `var(--ease-ease)`.
- **Pure CSS:** Entirely driven by CSS Grid and native hover states without JavaScript.

## 🚀 How to use it

1. Link the main `easemotion.css` framework in your project.
2. Wrap your images in the gallery grid and apply the hover class:

```html
<div class="ease-glow-gallery">
  <div class="ease-image-glow-hover">
    <img src="path/to/image1.jpg" alt="Description" />
  </div>
  <div class="ease-image-glow-hover">
    <img src="path/to/image2.jpg" alt="Description" />
  </div>
  <!-- Add more images here -->
</div>
```

3. Include the `style.css` provided in this directory to apply the grid constraints and the interactive hover animation.

## 📱 Responsiveness

The gallery uses `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));`. This guarantees that images will perfectly stack on mobile devices and beautifully expand into multiple columns on tablets and desktop monitors without any complex media queries.
