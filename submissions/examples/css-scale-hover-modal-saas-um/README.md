# Modern SaaS Scale-Hover Modal

**EaseMotion CSS UI Component Showcase** · `submissions/examples/css-scale-hover-modal-saas-um/`

A pure CSS animated Modal utilizing a smooth Scale-Hover interaction transition, styled to complement a clean, professional Modern SaaS interface aesthetics.

---

## 1. What does this do?

This component provides a fully functional, zero-JavaScript modal designed for modern web applications (SaaS platforms, admin dashboards, user settings). It features a clean, light-mode design with subtle, layered box shadows, rounded corners, and a crisp indigo accent color. The entrance animation uses a smooth `scale` and `translateY` transform (scaling up from 95% while sliding up slightly). Interactive elements feature refined "Scale-Hover" active states to provide professional, polished tactile feedback.

## 2. How is it used?

Include the provided `style.css` and use the HTML structure from `demo.html`.

### Customizing via CSS Variables
The modal exposes CSS custom properties attached to the `:root` pseudo-class for easy tuning of brand colors, background slates, and animation curves:

```css
:root {
  --ease-saas-bg-um: #ffffff;
  --ease-saas-body-bg-um: #f9fafb; /* Gray 50 */
  --ease-saas-primary-um: #6366f1; /* Indigo 500 */
  --ease-saas-timing-um: 0.3s;
  /* ... see style.css for full list */
}
```

## 3. Why is it useful?

SaaS platforms often require numerous modals for forms, confirmations, and user settings. Utilizing pure CSS for UI interactivity (like opening modals and managing hover/active states) offloads work from the main thread, ensuring the application remains snappy and responsive. By using the CSS checkbox hack and hardware-accelerated transforms, this modal guarantees smooth 60fps performance and gracefully degrades for users who prefer reduced motion.
