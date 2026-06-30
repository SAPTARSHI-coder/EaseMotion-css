# ⚡ Ease Animated Counting Number Component

A viewport-aware statistical metric counter component for EaseMotion CSS that animates values smoothly up from zero as they scroll into view.

## ✨ What it does

Utilizes the lightweight Intersection Observer API combined with hardware-accelerated CSS keyframes to dynamically update, scale-pulse, and snap metrics into place the exact moment they cross into the user's active screen viewport.

## 🚀 How to Use

Configure the custom `data-` attributes on your `ease-count-up` elements to set targeting mechanics:

```html
<div
  class="ease-count-up"
  data-target="1200"
  data-prefix="$"
  data-suffix="+"
  data-duration="2000"
>
  0
</div>
```
