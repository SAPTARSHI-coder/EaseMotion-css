# Multi-Expand Accordion

## What does this do?

An FAQ-style accordion where any number of panels can be open at once,
built from independent `<details>` elements with no JavaScript needed to
coordinate their open/closed state.

## How is it used?

```html
<div class="ame-list">
  <details class="ame-item" open>
    <summary class="ame-sum">Question one<span class="ame-chevron" aria-hidden="true"></span></summary>
    <div class="ame-panel"><p>Answer one.</p></div>
  </details>
  <details class="ame-item">
    <summary class="ame-sum">Question two<span class="ame-chevron" aria-hidden="true"></span></summary>
    <div class="ame-panel"><p>Answer two.</p></div>
  </details>
</div>
```

Any item can carry the `open` attribute independently; there's no grouping
mechanism linking the `<details>` elements to each other.

## Why is it useful?

A single-open accordion (only one panel visible at a time) is often built
from radio inputs sharing one `name`, which structurally *enforces*
mutual exclusivity — selecting one radio deselects all others in the group.
That's the wrong foundation for an FAQ page, where a visitor scanning
several relevant questions should be able to keep multiple answers open
simultaneously for comparison, rather than having each newly-opened answer
force-close whatever they had open before. Plain `<details>` elements have
no such grouping by default, so multi-expand is simply what happens when
nothing artificially links them — no JS state management, no radio-group
workaround, and no risk of the "only one open" behavior being
half-implemented and buggy.

The chevron rotates via a CSS attribute selector (`.ame-item[open]
.ame-chevron`) reading the same `open` attribute that already drives the
browser's native show/hide behavior — one native, no-JS toggle produces
both the content reveal and the icon rotation, kept in sync by
construction rather than by a script watching for changes.
