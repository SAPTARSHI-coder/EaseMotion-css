# overscroll-behavior Showcase

## What does this do?
A side-by-side visual demo of all three `overscroll-behavior` values (`auto`, `contain`, `none`), with CSS-animated indicators that activate on `:focus` to show what happens when the inner scroll reaches its boundary.

## How is it used?
Apply the value directly to any scrollable container:

```html
<!-- Scroll leaks to parent (default) -->
<div class="scroll-box box-auto" tabindex="0">...</div>

<!-- Scroll contained, no leak -->
<div class="scroll-box box-contain" tabindex="0">...</div>

<!-- No chain and no bounce -->
<div class="scroll-box box-none" tabindex="0">...</div>
```

## Why is it useful?
`overscroll-behavior` is the CSS-native fix for the modal scroll-chain problem — when scrolling a modal or sidebar causes the page behind it to also scroll. Developers commonly reach for JavaScript scroll-lock libraries when a single CSS property solves it. This demo makes the difference between `auto`, `contain`, and `none` visually explicit: the animated arrow (auto) shows scroll leaking out, the CONTAINED pulse (contain) shows the boundary being hit and stopped, and the hard-stop bar (none) shows scroll terminating with no bounce. Indicators are driven purely by the `:focus` state on the scroll box combined with the sibling `~` selector and `@keyframes` — no JavaScript.
