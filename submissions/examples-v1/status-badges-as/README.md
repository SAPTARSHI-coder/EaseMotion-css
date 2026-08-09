# Animated Status Badges

### What does this do?

It shows presence status pills such as online, away, busy, and offline, each with a colored dot, where the online dot has a soft pulsing ring.

### How is it used?

```html
<span class="badge is-online">
  <span class="badge-dot" aria-hidden="true"></span>
  Online
</span>
```

Use `is-online`, `is-away`, `is-busy`, or `is-offline` on a `.badge` to set its color. The online badge adds a pulsing ring around the dot to signal a live state.

### Why is it useful?

Status badges show presence or state in chat apps, dashboards, and user lists. This adds the pulsing ring with a single keyframe on a pseudo element, so it needs no JavaScript. The dot is decorative and hidden from assistive tech, and the pulse is disabled under `prefers-reduced-motion: reduce`.
