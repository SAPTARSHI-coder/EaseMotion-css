# [BUG FIX] .ease-modal-slide modal-slide closed state opacity

## What does this do?
Resolves opacity flashes during slide-in transitions on modals.

## How is it used?
```html
<div class="ease-modal-slide">Content</div>
```

## Why is it useful?
Corrects entrance visibility sequence for sliding layout overlays.

## Fixes
Fixes #10934
