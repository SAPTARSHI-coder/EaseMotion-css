# SplitButton — primary action with a menu

> Issue: [#63822](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63822)

A default action paired with a disclosure menu of alternatives, implementing the ARIA menu button pattern.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Primary action label. Renders `null` if absent. |
| `onClick` | `() => void` | — | Primary action. |
| `items` | `Array<{ id, label, onSelect, disabled? }>` | `[]` | Menu items. |
| `tone` | `'primary' \| 'neutral'` | `'primary'` | |
| `disabled` | `boolean` | `false` | |
| `menuLabel` | `string` | `'More actions'` | Accessible name for the toggle and menu. |
| `className` | `string` | `''` | Merged onto the root. |

## Keyboard

| Key | Action |
|---|---|
| <kbd>↓</kbd> on the toggle | Open with the **first** item focused |
| <kbd>↑</kbd> on the toggle | Open with the **last** item focused |
| <kbd>↑</kbd> / <kbd>↓</kbd> in the menu | Move between enabled items (wraps) |
| <kbd>Home</kbd> / <kbd>End</kbd> | First / last enabled item |
| <kbd>Esc</kbd> | Close and return focus to the toggle |
| <kbd>Tab</kbd> | Close and continue past the button |

## Usage

```jsx
import SplitButton from './SplitButton';
import './style.css';

<SplitButton
  label="Save"
  onClick={save}
  items={[
    { id: 'draft', label: 'Save as draft', onSelect: saveDraft },
    { id: 'copy', label: 'Save a copy', onSelect: saveCopy },
    { id: 'template', label: 'Save as template', onSelect: saveTemplate, disabled: true },
  ]}
/>
```

## Why it fits EaseMotion

**Focus moves into the menu on open and returns to the toggle on close.** Both halves matter: a menu that opens without moving focus is unreachable by keyboard, and one that closes without returning focus dumps the user at `<body>` so the next Tab restarts from the top of the document. Escape, item selection and outside-click all route through the same close path.

**Arrow-up opens with the last item focused, arrow-down with the first.** That asymmetry is in the ARIA pattern and is not decoration — it makes reaching the bottom item of a long menu one keystroke rather than eight.

**Tab closes rather than trapping.** Focus-trapping a menu is a common over-correction: a menu is transient, not a dialog, and trapping means the only way out is Escape. Tab closes and continues past the button, which is what the spec specifies and what users expect.

**The outside-click listener is attached only while the menu is open.** A permanently attached document listener runs on every click in the entire application for a menu that is closed almost all of the time.

Disabled items are skipped by arrow navigation entirely — the enabled-index list is computed first, so wrapping and Home/End land on real targets rather than stopping on something that cannot be activated.

Two styling details: the divider is an inset pseudo-element rather than a border, so it adds no width and the split does not shift when the button is themed; and the focused half gets `z-index: 1` so its ring is not clipped by the adjacent button's background.
