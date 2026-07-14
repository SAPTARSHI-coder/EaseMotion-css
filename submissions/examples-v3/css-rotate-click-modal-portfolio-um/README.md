# Creative Portfolio Rotate-Click Modal

**EaseMotion CSS UI Component Showcase** · `submissions/examples/css-rotate-click-modal-portfolio-um/`

A pure CSS animated Modal utilizing a smooth Rotate-Click interaction transition, styled to complement bold, modern Creative Portfolio interface aesthetics.

---

## 1. What does this do?

This component provides a fully functional, zero-JavaScript modal window designed for design portfolios or case study showcases. It features a bold, slightly brutalist aesthetic with high-contrast borders, large typography, and hard offset drop-shadows. The entrance animation uses a dynamic 2D rotate-and-scale effect. The trigger element (a portfolio image thumbnail) and modal buttons utilize a sharp "Rotate-Click" active state to provide an edgy, tactile interaction.

## 2. How is it used?

Include the provided `style.css` and use the HTML structure from `demo.html`.

### Customizing via CSS Variables
The modal exposes CSS custom properties attached to the `:root` pseudo-class for easy tuning of brand colors, brutalist shadows, and animation properties:

```css
:root {
  --ease-port-accent-um: #ff4500; /* Vibrant Orange Accent */
  --ease-port-timing-um: 0.6s;
  --ease-port-easing-um: cubic-bezier(0.25, 1, 0.5, 1); /* Snappy Easing */
  /* ... see style.css for full list */
}
```

## 3. Why is it useful?

Creative portfolios need to stand out with unique, memorable interactions, but heavily animated sites often suffer from poor performance due to excessive JavaScript calculations. This component achieves a highly dynamic, "edgy" feel using pure CSS. By utilizing the CSS checkbox hack for state management and hardware-accelerated transforms (`transform: rotate() scale()`) for the animations, it guarantees smooth 60fps performance and respects `prefers-reduced-motion` settings for accessibility.
