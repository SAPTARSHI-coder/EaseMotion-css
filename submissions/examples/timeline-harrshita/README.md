# CSS Animated Timeline

Vertical animated activity feed / timeline component for EaseMotion CSS.
Items animate in with staggered delays using CSS `@keyframes`.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<ol class="ease-timeline" aria-label="Activity timeline">
  <li class="ease-timeline__item">
    <div class="ease-timeline__dot ease-timeline__dot--primary"></div>
    <div class="ease-timeline__content">
      <span class="ease-timeline__date">Aug 9, 2026</span>
      <h3 class="ease-timeline__title">Event Title</h3>
      <p class="ease-timeline__body">Event description text goes here.</p>
    </div>
  </li>
</ol>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.ease-timeline` | Outer ordered list (draws vertical line) |
| `.ease-timeline__item` | Single event row |
| `.ease-timeline__dot` | Circle marker |
| `.ease-timeline__dot--primary` | Purple dot |
| `.ease-timeline__dot--success` | Green dot |
| `.ease-timeline__dot--warning` | Yellow dot |
| `.ease-timeline__content` | Card with date, title, body |
| `.ease-timeline__date` | Timestamp label |
| `.ease-timeline__title` | Event heading |
| `.ease-timeline__body` | Event description |

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-tl-primary` | `#6c63ff` | Primary dot color |
| `--ease-tl-success` | `#22c55e` | Success dot color |
| `--ease-tl-warning` | `#f59e0b` | Warning dot color |
| `--ease-tl-line` | `#e0e0f0` | Connector line color |
| `--ease-tl-dot-size` | `16px` | Dot diameter |

## Animation

Items animate in from the left with `ease-timeline-in` keyframes.
Each item uses an incremental `animation-delay` via `nth-child`.
Disabled via `prefers-reduced-motion`.

Closes #67723
