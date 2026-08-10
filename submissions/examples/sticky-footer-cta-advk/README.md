# Sticky Footer CTA

## What does this do?

A docked purchase bar that retracts automatically once the real inline call to
action scrolls into view.

## How is it used?

```css
.sfc-inline { view-timeline-name: --inline-cta; view-timeline-axis: block; }

.sfc {
  animation: sfc-retract linear both;
  animation-timeline: --inline-cta;
  animation-range: entry 0% entry 60%;
}
```

## Why is it useful?

Sticky purchase bars are common on commerce pages and usually stay pinned for the
entire session, including while the user is looking directly at the real buy
button. Two competing calls to action is a genuine usability problem — it is
unclear which one is authoritative — and the bar permanently occupies screen space
on mobile.

A **named** view timeline solves it declaratively. `view-timeline-name` is declared
on the inline button, and the sticky bar references it with
`animation-timeline: --inline-cta`. This is the part worth knowing: an anonymous
`view()` timeline tracks the animated element itself, so a bar animating on its own
`view()` would be meaningless. A named timeline lets one element's scroll position
drive a completely different element's animation, with no observer and no shared
state.

`animation-range: entry 0% entry 60%` means the bar is fully retracted by the time
the inline button is 60% into view, so the handover happens before the user reaches
for it.

Browsers without scroll-driven animations keep the bar permanently visible, which
is the correct fallback — the current default behaviour, not a broken state.
