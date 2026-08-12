# useClipboardPaste

Calls a callback with plain-text clipboard content whenever a paste event
occurs, without needing a focused input to receive it.

## API

```js
useClipboardPaste(onPaste, { enabled });
```

| Param | Type | Default | Description |
|---|---|---|---|
| `onPaste` | `(text: string, event: ClipboardEvent) => void` | — | Called with the pasted plain text. |
| `enabled` | `boolean` | `true` | Set `false` to detach the listener without unmounting. |

## Usage

```jsx
function OtpEntry({ onFill }) {
  useClipboardPaste((text) => {
    const digits = text.replace(/\D/g, '').slice(0, 6);
    if (digits.length === 6) onFill(digits);
  });
  return <OtpBoxes />;
}
```

## Why is it useful?

A paste-to-fill pattern (an OTP field, a bulk-entry textarea) is usually
built by adding an `onPaste` prop to one specific `<input>`, which only
fires if that exact element has focus when the paste happens. Attaching the
listener to `document` instead means paste-anywhere-on-the-page works even
if focus is on a different element or nothing at all, which matches how
users actually paste — clicking near, not necessarily inside, the target
field first.

Reading `clipboardData.getData('text/plain')` explicitly, rather than
letting the paste populate a contentEditable or input by default, is what
lets the callback normalize the text (strip non-digits for an OTP code,
trim whitespace, reject non-matching formats) before any of it reaches
application state.
