# Motion Validator

## Overview

Motion Validator provides a reusable SCSS mixin, `motion-validate`, for validating common animation configuration values at compile time. It does not emit CSS declarations; it only raises helpful Sass errors when invalid values are supplied.

## Parameters

| Parameter          | Type                 | Default | Description                            |
| ------------------ | -------------------- | ------- | -------------------------------------- |
| `$duration`        | Time                 | `null`  | Animation duration to validate.        |
| `$delay`           | Time                 | `null`  | Animation delay to validate.           |
| `$iteration-count` | Number or `infinite` | `null`  | Animation iteration count to validate. |
| `$direction`       | Keyword              | `null`  | Animation direction to validate.       |
| `$fill-mode`       | Keyword              | `null`  | Animation fill mode to validate.       |

## Validation Rules

- `$duration` must be a time value and cannot be negative.
- `$delay` must be a time value and cannot be negative.
- `$iteration-count` must be a positive number or `infinite`; zero, negative numbers, and non-numeric values are rejected.
- `$direction` must be one of `normal`, `reverse`, `alternate`, or `alternate-reverse`.
- `$fill-mode` must be one of `none`, `forwards`, `backwards`, or `both`.

## Example Usage

```scss
@use "motion-validator" as *;

@include motion-validate(
  $duration: 400ms,
  $delay: 100ms,
  $iteration-count: 2,
  $direction: alternate,
  $fill-mode: both
);
```

```scss
@include motion-validate($duration: -200ms);
```

Produces:

```scss
error: Animation duration cannot be negative.;
```

## Why Motion Validator?

Compile-time validation catches invalid animation values before CSS is generated, giving developers faster feedback and clearer failure messages. This helps prevent subtle motion bugs from reaching production stylesheets while keeping animation utilities focused and reusable.
