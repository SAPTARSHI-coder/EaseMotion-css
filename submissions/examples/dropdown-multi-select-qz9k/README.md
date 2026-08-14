# Multi-Select Dropdown

## What does this do?

A tag filter dropdown whose closed trigger summarizes the current
selection — the single tag's name, or a count once more than one tag is
checked — computed live from the checked checkboxes rather than tracked as
separate state.

## How is it used?

```html
<button class="dms-trigger" onclick="dmsToggle()" aria-expanded="false" aria-haspopup="true">
  <span id="dms-trigger-label">Filter by tag</span>
</button>
<div class="dms-panel" id="dms-panel" hidden>
  <label class="dms-option"><input type="checkbox" value="Bug" onchange="dmsUpdate()" /> Bug</label>
  <!-- ... -->
</div>
```

`dmsUpdate` queries `.dms-option input:checked` directly and derives the
trigger's label from that live count — there's no separate array or object
tracking "which tags are selected" that the checkboxes' actual state has
to be kept in sync with.

## Why is it useful?

A common implementation tracks selected tags in a separate JS array,
updated in the checkbox change handler, with the trigger label rendered
from that array — which means the array and the checkboxes' actual
`checked` state are two representations of the same information that have
to be kept in sync by hand. Deriving the trigger label by querying
`:checked` directly at the moment it's needed means there's only one
source of truth (the checkboxes' own native state), so there's no failure
mode where the array gets out of sync with what's actually checked (a
missed update on one code path, a checkbox toggled through some other
means that doesn't also update the array).

The dropdown panel stays a real, always-present list of labeled
`<input type="checkbox">` elements rather than custom-drawn toggle chips
with a JS-managed `selected` class — native checkboxes bring keyboard
activation (Space), correct checked/unchecked screen-reader announcement,
and Tab-order navigation through the options for free, leaving only the
open/close behavior and the trigger's summary label as custom logic.
