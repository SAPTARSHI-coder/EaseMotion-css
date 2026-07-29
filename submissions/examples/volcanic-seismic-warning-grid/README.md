# Volcanic Activity & Seismic Early Warning Grid Showcase

## What does this do?
This is a responsive, interactive single-page dashboard control center that monitors volcanic activity and seismic anomalies, using pure CSS state machines (via the radio button hack) to drive immersive 60fps animations.

## How is it used?
Users interact with the state selectors at the top of the dashboard to toggle between **Normal**, **Advisory**, and **Critical** operational modes. The system layout, animations, gauges, seismograph frequencies, and color systems dynamically adapt to the selected state using native CSS variables.

The components utilize standard CSS layout and style primitives, which can be adapted into any codebase:
```html
<!-- Radio-button controllers for JS-free state triggers -->
<input type="radio" id="state-normal" name="system-state" checked class="state-radio">
<input type="radio" id="state-advisory" name="system-state" class="state-radio">
<input type="radio" id="state-critical" name="system-state" class="state-radio">

<div class="dashboard-wrapper">
  <!-- Dashboard elements react to active states -->
  <div class="sensor-node node-seis">
     <span class="sensor-value"></span>
  </div>
</div>
```

## Why is it useful?
This showcase demonstrates the power of modern pure CSS architecture:
1. **Zero JavaScript State Management**: Leveraging hidden radio toggles and sibling combinators (`~`) to drive complex UI changes across independent dashboard modules (graphs, volcano core, meter fill levels, text values, log feeds).
2. **Highly Optimized 60fps Performance**: Utilizing GPU-accelerated CSS properties (`transform`, `opacity`) and repeating SVG translation paths for heavy animation sequences, ensuring a stutter-free experience.
3. **Robust Accessibility Support**: Including comprehensive `@media (prefers-reduced-motion)` queries that stop vibrations, heavy flash alerts, and rapid waves, providing a pleasant, legible experience for screen readers and motion-sensitive users.
4. **Fluid Layouts**: Seamless grid structures that reflow elegantly across mobile, tablet, and widescreen monitors.

## Tech Stack
- HTML5 (semantic layouts, SVG vector rendering)
- CSS3 (Variables, CSS Grid, Flexbox, Keyframes, `@media` queries)

## Preview
Open `demo.html` directly in any web browser to explore the fully functional dashboard interface.

## Contribution Notes
- Class names, layout cards, and keyframe animations were structured following the EaseMotion contribution principles.
- Clean separation of component wrappers and state variables ensures code legibility.
