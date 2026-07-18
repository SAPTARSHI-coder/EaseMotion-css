# Pulse-Active Popover (`pulse-active-popover-ksk`)

1. What does this do?  
A pure CSS popover triggered by a pulsing circular button. The trigger idles with an expanding ring pulse animation. On click (checkbox hack), the pulse stops and the popover card springs in from below using a scale + translateY entrance. Styled for creative portfolio layouts.

2. How is it used?  
Wrap a `<input type="checkbox" class="ease-pop-toggle">` + `.ease-popover-wrap` in a parent. Inside the wrap put a `<label class="ease-pop-trigger">` and a `.ease-popover` card. Customise per-instance via CSS custom properties:

```css
.ease-popover-wrap {
  --ease-pop-accent:    #a855f7;  /* glow + button colour */
  --ease-pop-duration:  0.4s;
  --ease-pop-easing:    cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-pop-scale:     0.82;
  --ease-pop-offset:    12px;
  --ease-pop-pulse-dur: 1.6s;
  --ease-pop-width:     300px;
}
```

3. Why is it useful?  
Delivers a visually arresting "hotspot" popover pattern ideal for portfolio case-study overlays, image annotations, and project previews — with full keyboard accessibility and zero JavaScript.

---
*Created for GSSoC-26 — Resolves #46533.*
