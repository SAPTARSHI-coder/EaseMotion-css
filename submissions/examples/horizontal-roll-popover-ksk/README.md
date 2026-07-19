# Horizontal Roll Popover (`horizontal-roll-popover-ksk`)

1. What does this do?  
A pure CSS navigation popover that rolls in horizontally from the side with a simultaneous `translateX` + `rotate` + `scale` spring entrance — styled for modern SaaS navigation bars with grouped menu items.

2. How is it used?  
Wrap a `<input class="ease-roll-toggle">` + `.ease-roll-wrap` together. Inside the wrap add a `.ease-roll-trigger` label and a `.ease-roll-popover` card. Flip roll direction via `--ease-roll-side`:

```css
/* Roll from left (default) */
.ease-roll-wrap { --ease-roll-side: 1; }

/* Roll from right */
.ease-roll-wrap { --ease-roll-side: -1; }
```

Full set of custom properties:
```css
:root {
  --ease-roll-duration:  0.38s;
  --ease-roll-easing:    cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-roll-distance:  32px;   /* horizontal slide distance */
  --ease-roll-rotate:    -6deg;  /* entry rotation            */
  --ease-roll-scale:     0.88;
  --ease-roll-width:     320px;
  --ease-roll-accent:    #6366f1;
  --ease-roll-side:      1;      /* 1 = left, -1 = right      */
}
```

3. Why is it useful?  
Provides a distinctive, directional popover entrance that feels physically grounded — the roll rotation gives the card a sense of momentum as it slides open. Zero JavaScript required.

---
*Created for GSSoC-26 — Resolves #46636.*
