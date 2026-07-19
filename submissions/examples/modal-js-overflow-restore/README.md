# modal.js Overflow Restore Fix

## What does this do?

Demonstrates the bug in `core/modal.js` where closing a modal runs
`body.style.overflow = ''`, which erases any inline overflow value that was
already on `<body>` before the modal opened.

## The problem

In `core/modal.js`:

```js
// Opening a modal — line 17
body.style.overflow = 'hidden';

// Closing a modal — line 33
body.style.overflow = '';  // ← always resets to empty string
```

Setting `overflow` to an empty string removes the inline style entirely,
regardless of what it was before. If anything else had already set
`body.style.overflow` (e.g. a sidebar toggle that locks scroll), closing
the modal silently clears it — breaking the sidebar behaviour with no
error or warning.

## Scenario that breaks

1. Sidebar opens → sets `body.style.overflow = 'hidden'` (locks page scroll)
2. User opens a modal → modal.js also sets `body.style.overflow = 'hidden'`
3. User closes the modal → modal.js runs `body.style.overflow = ''`
4. The sidebar's scroll lock is gone — page scrolls again even though the
   sidebar is still open

## The fix

Save the current `body.style.overflow` value before locking it, then restore
that saved value when closing instead of always resetting to `''`:

```js
function checkModal() {
  const hash = window.location.hash;
  const body = document.body;

  const overlays = document.querySelectorAll('.ease-modal-overlay');
  overlays.forEach((overlay) => overlay.classList.remove('is-active'));

  if (hash) {
    try {
      const escapedHashSelector = '#' + CSS.escape(hash.substring(1));
      const overlay = document.querySelector(escapedHashSelector + '.ease-modal-overlay');
      if (overlay) {
        // Save the current value before overwriting it
        if (typeof checkModal._savedOverflow === 'undefined') {
          checkModal._savedOverflow = body.style.overflow;
        }
        body.style.overflow = 'hidden';
        overlay.classList.add('is-active');
        const modal = overlay.querySelector('.ease-modal');
        if (modal) {
          modal.setAttribute('tabindex', '-1');
          modal.focus();
        }
        return;
      }
    } catch (e) {}
  }

  // Restore the saved value instead of always resetting to ''
  body.style.overflow = (typeof checkModal._savedOverflow !== 'undefined')
    ? checkModal._savedOverflow
    : '';
  delete checkModal._savedOverflow;
}
```

## Demo

The demo shows the broken and fixed behaviour side by side with step-by-step
buttons. Click through Steps 1, 2, and 3 in each panel to see what
`body.style.overflow` holds at each stage and whether it survives the modal
closing.
