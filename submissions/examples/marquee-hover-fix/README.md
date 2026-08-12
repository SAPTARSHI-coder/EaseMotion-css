# ease-marquee — Pause-on-Hover Touch Fix

**Fixes:** Issue #4242

## Problem

`.ease-marquee:hover .ease-marquee-track` applied
`animation-play-state: paused` with no pointer guard. On touch devices,
browsers synthesize a `:hover` state on every tap. This caused:

1. First tap → marquee freezes (`:hover` fires, pause applied)
2. Second tap → marquee resumes (`:hover` released)

Users attempting to tap a link inside the marquee had to tap twice —
first unintentionally pausing, then tapping again to actually navigate.

## Fix

Wrap the pause rule in `@media (hover: hover) and (pointer: fine)`:

```css
/* ❌ Before — fires on touch taps */
.ease-marquee:hover .ease-marquee-track {
  animation-play-state: var(--marquee-pause-on-hover);
}

/* ✅ After — only fires on true hover-capable devices */
@media (hover: hover) and (pointer: fine) {
  .ease-marquee:hover .ease-marquee-track {
    animation-play-state: var(--marquee-pause-on-hover);
  }
}
```

## Behaviour Matrix

| Device | Before | After |
|---|---|---|
| Desktop mouse | ✅ pauses on hover | ✅ pauses on hover |
| Touch — first tap | ❌ freezes marquee | ✅ nothing (correct) |
| Touch — link tap | ❌ requires 2 taps | ✅ works in 1 tap |
| `.ease-marquee-no-pause` | ✅ always runs | ✅ always runs |

## Acceptance Criteria

- [x] Marquee does not pause on tap on touch devices
- [x] Hover-pause still works on desktop
- [x] `.ease-marquee-no-pause` modifier unaffected
- [x] `prefers-reduced-motion` guard included