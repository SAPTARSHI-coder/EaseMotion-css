# Vertical Timeline Indicator

A dependency-free, responsive vertical timeline component for the EaseMotion CSS gallery. It features a growing center line, popping event dots, and alternating content cards that animate sequentially on load.

## Features
- **Zero Dependencies:** Built entirely with modern CSS and HTML.
- **Sequential Animations:** Utilizes `animation-delay` mapped to `nth-child` to create a smooth, cascading entry effect.
- **Fully Responsive:** Gracefully collapses from an alternating two-column layout to a single-column layout on screens smaller than `768px`.
- **Accessibility Friendly:** Respects `prefers-reduced-motion: reduce` by snapping the timeline to its final state without animations for users sensitive to motion.

## Usage

Include the `style.css` in your project and copy the HTML structure from `demo.html`. 

### HTML Structure
```html
<div class="ease-timeline-container">
    <div class="ease-timeline-item">
        <div class="ease-timeline-dot"></div>
        <div class="ease-timeline-card">
            <h3>Event Title</h3>
            <p>Event description goes here.</p>
        </div>
    </div>
    <!-- Add more .ease-timeline-item elements as needed -->
</div>
