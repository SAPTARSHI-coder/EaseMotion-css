# Back to Top

## What does this do?

A floating scroll-to-top button that reveals itself as the page scrolls, with no
scroll listener.

## How is it used?

```html
<a class="btt" href="#top" aria-label="Back to top"><span aria-hidden="true"></span></a>
```

```css
.btt {
  animation: btt-reveal linear both;
  animation-timeline: scroll(root block);
  animation-range: 0 100vh;
}
```

## Why is it useful?

The standard implementation adds a `scroll` listener, compares `scrollY` to a
threshold and toggles a class. Binding to a `scroll()` timeline instead removes
the listener entirely and, because progress is continuous, the button fades in
gradually rather than popping at a fixed offset.

Two accessibility details are handled that this pattern usually gets wrong.

The control is an `<a href="#top">`, not a button with a click handler, so it
works without JavaScript, appears in the tab order naturally, and gives keyboard
users a real focus target at the destination.

More importantly, `scroll-behavior: smooth` is switched back to `auto` under
`prefers-reduced-motion`. Smoothly animating the viewport across an entire
document is one of the largest motion events a page can produce, and it is a
common trigger for vestibular discomfort. Most implementations set smooth
scrolling globally and never reconsider it — here the jump is instant for users
who asked for less motion, which is the correct behaviour rather than a
degradation.
