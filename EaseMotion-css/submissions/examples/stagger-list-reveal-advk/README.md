# Stagger List Reveal

## What does this do?

Reveals list rows one after another using a single `--slr-step` custom property
on the container and an index `--i` on each row — no per-item selectors, no JS.

## How is it used?

```html
<ul class="slr-list is-in" style="--slr-step: 70ms">
  <li class="slr-item" style="--i:0"><span class="slr-dot"></span>First</li>
  <li class="slr-item" style="--i:1"><span class="slr-dot"></span>Second</li>
  <li class="slr-item" style="--i:2"><span class="slr-dot"></span>Third</li>
</ul>
```

Change the cascade speed by editing one value; add rows by incrementing `--i`.

## Why is it useful?

Staggered entrances are normally written as a stack of
`:nth-child(n) { animation-delay: ... }` rules, which caps the list at whatever
count the author hard-coded and bloats the stylesheet. Moving the multiplication
into `calc(var(--i) * var(--slr-step))` makes the delay a function of data
rather than of selector position, so a server-rendered list of any length works
with the same two rules.

That is a good fit for EaseMotion's stated goals: the markup stays readable
(`--i:3` says exactly what it means), the effect is composable with the existing
`ease-*` entrance utilities, and it costs no JavaScript.

The reduced-motion path is designed rather than disabled — the sequence is kept
so the eye still tracks the order of items, but translation and the spring
overshoot are dropped in favour of a shorter plain fade, and the step is tightened
from 70ms to 40ms so the whole list settles quickly.
