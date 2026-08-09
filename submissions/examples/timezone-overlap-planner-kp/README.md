# Timezone Overlap Planner KP

## What does this do?

Timezone Overlap Planner KP adds a responsive team-availability timeline with animated working-hour ranges and a highlighted shared meeting window.

## How is it used?

Add each team member inside a `person-row`, place their working range in a `timeline`, and use `overlap-window` to mark the shared slot.

```html
<article class="person-row" tabindex="0">
  <div class="person">
    <span class="person__avatar">AK</span>
    <span>
      <strong>Aarav</strong>
      <small>Bengaluru, IST</small>
    </span>
  </div>
  <div class="timeline">
    <span class="availability availability--aarav"></span>
    <span class="overlap-window" aria-hidden="true"></span>
  </div>
</article>
```

## Why is it useful?

It gives EaseMotion CSS a practical scheduling visualization where motion clarifies availability and overlap while preserving keyboard focus, responsive behavior, and reduced-motion support.
