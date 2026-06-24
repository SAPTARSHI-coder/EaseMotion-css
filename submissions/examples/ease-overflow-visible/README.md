# ease-overflow-visible

Submission proposing `.ease-overflow-visible` utility class that sets `overflow: visible`.

## Class Reference

| Class                    | CSS Rule                       | Best Used For                                                       |
| ------------------------ | ------------------------------ | ------------------------------------------------------------------- |
| `.ease-overflow-visible` | `overflow: visible !important` | Override hidden/auto on a parent to allow content to render outside |

## Example

```html
<div class="ease-overflow-hidden">
  <div class="ease-overflow-visible">
    This content renders outside the parent.
  </div>
</div>
```

## Motivation

The existing overflow utilities (`ease-overflow-hidden`, `ease-overflow-auto`, `ease-overflow-scroll`) only set restrictive values. There's no way to explicitly reset overflow back to `visible` without custom CSS. This is needed when overriding a parent's overflow-hidden for dropdowns, tooltips, or modals.

@gssoc26
