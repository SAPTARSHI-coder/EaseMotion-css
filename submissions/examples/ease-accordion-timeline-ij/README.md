# Accordion Timeline

A vertical release timeline where each event is an accordion that expands with a smooth height reveal, plus a pulsing color-coded dot on the active item.

## How is it used?

Mark each event with a `--dot` color and toggle `.open` on the `.event`:

```html
<article class="event open" style="--dot:#22c55e;">
  <div class="e-head"><span class="e-dot"></span><h2>Title</h2></div>
  <div class="e-body"><p>Details…</p></div>
</article>
```

The accordion animates `max-height` and opacity while the chevron rotates `90deg`; the `.e-dot` picks up the `dotPulse` ring animation while open. Only one event stays open at a time.

## Why is it useful?

Accordions and timelines are common building blocks on docs sites, release pages, and changelogs. Combining them into one component — with a `::before` gradient rail, color-coded pulsing dots, and an accessible keyboard-toggle (`Enter`/`Space`) — gives EaseMotion a ready-made, self-contained pattern that stays within its zero-dependency philosophy.
