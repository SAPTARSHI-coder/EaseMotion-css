# zoom-in-popover-aa

**What does this do?**
A pure CSS "zoom-in" popover for fintech dashboard layouts — the popover scales in from small to full size with a spring ease when the trigger is activated, no JavaScript required.

**How is it used?**
```html
<div class="zip-wrap">
  <input type="checkbox" id="zip-toggle" class="zip-checkbox">
  <label for="zip-toggle" class="zip-trigger">
    Account Balance
  </label>
  <div class="zip-popover">
    <div class="zip-popover-inner">
      <h4>$48,203.12</h4>
      <p>+2.4% this week</p>
    </div>
  </div>
</div>
```

**Why is it useful?**
Uses the checkbox-hack for pure CSS/HTML interactivity (no JS frameworks), with a `scale()` transform from a small `transform-origin: top center` anchor and a spring-eased cubic-bezier curve for a punchy zoom-in reveal. Fully responsive down to mobile widths, with a `prefers-reduced-motion` fallback that removes the scale animation and falls back to a simple fade — matching EaseMotion's animation-first, accessible philosophy.
