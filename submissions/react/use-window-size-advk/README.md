# useWindowSize

Tracks `window.innerWidth`/`innerHeight`, re-rendering on resize.

## API

```js
const { width, height } = useWindowSize();
```

## Usage

```jsx
function ResponsiveChart() {
  const { width } = useWindowSize();
  return <Chart width={Math.min(width - 32, 960)} />;
}
```

## Why is it useful?

A version of this hook that initializes state to `{ width: 0, height: 0 }`
and only reads the real size inside `useEffect` causes anything sized off
those numbers to render at zero on the first paint and then jump to the
correct size once the effect runs — visible as a flash for any consumer
that uses the values directly in layout math (like the chart width above).
Seeding `useState` with a lazy initializer that reads `window.innerWidth`/
`innerHeight` directly means the first render already has the real
dimensions.

The hook deliberately does not debounce or throttle the `resize` listener
itself — that's a concern of whatever expensive work a consumer does with
the size, not of tracking the size itself, so debouncing here would force
every consumer into the same tradeoff even when they don't need it.
