# Animated Vertical Timeline

## What does this do?
Adds a responsive, alternating vertical timeline component with scroll-reveal animation on each entry and a hover elevation effect, for displaying project milestones, history, or event sequences.

## How is it used?
```html
<ol class="timeline">
  <li class="timeline-item">
    <div class="timeline-marker" aria-hidden="true"></div>
    <div class="timeline-content">
      <span class="timeline-date">Jan 2024</span>
      <h3 class="timeline-title">Project Kickoff</h3>
      <p class="timeline-text">Short description of this milestone.</p>
    </div>
  </li>
  <!-- repeat .timeline-item for each entry -->
</ol>
```
Open `demo.html` directly in a browser — no server or build step required. Scroll down to see each entry animate in as it enters the viewport.

## Why is it useful?
Timelines are a common pattern for changelogs, roadmaps, and "about us" history sections, and EaseMotion CSS doesn't yet have one. This submission demonstrates an alternating desktop layout that collapses to a single-column mobile layout, entries that reveal on scroll, and a soft hover-lift on each card — all consistent with the framework's animation-first, human-readable philosophy. It uses semantic markup (`<ol>`/`<li>`, one `<h3>` per entry) and works without JavaScript; the small script only adds the scroll-reveal as progressive enhancement, so the timeline is fully readable and functional if JS is disabled. It only touches this submission folder — no framework source files are modified.