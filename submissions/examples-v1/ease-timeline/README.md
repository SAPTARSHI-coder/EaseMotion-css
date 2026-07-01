# ease-timeline

## What does this do?

Provides a **timeline** component for displaying chronological events, process steps, or history in vertical (alternating or left-aligned) and horizontal layouts with scroll-triggered animation.

## How is it used?

```html
<div class="ease-timeline">
  <div class="ease-timeline-item ease-reveal ease-slide-up">
    <div class="ease-timeline-dot"></div>
    <div class="ease-timeline-content">
      <div class="ease-timeline-date">Jan 2024</div>
      <h3 class="ease-timeline-title">Product Launch</h3>
      <p class="ease-timeline-desc">Description of the event.</p>
    </div>
  </div>
</div>
```

### Available Classes

| Class | Purpose |
|-------|---------|
| `.ease-timeline` | Vertical timeline container (center line) |
| `.ease-timeline-left` | Left-aligned line variant |
| `.ease-timeline-horizontal` | Horizontal scrollable timeline |
| `.ease-timeline-item` | Individual timeline entry |
| `.ease-timeline-dot` | Circle marker on the line |
| `.ease-timeline-content` | Card with date, title, description |
| `.ease-timeline-date` | Date label (uppercase, primary color) |
| `.ease-timeline-title` | Event title |
| `.ease-timeline-desc` | Event description |

### Variants

| Variant | Classes | Description |
|---------|---------|-------------|
| Alternating | `.ease-timeline` | Items alternate left/right of center line |
| Left-aligned | `.ease-timeline.ease-timeline-left` | All items on the right, line on the left |
| Horizontal | `.ease-timeline.ease-timeline-horizontal` | Scrollable horizontal row with snap |

### Responsive

- **Mobile (<768px)**: All vertical timelines collapse to single-column left-aligned layout
- **Desktop**: Alternating and horizontal layouts display as designed

### Animation

Use `ease-reveal ease-slide-up` on each `.ease-timeline-item` for scroll-triggered stagger entrance. Cards also have a hover lift effect.

### Design Tokens Used

| Token | Fallback | Purpose |
|-------|----------|---------|
| `--ease-timeline-line-color` | `#e2e8f0` / `#334155` | Vertical/horizontal line |
| `--ease-timeline-dot-color` | `#6c63ff` | Dot marker |
| `--ease-timeline-dot-size` | `14px` | Dot diameter |
| `--ease-color-surface` | `#fff` / `#141e33` | Card background |
| `--ease-color-text` | `#1e293b` / `#e2e8f0` | Title |
| `--ease-color-primary` | `#6c63ff` | Date, dot color |
| `--ease-color-neutral-200` | `#e2e8f0` | Card border, line |
| `--ease-color-neutral-500` | `#64748b` | Description |
| `--ease-color-neutral-700` | `#334155` | Dark border, line |
| `--ease-shadow-sm` | `0 1px 3px...` | Card shadow |
| `--ease-shadow-md` | `0 4px 12px...` | Card hover shadow |
| `--ease-radius-lg` | `1rem` | Card border radius |
| `--ease-space-8` | `2rem` | Timeline padding, item margin |
| `--ease-space-10` | `2.5rem` | Content width offset |
| `--ease-text-base` | `1rem` | Title font size |
| `--ease-text-sm` | `0.875rem` | Description font size |
| `--ease-text-xs` | `0.75rem` | Date font size |
| `--ease-speed-fast` | `150ms` | Card hover transition |

Fixes #25556
