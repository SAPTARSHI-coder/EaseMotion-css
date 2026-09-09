# Engine Multi-Layer Keyframe Stagger Token

## What does this do?
Adds automated stagger index parsing `em="stagger-<step>ms-index-<n>"` to calculate delay timing automatically.

## How is it used?
```html
<div em="slide-up stagger-120ms-index-1">First Item</div>
<div em="slide-up stagger-120ms-index-2">Second Item</div>
```

## Why is it useful?
Saves developers from manually calculating and writing delay utility classes for sequentially animated items.
