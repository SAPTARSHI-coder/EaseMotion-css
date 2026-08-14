# Interactive Timeline (ease-timeline-nishu)

## What does this do?
A beautiful vertical timeline component that features a "drawing" connecting line on page load, staggered item entrance animations, and satisfying interactive hover states on the nodes and content cards.

## How is it used?
```html
<ul class="ease-timeline">
    <li class="ease-timeline-item" style="--delay: 1;">
        <div class="ease-timeline-node"></div>
        <div class="ease-timeline-content">
            <span class="ease-timeline-date">Date</span>
            <h3 class="ease-timeline-title">Title</h3>
            <p class="ease-timeline-text">Description</p>
        </div>
    </li>
</ul>
```
Structure the HTML as a list. The vertical connecting line draws automatically on load. You can set the `--delay` CSS variable inline on each `li` item to easily stagger their entrance animations (e.g., `--delay: 1`, `--delay: 2`).

## Why is it useful?
Timelines are excellent for changelogs, roadmaps, and step-by-step instructions. By combining a `scaleY` line drawing animation with a staggered bouncy fade-in using CSS Custom Properties for timing, this component makes static history feel dynamic and engaging without needing intersection observers or JS logic for initial paint.
