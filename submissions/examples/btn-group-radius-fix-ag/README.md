# [BUG FIX] .ease-btn-group border radius breaks with mixed height buttons

## What does this do?
Fixes border-radius distortion in button groups containing different height buttons by enforcing stretch layout and targeted child border resets.

## How is it used?
```html
<div class="btn-group"><button>A</button><button>B</button></div>
```

## Why is it useful?
Corrects broken visual designs in button group utilities.

## Fixes
Fixes #9854
