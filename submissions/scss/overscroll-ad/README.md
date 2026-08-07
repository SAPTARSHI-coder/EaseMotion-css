# Overscroll mixin

> Issue: [#63809](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63809)

Stops scroll chaining out of nested scroll areas, with the right containment strength per surface type.

## Mixins

### `overscroll-contain($axis)` — for lists, dropdowns, chat panels

Keeps the rubber-band bounce, which users read as "this is the end of the list".

### `overscroll-lock($axis)` — for modal surfaces

Suppresses the bounce too, so the page behind is never revealed.

### `scroll-region($max-height, $axis, $contain)`

A complete scrollable region with containment and a stable scrollbar gutter.

### `body-scroll-lock($selector)` — document-level lock while a modal is open

### `overscroll-snap-region($align, $padding)` — carousels and chip rows

## Why it fits EaseMotion

**Scroll chaining is almost always wrong in a nested region.** The user flicks to the bottom of a dropdown and the page behind it lurches. On iOS it is worse: the page scrolls *under* an open modal, and closing it leaves the user somewhere they never navigated to.

`overscroll-behavior: contain` fixes it in one declaration — so the reason this is a mixin is the surrounding detail.

**`contain` and `none` are not interchangeable.** `contain` stops the chain but keeps the bounce; `none` suppresses the bounce as well. For a list the bounce is useful feedback that you have hit the end. For a modal it is harmful, because bouncing the dialog surface reveals the page behind it and breaks the illusion that the dialog is a separate layer. Getting this backwards makes a modal feel broken on iOS specifically, which is easy to miss on desktop.

**`body-scroll-lock` deliberately avoids `position: fixed`.** The common lock sets `position: fixed` on the body — which collapses the scroll position to zero, so closing the modal returns the user to the *top of the page* rather than where they were. `overflow: hidden` plus `overscroll-behavior: none` locks scrolling while preserving position.

**`scrollbar-gutter: stable` is the quiet win.** Without it, a list that grows from 9 to 10 items gains a scrollbar and every row shifts sideways by its width — a layout jump caused by what should be an unrelated change. The same property on the locked body prevents the classic content shift when a modal opens and the page scrollbar disappears.
