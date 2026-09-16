# Modal Focus Restore

## What does this do?

Shows the correct way to record and restore the element that opened a modal, so
closing the dialog always returns focus to the control the user activated.

## How is it used?

Open `demo.html`, tab to the button, press Enter, then close with `Esc`. The
status line reports which element focus was restored to.

```js
// only capture on a genuine closed -> open transition
if (!overlay.classList.contains('is-active')) {
  previousFocusedElement = document.activeElement;
}
overlay.classList.add('is-active');
```

## Why is it useful?

`core/modal.js` assigns `previousFocusedElement = document.activeElement`
unconditionally, *before* adding `is-active`. It then re-checks
`if (!overlay.classList.contains('is-active'))` — but that guard runs after the
class was already added, so it is never true and never protects anything.

`checkModal()` is bound to `hashchange`. Any second hashchange while the dialog
is open — an in-dialog anchor, a router update, a back-button step between two
modal hashes — re-runs the handler with focus already inside the dialog. The
opener reference is overwritten with the dialog itself. On close the code then
calls `.focus()` on a node inside a container that was just hidden, so focus
falls back to `<body>` and keyboard users lose their place in the page.

Restoring focus to the invoking element is a WCAG 2.4.3 (Focus Order)
expectation, and it is the difference between a dialog that is usable by
keyboard and one that silently dumps the user at the top of the document. The
fix is to move the capture ahead of the state change and gate it on the actual
transition.
