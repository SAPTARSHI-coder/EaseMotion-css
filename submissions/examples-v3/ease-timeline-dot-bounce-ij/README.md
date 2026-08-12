# Timeline Dot Bounce

Vertical timeline with bouncing dot indicators and sequential entrance animation.

## Features

- Vertical timeline with centered track line via `::before`
- Dots bounce in with `@keyframes tdb-bounce` (scale + translateY overshoot)
- Sequential `animation-delay` via `--i` custom property
- Content slides in alongside each dot
- Triggered by `IntersectionObserver` on scroll (falls back to immediate)

## Usage

Add `.tdb-timeline` with `.tdb-event` children. Each event contains a `.tdb-dot` and `.tdb-content`. Set `--i` on each event for stagger index. Add `.tdb-visible` to the timeline to start the animation.

```html
<div class="tdb-timeline tdb-visible">
  <div class="tdb-event" style="--i:1">
    <div class="tdb-dot"></div>
    <div class="tdb-content">
      <h3>Title</h3>
      <p>Description</p>
    </div>
  </div>
</div>
```

Customize via CSS custom properties on `:root`:
- `--tdb-dot-size` – dot diameter
- `--tdb-dot-color` – dot fill color
- `--tdb-line-color` – vertical line color
- `--tdb-bounce-duration` – bounce animation duration
- `--tdb-dot-active-color` – active dot color for future state
