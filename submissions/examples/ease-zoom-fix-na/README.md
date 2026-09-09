# ⚡ Fix ease-zoom Missing Transform Origin for IE11

Cross-browser layout fix submission ensuring consistent entrance zoom origins.

## ✨ What it does
Forces the legacy Trident rendering pipeline (Internet Explorer 11) to scale spatial components accurately outward from the exact item center coordinate instead of misinterpreting the default vector path layout to the top-left margin layout boundary.

## 🚀 How to Use
Add the vendor-hardened class to standard structural blocks:

```html
<div class="ease-zoom-fixed">
  True center zoom expansion target
</div>