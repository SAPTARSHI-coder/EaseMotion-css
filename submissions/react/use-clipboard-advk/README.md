# useClipboard

A copy-to-clipboard hook with a transient success state, a legacy fallback, and a
genuine error state.

## API

```js
const { copy, status, copied, error } = useClipboard({ timeout: 2000 });
```

| Return | Type | Description |
|---|---|---|
| `copy` | `(text: string) => Promise<boolean>` | Performs the copy. |
| `status` | `'idle' \| 'copied' \| 'error'` | Current state. |
| `copied` / `error` | `boolean` | Convenience booleans. |

## Usage

```jsx
import useClipboard from './useClipboard';

function CopyButton({ text }) {
  const { copy, copied, error } = useClipboard();
  return (
    <>
      <button onClick={() => copy(text)}>{copied ? 'Copied' : 'Copy'}</button>
      <span role="status" aria-live="polite">
        {copied ? 'Copied to clipboard' : error ? 'Copy failed' : ''}
      </span>
    </>
  );
}
```

## Why it fits EaseMotion CSS

The Copy Feedback submission covers the visual side of this interaction; this is
the behaviour underneath it, and it handles the cases most implementations skip.

`navigator.clipboard` requires a **secure context**, so it is simply undefined on
plain `http://` — including many local network dev setups. It also rejects when the
document is not focused or permission is denied. Code that calls `writeText()` and
assumes success shows "Copied!" while nothing was copied, which is worse than
showing nothing.

Checking `window.isSecureContext`, catching the rejection, and falling back to the
`textarea` + `execCommand` approach means the copy actually happens in those
environments, and a real `error` state is surfaced when it genuinely fails.

The timeout is cleared on unmount, which prevents the React warning and the state
update on an unmounted component that occurs when a user copies and then navigates
away within the reset window.

Pairing the returned state with an `aria-live` region — as in the usage example —
is what makes the result perceivable without sight, since a clipboard write
produces no other feedback.
