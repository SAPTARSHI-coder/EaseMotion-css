# Draw-Border Line Popover (`draw-border-popover-ksk`)

1. What does this do?  
A pure CSS popover where the trigger button's border **draws clockwise** on hover (top+right lines, then bottom+left) using `clip-path` transitions. When clicked, the popover card opens with a matching border-draw entrance on the card itself, plus a spring `translateY` fade-in.

2. How is it used?  
Wrap `<input class="ease-draw-toggle">` + `.ease-draw-wrap` together. Inside add a `.ease-draw-trigger` label and `.ease-draw-popover` card. Tune all parameters via CSS custom properties:

```css
.ease-draw-wrap {
  --ease-draw-duration:   0.45s;
  --ease-draw-easing:     cubic-bezier(0.4, 0, 0.2, 1);
  --ease-draw-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-draw-color:      #6366f1;   /* border draw colour    */
  --ease-draw-thickness:  2px;
  --ease-draw-width:      300px;
  --ease-draw-offset:     8px;
  --ease-draw-radius:     14px;
}
```

3. Why is it useful?  
The draw-border effect is a visually distinctive focus indicator — particularly effective for accessible web layouts where clear focus states matter. The animated border doubles as a keyboard-visible state, meeting WCAG 2.4.11 focus appearance requirements.

---
*Created for GSSoC-26 — Resolves #46759.*
