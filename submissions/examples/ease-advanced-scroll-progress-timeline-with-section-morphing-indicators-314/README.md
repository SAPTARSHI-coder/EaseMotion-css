# Advanced Scroll Progress Timeline (`ease-advanced-scroll-progress-timeline-with-section-morphing-indicators-314`)

A side navigation timeline component featuring continuous scroll progress visualization and morphing section node indicators.

## Features
- **Morphing Indicators:** Section nodes dynamically morph shape and glow when active.
- **Continuous Progress Line:** Visualizes document scroll progress along the timeline vertical axis.
- **Performance Optimized:** Uses `IntersectionObserver` to trigger section states smoothly.

## Usage

1. Add HTML markup to your page:
   ```html
   <aside class="timeline-nav">
     <div class="timeline-line">
       <div class="timeline-progress" id="timelineProgress"></div>
     </div>
     <div class="timeline-nodes">
       <a href="#section-1" class="node active">
         <span class="node-shape"></span>
         <span class="node-label">Section 1</span>
       </a>
     </div>
   </aside>