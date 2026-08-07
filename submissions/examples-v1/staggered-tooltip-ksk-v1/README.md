# Staggered Entrance Tooltip (`staggered-tooltip-ksk`)

1. What does this do?  
A pure CSS tooltip where each content row animates in with a staggered spring entrance on hover or keyboard focus — styled for e-commerce checkout layouts with product details, shipping, discount, and tax breakdowns.

2. How is it used?  
Wrap a trigger and the `.ease-tooltip` card inside `.ease-tooltip-wrap`. Rows inside the tooltip should use the `.ease-tip-row` class — they animate in sequentially via nth-child delays. Customise timing via CSS custom properties:

```css
.ease-tooltip-wrap {
  --ease-tip-delay:    0s;
  --ease-tip-duration: 0.32s;
  --ease-tip-stagger:  0.06s;
  --ease-tip-easing:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-tip-scale:    0.88;
  --ease-tip-offset:   8px;
  --ease-tip-width:    280px;
}
```

3. Why is it useful?  
Delivers accessible, information-rich tooltips with a polished staggered reveal — no JavaScript required. Works with hover and keyboard focus (`tabindex`) making it WCAG-friendly.

---
*Created for GSSoC-26 — Resolves #46272.*
