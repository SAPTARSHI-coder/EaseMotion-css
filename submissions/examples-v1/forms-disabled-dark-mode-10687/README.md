# Form Disabled Dark Mode Fix — Issue #10687

**Fixes:** #10687

## What does this do?

Fixes the dark mode visual hierarchy for disabled form inputs. The current
dark mode override uses a background token that is lighter than the enabled
input background, making disabled fields look more prominent than enabled
ones. This fix uses a darker token and resets the inherited opacity.

## The problem

`components/forms.css` dark mode block:

```css
@media (prefers-color-scheme: dark) {
  .ease-input:disabled,
  .ease-textarea:disabled,
  .ease-select:disabled {
    background-color: var(--ease-color-neutral-800, #1e293b); /* lighter than surface */
    border-color: var(--ease-color-neutral-700, #334155);
    /* opacity: 0.8 inherited from base disabled rule */
  }
}
```

In dark mode:
- Enabled input background: `--ease-color-surface` = `#141e33`
- Disabled input background: `--ease-color-neutral-800` = `#1e293b`

`#1e293b` is lighter than `#141e33`. Disabled looks more prominent than
enabled — the opposite of what "disabled" should communicate.

The `opacity: 0.8` inherited from the base rule makes the disabled field
even lighter by blending the `#1e293b` background with the dark page.

## The fix

```css
@media (prefers-color-scheme: dark) {
  .ease-input:disabled,
  .ease-textarea:disabled,
  .ease-select:disabled {
    background-color: var(--ease-color-neutral-900, #0f172a);
    border-color: var(--ease-color-neutral-700, #334155);
    opacity: 1;
  }
}
```

`--ease-color-neutral-900` (`#0f172a`) is darker than `--ease-color-surface`
(`#141e33`) — disabled is correctly more muted than enabled.

`opacity: 1` resets the inherited `opacity: 0.8`. On a light background
the opacity fade communicates "muted", but on an already-dark surface it
only makes the element appear lighter (by blending with the dark page
background behind it), which is the wrong direction.

## Before vs after in dark mode

| | Enabled | Disabled | Relationship |
|---|---|---|---|
| Before | `#141e33` | `#1e293b` at 80% | Disabled is lighter ❌ |
| After | `#141e33` | `#0f172a` at 100% | Disabled is darker ✅ |

## Demo

Enable dark mode in Chrome DevTools → More Tools → Rendering →
prefers-color-scheme: dark. The Broken section shows the disabled input
appearing brighter than the enabled one. The Fixed section shows the
correct darker/more-muted appearance.
