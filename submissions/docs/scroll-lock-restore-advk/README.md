# Non-destructive Scroll Lock

## What does this do?

Demonstrates a modal scroll lock that saves and restores the host page's
existing inline `overflow` value instead of blanking it.

## How is it used?

The page presets `body { overflow: clip }` inline, as an app shell might. Press
each button and watch the readout: the clobbering path loses `clip`, the
restoring path keeps it.

```js
let saved = null;
function lock()   { saved = document.body.style.overflow; document.body.style.overflow = 'hidden'; }
function unlock() { document.body.style.overflow = saved ?? ''; saved = null; }
```

## Why is it useful?

`core/modal.js` sets `body.style.overflow = 'hidden'` when a modal opens and
then unconditionally runs `body.style.overflow = ''` on every path where no
active modal is found — including the very first `checkModal()` call on page
load, before any modal has ever opened.

That means simply loading a page with EaseMotion's modal script clears any
inline `overflow` the host application set on `<body>`. Apps that pin scroll for
a drawer, a full-bleed canvas, or their own scroll container silently lose that
style, and the symptom (a page that scrolls when it should not) appears far from
the cause.

Saving the prior value and writing it back keeps the framework a good citizen in
pages it does not own — the same discipline EaseMotion already applies by
namespacing every class with `ease-`. The lock also becomes safely re-entrant,
which matters once more than one overlay can be open across a session.
