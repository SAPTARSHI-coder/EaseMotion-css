# ease-morph-timeline

Submission for Issue #42302

## What this adds

A pure CSS timeline component with morph animation — Neumorphism
design style. Dots continuously morph their border-radius, the
connector line draws in from top, and items slide in with staggered
entrance. Zero JavaScript required.

## HTML Structure

```html
<ul class="ease-timeline" aria-label="Timeline">
  <li class="ease-timeline__item">
    <div class="ease-timeline__dot" aria-hidden="true"></div>
    <div class="ease-timeline__card">
      <div class="ease-timeline__header">
        <h3 class="ease-timeline__title">Event Title</h3>
        <span class="ease-timeline__time">Jan 2026</span>
      </div>
      <p class="ease-timeline__body">Description of this timeline event.</p>
      <span class="ease-timeline__tag">Tag</span>
    </div>
  </li>
</ul>
```

## Classes

### Wrapper
| Class | Description |
|---|---|
| `ease-timeline` | Timeline wrapper with animated connector line |

### Item Variants (on li)
| Class | Dot Color |
|---|---|
| `ease-timeline__item` | Default green |
| `ease-timeline__item--done` | Green with ✓ checkmark |
| `ease-timeline__item--blue` | Blue dot |
| `ease-timeline__item--purple` | Purple dot |
| `ease-timeline__item--pink` | Pink dot |
| `ease-timeline__item--danger` | Red dot |

### Card Elements
| Class | Description |
|---|---|
| `ease-timeline__dot` | Morphing animated node |
| `ease-timeline__card` | Neumorphic card with hover shift |
| `ease-timeline__title` | Event heading |
| `ease-timeline__time` | Timestamp label |
| `ease-timeline__body` | Description text |
| `ease-timeline__tag` | Color-matched status tag |

## Animations

- Line: `ease-timeline-line-draw` — scaleY(0→1) draw-in from top
- Items: `ease-timeline-in` — staggered translateX slide-in
- Dot: `ease-timeline-dot-morph` — continuous border-radius morph loop
- Dot glow: `ease-timeline-glow` — pulse ring effect

## Accessibility

- `<ul>` with `aria-label` for screen readers
- `aria-hidden="true"` on decorative dot elements
- Respects `prefers-reduced-motion`

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
