# Calendar Event Lift KP

A CSS-only agenda component that introduces scheduled events with a staggered rise and gives each event a clear hover or keyboard-focus lift.

## What It Does

The component combines an ordered event entrance, accent rails, an active-status pulse, and responsive interaction feedback in a compact daily agenda.

## How to Use It

Add the event card classes to semantic list items and set `--event-order` to control the stagger:

```html
<li class="event-card event-card--live" style="--event-order: 0">
  <a class="event-card__link" href="#design-review">
    <time class="event-card__time" datetime="2026-07-29T09:30">09:30 AM</time>
    <span class="event-card__details">
      <span class="event-card__title">Design review</span>
      <span class="event-card__note">Motion system handoff</span>
    </span>
  </a>
</li>
```

Open `demo.html` directly in a browser to view the complete example. No JavaScript, build step, CDN, or external framework is required.

## Why It Is Useful

Calendar interfaces contain dense time-based information. The motion makes the reading order easier to follow while hover and focus feedback keep every event visibly interactive, matching EaseMotion's readable, animation-first philosophy.

## Accessibility

- Semantic `ol`, `li`, `time`, and link elements preserve document meaning.
- `:focus-visible` provides a strong keyboard focus state.
- `prefers-reduced-motion` removes entrance and looping animation.
- Text and status colors maintain clear contrast on the dark surface.
