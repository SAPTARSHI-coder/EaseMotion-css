# useLocalStorage

A `useState`-shaped hook backed by `localStorage`, kept in sync across
browser tabs via the `storage` event.

## API

```js
const [value, setValue] = useLocalStorage(key, initialValue);
```

`setValue` accepts either a new value or an updater function, matching
`useState`'s setter signature.

## Usage

```jsx
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <button onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>
      {theme}
    </button>
  );
}
```

## Why is it useful?

A naive `localStorage` hook reads `localStorage.getItem` once on mount and
never again, so if the user changes the same key in another tab, the two
tabs silently disagree. Listening for the `storage` event (which the
originating tab never receives for its own writes, only other tabs do)
keeps every open tab converged on the same value without polling.

Every read and write is wrapped in `try`/`catch` because `localStorage` can
throw in Safari private browsing and when storage quota is exceeded — this
hook degrades to in-memory React state in that case rather than crashing the
component tree.
