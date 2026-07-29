# Draw-Border SaaS Popover (`draw-border-saas-popover-ksk`)

1. What does this do?  
A pure CSS popover for SaaS pricing showcases. A "View features" trigger draws its border clockwise on hover using `clip-path` transitions, then on click a feature-detail card springs up from below — with a matching glowing border draw animation on the card itself and an animated gradient top strip.

2. How is it used?  
Wrap `<input class="ease-saas-toggle">` + `.ease-saas-wrap` together. Inside add a `.ease-saas-trigger` label and `.ease-saas-popover` card. Colour-theme each plan via CSS custom properties:

```css
/* Green for free plan */
.ease-saas-wrap {
  --ease-saas-color: #22c55e;
  --ease-saas-glow:  rgba(34,197,94,0.35);
}

/* Amber for enterprise */
.ease-saas-wrap {
  --ease-saas-color: #f59e0b;
  --ease-saas-glow:  rgba(245,158,11,0.35);
}
```

Full custom property set:
```css
:root {
  --ease-saas-duration:  0.42s;
  --ease-saas-easing:    cubic-bezier(0.4, 0, 0.2, 1);
  --ease-saas-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-saas-color:     #a855f7;
  --ease-saas-thickness: 2px;
  --ease-saas-glow:      rgba(168,85,247,0.4);
  --ease-saas-width:     320px;
  --ease-saas-radius:    16px;
  --ease-saas-offset:    10px;
}
```

3. Why is it useful?  
Delivers an animated plan-detail popover perfect for SaaS pricing pages — the draw-border effect draws the eye to the selected plan while the feature list inside lets users compare plans without leaving the page. Three colour themes (green, purple, amber) ship ready-to-use.

---
*Created for GSSoC-26 — Resolves #46747.*
