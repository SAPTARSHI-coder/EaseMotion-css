# useCopyToClipboard

A React hook that copies text to the clipboard, with an `execCommand`
fallback for non-secure contexts, and reports a short-lived `copied` flag
for driving "Copied!" UI.

## API

```js
const [copied, copy] = useCopyToClipboard(resetDelay);
```

| Param | Type | Default | Description |
|---|---|---|---|
| `resetDelay` | `number` | `1500` | Milliseconds before `copied` resets to `false`. |

`copy(text)` returns a promise resolving to a boolean success flag.

## Usage

```jsx
function CopyButton({ value }) {
  const [copied, copy] = useCopyToClipboard();
  return (
    <button onClick={() => copy(value)}>
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}
```

## Why is it useful?

`navigator.clipboard.writeText` requires a secure context and is not
available in every embedded WebView or over plain HTTP on a local network,
so a hook that only wraps the async Clipboard API silently breaks in those
environments. This hook falls back to the older
select-a-hidden-textarea-and-`execCommand('copy')` technique so the copy
button keeps working rather than throwing.

Centralizing the reset timer in the hook (with cleanup via `clearTimeout` on
each call) also avoids a common bug where a component copies twice in quick
succession and ends up with two competing `setTimeout` calls fighting over
when `copied` flips back to `false`.
