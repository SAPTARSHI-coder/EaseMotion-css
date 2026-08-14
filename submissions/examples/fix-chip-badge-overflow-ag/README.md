# Fix Chip and Badge Text Overflow

## What does this do?
Adds text truncation rules to `.ease-chip` and `.ease-badge` components to prevent long dynamic text from breaking layouts.

## How is it used?
```html
<span class="ease-chip">Short Label</span>
<span class="ease-chip">This is an extremely long label that would normally overflow</span>
<span class="ease-badge ease-badge--primary">New Badge</span>
```

## Why is it useful?
In real applications, chip and badge text often comes from APIs or user input and can be unexpectedly long. Without truncation rules, these components grow unbounded and push sibling elements out of alignment. This fix constrains them with `overflow: hidden`, `text-overflow: ellipsis`, and `white-space: nowrap`, keeping layouts intact. Fixes #32713.
