# Off-canvas Drawer

## What does this do?

A slide-in filter panel opened with `:target`, where the panel, the backdrop and
the list items each enter on their own timing.

## How is it used?

```html
<a class="drw-open" href="#drawer">Open drawer</a>

<div class="drw" id="drawer">
  <a class="drw-scrim" href="#" aria-label="Close drawer"></a>
  <aside class="drw-panel" role="dialog" aria-modal="true" aria-labelledby="drw-t">
    <h2 id="drw-t">Filters</h2>
    <ul class="drw-list"><li style="--i:0">Availability</li></ul>
  </aside>
</div>
```

## Why is it useful?

Drawers are usually the first thing a project reaches for a JavaScript library
to build, but the open/closed state is a single boolean that `:target` already
expresses — and `:target` survives the back button, which hand-rolled state does
not.

The detail worth copying is the asymmetric timing. Giving the panel a
decelerating curve while the scrim gets a plain fade with a 60ms delay on the way
out makes the panel feel like the thing being moved and the scrim like a
consequence of it. Running both on identical timing is what makes most drawers
feel flat, and it costs nothing to fix.

The list items stagger in behind the panel using the same `--i` custom-property
pattern used elsewhere in these submissions, starting after the panel is mostly
open so the content is not sliding while its container is still moving.

`visibility: hidden` on the closed container rather than `display: none` keeps
the panel out of the tab order while still allowing the transform transition to
run — `display` changes are not transitionable and would make the panel jump.
