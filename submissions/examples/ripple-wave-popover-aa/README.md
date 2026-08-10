# ripple-wave-popover-aa

**What does this do?**
A pure CSS ripple-wave popover for fintech dashboard layouts — clicking a trigger (e.g. "Account Balance") expands a ripple wave and reveals a popover with account details, with no JavaScript.

**How is it used?**
```html
<div class="rwp-wrap">
  <input type="checkbox" id="rwp-toggle" class="rwp-checkbox">
  <label for="rwp-toggle" class="rwp-trigger">
    Account Balance
    <span class="rwp-ripple"></span>
  </label>
  <div class="rwp-popover">
    <div class="rwp-popover-inner">
      <h4>$48,203.12</h4>
      <p>+2.4% this week</p>
    </div>
  </div>
</div>
```

**Why is it useful?**
Uses the checkbox-hack for pure CSS/HTML interactivity (no JS frameworks), a keyframe-driven ripple expansion on trigger, a spring-eased popover reveal, full responsiveness down to mobile widths, and a `prefers-reduced-motion` fallback that disables the ripple and shortens the transition — matching EaseMotion's animation-first, accessible philosophy.
