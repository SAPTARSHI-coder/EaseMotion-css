# InlineEdit — click-to-edit text

> Issue: [#63567](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63567)

A text value that becomes an input on click or Enter, committing on blur or Enter and reverting on Escape.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | `''` | Committed value. |
| `onCommit` | `(next: string) => void` | — | Called only when the trimmed value actually changed. |
| `placeholder` | `string` | `'Empty'` | Shown when the value is blank. |
| `label` | `string` | `'Edit value'` | Accessible name. |
| `multiline` | `boolean` | `false` | Render a `<textarea>`. |
| `maxLength` | `number` | — | Character cap. |
| `required` | `boolean` | `false` | Reject an empty commit and revert instead. |
| `disabled` | `boolean` | `false` | Disable editing. |
| `className` | `string` | `''` | Merged onto the root. |

## Keyboard

| Key | Action |
|---|---|
| <kbd>Enter</kbd> | Commit (single-line) |
| <kbd>Cmd/Ctrl</kbd> + <kbd>Enter</kbd> | Commit (multiline) |
| <kbd>Esc</kbd> | Cancel and revert |
| <kbd>Tab</kbd> / click away | Commit |

## Usage

```jsx
import InlineEdit from './InlineEdit';
import './style.css';

const [name, setName] = useState('Northwind Logistics');

<InlineEdit value={name} onCommit={setName} label="Account name" required />
```

## Why it fits EaseMotion

**Cancellation needs a separate draft.** Binding the input straight to the committed value means Escape has nothing to revert to — the original is already overwritten. A separate draft state is what makes cancel possible at all.

**Escape and blur-to-commit actively conflict.** Pressing Escape blurs the input, which fires the blur handler, which commits the edit the user just cancelled. A `cancellingRef` flag suppresses that one blur. Without it, Escape silently does the opposite of what it says.

**Focus must be returned explicitly.** Swapping the input out unmounts it, so focus falls back to `<body>` and a keyboard user is dumped at the top of the page. Focus is moved back to the trigger on every exit path — commit, cancel, and rejected-empty alike.

The sync effect is guarded on `!editing`, so a background refresh of `value` cannot overwrite what the user is currently typing.

In multiline mode plain Enter inserts a newline and only Cmd/Ctrl+Enter commits, which is what people expect from a textarea — committing on plain Enter would make multi-line editing impossible.

Field padding and font are matched to the trigger so the swap does not shift surrounding layout; a jump on every edit reads as a bug. The pencil affordance appears on hover and focus only, since a permanent icon on every editable field turns a dense view into a column of pencils.
