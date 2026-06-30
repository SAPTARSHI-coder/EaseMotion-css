# [BUG FIX] .ease-badge clipped inside overflow:hidden elements

## What does this do?

Fixes badge clipping issues in rounded/overflow-hidden containers by implementing positioning offsets that stay inside boundaries or proposing structural containers.

## How is it used?

```html
<div class="card"><span class="badge">9+</span></div>
```

## Why is it useful?

Prevents badge notification counters from being cut off by CSS overflow boundaries.

## Fixes

Fixes #9851
