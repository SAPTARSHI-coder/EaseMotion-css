# usePreviousDistinct

Like `usePrevious` (elsewhere in this repo), but only advances its stored
"previous" value when the new value actually differs from the last one —
re-renders with an unchanged value don't shift what counts as "previous."

## API

```js
const previous = usePreviousDistinct(value, compare);
```

`compare` defaults to `Object.is` and can be overridden for custom
equality (e.g. a shallow object comparison).

## Usage

```jsx
function StatusIndicator({ status }) {
  // status might be re-set to the same value across unrelated re-renders
  // (a parent re-rendering for other reasons, passing the same status prop).
  const previousStatus = usePreviousDistinct(status);
  const justChanged = previousStatus !== null && previousStatus !== status;

  return (
    <span className={justChanged ? 'status--transitioning' : ''}>
      {status}
    </span>
  );
}
```

## Why is it useful?

Plain `usePrevious` returns whatever the tracked value was on the *literal
previous render*, which is exactly right for some use cases but wrong for
others: if a component re-renders several times while `status` stays
`'active'` (because unrelated props or context changed), then `status`
finally becomes `'paused'`, `usePrevious` still correctly reports
`'active'` as the previous value at that point — so the two hooks agree in
this case. They diverge when the tracked value is re-*set* to its own
current value from outside (a parent passing a new but equal string, an
object recreated each render but deep-equal to the last one under a custom
comparator) — `usePrevious` would report that same value as "previous" too
(since it just mirrors the literal prior render), while
`usePreviousDistinct` correctly continues reporting the last *genuinely
different* value, since a same-value re-set was never treated as a change
in the first place.

The two internal refs (`currentRef` tracking the last known value,
`previousRef` only updated when a real change is detected) are what make
this distinction possible — a single ref, updated unconditionally every
render like `usePrevious` does, has no way to tell "the value changed" apart
from "the value was re-set to itself."

## Custom equality for objects and arrays

`Object.is` (the default `compare`) uses reference equality, which treats
every new object or array literal as different even if its contents are
identical — exactly right for primitives, but often not what's wanted for
derived objects that get recreated each render with the same logical
content. Passing a custom comparator handles that case:

```jsx
function shallowEqual(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  return aKeys.length === bKeys.length && aKeys.every((k) => a[k] === b[k]);
}

function FilterPanel({ filters }) {
  // filters is a new object each render, but usePreviousDistinct with
  // shallowEqual only advances "previous" when the actual field values differ.
  const previousFilters = usePreviousDistinct(filters, shallowEqual);
  // ...
}
```

## Detecting the very first genuine change

Because `previousRef` is initialized to `value` itself, `previousStatus !==
status` (as in the `StatusIndicator` example above) is `false` on the very
first render, correctly reporting "no change yet" rather than a change
from an undefined or null initial state — there's no need for a separate
`isFirstRender` flag to suppress a false-positive "changed" signal on
mount.

## Relationship to plain usePrevious

Both hooks exist in this submission set because they solve genuinely
different problems, not because one supersedes the other: reach for
`usePrevious` when "whatever was there last render" is the actual
semantic (undo/redo history, animation interpolation from a literal prior
frame), and `usePreviousDistinct` when "the last time this value actually
changed" is what matters (deriving a transition/highlight effect, change
detection for analytics). Using the wrong one for a given case produces
subtly incorrect behavior rather than an outright bug, which is worth
being deliberate about at the call site.
