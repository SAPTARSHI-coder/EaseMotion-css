# useClipboardPaste React Hook

## Overview

`useClipboardPaste` is a reusable React hook that listens for paste events across the entire document and provides the pasted plain-text clipboard content to a callback.

It is useful when an application needs to respond to clipboard input even when the user pastes outside a specific input or textarea.

## Issue

This contribution addresses:

**#75552 — Add useClipboardPaste hook**

## Features

- Listens for paste events at the document level.
- Works regardless of which element currently has focus.
- Extracts plain-text clipboard content.
- Passes the pasted text to a callback.
- Automatically removes the event listener during cleanup.
- Keeps the latest callback reference.
- Requires no external dependencies beyond React.
- Can be reused across different React components.

## Installation

Copy `useClipboardPaste.jsx` into your React project's hooks directory.

Example:

```text
src/
└── hooks/
    └── useClipboardPaste.jsx
```

## Import

```jsx
import { useClipboardPaste } from "./hooks/useClipboardPaste";
```

## Basic Usage

```jsx
import { useState } from "react";
import { useClipboardPaste } from "./hooks/useClipboardPaste";

function ClipboardExample() {
  const [pastedText, setPastedText] = useState("");

  useClipboardPaste((text) => {
    setPastedText(text);
  });

  return (
    <section>
      <h2>Clipboard Monitor</h2>
      <p>{pastedText || "Paste some text anywhere on the page."}</p>
    </section>
  );
}

export default ClipboardExample;
```

## How It Works

The hook registers a `paste` event listener on the global `document`.

```jsx
document.addEventListener("paste", handlePaste);
```

When a paste occurs, the hook reads the plain-text clipboard data:

```jsx
const text = event.clipboardData?.getData("text/plain") ?? "";
```

The resulting text is passed to the callback supplied by the component:

```jsx
callbackRef.current?.(text);
```

The listener is removed when the component using the hook is unmounted.

## API

### `useClipboardPaste(onPaste)`

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `onPaste` | `Function` | Yes | Callback executed when plain-text clipboard content is pasted. |

## Callback

The callback receives one primary argument:

```text
text
```

Example:

```jsx
useClipboardPaste((text) => {
  console.log("Pasted text:", text);
});
```

If the clipboard contains:

```text
Hello EaseMotion
```

the callback receives:

```text
Hello EaseMotion
```

## Document-Level Behavior

Unlike a paste handler attached to one input element, this hook listens to the entire document.

This means the following can trigger the callback:

- Pasting inside an input.
- Pasting inside a textarea.
- Pasting inside a contenteditable element.
- Pasting while another page element has focus.
- Pasting anywhere that produces a document-level paste event.

## Why Document-Level Listening?

Applications sometimes need clipboard information independently of a particular input field.

For example, a productivity application may want to:

- Detect pasted content globally.
- Process pasted text automatically.
- Update application state from clipboard input.
- Trigger commands based on pasted content.
- Monitor clipboard-driven workflows.

A document-level listener makes the hook reusable for these scenarios.

## Cleanup

The hook automatically removes the event listener when the component unmounts.

```jsx
return () => {
  document.removeEventListener("paste", handlePaste);
};
```

This prevents unnecessary listeners from remaining active after the component is removed.

## Stable Callback Handling

The hook stores the latest callback in a ref:

```jsx
const callbackRef = useRef(onPaste);
```

The ref is updated whenever the callback changes:

```jsx
useEffect(() => {
  callbackRef.current = onPaste;
}, [onPaste]);
```

This allows the document listener to remain attached without repeatedly registering and removing it when the callback changes.

## Plain-Text Clipboard Data

The hook intentionally reads:

```jsx
event.clipboardData?.getData("text/plain")
```

This keeps the hook focused on plain-text clipboard content instead of processing HTML or other clipboard formats.

## Example: Updating State

```jsx
function PasteReader() {
  const [value, setValue] = useState("");

  useClipboardPaste((text) => {
    setValue(text);
  });

  return <div>{value}</div>;
}
```

## Example: Logging Clipboard Content

```jsx
function ClipboardLogger() {
  useClipboardPaste((text) => {
    console.log("Clipboard content:", text);
  });

  return <p>Paste text anywhere on the page.</p>;
}
```

## Example: Counting Characters

```jsx
function PasteCounter() {
  const [count, setCount] = useState(0);

  useClipboardPaste((text) => {
    setCount(text.length);
  });

  return <p>Last pasted text length: {count}</p>;
}
```

## Example: Processing Pasted Text

```jsx
function PasteProcessor() {
  useClipboardPaste((text) => {
    const normalized = text.trim().toLowerCase();

    console.log("Processed:", normalized);
  });

  return <p>Paste content to process it.</p>;
}
```

## Browser Behavior

The hook relies on the browser's standard `paste` event and `ClipboardEvent` API.

It does not directly request clipboard permissions or read the clipboard independently.

Instead, it responds when the browser dispatches a paste event.

## Accessibility

The hook does not modify keyboard behavior or prevent the browser's normal paste action.

It only observes the paste event and provides the plain-text content to the supplied callback.

Existing inputs and textareas can therefore continue to use their normal paste behavior.

## Performance

The hook creates one document-level event listener for the component lifecycle.

The listener is registered when the hook is mounted and removed when the component is unmounted.

The implementation avoids unnecessary listener recreation when the callback changes.

## Best Practices

Use the hook when clipboard paste handling should be available across a page or application.

For a single input-specific paste interaction, a normal `onPaste` React event handler may be simpler.

Avoid using the hook when global clipboard monitoring is unnecessary.

## File Structure

```text
75552-add-useclipboardpaste-hook-ks/
├── useClipboardPaste.jsx
└── README.md
```

## Summary

`useClipboardPaste` provides a small and reusable abstraction for document-level paste handling in React applications.

It captures plain-text clipboard content and delivers it through a callback while managing event-listener cleanup automatically.

## Related Issue

Closes #75552