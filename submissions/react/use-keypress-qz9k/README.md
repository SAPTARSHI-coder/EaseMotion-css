# useKeypress

Calls a callback when a specific key is pressed, ignoring keystrokes typed
into inputs, textareas, or contentEditable elements by default.

## API

```js
useKeypress(key, onPress, { ignoreInputs });
```

| Param | Type | Default | Description |
|---|---|---|---|
| `key` | `string` | — | `KeyboardEvent.key` value to match, e.g. `'Escape'`, `'/'`. |
| `onPress` | `(event: KeyboardEvent) => void` | — | Called on a matching, non-input keydown. |
| `ignoreInputs` | `boolean` | `true` | Set `false` for shortcuts that should fire even while typing. |

## Usage

```jsx
function CommandPalette({ onOpen }) {
  useKeypress('/', onOpen);
  return null;
}
```

## Why is it useful?

A global keyboard shortcut hook built without an input guard breaks the
moment a user types the shortcut key while filling out a form — pressing
`/` to open a command palette while typing a URL containing a slash into a
text field is the textbook version of this bug. Checking whether
`event.target` is an `<input>`, `<textarea>`, or `contentEditable` element
before invoking the callback (the default, opt-out via `ignoreInputs:
false`) means a single-character shortcut hook is safe to use globally
without every consumer having to reimplement that guard.

The listener is attached once per `key`/`onPress`/`ignoreInputs` triple via
the effect's dependency array, so passing a stable `onPress` (e.g. wrapped
in `useCallback` at the call site) avoids re-attaching the global listener
on every render.
