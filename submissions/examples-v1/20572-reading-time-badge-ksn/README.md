# Estimated Reading Time Badge with Progress (ease-reading-time-badge)

### 1. What does this do?

This is a fixed circular badge displaying estimated reading time that dynamically updates the time remaining (e.g. from "X min read" to "X min left" then "Finished") and fills an outer circular SVG progress ring based on scroll depth.

### 2. How is it used?

Place the checkbox-less structure with the SVG progress ring and stacked time text layers in your HTML:

```html
<div class="reading-badge-container">
  <svg class="reading-progress-ring" viewBox="0 0 36 36">
    <circle
      class="ring-bg"
      cx="18"
      cy="18"
      r="16"
      fill="none"
      stroke-width="2"
    />
    <circle
      class="ring-fill"
      cx="18"
      cy="18"
      r="16"
      fill="none"
      stroke-width="2"
    />
  </svg>
  <div class="reading-badge-content">
    <span class="reading-text text-initial">5 min read</span>
    <span class="reading-text text-5-left">5 min left</span>
    <span class="reading-text text-4-left">4 min left</span>
    <span class="reading-text text-3-left">3 min left</span>
    <span class="reading-text text-2-left">2 min left</span>
    <span class="reading-text text-1-left">1 min left</span>
    <span class="reading-text text-done">Finished</span>
  </div>
</div>
```

### 3. Why is it useful?

It fits the animation-first philosophy of EaseMotion CSS by implementing highly responsive scroll progress rings and text state shifts using native CSS scroll-driven timelines (`animation-timeline: scroll()`), offering 60fps performance without using any JavaScript event listeners.
