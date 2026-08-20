# skew-active-popover-aa

**What does this do?**
A pure CSS "skew-active" popover for fintech dashboard layouts — the trigger skews on hover and activation, and the popover un-skews into place as it reveals, giving a snappy, editorial feel with no JavaScript required.

**How is it used?**
```html
<div class="sap-wrap">
  <input type="checkbox" id="sap-toggle" class="sap-checkbox">
  <label for="sap-toggle" class="sap-trigger">
    Account Balance
  </label>
  <div class="sap-popover">
    <div class="sap-popover-inner">
      <h4>$48,203.12</h4>
      <p>+2.4% this week</p>
    </div>
  </div>
</div>
```

**Why is it useful?**
Uses the checkbox-hack for pure CSS/HTML interactivity (no JS frameworks). The trigger skews on hover (`skewX(-6deg)`) and skews further with a slight scale on activation, while the popover enters un-skewing from an offset angle with a spring-eased transition — matching EaseMotion's animation-first philosophy. Fully responsive down to mobile widths, with a `prefers-reduced-motion` fallback that removes all skew/transform effects and shortens transitions to a simple fade.
