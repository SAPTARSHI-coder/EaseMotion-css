# sr-live-region-advk

Sass mixins for `aria-live` regions: a visually-hidden variant for
screen-reader-only announcements, and a visible variant for status messages
that should also be seen.

## Usage

```scss
@use 'sr-live-region' as *;

.status-announcer {
  @include sr-live-region;
}

.save-toast {
  @include sr-live-region-visible($bg: #34a853, $color: #fff);
}
```

```html
<div class="status-announcer" aria-live="polite">Cart updated: 3 items</div>
```

## Why is it useful?

An `aria-live` region only announces reliably if it's present in the DOM
*before* its content changes — inserting a brand-new element with text
already inside it is inconsistently announced across screen readers, since
many only watch for mutations to an already-registered live region. It also
needs to actually occupy layout space in the accessibility tree: some
combinations of screen reader and browser skip announcing content inside an
element with `display: none` or `visibility: hidden`, which is why this
mixin uses the `position: absolute` + 1px-clip technique instead of either
of those — the region stays perceivable to assistive tech while
contributing no visible layout.

The `-visible` variant exists because not every live region should be
invisible: a "Saved" toast benefits from being both seen and announced, and
that needs ordinary visible styling rather than the clip technique, which
would hide it from sighted users entirely.
