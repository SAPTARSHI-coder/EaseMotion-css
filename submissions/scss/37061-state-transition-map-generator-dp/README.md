# State Transition Map Generator

## Overview

Interactive components — buttons, forms, dialogs, loading workflows — usually move through a small, well-defined set of states, and the valid transitions between those states (idle → loading, loading → success, loading → error) tend to get re-declared by hand with attribute selectors every time a new component needs them. That repetition invites drift: a component might allow a transition that was never meant to exist, or forget one that was.

State Transition Map Generator lets developers declare valid state relationships once, as a single Sass map, and generates the corresponding `[data-state="..."][data-next="..."]` selectors at compile time. Only the transitions explicitly declared in the map are ever generated, so the CSS is a direct, verifiable reflection of the state machine it represents. Everything resolves during Sass compilation — the output is plain, framework-agnostic CSS with no runtime cost.

## Features

- Declarative state relationship map shared across a project
- Generates `[data-state][data-next]` selectors only for explicitly declared transitions
- Configurable state/next attribute names
- `transition-map()` lookup for reading valid transitions from any state
- `state-exists()` helper for checking whether a state is defined
- `add-state()` helper for extending a state map with override warnings
- Compile-time validation for invalid, empty, and undefined-target state maps
- Optional circular (self-loop) transition warning
- No animations, keyframes, or transitions generated
- Zero external dependencies, framework agnostic

## File Structure

- `_state-transition-map-generator.scss` — the utility (maps, functions, mixin)
- `README.md` — documentation

## API

### `$state-map` (map)

The default state relationship map used when no explicit map is passed to a function or mixin. Each key is a state name; each value is either a single target state or a list of target states.

```scss
$state-map: (
  idle: (loading),
  loading: (
    success,
    error,
  ),
  success: (idle),
  error: (idle),
);
```

### `state-exists($state, $map: $state-map)`

Returns `true` if the given state is a key in the map, `false` otherwise.

```scss
state-exists(loading); // true
state-exists(paused);  // false
```

### `transition-map($state, $map: $state-map)`

Returns the list of valid target states for a given state. Errors if the state is not defined in the map.

```scss
transition-map(loading);
// (success, error)
```

### `add-state($map, $name, $targets)`

Returns a new map with a state added or overridden. Warns if the state name already exists in the map before overriding it.

```scss
$state-map: add-state($state-map, entering, (entered));
```

### `validate-state-map($map: $state-map)`

Validates a state map, erroring on a non-map input, an empty map, or a transition that targets a state not defined in the map. Warns on any state that transitions directly to itself. Runs automatically whenever `state-transition-map()` is included.

### `state-transition-map($map: $state-map, $state-attr: 'data-state', $next-attr: 'data-next')` (mixin)

Generates one selector block per declared transition, in the form `[data-state="from"][data-next="to"]`. The content block receives the `from` and `to` state names via `@content`.

```scss
@include state-transition-map($state-map) using ($from, $to) {
  cursor: pointer;
}
```

## Example

**Input state map**

```scss
$state-map: (
  idle: (loading),
  loading: (
    success,
    error,
  ),
  success: (idle),
  error: (idle),
  entering: (entered),
  exiting: (exited),
);
```

**Generated transition selectors**

```
[data-state="idle"][data-next="loading"]
[data-state="loading"][data-next="success"]
[data-state="loading"][data-next="error"]
[data-state="success"][data-next="idle"]
[data-state="error"][data-next="idle"]
[data-state="entering"][data-next="entered"]
[data-state="exiting"][data-next="exited"]
```

**Generated CSS**

```scss
@include state-transition-map($state-map) using ($from, $to) {
  pointer-events: none;
}
```

```css
[data-state="idle"][data-next="loading"] {
  pointer-events: none;
}

[data-state="loading"][data-next="success"] {
  pointer-events: none;
}

[data-state="loading"][data-next="error"] {
  pointer-events: none;
}

[data-state="success"][data-next="idle"] {
  pointer-events: none;
}

[data-state="error"][data-next="idle"] {
  pointer-events: none;
}

[data-state="entering"][data-next="entered"] {
  pointer-events: none;
}

[data-state="exiting"][data-next="exited"] {
  pointer-events: none;
}
```

**Transition lookup example**

```scss
$targets: transition-map(loading);
// (success, error)
```

## Validation

- **Undefined state detection** — every target listed for a state is checked against the map's own keys with `map-has-key()`; a target that isn't itself a defined state raises an `@error` naming both the missing state and the state that referenced it.
- **Duplicate state handling** — `add-state()` emits an `@warn` whenever the state name being added already exists in the map, so overriding a state definition is always an explicit, visible action rather than a silent one.
- **Compile-time warnings** — `validate-state-map()` raises an `@error` for a non-map input or an empty map, and this validation runs automatically the moment `state-transition-map()` is included, so a broken state map is caught before any selectors are generated.
- **Optional circular transition validation** — if a state lists itself as one of its own valid targets (a direct self-loop), `validate-state-map()` emits an `@warn` flagging the state, without blocking compilation, since a self-transition may occasionally be intentional.

## Example Use Cases

- Buttons with idle/hover/pressed/disabled style transitions
- Forms moving between untouched, invalid, valid, and submitting states
- Dialogs and modals transitioning between opening, open, and closing states
- Loading workflows (idle → loading → success/error)
- Larger UI state machines with many interdependent states
- Design systems that need a single source of truth for valid state transitions

## Why This Utility?

- **Reduces repetitive transition mapping** — one declarative map replaces hand-written `[data-state][data-next]` selectors scattered across a codebase.
- **Improves state consistency** — because only explicitly declared transitions are generated, and undefined targets are rejected at compile time, the CSS can never drift from the intended state machine.
- **Framework agnostic** — compiles to plain attribute selectors with no dependency on any JavaScript framework or state library.
- **Reusable** — the same state map, lookup functions, and mixin work across any component or project that needs state-driven styling.
- **Compile-time only** — all validation, lookup, and selector generation happen during Sass compilation; no animation, keyframe, or transition code is generated, and nothing is computed in the browser.
