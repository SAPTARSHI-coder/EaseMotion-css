# Animated Timeline (cv variant)

## What does this do?
A beautifully animated timeline component with 3 style variants (Classic, Gradient, Pulse) and 4 status colors (Completed, Active, Pending, Highlighted). Perfect for changelogs, roadmaps, activity feeds, and process indicators.

## How is it used?

### Basic Usage:

```html
<ul class="ease-timeline-cv ease-timeline-cv-classic">
    <li class="ease-timeline-cv-item ease-timeline-cv-completed">
        <div class="ease-timeline-cv-dot"></div>
        <div class="ease-timeline-cv-content">
            <div class="ease-timeline-cv-date">Dec 15, 2025</div>
            <h3 class="ease-timeline-cv-title">Project Initialized</h3>
            <p class="ease-timeline-cv-desc">Set up initial repository structure.</p>
        </div>
    </li>
</ul>

<!-- Classic (solid connector) -->
<ul class="ease-timeline-cv ease-timeline-cv-classic">...</ul>

<!-- Gradient (animated gradient connector) -->
<ul class="ease-timeline-cv ease-timeline-cv-gradient">...</ul>

<!-- Pulse (pulsing dots) -->
<ul class="ease-timeline-cv ease-timeline-cv-pulse">...</ul>

<!-- Completed (Green) -->
<li class="ease-timeline-cv-item ease-timeline-cv-completed">...</li>

<!-- Active (Blue with pulse animation) -->
<li class="ease-timeline-cv-item ease-timeline-cv-active">...</li>

<!-- Pending (Gray, faded) -->
<li class="ease-timeline-cv-item ease-timeline-cv-pending">...</li>

<!-- Highlighted (Gradient purple) -->
<li class="ease-timeline-cv-item ease-timeline-cv-highlighted">...</li>