# Micro Shake Tabs (`ease-micro-shake-tabs-ksk`)

1. What does this do?  
An animated tabbed layout styled for Cyberpunk/Neon terminal aesthetics. Hovering over a tab label triggers an infinite, high-frequency, low-amplitude "micro shake" animation. When a tab is selected (clicked), the active tab plays a snappy glitch entry animation and locks in a neon-glow border accent—all powered by pure CSS.

2. How is it used?  
Define three radio inputs (`#tab-1`, `#tab-2`, `#tab-3`) preceding `.tabs-container`. Use `<label>` elements pointing to the radio IDs for navigations. Customize parameters via CSS custom properties:

```css
.tabs-container {
  --ease-shake-intensity: 1.5px;           /* shake movement offset */
  --ease-shake-rotate:    0.8deg;          /* shake rotation tilt   */
  --ease-shake-duration:  0.18s;           /* speed of micro shake  */
  --ease-shake-color:     #ff007f;         /* Neon Pink active color */
  --ease-shake-accent:    #00f0ff;         /* Neon Cyan hover color  */
}
```

3. Why is it useful?  
The high-frequency micro shake and skew entry glitch animations give interfaces a tactile, high-tech, or industrial feel—perfect for cyberpunk portfolios, developer documentation portals, game dashboards, and terminal mockups. Fully responsive and zero JS overhead.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #50160.*
