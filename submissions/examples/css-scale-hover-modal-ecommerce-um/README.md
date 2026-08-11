# E-Commerce Scale-Hover Modal

**EaseMotion CSS UI Component Showcase** · `submissions/examples/css-scale-hover-modal-ecommerce-um/`

A pure CSS animated Modal utilizing a smooth Scale-Hover interaction transition, styled to complement modern E-Commerce Checkout interface aesthetics.

---

## 1. What does this do?

This component provides a fully functional, zero-JavaScript modal window styled as a high-conversion e-commerce cart/checkout overlay. It uses the CSS checkbox hack (`input[type="checkbox"]` with the `~` sibling selector) for robust state management. The modal uses a confident, smooth scale-up transition upon entering. The primary "Pay Now" call-to-action features an engaging scale-hover transformation to encourage user interaction and boost perceived performance.

## 2. How is it used?

Include the provided `style.css` and use the HTML structure from `demo.html`.

### Customizing via CSS Variables
The modal exposes CSS custom properties attached to the `:root` pseudo-class for easy tuning of brand colors, shadows, and animations:

```css
:root {
  --ease-ecom-bg-um: #ffffff;
  --ease-ecom-primary-um: #10b981; /* Primary CTA Color */
  --ease-ecom-timing-um: 0.3s;
  /* ... see style.css for full list */
}
```

## 3. Why is it useful?

Checkout flows require high reliability, speed, and trust. By utilizing hardware-accelerated compositor transitions (`transform`, `opacity`), this modal guarantees buttery-smooth 60fps performance without risking JavaScript execution delays or rendering blockages. The styling provides a clean, trustworthy foundation (including secure checkout iconography and clear visual hierarchy) that seamlessly degrades for users who prefer reduced motion.
