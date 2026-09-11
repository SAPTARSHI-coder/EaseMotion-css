# Split Reveal Transition

A dramatic hero content reveal animation where a foreground cover splits horizontally into two halves (left and right) to reveal the content underneath. Ideal for landing pages, portfolio gates, or hero visual reveals.

## EaseMotion CSS Classes Showcased

This feature submits a self-contained prototype demonstrating horizontal split reveals utilizing relative positioning, clip paths, and opposing translate coordinates.

### Classes:
- `.ease-split-reveal-container`: Parent wrapper holding both the background content to reveal and the splitting foreground layers.
- `.ease-split-reveal-left`: Applies a leftward transition (`translateX(-100%)` and opacity fading) when triggered.
- `.ease-split-reveal-right`: Applies a rightward transition (`translateX(100%)` and opacity fading) when triggered.

### Usage in HTML:
```html
<div class="ease-split-reveal-container">
  <!-- Revealed content underneath -->
  <div class="reveal-content">...</div>
  <!-- Splitting foreground layers -->
  <div class="ease-split-reveal-left">Left Cover</div>
  <div class="ease-split-reveal-right">Right Cover</div>
</div>
```

---
Created as a contribution to EaseMotion CSS. Open `demo.html` in any browser to view the interactive prototype!
