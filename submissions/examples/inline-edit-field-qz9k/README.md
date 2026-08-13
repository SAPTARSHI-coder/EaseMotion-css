# Inline Edit Field

## What does this do?

A text value that becomes editable in place when clicked: Enter commits the
change, Escape cancels, and blurring the field (clicking away) commits like
Enter rather than silently discarding the edit.

## How is it used?

```html
<div class="ief-field" id="ief-title">
  <button type="button" class="ief-value" onclick="iefEdit(this.parentElement)">Q3 Roadmap</button>
  <input class="ief-input" type="text"
    onkeydown="iefKeydown(event, this.parentElement)"
    onblur="iefCommit(this.parentElement, false)" />
</div>
```

Both `.ief-value` and `.ief-input` occupy the same CSS grid cell
(`grid-area: 1 / 1`); toggling `.ief-editing` swaps their `visibility`
rather than swapping which element exists in the DOM, so the field never
reflows or jumps in width between modes.

## Why is it useful?

The riskiest part of an inline-edit pattern is what happens when focus
leaves the field unexpectedly — clicking a different part of the page,
tabbing away, or the user simply changing their mind mid-edit without
pressing a key. A version that only listens for Enter/Escape and does
nothing on blur leaves the field stuck in edit mode, or worse, silently
discards a real edit if blur is wired to cancel by default. Committing on
blur (treating "click away" the same as pressing Enter) matches what most
users expect: their typed value is applied, not thrown away, unless they
explicitly pressed Escape.

Keeping both elements permanently in the DOM (toggling `visibility`
instead of conditionally rendering) means the button and input share
identical box dimensions from the same grid cell, so there's no layout
shift the instant a user clicks to start editing.
