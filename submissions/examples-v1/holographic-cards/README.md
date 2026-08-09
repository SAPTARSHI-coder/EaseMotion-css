# Holographic Cards Example

This is a self-contained example demonstrating how to create futuristic, animated holographic cards using pure CSS, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🌈 Animated conic-gradient borders revealed on hover.
- ⚡ Built-in EaseMotion classes for layout (`ease-center`, `ease-flex`), entrance animations (`ease-fade-in`, `ease-delay-*`), and hover effects (`ease-hover-lift`).
- ♿ Respects `prefers-reduced-motion` for accessibility.
- 🚫 Zero JavaScript required.

## How to Use
1. Ensure you have the EaseMotion CSS CDN linked in your `<head>` (already included in `demo.html`).
2. Link the `style.css` file.
3. Copy the `.holo-card` HTML structure and customize the content.

## Customization
You can easily change the holographic colors and animation speed by modifying the CSS variables at the top of `style.css`:
```css
:root {
  --holo-speed: 3s;
  --holo-color-1: #00f2ff;
  --holo-color-2: #ff00e5;
  --holo-color-3: #ffe600;
}