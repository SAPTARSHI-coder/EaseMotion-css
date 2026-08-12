# Avatar Stack

A collaborative avatar group that pops in with a stagger, fans out on demand, and lifts each member on hover with a name tooltip.

## How is it used?

Stack avatars with negative margins and let the state class do the work:

```html
<div class="avatar-stack">
  <div class="avatar a1"><span class="initials">AS</span></div>
  <div class="avatar a2"><span class="initials">DP</span></div>
  <div class="avatar more">+12</div>
</div>
```

Add `.spread` to the container to fan the avatars out horizontally; hovering any avatar translates it up and reveals its `.tooltip`.

## Why is it useful?

Avatar stacks appear across chat apps, dashboards, and team pages. This component keeps the effect light — staggered `popIn` entrances, `transition`-based spreading, and hover lifts on `transform` — and exposes everything as readable state classes, in line with EaseMotion's curated, class-driven philosophy.
