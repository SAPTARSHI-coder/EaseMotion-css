# Skew-Active Carousel (Interactive Interface)

A pure CSS animated carousel featuring a springy, skew-active transition, styled for fun and engaging Interactive Interfaces (Neobrutalism aesthetics).

## Features
- **Pure CSS**: Fully functional interaction state without JavaScript, utilizing native hidden `<input type="radio">` tags.
- **Spring Skew-Active Animation**: Slides are heavily skewed (`-12deg`) and shrunk when inactive. When selected, they spring into place with a custom bouncy easing curve (`cubic-bezier`), physically overshooting zero skew before snapping cleanly back into place.
- **Interactive Aesthetics**: Incorporates engaging neobrutalism design patterns: thick structural borders, hard solid drop shadows, playful typography (Space Grotesk), and vibrant pastel block colors (`#ff90e8`, `#23a094`, `#ffc900`).
- **Micro-Interactions**: Features satisfying tactile feedback. Buttons physically press down, active cards extrude hard shadows, and icons playfully rotate when they slide into view.
- **Accessible Navigation**: Keyboard friendly with native focus management. Use `Tab` to focus the controls and `Arrow Keys` to change slides, complete with a high-contrast dashed focus ring.

## Customization
Tweak the bounce intensity, skew amount, or scale factors easily by updating the CSS variables in the `:root` scope:

```css
:root {
    --crsl-duration: 0.75s;
    --crsl-easing: cubic-bezier(0.34, 1.56, 0.64, 1); /* Custom bouncy spring */
    --crsl-skew-inactive: -12deg;
    --crsl-scale-inactive: 0.75;
}
```
