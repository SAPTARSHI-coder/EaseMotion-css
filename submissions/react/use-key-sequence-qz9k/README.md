# useKeySequence

Calls a callback when an ordered sequence of keys is pressed within a
timing window — a "g then i" go-to-inbox shortcut, or a Konami-code style
easter egg.

## API

```js
useKeySequence(sequence, onMatch, timeout);
```

| Param | Type | Default | Description |
|---|---|---|---|
| `sequence` | `string[]` | — | Ordered `KeyboardEvent.key` values, e.g. `['g', 'i']`. |
| `onMatch` | `(event: KeyboardEvent) => void` | — | Called when the full sequence completes in time. |
| `timeout` | `number` | `1000` | Max ms allowed between consecutive keys before progress resets. |

## Usage

```jsx
function InboxShortcut({ goToInbox }) {
  useKeySequence(['g', 'i'], goToInbox);
  return null;
}
```

## Why is it useful?

Multi-key shortcuts ("g then i", rather than a single modifier combo) need
to track partial progress through the sequence and reset it both on a
non-matching key and on a pause exceeding the timing window — without the
timeout reset, pressing "g" then walking away and coming back an hour later
to type an unrelated "i" would incorrectly fire the shortcut. Progress is
tracked in a `ref`, not `useState`, deliberately: a fast two-key sequence
completing in under 300ms shouldn't trigger an intermediate re-render for
the "first key matched" state, since nothing needs to be rendered until the
whole sequence resolves.

A wrong key mid-sequence doesn't always reset all the way to zero — it
restarts at position 1 if the wrong key happens to also be the sequence's
first key (typing "g" then "g" then "i" still matches `['g', 'i']`), which
matches how users actually mistype a repeated first character.
