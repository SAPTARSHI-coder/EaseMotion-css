# Tree View with Cascading Checkboxes

## What does this do?

A file/folder tree where checking a parent checkbox cascades the check
state down to every descendant, and checking or unchecking a leaf
propagates back up — setting an ancestor to `indeterminate` when only some
of its children are checked.

## How is it used?

```html
<li class="tvc-node">
  <label class="tvc-label"><input type="checkbox" class="tvc-check" onchange="tvcParentChange(this); tvcChildChange(this)" /> components/</label>
  <ul class="tvc-children">
    <li class="tvc-node"><label class="tvc-label"><input type="checkbox" class="tvc-check" onchange="tvcChildChange(this)" /> Button.jsx</label></li>
  </ul>
</li>
```

A node with children calls both `tvcParentChange` (cascade down to its own
descendants) and `tvcChildChange` (propagate its new state up to its
ancestors) on change; a leaf node only ever needs `tvcChildChange`, since it
has no descendants to cascade to.

## Why is it useful?

Cascading tree checkboxes are a genuinely two-directional problem — a
change anywhere in the tree can require both propagating downward
(checking a folder checks everything inside it) and upward (checking every
file in a folder should check the folder itself; checking only some should
mark it indeterminate) — and it's easy to implement only one direction and
call it done, which leaves the other direction stale (checking all files
individually doesn't visually check their parent folder, or checking a
folder doesn't visually check its files). Splitting the two directions into
separate functions (`tvcParentChange` walks down, `tvcChildChange` walks
up) keeps each one simple — a single loop over immediate children in each
case — rather than one recursive function trying to handle both directions
from a single change event, which tends to produce update-order bugs where
a cascade in one direction interferes with a cascade already in progress in
the other.

`checkbox.indeterminate` is a real DOM property (not reflected as an HTML
attribute, only settable via JS) representing the "some but not all
children checked" state — using it here means the visual dash-in-box
indeterminate rendering comes from the browser's own native checkbox
styling, not a custom CSS-drawn substitute that would need to be kept in
sync with the actual selection state by hand.
