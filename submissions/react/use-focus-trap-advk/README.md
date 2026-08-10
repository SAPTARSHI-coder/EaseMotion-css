# useFocusTrap

A React hook that confines Tab navigation within a container and restores focus
when it deactivates.

## API

```js
const ref = useFocusTrap(isOpen);
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `active` | `boolean` | `true` | Whether the trap is engaged. |

Returns a ref to attach to the containing element.

## Usage

```jsx
import useFocusTrap from './useFocusTrap';

function Drawer({ open, onClose }) {
  const ref = useFocusTrap(open);
  if (!open) return null;
  return (
    <div ref={ref} role="dialog" aria-modal="true" aria-label="Filters">
      <button onClick={onClose}>Close</button>
    </div>
  );
}
```

## Why it fits EaseMotion CSS

`core/modal.js` implements a Tab trap inline, and the audit of that file found a
focus-restore bug where the opener reference is overwritten while the dialog is
open. Extracting the pattern makes it fixable in one place rather than
reimplemented per overlay.

Two details separate a working trap from a broken one.

The focusable list is queried **on every keypress**, not cached on mount. A cached
list goes stale as soon as content changes — a dialog that reveals a second step,
or enables a previously disabled submit button, ends up with a trap that skips the
new controls or tries to focus removed ones.

Restoration checks `document.contains(prev)` before focusing. Restoring to a node
React has already unmounted silently sends focus to `<body>`, dropping the
keyboard user at the top of the page — the same class of bug found in
`core/modal.js`.

The listener uses capture phase so it sees Tab before content inside the container
can stop propagation, and `offsetParent` filtering skips hidden elements that
would otherwise become invisible tab stops.
