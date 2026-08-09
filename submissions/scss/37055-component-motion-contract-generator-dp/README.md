# Component Motion Contract Generator

## Overview

A motion contract is a declarative definition of every interaction and lifecycle state a component can be in, hover, focus, active, disabled, loading, entering, exiting, and how each maps to a selector. Authoring these selectors by hand for every component becomes repetitive and inconsistent across a codebase, since each author picks a slightly different attribute or class convention. This utility generates a component's full set of state selectors from a single configuration map at compile time, so every component follows the same contract with no hand-written repetition.

## Features

- Declarative component configuration with a `selector` and a list of `states`
- Automatic selector generation for common states: hover, focus, active, disabled, loading, entering, exiting
- Per-state selector overrides so any state can map to a custom pattern
- Support for arbitrary custom states beyond the built-in set
- `@content` hooks for both the whole contract and each individual state
- Compile-time validation with `@error` and `@warn`
- Framework-agnostic plain CSS output
- Fully modular API with no duplicated logic

## File Structure

- _component-motion-contract-generator.scss
- README.md

## API

### `$motion-state-selectors`

A map of default state names to selector patterns, using a leading `&` to indicate the pattern attaches to the component selector. Override or extend it globally, or pass a local override map to `motion-contract()`/`motion-state()`.

### `component-selector($component)`

Validates a component map and returns its `selector` value.

```scss
$selector: component-selector($button);
```

### `motion-state($state, $overrides: ())`

Generates a single state selector nested under the current selector context, resolving the pattern from `$overrides`, then `$motion-state-selectors`, then falling back to `&[data-state="..."]` for unknown states. Passes the resolved state name to `@content`.

```scss
.btn {
  @include motion-state(loading) using ($state) {
    cursor: wait;
  }
}
```

### `motion-contract($component, $overrides: ())`

Validates a full component configuration and generates every declared state selector nested under the component's own selector. Accepts an optional override map for custom selector patterns.

```scss
@include motion-contract($button) using ($state) {
  @if $state == loading {
    cursor: wait;
  }
}
```

## Example

Component configuration:

```scss
$button: (
  selector: ".btn",
  states: (
    hover,
    focus,
    active,
    disabled,
    loading,
    entering,
    exiting,
  ),
);
```

Usage with overrides:

```scss
@include motion-contract(
    $button,
    (
      loading: "&.is-loading",
      disabled: '&[aria-disabled="true"]',
      focus: "&:focus-visible",
    )
  )
  using ($state) {
  opacity: 1;
}
```

Generated selectors:

```
.btn:hover
.btn:focus-visible
.btn:active
.btn[aria-disabled="true"]
.btn.is-loading
.btn[data-state="entering"]
.btn[data-state="exiting"]
```

Generated CSS:

```css
.btn:hover {
  opacity: 1;
}
.btn:focus-visible {
  opacity: 1;
}
.btn:active {
  opacity: 1;
}
.btn[aria-disabled="true"] {
  opacity: 1;
}
.btn.is-loading {
  opacity: 1;
}
.btn[data-state="entering"] {
  opacity: 1;
}
.btn[data-state="exiting"] {
  opacity: 1;
}
```

## Validation

- **Missing selector detection**: a component map without a `selector` key, or with an empty value, raises an `@error` before any selectors are generated.
- **Duplicate state detection**: repeated entries in a component's `states` list are detected and reported with `@warn`, and only generated once.
- **Invalid configuration detection**: a component argument that isn't a map, or one missing the required `states` key or with an empty state list, raises an `@error` describing exactly what is missing.

## Example Use Cases

- Buttons
- Forms
- Cards
- Dialogs
- Navigation
- Design systems

## Why This Utility?

It eliminates repetitive, hand-written state selectors by generating them from one declarative configuration per component. Centralizing state-to-selector mapping encourages a consistent, reusable component architecture across a design system instead of ad hoc conventions per file. The utility is framework agnostic, produces only plain CSS, is reusable across any number of components through configuration alone, and operates entirely at compile time with zero runtime cost.
