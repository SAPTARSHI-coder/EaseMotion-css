# Horizontal Scroll Timeline

## What does this do?

A company-history timeline that scrolls horizontally with CSS scroll-snap,
centering each event as the user scrolls — with no JavaScript tracking
"which event is current," since the browser's own scroll position is the
entire state.

## How is it used?

```html
<div class="hst-track" tabindex="0" role="region" aria-label="Company history timeline, scroll horizontally">
  <div class="hst-line" aria-hidden="true"></div>
  <div class="hst-event">
    <span class="hst-year">2019</span>
    <p class="hst-text">Founded in a shared workspace with three people.</p>
  </div>
  <!-- ... -->
</div>
```

`scroll-snap-type: x mandatory` on the track plus `scroll-snap-align:
center` on each event is the entire mechanism — no JS scroll listener
computing which event is "active" or driving the snap behavior manually.

## Why is it useful?

A carousel or horizontal timeline is often built with a JS-tracked
"current index" that the scroll position is synced to (or that drives the
scroll position programmatically), which introduces two sources of truth
that can drift out of sync — a fast swipe gesture the JS index tracker
doesn't catch cleanly, for instance. Relying entirely on native CSS
scroll-snap means there's only one state: wherever the track has actually
scrolled to. That state is inherently correct by construction, works with
trackpad scroll, touch swipe, and keyboard scrolling (via the focusable
`tabindex="0"` track) identically, and needs no JS to keep in sync with
anything.

Because each event snaps to *center* rather than the more common
*start*, the track needs asymmetric padding — `padding-inline:
calc(50% - 7rem)`, where `7rem` is half an event's width — so the first
and last events can actually reach the centered position rather than
stopping short against the track's edge, unable to scroll any further to
center themselves. This padding requirement is specific to center-snap and
wouldn't be needed for the more common start-aligned snap layout.
