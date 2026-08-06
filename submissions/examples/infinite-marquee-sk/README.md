# Infinite Marquee

A reusable, pure CSS infinite scrolling marquee perfect for showcasing partner logos, customer testimonials, and announcements. It integrates flawlessly with EaseMotion CSS utilities.

## Features

- ♾️ **Seamless Infinite Loop:** Uses a precise CSS transform (`calc(-50% - gap/2)`) to create a perfectly flawless infinite scroll without relying on JavaScript resets.
- 🔄 **Multi-Directional:** Supports both Left and Right scrolling out of the box using simple data attributes (`data-direction="left|right"`).
- ⏸️ **Pause on Hover:** Automatically pauses the animation when users hover or focus on the marquee content, allowing them to read testimonials or click links comfortably.
- 🎭 **Fade Masks:** Employs CSS masks to smoothly fade the edges of the marquee container for a premium, high-end look.
- 🛑 **Prefers-Reduced-Motion:** Fully accessible. If a user prefers reduced motion, the CSS animation stops and cleanly falls back to a standard native horizontal scrolling container.

## Usage

1. Copy the HTML structure from `demo.html`.
2. **Crucial:** The inner items must be duplicated. Place your unique items, and then immediately place an identical set of items directly after them with `aria-hidden="true"`. This is strictly required for the seamless infinite loop illusion to work.
3. Include the `style.css` which powers the flexbox layout, edge masking, and keyframe calculations.

## Customization

You can control the speed and gap between items globally by adjusting the CSS variables in `:root`:

```css
:root {
  --marquee-gap: 2rem;
  --speed-fast: 15s;
  --speed-slow: 30s;
}
```

You can change directions and speed on individual marquees using data attributes in your HTML:
```html
<div class="marquee" data-direction="right" data-speed="slow">
```

## Contributed by
- Man1ac-1773
