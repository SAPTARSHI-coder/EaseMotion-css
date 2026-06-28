# Scroll-Driven Image Reveal (`ease-scroll-driven-image-reveal`)

A demonstration of the modern CSS `animation-timeline: view()` API to create scroll-linked image reveal effects without relying on Javascript intersection observers.

## 🚀 Features & EaseMotion Showcase

- **Zero JavaScript**: Traditionally, revealing images on scroll required heavy Javascript libraries (like GSAP ScrollTrigger or Intersection Observers). By leveraging native CSS Scroll-Driven Animations, the browser's compositor handles the effect natively, resulting in buttery smooth 120fps performance.
- **Scroll-Linked Progress**: The animations are scrubbable! If you scroll down, the image fades in. If you immediately scroll back up, the animation perfectly reverses relative to your scrollbar position.
- **Safe Fallbacks**: The code utilizes `@supports (animation-timeline: view())` so that unsupported browsers simply display the image statically without breaking the layout.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To apply a scroll-reveal to an image:
```html
<img src="photo.jpg" class="ease-scroll-reveal-fade">
