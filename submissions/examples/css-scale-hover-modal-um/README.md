# CSS Scale-Hover Modal

**EaseMotion CSS UI Component Showcase** · `submissions/examples/css-scale-hover-modal-um/`

A pure CSS animated Modal utilizing a smooth Scale-Hover interaction transition, styled to complement Accessible Web interface aesthetics.

---

## 1. What does this do?

This component provides a fully functional modal window driven entirely by CSS. It uses the checkbox hack (`input[type="checkbox"]` with the `~` sibling selector) to manage state. The modal enters with a spring-eased scale-up transition, and interactive elements (buttons, the modal itself) feature tactile scale-hover micro-interactions.

## 2. How is it used?

Include the provided `style.css` and use the HTML structure from `demo.html`.

### Customizing via CSS Variables
The modal exposes several CSS custom properties attached to the `:root` pseudo-class for easy theming and animation tuning:

```css
:root {
  --ease-modal-bg-um: #ffffff;
  --ease-modal-timing-um: 0.4s;
  --ease-modal-easing-um: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-modal-scale-hover-um: 1.02;
  /* ... see style.css for full list */
}
```

## 3. Why is it useful?

It allows developers to implement complex, interactive overlay states with zero JavaScript overhead. By relying on CSS for state management and leveraging hardware-accelerated compositor transitions (`transform`, `opacity`), it guarantees 60fps performance while maintaining semantic HTML structure. It also fully supports `prefers-reduced-motion` for accessibility.
