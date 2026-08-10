# ease-timeline-tm

A vertical timeline component for EaseMotion CSS.

## Usage

```html
<ul class="ease-timeline">
  <li class="ease-timeline-item">
    <div class="ease-timeline-date">Jan 2024</div>
    <h4 class="ease-timeline-title">Event Title</h4>
    <p class="ease-timeline-body">Description here.</p>
  </li>
</ul>
```

## Dot Color Variants

```html
<li class="ease-timeline-item ease-timeline-item-success">...</li>
<li class="ease-timeline-item ease-timeline-item-warning">...</li>
<li class="ease-timeline-item ease-timeline-item-danger">...</li>
```

## Classes

| Class | Description |
|---|---|
| `ease-timeline` | Timeline list wrapper |
| `ease-timeline-item` | Single timeline entry |
| `ease-timeline-date` | Date/label above title |
| `ease-timeline-title` | Event title |
| `ease-timeline-body` | Event description |
| `ease-timeline-item-success` | Green dot variant |
| `ease-timeline-item-warning` | Yellow dot variant |
| `ease-timeline-item-danger` | Red dot variant |

## Features
- Staggered entrance animation
- Color variants for dot
- Vertical connecting line
- Respects prefers-reduced-motion
- Uses EaseMotion CSS design tokens