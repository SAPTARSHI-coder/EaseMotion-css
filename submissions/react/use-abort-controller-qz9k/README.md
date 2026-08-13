# useAbortController

Returns a `getSignal()` function producing an `AbortSignal` for the next
fetch, automatically aborting the previous in-flight request when a new one
starts, and aborting on unmount.

## API

```js
const getSignal = useAbortController();
```

## Usage

```jsx
function SearchResults({ query }) {
  const getSignal = useAbortController();
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;
    fetch(`/api/search?q=${query}`, { signal: getSignal() })
      .then((res) => res.json())
      .then(setResults)
      .catch((err) => {
        if (err.name !== 'AbortError') throw err;
      });
  }, [query, getSignal]);

  return <ResultsList items={results} />;
}
```

## Why is it useful?

Two related bugs recur in components that fetch data: a fast-typing search
box firing a new request before the previous one resolves can have an
older, slower response overwrite a newer one's results ("request
waterfall" race), and any fetch still in flight when the component unmounts
eventually resolves into a `setState` call on an unmounted component. Both
are the same underlying problem — an in-flight request outliving its
relevance — and `AbortController` solves both: calling `getSignal()` again
aborts whatever request was using the previous signal, and the cleanup
effect aborts on unmount unconditionally.

Callers still need to swallow `AbortError` in their `.catch`, since an
aborted fetch rejects rather than silently doing nothing — the hook
manages the controller's lifecycle, not the calling code's error handling.

## Using it with async/await

The same pattern works with `async`/`await` instead of `.then` chains —
the try/catch just needs the same `AbortError` check:

```jsx
function UserProfile({ userId }) {
  const getSignal = useAbortController();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`/api/users/${userId}`, { signal: getSignal() });
        const data = await res.json();
        if (!cancelled) setUser(data);
      } catch (err) {
        if (err.name !== 'AbortError' && !cancelled) setError(err);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [userId, getSignal]);

  if (error) return <ErrorState error={error} />;
  return user ? <ProfileCard user={user} /> : <Spinner />;
}
```

The `cancelled` flag here is a belt-and-suspenders guard against a
different race than the one `AbortController` solves: even with the
network request itself aborted, an `await` already past the fetch (e.g.
mid-`res.json()`) can still resolve after unmount in some edge cases, and
`cancelled` catches that regardless of exactly where the abort happened.

## Multiple concurrent requests

`getSignal()` can be called more than once per render if a component needs
several independent in-flight requests that shouldn't cancel each other —
just don't reuse the same `getSignal` call's signal across requests that
should be independently cancellable, since each call to `getSignal()`
aborts whatever the *previous* call's signal was attached to:

```jsx
function Dashboard() {
  const getStatsSignal = useAbortController();
  const getActivitySignal = useAbortController();

  useEffect(() => {
    fetch('/api/stats', { signal: getStatsSignal() });
    fetch('/api/activity', { signal: getActivitySignal() });
  }, [getStatsSignal, getActivitySignal]);

  // ...
}
```

Two separate `useAbortController()` calls give two independently-managed
controllers, each aborting only its own previous request and each aborting
on unmount — neither affects the other's in-flight signal.

## Limitations

`AbortController` only cancels the underlying network request (and any
`fetch`-based API that accepts a `signal`); it does not cancel arbitrary
promises, `setTimeout`-based delays, or non-fetch async work. For those,
the `cancelled` flag pattern shown above remains the correct tool — this
hook specifically targets the fetch-cancellation case, which is the most
common source of the stale-response and setState-after-unmount bugs it's
designed to prevent.
