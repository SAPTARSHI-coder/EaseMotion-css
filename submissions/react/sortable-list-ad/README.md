# SortableList — keyboard-accessible reorderable list

> Issue: [#63825](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63825)

A reorderable list operable by keyboard as well as by drag.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array<{ id, label }>` | `[]` | Items. Renders `null` if empty. |
| `onReorder` | `(next: Array) => void` | — | Receives the reordered array. |
| `renderItem` | `(item, index) => ReactNode` | `item.label` | Custom row content. |
| `label` | `string` | `'Sortable list'` | Accessible list name. |
| `disabled` | `boolean` | `false` | |
| `className` | `string` | `''` | Merged onto the root. |

## Keyboard

| Key | Action |
|---|---|
| <kbd>Ctrl/Cmd</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd> | Move the item one position |
| <kbd>Ctrl/Cmd</kbd> + <kbd>Home</kbd> / <kbd>End</kbd> | Move to the top / bottom |

## Usage

```jsx
import SortableList from './SortableList';
import './style.css';

<SortableList items={steps} onReorder={setSteps} label="Pipeline stages" />
```

## Why it fits EaseMotion

**Drag-and-drop reordering is one of the least accessible patterns in common use.** Without a pointer there is no way to perform the action at all — there is no partial workaround, the feature is simply unavailable. Modifier+arrow makes it operable.

**Every move is announced with its new position.** This matters as much as the keybinding: a silent reorder tells a screen reader user nothing about whether the action worked or where the item ended up. "Deploy moved to position 2 of 5" is the whole point.

**Focus follows the item to its new index.** Without that, pressing Ctrl+↓ twice moves two *different* items — the first press moves your item down, and the second moves whatever slid into the position you are still focused on. Following the item is what makes repeated presses do the obvious thing.

**The keybinding is in the accessible name.** "Press Control or Command with arrow keys to move" — because a keyboard-only affordance that is not announced is not discoverable, and the user has no reason to guess it exists.

Movement is modifier-gated so plain arrow keys still scroll the page and navigate normally.

Two drag-API details that are easy to miss: `preventDefault` on `dragover` is **required** or the drop event never fires at all, and Firefox refuses to start a drag unless `dataTransfer.setData` is called. The drop target is indicated by an offset *and* an accent edge, since a colour change alone is easy to miss mid-drag.
