# useCounter

Integer counter state with `increment`/`decrement`/`reset`/`set`,
optionally clamped to a `[min, max]` range with a configurable step size.

## API

```js
const { count, increment, decrement, reset, set } = useCounter(initial, { min, max, step });
```

| Option | Type | Default | Description |
|---|---|---|---|
| `min` / `max` | `number` | unbounded | Optional clamp range. |
| `step` | `number` | `1` | Amount each increment/decrement moves by. |

## Usage

```jsx
function QuantitySelector() {
  const { count, increment, decrement } = useCounter(1, { min: 1, max: 10 });
  return (
    <div>
      <button onClick={decrement}>−</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

function VolumeControl() {
  const { count, increment, decrement } = useCounter(50, { min: 0, max: 100, step: 5 });
  return <input type="range" value={count} readOnly onWheel={(e) => (e.deltaY < 0 ? increment() : decrement())} />;
}
```

## Why is it useful?

`useCounter` and `useClampValue` (elsewhere in this repo) overlap in that
both keep a number within bounds, but they model different things:
`useClampValue` is a general clamped numeric value that can be set to any
arbitrary number directly (typing into a linked text input, receiving a
value from an API), while `useCounter` specifically models a step-based
counter — its primary operations are relative (`increment`/`decrement` by
`step`), and `set` for an absolute value is the secondary operation, not
the primary one. Reaching for `useCounter` when a component's interaction
is fundamentally "press + or −" communicates that intent directly in the
API surface, rather than reusing a general clamped-value hook whose
increment/decrement would have to be written out by the caller each time
(`setValue(v => v + 1)`) with the step size duplicated at every call site
instead of configured once.

`reset` restores to the *clamped* initial value rather than the raw
`initial` argument, so a counter configured with a `min`/`max` that happens
to exclude its own nominal starting point never resets to an
out-of-bounds number — clamping the `initial` value happens once via the
same `clamp` function used everywhere else in the hook, keeping the
initialization and reset paths consistent.

## Handling a variable step size

`step` doesn't have to stay fixed across the counter's lifetime — since
`increment`/`decrement` are recreated whenever `step` changes (it's in
their `useCallback` dependency array), a component can vary the step size
dynamically, such as accelerating on a held-down button:

```jsx
function AcceleratingStepper() {
  const [step, setStep] = useState(1);
  const { count, increment } = useCounter(0, { step });

  function handleMouseDown() {
    const id = setInterval(() => setStep((s) => Math.min(s * 1.5, 20)), 200);
    increment();
    return () => clearInterval(id);
  }

  return <button onMouseDown={handleMouseDown}>{count}</button>;
}
```

Because `clamp` is itself memoized on `[min, max]` and both
`increment`/`decrement` depend on it plus `step`, none of this requires the
hook's own internals to change — varying `step` from outside is a
first-class supported usage, not a workaround.

## Comparison to plain useState with manual math

The alternative — `const [count, setCount] = useState(0)` plus inline
`setCount(c => Math.min(max, c + step))` at each call site — works for a
single counter, but duplicates the clamping logic at every increment and
decrement call, and that duplication is exactly where a min/max
inconsistency tends to creep in (one call site clamping against a stale
`max` captured in a closure, for instance). Centralizing clamping in one
`clamp` function used by every operation in the hook removes that
duplication entirely — there's one place that defines what "in bounds"
means for this counter, referenced everywhere the count can change.
