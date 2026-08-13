# useScript

Loads an external `<script src>` tag and reports its status
(`idle`/`loading`/`ready`/`error`), deduplicating by `src` so the same
script is never injected twice.

## API

```js
const status = useScript(src);
```

## Usage

```jsx
function MapWidget() {
  const status = useScript('https://maps.example.com/sdk.js');
  if (status !== 'ready') return <Spinner />;
  return <Map />;
}
```

## Why is it useful?

A component that injects a `<script>` tag on mount and removes it on
unmount breaks the moment two components need the same third-party script
at once: one unmounting would remove the tag out from under the other, and
mounting both together would inject the same `src` twice, which is
wasteful at best and can throw for scripts that error on redefinition (many
SDKs guard against exactly that). Storing load status directly on the
script element itself (`dataset.status`) and checking for an existing tag
with the same `src` before creating a new one means any number of
components can call `useScript` with the same URL and share one script tag,
each independently getting the correct current status.

Scripts are intentionally never removed on unmount — a `<script>` tag
having already executed once, removing it doesn't undo whatever global side
effects it had, so leaving it in the DOM for the lifetime of the page avoids
a needless re-fetch and re-execution if another component mounts the same
`src` later.
