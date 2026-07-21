# Spring Physics Popover (`spring-physics-popover-ksk`)

1. What does this do?  
An annotated-artwork popover where glowing `✦` hotspots breathe with an idle scale animation. On click, the popover card springs open from below — combining `scale`, `translateY`, and `rotate` in a single spring transition using `cubic-bezier(0.34, 1.56, 0.64, 1)`. Stat chips inside stagger-spring in sequentially after the card lands.

2. How is it used?  
Place `.ease-spring-wrap` containing a checkbox toggle, `.ease-spring-trigger` label and `.ease-spring-popover` wherever you want a hotspot. The popover opens via `:checked` state. Tune physics via CSS custom properties:

```css
.ease-spring-wrap {
  --ease-spring-duration:    0.5s;
  --ease-spring-scale-from:  0.7;
  --ease-spring-y-from:      16px;
  --ease-spring-rotate-from: -4deg;
  --ease-spring-accent:      #e879f9;
  --ease-spring-width:       310px;
  --ease-spring-radius:      18px;
}
```

Three easing presets are defined in `:root`:
- `--ease-spring-1` — standard overshoot `cubic-bezier(0.34, 1.56, 0.64, 1)`
- `--ease-spring-2` — elastic hard overshoot `cubic-bezier(0.68, -0.55, 0.27, 1.55)`
- `--ease-spring-3` — gentle decelerate `cubic-bezier(0.22, 1, 0.36, 1)`

3. Why is it useful?  
The spring triple-transform (scale + translate + rotate simultaneously) creates a physically convincing "pop" that feels alive. The stat-chip stagger-spring inside the card adds a secondary layer of physical feedback after the card lands — ideal for creative portfolio and case study showcases.

---
*Created for GSSoC-26 — Resolves #46676.*
