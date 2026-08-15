# ⚡ Ease Animated Text Gradient Cycle

A pure CSS topographic component for EaseMotion CSS that smoothly shifts linear color spectrum gradients across typography elements.

## ✨ What it does
By multiplying the linear color stop distribution metrics (`background-size: 300% auto`) and masking it strictly around vector font boundaries using explicit text-clipping commands, it sets an infinite background-position shift path. The seamless repetition points eliminate color snapping during loop boundary intersections.

## 🚀 How to Use
Add the `ease-gradient-cycle` class directly onto any structural title or logo node:
```html
<h1 class="ease-gradient-cycle">Cosmic Heading</h1>
<h2 class="ease-gradient-cycle ease-gradient-cycle--sunset">Sunset Heading</h2>
<h3 class="ease-gradient-cycle ease-gradient-cycle--ocean">Ocean Heading</h3>