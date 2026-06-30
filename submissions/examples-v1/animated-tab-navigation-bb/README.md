# Animated Tab Navigation

1. **What does this do?**
   Three distinct tab navigation styles: a pill-style tab with a smooth spring-physics sliding background, an underline tab with an animated sliding underline indicator, and an icon-only tab group — all keyboard-accessible with ARIA roles and animated panel content transitions.

2. **How is it used?**

   ```html
   <!-- Pill tabs -->
   <div class="tabs-container tabs-pill" role="tablist">
     <div class="tab-slider" id="slider-pill"></div>
     <button
       class="tab-btn active"
       role="tab"
       aria-selected="true"
       aria-controls="panel-1"
     >
       Home
     </button>
     <button
       class="tab-btn"
       role="tab"
       aria-selected="false"
       aria-controls="panel-2"
     >
       Analytics
     </button>
   </div>
   <div class="tab-panel active" id="panel-1" role="tabpanel">Content here</div>

   <!-- Underline tabs -->
   <div class="tabs-container tabs-underline" role="tablist">
     <div class="tab-underline-slider" id="slider-underline"></div>
     <button class="tab-ul-btn active" role="tab">Overview</button>
   </div>
   ```

3. **Why is it useful?**
   Tab navigation is among the most used UI patterns in dashboards, documentation, and settings pages. This submission demonstrates the sliding indicator pattern — where a positioned element follows the active tab using CSS `transform: translateX()` with spring easing — which is more performant than changing layout properties. The component uses proper ARIA `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, and `aria-controls` for screen reader compatibility. Maps to planned `ease-tabs`, `ease-tab-slider`, and `ease-tab-underline` utilities.
