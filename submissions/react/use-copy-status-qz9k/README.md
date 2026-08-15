# useCopyStatus

Tracks the outcome of a clipboard copy as an explicit status —
`'idle' | 'copied' | 'error'` — rather than a plain boolean.

## API

```js
const [status, copy] = useCopyStatus(resetDelay);
```

## Usage

```jsx
function CopyButton({ value }) {
  const [status, copy] = useCopyStatus();

  return (
    <button onClick={() => copy(value)}>
      {status === 'copied' && 'Copied!'}
      {status === 'error' && 'Copy failed'}
      {status === 'idle' && 'Copy'}
    </button>
  );
}
```

## Why is it useful?

A `copied` boolean can only represent two states, which forces "copy
failed" to either be silently indistinguishable from "nothing has
happened yet" or to be represented by a second, separately-managed
boolean — doubling the state a component has to track and coordinate for
what's really one underlying concept ("what happened when I last tried to
copy"). An explicit three-state enum (`idle`/`copied`/`error`) represents
exactly the three outcomes that are actually possible, letting a button
show distinct, specific feedback for a permissions-denied clipboard write
or a non-secure-context failure, rather than that failure looking
identical to the button never having been clicked.

The reset timer is cleared both on a new `copy()` call (so a fast double-
click doesn't have an earlier reset fire mid-way through showing the
newer status) and on unmount (via the cleanup-only effect), preventing a
`setState` call from firing after the component using this hook has
already been removed from the tree.

## Styling per status

Because `status` is a plain string, it maps directly onto a CSS class or a
small lookup table without any boolean-combination logic at the call site:

```jsx
function CopyButton({ value }) {
  const [status, copy] = useCopyStatus();
  return (
    <button className={`copy-btn copy-btn--${status}`} onClick={() => copy(value)}>
      {{ idle: 'Copy', copied: 'Copied!', error: 'Try again' }[status]}
    </button>
  );
}
```

```css
.copy-btn--copied { border-color: #34a853; }
.copy-btn--error { border-color: #e0483f; }
```

A boolean-only version of this hook would need a second flag (or a
`null`/`true`/`false` tri-state hack) to reach the same three visually
distinct states, which tends to produce harder-to-read conditionals at the
call site than a single named status value does.

## Handling browsers without the async Clipboard API

This hook intentionally does not implement an `execCommand` fallback the
way some of the plain copy-button examples elsewhere in this repo do —
`useCopyStatus` is scoped specifically to reporting *outcome*, not to
performing the copy through every possible browser API. A consumer
targeting older browsers or non-secure contexts should implement the
fallback copy mechanism itself and call `setStatus`-equivalent logic
directly, or compose this hook's status-tracking pattern with a separate
copy-implementation utility, rather than this hook silently degrading its
copy method without the caller's knowledge.

## Distinguishing "denied" from "unsupported"

`navigator.clipboard.writeText` can reject for different underlying
reasons — permission denied by the user or browser policy, or the API
being entirely absent in a non-secure context — but both surface as the
same caught exception here, both mapped to `'error'`. For a UI that needs
to give more specific guidance ("clipboard access was denied" versus "this
browser doesn't support clipboard access"), inspect `err.name` inside the
`catch` block and extend the status enum accordingly; the three-state
default here covers the common case without that added complexity.
