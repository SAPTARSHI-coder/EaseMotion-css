# MultiSelect — accessible multi-select

> Issue: [#63816](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63816)

A multi-select implementing the ARIA combobox pattern, with removable chips and type-to-filter.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `Array<{ value, label, disabled? }>` | `[]` | Available options. |
| `value` | `string[]` | `[]` | Selected values. |
| `onChange` | `(next: string[]) => void` | — | Receives the new selection. |
| `placeholder` | `string` | `'Select…'` | Shown when nothing is selected. |
| `label` | `string` | `'Selection'` | Accessible name for the input. |
| `max` | `number` | — | Maximum selections. |
| `disabled` | `boolean` | `false` | |
| `className` | `string` | `''` | Merged onto the root. |

## Keyboard

| Key | Action |
|---|---|
| type | Filter options |
| <kbd>↓</kbd> / <kbd>↑</kbd> | Move the highlight (wraps) |
| <kbd>Enter</kbd> | Select the highlighted option |
| <kbd>Esc</kbd> | Close the list |
| <kbd>Backspace</kbd> | Remove the last chip (only when the input is empty) |

## Usage

```jsx
import MultiSelect from './MultiSelect';
import './style.css';

<MultiSelect
  label="Tags"
  options={tags}
  value={selected}
  onChange={setSelected}
  max={5}
/>
```

## Why it fits EaseMotion

**`aria-activedescendant`, not roving tabindex.** This is the load-bearing decision. In a combobox, DOM focus must *stay on the input* while the highlighted option changes — otherwise arrow keys move focus out of the text field and the user can no longer type to filter. Most hand-rolled multi-selects move focus onto the option and break the one interaction the component exists for. Here focus never leaves the input; only the `aria-activedescendant` pointer moves, and the visual highlight follows it.

**Options select on `mousedown`, not `click`.** A `click` fires *after* `blur`, which closes the list — so the option unmounts before the click lands and the selection silently never happens. This is the classic dropdown bug, and it looks like a random intermittent failure.

**Backspace only removes a chip when the input is empty.** Otherwise it would eat typed characters, which makes filtering impossible.

**Chip removal returns focus to the input.** Removing the chip that currently has focus would otherwise drop focus to `<body>`, dumping a keyboard user at the top of the page.

The highlight index is clamped when filtering shrinks the list — without that it can point past the end and Enter selects nothing. Selection changes are announced politely, since a chip appearing is invisible to a screen reader user otherwise. And the focus ring lives on the *control* rather than the bare input, which has no visible border of its own.
