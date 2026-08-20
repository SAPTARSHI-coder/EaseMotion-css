# useDebouncedValue

Returns a debounced copy of a value: it only updates once the input has
stopped changing for a given delay.

## API

```js
const debounced = useDebouncedValue(value, delay);
```

| Param | Type | Default | Description |
|---|---|---|---|
| `value` | `any` | — | Fast-changing source value. |
| `delay` | `number` | `300` | Milliseconds of quiet before the debounced value updates. |

## Usage

```jsx
function SearchBox() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedValue(query, 400);

  useEffect(() => {
    if (debouncedQuery) fetchResults(debouncedQuery);
  }, [debouncedQuery]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

## Why is it useful?

Debouncing is usually implemented by wrapping a *callback* — an API call
directly inside a `setTimeout`/`clearTimeout` pair in the component. That
ties the debounce timing to one specific call site and makes it awkward to
also show the raw, non-debounced value elsewhere in the same component (e.g.
the input reflecting every keystroke while the search only fires after a
pause). Debouncing the *value* instead keeps both the live value and the
settled value available simultaneously, and the same debounced value can
feed multiple effects without re-implementing the timer logic each time.

Each render's effect clears the previous render's timer before scheduling a
new one, which is what makes only the final value in a fast burst of updates
actually reach `debounced` — an update reset here means the previous timer
is a genuine no-op, not a race.
