# @starting-style Dialog and Popover Animation

Full open/close animation on `<dialog>` and the native Popover API using `@starting-style` + `transition: display allow-discrete`.

## Classes

| Selector | Effect |
|---|---|
| `dialog.ease-dialog` | Animated `<dialog>` — fade + slide entry, reverse on close |
| `#ease-popover[popover]` | Animated native popover via `:popover-open` + `@starting-style` |

## Usage

```html
<button onclick="document.querySelector('dialog.ease-dialog').showModal()">Open</button>

<dialog class="ease-dialog">
  <p>Content</p>
  <button onclick="this.closest('dialog').close()">Close</button>
</dialog>

<div id="my-popover" popover>Popover content</div>
<button popovertarget="my-popover">Toggle</button>
```

## How it works

- Entry: `@starting-style` defines the *from* state for the first paint after `display: none` → `display: block`
- Exit: `transition: display 0.3s allow-discrete` lets the element stay rendered for 300ms after losing `[open]`/`:popover-open` so the reverse transition plays before removal
- `::backdrop` gets its own `@starting-style` block for the overlay fade

Requires Chrome 117+ / Firefox 129+ / Safari 17.2+.

Closes #9603
