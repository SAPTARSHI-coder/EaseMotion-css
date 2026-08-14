# Glassmorphism Scale-Hover Modal

**EaseMotion CSS UI Component Showcase** · `submissions/examples/css-scale-hover-modal-glassmorphism-um/`

A pure CSS animated Modal utilizing a smooth Scale-Hover interaction transition, styled to complement Glassmorphism interface aesthetics.

---

## 1. What does this do?

This component provides a fully functional, zero-JavaScript modal window leveraging modern Glassmorphism design principles. It features a translucent, frosted glass effect (`backdrop-filter`) over a vibrant animated background to showcase the depth. State management is handled entirely via CSS using the checkbox hack. Interactive elements include a subtle spring-eased scale-hover transition to provide satisfying tactile feedback.

## 2. How is it used?

Include the provided `style.css` and use the HTML structure from `demo.html`.

### Customizing via CSS Variables
The modal exposes CSS custom properties attached to the `:root` pseudo-class for easy tuning of blurs, transparencies, colors, and animations:

```css
:root {
  --ease-glass-bg-um: rgba(255, 255, 255, 0.15);
  --ease-glass-blur-um: blur(16px);
  --ease-glass-timing-um: 0.4s;
  /* ... see style.css for full list */
}
```

## 3. Why is it useful?

Glassmorphism is a highly sought-after aesthetic in modern UI design (popularized by macOS and iOS), but implementing it cleanly while maintaining smooth 60fps animations and proper accessibility can be challenging. This component provides a robust, zero-JS boilerplate that layers `backdrop-filter` with hardware-accelerated `transform` animations. It also respects the `prefers-reduced-motion` media query to ensure the animated background blobs and scale transitions gracefully degrade for users who need it.
