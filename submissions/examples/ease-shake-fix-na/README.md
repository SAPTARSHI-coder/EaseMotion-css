# ⚡ Fix ease-shake Horizontal Scrollbar on Mobile Viewports

Layout optimization fix submission for the `ease-shake` animation utility.

## ✨ What it does
Prevents the `ease-shake` element transitions (`translateX`) from overflowing the narrow viewport edges on mobile layout breakpoints ($320\text{px} - 375\text{px}$ width), eliminating transient layout scrolls.

## 🚀 How to Use
Wrap components using the shake utility in an overflow containment wrapper:

```html
<div class="ease-shake-wrapper">
  <div class="ease-shake">
    No more horizontal layout popping!
  </div>
</div>
Why it is useful
Horizontal screen flashes degrade UX metrics on mobile sessions. Wrapping the dynamic translation keeps layout bounds intact.