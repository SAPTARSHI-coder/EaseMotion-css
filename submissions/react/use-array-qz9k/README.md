# useArray

Array state for collections of primitive values (tags, selected IDs),
centered on a `toggle` operation for "add if absent, remove if present."

## API

```js
const { items, add, remove, toggle, clear, isEmpty, count, setItems } = useArray(initial);
```

| Field | Description |
|---|---|
| `items` | The current array. |
| `add(item)` | Appends a value. |
| `remove(item)` | Removes a value (by `===` equality). |
| `toggle(item)` | Removes the value if present, adds it if absent. |
| `clear()` | Empties the array. |
| `isEmpty` / `count` | Memoized derived values. |
| `setItems` | Escape hatch for custom updates. |

## Usage

```jsx
function TagFilter({ allTags }) {
  const { items: selected, toggle, isEmpty } = useArray([]);

  return (
    <>
      {allTags.map((tag) => (
        <button
          key={tag}
          aria-pressed={selected.includes(tag)}
          onClick={() => toggle(tag)}
        >
          {tag}
        </button>
      ))}
      {!isEmpty && <ResultsFilteredBy tags={selected} />}
    </>
  );
}
```

## Why is it useful?

A multi-select filter UI — clicking a tag adds it if not selected, removes
it if already selected — is naturally expressed as "toggle membership,"
but implementing that inline at each call site (`setSelected(prev =>
prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])`) is
verbose enough that it's often copy-pasted across several similar toggle
buttons in the same component, with the risk of one copy drifting from the
others if the logic needs a later fix. Centralizing `toggle` in the hook
means every tag button in the example above calls the exact same, single
implementation.

`isEmpty` and `count` are provided as memoized derived values rather than
computed inline at each render site (`items.length === 0`) purely for
convenience and readability at the call site — `useMemo` here doesn't
meaningfully change performance for a cheap `.length` check, but it does
keep the derived-value pattern consistent for callers who might reach for
this hook with a more expensive derived computation added later. This hook
targets arrays of primitives specifically — `remove`/`toggle`'s `===`
equality check won't distinguish between two different object instances
with identical contents, which is a reasonable scope boundary rather than
a bug, since object identity semantics for array membership are usually
what a caller managing object arrays actually wants to define themselves.
