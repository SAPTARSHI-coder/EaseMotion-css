# [BUG FIX] .ease-card-hover scale conflicts with child .ease-btn-hover

## What does this do?

Resolves double lift translation conflicts by dampening or canceling inner translations when the parent element is hovered.

## How is it used?

```html
.card:hover .btn:hover { transform: none; }
```

## Why is it useful?

Implements clean transform isolation rules for nested components.

## Fixes

Fixes #9867
