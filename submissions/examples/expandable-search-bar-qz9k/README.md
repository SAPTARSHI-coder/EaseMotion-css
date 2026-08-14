# Expandable Search Bar

## What does this do?

A search icon that expands into a text field on click, collapsing back to
an icon on blur — but only if the field is empty. A non-empty query stays
visually expanded even without focus, so clicking elsewhere to interact
with search results doesn't hide the query the results are for.

## How is it used?

```html
<div class="esb-bar" id="esb-bar">
  <button class="esb-toggle" onclick="esbOpen(this)" aria-expanded="false" aria-controls="esb-input">🔍</button>
  <input type="search" id="esb-input" class="esb-input" onblur="esbClose(this)" onkeydown="esbKeydown(event)" />
</div>
```

`esbClose` checks `input.value.trim()` before collapsing — an empty field
collapses on blur, a field with text stays expanded. `Escape` explicitly
clears the field and forces a collapse, giving users a deliberate way to
exit search regardless of whether they've typed something.

## Why is it useful?

A version of this pattern that collapses unconditionally on blur has an
awkward interaction: type a query, then click a result or scroll to read
something else on the page, and the search bar collapses back to a bare
icon — visually discarding the query that's still active, even though
nothing about the search itself was cancelled. Checking whether the field
has content before collapsing keeps an active search visibly represented
on screen for as long as it's actually in effect, and only auto-collapses
the empty, "nothing was typed" case where hiding it back to an icon is
genuinely just tidying up unused UI.

`Escape` is handled as an explicit override regardless of content, since a
keyboard user pressing Escape is unambiguously signaling "I want to exit
search now" — deferring to the emptiness check there as well would trap a
user with typed-but-abandoned text in an expanded state they have no
single-keypress way out of.
