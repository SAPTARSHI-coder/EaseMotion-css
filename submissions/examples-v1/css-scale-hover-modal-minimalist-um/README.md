# Minimalist Tech Scale-Hover Modal

**EaseMotion CSS UI Component Showcase** · `submissions/examples/css-scale-hover-modal-minimalist-um/`

A pure CSS animated Modal utilizing a smooth Scale-Hover interaction transition, styled to complement Minimalist Tech interface aesthetics (similar to modern developer tools and SaaS dashboards).

---

## 1. What does this do?

This component provides a fully functional, zero-JavaScript modal window. It relies on the CSS checkbox hack (`input[type="checkbox"]` with the `~` sibling selector) for state management. The modal uses a subtle slide-and-scale transition upon entering. The interactive elements (buttons, the modal container) have clean, crisp scale-hover transformations to provide subtle tactile feedback without overwhelming the minimalist aesthetic.

## 2. How is it used?

Include the provided `style.css` and use the HTML structure from `demo.html`.

### Customizing via CSS Variables
The modal exposes CSS custom properties attached to the `:root` pseudo-class for easy tuning of colors, shadows, and animations:

```css
:root {
  --ease-min-bg-um: #ffffff;
  --ease-min-text-main-um: #111111;
  --ease-min-accent-um: #0070f3; /* Accent Color */
  --ease-min-timing-um: 0.3s;
  /* ... see style.css for full list */
}
```

## 3. Why is it useful?

Minimalist tech layouts demand high performance and crisp interactions. By utilizing hardware-accelerated compositor transitions (`transform`, `opacity`), this modal guarantees 60fps performance without the overhead of JavaScript state management. It degrades gracefully for users preferring reduced motion, making it a highly accessible and lightweight addition to any modern web project.
