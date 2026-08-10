# Float-Drift Navbar (`ease-float-drift-navbar-ksk`)

1. What does this do?  
A floating pill navigation bar designed for Creative Portfolio layouts. The entire navbar card floats fixed at the top of the viewport, playing a gentle infinite vertical drift loop. Hovering over nav items draws a sliding backdrop capsule overlay using spring transitions.

2. How is it used?  
Place the `.drift-nav-wrapper` containing the nav list at the top level of the body. Switch theme properties or custom values via CSS variables:

```css
.drift-nav-wrapper {
  --ease-nav-drift:       6px;             /* float oscillation offset */
  --ease-nav-speed:       4.5s;            /* speed of float loop */
  --ease-nav-duration:    0.35s;           /* link transition speed */
  --ease-nav-easing:      cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-nav-accent:      #f43f5e;         /* link active color */
}
```

3. Why is it useful?  
Pill floating navbars are highly requested in premium designer layouts. The low-frequency drift loop makes the interface feel light and alive, while the responsive drawer and layout supports keyboard accessibility, `prefers-reduced-motion` compliance, and Dark/Light modes out of the box with zero script overhead.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #54551.*
