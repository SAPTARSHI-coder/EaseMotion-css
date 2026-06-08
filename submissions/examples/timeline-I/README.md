 
# Timeline Component

Vertical timeline component with animated entrance — perfect for history, roadmap, and milestones.

## Files

- demo.html - Interactive demo
- style.css - Timeline styles
- README.md - Documentation

## Classes

- ease-timeline - Timeline wrapper
- ease-timeline-item - Individual timeline entry
- timeline-marker - Dot marker
- timeline-marker-icon - Icon marker
- timeline-content - Content container
- timeline-date - Date label
- ease-timeline-primary/success/warning/purple - Color variants

## Usage

```html
<div class="ease-timeline">
    <div class="ease-timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <h3>Title</h3>
            <p class="timeline-date">Date</p>
            <p>Description</p>
        </div>
    </div>
</div>