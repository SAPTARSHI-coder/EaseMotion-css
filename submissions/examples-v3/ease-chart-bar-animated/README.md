# Component: `ease-chart-bar-animated`

## What does this do?
It implements a responsive, animated bar chart component featuring staggered grow entrance animations, interactive glassmorphic tooltips, and smooth height transitions driven by a single CSS custom property.

## How is it used?
Construct the chart container with scale guidelines and bar elements:

```html
<!-- Main chart stage. Use class 'loading' to trigger staggered grow sequence on mount -->
<div class="chart-stage loading" id="myChart">
  
  <!-- Y-Axis Labels (Optional) -->
  <div class="chart-y-axis">
    <span>100%</span>
    <span>0%</span>
  </div>

  <!-- Plotting Area -->
  <div class="chart-plot-area">
    <!-- Grid Lines (Optional) -->
    <div class="chart-gridlines">
      <div class="gridline"></div>
    </div>
    
    <!-- Columns -->
    <div class="chart-columns">
      
      <!-- Bar Element -->
      <div class="chart-column">
        <div class="chart-bar-container">
          <div class="chart-bar-track"></div>
          <!-- Target height value and staggered delay configured via inline variables -->
          <div class="chart-bar-fill" style="--bar-value: 75%; --bar-delay: 0.2s;">
            <span class="chart-tooltip">75%</span>
          </div>
        </div>
        <span class="chart-x-label">Jan</span>
      </div>

    </div>
  </div>
</div>
```

To update values dynamically, write a lightweight script to modify the CSS variable `--bar-value` on the bar fill elements:

```javascript
const bar = document.querySelector('.chart-bar-fill');

// Update value smoothly via transition
bar.style.setProperty('--bar-value', '85%');

// Optionally update tooltip label content
bar.querySelector('.chart-tooltip').textContent = '85%';
```

## Why is it useful?
Traditional animated charts often rely on heavy canvas rendering engines or bulky SVG graphing libraries, which are complex to integrate and separate developers from standard HTML/CSS layout systems. 

This component aligns with EaseMotion CSS's philosophy by using **CSS-first rendering**:
1. **Separation of Concerns**: Heights, delays, and transitions are managed entirely inside the stylesheet. JavaScript is kept extremely lightweight, responsible only for updating variables rather than calculating frames or layouts.
2. **Dynamic Interpolation**: Because heights are linked to the `--bar-value` custom property registered via `@property`, transitioning the height is handled natively by the browser's render engine, ensuring a smooth, hardware-accelerated 60+ FPS experience.
3. **Staggered Keyframes**: Uses clean CSS animation delays (`--bar-delay`) inside standard grow keyframes to achieve a staggered build-up effect on page mount.
4. **Accessibility Focus**: Accessibility features are baked in, utilizing native ARIA roles and labels, and instantly switching to static heights for users with vestibular needs via a `@media (prefers-reduced-motion: reduce)` block.

## Preview
Open `demo.html` directly in your browser to see the animation and test the randomized updates.
