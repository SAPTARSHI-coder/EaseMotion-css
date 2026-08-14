# rotate-fade-popover-aa

**What does this do?**
A pure CSS "rotate-fade" popover for fintech dashboard layouts — the popover rotates in from a slight angled offset while fading and sliding up to full opacity, no JavaScript required.

**How is it used?**
```html
<div class="rfp-wrap">
  <input type="checkbox" id="rfp-toggle" class="rfp-checkbox">
  <label for="rfp-toggle" class="rfp-trigger">
    Account Balance
  </label>
  <div class="rfp-popover">
    <div class="rfp-popover-inner">
      <h4>$48,203.12</h4>
      <p>+2.4% this week</p>
    </div>
  </div>
</div>
```

**Why is it useful?**
Uses the checkbox-hack for pure CSS/HTML interactivity (no JS frameworks), with a combined `rotate()` and `translateY()` transform from `transform-origin: top center` and a spring-eased cubic-bezier curve for the reveal. Fully responsive down to mobile widths, with a `prefers-reduced-motion` fallback that removes the rotate/translate animation in favor of a simple fade — matching EaseMotion's animation-first, accessible philosophy.
