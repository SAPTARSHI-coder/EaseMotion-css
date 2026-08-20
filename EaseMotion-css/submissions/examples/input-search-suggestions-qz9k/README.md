# Search with Recent Suggestions

## What does this do?

A search field that shows recent searches immediately on focus (before
typing anything), then narrows the list to matches as the user types —
with a suggestion panel that survives a click on one of its own items
without the input's blur handler hiding it first.

## How is it used?

```html
<input id="iss-input" type="search" onfocus="issFocus(this)" oninput="issInput(this)" onblur="issBlur()" />
<div class="iss-panel" id="iss-panel" hidden></div>
```

`issBlur` delays hiding the panel by 150ms via `setTimeout` rather than
hiding it immediately on the input's `blur` event.

## Why is it useful?

Clicking a suggestion in the panel causes the input to lose focus (`blur`)
*before* the click's own `click` event fires — that's the DOM's actual
event order for a pointer interaction that moves focus away from a
focused element. If `blur` hides the panel synchronously, the panel (and
the button being clicked) can be removed from the DOM or hidden before the
click event has a chance to complete, silently breaking "click a
suggestion to select it." Delaying the hide by a short `setTimeout` gives
the click event's own handler time to run first — a small, deliberate
race condition resolved in favor of the click completing, rather than the
blur hiding winning outright.

Showing recent searches on focus (not waiting for the first keystroke)
matters because a search field with prior activity has useful information
to offer *before* the user types anything — a blank field with no
suggestions until typing starts wastes the opportunity to remind the user
what they've searched for before, especially useful for a returning
search they want to repeat exactly. Each suggestion is a real `<button>`,
not a clickable `<div>`, since only a real interactive element reliably
fires a `click` event in every browser/input-method combination the panel
needs to support (touch, mouse, and — for the item itself — potentially
keyboard navigation into the panel).
