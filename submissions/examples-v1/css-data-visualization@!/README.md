# CSS-Only Data Visualization Charts

This is a self-contained example demonstrating how to create modern, animated data visualization charts using pure CSS, including bar charts, line charts, pie charts, donut charts, and horizontal bar charts - seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 📊 **Bar Chart:** Vertical bars with animated growth and hover effects.
- 📈 **Line Chart:** SVG-based line chart with area fill and animated data points.
- 🥧 **Pie Chart:** Conic-gradient based pie chart with rotation animation.
- 🍩 **Donut Chart:** SVG stroke-based donut chart with segmented animation.
- 📉 **Horizontal Bar Chart:** Horizontal progress bars with shimmer effects.
- ✨ **Smooth Animations:** Growth, draw, fade, and rotate animations.
- 🎨 **Gradient Effects:** Beautiful gradient fills throughout.
- 🏷️ **Legends:** Color-coded legends for all chart types.
- 💫 **Hover Interactions:** Tooltips, highlights, and scale effects.
- ♿ **Fully Accessible:** Respects `prefers-reduced-motion` and semantic HTML.
- 📱 **Responsive Design:** Adapts to all screen sizes.
- 🚫 **Zero JavaScript:** Entirely built with HTML and CSS.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the chart HTML structure you need.
4. Customize data values using CSS custom properties.
5. No JavaScript required!

## Chart Types

### 1. Bar Chart
```html
<div class="bar-chart">
  <div class="bar-chart__bar" style="--value: 65; --delay: 0.1s;">
    <div class="bar-chart__bar-fill"></div>
    <span class="bar-chart__label">Jan</span>
    <span class="bar-chart__value">$65k</span>
  </div>
  <!-- More bars -->
</div>