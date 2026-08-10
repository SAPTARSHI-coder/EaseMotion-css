# Animated Vertical Timeline

### What does this do?

It shows a vertical timeline with a connecting line and dots, where each entry fades and slides in with a staggered delay and displays a date, title, and description.

### How is it used?

```html
<div class="timeline">
  <div class="timeline-item">
    <span class="timeline-dot" aria-hidden="true"></span>
    <div class="timeline-content">
      <span class="timeline-date">2022</span>
      <h3>Launched v1</h3>
      <p>The first public release shipped.</p>
    </div>
  </div>
</div>
```

The line is drawn once on the `.timeline` container, each `.timeline-item` places a dot on it, and the items reveal one after another with per item animation delays.

### Why is it useful?

Timelines suit histories, roadmaps, changelogs, and order tracking. This reveals entries with a staggered fade and slide using keyframes and delays, so it needs no JavaScript. The dots are decorative and hidden from assistive tech, and motion is disabled under `prefers-reduced-motion: reduce`.
