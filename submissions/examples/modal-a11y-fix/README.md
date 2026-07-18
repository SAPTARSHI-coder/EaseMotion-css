# ease-modal Accessible Close Button

**Fixes:** Issue #4232

## Problem

`.ease-modal-close` is an icon-only button (`×`). Without an accessible
name, screen readers (NVDA, VoiceOver, JAWS) announce only **"button"**
with no context. Users cannot tell what the button does.

## Fix

Add `aria-label="Close dialog"` to every `.ease-modal-close` element.
This is an **HTML requirement** — CSS cannot provide accessible names.

```html
<!-- ❌ Before — screen reader says: "button" -->
<button class="ease-modal-close">×</button>

<!-- ✅ After — screen reader says: "Close dialog, button" -->
<button class="ease-modal-close" aria-label="Close dialog">×</button>
```

## Full Accessible Modal Pattern

For a fully accessible modal, three attributes are required on the
dialog container:

| Attribute | Value | Purpose |
|---|---|---|
| `role` | `"dialog"` | Identifies the element as a dialog to screen readers |
| `aria-modal` | `"true"` | Prevents SR from reading content behind the modal |
| `aria-labelledby` | ID of heading | Links the dialog to its visible title |

```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  class="ease-modal"
>
  <h2 id="modal-title">Confirm Action</h2>
  ...
  <button class="ease-modal-close" aria-label="Close dialog">×</button>
</div>
```

## Additional a11y Requirements

- Close on `Escape` key (JS)
- Close on backdrop click (JS)
- Visible `:focus-visible` outline on the close button (included in `style.css`)
- Focus should return to the trigger button after modal closes

## Acceptance Criteria

- [x] `aria-label="Close dialog"` present in `demo.html`
- [x] `role="dialog"` and `aria-labelledby` documented and used
- [x] `aria-modal="true"` included
- [x] Escape key closes the modal
- [x] Visible focus ring on close button