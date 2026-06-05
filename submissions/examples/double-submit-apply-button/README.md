# Double Submit Apply Button

## What does this do?

This adds an animated job application button pattern that immediately enters a disabled loading state, then resolves to applied or already-applied states.

## How is it used?

```html
<button class="apply-lock-button" type="button">
  <span class="button-label">Apply Now</span>
</button>
```

When the request starts, disable the button and add the loading class before awaiting the network response:

```html
<button
  class="apply-lock-button is-loading"
  type="button"
  disabled
  aria-busy="true"
>
  <span class="button-label">Applying...</span>
</button>
```

Use `is-success` when the application is accepted and `is-duplicate` when the backend rejects a repeat application through a unique student-and-job guard.

## Why is it useful?

It fits EaseMotion CSS because the interaction communicates a real async state change with pure CSS motion: the first click visibly locks the control, the spinner confirms progress, and the final state makes duplicate prevention clear without relying on text alone.
