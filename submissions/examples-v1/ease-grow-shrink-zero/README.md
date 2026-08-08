# ease-grow-shrink-zero

Submission proposing `.ease-grow-0` and `.ease-shrink-0` utility classes that explicitly set `flex-grow: 0` and `flex-shrink: 0`.

## Class Reference

| Class            | CSS Rule         | Best Used For                      |
| ---------------- | ---------------- | ---------------------------------- |
| `.ease-grow`     | `flex-grow: 1`   | Allow element to grow (existing)   |
| `.ease-grow-0`   | `flex-grow: 0`   | Prevent element from growing       |
| `.ease-shrink`   | `flex-shrink: 1` | Allow element to shrink (existing) |
| `.ease-shrink-0` | `flex-shrink: 0` | Prevent element from shrinking     |

## Example

```html
<div class="ease-flex">
  <div class="ease-shrink-0">Fixed width sidebar</div>
  <div class="ease-grow">Takes remaining space</div>
</div>
```

## Motivation

The existing `ease-grow` and `ease-shrink` utilities set values to 1, but there's no way to explicitly prevent grow or shrink without custom CSS. Adding `ease-grow-0` and `ease-shrink-0` completes the flex-grow/shrink utility set, matching patterns in utility-first frameworks.

@gssoc26
