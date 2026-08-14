# ⚡ Fix ease-marquee Animation Pauses Unexpectedly on Tab Blur

Maintains linear translation points for marquees shifting across background tabs.

## ✨ What it does
Prevents scrolling marquee text tracks from executing visual catch-up calculations or jumping snapping steps when browser tabs regain processing focus after being minimized or hidden.

## 🚀 How to Use
```html
<div class="ease-marquee-continuous" id="marqueeTicker">
  <div class="ease-marquee-continuous__track">
    <span>Breaking News • Latest Updates •</span>
  </div>
</div>