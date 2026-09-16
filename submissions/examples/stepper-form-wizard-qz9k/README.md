# Form Wizard

## What does this do?

A multi-step signup form where advancing to the next step validates the
current step's fields using the browser's own constraint validation
(`:invalid`, `reportValidity()`) rather than a hand-rolled validation
message, and every step's fields stay mounted with their values retained
when navigating back and forth.

## How is it used?

```html
<fieldset class="sfw-panel sfw-panel--active" data-step="0">
  <input id="sfw-email" type="email" required />
</fieldset>
<fieldset class="sfw-panel" data-step="1">...</fieldset>
```

```js
function sfwGo(delta) {
  // ...
  if (delta > 0 && !sfwValidate(current)) return;
  // ... swap .sfw-panel--active
}

function sfwValidate(panel) {
  var invalid = panel.querySelector(':invalid');
  if (invalid) { invalid.reportValidity(); return false; }
  return true;
}
```

## Why is it useful?

A multi-step form's validation is easy to under-build: checking `value !==
''` manually for each required field re-derives constraint logic the
browser already provides natively (via `required`, `minlength`, `type`)
and misses the built-in error UI users already recognize —
`reportValidity()` shows the browser's own inline error bubble pointing at
the specific invalid field, styled consistently with how validation
already looks everywhere else on the page, rather than a custom message the
form author has to design and place. Using `:invalid` to find the first
failing field within the current step (rather than validating the whole
form at once, which would fail on later, not-yet-visited steps) keeps
validation scoped correctly to what the user can actually see and fix.

Keeping every step's `<fieldset>` permanently in the DOM (only toggling
`display: none` via `.sfw-panel--active`) rather than conditionally
rendering the current step's markup means field values persist
automatically across navigation — the browser's native form state does the
work, so there's no separate JS state object mirroring each field's value
that could fall out of sync with what's actually typed.
