# useHotkeys

Registers multiple keyboard shortcut bindings at once, normalizing Cmd
(Mac) and Ctrl (Windows/Linux) behind a single `mod` token.

## API

```js
useHotkeys(bindings, { ignoreInputs });
```

| Param | Type | Default | Description |
|---|---|---|---|
| `bindings` | `{ [combo: string]: (event) => void }` | — | Map of combo strings (e.g. `'mod+k'`) to handlers. |
| `ignoreInputs` | `boolean` | `true` | Skip matching while focus is in an input/textarea/contentEditable. |

## Usage

```jsx
function CommandPalette({ open, close }) {
  useHotkeys({
    'mod+k': () => open(),
    'escape': () => close(),
    'mod+shift+p': () => open({ commandMode: true }),
  });
  return null;
}
```

## Why is it useful?

A cross-platform shortcut like "Cmd+K on Mac, Ctrl+K everywhere else" is
usually implemented with an explicit `isMac` branch at every single
binding site, checking `event.metaKey` on Mac and `event.ctrlKey`
elsewhere — repeated at every hotkey a project defines. This hook resolves
that platform difference once, internally, and exposes a single `mod`
token that means "the platform's primary modifier key" regardless of which
OS the app is running on, so a hotkey map like the one above is declared
identically for every platform with no conditional logic in application
code.

Combo strings are built by normalizing the pressed key's modifiers in a
fixed order (`mod`, `shift`, `alt`, then the key itself lowercased) so a
binding declared as `'mod+shift+p'` matches regardless of which order the
user physically pressed the modifier keys in — modifier key state comes
from the browser as independent booleans (`ctrlKey`, `shiftKey`, etc.), not
as an ordered sequence, so the hook's own fixed ordering is what makes combo
strings comparable at all rather than needing to check each modifier flag
individually at every binding.

## Bypassing the input guard for specific shortcuts

Some shortcuts should fire even while typing — `Escape` to close a dialog,
or `mod+Enter` to submit a form from within its own textarea. Passing
`ignoreInputs: false` disables the guard for the entire hook instance, so a
component with a mix of global and input-aware shortcuts typically needs
two separate `useHotkeys` calls:

```jsx
function CommentForm({ onSubmit, onCancel }) {
  useHotkeys({ escape: onCancel }, { ignoreInputs: false });
  useHotkeys({ 'mod+enter': onSubmit }, { ignoreInputs: false });
  useHotkeys({ '/': () => document.getElementById('search')?.focus() }); // ignoreInputs: true (default)

  return <textarea placeholder="Write a comment..." />;
}
```

## Declaring bindings inline vs. as a stable reference

`bindings` is a plain object literal in every example above, recreated on
every render — since the effect re-attaches the listener whenever
`bindings` changes identity (it's in the dependency array), an inline
object means the listener is torn down and re-added on every render of the
component using this hook. For a component that re-renders infrequently
relative to how often its shortcuts fire, this is usually not worth
optimizing; for one that re-renders on every keystroke of unrelated state,
wrapping `bindings` in a `useMemo` with an empty (or narrowly-scoped)
dependency array avoids the repeated listener churn.

## Combos this hook doesn't handle

Chord-style sequences (press `g`, release, then press `i` — a "go to
inbox" shortcut) aren't representable as a single combo string here, since
this hook only evaluates the state of one `keydown` event at a time with no
memory of prior keystrokes. The `useKeySequence` hook (also in this
submission set) covers that case specifically; the two are complementary
rather than one superseding the other.
