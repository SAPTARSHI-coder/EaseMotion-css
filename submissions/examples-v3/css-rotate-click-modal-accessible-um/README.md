# Accessible Rotate-Click Modal

**EaseMotion CSS UI Component Showcase** · `submissions/examples/css-rotate-click-modal-accessible-um/`

A pure CSS animated Modal utilizing a smooth, subtle Rotate-Click interaction transition, styled meticulously to complement Accessible Web interface aesthetics.

---

## 1. What does this do?

This component provides a fully functional, zero-JavaScript modal window designed primarily with WCAG accessibility guidelines in mind. While it features a modern "Rotate-Click" entrance animation and tactile active states, the aesthetic focuses entirely on usability: high-contrast text and backgrounds, large easily-tappable action areas (minimum 44x44px for the close icon), and extremely clear `:focus-visible` outlines for keyboard navigators.

## 2. How is it used?

Include the provided `style.css` and use the HTML structure from `demo.html`. Ensure you maintain the `aria-label`, `role="button"`, and `tabindex="0"` attributes on the `label` elements to guarantee screen reader and keyboard compatibility.

### Customizing via CSS Variables
The modal exposes CSS custom properties attached to the `:root` pseudo-class for easy tuning of semantic colors and focus outlines:

```css
:root {
  --ease-acc-primary-um: #005a9c; /* High Contrast Dark Blue */
  --ease-acc-focus-um: #d9480f;   /* High Contrast Orange/Red for Focus */
  --ease-acc-timing-um: 0.4s;
  /* ... see style.css for full list */
}
```

## 3. Why is it useful?

Balancing modern CSS animations (like rotations and scales) with strict accessibility requirements can be challenging. This component demonstrates how to achieve a premium, animated feel without sacrificing usability. It relies on the robust CSS checkbox hack for state management, avoiding JS overhead. Critically, it implements a strict `@media (prefers-reduced-motion: reduce)` block that instantly disables all rotational transforms and slows down opacity transitions for users who are sensitive to motion.
