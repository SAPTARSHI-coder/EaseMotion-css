# Product Catalog Scale-Hover Modal

**EaseMotion CSS UI Component Showcase** · `submissions/examples/css-scale-hover-modal-product-catalog-um/`

A pure CSS animated Modal utilizing a smooth Scale-Hover interaction transition, styled to complement modern Product Catalog (Quick View) aesthetics.

---

## 1. What does this do?

This component provides a fully functional, zero-JavaScript "Quick View" modal. It uses a responsive two-column grid layout (collapsing to a single column on mobile) to display a product image alongside its details and an "Add to Cart" call-to-action. State management is handled entirely via the CSS checkbox hack. The modal window utilizes a crisp scale-up entrance animation, and the interactive elements (trigger card, action button) feature tactile scale-hover effects to encourage engagement.

## 2. How is it used?

Include the provided `style.css` and use the HTML structure from `demo.html`. The `demo.html` includes an example of a product grid card that acts as the trigger for the modal.

### Customizing via CSS Variables
The modal exposes CSS custom properties attached to the `:root` pseudo-class for easy tuning of brand colors, layouts, and animations:

```css
:root {
  --ease-prod-bg-um: #ffffff;
  --ease-prod-primary-um: #d97706; /* E-commerce Primary Brand Color */
  --ease-prod-timing-um: 0.35s;
  /* ... see style.css for full list */
}
```

## 3. Why is it useful?

"Quick View" modals in e-commerce must open instantly and look polished to prevent friction in the browsing experience. Relying on heavy JavaScript libraries for modals can introduce layout jank or delay interaction. This pure CSS solution uses hardware-accelerated transforms to guarantee smooth 60fps animations. The scale-hover effects add a premium, native-app feel to web interfaces while remaining lightweight and fully accessible (supporting `prefers-reduced-motion`).
