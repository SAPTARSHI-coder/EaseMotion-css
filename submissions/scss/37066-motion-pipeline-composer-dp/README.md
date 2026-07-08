# Motion Pipeline Composer

## Overview

Motion Pipeline Composer is a compile-time SCSS utility for building reusable
motion compositions out of small, ordered stages. Instead of hand-writing the
same groups of motion-related declarations across components, developers
register named "stages" once and then assemble them, in any order, into a
"pipeline". At compile time the pipeline is resolved into a single merged set
of declarations for the selector it is included into.

This encourages:

- Reusable motion composition, where a stage (e.g. a positioning layer or a
  timing layer) is defined once and reused across many components.
- Compile-time stage orchestration, where the order and contents of a
  pipeline are fully resolved by Sass before any CSS is emitted — there is no
  runtime cost.
- Reduced duplicated motion workflows, since teams stop copy-pasting the same
  declaration blocks between buttons, cards, modals, and other components.

The utility is purely a composition layer. It does not define keyframes,
transitions, or any hardcoded motion effect — what each stage contains is
entirely up to the developer registering it.

## Features

- Configurable, ordered pipelines built from a simple list of stage names.
- Central stage registry shared across a project.
- Per-call stage overrides without mutating the shared registry.
- Sequential composition with `@content` support for additional customization.
- Compile-time validation with `@warn` and `@error` for common mistakes.
- Framework agnostic — works with any CSS/Sass project.
- Zero runtime cost — everything resolves during compilation.

## File Structure

- `_motion-pipeline-composer.scss` — the utility implementation.
- `README.md` — this documentation.

## API

### `register-stage($name, $declarations)`

Registers a reusable stage in the global `$motion-stages` registry.

- `$name` — string identifier for the stage.
- `$declarations` — map of CSS property/value pairs the stage contributes.
- Returns the updated `$motion-stages` map.

```scss
$motion-stages: register-stage(
  base,
  (
    will-change: transform,
    transform-origin: center,
  )
);
```

### `pipeline-stage($name, $overrides: ())`

Resolves the effective declarations for a single stage, checking `$overrides`
first and falling back to the shared `$motion-stages` registry.

- `$name` — the stage name to resolve.
- `$overrides` — optional map of stage overrides.
- Returns a map of declarations, or raises an error if the stage is
  undefined.

```scss
$emphasis: pipeline-stage(emphasis);
```

### `compose-pipeline($pipeline, $overrides: ())`

Resolves an entire pipeline into a single merged map of declarations, in the
order the stages are listed. Later stages take precedence over earlier ones
when they share a property.

- `$pipeline` — list of stage names.
- `$overrides` — optional map of stage overrides applied only for this call.
- Returns a merged map of declarations.

```scss
$merged: compose-pipeline((base, emphasis));
```

### `motion-pipeline($pipeline, $overrides: ())`

Mixin that composes a pipeline with `compose-pipeline()` and outputs the
resulting declarations into the current selector. Supports `@content` for
appending additional rules after the composed declarations.

- `$pipeline` — list of stage names, executed sequentially.
- `$overrides` — optional map of per-call stage overrides.

```scss
.card {
  @include motion-pipeline((base, emphasis, interaction)) {
    cursor: pointer;
  }
}
```

## Example

**Stage registry**

```scss
$motion-stages: register-stage(
  base,
  (
    will-change: transform,
    transform-origin: center,
  )
);

$motion-stages: register-stage(
  emphasis,
  (
    transform: scale(1.02),
  )
);

$motion-stages: register-stage(
  interaction,
  (
    cursor: pointer,
    outline: none,
  )
);

$motion-stages: register-stage(
  completion,
  (
    transform: scale(1),
  )
);
```

**Pipeline definition**

```scss
$pipeline: (base, emphasis, interaction, completion);

.button {
  @include motion-pipeline($pipeline);
}
```

**Stage override**

```scss
.button--subtle {
  @include motion-pipeline(
    $pipeline,
    (
      emphasis: (
        transform: scale(1.01),
      ),
    )
  );
}
```

**Generated CSS**

```css
.button {
  will-change: transform;
  transform-origin: center;
  transform: scale(1);
  cursor: pointer;
  outline: none;
}

.button--subtle {
  will-change: transform;
  transform-origin: center;
  transform: scale(1);
  cursor: pointer;
  outline: none;
}
```

Note that `transform` reflects whichever stage sets it last in pipeline
order — in this example `completion` runs after `emphasis`, so its value
wins.

## Validation

- **Undefined stage detection** — `pipeline-stage()` raises `@error` when a
  stage name is not present in either the override map or `$motion-stages`.
- **Duplicate stage detection** — `compose-pipeline()` tracks stage names it
  has already processed and raises `@warn` when a stage appears more than
  once in `$pipeline`, since it will be composed again.
- **Invalid pipeline detection** — `compose-pipeline()` raises `@error` when
  `$pipeline` is empty or when it is a map instead of a list of stage names.
- **Compile-time warnings** — `register-stage()` raises `@warn` when a stage
  name is re-registered, so accidental overwrites of the shared registry are
  visible during compilation. Invalid override values (non-map entries) and
  invalid override map types raise `@error` in `pipeline-stage()` and
  `compose-pipeline()` respectively.

## Example Use Cases

- Component libraries that need a consistent, reusable motion vocabulary
  across many components.
- Design systems that want to standardize how motion layers are named and
  combined.
- Reusable UI workflows shared across teams or product surfaces.
- Dashboards with many interactive widgets that share the same interaction
  and completion stages.
- Forms where focus, validation, and completion states benefit from shared
  motion stages.
- Enterprise applications that need predictable, auditable motion
  composition across a large codebase.

## Why This Utility?

- Reduces repetitive composition by letting teams define a motion stage once
  and reuse it anywhere a pipeline references it.
- Encourages reusable motion workflows through a shared stage registry
  instead of ad-hoc, component-specific declarations.
- Framework agnostic — it produces plain CSS declarations and has no
  dependency on any specific markup, component model, or JavaScript runtime.
- Reusable by design — pipelines, stages, and overrides can be composed
  differently per component without duplicating declaration logic.
- Compile-time only — all composition, validation, and merging happens while
  Sass compiles, so there is no added runtime cost or JavaScript required.
