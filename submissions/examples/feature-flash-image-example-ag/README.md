# Flash Image Example

## Description
This is a standard HTML/CSS example demonstrating a "flash" animation applied to an image on hover. The effect rapidly drops the image's opacity, revealing the background color behind it, before returning to full opacity. This creates a camera-flash-like effect that acts as a strong "Attention Seeker," making it excellent for image galleries or interactive cards where you want to emphasize user interaction.

## Installation
Open `demo.html` in any modern web browser to view the example. The required styles and keyframes are defined in `style.css`.

## Usage
To use this effect in your own project, structure your HTML with a wrapper element containing the image. Apply the `.ease-flash-image-ag` class to the wrapper.

```html
<div class="ease-image-wrapper-ag ease-flash-image-ag">
    <img src="image.jpg" alt="Description">
</div>
```

Ensure the keyframes and hover state are included in your stylesheet. Note that the wrapper should ideally have a light or white background color to make the flash effect prominent when the image opacity drops.

```css
.ease-flash-image-ag:hover img,
.ease-flash-image-ag:focus-within img {
    animation: easeFlashImageAnimationAg 0.6s ease-in-out;
}

@keyframes easeFlashImageAnimationAg {
    /* See style.css for full keyframes */
}
```

## Accessibility Considerations
- **Semantic HTML & ARIA:** Always provide descriptive `alt` text for images.
- **Photosensitivity:** Rapid flashing can be dangerous for users with photosensitive epilepsy. The animation duration should be kept relatively slow (0.6s) to avoid strobe effects.
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included. If the user prefers reduced motion, the flash animation is disabled entirely. Instead, hovering over the image simply dims it slightly in a static manner to indicate interactivity without motion.
