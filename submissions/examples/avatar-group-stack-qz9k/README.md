# Avatar Group Stack

## What does this do?

A stack of overlapping avatars (assignee list, participant group) where
each avatar's resting stacking order is set via `:nth-last-child` rather
than a hard-coded `z-index` per item, and hovering any avatar brings it
fully to the front.

## How is it used?

```html
<ul class="ags-group">
  <li class="ags-avatar" style="background: #4c6ef5">RK</li>
  <li class="ags-avatar" style="background: #34a853">CJ</li>
  <li class="ags-avatar ags-avatar--overflow">+5</li>
</ul>
```

Each avatar overlaps the previous one via negative `margin-left`;
`:nth-last-child(N)` assigns `z-index: N` counting from the *end* of the
list, so the first avatar in source order (last in the `nth-last-child`
count) sits on top at rest — the conventional "leftmost avatar is
frontmost" stacking order.

## Why is it useful?

A hard-coded `z-index` per avatar (`.avatar:nth-child(1) { z-index: 5; }`,
`.avatar:nth-child(2) { z-index: 4; }`, ...) works but has to be
re-derived by hand every time an avatar is added, removed, or the group's
maximum size changes — the numbers only stay correct as long as someone
remembers to update them in lockstep with the list. `:nth-last-child`
counts automatically from whichever end of the list is currently present,
so the same five fixed CSS rules correctly stack any list with up to five
items without ever needing new numbers written for a different count (a
group of three avatars still gets correctly-ordered `z-index` from the
matching `nth-last-child(1)` through `(3)` rules, with the unused
`(4)`/`(5)` rules simply not matching anything).

`transition: transform 160ms ease, z-index 0s` deliberately gives
`z-index` a zero-duration transition — `z-index` isn't a value that can be
meaningfully interpolated over time, so if left un-transitioned it would
otherwise inherit whatever duration the shorthand `transition: all`
elsewhere might imply, which can produce a brief, visually confusing
stacking-order flicker mid-hover in some engines.
