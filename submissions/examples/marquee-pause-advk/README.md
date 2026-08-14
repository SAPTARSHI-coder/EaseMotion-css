# Accessible Marquee

## What does this do?

A seamless scrolling ticker that pauses on hover and keyboard focus, and stops
completely under reduced motion.

## How is it used?

```html
<div class="mrq" tabindex="0" role="marquee" aria-label="Latest releases">
  <div class="mrq-track">
    <span>Item one</span><span>Item two</span>
    <span aria-hidden="true">Item one</span><span aria-hidden="true">Item two</span>
  </div>
</div>
```

Duplicate the item list and mark the copy `aria-hidden="true"`.

## Why is it useful?

`components/ease-marquee.css` scrolls continuously with no pause affordance.
WCAG 2.2.2 requires that any automatically-moving content lasting more than five
seconds can be paused — a ticker runs indefinitely, so it needs one.

Adding `:hover` alone is the common half-fix and it excludes keyboard users
entirely. Making the container focusable and pausing on `:focus-visible` too
means the content is reachable and stoppable without a pointer, which is the
actual requirement.

The seamless loop comes from translating exactly `-50%` of a track containing two
identical copies: at the end of the cycle the second copy sits precisely where the
first started, so the reset is invisible. The duplicate is `aria-hidden` so screen
readers announce the list once rather than twice.

Under reduced motion the track stops and wraps onto multiple lines instead of
scrolling, so every item stays readable rather than being clipped at the
container edge.
