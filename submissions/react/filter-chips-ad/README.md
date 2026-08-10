# FilterChips — removable filter chips

> Issue: [#63824](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63824)

A removable filter chip row with correct focus handling after deletion.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `chips` | `Array<{ id, label, group? }>` | `[]` | Active filters. Renders `null` if empty. |
| `onRemove` | `(id) => void` | — | Called with the removed chip's id. |
| `onClearAll` | `() => void` | — | Enables the clear-all control. |
| `clearAllAfter` | `number` | `2` | Chips required before clear-all appears. |
| `label` | `string` | `'Active filters'` | Accessible group name. |
| `className` | `string` | `''` | Merged onto the root. |

## Keyboard

| Key | Action |
|---|---|
| <kbd>←</kbd> / <kbd>→</kbd> | Move between chips |
| <kbd>Backspace</kbd> / <kbd>Delete</kbd> | Remove the focused chip |

## Usage

```jsx
import FilterChips from './FilterChips';
import './style.css';

<FilterChips
  chips={[
    { id: 'st-open', group: 'Status', label: 'Open' },
    { id: 'ow-me', group: 'Owner', label: 'Me' },
  ]}
  onRemove={(id) => setFilters((f) => f.filter((x) => x.id !== id))}
  onClearAll={() => setFilters([])}
/>
```

## Why it fits EaseMotion

**Focus after removal is what makes or breaks this component.** Deleting a chip destroys the element that had focus, so focus falls to `<body>` — a keyboard user is dumped at the top of the page mid-task, with nothing indicating what happened.

The fix is not simply "focus something". Focus moves to the **next** chip, or to the **previous** one when the last was removed, or to the **clear-all** control when none remain. That mirrors how the user was moving through the list and preserves their position. It is deferred a frame so the target exists after React has re-rendered.

**Removals are announced.** A chip vanishing is completely silent to a screen reader otherwise: the filter set changes, the results change, and nothing says so. The announcement includes how many remain, which is the part that actually orients the user.

**Both Backspace and Delete remove.** Delete is the platform convention on Windows, Backspace on macOS — supporting only one leaves half of users pressing a key that does nothing.

The remove button's accessible name includes the chip's `group` — "Remove Status Open filter" rather than "Remove Open filter" — which matters as soon as two categories share a label, e.g. Status: Open and Assignment: Open.

The visible × is deliberately small for row density, so a 44px pseudo-element extends the hit area to the touch minimum without enlarging the chip itself.
