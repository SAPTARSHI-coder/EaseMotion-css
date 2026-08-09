# Expanding Search

## What does this do?

A search field collapsed to a magnifier icon that widens into a full input on
focus, and stays open while it holds a value.

## How is it used?

```html
<form class="sxp" role="search">
  <label class="sxp-lbl" for="q">Search docs</label>
  <input class="sxp-in" id="q" type="search" placeholder="Search docs" />
  <span class="sxp-ico" aria-hidden="true"></span>
</form>
```

## Why is it useful?

The common version of this pattern hides the input behind a button and swaps it
in with JavaScript, which usually means focus is lost on expand and the field is
unreachable by keyboard until a script has run.

Here the input is always in the DOM and always focusable — expanding is purely a
`width` transition on `:focus-within`, so tabbing to the icon *is* tabbing to the
field. There is no focus management to get wrong.

Two details make it correct rather than merely pretty. A visually hidden `<label>`
provides the accessible name, because a placeholder is not a label and disappears
the moment the user types. And `:not(:placeholder-shown)` keeps the field open
while it contains text, so the search term never gets clipped back behind the icon
when focus moves away — a bug in most collapsing search implementations.

The magnifier is a bordered circle plus a rotated pseudo-element, so the component
needs no icon font, no SVG and no extra request.
