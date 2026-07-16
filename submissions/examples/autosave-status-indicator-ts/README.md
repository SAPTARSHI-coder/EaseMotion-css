# Autosave Status Indicator

## What does this do?

A compact, animated status chip that communicates the current autosave state of a document or form. It supports five states — saving, saved, offline, retrying, and error — each with a distinct colour, a status dot, and a subtle motion treatment. The state is expressed through a single modifier class on the chip element, so no JavaScript is required to style it.

## How is it used?

Add `.autosave-status` to any inline element, then append a state modifier class. Inside, place a `.autosave-dot` span (for the animated indicator) and the label text.

```html
<!-- Saving -->
<div class="autosave-status is-saving" role="status" aria-live="polite" aria-label="Saving changes">
  <span class="autosave-dot" aria-hidden="true"></span>
  Saving…
</div>

<!-- Saved -->
<div class="autosave-status is-saved" role="status" aria-live="polite" aria-label="All changes saved">
  <span class="autosave-dot" aria-hidden="true"></span>
  Saved
</div>

<!-- Offline -->
<div class="autosave-status is-offline" role="status" aria-live="polite" aria-label="Offline, changes queued">
  <span class="autosave-dot" aria-hidden="true"></span>
  Offline
</div>

<!-- Retrying -->
<div class="autosave-status is-retrying" role="status" aria-live="polite" aria-label="Retrying to save">
  <span class="autosave-dot" aria-hidden="true"></span>
  Retrying…
</div>

<!-- Error -->
<div class="autosave-status is-error" role="status" aria-live="polite" aria-label="Failed to save">
  <span class="autosave-dot" aria-hidden="true"></span>
  Failed to save
</div>
```

State modifier classes:

| Class | Colour | Motion |
|---|---|---|
| `is-saving` | Indigo | Spinning ring on dot |
| `is-saved` | Green | Pop entrance on dot |
| `is-offline` | Slate grey | Static dimmed dot |
| `is-retrying` | Amber | Slower spinning ring |
| `is-error` | Red | Horizontal shake on dot |

Size variants: add `is-sm` or `is-lg` to adjust the chip size.

Inline/bare variant: add `is-inline` to remove the pill background and border (for use inside dense toolbars or form headers where a full chip feels heavy).

In a real integration, swap the modifier class via JavaScript when your autosave callback fires:

```js
var chip = document.querySelector('.autosave-status');
['is-saving', 'is-saved', 'is-offline', 'is-retrying', 'is-error'].forEach(s => chip.classList.remove(s));
chip.classList.add('is-saved');
```

## Why is it useful?

Autosave feedback appears in editors, forms, dashboards, and collaboration tools. Most implementations either ignore it entirely or show a plain text string with no motion context. This component shows how subtle, purposeful animation — a spinning indicator ring while saving, a pop when saved, a shake on error — can reassure users that their work is being handled without demanding attention. The five distinct states cover the real lifecycle of a network-backed save, including the offline and retry cases that often go unstyled. Dark mode is handled via `prefers-color-scheme` and `prefers-reduced-motion` freezes all animations while keeping the chip fully visible and readable.
