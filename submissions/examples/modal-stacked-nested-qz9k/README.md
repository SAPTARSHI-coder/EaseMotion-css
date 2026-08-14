# Stacked Nested Modals

## What does this do?

Two nested confirmation dialogs (settings → delete-account confirmation)
where Escape closes only the topmost open modal, and focus returns to
whatever specifically opened it — not to a fixed "return to page" target.

## How is it used?

```html
<button onclick="msnOpen('msn-dialog-1')">Open settings</button>
<div class="msn-dialog" id="msn-dialog-1" role="dialog" aria-modal="true" hidden>
  <button onclick="msnOpen('msn-dialog-2')">Delete account</button>
  <button class="msn-close" onclick="msnClose()">Close</button>
</div>
<div class="msn-dialog" id="msn-dialog-2" role="dialog" aria-modal="true" hidden>...</div>
```

`msnStack` is a real array of `{ dialog, lastFocused }` pairs; `msnOpen`
pushes onto it, `msnClose` pops the top entry and restores focus to that
specific entry's `lastFocused` — not a single shared variable, which
would only be able to remember one previous focus target regardless of
stack depth.

## Why is it useful?

A single modal's focus trap only needs to remember one thing: what was
focused before it opened. Nested modals need a genuine stack, because each
layer's "what to restore focus to" is different, and depends on how deep
in the nesting that specific layer sits — closing the delete-confirmation
dialog should return focus to the "Delete account" button inside the
settings dialog (not to whatever was focused on the page before settings
ever opened), and only closing settings itself should return focus that
far back. A single `lastFocused` variable, overwritten each time a new
modal opens, can only ever restore to the *most recently* opened modal's
prior focus — it has no way to represent "restore to modal 1's prior focus"
once modal 2 has also opened and overwritten that variable.

Escape closing only the topmost modal (via `msnStack.pop()`, not clearing
the whole stack) matters for the same layered reason: a user who opened
settings then a delete confirmation, and presses Escape once, expects to
back out one level — remaining on the settings dialog — not to be dropped
straight back to the page with both dialogs closed at once.
