# ease-scroll-behavior — Scroll Behavior Utility Classes

## What does this do?

Controls smooth vs. instant scrolling via `scroll-behavior`. Also provides scroll-snap-type utilities for snap scrolling.

## How is it used?

```html
<div class="ease-scroll-smooth">
  <!-- Smooth scroll within this container -->
</div>
<div class="ease-scroll-auto">
  <!-- Instant jump scrolling -->
</div>
<div class="ease-snap-x">
  <!-- Horizontal scroll snap -->
</div>
```

### Classes

| Class | Property |
|---|---|
| `.ease-scroll-auto` | `scroll-behavior: auto` |
| `.ease-scroll-smooth` | `scroll-behavior: smooth` |
| `.ease-snap-none` | `scroll-snap-type: none` |
| `.ease-snap-x` | `scroll-snap-type: x mandatory` |
| `.ease-snap-y` | `scroll-snap-type: y mandatory` |
| `.ease-snap-both` | `scroll-snap-type: both mandatory` |
| `.ease-snap-proximity` | `scroll-snap-type: both proximity` |
| `.ease-snap-start` | `scroll-snap-align: start` |
| `.ease-snap-center` | `scroll-snap-align: center` |
| `.ease-snap-end` | `scroll-snap-align: end` |
